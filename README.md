# Ubaid Ahmad — Personal Portfolio

Source for my personal portfolio site, built with React and Vite.

**Live site:** [ahmadubaid.vercel.app](https://ahmadubaid.vercel.app/)

## About

A single-page portfolio covering my background, experience, and projects as a
full-stack developer focused on backend systems and application security.

## Sections

- **Hero** — intro and quick links
- **About** — background and education
- **Experience** — internships and work history
- **Projects** — featured project cards with live demo + GitHub links
- **Services** — freelance services offered
- **Contact** — contact form and direct links

## Tech Stack

- **Framework:** React 19 + Vite
- **Animations:** AOS (Animate On Scroll)
- **Icons:** Font Awesome
- **Routing:** React Router
- **Deployment:** Vercel

## Project Structure

```
src/
├── components/       # Navbar, Sidebar, Footer
├── sections/         # Hero, About, Experience, Projects, Services, Contact
├── hooks/            # useScrollSpy
├── sectionConfig.js  # section/nav metadata
├── style.css
├── App.jsx
└── main.jsx
public/
├── images/           # project screenshots, profile photo
├── favicon.svg
└── icons.svg
```

## Running Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build

```bash
npm run build
```

## Notes

This is an actively maintained portfolio — project list and copy are updated
as new work is completed.