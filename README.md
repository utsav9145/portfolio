# 🚀 Utsav Mandani – Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-EF0A7E?style=for-the-badge&logo=framer&logoColor=white" />
</p>

A premium, high-performance personal portfolio website showcasing my skills, professional experience, and featured projects. Built with a modern tech stack featuring glassmorphism design, smooth animations, and a fully responsive layout.

**Live:** [utsavmandani.dev](https://admin.flownex.ai) &nbsp;|&nbsp; **GitHub:** [github.com/utsav9145/portfolio](https://github.com/utsav9145/portfolio)

---

## ✨ Features

- 🎨 **Premium Glassmorphism UI** — Dark, high-tech aesthetic with cyan glow accents
- 💡 **Interactive Animations** — Framer Motion powered page transitions, scroll reveals, and micro-interactions
- 🧭 **Floating Navbar** — Scroll-aware navigation with active section highlighting and animated indicator
- 🪄 **3D Project Cards** — Mouse-tracking tilt effect with company attribution
- 📋 **Experience Timeline** — Expandable accordion cards with company, role, achievements & tech stack
- 📬 **Contact Form** — EmailJS-powered contact form with real form submission
- ✈️ **Scroll-to-Top** — Glassmorphism button with smooth scroll animation
- 🌌 **Particle Background** — Animated dot particle system across all sections
- 🔗 **Projects Page** — Dedicated `/projects` route with full project listing
- 📱 **Fully Responsive** — Mobile-first design with a slide-out drawer for mobile navigation
- 🚫 **Custom 404 Page** — Unique "Lost in Space" themed not-found page
- ⚡ **Fast Performance** — Vite build system with SWC compiler for near-instant HMR

---

## 🛠️ Tech Stack

| Category          | Technology                           |
| ----------------- | ------------------------------------ |
| **Framework**     | React 18 + TypeScript                |
| **Build Tool**    | Vite 5 (with SWC plugin)             |
| **Styling**       | Tailwind CSS 3, custom CSS variables |
| **Animations**    | Framer Motion 12                     |
| **UI Components** | shadcn/ui (Radix UI primitives)      |
| **Routing**       | React Router DOM v6                  |
| **State/Data**    | TanStack React Query                 |
| **Email**         | EmailJS Browser SDK                  |
| **Icons**         | Lucide React                         |
| **Fonts**         | Poppins, Fira Code (Google Fonts)    |

---

## 📁 Project Structure

```
src/
├── assets/             # Project & company logo images
├── components/
│   ├── ui/             # shadcn/ui base components
│   ├── Navbar.tsx      # Floating, scroll-aware navigation
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ProjectCard.tsx # 3D tilt card with company badge
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── ScrollToTop.tsx
│   └── ParticleBackground.tsx
├── data/
│   └── projects.ts     # Project data (title, description, tech, company, etc.)
├── hooks/
│   ├── useScrollReveal.ts
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── pages/
│   ├── Index.tsx       # Main single-page layout
│   ├── ProjectsPage.tsx
│   └── NotFound.tsx    # Custom 404 page
├── App.tsx
├── main.tsx
└── index.css           # Design tokens, global styles, custom utilities
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or 20 LTS
- **npm** 9+

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

Opens the app at `http://localhost:8080` with Hot Module Replacement.

### Build for Production

```sh
npm run build
```

Output is placed in the `dist/` folder.

### Preview Production Build

```sh
npm run preview
```

---

## 📬 Contact Form Setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails directly from the browser without a backend.

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create a new **Email Service** and **Email Template**
3. Update the credentials in `src/components/ContactSection.tsx`:

```ts
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY",
);
```

---

## 🎨 Design System

The portfolio uses a carefully curated dark color palette with CSS custom properties defined in `src/index.css`:

| Token                | Value               | Usage                            |
| -------------------- | ------------------- | -------------------------------- |
| `--primary`          | `hsl(180 100% 45%)` | Cyan accent, buttons, highlights |
| `--background`       | `hsl(210 50% 6%)`   | Deep navy background             |
| `--foreground`       | `hsl(180 100% 95%)` | Primary text                     |
| `--muted-foreground` | `hsl(210 20% 60%)`  | Secondary text                   |
| `.glass-card`        | Custom utility      | Glassmorphism card style         |
| `.gradient-text`     | Custom utility      | Cyan gradient text fill          |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <strong>Utsav Mandani</strong></p>
