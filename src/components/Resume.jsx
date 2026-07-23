import Navbar from './Navbar'

export default function Resume() {
  return (
    <section id="resume" className="page-section" style={{ backgroundImage: "url('/bg_resume.png')" }}>
      <div className="overlay"></div>
      
      <div className="content-container">
        <Navbar />
        
        <div className="resume-grid">
          {/* LEFT COLUMN */}
          <div className="resume-column">
            <div>
              <h3 className="resume-heading">SOFTWARE SKILLS</h3>
              
              <div className="skill-item">
                <div className="skill-info">
                  <div className="skill-name"><span>React & Vite</span> <span>90%</span></div>
                  <div className="progress-bar"><div className="progress-fill" style={{width: '90%'}}><div className="progress-dot"></div></div></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <div className="skill-name"><span>Python (FastAPI, Flask)</span> <span>85%</span></div>
                  <div className="progress-bar"><div className="progress-fill" style={{width: '85%'}}><div className="progress-dot"></div></div></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <div className="skill-name"><span>Node.js & Express</span> <span>80%</span></div>
                  <div className="progress-bar"><div className="progress-fill" style={{width: '80%'}}><div className="progress-dot"></div></div></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <div className="skill-name"><span>MongoDB & SQLite</span> <span>85%</span></div>
                  <div className="progress-bar"><div className="progress-fill" style={{width: '85%'}}><div className="progress-dot"></div></div></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="resume-heading">LANGUAGES</h3>
              <div className="skill-item">
                <div className="skill-info">
                  <div className="skill-name"><span>JavaScript</span> <span>90%</span></div>
                  <div className="progress-bar"><div className="progress-fill" style={{width: '90%'}}><div className="progress-dot"></div></div></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <div className="skill-name"><span>Python</span> <span>95%</span></div>
                  <div className="progress-bar"><div className="progress-fill" style={{width: '95%'}}><div className="progress-dot"></div></div></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <div className="skill-name"><span>Bash & SQL</span> <span>80%</span></div>
                  <div className="progress-bar"><div className="progress-fill" style={{width: '80%'}}><div className="progress-dot"></div></div></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="resume-heading">PERSONAL SKILLS</h3>
              <p className="simple-list">
                Analytical Thinking - Problem Solving - Continuous Learning - Team Collaboration - Adaptability
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="resume-column">
            <div>
              <h3 className="resume-heading">EXPERIENCE / PROJECTS</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot">2026<br/>2024</div>
                  <div className="timeline-content">
                    <h4>INFRAGUARD PLATFORM</h4>
                    <p>Lead Developer - Full Stack</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot">2025<br/>2024</div>
                  <div className="timeline-content">
                    <h4>HR MANAGEMENT SYSTEM</h4>
                    <p>Developer - Full Stack Dashboard</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot">2026<br/>2026</div>
                  <div className="timeline-content">
                    <h4>PDF TOOLKIT</h4>
                    <p>Developer - React & Node.js</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="resume-heading">EDUCATION</h3>
              <div className="timeline" style={{marginTop: '1rem'}}>
                <div className="timeline-item">
                  <div className="timeline-dot" style={{background: 'rgba(255,255,255,0.1)', color: '#fff'}}>2026<br/>2022</div>
                  <div className="timeline-content">
                    <h4>B.Tech in Electronics & Communication</h4>
                    <p>Technocrats Institute of Technology (Science), Bhopal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="resume-column">
            <div>
              <h3 className="resume-heading">WHAT CAN I DO ?</h3>
              <p className="simple-list">
                Full-Stack Web Development<br/>
                Remote Server Management (SSH, Paramiko)<br/>
                Network Monitoring & Security<br/>
                Linux Administration & Bash Scripting<br/>
                REST API Development (FastAPI, Express)
              </p>
            </div>

            <div>
              <h3 className="resume-heading">DEV OPS & CLOUD</h3>
              <p className="simple-list">
                Linux Server Management - AWS Fundamentals - JWT Authentication - WebSockets - Git & GitHub
              </p>
            </div>

            <div>
              <h3 className="resume-heading">INTERESTS</h3>
              <div className="hobbies-grid">
                <div className="hobby-item">
                  <div className="hobby-icon">💻</div>
                  <span>Coding</span>
                </div>
                <div className="hobby-item">
                  <div className="hobby-icon">🐧</div>
                  <span>Linux</span>
                </div>
                <div className="hobby-item">
                  <div className="hobby-icon">🎧</div>
                  <span>Music</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
