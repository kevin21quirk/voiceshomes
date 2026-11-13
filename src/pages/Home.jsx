import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import Split from '../components/Split.jsx'
import CTA from '../components/CTA.jsx'
import { mailto } from '../data.js'

const tiles = [
  { to: '/about', n: '01', title: 'Who We Are', text: 'Exceptional residential care for children and young people in the North West of England.', img: '/images/laughing.jpg' },
  { to: '/who-we-help', n: '02', title: 'Who We Help', text: 'A safe, supportive place for young people who cannot be cared for by their families.', img: '/images/friends.jpg' },
  { to: '/our-homes', n: '03', title: 'Our Homes', text: 'Therapeutic homes away from home, staffed by trained therapists.', img: '/images/living-room.jpg' },
  { to: '/our-people', n: '04', title: 'Our People', text: 'Experienced, highly trained professionals dedicated to brighter futures.', img: '/images/team-chat.jpg' },
]

const moments = [
  { img: '/images/cooking.jpg', label: 'Cooking together', cls: 'wide' },
  { img: '/images/conversation.jpg', label: 'One-to-one support' },
  { img: '/images/painting.jpg', label: 'Creative time' },
  { img: '/images/baking.jpg', label: 'Learning life skills', cls: 'wide' },
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
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <img className="hero-main" src="/images/hero-group.jpg" alt="Group of smiling young people together outdoors" />
            <motion.div className="float-chip c1" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}>
              <strong>North West</strong><span>of England</span>
            </motion.div>
            <motion.div className="float-chip c2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}>
              <strong>Therapeutic</strong><span>care model</span>
            </motion.div>
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
                <div className="tile-img"><img src={t.img} alt="" loading="lazy" /><span className="tile-n">{t.n}</span></div>
                <div className="tile-body">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <span className="arrow">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Split image="/images/support-talk.jpg" alt="Two people talking openly at a table" eyebrow="Our approach" title="Customised care plans, life-changing outcomes.">
        <p className="body">We create customised care plans that result in life-changing positive outcomes for the young people in our care, meeting their nurturing, social, emotional and moral needs.</p>
        <Link to="/our-homes" className="btn btn-blue">See our homes</Link>
      </Split>

      <section className="moments">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Life in our homes</span>
            <h2>A true home away from home.</h2>
            <p className="note">Illustrative stock images.</p>
          </Reveal>
          <div className="mosaic">
            {moments.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08} className={`moment ${m.cls || ''}`}>
                <img src={m.img} alt={m.label} loading="lazy" />
                <span>{m.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
