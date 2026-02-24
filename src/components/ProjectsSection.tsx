import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects } from "@/data/projects";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-primary/20 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-[10px] font-bold tracking-[0.25em] uppercase">
              Projects
            </span>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-extrabold mt-2 leading-tight tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base">
            Showcasing some of my best work and technical expertise
          </p>

          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-primary/60 to-transparent rounded-full mx-auto mt-8"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
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
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-3 text-sm">
            Interested in seeing more of my work?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 glow-border rounded-lg text-sm font-medium hover:bg-secondary/50 transition-all"
            onClick={() => navigate("/projects")}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
