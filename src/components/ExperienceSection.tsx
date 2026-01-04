import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "React.js Developer",
    company: "PAUL & PAUL LAWYERS",
    period: "Mar 2024 - Mar 2025",
    description:
      "Working with one of the most popular JavaScript libraries, React.js, along with its ecosystem. Developing new projects, working on front-end development, and maintaining and managing existing projects to ensure optimal performance and user experience.",
    responsibilities: [
      "Developing responsive web applications using React.js and modern JavaScript",
      "Implementing new features and maintaining existing codebase",
      "Collaborating with design and backend teams to deliver seamless user experiences",
      "Optimizing applications for maximum speed and scalability",
      "Writing clean, maintainable code following industry best practices",
    ],
    technologies: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Material UI", "Redux", "jQuery"],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Building modern web applications and{" "}
            <span className="text-gradient">solving real-world problems</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
              
              {/* Experience card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 md:ml-20 relative group hover:border-primary/30 transition-colors">
                {/* Timeline dot */}
                <div className="absolute -left-[4.25rem] top-8 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 hidden md:block" />
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="w-5 h-5" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-3 text-muted-foreground text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + i * 0.05 }}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
