export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-header" data-aos="fade-up">
          {" "}
          CONTACT
        </h2>
        <div
          className="contact-container contact-container--centered"
          data-aos="flip-up"
        >
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope" style={{ color: "#00ff99" }}></i>{" "}
              ahmadubaidedu@gmail.com
            </p>
            <p>
              <i className="fab fa-whatsapp" style={{ color: "#00ff99" }}></i>{" "}
              +92 325 5921184
            </p>

            <div
              className="btn-group"
              style={{ marginTop: "1.5rem", flexWrap: "wrap" }}
            >
              <a href="mailto:ahmadubaidedu@gmail.com" className="btn-primary">
                <i className="fas fa-envelope"></i> Email Me
              </a>
              <a
                href="https://wa.me/923255921184"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>

            <div className="social-links" style={{ marginTop: "1.5rem" }}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
