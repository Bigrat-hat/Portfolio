import { motion } from 'framer-motion';
import { LuBriefcase as Briefcase, LuCalendar as Calendar } from 'react-icons/lu';

const experiences = [
  {
    id: 1,
    role: 'InfraGuard — Network Security & Remote Infrastructure Platform',
    company: 'INFRAGUARD PLATFORM',
    period: '2024 - 2026',
    description: 'Architected and developed a unified infrastructure dashboard for network security and remote server management. Featured IP blocking with iptables, live bandwidth monitoring, browser-based SSH terminal and SFTP file manager using Paramiko, and S.M.A.R.T disk analysis.',
  },
  {
    id: 2,
    role: 'NetWatch — Cross-Platform Network Monitoring Dashboard',
    company: 'NETWATCH PLATFORM',
    period: '2025 - 2026',
    description: 'Built a lightweight network monitoring dashboard for local infrastructure (routers, switches, cameras, NVRs, biometrics) with live ping tracking, cross-platform OS detection, subnet auto-discovery, port scanning, and automated SMTP email alerts.',
  },
  {
    id: 3,
    role: 'Self-Hosted VPN — Private Network Access with Per-Device Keys',
    company: 'AWS & WIREGUARD',
    period: '2025 - 2026',
    description: 'Deployed a self-hosted WireGuard VPN on AWS EC2 allowing devices from any location to join a private network. Configured per-device key pairs, pre-shared key layer, Linux IP forwarding, and iptables firewall rules for secure routing and easy device revocation.',
  },
  {
    id: 4,
    role: 'HR Management System — Backend & Web Development',
    company: 'HR MANAGEMENT SYSTEM',
    period: '2024 - 2025',
    description: 'Built a comprehensive internal HR platform covering attendance, leave workflows with approval mechanisms, automated payroll calculation with PDF payslip generation, and role-based access control using FastAPI, React, and SQLite.',
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="mb-16">
        <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">03. Where I've Been</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-textMain">Hands-on Experience</h3>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary to-transparent md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-accent md:-translate-x-1/2 shadow-[0_0_15px_rgba(79,124,255,0.8)] z-10 border-2 border-background"></div>

              {/* Content */}
              <div className="w-full md:w-1/2 pl-8 md:pl-0">
                <div className={`glass-card p-6 md:p-8 relative ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                  
                  {/* Arrow pointing to timeline */}
                  <div className={`hidden md:block absolute top-4 w-4 h-4 bg-panel/60 border-t border-r border-borderGlass/5 transform rotate-45 ${index % 2 === 0 ? '-left-2 border-b-0 border-l-0 border-borderGlass/5' : '-right-2 border-b border-l border-t-0 border-r-0 border-borderGlass/5'}`}></div>

                  <div className="flex items-center gap-2 text-accent text-sm font-bold mb-2">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <h4 className="text-xl font-bold text-textMain mb-1">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-textMuted text-sm mb-4 font-medium">
                    <Briefcase size={14} className="text-secondary" />
                    {exp.company}
                  </div>
                  <p className="text-textMuted text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
