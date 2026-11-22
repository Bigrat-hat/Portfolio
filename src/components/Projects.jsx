import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuGithub as Github, LuExternalLink as ExternalLink, LuMaximize2 as Maximize2, LuX as X, LuChevronRight as ChevronRight, LuChevronLeft as ChevronLeft } from 'react-icons/lu';

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const mainProjects = [
  {
    title: 'InfraGuard — Network Security & Remote Infrastructure Monitoring Platform',
    type: 'Web Dashboard',
    category: 'Networking & Security',
    description: 'A unified infrastructure control platform combining network security (IP blocking via iptables), remote server management (SSH terminal + file manager), and predictive system health monitoring with S.M.A.R.T disk analysis and PDF health reports.',
    tech: ['React.js', 'FastAPI', 'Paramiko', 'WebSockets', 'iptables', 'psutil', 'JWT'],
    github: 'https://github.com/Bigrat-hat/InfraGuard',
    image: '/infraguard_network.png',
    screenshots: [
      { src: '/infraguard_network.png', title: 'Network Security & Traffic Monitor' },
      { src: '/infraguard_1.png', title: 'Authentication & Security Portal' },
      { src: '/infraguard_2.png', title: 'Live System Health & Resource Trend' }
    ]
  },
  {
    title: 'NetWatch — Cross-Platform Network Monitoring Dashboard',
    type: 'Web Dashboard',
    category: 'Networking & Security',
    description: 'A lightweight network monitoring dashboard for local infrastructure (routers, switches, cameras, NVRs, biometric devices) with live ping tracking, cross-platform OS detection, and low CPU overhead via async concurrent checks.',
    tech: ['Python', 'FastAPI', 'asyncio', 'React', 'Vite', 'SQLite', 'SMTP'],
    github: 'https://github.com/Bigrat-hat/NetWatch',
    image: '/syswatch_network_1.png',
    screenshots: [
      { src: '/syswatch_network_1.png', title: 'Live Ping Tracking & Device Discovery' },
      { src: '/syswatch_network_2.png', title: 'Subnet & Open Port Detection' },
      { src: '/syswatch_network_3.png', title: 'Uptime History & Downtime Alerts' }
    ]
  },
  {
    title: 'Self-Hosted VPN — Private Network Access with Per-Device Keys',
    type: 'Cloud Infrastructure',
    category: 'Cloud & DevOps',
    description: 'Deployed a self-hosted WireGuard VPN on AWS EC2 that lets devices from any location join a private network using pre-shared credentials and communicate as if on the same local network, with per-device key pairs and iptables routing.',
    tech: ['WireGuard', 'AWS EC2', 'Linux', 'iptables', 'Python', 'Networking'],
    github: 'https://github.com/Bigrat-hat/Hosted-VPN',
    image: '/infraguard_6.png',
    screenshots: [
      { src: '/infraguard_6.png', title: 'WireGuard Tunnel & Routing Architecture' }
    ]
  },
  {
    title: 'Personal Portfolio Website — Developer Showcase',
    type: 'Web Application',
    category: 'Cloud & Web',
    description: 'Developed a responsive portfolio website with reusable React components for navigation, projects, skills, and contact sections, applying component-based architecture for improved maintainability and scalability.',
    tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Vite', 'Git'],
    github: 'https://github.com/Bigrat-hat/Portfolio',
    image: '/portfolio_preview.png',
    screenshots: [
      { src: '/portfolio_preview.png', title: 'Portfolio Showcase' },
      { src: '/portfolio_screenshot.png', title: 'Interactive Sections & Navigation' }
    ]
  },
  {
    title: 'HR Management System',
    type: 'Web Dashboard',
    category: 'Web & Backend',
    description: 'A complete internal HR platform covering employee attendance tracking, leave management with approval workflows, automated payroll calculation with PDF payslips, and digital employee onboarding with document management.',
    tech: ['React', 'FastAPI', 'Python', 'SQLite', 'JWT', 'RBAC'],
    github: 'https://github.com/Bigrat-hat/HRsystem',
    image: '/hrflow_16.png',
    screenshots: [
      { src: '/hrflow_16.png', title: 'Admin Dashboard' },
      { src: '/hrflow_7.png', title: 'Employee Portal' }
    ]
  },
  {
    title: 'SysWatch — Personal System Monitor',
    type: 'Desktop Application',
    category: 'Python',
    description: 'A lightweight desktop application that monitors everything running on your system in real time — processes, background services, CPU/RAM usage, network activity per app, and local running servers — with one-click kill controls.',
    tech: ['Python', 'PyQt5', 'psutil', 'SQLite', 'pyqtgraph'],
    github: 'https://github.com/Bigrat-hat/SysWatch',
    image: '/syswatch_dashboard.png',
    screenshots: [
      { src: '/syswatch_dashboard.png', title: 'System Resources' },
      { src: '/syswatch_processes.png', title: 'Active Processes' }
    ]
  },
  {
    title: 'PDF Toolkit — Secure PDF Suite',
    type: 'Web Application',
    category: 'Web & Backend',
    description: 'A comprehensive suite of PDF tools designed for absolute privacy. Features include converting images to PDF, merging documents, encrypting files with bank-grade AES security, and unlocking protected documents.',
    tech: ['React', 'Node.js', 'PDF Processing', 'AES Security'],
    github: 'https://github.com/Bigrat-hat/pdf-toolkit',
    image: '/pdf_toolkit_10.png',
    screenshots: [
      { src: '/pdf_toolkit_10.png', title: 'Landing Page' },
      { src: '/pdf_toolkit_7.png', title: 'Dashboard' }
    ]
  }
];

