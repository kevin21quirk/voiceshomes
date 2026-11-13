import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, image, alt = '', children }) {
  return (
    <section className="page-hero">
      <div className="blob b1" /><div className="blob b2" />
      <div className={`container ${image ? 'with-image' : ''}`}>
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {children && <p className="lead">{children}</p>}
        </div>
        {image && (
          <motion.img className="hero-photo" src={image} alt={alt} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} />
        )}
      </div>
    </section>
  )
}
