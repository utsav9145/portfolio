import PPl_logo from "../assets/PPl-logo.png";
import Enbiosis_logo from "../assets/enbiosis-logo.png";
import Flownex_logo from "../assets/flownex-logo.png";
import ImmigroX_logo from "../assets/immigrox-logo.png";
import lion_vision_trust from "../assets/lion_vision_trust.png";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  category: string;
  featured?: boolean;
  company?: string;
}

export const projects: Project[] = [
  {
    title: "ImmigroX Ecosystem (WayLink + Admin Dashboard)",
    description:
      "A high-performance immigration and legal-tech ecosystem combining dual Client & Agent portals with a centralized Admin CRM. Features include AI-powered consultation via Google Gemini, automated video generation using Replicate API, real-time notifications with Socket.io, secure JWT + Google OAuth authentication, advanced role-based access control, and a premium glassmorphism-based UI architecture.",
    image: ImmigroX_logo,
    technologies: [
      "React 19",
      "Vite",
      "Redux Toolkit",
      "Axios",
      "SCSS/Sass",
      "Styled Components",
      "Bootstrap 5",
      "PrimeReact",
      "Socket.io-client",
      "Google Gemini API",
      "Replicate API",
      "Google OAuth",
    ],
    liveUrl: "https://way-link.io/",
    category: "Immigration SaaS / CRM",
    featured: true,
    company: "Codebuzz Infotech",
  },
  {
    title: "FL0WNEX – Enterprise CRM & Dynamic Intake Platform",
    description:
      "A high-performance frontend-driven enterprise SaaS platform featuring a JSON-powered dynamic form engine, advanced conditional logic system, role-based access control, secure JWT + OTP authentication, and premium animated UI with glassmorphism design.",
    image: Flownex_logo,
    technologies: [
      "React.js",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
    liveUrl: "https://admin.flownex.ai",
    category: "Enterprise SaaS",
    featured: true,
    company: "Codebuzz Infotech",
  },
  {
    title: "Lion Vision Charitable Trust",
    description:
      "Designed and developed a complete NGO web solution including a public-facing website and a secure admin panel. The admin panel enables the organization to manage website content and donation-related data efficiently.",
    image: lion_vision_trust,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "Razorpay",
      "JavaScript",
    ],
    liveUrl: "https://lionvisioncharitabletrust.com/",
    category: "NGO Website",
    featured: false,
    company: "Codebuzz Infotech",
  },
  {
    title: "ENBIOSIS WEB-APP",
    description:
      "Enhanced and maintained the frontend of the Enbiosis admin panel. Improved functionality and user experience, fixed critical bugs and performance issues, and developed new features while collaborating with backend developers.",
    image: Enbiosis_logo,
    technologies: ["React.js", "JavaScript", "Bootstrap", "jQuery"],
    liveUrl: "https://app.enbiosis.com/",
    category: "Admin Panel",
    featured: true,
    company: "IGEEK TECH",
  },
  {
    title: "PAUL & PAUL LAWYERS",
    description:
      "A comprehensive web and admin panel designed for managing lawyer-related data and services. Features include post scheduling, dashboard management, lawyer categorization, and automated client communication.",
    image: PPl_logo,
    technologies: [
      "React.js",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "jQuery",
    ],
    liveUrl: "https://ppl-dot-able-bazaar-443904-k8.uc.r.appspot.com/",
    category: "Web Application",
    featured: true,
    company: "IGEEK TECH",
  },
];
