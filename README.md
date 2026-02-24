# 🚀 Utsav Mandani – Full-Stack Frontend Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-EF0A7E?style=for-the-badge&logo=framer&logoColor=white" />
</p>

A premium, high-performance personal portfolio website built with **React 19** and **TypeScript**. This project showcases a sophisticated dark-themed **Glassmorphism** aesthetic, high-fidelity animations, and complex frontend patterns designed to offer an elite user experience.

**Live:** [utsavmandani.dev](https://admin.flownex.ai) &nbsp;|&nbsp; **GitHub:** [github.com/utsav9145/portfolio](https://github.com/utsav9145/portfolio)

---

## ✨ Key Features

- 🎨 **Premium Glassmorphism UI** — A modern, high-tech dark theme with obsidian surfaces and vibrant cyan glow accents.
- 🎭 **Master-Class Animations** — Multi-layered motion engine combining **GSAP 3** for high-performance sequences and **Framer Motion** for reactive micro-interactions.
- 🧩 **Advanced Form Logic** — Smart contact form with:
  - AI-ready validation patterns.
  - **Animated error messages** using `AnimatePresence`.
  - **Auto-focus** precision (automatically lands cursor on first error field).
  - EmailJS integration for real-time delivery.
- 🔔 **Custom GSAP Toast System** — A custom-engineered notification system built from scratch using GSAP for buttery-smooth entrance/exit sequences.
- 🧭 **Intelligent Navigation** — Scroll-aware floating navbar that highlights sections dynamically.
- 🔗 **Silent URL Management** — Implements `history.replaceState` to silently clear hashes (#) after scrolling, preventing navigation artifacts on page refresh.
- 🪄 **3D Perspective Cards** — Mouse-tracking hover effects that react to cursor movement in 3D space.
- 📱 **Adaptive Architecture** — Pixel-perfect responsiveness across all device tiers, from ultra-wide monitors to specialized mobile views.

---

## 🛠️ Performance Tech Stack

| Category           | Technology                          |
| ------------------ | ----------------------------------- |
| **Framework**      | **React 19** + TypeScript 5         |
| **Build Tool**     | Vite 6 (Fast SWC Compiler)          |
| **Styling**        | Tailwind CSS 3 (Utility-First)      |
| **Primary Motion** | **GSAP (GreenSock)**                |
| **Reactive Anim**  | Framer Motion 12                    |
| **Routing**        | React Router DOM v7                 |
| **State/Data**     | TanStack React Query                |
| **Email**          | EmailJS Browser SDK                 |
| **Icons & Fonts**  | Lucide React, Outfit (Google Fonts) |

---

## 📁 Clean Architecture

```
src/
├── assets/             # Optimized project & company assets
├── components/
│   ├── ui/             # Custom GSAP-powered UI primitives (Toast, Tooltip)
│   ├── Navbar.tsx      # Dual-mode (Home/Subpage) adaptive navigation
│   ├── HeroSection.tsx # Mouse-parallax enhanced landing
│   ├── ProjectCard.tsx # 3D tilt-engine components
│   └── ...             # Modular section components
├── data/
│   └── projects.ts     # Centralized project registry
├── hooks/
│   ├── use-gsap-toast.ts # Custom hooks for notification engine
│   └── useScrollReveal.ts # Intersection Observer logic
├── pages/
│   ├── Index.tsx       # Composite landing layer
│   └── ProjectsPage.tsx # Detailed listing layer
└── index.css           # Global design system & tokens
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ LTS
- **npm** 10+

### Installation

```sh
git clone https://github.com/utsav9145/portfolio.git
cd portfolio
npm install
```

### Development

```sh
npm run dev
```

Opens the high-performance HMR dev server at `http://localhost:8084`.

### Build for Production

```sh
npm run build
```

The optimized static assets will be generated in the `dist/` directory.

---

## 📬 Contact Form Configuration

To enable the contact form, update your **EmailJS** credentials in `src/components/ContactSection.tsx`:

```ts
const EMAILJS_CONFIG = {
  SERVICE_ID: "YOUR_SERVICE_ID",
  TEMPLATE_ID: "YOUR_TEMPLATE_ID",
  PUBLIC_KEY: "YOUR_PUBLIC_KEY",
};
```

---

## 📄 License & Attribution

This project is open source and available under the [MIT License](LICENSE).

<p align="center">Built with precision by <strong>Utsav Mandani</strong></p>
