import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuMenu as Menu, LuX as X, LuGithub as Github, LuLinkedin as Linkedin, LuSun as Sun, LuMoon as Moon } from 'react-icons/lu';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] glass' 
          : 'pb-5 pt-[max(1.25rem,env(safe-area-inset-top))] bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-heading font-bold text-textMain tracking-tighter">
          Aditya<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-textMuted hover:text-textMain transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Socials & Theme Toggle */}
        <div className="hidden md:flex gap-4 items-center">
          <button onClick={toggleTheme} className="text-textMuted hover:text-textMain transition-colors flex items-center justify-center mr-2" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="w-px h-4 bg-borderGlass/20"></div>
          <a href="https://github.com/Bigrat-hat" target="_blank" rel="noreferrer" className="text-textMuted hover:text-textMain transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-textMuted hover:text-textMain transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="text-textMuted hover:text-textMain transition-colors" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button 
            className="text-textMain ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-background shadow-2xl flex flex-col items-center py-8 gap-6 border-b border-borderGlass/10"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-textMuted hover:text-textMain"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
