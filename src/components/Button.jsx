import { Link } from 'react-router-dom'

/**
 * variant: "primary" | "gold" | "ghost-dark" | "ghost-light"
 * Renders a router Link when `to` is given, an anchor when `href` is given,
 * otherwise a plain button.
 */
function Button({ variant = 'primary', to, href, type = 'button', children, ...rest }) {
  const className = `btn btn--${variant}`

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  )
}

export default Button
