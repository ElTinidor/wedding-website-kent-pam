import Divider from '../components/Divider'

const prenupPhotos = import.meta.glob('../assets/prenup/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})
const photos = Object.values(prenupPhotos)

export default function Prenup() {
  return (
    <section className="page prenup">
      <h1>Prenup Photos</h1>
      <Divider />
      <p className="prenup-intro">
        A few of our favorite moments from our prenup shoot.
      </p>

      {photos.length === 0 ? (
        <p className="prenup-empty">
          Prenup photos coming soon, add images to src/assets/prenup/
        </p>
      ) : (
        <div className="prenup-grid">
          {photos.map((src) => (
            <img key={src} src={src} alt="Prenup" loading="lazy" decoding="async" />
          ))}
        </div>
      )}
    </section>
  )
}
