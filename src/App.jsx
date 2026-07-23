import React, { useEffect, useState, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [loadingText, setLoadingText] = useState('');
  const fullText = "Initializing system...";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setLoadingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 35); // 35ms per character creates a fast, tech-like typing effect

    // Cap the maximum preloader display time to 800ms-1000ms
    const maxTimeout = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(maxTimeout);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    console.log("Toggle Theme clicked! Current theme:", theme);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-background font-mono">
        <div className="text-5xl font-heading font-bold text-textMain tracking-widest mb-6">
          A<span className="text-accent">.</span>
        </div>
        <div className="flex items-center text-sm md:text-base text-accent bg-bgGlass/10 px-4 py-2 rounded-lg border border-borderGlass/5 shadow-inner">
          <span className="text-secondary mr-3">~ ❯</span>
          <span>{loadingText}</span>
          <span className="w-2 h-4 bg-accent ml-1 animate-pulse"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-accent/30 selection:text-textMain">
      <div className="particles"></div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <Hero />
        <Suspense fallback={<div className="h-32 w-full"></div>}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-24 w-full"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
