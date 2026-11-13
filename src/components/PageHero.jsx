export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="page-hero">
      <div className="blob b1" /><div className="blob b2" />
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children && <p className="lead">{children}</p>}
      </div>
    </section>
  )
}
