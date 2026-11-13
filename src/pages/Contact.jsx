import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { CONTACT, mailto } from '../data.js'

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Need to make contact?" image="/images/conversation.jpg" alt="A friendly conversation">
        We are always here to help and answer any questions you may have.
      </PageHero>
      <section className="container section form-section">
        <Reveal><EnquiryForm /></Reveal>
      </section>
      <section className="container contact-grid">
        <Reveal className="card">
          <h3>Contact details</h3>
          <a className="row" href={`tel:${CONTACT.phoneHref}`}><span>Phone</span>{CONTACT.phone}</a>
          {CONTACT.emails.map((e) => (
            <a key={e} className="row" href={`mailto:${e}`}><span>Email</span>{e}</a>
          ))}
          <a href={mailto} className="btn btn-gold">Send message</a>
        </Reveal>
        <Reveal className="map-card" delay={0.1}>
          <iframe
            title="Voices Homes head office location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-info">
            <span className="eyebrow dark">Head office</span>
            <h3>Voices Homes</h3>
            <address>
              Hollinwood Business Centre<br />
              Albert St, Hollinwood<br />
              Failsworth, Oldham<br />
              OL8 3QL, UK
            </address>
            <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer" className="btn btn-blue">Get directions</a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
