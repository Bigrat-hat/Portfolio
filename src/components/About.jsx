import { motion } from 'framer-motion';
import { LuUser as User, LuGraduationCap as GraduationCap, LuMapPin as MapPin, LuCode as Code2 } from 'react-icons/lu';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 relative">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">01. Who I Am</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-textMain">About Me</h3>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Professional Summary */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 glass-card p-6 md:p-10 lg:p-12 hover:border-borderGlass/20 transition-colors group"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-accent/10 text-accent rounded-2xl group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
              <User size={28} />
            </div>
            <h4 className="text-2xl font-bold text-textMain tracking-tight">Professional Summary</h4>
          </div>
          
          <div className="space-y-6 text-textMuted leading-relaxed md:text-lg md:leading-loose">
            <p>
              I am a recent B.Tech graduate in <span className="text-textMain font-medium">Electronics and Communication Engineering (ECE)</span>, with a strong interest in <span className="text-accent font-medium">Linux systems, cloud infrastructure, automation, and networking</span>. I enjoy working close to the system level — managing servers, writing automation scripts, and building tools that monitor and secure infrastructure.
            </p>
            <p>
              Through personal projects, I have built infrastructure monitoring dashboards, remote server management tools, and system utilities using <span className="text-textMain font-medium">Python, Bash, and Linux</span>. I have hands-on experience with SSH-based automation, system monitoring, and backend services using FastAPI, while continuously deepening my knowledge of Linux administration, networking fundamentals, and cloud platforms.
            </p>
            <div className="p-6 md:p-8 bg-bgGlass/5 rounded-2xl border border-borderGlass/10 relative overflow-hidden mt-8 shadow-inner">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-secondary"></div>
              <p className="text-textMain font-medium italic">
                "I am a continuous learner working toward becoming a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary font-bold not-italic">DevOps/Cloud Engineer</span> — someone who bridges development and operations by automating deployment, managing infrastructure, and keeping systems reliable, secure, and efficient."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Facts & Education */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-8"
        >
          {/* Quick Facts */}
          <div className="glass-card p-8 flex-1">
            <h4 className="text-lg font-bold text-textMain mb-6">Quick Facts</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-textMuted">
                <MapPin size={18} className="text-secondary" />
                <span>Bhopal, India</span>
              </li>
              <li className="flex items-center gap-3 text-textMuted">
                <Code2 size={18} className="text-secondary" />
                <span>DevOps & Full Stack</span>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="glass-card p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap size={100} />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 bg-secondary/10 text-secondary rounded-lg">
                <GraduationCap size={20} />
              </div>
              <h4 className="text-lg font-bold text-textMain">Education</h4>
            </div>
            
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-wider text-accent uppercase mb-1 block">2022 - 2026</span>
              <h5 className="text-textMain font-medium mb-2">B.Tech in Electronics & Communication</h5>
              <p className="text-sm text-textMuted">Technocrats Institute of Technology (Science), Bhopal</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
