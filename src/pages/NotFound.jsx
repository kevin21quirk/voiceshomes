import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="Page not found.">
      <Link to="/" className="btn btn-gold">Back home</Link>
    </PageHero>
  )
}
