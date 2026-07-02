import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

/**
 * Closing call-to-action band, reused on every page.
 * buttons: [{ label, to, variant? }]
 */
function CtaBand({ title, copy, buttons, showContact = false }) {
  return (
    <section className="section section--dark cta-band">
      <div className="container container--narrow" style={{ textAlign: 'center' }}>
        <Reveal>
          <span className="eyebrow">Get In Touch</span>
          <h2 className="h-section">{title}</h2>
          <p className="lead" style={{ marginTop: 20, marginBottom: 36 }}>
            {copy}
          </p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            {buttons.map(({ label, to, variant = 'gold' }) => (
              <Button key={label} to={to} variant={variant}>
                {label}
              </Button>
            ))}
          </div>
          {showContact && (
            <p className="cta-band__contact">
              <a href="tel:14034727138">403.472.7138</a>
              <span aria-hidden="true"> · </span>
              <a href="mailto:Info@westpinestrategies.com">Info@westpinestrategies.com</a>
              <span aria-hidden="true"> · </span>
              <span>Calgary, Alberta</span>
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export default CtaBand
