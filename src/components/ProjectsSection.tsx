import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import PPl_logo from '../assets/PPl-logo.png'
import Enbiosis_logo from '../assets/enbiosis-logo.png'

const projects = [
  {
    title: "PAUL & PAUL LAWYERS",
    category: "Web Application",
    description:
      "A comprehensive web and admin panel designed for managing lawyer-related data and services. Features include post scheduling, dashboard management, lawyer categorization, and automated client communication through contact forms.",
    image: PPl_logo,
    technologies: ["React.js", "TypeScript", "Material UI", "Tailwind CSS", "jQuery"],
    liveUrl: "https://ppl-dot-able-bazaar-443904-k8.uc.r.appspot.com/",
  },
  {
    title: "ENBIOSIS WEB-APP",
    category: "Admin Panel",
    description:
      "Enhanced and maintained the frontend of the Enbiosis admin panel using React.js. Improved functionality and user experience, fixed critical bugs and performance issues, and developed new features while collaborating with backend developers.",
    image: Enbiosis_logo,
    technologies: ["React.js", "JavaScript", "Bootstrap", "jQuery"],
    liveUrl: "https://app.enbiosis.com/",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Projects
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Project image */}
              <div className="relative h-48 sm:h-56 bg-secondary flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-auto h-44 object-contain transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ rotate: 5 }}
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <Button variant="heroOutline" size="sm" className="group/btn" asChild data-magnetic>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Interested in seeing more of my work?</p>
          <Button variant="hero" size="lg" className="group" data-magnetic>
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
