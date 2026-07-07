import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    category: 'Languages',
    isBar: true,
    items: [
      { name: 'Python', value: 90 },
      { name: 'JavaScript', value: 85 },
      { name: 'SQL', value: 80 },
      { name: 'Bash', value: 85 },
    ],
  },
  {
    category: 'Frontend',
    isBar: true,
    items: [
      { name: 'React.js', value: 85 },
      { name: 'Tailwind CSS', value: 80 },
      { name: 'HTML5', value: 90 },
      { name: 'CSS3', value: 85 },
      { name: 'WebSockets', value: 80 },
      { name: 'Responsive Design', value: 90 },
    ],
  },
  {
    category: 'Backend',
    isBar: true,
    items: [
      { name: 'FastAPI', value: 90 },
      { name: 'Flask', value: 85 },
      { name: 'REST APIs', value: 90 },
      { name: 'JWT Auth', value: 85 },
      { name: 'RBAC', value: 80 },
      { name: 'SQLAlchemy', value: 85 },
      { name: 'reportlab', value: 80 },
    ],
  },
  {
    category: 'Database',
    isBar: true,
    items: [
      { name: 'SQLite', value: 85 },
      { name: 'PostgreSQL', value: 80 },
      { name: 'Schema Design', value: 85 },
    ],
  },
  {
    category: 'Networking & Security',
    isBar: true,
    items: [
      { name: 'iptables', value: 80 },
      { name: 'SSH', value: 85 },
      { name: 'Nmap', value: 75 },
      { name: 'Wireshark', value: 75 },
      { name: 'Vulnerability Assessment', value: 70 },
    ],
  },
  {
    category: 'System & OS',
    isBar: true,
    items: [
      { name: 'Linux', value: 90 },
      { name: 'Bash Scripting', value: 85 },
      { name: 'psutil', value: 85 },
      { name: 'subprocess', value: 80 },
      { name: 'S.M.A.R.T Monitoring', value: 80 },
    ],
  },
  {
    category: 'Desktop',
    isBar: true,
    items: [
      { name: 'PyQt5', value: 85 },
      { name: 'PySide6', value: 80 },
      { name: 'pyqtgraph', value: 80 },
      { name: 'PyInstaller', value: 85 },
    ],
  },
  {
    category: 'Tools',
    isBar: true,
    items: [
      { name: 'Git', value: 85 },
      { name: 'GitHub', value: 90 },
      { name: 'VS Code', value: 90 },
      { name: 'SMTP', value: 80 },
      { name: 'PDF Generation', value: 85 },
      { name: 'Paramiko', value: 85 },
    ],
  },
  {
    category: 'Soft Skills',
    isBar: false,
    items: ['Analytical Thinking', 'Problem Solving', 'Continuous Learning', 'Team Collaboration', 'Adaptability'],
  },
  {
    category: 'Currently Learning',
    isBar: false,
    items: ['☁️ Cloud Computing (AWS Fundamentals)', '🖥️ Linux Server Administration', '🐳 Docker & Containerization'],
  },
]

function SkillBar({ name, proficiency }) {
  const [width, setWidth] = useState(0)
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(proficiency)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current)
      }
    }
  }, [proficiency])

  return (
    <div className="skill-item" ref={barRef}>
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{proficiency}%</span>
      </div>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-categories">
        {skillGroups.map(group => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            {group.isBar ? (
              <div className="skills-bars-grid">
                {group.items.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} proficiency={skill.value} />
                ))}
              </div>
            ) : (
              <div className="skills-grid">
                {group.items.map(skill => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
