import PlaceholderImage from './PlaceholderImage.jsx'
import Reveal from './Reveal.jsx'

/** Shared dark hero for the four subpages. */
function PageHero({ eyebrow, title, lead, photoLabel, children }) {
  return (
    <section className="hero hero--page">
      <PlaceholderImage label={photoLabel} variant="dark" fill />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h-display">{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  )
}

export default PageHero
