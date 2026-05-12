"use strict";
document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
  if (e.key === "F12") e.preventDefault();
});
// Initialize AOS
AOS.init({ once: false, offset: 80, duration: 800, easing: "ease-out" });

// ===== MOBILE MENU TOGGLE (Fixed) =====
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const sidebar = document.getElementById("sidebar");
const overlay = document.querySelector(".sidebar-overlay");

function openMenu() {
  sidebar.classList.add("open");
  if (overlay) overlay.classList.add("active");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  sidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}

if (menuOpen && menuClose && sidebar) {
  menuOpen.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);

  // Close when clicking overlay
  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // Close when clicking sidebar links
  document.querySelectorAll(".sidebar a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== STICKY NAVBAR =====
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.style.background = "rgba(8, 8, 14, 0.95)";
  } else {
    nav.style.background = "rgba(10, 10, 15, 0.75)";
  }
});

// ===== PROJECTS HORIZONTAL SCROLL + DOTS (Mobile) =====
const projectsGrid = document.getElementById("projectsGrid");
const projectsDots = document.getElementById("projectsDots");

function updateProjectDots() {
  if (!projectsGrid || !projectsDots) return;

  const cards = document.querySelectorAll(".project-card");
  if (cards.length === 0) return;

  projectsDots.innerHTML = "";

  for (let i = 0; i < cards.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      projectsGrid.scrollTo({
        left: cards[i].offsetLeft - 20,
        behavior: "smooth",
      });
    });
    projectsDots.appendChild(dot);
  }

  const dotsArr = document.querySelectorAll("#projectsDots .dot");

  const updateActiveDot = () => {
    const scrollPos = projectsGrid.scrollLeft;
    let activeIndex = 0;
    for (let i = 0; i < cards.length; i++) {
      const cardLeft = cards[i].offsetLeft - 20;
      if (scrollPos >= cardLeft - 50) {
        activeIndex = i;
      }
    }
    dotsArr.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeIndex);
    });
  };

  projectsGrid.addEventListener("scroll", updateActiveDot);
  updateActiveDot();

  if (dotsArr[0]) dotsArr[0].classList.add("active");
}

// ===== SERVICES HORIZONTAL SCROLL + DOTS (Mobile) =====
const servicesGrid = document.getElementById("servicesGrid");
const servicesDots = document.getElementById("servicesDots");

function updateServicesDots() {
  if (!servicesGrid || !servicesDots) return;

  const cards = document.querySelectorAll(".service-card");
  if (cards.length === 0) return;

  servicesDots.innerHTML = "";

  for (let i = 0; i < cards.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      servicesGrid.scrollTo({
        left: cards[i].offsetLeft - 20,
        behavior: "smooth",
      });
    });
    servicesDots.appendChild(dot);
  }

  const dotsArr = document.querySelectorAll("#servicesDots .dot");

  const updateActiveDot = () => {
    const scrollPos = servicesGrid.scrollLeft;
    let activeIndex = 0;
    for (let i = 0; i < cards.length; i++) {
      const cardLeft = cards[i].offsetLeft - 20;
      if (scrollPos >= cardLeft - 50) {
        activeIndex = i;
      }
    }
    dotsArr.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeIndex);
    });
  };

  servicesGrid.addEventListener("scroll", updateActiveDot);
  updateActiveDot();

  if (dotsArr[0]) dotsArr[0].classList.add("active");
}

// Initialize mobile features only on small screens
function initMobileFeatures() {
  if (window.innerWidth <= 900) {
    updateProjectDots();
    updateServicesDots();
  }
}

// Run on load and resize
initMobileFeatures();
window.addEventListener("resize", initMobileFeatures);

// ===== SHOW ALERT FOR PRIVATE GITHUB REPOS =====
function showAlert(event) {
  event.preventDefault();
  alert("Privacy concerns — Code not publicly available.");
}
window.showAlert = showAlert;

// ===== CONTACT FORM HANDLER =====
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✨ Thank you! I'll reach out soon.");
    contactForm.reset();
  });
}

// ===== FADE-IN EFFECT FOR NAV LINKS (Optional Elegance) =====
const navLinks = document.querySelector(".nav-links");
if (navLinks) {
  navLinks.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("nav-links") || e.target.tagName === "NAV")
      return;
    const siblings = navLinks.querySelectorAll("a");
    siblings.forEach((sibling) => {
      if (sibling !== e.target && !sibling.classList.contains("contact-nav")) {
        sibling.style.opacity = "0.5";
      }
    });
  });

  navLinks.addEventListener("mouseout", () => {
    const siblings = navLinks.querySelectorAll("a");
    siblings.forEach((sibling) => {
      sibling.style.opacity = "1";
    });
  });
}
