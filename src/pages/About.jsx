import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'

export default function About() {
  return (
    <>
      <PageHero eyebrow="Who we are" title="Exceptional residential care, shaped around each young person.">
        Voices Homes is dedicated to providing exceptional residential care for children and young people in the North West of England.
      </PageHero>
      <section className="container section prose-grid">
        <Reveal className="card">
          <h3>Our approach</h3>
          <p>We understand the unique needs of each individual and strive to create customised care plans that result in life-changing positive outcomes for the young people in our care.</p>
        </Reveal>
        <Reveal className="card gold" delay={0.1}>
          <h3>Our purpose</h3>
          <p>Providing inspirational environments for young people to grow and thrive.</p>
        </Reveal>
      </section>
      <CTA />
    </>
  )
}
