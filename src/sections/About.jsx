export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-header" data-aos="fade-up"><span>&gt;</span> ABOUT_ME</h2>
        <div className="about-grid" data-aos="fade-up">
          <div>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>I'm a Full Stack Developer focused on backend
              systems and application security. I build web applications with an emphasis on solid data modeling,
              authentication design, and secure-by-default practices — using Flask and Python as my primary
              backend stack. <br /><br />
              Currently pursuing a BS in Computer Science while building an application security foundation
              (secure coding, DevSecOps tooling, cloud security) and working toward a Deep Learning + ML Security
              final year project.</p>
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