import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Github,
  Monitor,
  Layers,
  Building2,
} from "lucide-react";
import { Project } from "@/data/projects";
import React from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col h-full perspective-1000"
    >
      <div className="relative flex flex-col h-full rounded-2xl border border-white/10 bg-secondary/20 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_20px_50px_rgba(0,255,255,0.15)]">
        {/* Browser Header Mockup */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          </div>
          <div className="mx-auto px-3 py-0.5 rounded-md bg-white/5 border border-white/5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
            <span className="text-[10px] text-white/40 font-mono tracking-tight uppercase">
              {project.category}
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden group/image">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="eager"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
            }}
            className="relative z-10 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-20" />

          {/* Floating Category Icon */}
          <div className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 backdrop-blur-md border border-white/10 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {project.category.includes("SaaS") ||
            project.category.includes("Admin") ? (
              <Monitor size={16} className="text-primary" />
            ) : (
              <Layers size={16} className="text-primary" />
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          {project.company && (
            <div className="flex items-center gap-1.5 mb-2 text-primary/60 font-bold text-[10px] uppercase tracking-widest">
              <Building2 size={12} />
              <span>{project.company}</span>
            </div>
          )}
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
              <span className="line-clamp-1">{project.title}</span>
            </h3>
          </div>

          <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="mt-auto">
            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.slice(0, 7).map((tech, i) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-[9px] font-medium tracking-wide uppercase bg-white/5 border border-white/10 rounded-md text-primary/80"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 7 && (
                <span className="px-2 py-1 text-[9px] font-medium tracking-wide uppercase bg-primary/10 border border-primary/20 rounded-md text-primary italic">
                  +{project.technologies.length - 7} more
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-3 border-t border-white/5">
              <motion.button
                onClick={() => window.open(project.liveUrl, "_blank")}
                className="flex-1 flex items-center justify-center gap-2 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
              >
                Live Demo
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

export default ProjectCard;
