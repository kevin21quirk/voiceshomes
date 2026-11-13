import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { CONTACT, mailto } from '../data.js'

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Need to make contact?">
        We are always here to help and answer any questions you may have.
      </PageHero>
      <section className="container section contact-grid">
        <Reveal className="card">
          <h3>Contact details</h3>
          <a className="row" href={`tel:${CONTACT.phoneHref}`}><span>Phone</span>{CONTACT.phone}</a>
          {CONTACT.emails.map((e) => (
            <a key={e} className="row" href={`mailto:${e}`}><span>Email</span>{e}</a>
          ))}
          <a href={mailto} className="btn btn-gold">Send message</a>
        </Reveal>
        <Reveal className="card gold" delay={0.1}>
          <h3>Head office</h3>
          <p>{CONTACT.address}</p>
          <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer" className="btn btn-ghost dark">View on map</a>
        </Reveal>
      </section>
    </>
  )
}
