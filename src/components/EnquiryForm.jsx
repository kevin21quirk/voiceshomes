import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ROLES = ['Local authority / social worker', 'Parent or family member', 'Health or education professional', 'Other professional', 'Other']
const TYPES = ['Make a referral', 'Placement enquiry', 'General enquiry', 'Working with us', 'Something else']
const empty = { name: '', email: '', phone: '', role: '', enquiryType: '', message: '', website: '' }

export default function EnquiryForm() {
  const [f, setF] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [serverError, setServerError] = useState('')
  const [thanks, setThanks] = useState('')

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const validate = () => {
    const e = {}
    if (!f.name.trim()) e.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Please enter a valid email'
    if (!f.enquiryType) e.enquiryType = 'Please choose an option'
    if (!f.message.trim()) e.message = 'Please tell us how we can help'
    return e
  }

  const submit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    setStatus('sending')
    setServerError('')
    try {
      const r = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) })
      if (!r.ok) throw new Error()
      setThanks(f.name.trim().split(' ')[0])
      setF(empty)
      setStatus('idle')
    } catch {
      setStatus('idle')
      setServerError('Sorry, something went wrong sending your enquiry. Please try again or call us on (0161) 537-9624.')
    }
  }

  useEffect(() => {
    if (!thanks) return
    const onKey = (e) => e.key === 'Escape' && setThanks('')
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [thanks])

  const field = (k, label, props = {}) => (
    <label className={`field ${errors[k] ? 'has-error' : ''} ${props.wide ? 'wide' : ''}`}>
      <span>{label}</span>
      {props.children || <input value={f[k]} onChange={set(k)} {...props} />}
      {errors[k] && <em>{errors[k]}</em>}
    </label>
  )

  const select = (k, label, options, placeholder) =>
    field(k, label, {
      children: (
        <select value={f[k]} onChange={set(k)}>
          <option value="">{placeholder}</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ),
    })

  return (
    <>
      <form className="enquiry" onSubmit={submit} noValidate>
        <div className="form-head">
          <span className="eyebrow dark">Enquiry form</span>
          <h2>Tell us how we can help.</h2>
          <p className="body">Complete the form below and a member of our team will get back to you.</p>
        </div>
        <div className="form-grid">
          {field('name', 'Full name *', { type: 'text', autoComplete: 'name', placeholder: 'Your name' })}
          {field('email', 'Email address *', { type: 'email', autoComplete: 'email', placeholder: 'you@example.com' })}
          {field('phone', 'Phone number', { type: 'tel', autoComplete: 'tel', placeholder: 'Optional' })}
          {select('role', 'I am a...', ROLES, 'Select an option')}
          {select('enquiryType', 'Enquiry type *', TYPES, 'What is your enquiry about?')}
          <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.website} onChange={set('website')} />
          {field('message', 'Your message *', {
            wide: true,
            children: <textarea rows={5} value={f.message} onChange={set('message')} placeholder="Please share any details or specific requirements" />,
          })}
        </div>
        {serverError && <p className="form-error" role="alert">{serverError}</p>}
        <button className="btn btn-gold" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send enquiry'}
        </button>
      </form>

      <AnimatePresence>
        {thanks && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setThanks('')}>
            <motion.div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="thanks-title"
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: 'spring', damping: 22, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="blob b1" /><div className="blob b2" />
              <div className="modal-inner">
                <svg className="tick" viewBox="0 0 52 52" aria-hidden="true">
                  <motion.circle cx="26" cy="26" r="24" fill="none" stroke="#f5a623" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
                  <motion.path d="M14 27l8 8 16-17" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.45, delay: 0.5 }} />
                </svg>
                <h3 id="thanks-title">Thank you, {thanks}!</h3>
                <p>We have received your enquiry. A member of our team will be in touch as soon as possible.</p>
                <img src="/logovh.png" alt="Voices Homes" className="modal-logo" />
                <button className="btn btn-gold" autoFocus onClick={() => setThanks('')}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
