import { useRef } from 'react'
import type { PointerEvent } from 'react'

type WizardPhotoProps = {
  src: string
  alt: string
  caption: string
  plate: string
  width: number
  height: number
}

export function WizardPhoto({ src, alt, caption, plate, width, height }: WizardPhotoProps) {
  const frame = useRef<HTMLDivElement>(null)

  const move = (event: PointerEvent<HTMLDivElement>) => {
    const element = frame.current
    if (!element) return
    const bounds = element.getBoundingClientRect()
    element.style.setProperty('--photo-x', ((event.clientX - bounds.left) / bounds.width - 0.5).toFixed(3))
    element.style.setProperty('--photo-y', ((event.clientY - bounds.top) / bounds.height - 0.5).toFixed(3))
  }

  const rest = () => {
    const element = frame.current
    if (!element) return
    element.style.setProperty('--photo-x', '0')
    element.style.setProperty('--photo-y', '0')
  }

  return (
    <figure className="wizard-photo">
      <div
        className="wizard-photo__frame"
        ref={frame}
        onPointerMove={move}
        onPointerLeave={rest}
      >
        <div className="wizard-photo__living">
          <img
            className="wizard-photo__misprint"
            src={src}
            alt=""
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
          <img
            className="wizard-photo__plate-image"
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
          />
          <span className="wizard-photo__grain" aria-hidden="true" />
        </div>
      </div>
      <figcaption>
        <span className="wizard-photo__number">Plate {plate}</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  )
}
