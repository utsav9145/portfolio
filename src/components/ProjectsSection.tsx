import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PPl_logo from "../assets/PPl-logo.png";
import Enbiosis_logo from "../assets/enbiosis-logo.png";
import lion_vision_trust from "../assets/lion_vision_trust.png";

const projects = [
  {
    title: "PAUL & PAUL LAWYERS",
    type: "Web Application",
    description:
      "A comprehensive web and admin panel designed for managing lawyer-related data and services. Features include post scheduling, dashboard management, lawyer categorization, and automated client communication through contact forms.",
    technologies: [
      "React.js",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "jQuery",
    ],
    image: PPl_logo,
    link: "https://ppl-dot-able-bazaar-443904-k8.uc.r.appspot.com/",
  },
  {
    title: "ENBIOSIS WEB-APP",
    type: "Admin Panel",
    description:
      "Enhanced and maintained the frontend of the Enbiosis admin panel using React.js. Improved functionality and user experience, fixed critical bugs and performance issues.",
    technologies: ["React.js", "JavaScript", "Bootstrap", "jQuery"],
    image: Enbiosis_logo,
    link: "https://app.enbiosis.com/",
  },
  {
    title: "Lion Vision Charitable Trust",
    type: "Website & Admin Panel",
    description:
      "Designed and developed a complete NGO web solution including a public-facing website and a secure admin panel. The admin panel enables the organization to manage website content and donation-related data efficiently.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "Razorpay",
      "JavaScript",
    ],
    image: lion_vision_trust,
    link: "https://lionvisioncharitabletrust.com/",
  },
];

const ProjectCard = ({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0];
  index: number;
  isVisible: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative glass-card rounded-2xl overflow-hidden hover-glow"
    >
      {/* Image Section */}
      <div className="relative h-48 bg-secondary/50 flex items-center justify-center overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="max-w-[150px] max-h-[100px] object-contain transition-transform duration-500 group-hover:scale-110"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-background to-transparent"
        />

        {/* Type Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 + index * 0.15 }}
          className="absolute top-4 left-4 px-3 py-1 text-xs bg-primary/20 backdrop-blur-sm rounded-full text-primary border border-primary/30"
        >
          {project.type}
        </motion.span>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <motion.h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </motion.h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.15 + i * 0.05 }}
              className="px-2 py-1 text-xs bg-secondary rounded text-secondary-foreground"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Link */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
          whileHover={{ x: 5 }}
        >
          <ExternalLink size={16} />
          <span>Live Demo</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            className="transition-transform"
          >
            <ArrowRight size={14} />
          </motion.span>
        </motion.a>
      </div>

      {/* Hover Gradient Border */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, hsl(180 100% 45% / 0.1), transparent)",
        }}
      />
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            and experience
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 glow-border rounded-lg font-medium hover:bg-secondary/50 transition-all"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
