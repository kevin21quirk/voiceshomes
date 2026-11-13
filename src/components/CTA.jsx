import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

export default function CTA() {
  return (
    <section className="container">
      <Reveal className="cta">
        <h2>Need to make contact?</h2>
        <p>We are always here to help and answer any questions you may have.</p>
        <Link to="/contact" className="btn btn-gold">Contact us</Link>
      </Reveal>
    </section>
  )
}
