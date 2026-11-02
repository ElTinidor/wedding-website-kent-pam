import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const MIN_ZOOM = 1
const MAX_ZOOM = 3
const ZOOM_STEP = 0.5

export default function LightboxImage({
  src,
  alt,
  className = '',
  loading,
  decoding,
  mirrored = false,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(MIN_ZOOM)
  const triggerRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const trigger = triggerRef.current
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeViewer()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      trigger?.focus()
    }
  }, [isOpen])

  function closeViewer() {
    setIsOpen(false)
    setZoom(MIN_ZOOM)
  }

  function changeZoom(amount) {
    setZoom((current) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current + amount)))
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="photo-lightbox-trigger"
        onClick={() => setIsOpen(true)}
        aria-label={`Open full-size image: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={`${className}${mirrored ? ' is-mirrored' : ''}`.trim()}
          loading={loading}
          decoding={decoding}
        />
      </button>
      {isOpen && createPortal(
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Full-size image: ${alt}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeViewer()
          }}
        >
          <div className="photo-lightbox-toolbar" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => changeZoom(-ZOOM_STEP)}
              disabled={zoom === MIN_ZOOM}
              aria-label="Zoom out"
            >
              −
            </button>
            <span aria-live="polite">{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              onClick={() => changeZoom(ZOOM_STEP)}
              disabled={zoom === MAX_ZOOM}
              aria-label="Zoom in"
            >
              +
            </button>
            <button type="button" onClick={() => setZoom(MIN_ZOOM)} disabled={zoom === MIN_ZOOM}>
              Fit
            </button>
            <button
              ref={closeRef}
              type="button"
              className="photo-lightbox-close"
              onClick={closeViewer}
              aria-label="Close image viewer"
            >
              ×
            </button>
          </div>
          <div
            className="photo-lightbox-stage"
            onClick={(event) => {
              if (event.target === event.currentTarget) closeViewer()
            }}
          >
            <img
              src={src}
              alt={alt}
              className={`photo-lightbox-full-image${mirrored ? ' is-mirrored' : ''}`}
              style={{
                maxWidth: `${96 * zoom}vw`,
                maxHeight: `${86 * zoom}svh`,
              }}
              onDoubleClick={() => setZoom((current) => current === MIN_ZOOM ? 2 : MIN_ZOOM)}
            />
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}
