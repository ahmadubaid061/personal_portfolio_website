// Central map between section DOM ids and the URL each one should show
// while it's the section in view. Keep "home" mapped to "/" so the root
// URL is the landing state.
export const sections = [
  { id: "home", path: "/" },
  { id: "about", path: "/about" },
  { id: "services", path: "/services" },
  { id: "experience", path: "/experience" },
  { id: "projects", path: "/projects" },
  { id: "contact", path: "/contact" },
];

export const pathToId = (pathname) => {
  const match = sections.find((s) => s.path === pathname);
  return match ? match.id : "home";
};
