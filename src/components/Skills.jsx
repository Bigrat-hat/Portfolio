const skillGroups = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'Bash'] },
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'React.js (Beginner)', 'Responsive Design'] },
  { category: 'Backend', items: ['Flask', 'REST APIs', 'FastAPI (Learning)'] },
  { category: 'Database', items: ['SQLite', 'CRUD Operations'] },
  { category: 'Networking & Security', items: ['Nmap', 'Wireshark', 'Basic Vulnerability Assessment'] },
  { category: 'System & OS', items: ['Linux', 'Bash Scripting', 'psutil'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  { category: 'Soft Skills', items: ['Analytical Thinking', 'Continuous Learning', 'Problem Solving', 'Team Collaboration', 'Adaptability'] },
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
