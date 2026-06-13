const skillGroups = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'Bash'] },
  { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'WebSockets', 'Recharts/D3.js', 'Responsive Design'] },
  { category: 'Backend', items: ['FastAPI', 'Flask', 'REST APIs', 'JWT Auth', 'Role-Based Access Control'] },
  { category: 'Database', items: ['SQLite', 'PostgreSQL', 'Schema Design', 'CRUD Operations'] },
  { category: 'Networking & Security', items: ['SSH', 'Nmap', 'iptables', 'Wireshark', 'Packet Analysis', 'Vulnerability Assessment'] },
  { category: 'System & OS', items: ['Linux', 'psutil', 'subprocess', 'S.M.A.R.T Monitoring', 'Bash Scripting'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'SMTP', 'PDF Generation'] },
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
