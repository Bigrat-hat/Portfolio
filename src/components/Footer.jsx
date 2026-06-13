export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Aditya Chaturvedi. Built with React.js</p>
      <div className="footer-links">
        <a href="https://github.com/Bigrat-hat" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/aditya-chaturvedii/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
