import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-info">
        <p>📍 Bhopal, Madhya Pradesh, India</p>
        <p>📧 <a href="mailto:adityachaturvedi026@gmail.com">adityachaturvedi026@gmail.com</a></p>
        <p>📞 <a href="tel:+918602798496">+91-8602798496</a></p>
        <p>🔗 <a href="https://www.linkedin.com/in/aditya-chaturvedii/" target="_blank" rel="noreferrer">linkedin.com/in/aditya-chaturvedii</a></p>
        <p>💻 <a href="https://github.com/Bigrat-hat" target="_blank" rel="noreferrer">github.com/Bigrat-hat</a></p>
      </div>
      {sent ? (
        <p className="contact-success">Thanks! I'll get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name" type="text" placeholder="Your Name"
            value={form.name} onChange={handleChange} required
          />
          <input
            name="email" type="email" placeholder="Your Email"
            value={form.email} onChange={handleChange} required
          />
          <textarea
            name="message" rows="5" placeholder="Your Message"
            value={form.message} onChange={handleChange} required
          />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      )}
    </section>
  )
}
