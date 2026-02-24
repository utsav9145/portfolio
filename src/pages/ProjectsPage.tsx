import { motion } from "framer-motion";
import { useEffect } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section-container py-20">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
          Portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-5">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          A collection of my work, ranging from enterprise-grade SaaS platforms
          to specialized web applications and NGO solutions.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            isVisible={true}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
