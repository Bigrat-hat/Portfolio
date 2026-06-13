const projects = [
  {
    title: 'Network Control Panel',
    description:
      'Web-based dashboard to monitor and control system network in real time. Includes IP blocking/unblocking via iptables, live bandwidth usage per process, active connection visualizations, and suspicious connection detection with one-click kill.',
    tech: ['React', 'Flask', 'Python', 'Bash', 'Linux', 'iptables', 'psutil'],
    github: 'https://github.com/Bigrat-hat',
  },
  {
    title: 'Remote Server Manager',
    description:
      'Browser-based tool to SSH into remote servers and execute commands. Features real-time CPU, RAM, and disk monitoring via WebSocket graphs, a remote file manager (browse, upload, download), secured with JWT auth and role-based access control.',
    tech: ['React', 'FastAPI', 'Python', 'Paramiko', 'WebSockets', 'JWT'],
    github: 'https://github.com/Bigrat-hat',
  },
  {
    title: 'WFH Management & Tracking System',
    description:
      'Remote workforce management platform for employee and manager roles. Real-time active/idle detection via psutil, daily check-in/out, task logging, payroll hours calculation, and automated email alerts for late check-ins and weekly reports.',
    tech: ['React', 'FastAPI', 'Python', 'SQLite', 'WebSockets', 'psutil', 'SMTP'],
    github: 'https://github.com/Bigrat-hat',
  },
  {
    title: 'Remote System Intelligence Platform',
    description:
      'Unified system health monitoring and remote control platform for IT admins. One-click system snapshots as PDF reports, predictive hardware alerts using S.M.A.R.T disk data, and a multi-system dashboard with health status and historical trend graphs.',
    tech: ['React', 'FastAPI', 'Python', 'psutil', 'Paramiko', 'WebSockets', 'PDF Export'],
    github: 'https://github.com/Bigrat-hat',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Responsive portfolio website to showcase projects, technical skills, and achievements. Built with reusable React components, modern UI principles, and component-based architecture for maintainability.',
    tech: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    github: 'https://github.com/Bigrat-hat',
  },
]

function ProjectCard({ title, description, tech, github }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-tech">
        {tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>
      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer" className="btn btn-sm">GitHub</a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
