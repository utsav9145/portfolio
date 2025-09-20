import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-scale-in stagger-1">
            My <span className="bg-gradient-primary bg-clip-text text-transparent animate-shimmer">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Building modern web applications and solving real-world problems
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant animate-fade-in-up hover-lift hover-glow stagger-3">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">React.js Developer</h3>
                  <div className="flex items-center gap-2 text-primary mt-2">
                    <Building className="w-4 h-4" />
                    <span className="font-semibold">PAUL & PAUL LAWYERS</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Mar 2024 - Mar 2025</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Working with one of the most popular JavaScript libraries, React.js, along with its ecosystem. 
                Developing new projects, working on front-end development, and maintaining and managing 
                existing projects to ensure optimal performance and user experience.
              </p>
              
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developing responsive web applications using React.js and modern JavaScript</li>
                  <li>Implementing new features and maintaining existing codebase</li>
                  <li>Collaborating with design and backend teams to deliver seamless user experiences</li>
                  <li>Optimizing applications for maximum speed and scalability</li>
                  <li>Writing clean, maintainable code following industry best practices</li>
                </ul>
              </div>
              
                <div>
                <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Material UI', 'Redux', 'jQuery'].map((tech, index) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover-scale hover-glow animate-scale-in"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;