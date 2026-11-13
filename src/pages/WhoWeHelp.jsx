import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'

export default function WhoWeHelp() {
  return (
    <>
      <PageHero eyebrow="Who we help" title="A safe and supportive place to call home.">
        Our homes are for young people who, for various reasons, cannot be cared for by their families.
      </PageHero>
      <section className="container section prose-grid">
        <Reveal className="card">
          <h3>Empowering young people</h3>
          <p>Our team of highly trained and experienced staff work to empower these young people, helping them make positive changes and reach their full potential.</p>
        </Reveal>
        <Reveal className="card gold" delay={0.1}>
          <h3>Safe &amp; supportive</h3>
          <p>Every young person deserves stability, understanding and the space to grow. Our homes are built to provide exactly that.</p>
        </Reveal>
      </section>
      <CTA />
    </>
  )
}
