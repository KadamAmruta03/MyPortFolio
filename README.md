# Amruta Kadam | Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-powered-646CFF?style=flat-square&logo=vite)
![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?style=flat-square&logo=greensock)
![Three.js](https://img.shields.io/badge/Three.js-3D-000000?style=flat-square&logo=threedotjs)
![CSS3](https://img.shields.io/badge/CSS3-Custom_Design_System-1572B6?style=flat-square&logo=css3)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel)

</div>

> A visually striking, fully responsive portfolio website built to showcase my journey as a Full Stack Developer — featuring a Matrix-style background, GSAP + Framer Motion animations, Three.js 3D integration, and a handcrafted CSS design system.


<img width="850" alt="Hero Section" src="https://github.com/user-attachments/assets/16341c0a-9b20-43b8-ab7b-6f8856b68647" />

<p><i>Matrix animation background with custom animated cursor</i></p>

<img width="850" alt="Education" src="https://github.com/user-attachments/assets/c8f41c12-74f1-4458-8b6d-a31c3e259961" />

<p><i>Academic timeline with structured progression</i></p>

<img width="850" alt="Skills" src="https://github.com/user-attachments/assets/e1f28a54-0d75-49ff-891f-076d0b04b9a9" />

<p><i>Tech stack grid with categorized technologies</i></p>

<img width="850" alt="Projects" src="https://github.com/user-attachments/assets/d593d8a0-c759-4770-be6d-d994ca5570a0" />

<p><i>Interactive showcase with live demo and repository links</i></p>

<img width="850" alt="Contact" src="https://github.com/user-attachments/assets/4aa5d999-ce15-4835-83e5-882c085f3c98" />

<p><i>Contact section with social links and communication options</i></p>


** Live Demo:** [my-port-folio-weld-eight.vercel.app](https://my-port-folio-weld-eight.vercel.app/)

---

## Overview

This portfolio was built entirely from scratch — no templates, no Bootstrap, no UI libraries. Every section, animation, and layout was handcrafted to demonstrate not just *what* I've built, but *how* I build.

It features 7 distinct sections (Introduction, About, Education, Skills, Projects, Certifications, Contact), a Matrix-style canvas background, a custom animated cursor, and scroll-driven timeline animations — all optimized for smooth 60fps performance.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Core Framework | React 19 (Vite-powered) |
| Animations | GSAP + `@gsap/react`, Framer Motion |
| 3D Integration | Three.js (`@react-three/fiber`, `@react-three/drei`) |
| Scroll Animations | Intersection Observer API (raw, no library) |
| Styling | Custom CSS3 — Handcrafted Design System (`index.css`, `App.css`) |
| Icons | Lucide React, Devicon |
| Linting | ESLint (Flat Config) |
| Deployment | Vercel |

---

## Technical Highlights

### 1. Matrix-Style Background & Custom Cursor
A canvas-based Matrix animation runs as the site background, built with raw JavaScript. A fully custom animated cursor replaces the browser default — both crafted without any third-party animation library.

### 2. Multi-Library Animation Architecture
Three animation systems work together — **GSAP** handles entrance sequences and timeline-based choreography, **Framer Motion** manages component-level transitions, and the **Intersection Observer API** drives scroll-reveal triggers. Each is used where it performs best.

### 3. Three.js 3D Integration
`@react-three/fiber` and `@react-three/drei` bring 3D elements into the React component tree, adding depth and interactivity to the visual experience without breaking the component-based architecture.

### 4. Custom Carousels — No Library
Both the Projects and Certifications sections use handbuilt image sliders — touch-friendly, keyboard-navigable, and fully controlled via React state — demonstrating DOM and event handling without reaching for a carousel package.

### 5. Handcrafted Design System
All styles live in `index.css` (global variables, utility classes, keyframes) and `App.css` (component-specific rules). No Tailwind, no styled-components — a deliberate choice to showcase deep CSS3 proficiency.

---

## Project Structure

```text
MyPortFolio/
├── public/
│   ├── screenshots/             <-- Project & certification images
│   ├── favicon.svg              <-- Tab icon
│   └── icons.svg                <-- SVG icon sprites
├── src/
│   ├── assets/                  <-- Bundled static assets
│   ├── App.jsx                  <-- Main component — all sections & core logic
│   ├── App.css                  <-- Component-specific styles
│   ├── index.css                <-- Global design system, CSS variables, keyframes
│   └── main.jsx                 <-- React DOM entry point
├── package.json                 <-- Dependencies & scripts
├── vite.config.js               <-- Vite build configuration
└── eslint.config.js             <-- ESLint flat config
```

---

## Local Setup

### Prerequisites
- Node.js 18+

### Steps

```bash
git clone https://github.com/KadamAmruta03/MyPortFolio.git
cd MyPortFolio
npm install
npm run dev
```

Open: `http://localhost:5173`

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## What I Built This To Demonstrate

- **Advanced animation orchestration** — GSAP, Framer Motion, and Intersection Observer used together with clear separation of concerns
- **3D in React** — Three.js integrated cleanly via `@react-three/fiber` without breaking component architecture
- **Pure CSS mastery** — full design system built without any utility framework
- **Custom interactive components** — carousels, animated cursor, and canvas background built from scratch
- **Performance-first mindset** — 60fps animations, lazy loading, and optimized Vite production build

---

## License

This project is open-source. Contributions are welcome.
