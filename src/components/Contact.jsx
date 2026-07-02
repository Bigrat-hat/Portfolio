export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-cards">
        <a href="mailto:adityachaturvedi026@gmail.com" className="contact-card">
          <span className="contact-icon">📧</span>
          <div>
            <div className="contact-label">Email</div>
            <div className="contact-value">adityachaturvedi026@gmail.com</div>
          </div>
        </a>
        <a href="tel:+918602798496" className="contact-card">
          <span className="contact-icon">📞</span>
          <div>
            <div className="contact-label">Phone</div>
            <div className="contact-value">+91-8602798496</div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/aditya-chaturvedii/" target="_blank" rel="noreferrer" className="contact-card">
          <span className="contact-icon">🔗</span>
          <div>
            <div className="contact-label">LinkedIn</div>
            <div className="contact-value">linkedin.com/in/aditya-chaturvedii</div>
          </div>
        </a>
        <a href="https://github.com/Bigrat-hat" target="_blank" rel="noreferrer" className="contact-card">
          <span className="contact-icon">💻</span>
          <div>
            <div className="contact-label">GitHub</div>
            <div className="contact-value">github.com/Bigrat-hat</div>
          </div>
        </a>
        <div className="contact-card contact-card-static">
          <span className="contact-icon">📍</span>
          <div>
            <div className="contact-label">Location</div>
            <div className="contact-value">Bhopal, Madhya Pradesh, India</div>
          </div>
        </div>
      </div>
    </section>
  )
}
