import { motion } from "framer-motion";
import { Mail, FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import avatars_icon from '../assets/avatars-icon.jpg';

const skills = ["React.js", "TypeScript", "Tailwind CSS", "Redux", "JavaScript (ES6+)"];

export const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden lg:top-0 top-[77px]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-primary rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-primary/60 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full"
          animate={{
            x: [0, 15, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Frontend Developer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Utsav Mandani</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-8"
            >
              A passionate Frontend Developer with 1+ year of hands-on experience
              building modern web applications using React.js. I love creating clean,
              responsive, and user-friendly interfaces.
            </motion.p>

            {/* Animated Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${index === currentSkill
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "glass-card text-muted-foreground"
                    }`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button variant="hero" size="lg" asChild data-magnetic>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Hire Me
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild data-magnetic>
                <a href="https://drive.google.com/file/d/1vl7Ul7dWN9jEzbJRcSLeRm4rpjozFwqy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileDown className="mr-2 h-5 w-5" />
                  My Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform scale-90" />

              {/* Decorative border */}
              <motion.div
                className="absolute -inset-4 rounded-3xl border-gradient opacity-60"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Main image container */}
              <motion.div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden glass-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={avatars_icon}
                  alt="Utsav Mandani"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 glass-card rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-primary font-semibold">1+ Years</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
