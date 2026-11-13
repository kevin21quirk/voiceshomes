import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { routes } from '../App.jsx'
import { CONTACT } from '../data.js'

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="shell">
      <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="brand" aria-label="Voices Homes home">
          <img src="/logo.png" alt="Voices Homes" />
        </Link>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {routes.filter((r) => r.path !== '/contact').map((r) => (
            <NavLink key={r.path} to={r.path} end={r.path === '/'}>
              {r.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-gold nav-cta">Get in touch</Link>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="brand-light"><img src="/logo.png" alt="Voices Homes" /></div>
            <p>Providing inspirational environments for young people to grow &amp; thrive.</p>
          </div>
          <div>
            <h4>Explore</h4>
            {routes.map((r) => <Link key={r.path} to={r.path}>{r.label}</Link>)}
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
            {CONTACT.emails.map((e) => <a key={e} href={`mailto:${e}`}>{e}</a>)}
            <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer">{CONTACT.address}</a>
          </div>
        </div>
        <div className="footer-base">© {new Date().getFullYear()} Voices Homes. All rights reserved.</div>
      </footer>
    </div>
  )
}
