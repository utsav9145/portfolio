import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";

const skills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Material UI", level: 80 },
  { name: "jQuery", level: 70, },
  { name: "Git", level: 82 },
];

const SkillBar = ({
  name,
  level,
  delay,
  isVisible,
}: {
  name: string;
  level: number;
  delay: number;
  isVisible: boolean;
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(level), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium group-hover:text-primary transition-colors">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-primary font-mono"
        >
          {width}%
        </motion.span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -right-40 top-1/4 w-80 h-80 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -left-20 bottom-1/4 w-60 h-60 border border-primary/10 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            My Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={0.2 + index * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Learning Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground italic"
          >
            Always learning and exploring new technologies ✨
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
