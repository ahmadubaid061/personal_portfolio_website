const services = [
  {
    icon: "fas fa-code",
    title: "Full Stack Development",
    desc: "End-to-end web applications with modern frontends & robust backends.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Landing Pages",
    desc: "High-conversion, breathtaking landing pages to capture leads.",
  },
  {
    icon: "fa fa-cart-shopping",
    title: "E-Commerce Websites",
    desc: "Full-featured online stores with seamless checkout, product management, and payment integration — built to sell 24/7.",
  },
  {
    icon: "fas fa-database",
    title: "Business Websites",
    desc: "Sleek, professional websites that make your business stand out and turn visitors into clients.",
  },
  {
    icon: "fas fa-magic",
    title: "UI/UX Redesign",
    desc: "Transform outdated websites into modern interactive experiences.",
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section-header" data-aos="fade-up"><span>✦</span> SERVICES</h2>
        <div className="services-grid" id="servicesGrid">
          {services.map((s) => (
            <div className="service-card" data-aos="zoom-in" key={s.title}>
              <div className="service-icon"><i className={s.icon}></i></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" className="btn-outline service-cta">Inquire</a>
            </div>
          ))}
        </div>
        <div className="services-dots" id="servicesDots"></div>
      </div>
    </section>
  );
}
