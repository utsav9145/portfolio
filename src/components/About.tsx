import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Turning complex requirements into elegant user interfaces"
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Creating intuitive experiences that users love to interact with"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and seamless user experience"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-scale-in stagger-1">
            About <span className="bg-gradient-primary bg-clip-text text-transparent animate-shimmer">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-2">
            I'm passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left stagger-3">
            <p className="text-lg leading-relaxed text-muted-foreground animate-fade-in-up stagger-1">
              I enjoy solving problems, learning new technologies, and turning ideas into 
              real-world applications. My main focus is on <strong className="text-primary animate-pulse-soft">React.js</strong>, 
              but I also have extensive experience with Redux, JavaScript (ES6+), Tailwind CSS, 
              and working with various APIs.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground animate-fade-in-up stagger-2">
              I believe in writing clean, efficient code and creating user experiences that 
              are not only functional but also delightful to use. I'm constantly learning 
              and staying up-to-date with the latest frontend technologies and best practices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-right stagger-4">
            {highlights.map((item, index) => (
              <Card 
                key={item.title} 
                className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card group animate-scale-in hover-lift hover-glow"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${index * 0.5}s` }} />
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;