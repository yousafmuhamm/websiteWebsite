import './SiteImage.css'

/**
 * Real photography slot. No border, no radius — large images bleed to the
 * edge of their container. Set zoom for a slow scale on hover (used by
 * cards via their own :hover rules).
 */
function SiteImage({ src, alt, aspect = '4/3', zoom = false, className = '' }) {
  return (
    <div
      className={`img-frame${zoom ? ' img-frame--zoom' : ''}${className ? ` ${className}` : ''}`}
      style={{ aspectRatio: aspect }}
    >
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

export default SiteImage
