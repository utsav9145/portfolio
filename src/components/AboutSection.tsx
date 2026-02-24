import { motion } from "framer-motion";
import { Code, Lightbulb, Users, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing maintainable and scalable code following best practices",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Turning complex requirements into elegant user interfaces",
  },
  {
    icon: Users,
    title: "User-Focused",
    description:
      "Creating intuitive experiences that users love to interact with",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing applications for speed and seamless user experience",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

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
              About Me
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-2xl lg:text-3xl font-extrabold mt-2 leading-[1.1] tracking-tight max-w-4xl mx-auto"
          >
            I'm passionate about creating <br className="hidden md:block" />
            <span className="gradient-text">digital experiences</span> that make a difference
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-primary/60 to-transparent rounded-full mx-auto mt-8"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              I enjoy solving problems, learning new technologies, and turning
              ideas into real-world applications. My main focus is on React.js,
              but I also have extensive experience with Redux, JavaScript
              (ES6+), Tailwind CSS, and working with various APIs.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              I believe in writing clean, efficient code and creating user
              experiences that are not only functional but also delightful to
              use. I'm constantly learning and staying up-to-date with the
              latest frontend technologies and best practices.
            </p>
          </motion.div>

          {/* Right - Decorative Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-xl p-5 font-mono text-xs overflow-hidden"
            >
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, staggerChildren: 0.1 }}
              >
                <p className="text-muted-foreground">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-primary">developer</span> = {"{"}
                </p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-primary">name</span>:{" "}
                  <span className="text-green-400">'Utsav Mandani'</span>,
                </p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-primary">skills</span>: [
                  <span className="text-green-400">'React'</span>,{" "}
                  <span className="text-green-400">'TypeScript'</span>],
                </p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-primary">passion</span>:{" "}
                  <span className="text-green-400">'Building amazing UIs'</span>
                </p>
                <p className="text-muted-foreground">{"};"}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 20px hsl(180 100% 45% / 0.15)",
              }}
              className="glass-card rounded-xl p-5 hover-glow transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3"
              >
                <feature.icon className="text-primary" size={20} />
              </motion.div>
              <h3 className="text-sm font-semibold mb-1.5">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
