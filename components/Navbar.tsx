export default function Navbar() {
  return (
    <header className="header">
      <nav className="wrap navbar">
        <div className="brand">
          amir<span>.dev</span>
        </div>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="btn btn-ghost btn-small">
          Get in touch
        </a>
      </nav>
    </header>
  )
}
