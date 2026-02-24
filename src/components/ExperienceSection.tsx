import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Calendar,
  Building2,
  ChevronDown,
  MapPin,
  Briefcase,
} from "lucide-react";
import React from "react";

const experiences = [
  {
    company: "Codebuzz Infotech",
    role: "React.js Developer",
    employmentType: "Full Time",
    period: "April 2025 - Present",
    location: "India",
    description:
      "Developing scalable admin dashboards and secure role-based systems for enterprise applications.",
    responsibilities: [
      "Designed and implemented Role-Based Access Control (RBAC) system separating SuperAdmin and Admin portals",
      "Built complex dynamic multi-step forms with advanced validation logic",
      "Implemented secure JWT authentication, OTP verification, and password workflows",
      "Integrated PDF export functionality using @react-pdf/renderer",
      "Optimized global state management using Redux Toolkit and Redux Persist",
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Vite",
      "Bootstrap 5",
      "Styled Components",
      "Axios",
      "Framer Motion",
      "React-PDF",
    ],
  },
  {
    company: "IGEEK TECH",
    role: "Frontend Developer",
    employmentType: "Full Time",
    period: "March 2024 - March 2025",
    location: "India",
    description:
      "Developed a full-scale immigration consultancy platform with real-time communication and secure dashboards.",
    responsibilities: [
      "Built separate User and Agent portals with secure role-based authentication",
      "Integrated real-time one-on-one chat system using Socket.io with file sharing",
      "Implemented Google OAuth authentication for seamless login experience",
      "Managed complex global state using Redux Toolkit",
      "Improved UI responsiveness and frontend performance",
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Bootstrap 5",
      "SCSS",
      "Axios",
      "Socket.io",
      "Google OAuth",
    ],
  },
];

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative pl-6 md:pl-12 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: "spring" }}
        className="absolute left-0 top-6 w-3 h-3 -translate-x-1/2 rounded-full bg-primary shadow-lg"
        style={{ boxShadow: "0 0 15px hsl(174, 72%, 56%, 0.4)" }}
      >
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
      </motion.div>

      {/* Card */}
      <div
        className={`glass-card rounded-2xl border transition-all duration-500 overflow-hidden ${
          isExpanded
            ? "border-primary/30 bg-primary/5"
            : "border-white/5 hover:border-primary/20"
        }`}
      >
        {/* Header Content */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-5 text-left flex items-start justify-between gap-4"
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-primary mb-3">
              <div className="flex items-center gap-2">
                <Building2 size={16} />
                <span className="font-bold text-xs uppercase tracking-[0.1em]">
                  {experience.company}
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                <Briefcase size={14} />
                <span className="text-[10px] uppercase font-medium">
                  {experience.employmentType}
                </span>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              {experience.role}
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-white/50 text-xs">
              <div className="flex items-center gap-1.5">
                <Calendar size={12} className="text-primary/60" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={12} className="text-primary/60" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`p-1.5 rounded-full mt-1 ${isExpanded ? "bg-primary/10" : ""}`}
          >
            <ChevronDown
              className={`w-5 h-5 ${isExpanded ? "text-primary" : "text-white/20"}`}
            />
          </motion.div>
        </button>

        {/* Expandable Section */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden"
        >
          <div className="px-5 md:px-6 pb-6 pt-1 border-t border-white/5">
            <p className="text-white/60 mb-6 leading-relaxed text-sm md:text-base">
              {experience.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Responsibilities */}
              <div>
                <h4 className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-white/50"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div>
                <h4 className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-medium text-white/70 hover:border-primary/30 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-primary/20 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
              Experience
            </span>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-extrabold mt-3 leading-tight">
            Building modern web applications and <br className="hidden md:block" />
            <span className="gradient-text">solving real-world problems</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-primary/60 to-transparent rounded-full mx-auto mt-8"
          />
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
