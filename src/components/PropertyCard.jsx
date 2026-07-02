import { Link } from 'react-router-dom'
import PlaceholderImage from './PlaceholderImage.jsx'
import './PropertyCard.css'

/**
 * imageVariant should match the section it sits on:
 * "light" on cream sections, "dark" on pine bands.
 */
function PropertyCard({ property, imageVariant = 'light' }) {
  const { name, location, beds, baths, sleeps, blurb, photoLabel } = property

  return (
    <article className="prop-card">
      <PlaceholderImage label={photoLabel} variant={imageVariant} aspect="4/3" />
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
