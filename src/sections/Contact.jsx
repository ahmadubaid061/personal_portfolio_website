export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-header" data-aos="fade-up"> CONTACT</h2>
        <div className="contact-container" data-aos="flip-up">
          <div className="contact-info">
            <p><i className="fas fa-envelope" style={{ color: "#00ff99" }}></i> ahmadubaidedu@gmail.com</p>
            <p><i className="fab fa-whatsapp" style={{ color: "#00ff99" }}></i> +92 3428994095</p>
            <div className="social-links" style={{ marginTop: "1.5rem" }}>
              <a href="https://github.com/ahmadubaid061" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/ubaid-ahmad061/" target="_blank" rel="noreferrer"><i
                  className="fab fa-linkedin-in"></i></a>
              <a href="https://x.com/ahmadubaid061" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <form className="contact-form" id="contactForm">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea rows="4" placeholder="Your Message..."></textarea>
            <button type="submit" className="btn-primary" style={{ border: "none", cursor: "pointer" }}>Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
