import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code following best practices",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Turning complex requirements into elegant user interfaces",
  },
  {
    icon: Users,
    title: "User-Focused",
    description: "Creating intuitive experiences that users love to interact with",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and seamless user experience",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            I'm passionate about creating{" "}
            <span className="text-gradient">digital experiences</span>{" "}
            that make a difference
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I enjoy solving problems, learning new technologies, and turning ideas 
              into real-world applications. My main focus is on <span className="text-foreground font-medium">React.js</span>, 
              but I also have extensive experience with Redux, JavaScript (ES6+), 
              Tailwind CSS, and working with various APIs.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe in writing clean, efficient code and creating user experiences 
              that are not only functional but also <span className="text-foreground font-medium">delightful to use</span>. 
              I'm constantly learning and staying up-to-date with the latest frontend 
              technologies and best practices.
            </p>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Done</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Technologies</div>
              </motion.div>
            </div> */}
          </motion.div>

          {/* Right content - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
