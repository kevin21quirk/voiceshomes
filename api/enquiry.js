const TO = ['fiona@voiceshomes.com', 'rebecca@voiceshomes.com']
const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
  if (b.website) return res.status(200).json({ ok: true })

  const { name, email, phone, role, enquiryType, message } = b
  if (!name || !email || !enquiryType || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Please complete all required fields.' })
  }

  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.log('[enquiry - demo mode, not emailed]', { name, email, phone, role, enquiryType, message })
    return res.status(200).json({ ok: true })
  }

  const html = `<h2>New website enquiry</h2>
<p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Phone:</b> ${esc(phone) || '-'}<br>
<b>I am a:</b> ${esc(role) || '-'}<br><b>Enquiry type:</b> ${esc(enquiryType)}</p>
<p style="white-space:pre-wrap">${esc(message)}</p>`

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || 'Voices Homes Website <onboarding@resend.dev>',
      to: (process.env.EMAIL_TO || TO.join(',')).split(','),
      reply_to: email,
      subject: `Website enquiry: ${enquiryType} - ${name}`,
      html,
    }),
  })
  if (!r.ok) return res.status(502).json({ error: 'Could not send your enquiry.' })
  return res.status(200).json({ ok: true })
}
