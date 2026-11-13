import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import { mailto } from '../data.js'

const tiles = [
  { to: '/about', n: '01', title: 'Who We Are', text: 'Exceptional residential care for children and young people in the North West of England.' },
  { to: '/who-we-help', n: '02', title: 'Who We Help', text: 'A safe, supportive place for young people who cannot be cared for by their families.' },
  { to: '/our-homes', n: '03', title: 'Our Homes', text: 'Therapeutic homes away from home, staffed by trained therapists.' },
  { to: '/our-people', n: '04', title: 'Our People', text: 'Experienced, highly trained professionals dedicated to brighter futures.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
        <div className="container hero-inner">
          <div>
            <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Welcome to Voices Homes</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
              Inspirational environments for young people to <em>grow &amp; thrive.</em>
            </motion.h1>
            <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              Residential care for children and young people in the North West of England, built around the unique needs of every individual.
            </motion.p>
            <motion.div className="actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <a href={mailto} className="btn btn-gold">Get in touch</a>
              <Link to="/about" className="btn btn-ghost">Who we are</Link>
            </motion.div>
          </div>
          <motion.div className="hero-card" animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}>
            <img src="/logo.png" alt="" />
            <div className="stat-row">
              <div><strong>North West</strong><span>of England</span></div>
              <div><strong>Therapeutic</strong><span>care model</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container section">
        <Reveal>
          <span className="eyebrow dark">Explore</span>
          <h2>Everything begins with the young person.</h2>
        </Reveal>
        <div className="tiles">
          {tiles.map((t, i) => (
            <Reveal key={t.to} delay={i * 0.08}>
              <Link to={t.to} className="tile">
                <span className="tile-n">{t.n}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <span className="arrow">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="container band-inner">
          <Reveal>
            <h2>Customised care plans, life-changing outcomes.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>We create customised care plans that result in life-changing positive outcomes for the young people in our care, meeting their nurturing, social, emotional and moral needs.</p>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
