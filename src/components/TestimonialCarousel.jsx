import { useEffect, useState } from 'react'
import './TestimonialCarousel.css'

const INTERVAL_MS = 6000

/**
 * Auto-advancing quote carousel with dot controls.
 * Clicking a dot jumps to that quote and restarts the timer
 * (the effect re-runs whenever `index` changes).
 */
function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length < 2) return undefined
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % items.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [index, items.length])

  const active = items[index]

  return (
    <div className="carousel">
      <span className="carousel__mark" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="carousel__slide" key={index}>
        <p className="carousel__quote">{active.quote}</p>
        <footer>
          <span className="carousel__name">{active.name}</span>
          <span className="carousel__role">{active.role}</span>
        </footer>
      </blockquote>

      {items.length > 1 && (
        <div className="carousel__dots" role="tablist" aria-label="Testimonials">
          {items.map((item, i) => (
            <button
              key={`${item.role}-${i}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1} of ${items.length}`}
              className={`carousel__dot${i === index ? ' is-active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TestimonialCarousel
