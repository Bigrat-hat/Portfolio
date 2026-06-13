export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Aditya Chaturvedi</h1>
        <h2 className="hero-title">Full-Stack Developer & System Engineer</h2>
        <p className="hero-bio">
          Final-year B.Tech (ECE) student specializing in full-stack web development and
          system-level engineering. I build real-time dashboards, remote management tools,
          and network monitoring systems using Python, React.js, FastAPI, and Linux.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  )
}
