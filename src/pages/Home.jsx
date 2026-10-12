import { useEffect, useState } from 'react'
import { WEDDING_DATE } from '../lib/supabase'
import Divider from '../components/Divider'
import heroImg from '../assets/hero.jpg'

function getCountdown() {
  const diff = WEDDING_DATE.getTime() - Date.now()
  if (diff <= 0) return null
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function Home() {
  const [countdown, setCountdown] = useState(getCountdown())

  useEffect(() => {
    const id = setInterval(() => setCountdown(getCountdown()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="page home">
      <div className="hero-photo-wrap">
        <img src={heroImg} alt="Kenneth and Pamela" className="hero-photo" />
        <span className="hero-monogram">K&amp;P</span>
      </div>
      <p className="eyebrow">We're Getting Married</p>
      <h1>Kenneth &amp; Pamela</h1>
      <Divider />
      <p className="wedding-date">
        {WEDDING_DATE.toLocaleDateString(undefined, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      {countdown ? (
        <div className="countdown-box">
          <p className="countdown-label">Days Left Before We Say "I Do"</p>
          <div className="countdown-grid">
            <div className="countdown-unit">
              <span className="countdown-digit">{pad(countdown.days)}</span>
              <span className="countdown-unit-label">Days</span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-digit">{pad(countdown.hours)}</span>
              <span className="countdown-unit-label">Hours</span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-digit">{pad(countdown.minutes)}</span>
              <span className="countdown-unit-label">Minutes</span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-digit">{pad(countdown.seconds)}</span>
              <span className="countdown-unit-label">Seconds</span>
            </div>
          </div>
        </div>
      ) : (
        <p className="countdown">We're married! Thanks for celebrating with us.</p>
      )}
      <p className="home-note">
        We can't wait to celebrate this new chapter with the people we love most.
        RSVP, explore the program, and find everything you need for our big day above.
      </p>
    </section>
  )
}
