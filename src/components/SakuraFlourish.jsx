import sakuraSheet from '../assets/vecteezy_spring-set-of-sakura-flowers-isolated-on-white-background_56709932.jpg'

export default function SakuraFlourish() {
  return (
    <div
      className="sakura-flourish"
      style={{ backgroundImage: `url(${sakuraSheet})` }}
      role="img"
      aria-label="Sakura branch illustration"
    />
  )
}
