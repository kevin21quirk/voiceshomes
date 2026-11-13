import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'

export default function OurPeople() {
  return (
    <>
      <PageHero eyebrow="Our people" title="Experienced, skilled and dedicated.">
        Our team has extensive experience in caring for and safeguarding children and young people in residential care homes.
      </PageHero>
      <section className="container section prose-grid">
        <Reveal className="card">
          <h3>Knowledge &amp; dedication</h3>
          <p>Our highly trained and skilled team has the knowledge and dedication needed to support young people from diverse backgrounds and help them reach their full potential and achieve their dreams.</p>
        </Reveal>
        <Reveal className="card gold" delay={0.1}>
          <h3>A brighter future</h3>
          <p>We are dedicated to creating positive outcomes and a brighter future for the children and young people in our care.</p>
        </Reveal>
      </section>
      <CTA />
    </>
  )
}
