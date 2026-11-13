import { useEffect, useRef, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const RATIO = 467 / 182
const LOGO = '/logovh.png'

export default function Intro({ onDone }) {
  const logo = useAnimationControls()
  const bg = useAnimationControls()
  const [shine, setShine] = useState(false)
  const [size] = useState(() => {
    const w = Math.min(460, window.innerWidth * 0.78)
    return { w, h: w / RATIO }
  })
  const done = useRef(false)

  useEffect(() => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const cx = (vw - size.w) / 2
    const cy = (vh - size.h) / 2
    document.body.style.overflow = 'hidden'
    let cancelled = false

    const run = async () => {
      const w0 = size.w * 0.3
      logo.set({ x: vw + 20, y: (vh - w0 / RATIO) / 2, width: w0, opacity: 1 })
      await logo.start({ x: cx, y: cy, width: size.w, transition: { duration: 1.8, ease: [0.45, 0, 0.2, 1] } })
      if (cancelled) return
      setShine(true)
      await new Promise((r) => setTimeout(r, 1500))
      if (cancelled) return
      const target = document.getElementById('header-logo')?.getBoundingClientRect()
      const dock = target
        ? { x: target.left, y: target.top, width: target.width }
        : { x: cx, y: -size.h, width: size.w * 0.3 }
      bg.start({ opacity: 0, transition: { duration: 0.9, delay: 0.25 } })
      await logo.start({ ...dock, transition: { duration: 1.1, ease: [0.65, 0, 0.35, 1] } })
      finish()
    }

    const finish = () => {
      if (done.current) return
      done.current = true
      document.body.style.overflow = ''
      onDone()
    }

    run()
    return () => {
      cancelled = true
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="intro" aria-hidden="true">
      <motion.div className="intro-bg" initial={{ opacity: 1 }} animate={bg} />
      <motion.div
        className="intro-logo"
        style={{ width: size.w, aspectRatio: `${RATIO}`, opacity: 0 }}
        animate={logo}
      >
        <img src={LOGO} alt="" />
        {shine && <span className="shine" style={{ WebkitMaskImage: `url(${LOGO})`, maskImage: `url(${LOGO})` }} />}
      </motion.div>
    </div>
  )
}
