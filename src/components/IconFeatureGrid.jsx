import Reveal from './Reveal.jsx'
import './IconFeatureGrid.css'

const ICONS = {
  home: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d="M5 14.5 16 5l11 9.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12.5V26h16V12.5" strokeLinejoin="round" />
      <path d="M13.5 26v-7h5v7" strokeLinejoin="round" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d="M5.5 23h21" strokeLinecap="round" />
      <path d="M7 23a9 9 0 0 1 18 0" strokeLinecap="round" />
      <path d="M16 14v-3.5" strokeLinecap="round" />
      <circle cx="16" cy="9" r="1.4" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d="M16 27s8.5-7.6 8.5-14A8.5 8.5 0 0 0 7.5 13c0 6.4 8.5 14 8.5 14Z" strokeLinejoin="round" />
      <circle cx="16" cy="13" r="3.25" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <rect x="7.5" y="6.5" width="17" height="20" strokeLinejoin="round" />
      <path d="M12 6.5V4.75h8V6.5" strokeLinejoin="round" />
      <path d="m11.75 17 3 3 5.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

/** items: [{ icon: keyof ICONS, title, text }] */
function IconFeatureGrid({ items }) {
  return (
    <div className="feature-grid">
      {items.map((item, i) => (
        <Reveal key={item.title} className="feature" delay={i * 100}>
          <span className="feature__icon">{ICONS[item.icon]}</span>
          <h3 className="feature__title">{item.title}</h3>
          <p className="feature__text">{item.text}</p>
        </Reveal>
      ))}
    </div>
  )
}

export default IconFeatureGrid
