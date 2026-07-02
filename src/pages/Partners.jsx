import Button from '../components/Button.jsx'
import CtaBand from '../components/CtaBand.jsx'
import IconFeatureGrid from '../components/IconFeatureGrid.jsx'
import PageHero from '../components/PageHero.jsx'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import Reveal from '../components/Reveal.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import { PARTNER_TESTIMONIALS } from '../data/testimonials.js'
import { WHY_WEST_PINE } from '../data/features.js'

const IDEAL_FOR = [
  'Luxury homeowners',
  'Investment property owners',
  'Seasonal residents',
  'Busy professionals',
]

const OWNER_CHECKLIST = [
  'Listing creation and optimization',
  'Dynamic pricing strategies',
  'Guest screening and communication',
  'Check-in and check-out management',
  'Professional cleaning coordination',
  'Property inspections',
  'Maintenance oversight',
  'Monthly reporting',
]

function Partners() {
  return (
    <>
      <PageHero
        eyebrow="West Pine Partners"
        title="Luxury Property Management"
        lead="We run every aspect of your short-term rental, from guest communication and bookings to cleaning, maintenance and revenue."
        photoLabel="Hero Photo — Managed Luxury Property"
      >
        <div className="btn-row">
          <Button to="/contact" variant="gold">
            Book a Consultation
          </Button>
        </div>
      </PageHero>

      {/* Intro split */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Ideal For</span>
            <h2 className="h-section">Boutique-Level Management for Discerning Owners</h2>
            <ul className="ideal-list" style={{ maxWidth: 420 }}>
              {IDEAL_FOR.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="stack">
            <p className="lead">
              Your property is a significant asset. It should perform like one, without becoming
              your second job.
            </p>
            <p>
              We keep our portfolio deliberately small. That means your home gets real attention:
              we know its quirks, we know its guests, and we notice when something is off before
              it becomes a problem. You get one point of contact, and it's an owner of this
              company.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Full owners section (dark band) */}
      <section className="section section--dark">
        <div className="container split--reverse split">
          <Reveal>
            <PlaceholderImage
              label="Photo — Housekeeping Detail, Managed Property"
              variant="dark"
              aspect="4/5"
            />
          </Reveal>
          <Reveal delay={150}>
            <span className="eyebrow">What We Handle</span>
            <h2 className="h-section">Turn Your Property Into a High-Performing Asset</h2>
            <p style={{ marginTop: 24 }}>
              A luxury short-term rental is a real operation. Pricing moves week to week, guests
              have questions at 11pm, and the cleaning has to be perfect every single time. West
              Pine Partners takes all of it off your plate:
            </p>
            <ul className="checklist">
              {OWNER_CHECKLIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="serif-line" style={{ marginBottom: 32 }}>
              You enjoy the revenue. We handle the work.
            </p>
            <Button to="/contact" variant="gold">
              Book a Consultation
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Why West Pine */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">Why Choose West Pine</span>
            <h2 className="h-section">The West Pine Difference</h2>
          </Reveal>
          <IconFeatureGrid items={WHY_WEST_PINE} />
        </div>
      </section>

      {/* Owner testimonials */}
      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">From Our Owners</span>
            <h2 className="h-section">Trusted With Significant Properties</h2>
          </Reveal>
          <Reveal>
            <TestimonialCarousel items={PARTNER_TESTIMONIALS} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Let's Talk About Your Property"
        copy="A consultation is a conversation, not a sales pitch. We'll look at your property, your goals and the numbers, and tell you honestly what we think it can do."
        buttons={[
          { label: 'Book a Consultation', to: '/contact', variant: 'gold' },
          { label: 'View Our Properties', to: '/properties', variant: 'ghost-dark' },
        ]}
      />
    </>
  )
}

export default Partners
