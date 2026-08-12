export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-header" data-aos="fade-up"><span>&gt;</span> ABOUT_ME</h2>
        <div className="about-grid" data-aos="fade-up">
          <div>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>I'm a Full Stack Developer & UI architect with a
              passion for building complete digital solutions. From responsive frontends to scalable backend
              systems, I craft interfaces that feel alive and perform flawlessly. <br /><br />
              Currently pursuing BS CS while working on real-world products that merge creativity with
              enterprise-grade functionality. Specialized in MERN stack, modern JavaScript, and cloud-ready
              architectures.</p>
          </div>
          <div>
            <div className="edu-item">
              <h3>🎓 BS Computer Science</h3>
              <p>SS Case IT Islamabad | 2024 — 2028</p>
              <small>Data Structures, Modern Web Tech, AI</small>
            </div>
            <div className="edu-item">
              <h3>⚡ Full Stack Development</h3>
              <p>NAVTTC Pakistan | 2025</p>
              <small>Firebase backend with javascript/React </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
