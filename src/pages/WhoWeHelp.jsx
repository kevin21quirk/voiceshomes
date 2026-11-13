import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Split from '../components/Split.jsx'
import CTA from '../components/CTA.jsx'

export default function WhoWeHelp() {
  return (
    <>
      <PageHero eyebrow="Who we help" title="A safe and supportive place to call home." image="/images/friends.jpg" alt="A group of young friends together outdoors">
        Our homes are for young people who, for various reasons, cannot be cared for by their families.
      </PageHero>
      <Split image="/images/support-talk.jpg" alt="Two people having an open conversation" eyebrow="Empowering" title="Helping young people reach their full potential.">
        <p className="body">Our team of highly trained and experienced staff work to empower these young people, helping them make positive changes and reach their full potential.</p>
      </Split>
      <section className="container prose-grid">
        <Reveal className="card gold">
          <h3>Safe &amp; supportive</h3>
          <p>Every young person deserves stability, understanding and the space to grow. Our homes are built to provide exactly that.</p>
        </Reveal>
        <Reveal className="card" delay={0.1}>
          <h3>Belonging</h3>
          <p>Friendships, routines and shared moments help a house feel like a home.</p>
        </Reveal>
      </section>
      <CTA />
    </>
  )
}
