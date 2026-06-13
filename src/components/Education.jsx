const education = [
  {
    degree: 'B.Tech — Electronics & Communication Engineering',
    school: 'Technocrats Institute of Technology (Science), Bhopal',
    year: '2022 – 2026',
    detail: 'CGPA: 7.2',
  },
  {
    degree: 'Senior Secondary (Class XII, CBSE)',
    school: 'CMA Higher Secondary School, Satna',
    year: '2022',
    detail: '',
  },
  {
    degree: 'Secondary (Class X, CBSE)',
    school: 'CMA Higher Secondary School, Satna',
    year: '2020',
    detail: '',
  },
]

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <h2 className="section-title">Education</h2>
      <div className="edu-list">
        {education.map(e => (
          <div key={e.degree} className="edu-card">
            <div className="edu-left">
              <h3 className="edu-degree">{e.degree}</h3>
              <p className="edu-school">{e.school}</p>
              {e.detail && <p className="edu-detail">{e.detail}</p>}
            </div>
            <span className="edu-year">{e.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
