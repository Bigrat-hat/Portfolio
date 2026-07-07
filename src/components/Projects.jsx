import { useState } from 'react'

const mainProjects = [
  {
    title: 'InfraGuard — Unified Infrastructure Control Platform',
    type: 'Web Dashboard (Local & Remote Access)',
    description:
      'A unified infrastructure control platform combining network security (IP blocking via iptables), remote server management (SSH terminal + file manager), and predictive system health monitoring with S.M.A.R.T disk analysis and PDF health reports.',
    tech: ['React', 'FastAPI', 'Python', 'Paramiko', 'WebSockets', 'iptables', 'psutil', 'JWT', 'PDF Export'],
    github: 'https://github.com/Bigrat-hat/infraguard',
    image: '/infraguard_network.png?v=2',
    screenshots: [
      { src: '/infraguard_network.png?v=2', title: 'InfraGuard — Network Monitor (Active Connections) [HD]' },
      { src: '/infraguard_1.png?v=2', title: 'InfraGuard — Login Portal' },
      { src: '/infraguard_2.png?v=2', title: 'InfraGuard — 7-Day Resource Trend' },
      { src: '/infraguard_3.png?v=2', title: 'InfraGuard — Audit Activity Logs' },
      { src: '/infraguard_4.png?v=2', title: 'InfraGuard — System Health Overview' },
      { src: '/infraguard_5.png?v=2', title: 'InfraGuard — Server Management' },
      { src: '/infraguard_6.png?v=2', title: 'InfraGuard — Network Monitor Tools' },
      { src: '/infraguard_7.png?v=2', title: 'InfraGuard — Network Speed Test' },
      { src: '/infraguard_8.png?v=2', title: 'InfraGuard — Local Network Devices' },
      { src: '/infraguard_9.png?v=2', title: 'InfraGuard — ARP Cache Table' },
      { src: '/infraguard_10.png?v=2', title: 'InfraGuard — Port Scanner' },
      { src: '/infraguard_11.png?v=2', title: 'InfraGuard — Network Monitor (Active Connections)' }
    ]
  },
  {
    title: 'HR Management System',
    type: 'Web Dashboard (Local & Remote Access)',
    description:
      'A complete internal HR platform covering employee attendance tracking, leave management with approval workflows, automated payroll calculation with PDF payslips, and digital employee onboarding with document management.',
    tech: ['React', 'FastAPI', 'Python', 'SQLite', 'JWT', 'RBAC', 'PDF Generation', 'File Upload'],
    github: 'https://github.com/Bigrat-hat/HRsystem',
    image: '/hrflow_16.png',
    screenshots: [
      { src: '/hrflow_16.png', title: 'HR Admin Dashboard — Payroll, onboarding progress and stats' },
      { src: '/hrflow_7.png', title: 'Employee Dashboard — Welcome portal & recent logs' },
      { src: '/hrflow_20.png', title: 'Super Admin Dashboard — Operations stats & charts overview' },
      { src: '/hrflow_1.png', title: 'Login Screen — Secure employee portal entry' },
      { src: '/hrflow_2.png', title: 'Employee Dashboard — Main attendance calendar & widgets' },
      { src: '/hrflow_3.png', title: 'Employee Workspace — Leave application form' },
      { src: '/hrflow_4.png', title: 'Employee Onboarding — Verification checks & document uploads' },
      { src: '/hrflow_5.png', title: 'Employee Profile — Personal details & info' },
      { src: '/hrflow_6.png', title: 'Employee Dashboard — Main overview' },
      { src: '/hrflow_8.png', title: 'HR Manager Dashboard — Team tasks, weekly presence & monthly payrolls' },
      { src: '/hrflow_9.png', title: 'HR Manager Workspace — Team members list' },
      { src: '/hrflow_10.png', title: 'HR Manager Workspace — Live team availability (WebSocket Feed)' },
      { src: '/hrflow_11.png', title: 'HR Admin Workspace — Employee onboarding tracker & progress' },
      { src: '/hrflow_12.png', title: 'HR Admin Workspace — Payroll calculations & payslip generator' },
      { src: '/hrflow_13.png', title: 'HR Admin Workspace — Uploaded onboarding documents archives' },
      { src: '/hrflow_14.png', title: 'HR Admin Workspace — Register new employee account' },
      { src: '/hrflow_15.png', title: 'HR Admin Workspace — Employee structure & performance index' },
      { src: '/hrflow_17.png', title: 'Super Admin Panel — Global system configuration' },
      { src: '/hrflow_18.png', title: 'Super Admin Panel — Security logs & audit trails' },
      { src: '/hrflow_19.png', title: 'Super Admin Panel — User accounts credentials table' },
    ]
  },
  {
    title: 'SysWatch — Personal System Monitor',
    type: 'Desktop Application',
    description:
      'A lightweight desktop application that monitors everything running on your system in real time — processes, background services, CPU/RAM usage, battery drain analysis, temperature with overheat alerts, network activity per app, and local running servers — with one-click kill and shutdown controls. Packaged as a standalone app using PyInstaller.',
    tech: ['Python', 'PyQt5', 'psutil', 'SQLite', 'pyqtgraph', 'subprocess', 'PyInstaller'],
    github: 'https://github.com/Bigrat-hat/SysWatch',
    image: '/syswatch_dashboard.png',
    screenshots: [
      { src: '/syswatch_dashboard.png', title: 'Dashboard Tab — System Resources & Power Controls' },
      { src: '/syswatch_processes.png', title: 'Processes Tab — Active Process CPU & Memory' },
      { src: '/syswatch_network_1.png', title: 'Network Tab — Active Connections & Security Flags' },
      { src: '/syswatch_network_2.png', title: 'Network Tab — Running Local Servers & Listening Ports' },
      { src: '/syswatch_network_3.png', title: 'Network Tab — Listening Sockets Details' },
    ]
  },
  {
    title: 'Personal Portfolio Website',
    type: 'Public Website',
    description:
      'A responsive personal portfolio website showcasing projects, technical skills, and achievements. Built with reusable React components and modern UI principles.',
    tech: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Git'],
    github: 'https://github.com/Bigrat-hat/portfolio',
    image: '/portfolio_screenshot.png',
    screenshots: [
      { src: '/portfolio_screenshot.png', title: 'Personal Portfolio Website Home Page' }
    ]
  },
]

