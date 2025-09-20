import { Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:utsavmandani3@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/utsav-mandani-146840344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Utsav Mandani
            </h3>
            <p className="text-muted-foreground">
              Frontend Developer • React.js
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                onClick={() => window.open(link.href, '_blank')}
              >
                <link.icon className="w-4 h-4" />
                <span className="sr-only">{link.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary" /> by Utsav Mandani
            <span className="mx-2">•</span>
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;