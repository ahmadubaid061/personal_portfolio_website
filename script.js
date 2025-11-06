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
      //the this keyword is the opacity value defined inside bind method
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

// //=================================================dots for project section slider
// const slides = document.querySelectorAll(".project-card");
// const dotsContainer = document.querySelector(".dots");

// // Create dots dynamically
// slides.forEach((_, i) => {
//   const dot = document.createElement("button");
//   dot.classList.add("dots__dot");
//   if (i === 0) dot.classList.add("dots__dot--active");
//   dot.dataset.slide = i;
//   dotsContainer.appendChild(dot);
// });

// const dots = document.querySelectorAll(".dots__dot");

// // Detect scroll and highlight correct dot
// const container = document.querySelector(".projects-container");

// container.addEventListener("scroll", () => {
//   const index = Math.round(container.scrollLeft / window.innerWidth);
//   dots.forEach((d) => d.classList.remove("dots__dot--active"));
//   if (dots[index]) dots[index].classList.add("dots__dot--active");
// });

// // Click dot to scroll to slide
// dots.forEach((dot) => {
//   dot.addEventListener("click", () => {
//     const slide = dot.dataset.slide;
//     container.scrollTo({
//       left: slide * window.innerWidth,
//       behavior: "smooth",
//     });
//   });
// });

// document.addEventListener("keydown", (e) => {
//   const container = document.querySelector(".projects-container");
//   if (e.key === "ArrowRight") {
//     container.scrollBy({ left: window.innerWidth, behavior: "smooth" });
//   } else if (e.key === "ArrowLeft") {
//     container.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
//   }
// });
// ===== Projects Section Scroll =====

// Select elements
const projectsContainer = document.querySelector(".projects-container");
const projectCards = document.querySelectorAll(".project-card");
const dotsContainer = document.querySelector(".dots");

// Calculate number of pages based on visible width
const projectsPerView = Math.floor(
  projectsContainer.offsetWidth / projectCards[0].offsetWidth
);
const totalDots = Math.ceil(projectCards.length / projectsPerView);

// Clear old dots and create correct count
dotsContainer.innerHTML = "";
for (let i = 0; i < totalDots; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

// Function to scroll to a specific index
function scrollToProject(index) {
  const cardWidth = projectCards[0].offsetWidth + 40; // 40 = your gap
  projectsContainer.scrollTo({
    left: index * cardWidth,
    behavior: "smooth",
  });
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    scrollToProject(index);
  });
});

// ===== Touch Scroll (Fix for Mobile Swipe) =====
let startX = 0;
let scrollLeft = 0;
let isDown = false;

projectsContainer.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - projectsContainer.offsetLeft;
  scrollLeft = projectsContainer.scrollLeft;
});

projectsContainer.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - projectsContainer.offsetLeft;
  const walk = (x - startX) * 1.5; // scroll speed
  projectsContainer.scrollLeft = scrollLeft - walk;
});

projectsContainer.addEventListener("touchend", () => {
  isDown = false;
});

// ===== Services Section Scroll + Dots =====
const servicesContainer = document.querySelector(".services-grid");
const serviceCards = document.querySelectorAll(".service-card");
const servicesDotsContainer = document.querySelector(".services-dots");

if (servicesContainer && serviceCards.length > 0) {
  const servicesPerView = Math.floor(
    servicesContainer.offsetWidth / serviceCards[0].offsetWidth
  );
  const totalServicesDots = Math.ceil(serviceCards.length / servicesPerView);

  // servicesDotsContainer.innerHTML = "";
  // for (let i = 0; i < totalServicesDots; i++) {
  //   const dot = document.createElement("span");
  //   dot.classList.add("dot");
  //   if (i === 0) dot.classList.add("active");
  //   servicesDotsContainer.appendChild(dot);
  // }

  const servicesDots = document.querySelectorAll(".services-dots .dot");
  let currentServiceIndex = 0;

  function scrollToService(index) {
    const cardWidth = serviceCards[0].offsetWidth + 30; // 30 = gap
    servicesContainer.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    servicesDots.forEach((dot, i) =>
      dot.classList.toggle("active", i === index)
    );
  }

  // servicesDots.forEach((dot, index) => {
  //   dot.addEventListener("click", () => {
  //     currentServiceIndex = index;
  //     scrollToService(index);
  //   });
  // });

  // Touch scroll for mobile
  let startX = 0,
    scrollLeft = 0,
    isDown = false;

  servicesContainer.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - servicesContainer.offsetLeft;
    scrollLeft = servicesContainer.scrollLeft;
  });

  servicesContainer.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - servicesContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    servicesContainer.scrollLeft = scrollLeft - walk;
  });

  servicesContainer.addEventListener("touchend", () => {
    isDown = false;
  });
}
