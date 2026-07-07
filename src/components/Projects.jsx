const mainProjects = [
  {
    title: 'InfraGuard — Unified Infrastructure Control Platform',
    type: 'Web Dashboard (Different Network)',
    description:
      'A unified infrastructure control platform combining network security (IP blocking via iptables), remote server management (SSH terminal + file manager), and predictive system health monitoring with S.M.A.R.T disk analysis and PDF health reports.',
    tech: ['React', 'FastAPI', 'Python', 'Paramiko', 'WebSockets', 'iptables', 'psutil', 'JWT', 'PDF Export'],
    github: 'https://github.com/Bigrat-hat/infraguard',
  },
  {
    title: 'HR Management System',
    type: 'Web Dashboard (Local/Different Network)',
    description:
      'A complete internal HR platform covering employee attendance tracking, leave management with approval workflows, automated payroll calculation with PDF payslips, and digital employee onboarding with document management.',
    tech: ['React', 'FastAPI', 'Python', 'SQLite', 'JWT', 'RBAC', 'PDF Generation', 'File Upload'],
    github: 'https://github.com/Bigrat-hat/HRsystem',
  },
  {
    title: 'SysWatch — Personal System Monitor',
    type: 'Desktop Application',
    description:
      'A lightweight desktop application that monitors everything running on your system in real time — processes, background services, CPU/RAM usage, battery drain analysis, temperature with overheat alerts, fan status indicator, network activity per app, and local running servers — with one-click kill and shutdown controls. Packaged as a standalone app using PyInstaller.',
    tech: ['Python', 'PyQt5', 'psutil', 'SQLite', 'pyqtgraph', 'subprocess', 'PyInstaller'],
    github: 'https://github.com/Bigrat-hat/SysWatch',
  },
  {
    title: 'Personal Portfolio Website',
    type: 'Public Website',
    description:
      'A responsive personal portfolio website showcasing projects, technical skills, and achievements. Built with reusable React components and modern UI principles.',
    tech: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Git'],
    github: 'https://github.com/Bigrat-hat/portfolio',
  },
]

const otherProjects = [
  {
    title: 'Study Tracker',
    description:
      'A personal desktop study tracker with a live HH:MM:SS timer, study/break sessions, daily goal with progress bar, per-day notes, session history, dark/light theme, and crash recovery — 100% offline, all data in local SQLite.',
    tech: ['Python', 'CustomTkinter', 'SQLite'],
    github: 'https://github.com/Bigrat-hat/study-tracker',
  },
  {
    title: 'Network Control Panel',
    description:
      'Web dashboard to monitor and control system network in real time. Includes IP blocking via iptables, live bandwidth usage per process, and suspicious connection detection.',
    tech: ['React', 'Flask', 'Python', 'Bash', 'iptables', 'psutil'],
    github: 'https://github.com/Bigrat-hat/Network-control-panel',
  },
  {
    title: 'Remote Server Manager',
    description:
      'Browser-based SSH tool with real-time CPU/RAM/disk monitoring via WebSocket graphs, remote file manager, JWT auth and RBAC.',
    tech: ['React', 'FastAPI', 'Python', 'Paramiko', 'WebSockets', 'JWT'],
    github: 'https://github.com/Bigrat-hat/remote-server-manager',
  },
  {
    title: 'Remote System Intelligence Platform',
    description:
      'Unified system health monitoring for IT admins. One-click PDF snapshots, predictive S.M.A.R.T disk alerts, and multi-system health dashboard.',
    tech: ['React', 'FastAPI', 'Python', 'psutil', 'Paramiko', 'PDF Export'],
    github: 'https://github.com/Bigrat-hat/Remote-System-Intelligence',
  },
]

function ProjectCard({ title, type, description, tech, github }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        {type && <span className="project-type">{type}</span>}
      </div>
      <p className="project-desc">{description}</p>
      <div className="project-tech">
        {tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>
      {github && (
        <div className="project-links">
          <a href={github} target="_blank" rel="noreferrer" className="btn btn-sm">GitHub</a>
        </div>
      )}
    </div>
  )
}

function OtherProjectCard({ title, description, tech, github }) {
  return (
    <div className="project-card project-card-minor">
      <h4 className="project-title-minor">{title}</h4>
      <p className="project-desc-minor">{description}</p>
      <div className="project-tech">
        {tech.map(t => <span key={t} className="tech-tag tech-tag-sm">{t}</span>)}
      </div>
      {github && (
        <div className="project-links">
          <a href={github} target="_blank" rel="noreferrer" className="btn btn-sm">GitHub</a>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {mainProjects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
      <div className="other-projects-label">Earlier Builds</div>
      <div className="projects-grid projects-grid-minor">
        {otherProjects.map(p => <OtherProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
