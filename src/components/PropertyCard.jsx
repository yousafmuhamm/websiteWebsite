import { Link } from 'react-router-dom'
import PlaceholderImage from './PlaceholderImage.jsx'
import SiteImage from './SiteImage.jsx'
import './PropertyCard.css'

/**
 * Renders the property's real photo when it has one (with a slow zoom on
 * card hover); otherwise falls back to the labeled placeholder.
 * imageVariant only affects the placeholder fallback.
 */
function PropertyCard({ property, imageVariant = 'light' }) {
  const { name, location, beds, baths, sleeps, blurb, photoLabel, image, alt } = property

  return (
    <article className="prop-card">
      {image ? (
        <SiteImage src={image} alt={alt} aspect="4/3" zoom />
      ) : (
        <PlaceholderImage label={photoLabel} variant={imageVariant} aspect="4/3" />
      )}
      <div className="prop-card__body">
        <span className="prop-card__location">{location}</span>
        <h3 className="prop-card__name">{name}</h3>
        <p className="prop-card__specs">
          {beds} Bed · {baths} Bath · Sleeps {sleeps}
        </p>
        <p className="prop-card__blurb">{blurb}</p>
        <Link to="/contact" className="text-link">
          Inquire on Availability
        </Link>
      </div>
    </article>
  )
}

export default PropertyCard
