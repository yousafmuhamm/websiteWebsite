import Button from '../components/Button.jsx'
import CtaBand from '../components/CtaBand.jsx'
import PageHero from '../components/PageHero.jsx'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { PROPERTIES } from '../data/properties.js'

const IDEAL_FOR = [
  'Insurance claims',
  'Home renovations',
  'Corporate relocations',
  'Executive stays',
  'Extended family visits',
]

const RELOCATION_REASONS = [
  'Flood restoration',
  'Fire recovery',
  'Home renovations',
  'Insurance claims',
  'Corporate relocations',
]

function Properties() {
  return (
    <>
      <PageHero
        eyebrow="West Pine Properties"
        title="Luxury Furnished Accommodations"
        lead="A true home away from home during insurance claims, renovations, corporate relocations and long executive stays."
        photoLabel="Hero Photo — Furnished Property Interior"
      >
        <div className="btn-row">
          <Button to="/contact" variant="gold">
            Request Accommodations
          </Button>
        </div>
      </PageHero>

      {/* Intro split */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Ideal For</span>
            <h2 className="h-section">A Home Away From Home, Fully Furnished</h2>
            <ul className="ideal-list" style={{ maxWidth: 420 }}>
              {IDEAL_FOR.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="stack">
            <p className="lead">
              If you're out of your home for a claim or a renovation, or in town on a long work
              assignment, a hotel gets old fast.
            </p>
            <p>
              Our properties come furnished down to the dishes. Real kitchens, real laundry,
              quiet streets. You bring your suitcase, and the rest is already done. Most of our
              guests stay for weeks or months, and the homes are set up for exactly that.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Full portfolio (dark band) */}
      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The Portfolio</span>
            <h2 className="h-section">Experience the West Pine Standard</h2>
            <p className="lead">
              Every home is professionally cleaned, inspected and restocked between stays.
            </p>
          </Reveal>
          <div className="grid-3">
            {PROPERTIES.map((property, i) => (
              <Reveal key={property.id} delay={(i % 3) * 120}>
                <PropertyCard property={property} imageVariant="dark" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & relocation */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">For Insurance &amp; Relocation Clients</span>
            <h2 className="h-section">Comfortable Housing When Life Doesn't Go According to Plan</h2>
            <p style={{ marginTop: 24 }}>
              A flood, a fire, a renovation that runs long. When you suddenly need somewhere to
              live, three months in a hotel is nobody's plan. We set families and professionals
              up in fully furnished homes during:
            </p>
            <ul className="ideal-list">
              {RELOCATION_REASONS.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
            <p style={{ marginBottom: 32 }}>
              We also work directly with insurers and relocation coordinators, so the paperwork
              side stays simple too.
            </p>
            <Button to="/contact" variant="primary">
              Request Accommodations
            </Button>
          </Reveal>
          <Reveal delay={150}>
            <PlaceholderImage label="Photo — Move-In Day, Furnished Home" aspect="4/5" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Let's Find Your Next Property"
        copy="Tell us what you need and when you need it. If we have the right home available, we can usually have you in within days."
        buttons={[
          { label: 'Request Accommodations', to: '/contact', variant: 'gold' },
          { label: 'Explore Property Management', to: '/partners', variant: 'ghost-dark' },
        ]}
      />
    </>
  )
}

export default Properties
