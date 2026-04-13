# Amruta Kadam - Developer Portfolio

Welcome to the repository for my personal developer portfolio! This project is a visually striking, fully responsive, and animated web application built to showcase my academic achievements, technical skills, projects, and certifications. 

## 🌟 Features

- **Interactive Dynamic UI:** Features a custom Matrix-style background animation and a smooth custom animated cursor.
- **Modern Responsive Layout:** A sleek dark-themed design built from scratch with custom CSS3, featuring 7 distinct sections (Introduction, About, Education, Skills, Projects, Certifications, Contact).
- **Scroll Animations:** Utilizes the raw Intersection Observer API to orchestrate complex scroll reveals, fade-ins, and step-by-step timeline progression animations.
- **Projects & Certifications Carousels:** Custom-built image sliders to showcase project screenshots and certificate images seamlessly.
- **Built for Performance:** Optimized rendering using modern React patterns, ensuring smooth 60fps animations.

## 🛠️ Tech Stack

This project is built using modern web development tools and libraries:

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Animation & 3D Integration:** 
  - [GSAP](https://gsap.com/) & `@gsap/react`
  - [Framer Motion](https://www.framer.com/motion/)
  - [Three.js](https://threejs.org/) (`@react-three/fiber`, `@react-three/drei`)
- **Styling:** Custom standard CSS3 (`index.css`, `App.css`) mapping to a finely-tuned design system.
- **Icons:** [Lucide React](https://lucide.dev/) & [Devicon](https://devicon.dev/)
- **Linting:** ESLint

## 📂 Folder Structure

```text
my-portfolio/
├── public/                 # Static assets that don't need bundling
│   ├── screenshots/        # Project and certification screenshot images
│   ├── favicon.svg         # Tab icon
│   └── icons.svg           # Scalable vector graphics used
├── src/                    # Main application source code
│   ├── assets/             # Bundled static assets
│   ├── App.jsx             # Main React Application Component (Core logic and UI)
│   ├── App.css             # Component-specific styles
│   ├── index.css           # Global design system, CSS variables, and utility classes
│   └── main.jsx            # React DOM rendering entry point
├── package.json            # Project metadata, scripts, and dependencies
├── vite.config.js          # Vite build tool configuration
└── eslint.config.js        # ESLint flat config for code quality
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KadamAmruta03/MyPortFolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd my-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit the URL displayed in the terminal (usually `http://localhost:5173`).

## 📬 Contact

**Amruta Kadam**  
- Email: [Kadamamruta0555@gmail.com](mailto:Kadamamruta0555@gmail.com)
- LinkedIn: [Amruta Kadam](https://www.linkedin.com/in/amruta-kadam-6b3bbb312/)
- Twitter / X: [@_amrutakadam](https://x.com/_amrutakadam)
- GitHub: [KadamAmruta03](https://github.com/KadamAmruta03)
