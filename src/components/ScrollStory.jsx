import { useEffect, useRef, useState } from 'react'
import './ScrollStory.css'

/**
 * OWO-style pinned-image scroll story. The image column sticks to the
 * viewport and crossfades between steps while the text column scrolls past.
 * Unlike Reveal, the observer stays live so steps re-trigger both ways.
 *
 * steps: [{ title, caption, items?: string[], image, alt }]
 * On narrow screens the sticky pane is hidden and each step shows its
 * own inline image instead.
 */
function ScrollStory({ steps, children }) {
  const [active, setActive] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.step))
          }
        })
      },
      { threshold: 0.5 },
    )

    stepRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [steps.length])

  return (
    <div className="story">
      <div className="story__text">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`story__step${i === active ? ' is-active' : ''}`}
            data-step={i}
            ref={(el) => {
              stepRefs.current[i] = el
            }}
          >
            <span className="story__index">
              {String(i + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
            </span>
            <h3 className="story__title">{step.title}</h3>
            {step.items && (
              <ul className="checklist checklist--single">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <p className="story__caption">{step.caption}</p>
            <img className="story__inline-img" src={step.image} alt={step.alt} loading="lazy" />
          </div>
        ))}
        {children && <div className="story__close">{children}</div>}
      </div>

      <div className="story__media" aria-hidden="true">
        <div className="story__frame">
          {steps.map((step, i) => (
            <img
              key={step.title}
              src={step.image}
              alt=""
              className={`story__img${i === active ? ' is-active' : ''}`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollStory
