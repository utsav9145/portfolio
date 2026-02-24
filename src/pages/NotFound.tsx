import { motion } from "framer-motion";
import { Home, ArrowLeft, Ghost, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
        />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 text-center max-w-2xl px-4">
        {/* Floating Icon Group */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block mb-10"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl glass-card flex items-center justify-center border-primary/20 shadow-[0_0_50px_rgba(0,255,255,0.1)] mx-auto"
          >
            <Compass size={64} className="text-primary animate-pulse-glow" />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 -right-4 w-12 h-12 bg-background/80 backdrop-blur-md rounded-full border border-primary/30 flex items-center justify-center shadow-lg"
          >
            <Ghost size={20} className="text-primary" />
          </motion.div>
        </motion.div>

        {/* 404 Glitch Text */}
        <div className="relative mb-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-8xl sm:text-9xl font-black tracking-tighter text-white/5 select-none"
          >
            404
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Lost in <span className="gradient-text">Space?</span>
            </h2>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-base sm:text-lg mb-12 max-w-md mx-auto leading-relaxed"
        >
          The page you are looking for has been moved to another dimension or
          doesn't exist in this timeline.
        </motion.p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(0, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,255,255,0.2)]"
          >
            <Home size={18} />
            Back to Reality
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              background: "rgba(255, 255, 255, 0.05)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 glass-card rounded-2xl font-bold text-sm uppercase tracking-widest border-white/5 transition-all text-white/70"
          >
            <ArrowLeft size={18} />
            Go Back
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
