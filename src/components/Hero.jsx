import { motion } from 'framer-motion';
import { LuArrowRight as ArrowRight, LuDownload as Download, LuMail as Mail } from 'react-icons/lu';

export default function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-12 md:pt-20">
      <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 relative z-10"
        >

          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-textMain">
              Hi, I'm <br />
              <span className="text-gradient">Aditya Chaturvedi.</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-textMuted mt-4">
              <span className="text-accent">Aspiring DevOps Engineer</span> & <span className="text-textMain">Full Stack Developer</span>
            </h2>
            <p className="text-base text-textMuted max-w-lg mt-6 leading-relaxed">
              Specializing in scalable web applications, robust backend systems, networking, and cybersecurity. I build intelligent solutions bridging software and infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="group relative px-6 py-3 rounded-full bg-accent text-white font-medium flex items-center gap-2 transition-all hover:bg-secondary hover:shadow-[0_0_20px_rgba(124,92,255,0.4)]">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#contact" className="px-6 py-3 rounded-full glass border border-borderGlass/10 text-textMain font-medium flex items-center gap-2 hover:bg-bgGlass/10 transition-colors">
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Content - Abstract Tech Illustration / Profile Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center h-full"
        >
          {/* Glowing Orbs behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 left-1/2 translate-x-10 -translate-y-20 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]"></div>
          
          <div className="relative w-80 h-96 glass-card border border-borderGlass/10 overflow-hidden flex items-center justify-center group">
            {/* If user uploads a photo later, we can place it here. For now, a premium abstract placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10"></div>
            <div className="text-center z-10 p-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-background border border-borderGlass/20 flex items-center justify-center mb-4 neon-glow">
                <span className="text-2xl font-heading font-bold text-gradient">AC</span>
              </div>
              <h3 className="text-lg font-bold text-textMain mb-1">Full Stack Developer</h3>
              <p className="text-sm text-textMuted">Bridging software & infrastructure.</p>
            </div>
            
            {/* Floating tech badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-10 -left-6 glass px-3 py-2 rounded-xl text-xs font-medium text-textMain flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-green-400"></div> Python
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-8 glass px-3 py-2 rounded-xl text-xs font-medium text-textMain flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400"></div> React
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
