import { LuGithub as Github, LuLinkedin as Linkedin, LuArrowUp as ArrowUp } from 'react-icons/lu';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-borderGlass/10 bg-background pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#home" className="text-2xl font-heading font-bold text-textMain tracking-tighter">
            Aditya<span className="text-accent">.</span>
          </a>
          <p className="text-sm text-textMuted text-center md:text-left">
            Built with React & Tailwind. © {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Bigrat-hat" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-textMuted hover:text-textMain hover:bg-bgGlass/10 transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-textMuted hover:text-textMain hover:bg-bgGlass/10 transition-colors">
            <Linkedin size={18} />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-sm font-medium text-textMuted hover:text-accent transition-colors"
        >
          Back to top
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <ArrowUp size={16} />
          </div>
        </button>

      </div>
    </footer>
  );
}
