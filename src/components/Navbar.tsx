import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Mail, ArrowLeft, ChevronRight, X } from "lucide-react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const MotionLink = motion.create(Link);

const desktopNavLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

const mobileNavLinks = [
  ...desktopNavLinks,
  { name: "Contact", href: "#contact" },
];
const pageLabels: Record<string, string> = {
  "/projects": "All Projects",
};

const backVariants: Variants = {
  initial: { opacity: 0, x: -16 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, x: -8, transition: { duration: 0.2, ease: "easeIn" } },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scrollLockRef = useRef(false);
  const scrollLockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isSubPage = pathname !== "/";
  const pageLabel = pageLabels[pathname] ?? "Page";

  const detectSection = useCallback(() => {
    if (scrollLockRef.current) return;

    setIsScrolled(window.scrollY > 20);

    const sections = mobileNavLinks.map((link) => link.href.slice(1));

    const isAtBottom =
      window.scrollY > 0 &&
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

    if (isAtBottom) {
      setActiveSection("contact");
    } else {
      let found = false;
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.6) {
            setActiveSection(section);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("home");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", detectSection, { passive: true });
    detectSection(); // initialise on mount
    return () => {
      window.removeEventListener("scroll", detectSection);
      if (scrollLockTimer.current) clearTimeout(scrollLockTimer.current);
    };
  }, [detectSection]);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);

    scrollLockRef.current = true;
    if (scrollLockTimer.current) clearTimeout(scrollLockTimer.current);
    scrollLockTimer.current = setTimeout(() => {
      scrollLockRef.current = false;
    }, 900);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (isSubPage) {
      e.preventDefault();
      navigate("/#contact");
      setIsMobileMenuOpen(false);
    } else {
      handleNavClick("contact");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-500">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-7xl flex items-center justify-between px-6 transition-all duration-700 py-3 rounded-2xl border ${
          isScrolled
            ? "glass-card border-primary/30 shadow-[0_0_40px_rgba(0,255,255,0.15)] backdrop-blur-2xl"
            : "bg-transparent border-transparent"
        }`}
      >
        <MotionLink
          to="/"
          className="relative flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
          onClick={(e) => {
            if (!isSubPage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.replaceState(null, "", window.location.pathname);
              handleNavClick("home");
            }
          }}
        >
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-colors duration-300">
            <span className="text-primary font-bold text-lg group-hover:text-primary-foreground transition-colors duration-300">
              U
            </span>
          </div>
          <span className="font-bold text-lg hidden sm:block tracking-tight text-foreground">
            Utsav<span className="text-primary/60">.</span>
          </span>
        </MotionLink>

        <AnimatePresence mode="wait">
          {isSubPage ? (
            <motion.div
              key="back"
              variants={backVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="hidden lg:flex items-center gap-2"
            >
              <Link
                to="/"
                className="group flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                <motion.span
                  className="flex items-center justify-center w-6 h-6 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ x: -2 }}
                >
                  <ArrowLeft size={13} className="text-primary" />
                </motion.span>
                <span className="text-xs font-semibold tracking-wide text-muted-foreground group-hover:text-foreground transition-colors uppercase">
                  Home
                </span>
              </Link>

              <ChevronRight size={14} className="text-white/20" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_12px_rgba(0,255,255,0.12)]">
                {pageLabel}
              </span>
            </motion.div>
          ) : (
            /* Desktop nav links */
            <motion.div
              key="nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden lg:flex items-center gap-1"
            >
              {desktopNavLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                const section = link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(section)}
                    className={`relative px-3 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-300 rounded-lg whitespace-nowrap ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {/* Per-item pill — no cross-item layoutId ghost */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          key="pill"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute inset-0 bg-primary/20 rounded-lg -z-10 shadow-[0_0_15px_rgba(0,255,255,0.15)]"
                        />
                      )}
                    </AnimatePresence>
                    {link.name}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            onClick={handleContactClick}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(0, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all animate-pulse-glow"
          >
            <Mail size={14} />
            Connect
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground relative z-[60]"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <div className="flex flex-col gap-1.5 items-end group">
                <div className="w-6 h-0.5 bg-primary rounded-full group-hover:w-8 transition-all" />
                <div className="w-8 h-0.5 bg-foreground rounded-full" />
                <div className="w-4 h-0.5 bg-primary rounded-full group-hover:w-8 transition-all" />
              </div>
            )}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-2xl z-[55] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm glass-card border-none rounded-l-3xl z-[58] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex flex-col flex-1 overflow-y-auto overscroll-contain p-8 pt-24 gap-5">
                {isSubPage ? (
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-xl font-bold text-primary"
                  >
                    <ArrowLeft size={20} />
                    Back to Home
                  </Link>
                ) : (
                  mobileNavLinks.map((link, index) => {
                    const isActive = activeSection === link.href.slice(1);
                    const section = link.href.slice(1);
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        onClick={(e) => {
                          if (section === "contact") {
                            handleContactClick(e);
                          } else {
                            handleNavClick(section);
                          }
                        }}
                        className={`relative flex items-center justify-between text-2xl font-bold transition-colors duration-200 group pl-4 ${
                          isActive
                            ? "text-primary"
                            : "text-foreground/70 hover:text-primary"
                        }`}
                      >
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              key="bar"
                              initial={{ scaleY: 0, opacity: 0 }}
                              animate={{ scaleY: 1, opacity: 1 }}
                              exit={{ scaleY: 0, opacity: 0 }}
                              transition={{ duration: 0.18, ease: "easeOut" }}
                              className="absolute left-0 top-1 -translate-y-1/2 w-[3px] h-6 bg-primary rounded-full shadow-[0_0_8px_rgba(0,255,255,0.7)] origin-center"
                            />
                          )}
                        </AnimatePresence>

                        <span>{link.name}</span>

                        <AnimatePresence>
                          {isActive ? (
                            <motion.div
                              key="dot-active"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ duration: 0.18, ease: "easeOut" }}
                              className="w-2 h-2 rounded-full bg-primary shadow-[0_0_6px_rgba(0,255,255,0.6)]"
                            />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
                          )}
                        </AnimatePresence>
                      </motion.a>
                    );
                  })
                )}

                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="text-sm text-muted-foreground mb-4">
                    Let's work together
                  </p>
                  <a
                    href="mailto:utsavmandani3@gmail.com"
                    className="text-lg font-medium text-primary block mb-2 underline"
                  >
                    utsavmandani3@gmail.com
                  </a>
                  <a
                    href="tel:+919327165169"
                    className="text-lg font-medium text-white block"
                  >
                    +91 9327165169
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
