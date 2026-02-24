import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  X,
  CheckCircle2,
  AlertCircle,
  Info,
  AlertTriangle,
} from "lucide-react";
import { ToastData, toast } from "@/hooks/use-gsap-toast";

interface GSAPToastProps {
  toastData: ToastData;
}

const GSAPToast: React.FC<GSAPToastProps> = ({ toastData }) => {
  const toastRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const getVariantStyles = () => {
    switch (toastData.variant) {
      case "success":
        return {
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/20",
          icon: <CheckCircle2 className="text-emerald-500" size={20} />,
          text: "text-emerald-500",
        };
      case "error":
        return {
          bg: "bg-red-500/10",
          border: "border-red-500/20",
          icon: <AlertCircle className="text-red-500" size={20} />,
          text: "text-red-500",
        };
      case "warning":
        return {
          bg: "bg-amber-500/10",
          border: "border-amber-500/20",
          icon: <AlertTriangle className="text-amber-500" size={20} />,
          text: "text-amber-500",
        };
      case "info":
      default:
        return {
          bg: "bg-blue-500/10",
          border: "border-blue-500/20",
          icon: <Info className="text-blue-500" size={20} />,
          text: "text-blue-500",
        };
    }
  };

  const styles = getVariantStyles();

  useEffect(() => {
    const el = toastRef.current;
    if (!el) return;

    // Entry animation
    timeline.current = gsap.timeline({
      onComplete: () => {
        // Auto dismiss
        gsap.delayedCall((toastData.duration || 3000) / 1000, handleDismiss);
      },
    });

    timeline.current.fromTo(
      el,
      {
        y: -50,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
    );

    return () => {
      if (timeline.current) timeline.current.kill();
    };
  }, []);

  const handleDismiss = () => {
    const el = toastRef.current;
    if (!el) return;

    gsap.to(el, {
      y: -20,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        toast.dismiss(toastData.id);
      },
    });
  };

  return (
    <div
      ref={toastRef}
      className={`flex items-center gap-3 px-4 py-3 min-w-[300px] max-w-md ${styles.bg} ${styles.border} border rounded-2xl backdrop-blur-md shadow-lg pointer-events-auto`}
    >
      <div className="flex-shrink-0">{styles.icon}</div>
      <p className="flex-grow text-sm font-medium text-foreground px-2">
        {toastData.message}
      </p>
      <button
        onClick={handleDismiss}
        className="flex-shrink-0 p-1 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default GSAPToast;
