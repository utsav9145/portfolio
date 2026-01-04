import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowSpringConfig = { damping: 35, stiffness: 200 };
  const glowXSpring = useSpring(glowX, glowSpringConfig);
  const glowYSpring = useSpring(glowY, glowSpringConfig);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Check if hovering over magnetic elements
      const target = e.target as HTMLElement;
      const magneticElement = target.closest("[data-magnetic]") as HTMLElement;
      const hoverElement = target.closest("a, button, [data-hover]");

      if (magneticElement) {
        setIsMagnetic(true);
        const rect = magneticElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate magnetic pull (30% towards center)
        const pullStrength = 0.3;
        const magnetX = centerX + (clientX - centerX) * pullStrength;
        const magnetY = centerY + (clientY - centerY) * pullStrength;
        
        cursorX.set(magnetX);
        cursorY.set(magnetY);
        
        // Also apply magnetic effect to the element itself
        const deltaX = (clientX - centerX) * 0.2;
        const deltaY = (clientY - centerY) * 0.2;
        magneticElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      } else {
        setIsMagnetic(false);
        cursorX.set(clientX);
        cursorY.set(clientY);
        
        // Reset any previously affected magnetic elements
        document.querySelectorAll("[data-magnetic]").forEach((el) => {
          (el as HTMLElement).style.transform = "";
        });
      }

      glowX.set(clientX);
      glowY.set(clientY);

      setIsHovering(!!hoverElement);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => {
      document.querySelectorAll("[data-magnetic]").forEach((el) => {
        (el as HTMLElement).style.transform = "";
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, glowX, glowY]);

  // Don't show custom cursor on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          {/* Inner dot */}
          <div
            className={`w-3 h-3 rounded-full bg-foreground transition-all duration-200 ${
              isHovering ? "opacity-0" : "opacity-100"
            }`}
          />
          
          {/* Hover ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-foreground"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isHovering ? 1 : 0,
              opacity: isHovering ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: glowXSpring,
          y: glowYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isMagnetic ? 2 : isHovering ? 1.8 : 1,
            opacity: isMagnetic ? 0.8 : isHovering ? 0.6 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="w-32 h-32 rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(174, 72%, 56%, 0.15) 0%, transparent 70%)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Magnetic indicator ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-primary/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isMagnetic ? 1 : 0,
            opacity: isMagnetic ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
};
