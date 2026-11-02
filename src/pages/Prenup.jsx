import { useEffect, useState } from 'react'
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react'
import Divider from '../components/Divider'
import LightboxImage from '../components/LightboxImage'

const prenupPhotos = import.meta.glob('../assets/prenup/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})
const photoEntries = Object.entries(prenupPhotos)
const slideshowPhotos = photoEntries
  .map(([path, src]) => {
    const match = path.match(/prenup-(pacific-cebu-resort|taiwan|montebello)-(\d+)\.(jpg|jpeg|png|webp|avif)$/)
    if (!match) return null

    const locations = {
      'pacific-cebu-resort': 'Pacific Cebu Resort',
      taiwan: 'Taiwan',
      montebello: 'Montebello Hotel Cebu',
    }

    return {
      src,
      location: locations[match[1]],
      locationOrder: { 'pacific-cebu-resort': 0, taiwan: 1, montebello: 2 }[match[1]],
      photoNumber: Number(match[2]),
    }
  })
  .filter((photo) => photo !== null)
  .sort((first, second) => {
    return first.locationOrder - second.locationOrder
      || first.photoNumber - second.photoNumber
  })
const photos = photoEntries
  .filter(([path]) => !/prenup-(pacific-cebu-resort|taiwan|montebello)-\d+\.(jpg|jpeg|png|webp|avif)$/.test(path))
  .map(([, src]) => src)

function PrenupSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const activePhoto = slideshowPhotos[activeIndex]

  useEffect(() => {
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (reducedMotion?.matches) setIsAutoplayPaused(true)
  }, [])

  useEffect(() => {
    if (isAutoplayPaused) return undefined

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideshowPhotos.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [activeIndex, isAutoplayPaused])

  function showPhoto(index) {
    setActiveIndex((index + slideshowPhotos.length) % slideshowPhotos.length)
  }

  return (
    <LazyMotion features={domAnimation}>
      <section className="prenup-slideshow-section" aria-labelledby="prenup-slideshow-heading">
        <h2 id="prenup-slideshow-heading">Prenup Locations</h2>
        <div className="prenup-slideshow" role="region" aria-label="Prenup photos slideshow" aria-roledescription="carousel">
          <div className="prenup-slide-viewport">
            <AnimatePresence initial={false}>
              <m.div
                key={activePhoto.src}
                className="prenup-slide-content"
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <LightboxImage
                  src={activePhoto.src}
                  alt={`${activePhoto.location} prenup photo ${activePhoto.photoNumber}`}
                  className="prenup-slide-image"
                />
              </m.div>
            </AnimatePresence>
            <button
            type="button"
            className="prenup-slide-control previous"
            onClick={() => showPhoto(activeIndex - 1)}
            aria-label="Previous prenup photo"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m15 18-6-6 6-6" />
            </svg>
            </button>
            <button
            type="button"
            className="prenup-slide-control next"
            onClick={() => showPhoto(activeIndex + 1)}
            aria-label="Next prenup photo"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" />
            </svg>
            </button>
          </div>
          <div className="prenup-slide-meta">
            <p className="prenup-slide-count" aria-live={isAutoplayPaused ? 'polite' : 'off'}>
              {activePhoto.location} · {activeIndex + 1} / {slideshowPhotos.length}
            </p>
            <button
            type="button"
            className="prenup-autoplay-control"
            onClick={() => setIsAutoplayPaused((paused) => !paused)}
            aria-label={isAutoplayPaused ? 'Play slideshow' : 'Pause slideshow'}
            title={isAutoplayPaused ? 'Play slideshow' : 'Pause slideshow'}
          >
            {isAutoplayPaused ? (
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m8 5 11 7-11 7z" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M8 5h3v14H8zM15 5h3v14h-3z" />
              </svg>
            )}
            </button>
          </div>
          <input
            className="prenup-slide-range"
            type="range"
            min="0"
            max={slideshowPhotos.length - 1}
            value={activeIndex}
            onChange={(event) => setActiveIndex(Number(event.target.value))}
            aria-label="Choose a prenup photo"
            aria-valuetext={`${activePhoto.location}, photo ${activePhoto.photoNumber}; ${activeIndex + 1} of ${slideshowPhotos.length}`}
            style={{
              '--slide-progress': `${slideshowPhotos.length > 1
                ? (activeIndex / (slideshowPhotos.length - 1)) * 100
                : 0}%`,
            }}
          />
        </div>
      </section>
    </LazyMotion>
  )
}

export default function Prenup() {
  return (
    <section className="page prenup">
      <h1>Prenup Photos</h1>
      <Divider />
      <p className="prenup-intro">
        A few of our favorite moments from our prenup shoot.
      </p>

      {slideshowPhotos.length > 0 && <PrenupSlideshow />}

      {photos.length > 0 && (
        <>
          {slideshowPhotos.length > 0 && <h2 className="prenup-subheading">More Prenup Photos</h2>}
          <div className="prenup-grid">
            {photos.map((src, index) => (
              <LightboxImage
                key={src}
                src={src}
                alt={`Prenup photo ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </>
      )}

      {photos.length === 0 && slideshowPhotos.length === 0 && (
        <p className="prenup-empty">
          Prenup photos coming soon, add images to src/assets/prenup/
        </p>
      )}
    </section>
  )
}
