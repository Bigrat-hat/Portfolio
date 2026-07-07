import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    // Scroll listeners
    const handleScroll = () => {
      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100)
      }

      // Back to top button visibility
      if (window.scrollY > 400) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="fade-in-reveal">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Navbar />
      <main>
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <Education />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}
    </div>
  )
}
