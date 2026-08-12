const projects = [
  {
    img: "/images/to-do.png",
    alt: "Flask To-Do App",
    title: "Flask To-Do App",
    desc: "Backend-focused task manager with per-user accounts, secure sessions & PostgreSQL data modeling.",
    live: "https://flask-todo-app-vert.vercel.app/",
    github: "https://github.com/ahmadubaid061/Flask_Python/tree/main/10-to-do-App-with-SQLAlchemy",
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
  {
    img: "/images/bankist.jpg",
    alt: "Bankist",
    title: "Bankist Landing",
    desc: "Interactive modern banking concept with DOM manipulations.",
    live: "https://ahmadubaid061.github.io/Bank_website/",
    github: "https://github.com/ahmadubaid061/Bank_website",
  },
  {
    img: "/images/bank.jpg",
    alt: "Bankist App",
    title: "Bankist App",
    desc: "Full banking simulation: transfers, loans, and sleek UI.",
    live: "https://ahmadubaid061.github.io/Bankist-App_Project/",
    github: "https://github.com/ahmadubaid061/Bankist-App_Project",
  },
  {
    img: "/images/dice.jpg",
    alt: "Dice Game",
    title: "Rolling Dice",
    desc: "2‑player dice game with smooth animations & fun interaction.",
    live: "https://ahmadubaid061.github.io/Dice-Game/",
    github: "https://github.com/ahmadubaid061/Dice-Game",
  },
  
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-header" data-aos="fade-up"><span>⌘</span> PROJECTS</h2>
        <div className="projects-grid" id="projectsGrid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <img src={p.img} alt={p.alt} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-links">
                <a href={p.live} target="_blank" rel="noreferrer">Live</a>
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                ) : (
                  <a href="#" onClick={(e) => window.showAlert && window.showAlert(e)}>GitHub</a>
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
