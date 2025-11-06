"use strict";

const menu_open = document.querySelector(".menu-btn");
const menu_close = document.querySelector(".close-menu");
const sidebar = document.querySelector(".sidebar");

//--------------------------- Smooth Scroll (desktop + mobile)
document.querySelectorAll(".nav-links").forEach((navLinks) => {
  navLinks.addEventListener("click", function (e) {
    if (e.target.classList.contains("link")) {
      e.preventDefault();
      const targetID = e.target.getAttribute("href");
      const targetSection = document.querySelector(targetID);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      // close sidebar (mobile)
      sidebar.classList.remove("open");
    }
  });
});

//---------------------------Quick Contact button smooth scroll to contact section
document
  .querySelector("#initiate_contact")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = e.target.getAttribute("href");
    const targetSection = document.querySelector(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });

//--------------------------------------------------fading navigation links
const navContainer = document.querySelector(".nav-links");

const handleHover = function (e) {
  if (e.target.classList.contains("link")) {
    const hovered = e.target;

    const siblings = hovered.closest(".nav-links").querySelectorAll(".link");

    siblings.forEach((item) => {
      if (item !== hovered) item.style.opacity = this;
    });
  }
};
//--------------mouse enters
navContainer.addEventListener("mouseover", handleHover.bind(0.5));
//-----------------mouse leaves
navContainer.addEventListener("mouseout", handleHover.bind(1));

//------------------------------------------------------------ Back to Top on "Home"
document.querySelectorAll('a[href="#home"]').forEach((homeLink) => {
  homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    sidebar.classList.remove("open");
  });
});

//--------------------------- Sticky Navigation
const desktopNav = document.querySelector(".desktop-header");
const mobileNav = document.querySelector(".mobile-header");
const heroSection = document.querySelector(".hero");

const headerCallback = (entries) => {
  const [entry] = entries;
  desktopNav.classList.toggle("sticky", !entry.isIntersecting);
  mobileNav.classList.toggle("sticky", !entry.isIntersecting);
};

const headerObserver = new IntersectionObserver(headerCallback, {
  root: null,
  threshold: 0.5,
});
headerObserver.observe(heroSection);

//--------------------------- Sidebar Toggle
menu_open.addEventListener("click", () => sidebar.classList.add("open"));
menu_close.addEventListener("click", () => sidebar.classList.remove("open"));

document.addEventListener("click", (e) => {
  if (
    sidebar.classList.contains("open") &&
    !sidebar.contains(e.target) &&
    !menu_open.contains(e.target)
  ) {
    sidebar.classList.remove("open");
  }
});

// ===== Projects Section Scroll (Fluid + Natural) =====
const projectsContainer = document.querySelector(".projects-container");
const projectCards = document.querySelectorAll(".project-card");
const dotsContainer = document.querySelector(".dots");

if (projectsContainer && projectCards.length > 0) {
  // Calculate number of dots based on cards per view
  const projectsPerView = Math.floor(
    projectsContainer.offsetWidth / projectCards[0].offsetWidth
  );
  const totalDots = Math.ceil(projectCards.length / projectsPerView);

  // Create dots
  dotsContainer.innerHTML = "";
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");

  // Handle clicking dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const cardWidth = projectCards[0].offsetWidth + 40; // 40 = gap
      projectsContainer.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    });
  });

  // Update active dot based on scroll
  projectsContainer.addEventListener("scroll", () => {
    const cardWidth = projectCards[0].offsetWidth + 40;
    const index = Math.round(projectsContainer.scrollLeft / cardWidth);
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  });
}

// ===== Services Section Scroll + Dots =====
const servicesContainer = document.querySelector(".services-grid");
const serviceCards = document.querySelectorAll(".service-card");
const servicesDotsContainer = document.querySelector(".services-dots");

if (servicesContainer && serviceCards.length > 0) {
  const servicesPerView = Math.floor(
    servicesContainer.offsetWidth / serviceCards[0].offsetWidth
  );
  const totalServicesDots = Math.ceil(serviceCards.length / servicesPerView);

  const servicesDots = document.querySelectorAll(".services-dots .dot");

  servicesContainer.addEventListener("scroll", () => {
    const cardWidth = serviceCards[0].offsetWidth + 30;
    const index = Math.round(servicesContainer.scrollLeft / cardWidth);
    servicesDots.forEach((dot, i) =>
      dot.classList.toggle("active", i === index)
    );
  });
}

// ===== Allow Vertical Scroll in Horizontal Sections =====
function allowVerticalScroll(container) {
  if (!container) return;
  let startX, startY;

  container.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true }
  );

  container.addEventListener(
    "touchmove",
    (e) => {
      const dx = Math.abs(e.touches[0].clientX - startX);
      const dy = Math.abs(e.touches[0].clientY - startY);

      if (dx > dy) {
        // horizontal swipe
        e.stopPropagation();
      } else {
        // allow vertical page scroll
        container.parentElement.scrollTop += dy;
      }
    },
    { passive: true }
  );
}

allowVerticalScroll(document.querySelector(".projects-container"));
allowVerticalScroll(document.querySelector(".services-grid"));
