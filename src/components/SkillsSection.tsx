import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React.js", level: 90, color: "hsl(194, 94%, 53%)" },
  // { name: "TypeScript", level: 75, color: "hsl(211, 60%, 48%)" },
  { name: "JavaScript", level: 92, color: "hsl(50, 94%, 53%)" },
  { name: "Tailwind CSS", level: 95, color: "hsl(174, 72%, 56%)" },
  { name: "Material UI", level: 80, color: "hsl(207, 90%, 54%)" },
  // { name: "jQuery", level: 70, color: "hsl(204, 64%, 44%)" },
  { name: "Git", level: 82, color: "hsl(12, 76%, 52%)" },
];

interface CircularProgressProps {
  skill: typeof skills[0];
  index: number;
  isInView: boolean;
}

const CircularProgress = ({ skill, index, isInView }: CircularProgressProps) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center group"
    >
      <div className="relative w-28 h-28 sm:w-32 sm:h-32">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="8"
          />
          
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={skill.color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
            style={{
              filter: `drop-shadow(0 0 8px ${skill.color}40)`,
            }}
          />
        </svg>

        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-2xl font-display font-bold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          >
            <CountUp end={skill.level} isInView={isInView} delay={0.5 + index * 0.1} />
            <span className="text-sm text-muted-foreground">%</span>
          </motion.span>
        </div>

        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Skill name */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
        className="mt-4 text-sm font-medium text-foreground group-hover:text-primary transition-colors"
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
};

interface CountUpProps {
  end: number;
  isInView: boolean;
  delay: number;
}

const CountUp = ({ end, isInView, delay }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay }}
    >
      {isInView ? (
        <Counter end={end} delay={delay} />
      ) : (
        0
      )}
    </motion.span>
  );
};

const Counter = ({ end, delay }: { end: number; delay: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 1500;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, delay]);

  return <>{count}</>;
};

import { useState, useEffect } from "react";

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            My{" "}
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <CircularProgress
              key={skill.name}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Always learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
