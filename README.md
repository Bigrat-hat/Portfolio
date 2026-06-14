# Aditya Chaturvedi — Personal Portfolio Website

A responsive, modern personal portfolio website built with **React.js** and **Vite**, showcasing projects, technical skills, education, and contact information.

---

## Live Demo

> Deploy on Vercel / Netlify / GitHub Pages to get a live link.

---

## Project Overview

This portfolio website was built to:
- Showcase real-world projects and technical skills
- Provide a professional online presence
- Demonstrate component-based frontend architecture
- Be fully responsive across all devices (mobile, tablet, desktop)

---

## Tech Stack

| Category | Technology |
|---|---|
| UI Library | React.js 18 |
| Build Tool | Vite 4 |
| Language | JavaScript (ES6+) |
| Markup | HTML5 |
| Styling | CSS3 (Custom, no framework) |
| Version Control | Git |
| Hosting | GitHub / Vercel / Netlify |

---

## Project Structure

```
Portfolio/
├── index.html                  # App entry point
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies & scripts
├── .gitignore
├── README.md
└── src/
    ├── main.jsx                # React DOM render
    ├── App.jsx                 # Root component
    ├── index.css               # Global styles
    └── components/
        ├── Navbar.jsx          # Sticky nav with mobile hamburger
        ├── Hero.jsx            # Landing section with intro & CTA
        ├── Skills.jsx          # Skills grouped by category
        ├── Education.jsx       # Academic background
        ├── Projects.jsx        # Project cards with tech tags
        ├── Contact.jsx         # Contact info + message form
        └── Footer.jsx          # Footer with social links
```

---

## Sections

### Navbar
- Sticky top navigation
- Smooth scroll to all sections
- Hamburger menu on mobile (toggle open/close)

### Hero
- Full name, title, and professional summary
- Two CTA buttons — View Projects & Contact Me

### Skills
Skills grouped by category:
- **Languages** — Python, JavaScript, SQL, Bash
- **Frontend** — React.js, HTML5, CSS3, WebSockets, Recharts/D3.js
- **Backend** — FastAPI, Flask, REST APIs, JWT Auth, RBAC
- **Database** — SQLite, PostgreSQL, Schema Design
- **Networking & Security** — SSH, Nmap, iptables, Wireshark
- **System & OS** — Linux, psutil, subprocess, S.M.A.R.T Monitoring
- **Tools** — Git, GitHub, VS Code, Postman, SMTP, PDF Generation

### Education
- B.Tech ECE — Technocrats Institute of Technology, Bhopal (2022–2026) | CGPA: 7.2
- Class XII — CMA Higher Secondary School, Satna (2022)
- Class X — CMA Higher Secondary School, Satna (2020)

### Projects
Five real-world projects:

1. **Network Control Panel** — React, Flask, Python, Bash, Linux, iptables, psutil
2. **Remote Server Manager** — React, FastAPI, Python, Paramiko, WebSockets, JWT
3. **WFH Management & Tracking System** — React, FastAPI, Python, SQLite, WebSockets, SMTP
4. **Remote System Intelligence Platform** — React, FastAPI, Python, psutil, Paramiko, PDF Export
5. **Personal Portfolio Website** — React.js, HTML, CSS, JavaScript, Git, GitHub

### Contact
- Email, phone, location, LinkedIn, GitHub
- Contact form with controlled inputs and success state

---

## Features

- Responsive layout — works on mobile, tablet, and desktop
- Mobile hamburger navigation
- Smooth scroll between sections
- Hover animations on project cards and skill badges
- Dark theme with modern UI
- Component-based architecture — each section is an independent reusable component
- No CSS framework — pure custom CSS with CSS variables

---

## CSS Design System

```css
--bg: #0f172a          /* Dark background */
--bg-alt: #1e293b      /* Section alternate background */
--primary: #6366f1     /* Indigo accent color */
--text: #e2e8f0        /* Primary text */
--text-muted: #94a3b8  /* Secondary text */
--border: #334155      /* Border color */
```

---

## Getting Started

### Prerequisites
- Node.js v18 or above
- npm

### Install Node.js (if not installed)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Restart terminal, then:
nvm install 20
nvm use 20
```

### Run Locally

```bash
# Clone the repo
git clone https://github.com/Bigrat-hat/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Run on Mobile (same WiFi)

```bash
npm run dev
```
Open the **Network URL** shown in terminal (e.g. `http://192.168.x.x:5173`) on your phone.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy.

### Preview Production Build

```bash
npm run preview
```

---

## Deployment

### Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Import `portfolio` repo
3. Click Deploy — live in ~1 minute

### Netlify
1. Go to [netlify.com](https://netlify.com) → Sign up with GitHub
2. Import `portfolio` repo → Deploy

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json` scripts:
```json
"deploy": "gh-pages -d dist"
```
Then:
```bash
npm run deploy
```
Live at: `https://bigrat-hat.github.io/portfolio/`

---

## Author

**Aditya Chaturvedi**
- GitHub: [github.com/Bigrat-hat](https://github.com/Bigrat-hat)
- LinkedIn: [linkedin.com/in/aditya-chaturvedii](https://www.linkedin.com/in/aditya-chaturvedii/)
- Email: adityachaturvedi026@gmail.com
- Location: Bhopal, Madhya Pradesh, India

---

© 2025 Aditya Chaturvedi. Built with React.js
