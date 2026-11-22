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
              Recent B.Tech graduate in <span className="text-textMain font-medium">Electronics and Communication Engineering (ECE)</span> with a strong foundation in <span className="text-accent font-medium">networking, Linux system administration, and infrastructure automation</span>.
            </p>
            <p>
              Hands-on with network connectivity, remote server access, and system monitoring, with working knowledge of <span className="text-textMain font-medium">VPN, DHCP, subnetting, firewall rules</span>, and <span className="text-accent font-medium">SSH-based remote administration</span>.
            </p>
            <p>
              Built and published open-source projects covering network monitoring dashboards, remote server management platforms, and a self-hosted WireGuard VPN on AWS.
            </p>
            <div className="p-6 md:p-8 bg-bgGlass/5 rounded-2xl border border-borderGlass/10 relative overflow-hidden mt-8 shadow-inner">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-secondary"></div>
              <p className="text-textMain font-medium italic">
                "Continuous learner dedicated to bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary font-bold not-italic">networking, Linux systems, and cloud infrastructure</span> — building automated, reliable, and secure infrastructure."
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
          className="flex flex-col gap-6"
        >
          {/* Quick Facts */}
          <div className="glass-card p-6">
            <h4 className="text-lg font-bold text-textMain mb-4">Quick Facts</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-textMuted text-sm">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>Bhopal, Madhya Pradesh</span>
              </li>
              <li className="flex items-center gap-3 text-textMuted text-sm">
                <Code2 size={18} className="text-secondary shrink-0" />
                <span>Networking, Linux & Cloud DevOps</span>
              </li>
              <li className="flex items-center gap-3 text-textMuted text-sm">
                <GraduationCap size={18} className="text-secondary shrink-0" />
                <span>B.Tech ECE (CGPA: 7.2)</span>
              </li>
            </ul>
          </div>

          {/* Education Timeline */}
          <div className="glass-card p-6 relative overflow-hidden group flex-1">
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 bg-secondary/10 text-secondary rounded-lg">
                <GraduationCap size={20} />
              </div>
              <h4 className="text-lg font-bold text-textMain">Education</h4>
            </div>
            
            <div className="relative z-10 space-y-5">
              <div className="border-l-2 border-accent/40 pl-4 py-0.5">
                <span className="text-xs font-bold tracking-wider text-accent uppercase block">2022 – 2026</span>
                <h5 className="text-textMain font-semibold text-sm">B.Tech — Electronics & Communication</h5>
                <p className="text-xs text-textMuted">Technocrats Institute of Technology (Science), Bhopal</p>
                <span className="inline-block mt-1 text-[11px] font-medium px-2 py-0.5 rounded bg-accent/10 text-accent">CGPA: 7.2</span>
              </div>

              <div className="border-l-2 border-secondary/40 pl-4 py-0.5">
                <span className="text-xs font-bold tracking-wider text-secondary uppercase block">2022</span>
                <h5 className="text-textMain font-semibold text-sm">Senior Secondary (Class XII, CBSE)</h5>
                <p className="text-xs text-textMuted">CMA Higher Secondary School, Satna</p>
              </div>

              <div className="border-l-2 border-borderGlass/30 pl-4 py-0.5">
                <span className="text-xs font-bold tracking-wider text-textMuted uppercase block">2020</span>
                <h5 className="text-textMain font-semibold text-sm">Secondary (Class X, CBSE)</h5>
                <p className="text-xs text-textMuted">CMA Higher Secondary School, Satna</p>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
