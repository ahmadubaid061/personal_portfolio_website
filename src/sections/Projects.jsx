const projects = [
  {
    img: "/images/habit-mood.png",
    alt: "Habit and Mood Dashboard",
    title: "Habit & Mood Dashboard",
    desc: "Mood & habit tracker with secure auth, daily logging & Pandas-driven insight generation.",
    live: "https://mood-and-habits.vercel.app/",
    github:
      "https://github.com/ahmadubaid061/Flask_Python/tree/main/11-Habit-and-Mood-Analytics-Dashboard",
  },
  {
    img: "/images/committee.png",
    alt: "Committee Management App",
    title: "Kameti/ROSCA Committee Management",
    desc: "Savings-committee tracker with device-trust login (hashed, time-limited email codes), route-level authorization, and cent-based currency storage to avoid rounding errors.",
    live: "https://committee-management-eq7l.onrender.com",
    github:
      "https://github.com/ahmadubaid061/Flask_Python/tree/main/12-Commette_Management_App",
  },

  {
    img: "/images/ecommerce.jpeg",
    alt: "Monark",
    title: "MONARK — Fashion Store",
    desc: "Premium e-commerce platform with real-time search, shopping cart, secure checkout & admin dashboard with full CRUD.",
    live: "https://monark-ecommerce.web.app/",
    github: "https://github.com/ahmadubaid061/Monark",
  },
  {
    img: "/images/sgc.png",
    alt: "SGC",
    title: "Business Visa Site",
    desc: "Corporate website for visa consultancy, fully responsive & sleek.",
    live: "https://consultantsbysgc.com/",
    github: null,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-header" data-aos="fade-up">
          <span>⌘</span> PROJECTS
        </h2>
        <div className="projects-grid" id="projectsGrid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <img src={p.img} alt={p.alt} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-links">
                <a href={p.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => window.showAlert && window.showAlert(e)}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="dots-mobile" id="projectsDots"></div>
      </div>
    </section>
  );
}
