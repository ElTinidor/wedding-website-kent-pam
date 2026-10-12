import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Divider from '../components/Divider'

const prenupPhotos = import.meta.glob('../assets/prenup/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})
const photos = Object.values(prenupPhotos)

export default function Prenup() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!selectedPhoto) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedPhoto(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedPhoto])

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
          {photos.map((src, index) => (
            <button
              key={src}
              type="button"
              className="prenup-photo-button"
              onClick={() => setSelectedPhoto(src)}
              aria-label={`View prenup photo ${index + 1} full size`}
            >
              <img src={src} alt={`Prenup photo ${index + 1}`} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}

      {selectedPhoto && (
        createPortal(
          <div
            className="prenup-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Full-size prenup photo"
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelectedPhoto(null)
            }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="prenup-lightbox-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close full-size photo"
            >
              ×
            </button>
            <img src={selectedPhoto} alt="Full-size prenup photo" />
          </div>,
          document.body,
        )
      )}
    </section>
  )
}
