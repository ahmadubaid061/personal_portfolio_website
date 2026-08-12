export default function Sidebar() {
  return (
    <>
      <div className="sidebar-overlay"></div>
      <div className="sidebar" id="sidebar">
        <button className="close-menu" id="menuClose"><i className="fas fa-times"></i> Close</button>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>

        <a href="#contact">CONTACT</a>
        <p className="sidebar-footer">© 2025 Ubaid Ahmad</p>
      </div>
    </>
  );
}
