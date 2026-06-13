import { useState } from 'react'

const links = ['About', 'Skills', 'Education', 'Projects', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <a href="#about" className="nav-logo">Aditya.</a>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? '✕' : '☰'}
      </button>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
