import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Split from '../components/Split.jsx'
import CTA from '../components/CTA.jsx'

const needs = ['Nurturing', 'Social', 'Emotional', 'Moral']

export default function OurHomes() {
  return (
    <>
      <PageHero eyebrow="Our homes" title="A true therapeutic home away from home." image="/images/living-room.jpg" alt="A bright, comfortable living room">
        Each residential care home is staffed by trained therapists and dedicated, experienced professionals.
      </PageHero>
      <section className="container section">
        <Reveal>
          <h2>Meeting every need</h2>
          <p className="body">Our team works tirelessly to empower young people, meeting their nurturing, social, emotional and moral needs. Our goal is to help each individual make positive changes and reach their full potential.</p>
        </Reveal>
        <div className="pills">
          {needs.map((n, i) => (
            <Reveal key={n} delay={i * 0.08} className="pill">{n}</Reveal>
          ))}
        </div>
        <Reveal className="notice">
          <strong>Update in progress</strong>
          <span>We are currently in the process of updating our properties to better serve our residents.</span>
        </Reveal>
      </section>
      <Split image="/images/cooking.jpg" alt="Young people and carers cooking a meal together" eyebrow="Home life" title="Shared meals, shared moments." flip>
        <p className="body">Everyday routines like cooking and eating together help young people feel settled, valued and part of a family-style community.</p>
        <p className="note">Illustrative stock images.</p>
      </Split>
      <CTA />
    </>
  )
}
