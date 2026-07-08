const skillGroups = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'SQL', level: 'Intermediate' },
      { name: 'Bash', level: 'Advanced' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
      { name: 'WebSockets', level: 'Intermediate' },
      { name: 'Responsive Design', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'FastAPI', level: 'Advanced' },
      { name: 'Flask', level: 'Advanced' },
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'JWT Auth', level: 'Advanced' },
      { name: 'RBAC', level: 'Intermediate' },
      { name: 'SQLAlchemy', level: 'Advanced' },
      { name: 'reportlab', level: 'Intermediate' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'SQLite', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'Schema Design', level: 'Advanced' },
    ],
  },
  {
    category: 'Networking & Security',
    items: [
      { name: 'iptables', level: 'Intermediate' },
      { name: 'SSH', level: 'Advanced' },
      { name: 'Nmap', level: 'Familiar' },
      { name: 'Wireshark', level: 'Familiar' },
      { name: 'Vulnerability Assessment', level: 'Familiar' },
    ],
  },
  {
    category: 'System & OS',
    items: [
      { name: 'Linux', level: 'Advanced' },
      { name: 'Bash Scripting', level: 'Advanced' },
      { name: 'psutil', level: 'Advanced' },
      { name: 'subprocess', level: 'Intermediate' },
      { name: 'S.M.A.R.T Monitoring', level: 'Intermediate' },
    ],
  },
  {
    category: 'Desktop',
    items: [
      { name: 'PyQt5', level: 'Advanced' },
      { name: 'PySide6', level: 'Intermediate' },
      { name: 'pyqtgraph', level: 'Intermediate' },
      { name: 'PyInstaller', level: 'Advanced' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub', level: 'Advanced' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'SMTP', level: 'Intermediate' },
      { name: 'PDF Generation', level: 'Advanced' },
      { name: 'Paramiko', level: 'Advanced' },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Analytical Thinking' },
      { name: 'Problem Solving' },
      { name: 'Continuous Learning' },
      { name: 'Team Collaboration' },
      { name: 'Adaptability' },
    ],
  },
  {
    category: 'Currently Learning',
    items: [
      { name: 'Cloud Computing (AWS)', level: 'Currently Learning' },
      { name: 'Linux Server Admin', level: 'Currently Learning' },
      { name: 'Docker & Containers', level: 'Currently Learning' },
    ],
  },
]

function SkillPill({ name, level }) {
  return (
    <div className="skill-pill">
      <span className="skill-name">{name}</span>
      {level && (
        <span className={`skill-badge badge-${level.toLowerCase().replace(/\s+/g, '-')}`}>
          {level}
        </span>
      )}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-categories">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <div className="skills-grid">
              {group.items.map((skill) => (
                <SkillPill key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
