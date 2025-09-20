import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import PPl_logo from '../assets/PPl-logo.png'
import Enbiosis_logo from '../assets/enbiosis-logo.png'

const Projects = () => {
  const projects = [
    {
      title: "PAUL & PAUL LAWYERS",
      description: "A comprehensive web and admin panel designed for managing lawyer-related data and services. Features include post scheduling, dashboard management, lawyer categorization, and automated client communication through contact forms.",
      image: PPl_logo,
      technologies: ["React.js", "TypeScript", "Material UI", "Tailwind CSS", "jQuery"],
      liveUrl: "https://ppl-dot-able-bazaar-443904-k8.uc.r.appspot.com/",
      category: "Web Application"
    },
    {
      title: "ENBIOSIS WEB-APP",
      description: "Enhanced and maintained the frontend of the Enbiosis admin panel using React.js. Improved functionality and user experience, fixed critical bugs and performance issues, and developed new features while collaborating with backend developers.",
      image: Enbiosis_logo,
      technologies: ["React.js", "JavaScript", "Bootstrap", "jQuery"],
      liveUrl: "https://app.enbiosis.com/",
      category: "Admin Panel"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-scale-in stagger-1">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent animate-shimmer">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Here are some of the projects I've worked on, showcasing my skills and experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant group overflow-hidden animate-scale-in hover-lift hover-glow"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain bg-secondary/20 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 hover-scale">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 text-foreground hover-scale hover-glow animate-fade-in-up"
                      style={{ animationDelay: `${0.5 + techIndex * 0.1}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow hover-lift transition-all duration-300"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up stagger-6">
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover-lift hover-glow"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;