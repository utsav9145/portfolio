import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2 animate-scale-in stagger-1 hover-scale">
                Frontend Developer
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-slide-up stagger-2">
                Hi, I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-shimmer">
                  Utsav Mandani
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in-up stagger-3">
                A passionate Frontend Developer with 1+ year of hands-on experience building
                modern web applications using React.js. I love creating clean, responsive,
                and user-friendly interfaces.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-in-up stagger-4">
              {['React.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'JavaScript (ES6+)'].map((tech, index) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-primary/30 text-foreground hover-lift hover-glow animate-scale-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-6">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-gradient-primary hover:shadow-glow hover-lift transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 hover-lift"
                onClick={() => window.open('https://drive.google.com/file/d/1vl7Ul7dWN9jEzbJRcSLeRm4rpjozFwqy/view?usp=sharing', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                My Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in-right stagger-3">
            <div className="relative hover-scale">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow" />
              <img
                src="https://utsav-portfolio-eosin.vercel.app/assets/avatars-icon-quomEx8q.jpg"
                alt="Utsav Mandani"
                className="relative w-80 h-80 object-cover rounded-3xl shadow-elegant border border-primary/20 hover-glow transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;