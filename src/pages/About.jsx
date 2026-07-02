import CtaBand from '../components/CtaBand.jsx'
import IconFeatureGrid from '../components/IconFeatureGrid.jsx'
import PageHero from '../components/PageHero.jsx'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import Reveal from '../components/Reveal.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import imgExteriorModern from '../assets/images/exterior-dusk-modern.jpg'
import { HOME_TESTIMONIALS } from '../data/testimonials.js'
import { WHY_WEST_PINE } from '../data/features.js'

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built on Trust, Hospitality & Experience"
        lead="A family-owned business, treating every property as our own and every guest as family."
        image={imgExteriorModern}
        imageAlt=""
      />

      {/* Our story */}
      <section className="section">
        <div className="container split">
          <Reveal>
            {/* Stays a placeholder on purpose: needs the actual founders, not stock. */}
            <PlaceholderImage label="Photo — Founders Portrait" aspect="4/5" frameless />
          </Reveal>
          <Reveal delay={150}>
            <span className="eyebrow">Our Story</span>
            <h2 className="h-section">A Boutique Approach to Luxury Property Services</h2>
            <div className="stack" style={{ marginTop: 24 }}>
              <p>
                West Pine Strategies is a family-owned company based in Calgary. We run a small
                portfolio of premium furnished homes, and we manage luxury properties for owners
                across the city.
              </p>
              <p>
                The company started with a simple observation: guests remember how a stay felt,
                and owners remember how little they had to worry. So we built West Pine around
                both. Furnished homes that actually feel like homes, and management that owners
                don't have to think about.
              </p>
              <p>
                We're hands-on because that's the only way we know how to run it. We do the
                walkthroughs ourselves. We answer our own phone. Every property gets treated as
                if it were our own, and every guest like family. That personal commitment is what
                sets West Pine apart.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">Our Values</span>
            <h2 className="h-section">What We Hold Ourselves To</h2>
          </Reveal>
          <IconFeatureGrid items={WHY_WEST_PINE} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--alt">
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

      <CtaBand
        title="Let's Start the Conversation"
        copy="Looking for a furnished home, or thinking about handing off the management of yours? Call or write, and you'll hear back from an owner, not a queue."
        buttons={[{ label: 'Book a Consultation', to: '/contact', variant: 'gold' }]}
        showContact
      />
    </>
  )
}

export default About
