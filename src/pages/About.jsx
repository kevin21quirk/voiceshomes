import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Split from '../components/Split.jsx'
import CTA from '../components/CTA.jsx'

export default function About() {
  return (
    <>
      <PageHero eyebrow="Who we are" title="Exceptional residential care, shaped around each young person." image="/images/laughing.jpg" alt="Two young people laughing together in a sunny field">
        Voices Homes is dedicated to providing exceptional residential care for children and young people in the North West of England.
      </PageHero>
      <Split image="/images/conversation.jpg" alt="A young person chatting warmly with a carer" eyebrow="Our approach" title="Every individual is unique.">
        <p className="body">We understand the unique needs of each individual and strive to create customised care plans that result in life-changing positive outcomes for the young people in our care.</p>
      </Split>
      <section className="container prose-grid">
        <Reveal className="card gold">
          <h3>Our purpose</h3>
          <p>Providing inspirational environments for young people to grow and thrive.</p>
        </Reveal>
        <Reveal className="card" delay={0.1}>
          <h3>Our region</h3>
          <p>Based in Oldham, we care for children and young people across the North West of England.</p>
        </Reveal>
      </section>
      <CTA />
    </>
  )
}
