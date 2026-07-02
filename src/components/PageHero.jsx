import PlaceholderImage from './PlaceholderImage.jsx'
import Reveal from './Reveal.jsx'

/**
 * Shared dark hero for the four subpages. Pass `image` (and `imageAlt`)
 * for real photography; without it the labeled placeholder renders.
 */
function PageHero({ eyebrow, title, lead, photoLabel, image, imageAlt = '', children }) {
  return (
    <section className="hero hero--page">
      {image ? (
        <img className="hero__img" src={image} alt={imageAlt} />
      ) : (
        <PlaceholderImage label={photoLabel} variant="dark" fill />
      )}
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
