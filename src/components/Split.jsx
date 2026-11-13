import Reveal from './Reveal.jsx'

export default function Split({ image, alt = '', flip, eyebrow, title, children }) {
  return (
    <section className="container section split-wrap">
      <div className={`split ${flip ? 'flip' : ''}`}>
        <Reveal className="split-img">
          <img src={image} alt={alt} loading="lazy" />
        </Reveal>
        <Reveal delay={0.1} className="split-text">
          {eyebrow && <span className="eyebrow dark">{eyebrow}</span>}
          <h2>{title}</h2>
          {children}
        </Reveal>
      </div>
    </section>
  )
}
