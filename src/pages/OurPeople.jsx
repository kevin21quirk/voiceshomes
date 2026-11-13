import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Split from '../components/Split.jsx'
import CTA from '../components/CTA.jsx'

export default function OurPeople() {
  return (
    <>
      <PageHero eyebrow="Our people" title="Experienced, skilled and dedicated." image="/images/team-chat.jpg" alt="Two colleagues chatting and smiling by a window">
        Our team has extensive experience in caring for and safeguarding children and young people in residential care homes.
      </PageHero>
      <Split image="/images/support-talk.jpg" alt="Two people in an open, honest conversation" eyebrow="Knowledge & dedication" title="Supporting young people from every background.">
        <p className="body">Our highly trained and skilled team has the knowledge and dedication needed to support young people from diverse backgrounds and help them reach their full potential and achieve their dreams.</p>
      </Split>
      <section className="container prose-grid">
        <Reveal className="card gold">
          <h3>A brighter future</h3>
          <p>We are dedicated to creating positive outcomes and a brighter future for the children and young people in our care.</p>
        </Reveal>
        <Reveal className="card" delay={0.1}>
          <h3>Safeguarding first</h3>
          <p>Experience in safeguarding is at the heart of everything our people do.</p>
        </Reveal>
      </section>
      <CTA />
    </>
  )
}
