import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    company: "PAUL & PAUL LAWYERS",
    role: "React.js Developer",
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
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "jQuery",
    ],
  },
  {
    company: "Lion Vision Charitable Trust – NGO",
    role: "React.js Developer",
    period: "May 2025 - June 2025",
    description:
      "Designed and developed a complete NGO web solution including a public-facing website and a secure admin panel for Lion Vision Charitable Trust. The admin panel enables the organization to manage website content and donation-related data efficiently.",
    responsibilities: [
      "Built a custom admin dashboard for content management",
      "Managed NGO details, pages, and dynamic content",
      "Viewed and managed donation/payment records",
      "Integrated Razorpay donation data into admin panel",
      "Implemented responsive and user-friendly Website UI",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "Razorpay Payment Gateway",
      "JavaScript (ES6)",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Building modern web applications and solving{" "}
            <span className="gradient-text">real-world problems</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isVisible ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-0 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"
            style={{ transform: "translateX(-50%)" }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.2, type: "spring" }}
                className={`absolute top-0 w-4 h-4 bg-primary rounded-full hidden md:block ${
                  index % 2 === 0 ? "-right-2" : "-left-2"
                }`}
                style={{ boxShadow: "0 0 20px hsl(180 100% 45% / 0.5)" }}
              />

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 30px hsl(180 100% 45% / 0.2)",
                }}
                className="glass-card rounded-xl p-6 hover-glow transition-all duration-300"
              >
                {/* Header */}
                <div
                  className={`flex items-start gap-4 mb-4 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <Briefcase className="text-primary" size={24} />
                  </motion.div>
                  <div className={index % 2 === 0 ? "md:text-right" : ""}>
                    <h3 className="font-bold text-lg gradient-text">
                      {exp.company}
                    </h3>
                    <p className="text-foreground font-medium">{exp.role}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.slice(0, 3).map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                        className={`flex items-start gap-2 text-sm text-muted-foreground ${
                          index % 2 === 0
                            ? "md:flex-row-reverse md:text-right"
                            : ""
                        }`}
                      >
                        <ChevronRight
                          className="text-primary flex-shrink-0 mt-0.5"
                          size={14}
                        />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 + index * 0.2 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-xs bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