const categories = ['All', 'Networking & Security', 'Cloud & DevOps', 'Web & Backend', 'Python'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState([]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const filteredProjects = mainProjects.filter(
    (p) => filter === 'All' || p.category === filter
  );

  const openGallery = (screenshots) => {
    setActiveGallery(screenshots);
    setCurrentImgIndex(0);
    setGalleryOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="mb-16">
        <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">04. My Work</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-textMain mb-8">Featured Projects</h3>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-accent text-textMain shadow-[0_0_15px_rgba(79,124,255,0.4)]' 
                  : 'glass border border-borderGlass/10 text-textMuted hover:text-textMain hover:border-borderGlass/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.title}
              className="glass-card overflow-hidden group flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-accent/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
                <img 
                  src={publicAsset(project.image)}
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                />
                
                <button 
                  onClick={() => openGallery(project.screenshots)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-accent hover:scale-110 translate-y-4 group-hover:translate-y-0"
                  title="View Gallery"
                >
                  <Maximize2 size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">{project.type}</span>
                    <h4 className="text-xl font-bold text-textMain group-hover:text-accent transition-colors">{project.title}</h4>
                  </div>
                </div>
                
                <p className="text-textMuted text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium text-textMuted bg-bgGlass/5 border border-borderGlass/5 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-borderGlass/5">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-textMain hover:text-accent transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <button onClick={() => openGallery(project.screenshots)} className="flex items-center gap-2 text-sm font-medium text-textMuted hover:text-textMain transition-colors">
                    <Maximize2 size={16} /> Screenshots
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {galleryOpen && activeGallery.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setGalleryOpen(false)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full"
            >
              <img 
                src={publicAsset(activeGallery[currentImgIndex].src)}
                alt={activeGallery[currentImgIndex].title} 
                className="w-full max-h-[80vh] object-contain rounded-xl border border-borderGlass/10 shadow-2xl" 
              />
              
              <div className="absolute -bottom-8 md:-bottom-12 left-0 right-0 text-center text-white font-medium">
                {activeGallery[currentImgIndex].title}
              </div>

              {activeGallery.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentImgIndex(p => (p - 1 + activeGallery.length) % activeGallery.length)}
                    className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-12 p-2 md:p-3 rounded-full bg-black/50 text-white border border-borderGlass/10 hover:bg-accent transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => setCurrentImgIndex(p => (p + 1) % activeGallery.length)}
                    className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-12 p-2 md:p-3 rounded-full bg-black/50 text-white border border-borderGlass/10 hover:bg-accent transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
