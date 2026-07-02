import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/partners', label: 'Partners' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the panel on navigation and lock body scroll while it is open.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <div className="header__top">
          <a className="header__phone" href="tel:14034727138">
            403.472.7138
          </a>

          <Link to="/" className="header__wordmark" aria-label="West Pine Strategies, home">
            <span className="header__wordmark-name">West Pine</span>
            <span className="header__wordmark-sub">Strategies</span>
          </Link>

          <div className="header__actions">
            <Link to="/contact" className="header__cta">
              Book a Consultation
            </Link>
            <button
              type="button"
              className="header__menu-btn"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>

        <nav className="header__nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Off-canvas mobile panel */}
      <div
        className={`mobile-nav__backdrop${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div id="mobile-nav" className={`mobile-nav${menuOpen ? ' is-open' : ''}`}>
        <div className="mobile-nav__head">
          <span className="mobile-nav__brand">West Pine</span>
          <button type="button" className="mobile-nav__close" onClick={() => setMenuOpen(false)}>
            Close
          </button>
        </div>
        <nav aria-label="Mobile">
          <ul className="mobile-nav__links">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-nav__foot">
          <Link to="/contact" className="btn btn--gold">
            Book a Consultation
          </Link>
          <a href="tel:14034727138">403.472.7138</a>
          <a href="mailto:Info@westpinestrategies.com">Info@westpinestrategies.com</a>
        </div>
      </div>
    </header>
  )
}

export default Header
