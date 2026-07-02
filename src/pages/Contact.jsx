import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import Reveal from '../components/Reveal.jsx'
import imgLivingDining from '../assets/images/living-dining-suite.jpg'
import './Contact.css'

const INTEREST_OPTIONS = [
  'Finding a Furnished Property (West Pine Properties)',
  'Property Management (West Pine Partners)',
  'Insurance / Relocation Housing',
  'Other Inquiry',
]

const INITIAL_FORM = {
  interest: '',
  name: '',
  email: '',
  phone: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form) {
  const errors = {}
  if (!form.interest) errors.interest = 'Please choose what your inquiry is about.'
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = 'That email address does not look right.'
  }
  if (!form.message.trim()) errors.message = 'Please tell us a little about what you need.'
  return errors
}

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // TODO: wire to backend/email service. For now the form only
    // validates client-side and confirms receipt without sending.
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  const fieldClass = (name) => `field${errors[name] ? ' field--error' : ''}`

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Start the Conversation"
        lead="Looking for a furnished home, or thinking about handing off the management of yours? Call or write, and you'll hear back from an owner, not a queue."
        image={imgLivingDining}
        imageAlt=""
      />

      <section className="section">
        <div className="container contact__grid">
          {/* Left — contact info */}
          <Reveal>
            <span className="eyebrow">Contact Information</span>
            <h2 className="h-card" style={{ marginBottom: 28 }}>
              Reach Us Directly
            </h2>
            <ul className="contact__info">
              <li>
                <span className="contact__label">Phone</span>
                <a href="tel:14034727138">403.472.7138</a>
              </li>
              <li>
                <span className="contact__label">Email</span>
                <a href="mailto:Info@westpinestrategies.com">Info@westpinestrategies.com</a>
              </li>
              <li>
                <span className="contact__label">Location</span>
                <span>Calgary, Alberta</span>
              </li>
              <li>
                <span className="contact__label">Follow Us</span>
                <span className="contact__socials">
                  {/* Social profiles are not live yet — placeholder anchors on purpose. */}
                  <a href="#" onClick={(e) => e.preventDefault()}>Instagram</a>
                  <a href="#" onClick={(e) => e.preventDefault()}>Facebook</a>
                  <a href="#" onClick={(e) => e.preventDefault()}>LinkedIn</a>
                </span>
              </li>
            </ul>
            <PlaceholderImage label="Map — Calgary Service Area" aspect="4/3" />
          </Reveal>

          {/* Right — inquiry form */}
          <Reveal delay={150}>
            <span className="eyebrow">Send an Inquiry</span>
            <h2 className="h-card" style={{ marginBottom: 28 }}>
              Tell Us What You Need
            </h2>

            {submitted ? (
              <div className="form-success" role="status">
                <h3>Thank you.</h3>
                <p>Your message has been received, and we'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={fieldClass('interest')}>
                  <label htmlFor="interest">I'm interested in</label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                  >
                    <option value="">Select one</option>
                    {INTEREST_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.interest && <span className="field__error">{errors.interest}</span>}
                </div>

                <div className={fieldClass('name')}>
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
                  {errors.name && <span className="field__error">{errors.name}</span>}
                </div>

                <div className="contact__form-row">
                  <div className={fieldClass('email')}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="field__error">{errors.email}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={fieldClass('message')}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="field__error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn--primary">
                  Send Inquiry
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact
