import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import CtaBand from '../components/CtaBand.jsx'
import IconFeatureGrid from '../components/IconFeatureGrid.jsx'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import Reveal from '../components/Reveal.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import { FEATURED_PROPERTIES } from '../data/properties.js'
import { HOME_TESTIMONIALS } from '../data/testimonials.js'
import { WHY_WEST_PINE } from '../data/features.js'
import './Home.css'

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

const RELOCATION_REASONS = [
  'Flood restoration',
  'Fire recovery',
  'Home renovations',
  'Insurance claims',
  'Corporate relocations',
]

function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="hero">
        <PlaceholderImage label="Hero Photo — Signature Furnished Property" variant="dark" fill />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <Reveal>
            <span className="eyebrow">Calgary · Furnished Accommodations &amp; Property Management</span>
            <h1 className="h-display">
              Premium Furnished Accommodations &amp; Luxury Property Management
            </h1>
            <p className="lead">
              Fully furnished executive homes for the people who need them, and hands-on
              management for the owners who trust us with theirs. Family-owned, based in Calgary.
            </p>
            <div className="btn-row">
              <Button to="/properties" variant="gold">
                Find a Property
              </Button>
              <Button to="/partners" variant="ghost-dark">
                Partner With Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — Who we are */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Who We Are</span>
            <h2 className="h-section">A Boutique Approach to Luxury Property Services</h2>
            <div className="stack" style={{ marginTop: 24 }}>
              <p>
                West Pine Strategies is a family-owned company in Calgary. We do two things: we
                run a small portfolio of premium furnished homes, and we manage luxury properties
                for owners who would rather not deal with the day-to-day.
              </p>
              <p>
                Both sides of the business run on the same idea. Look after every property as if
                it were ours, and every guest as if they were staying with family.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <PlaceholderImage label="Photo — Furnished Living Room Detail" aspect="4/5" />
          </Reveal>
        </div>
      </section>

      {/* 3 — Our services */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">Our Services</span>
            <h2 className="h-section">Two Ways We Help</h2>
          </Reveal>
          <div className="grid-2">
            <Reveal className="svc-card">
              <span className="eyebrow">West Pine Properties</span>
              <h3 className="h-card">Luxury Furnished Accommodations</h3>
              <ul className="ideal-list">
                <li>Insurance claims</li>
                <li>Home renovations</li>
                <li>Corporate relocations</li>
                <li>Executive stays</li>
                <li>Extended family visits</li>
              </ul>
              <p>
                If you're out of your home for a claim or a renovation, or in town on a long work
                assignment, a hotel gets old fast. Our properties come furnished down to the
                dishes, so you can just live.
              </p>
              <Button to="/properties" variant="ghost-dark">
                Learn More
              </Button>
            </Reveal>
            <Reveal className="svc-card" delay={150}>
              <span className="eyebrow">West Pine Partners</span>
              <h3 className="h-card">Luxury Property Management</h3>
              <ul className="ideal-list">
                <li>Luxury homeowners</li>
                <li>Investment property owners</li>
                <li>Seasonal residents</li>
                <li>Busy professionals</li>
              </ul>
              <p>
                We run your short-term rental end to end: bookings, guest screening, cleaning,
                maintenance, pricing. You see the results in a monthly report instead of your
                inbox.
              </p>
              <Button to="/partners" variant="ghost-dark">
                Learn More
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 — Featured properties */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Featured Properties</span>
            <h2 className="h-section">Experience the West Pine Standard</h2>
            <p className="lead">A small portfolio, kept carefully and presented properly.</p>
          </Reveal>
          <div className="grid-3">
            {FEATURED_PROPERTIES.map((property, i) => (
              <Reveal key={property.id} delay={i * 120}>
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>
          <Reveal className="home__properties-cta">
            <Button to="/properties" variant="ghost-light">
              View All Properties
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 5 — For property owners (dark band) */}
      <section className="section section--dark">
        <div className="container split--reverse split">
          <Reveal>
            <PlaceholderImage label="Photo — Property Exterior at Dusk" variant="dark" aspect="4/5" />
          </Reveal>
          <Reveal delay={150}>
            <span className="eyebrow">For Property Owners</span>
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

      {/* 6 — Insurance & relocation */}
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
              Our goal is simple: a smooth move in, and a comfortable place to call home while
              you get back on your feet.
            </p>
            <Button to="/contact" variant="primary">
              Request Accommodations
            </Button>
          </Reveal>
          <Reveal delay={150}>
            <PlaceholderImage label="Photo — Family Settling Into Furnished Home" aspect="4/5" />
          </Reveal>
        </div>
      </section>

      {/* 7 — Why choose West Pine */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">Why Choose West Pine</span>
            <h2 className="h-section">The West Pine Difference</h2>
          </Reveal>
          <IconFeatureGrid items={WHY_WEST_PINE} />
        </div>
      </section>

      {/* 8 — Testimonials (dark band) */}
      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">Testimonials</span>
            <h2 className="h-section">Trusted By Guests &amp; Property Owners</h2>
          </Reveal>
          <Reveal>
            <TestimonialCarousel items={HOME_TESTIMONIALS} />
          </Reveal>
        </div>
      </section>

      {/* 9 — About the founders */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <PlaceholderImage label="Photo — The Founders, West Pine Strategies" aspect="4/5" />
          </Reveal>
          <Reveal delay={150}>
            <span className="eyebrow">About the Founders</span>
            <h2 className="h-section">Built on Trust, Hospitality &amp; Experience</h2>
            <div className="stack" style={{ marginTop: 24, marginBottom: 32 }}>
              <p>
                West Pine started with a simple observation: guests remember how a stay felt, and
                owners remember how little they had to worry. We built the company around both.
              </p>
              <p>
                We're hands-on because that's the only way we know how to run it. Every property
                gets treated as if it were our own, and every guest like family. That personal
                commitment is what sets West Pine apart.
              </p>
            </div>
            <Link to="/about" className="text-link">
              Our Story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 10 — Final CTA */}
      <CtaBand
        title="Let's Start the Conversation"
        copy="Looking for a furnished home, or thinking about handing off the management of yours? Call or write, and you'll hear back from an owner, not a queue."
        buttons={[
          { label: 'Find a Property', to: '/properties', variant: 'gold' },
          { label: 'Book a Consultation', to: '/contact', variant: 'ghost-dark' },
        ]}
        showContact
      />
    </>
  )
}

export default Home
