import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Education', 'Projects', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = ['about', 'skills', 'education', 'projects', 'contact']
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar">
      <a href="#about" className="nav-logo">Aditya.</a>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? '✕' : '☰'}
      </button>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(link => {
          const id = link.toLowerCase()
          return (
            <li key={link}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={activeSection === id ? 'active' : ''}
              >
                {link}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
