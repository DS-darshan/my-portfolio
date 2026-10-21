const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <a className="brand" href="#home">DP<span>.</span></a>
        <p>© {currentYear} Darshan Patil</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer