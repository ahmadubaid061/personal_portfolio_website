export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo"> DEV-UBAID</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>

          <a href="#contact" className="contact-nav">Contact</a>
        </div>
        <button className="menu-btn" id="menuOpen" aria-label="Menu"><i className="fas fa-bars"></i></button>
      </div>
    </nav>
  );
}
