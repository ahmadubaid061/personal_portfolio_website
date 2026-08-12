const items = [
  {
    title: "Web Development Intern — The Consultants by SGC",
    date: "02/2026 — 03/2026",
    desc: "Contributed to development and deployment of the official company website. Implemented responsive layouts, interactive front-end components, and enhanced overall usability and performance.",
    anim: "fade-right",
  },
  {
    title: "JavaScript Intern — Saif Softy Tech",
    date: "07/2025 — 09/2025",
    desc: "Completed structured training in core and advanced JavaScript. Developed interactive applications and strengthened expertise in event handling and dynamic UI behavior.",
    anim: "fade-left",
  },
  {
    title: "Full Stack Developer — Freelance",
    date: "2024 — Present",
    desc: "Building complete web solutions for clients — from responsive frontends to database design and deployment.",
    anim: "fade-right",
  },
  {
    title: "Open Source Contributor — GitHub",
    date: "2024 — Present",
    desc: "Maintaining high-quality repositories and contributing to open-source web projects.",
    anim: "fade-left",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-header" data-aos="fade-up"><span>⧫</span> EXPERIENCE</h2>
        <div className="timeline">
          {items.map((item) => (
            <div className="timeline-item" data-aos={item.anim} key={item.title}>
              <h3>{item.title}</h3>
              <span className="timeline-date">{item.date}</span>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
