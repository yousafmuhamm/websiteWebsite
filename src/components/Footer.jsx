import { Link } from 'react-router-dom'
import './Footer.css'

const YEAR = new Date().getFullYear()

/* Social profiles are not live yet, so these stay as placeholder anchors. */
const SOCIALS = ['Instagram', 'Facebook', 'LinkedIn']

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__wordmark">
            West Pine
            <span>Strategies</span>
          </p>
          <p className="footer__blurb">
            Premium furnished accommodations and luxury property management. Family-owned and
            based in Calgary.
          </p>
        </div>

        <nav aria-label="Footer">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__list">
            <li><a href="tel:14034727138">403.472.7138</a></li>
            <li><a href="mailto:Info@westpinestrategies.com">Info@westpinestrategies.com</a></li>
            <li>Calgary, Alberta</li>
          </ul>
        </div>

        <div>
          <h4 className="footer__heading">Follow</h4>
          <ul className="footer__list">
            {SOCIALS.map((name) => (
              <li key={name}>
                <a href="#" onClick={(e) => e.preventDefault()} aria-label={`${name} (coming soon)`}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>© {YEAR} West Pine Strategies. All rights reserved.</span>
          <span>Calgary, Alberta</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
