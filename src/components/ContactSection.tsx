import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAILJS_CONFIG = {
  SERVICE_ID:
    import.meta.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_bwqhxuj",
  TEMPLATE_ID:
    import.meta.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_g5urvhk",
  PUBLIC_KEY:
    import.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "TiZHyCI-5WjHuPI9g",
};
const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 2) return "Name must be at least 2 characters";
        if (value.length > 50) return "Name must be less than 50 characters";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.length < 10) return "Message must be at least 10 characters";
        if (value.length > 1000)
          return "Message must be less than 1000 characters";
        return "";

      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData;
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const field = id as keyof FormData;

    setFormData((prev) => ({ ...prev, [field]: value }));

    // Live validate and update errors
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error || undefined }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const field = id as keyof FormData;

    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error || undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Utsav",
        to_email: "utsavmandani3@gmail.com",
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setErrors({});
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, interesting
              projects, or potential collaborations. Feel free to reach out!
            </p>

            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href="mailto:utsavmandani3@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover-glow group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  <Mail className="text-primary" size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    utsavmandani3@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+919327165169"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover-glow group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  <Phone className="text-primary" size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    +91 9327165169
                  </p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover-glow group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full px-4 py-3 bg-secondary/50 rounded-lg focus:outline-none transition-all ${
                    errors.name
                      ? "border-destructive focus:border-destructive focus:ring-destructive"
                      : "border border-border focus:border-primary focus:ring-1 focus:ring-primary"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-destructive mt-1">
                    {errors.name}
                  </p>
                )}
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full px-4 py-3 bg-secondary/50 rounded-lg focus:outline-none transition-all ${
                    errors.email
                      ? "border-destructive focus:border-destructive focus:ring-destructive"
                      : "border border-border focus:border-primary focus:ring-1 focus:ring-primary"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive mt-1">
                    {errors.email}
                  </p>
                )}
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`w-full px-4 py-3 bg-secondary/50 rounded-lg focus:outline-none transition-all resize-none ${
                    errors.message
                      ? "border-destructive focus:border-destructive focus:ring-destructive"
                      : "border border-border focus:border-primary focus:ring-1 focus:ring-primary"
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-sm text-destructive mt-1"
                  >
                    {errors.message}
                  </p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
