import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    emailjs.send(
      'service_bwqhxuj',
      'template_g5urvhk',
      form as Record<string, unknown>,
      'TiZHyCI-5WjHuPI9g'
    )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Something went wrong. Please try again later.');
      });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "utsavmandani3@gmail.com",
      href: "mailto:utsavmandani3@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9327165169",
      href: "tel:+919327165169"
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === "name") {
        if (!value.trim()) newErrors.name = "Name is required";
        else delete newErrors.name;
      }

      if (name === "email") {
        if (!value.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors.email = "Invalid email";
        else delete newErrors.email;
      }

      if (name === "message") {
        if (!value.trim()) newErrors.message = "Message is required";
        else delete newErrors.message;
      }

      return newErrors;
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-scale-in stagger-1">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent animate-shimmer">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left stagger-3">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground animate-fade-in-up stagger-1">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed animate-fade-in-up stagger-2">
                I'm always open to discussing new opportunities, interesting projects,
                or potential collaborations. Feel free to reach out if you have any questions
                or just want to connect!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card
                  key={item.label}
                  className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card cursor-pointer hover-lift hover-glow animate-scale-in"
                  onClick={() => item.href !== '#' && window.open(item.href, '_blank')}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg animate-pulse-soft" style={{ animationDelay: `${index * 0.5}s` }}>
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 animate-fade-in-right hover-lift hover-glow stagger-4">
            <CardHeader>
              <h3 className="text-xl font-bold text-foreground animate-fade-in-up stagger-1">Send a Message</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="animate-fade-in-up stagger-2">
                    <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      autoComplete='off'
                      className={`hover-glow transition-all duration-300 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="animate-fade-in-up stagger-3">
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleInputChange}
                      autoComplete='off'
                      placeholder="your@email.com"
                      className={`hover-glow transition-all duration-300 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="animate-fade-in-up stagger-5">
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how I can help you..."
                    className={`min-h-[120px] resize-none hover-glow transition-all duration-300 ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-glow hover-lift transition-all duration-300 animate-fade-in-up stagger-6"
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;