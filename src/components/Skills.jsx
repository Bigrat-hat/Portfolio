const skillGroups = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'Bash'] },
  { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'WebSockets', 'Responsive Design'] },
  { category: 'Backend', items: ['FastAPI', 'Flask', 'REST APIs', 'JWT Auth', 'RBAC'] },
  { category: 'Database', items: ['SQLite', 'PostgreSQL', 'Schema Design'] },
  { category: 'Networking & Security', items: ['iptables', 'SSH', 'Nmap', 'Wireshark'] },
  { category: 'System & OS', items: ['Linux', 'Bash Scripting', 'psutil', 'subprocess', 'S.M.A.R.T Monitoring'] },
  { category: 'Desktop', items: ['PyQt5', 'pyqtgraph', 'PyInstaller'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'SMTP', 'PDF Generation', 'Paramiko'] },
  { category: 'Soft Skills', items: ['Analytical Thinking', 'Problem Solving', 'Continuous Learning', 'Team Collaboration'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-categories">
        {skillGroups.map(group => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <div className="skills-grid">
              {group.items.map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
