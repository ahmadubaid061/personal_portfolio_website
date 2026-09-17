export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div
          className="hero-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1>
            UBAID <span className="gradient-text">AHMAD</span>
          </h1>
          <div className="hero-tag">
            FULL STACK DEVELOPER — BACKEND & APPLICATION SECURITY FOCUSED
          </div>
          <p className="hero-desc">
            I build full-stack web applications with an emphasis on backend
            logic, data modeling, and secure-by-design authentication systems.
            Currently deepening my application security fundamentals alongside a
            Deep Learning + ML Security final year project.
          </p>
          <div className="btn-group">
            <a href="#contact" className="btn-primary">
              {" "}
              Let's Connect
            </a>
            <a href="#projects" className="btn-outline">
              View Work →
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/ahmadubaid061"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ubaid-ahmad061/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://x.com/ahmadubaid061"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://wa.me/923255921184"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div
          className="hero-right"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="avatar-frame">
            <img src="/images/unnamed.jpg" alt="Ubaid Ahmad" />
          </div>
        </div>
      </div>
    </section>
  );
}