const otherProjects = [
  {
    title: 'Study Tracker',
    type: 'Desktop Application',
    description:
      'A personal desktop study tracker with a live HH:MM:SS timer, study/break sessions, daily goal with progress bar, per-day notes, session history, dark/light theme, and crash recovery — 100% offline, all data in local SQLite.',
    tech: ['Python', 'CustomTkinter', 'SQLite'],
    github: 'https://github.com/Bigrat-hat/study-tracker',
  },
  {
    title: 'Network Control Panel',
    type: 'Web Dashboard',
    description:
      'Web dashboard to monitor and control system network in real time. Includes IP blocking via iptables, live bandwidth usage per process, and suspicious connection detection.',
    tech: ['React', 'Flask', 'Python', 'Bash', 'iptables', 'psutil'],
    github: 'https://github.com/Bigrat-hat/Network-control-panel',
    note: 'Merged into InfraGuard',
  },
  {
    title: 'Remote Server Manager',
    type: 'Web Dashboard',
    description:
      'Browser-based SSH tool with real-time CPU/RAM/disk monitoring via WebSocket graphs, remote file manager, JWT auth and RBAC.',
    tech: ['React', 'FastAPI', 'Python', 'Paramiko', 'WebSockets', 'JWT'],
    github: 'https://github.com/Bigrat-hat/remote-server-manager',
    note: 'Merged into InfraGuard',
  },
  {
    title: 'Remote System Intelligence Platform',
    type: 'Web Dashboard',
    description:
      'Unified system health monitoring for IT admins. One-click PDF snapshots, predictive S.M.A.R.T disk alerts, and multi-system health dashboard.',
    tech: ['React', 'FastAPI', 'Python', 'psutil', 'Paramiko', 'PDF Export'],
    github: 'https://github.com/Bigrat-hat/Remote-System-Intelligence',
    note: 'Merged into InfraGuard',
  },
]

function ProjectCard({ title, type, description, tech, github, image, screenshots, onScreenshotsClick }) {
  return (
    <div className="project-card">
      {image && (
        <div className="project-image-wrapper">
          <img src={image} alt={title} className="project-image" />
        </div>
      )}
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        {type && <span className="project-type">{type}</span>}
      </div>
      <p className="project-desc">{description}</p>
      <div className="project-tech">
        {tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>
      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">GitHub</a>
        <button onClick={() => onScreenshotsClick(screenshots)} className="btn btn-sm btn-primary">Screenshots</button>
      </div>
    </div>
  )
}

function OtherProjectCard({ title, type, description, tech, github, note }) {
  return (
    <div className="project-card project-card-minor">
      <div className="project-header">
        <h4 className="project-title-minor">{title}</h4>
        {type && <span className="project-type-minor">{type}</span>}
      </div>
      <p className="project-desc-minor">{description}</p>
      {note && <div className="project-note-minor">⭐ {note}</div>}
      <div className="project-tech">
        {tech.map(t => <span key={t} className="tech-tag tech-tag-sm">{t}</span>)}
      </div>
      <div className="project-links project-links-minor" style={{ justifyContent: 'center' }}>
        <a href={github} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline btn-sm-minor" style={{ width: '100%', maxWidth: '150px', textAlign: 'center' }}>GitHub</a>
      </div>
    </div>
  )
}

export default function Projects() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const [galleryImages, setGalleryImages] = useState([])

  const openGallery = (screenshots, index = 0) => {
    setGalleryImages(screenshots)
    setCurrentImgIndex(index)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
  }

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="projects" className="section section-alt">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {mainProjects.map(p => (
          <ProjectCard 
            key={p.title} 
            {...p} 
            onScreenshotsClick={openGallery} 
          />
        ))}
      </div>
      <div className="other-projects-label">Earlier Builds</div>
      <div className="projects-grid projects-grid-minor">
        {otherProjects.map(p => (
          <OtherProjectCard key={p.title} {...p} />
        ))}
      </div>

      {isGalleryOpen && galleryImages.length > 0 && (
        <div className="modal-overlay" onClick={closeGallery}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeGallery}>✕</button>
            <div className="modal-image-container">
              <img 
                src={galleryImages[currentImgIndex].src} 
                alt={galleryImages[currentImgIndex].title} 
                className="modal-image" 
              />
            </div>
            <div className="modal-caption">
              {galleryImages[currentImgIndex].title}
            </div>
            {galleryImages.length > 1 && (
              <div className="modal-nav">
                <button className="modal-nav-btn" onClick={prevImage}>← Prev</button>
                <span className="modal-nav-counter">{currentImgIndex + 1} / {galleryImages.length}</span>
                <button className="modal-nav-btn" onClick={nextImage}>Next →</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
