import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import useScrollSpy from "./hooks/useScrollSpy";

export default function App() {
  // Keeps the URL (/, /about, /services, /experience, /projects, /contact)
  // in sync with whichever section is currently on screen.
  useScrollSpy();

  useEffect(() => {
    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("keydown", preventF12);

    AOS.init({ once: false, offset: 80, duration: 800, easing: "ease-out" });

    // ===== MOBILE MENU TOGGLE =====
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

    if (menuOpen) menuOpen.addEventListener("click", openMenu);
    if (menuClose) menuClose.addEventListener("click", closeMenu);
    if (overlay) overlay.addEventListener("click", closeMenu);

    const sidebarLinks = document.querySelectorAll(".sidebar a");
    sidebarLinks.forEach((link) => link.addEventListener("click", closeMenu));

    // ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    function handleAnchorClick(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    anchorLinks.forEach((anchor) => anchor.addEventListener("click", handleAnchorClick));

    // ===== STICKY NAVBAR =====
    const nav = document.querySelector("nav");
    function handleNavScroll() {
      if (!nav) return;
      if (window.scrollY > 80) {
        nav.style.background = "rgba(8, 8, 14, 0.95)";
      } else {
        nav.style.background = "rgba(10, 10, 15, 0.75)";
      }
    }
    window.addEventListener("scroll", handleNavScroll);

    // ===== PROJECTS HORIZONTAL SCROLL + DOTS (Mobile) =====
    const projectsGrid = document.getElementById("projectsGrid");
    const projectsDots = document.getElementById("projectsDots");
    let cleanupProjectsScroll = () => {};

    function updateProjectDots() {
      if (!projectsGrid || !projectsDots) return;
      const cards = document.querySelectorAll(".project-card");
      if (cards.length === 0) return;

      projectsDots.innerHTML = "";
      const dotClickHandlers = [];

      for (let i = 0; i < cards.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        const onClick = () => {
          projectsGrid.scrollTo({ left: cards[i].offsetLeft - 20, behavior: "smooth" });
        };
        dot.addEventListener("click", onClick);
        dotClickHandlers.push({ dot, onClick });
        projectsDots.appendChild(dot);
      }

      const dotsArr = document.querySelectorAll("#projectsDots .dot");

      const updateActiveDot = () => {
        const scrollPos = projectsGrid.scrollLeft;
        let activeIndex = 0;
        for (let i = 0; i < cards.length; i++) {
          const cardLeft = cards[i].offsetLeft - 20;
          if (scrollPos >= cardLeft - 50) activeIndex = i;
        }
        dotsArr.forEach((dot, i) => dot.classList.toggle("active", i === activeIndex));
      };

      projectsGrid.addEventListener("scroll", updateActiveDot);
      updateActiveDot();
      if (dotsArr[0]) dotsArr[0].classList.add("active");

      cleanupProjectsScroll = () => {
        projectsGrid.removeEventListener("scroll", updateActiveDot);
        dotClickHandlers.forEach(({ dot, onClick }) => dot.removeEventListener("click", onClick));
      };
    }

    // ===== SERVICES HORIZONTAL SCROLL + DOTS (Mobile) =====
    const servicesGrid = document.getElementById("servicesGrid");
    const servicesDots = document.getElementById("servicesDots");
    let cleanupServicesScroll = () => {};

    function updateServicesDots() {
      if (!servicesGrid || !servicesDots) return;
      const cards = document.querySelectorAll(".service-card");
      if (cards.length === 0) return;

      servicesDots.innerHTML = "";
      const dotClickHandlers = [];

      for (let i = 0; i < cards.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        const onClick = () => {
          servicesGrid.scrollTo({ left: cards[i].offsetLeft - 20, behavior: "smooth" });
        };
        dot.addEventListener("click", onClick);
        dotClickHandlers.push({ dot, onClick });
        servicesDots.appendChild(dot);
      }

      const dotsArr = document.querySelectorAll("#servicesDots .dot");

      const updateActiveDot = () => {
        const scrollPos = servicesGrid.scrollLeft;
        let activeIndex = 0;
        for (let i = 0; i < cards.length; i++) {
          const cardLeft = cards[i].offsetLeft - 20;
          if (scrollPos >= cardLeft - 50) activeIndex = i;
        }
        dotsArr.forEach((dot, i) => dot.classList.toggle("active", i === activeIndex));
      };

      servicesGrid.addEventListener("scroll", updateActiveDot);
      updateActiveDot();
      if (dotsArr[0]) dotsArr[0].classList.add("active");

      cleanupServicesScroll = () => {
        servicesGrid.removeEventListener("scroll", updateActiveDot);
        dotClickHandlers.forEach(({ dot, onClick }) => dot.removeEventListener("click", onClick));
      };
    }

    function initMobileFeatures() {
      if (window.innerWidth <= 900) {
        updateProjectDots();
        updateServicesDots();
      }
    }

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
    function handleContactSubmit(e) {
      e.preventDefault();
      alert("✨ Thank you! I'll reach out soon.");
      contactForm.reset();
    }
    if (contactForm) contactForm.addEventListener("submit", handleContactSubmit);

    // ===== FADE-IN EFFECT FOR NAV LINKS =====
    const navLinks = document.querySelector(".nav-links");
    function handleMouseOver(e) {
      if (e.target.classList.contains("nav-links") || e.target.tagName === "NAV") return;
      const siblings = navLinks.querySelectorAll("a");
      siblings.forEach((sibling) => {
        if (sibling !== e.target && !sibling.classList.contains("contact-nav")) {
          sibling.style.opacity = "0.5";
        }
      });
    }
    function handleMouseOut() {
      const siblings = navLinks.querySelectorAll("a");
      siblings.forEach((sibling) => (sibling.style.opacity = "1"));
    }
    if (navLinks) {
      navLinks.addEventListener("mouseover", handleMouseOver);
      navLinks.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("keydown", preventF12);
      if (menuOpen) menuOpen.removeEventListener("click", openMenu);
      if (menuClose) menuClose.removeEventListener("click", closeMenu);
      if (overlay) overlay.removeEventListener("click", closeMenu);
      sidebarLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      anchorLinks.forEach((anchor) => anchor.removeEventListener("click", handleAnchorClick));
      window.removeEventListener("scroll", handleNavScroll);
      window.removeEventListener("resize", initMobileFeatures);
      cleanupProjectsScroll();
      cleanupServicesScroll();
      if (contactForm) contactForm.removeEventListener("submit", handleContactSubmit);
      if (navLinks) {
        navLinks.removeEventListener("mouseover", handleMouseOver);
        navLinks.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function preventContextMenu(e) {
  e.preventDefault();
}

function preventF12(e) {
  if (e.key === "F12") e.preventDefault();
}
