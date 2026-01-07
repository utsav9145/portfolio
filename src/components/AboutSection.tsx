import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable code following best practices',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Turning complex requirements into elegant user interfaces',
  },
  {
    icon: Users,
    title: 'User-Focused',
    description: 'Creating intuitive experiences that users love to interact with',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed and seamless user experience',
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

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mt-3"
          >
            I'm passionate about creating digital{' '}
            <span className="gradient-text">experiences</span> that make a difference
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I enjoy solving problems, learning new technologies, and turning ideas into real-world applications. My main focus is on React.js, but I also have extensive experience with Redux, JavaScript (ES6+), Tailwind CSS, and working with various APIs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, efficient code and creating user experiences that are not only functional but also delightful to use. I'm constantly learning and staying up-to-date with the latest frontend technologies and best practices.
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
              className="glass-card rounded-xl p-6 font-mono text-sm overflow-hidden"
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, staggerChildren: 0.1 }}
              >
                <p className="text-muted-foreground">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-primary">developer</span> = {'{'}
                </p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-primary">name</span>:{' '}
                  <span className="text-green-400">'Utsav Mandani'</span>,
                </p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-primary">skills</span>: [
                  <span className="text-green-400">'React'</span>,{' '}
                  <span className="text-green-400">'TypeScript'</span>],
                </p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-primary">passion</span>:{' '}
                  <span className="text-green-400">'Building amazing UIs'</span>
                </p>
                <p className="text-muted-foreground">{'};'}</p>
              </motion.div>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-primary ml-1"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: '0 0 30px hsl(180 100% 45% / 0.2)' }}
              className="glass-card rounded-xl p-6 hover-glow transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
              >
                <feature.icon className="text-primary" size={24} />
              </motion.div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
