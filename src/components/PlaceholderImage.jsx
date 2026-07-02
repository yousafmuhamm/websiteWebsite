import './PlaceholderImage.css'

/**
 * Diagonal-hatched stand-in for real photography.
 * label   — what photo belongs here, shown in a centered caption chip
 * variant — "light" | "dark"
 * aspect  — CSS aspect-ratio value, e.g. "4/5". Ignored when fill is true.
 * fill    — absolutely fills its (positioned) parent, for hero backdrops
 */
function PlaceholderImage({ label, variant = 'light', aspect = '4/3', fill = false }) {
  return (
    <div
      className={`ph ph--${variant}${fill ? ' ph--fill' : ''}`}
      style={fill ? undefined : { aspectRatio: aspect }}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span className="ph__chip">{label}</span>
    </div>
  )
}

export default PlaceholderImage
