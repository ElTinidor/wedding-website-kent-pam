import { QRCodeSVG } from 'qrcode.react'
import Divider from '../components/Divider'
import weddingAttireGuide from '../assets/weddingAttireGuide.jpg'
import principalSponsorGuide from '../assets/principalSponsor.jpg'
import guestAttireGuide from '../assets/guestAttire.jpg'
import churchPhoto from '../assets/16.jpeg'
import ballroomPhoto from '../assets/17.jpeg'
import giftQr from '../assets/gift-qr.png'
import metrobankGiftQr from '../assets/gift-qr-metrobank.jpg'

const schedule = [
  {
    time: '2:00 PM - 5:00 PM',
    title: 'Wedding Ceremony',
    note: 'After the ceremony, guests may proceed to the reception venue.',
  },
  {
    time: '5:00 PM - 7:00 PM',
    title: 'Cocktail Hour',
    note: 'Enjoy pica-pica and have your photos taken by our roving photographer.',
  },
  {
    time: '7:00 PM - 11:00 PM',
    title: 'Reception Program',
    note: 'Dinner, games, family dances, and celebration.',
  },
]

const venues = [
  {
    label: 'Ceremony',
    name: 'National Shrine of St. Joseph',
    address: 'Mandaue City, Cebu, Philippines',
    mapQuery: 'National Shrine of St. Joseph Mandaue Cebu',
    image: churchPhoto,
    imageAlt: 'Exterior of the National Shrine of St. Joseph',
  },
  {
    label: 'Reception',
    name: 'Montebello Villa Hotel',
    room: 'Luis Y Merceditas Ballroom',
    address: 'Banilad, Cebu City, Philippines',
    mapQuery: 'Montebello Villa Hotel Banilad Cebu',
    image: ballroomPhoto,
    imageAlt: 'Luis Y Merceditas Ballroom at Montebello Villa Hotel',
  },
]

const faqs = [
  {
    q: 'What should I wear?',
    a: "We'd love to see you in semi-formal to formal attire. Please do not wear white, ivory, and other shades of white, those are reserved for the bride and groom. Refer to our attire guide below for inspiration.",
    attireGuide: true,
  },
  {
    q: 'Do you have a gift registry?',
    a: "Your presence is truly the greatest gift. If you'd like to give something more, a monetary gift is warmly appreciated and will help us start our new chapter together. Simply scan the QR code below.",
    qr: true,
  },
  {
    q: 'Is parking available at the venues?',
    a: 'Yes, both the church and reception venue have parking available for guests. We recommend arriving a little early to settle in comfortably.',
  },
  {
    q: 'When should I RSVP by?',
    a: 'Please RSVP through our RSVP tab as soon as you can so we can finalize headcounts and seating. We appreciate your prompt response!',
  },
]

export default function Details() {
  return (
    <section className="page details">
      <h1>Wedding Details</h1>
      <Divider />

      <nav className="details-jump">
        <a href="#program">Program</a>
        <a href="#venue">Venue</a>
        <a href="#faq">FAQ</a>
      </nav>

      <div id="program" className="details-section">
        <h2 className="details-heading">Program</h2>
        <ol className="timeline">
          {schedule.map((item) => (
            <li key={item.time}>
              <span className="time">{item.time}</span>
              <div className="schedule-content">
                <span className="title">{item.title}</span>
                {item.note && <span className="schedule-note">{item.note}</span>}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div id="venue" className="details-section">
        <h2 className="details-heading">Venue</h2>
        <div className="venue-list">
          {venues.map((v) => (
            <div className="venue-card" key={v.name}>
              <span className="venue-label">{v.label}</span>
              <h3>{v.name}</h3>
              {v.room && <p className="venue-room">{v.room}</p>}
              <p>{v.address}</p>
              {v.image && <img className="venue-image" src={v.image} alt={v.imageAlt} />}
              <div className="venue-map">
                <iframe
                  title={v.name}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(v.mapQuery)}&output=embed`}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                className="venue-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
              <div className="venue-qr">
                <QRCodeSVG
                  value={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.mapQuery)}`}
                  size={110}
                  fgColor="#2e2015"
                  bgColor="#f0e4d3"
                />
                <span>Scan for map</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="faq" className="details-section">
        <h2 className="details-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
              {item.attireGuide && (
                <div className="attire-guide-images">
                  <img src={weddingAttireGuide} alt="Wedding attire guide" />
                  <img src={principalSponsorGuide} alt="Principal sponsor attire guide" />
                  <img src={guestAttireGuide} alt="Guest attire guide" />
                </div>
              )}
              {item.qr && (
                <div className="gift-qr-options">
                  <figure className="gift-qr-option">
                    <figcaption>MariBank</figcaption>
                    <img src={giftQr} alt="MariBank gift QR code" className="gift-qr" />
                  </figure>
                  <figure className="gift-qr-option">
                    <figcaption>Metrobank</figcaption>
                    <img src={metrobankGiftQr} alt="Metrobank gift QR code" className="gift-qr" />
                  </figure>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
