import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sections, pathToId } from "../sectionConfig";

// Keeps the address bar in sync with whichever section is currently on
// screen, without ever triggering a scroll of its own. It also handles
// landing directly on a route like /projects by scrolling there once on
// mount.
export default function useScrollSpy() {
  const navigate = useNavigate();
  const location = useLocation();
  const didInitialScroll = useRef(false);
  const suppressUntil = useRef(0);

  // On first load (or a hard refresh on /projects, /contact, etc.),
  // jump straight to the matching section.
  useEffect(() => {
    if (didInitialScroll.current) return;
    didInitialScroll.current = true;

    const targetId = pathToId(location.pathname);
    if (targetId === "home") return;

    const el = document.getElementById(targetId);
    if (el) {
      // Suppress the observer briefly so it doesn't fight the jump.
      suppressUntil.current = Date.now() + 800;
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const navEl = document.querySelector("nav");
    const navHeight = navEl ? navEl.offsetHeight : 80;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < suppressUntil.current) return;

        // Pick the entry that is most visible right now.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;

        const id = visible[0].target.id;
        const match = sections.find((s) => s.id === id);
        if (match && match.path !== location.pathname) {
          navigate(match.path, { replace: true });
        }
      },
      {
        root: null,
        rootMargin: `-${navHeight + 10}px 0px -55% 0px`,
        threshold: [0.15, 0.3, 0.5, 0.75],
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
}
