import React from "react";
import { motion } from "framer-motion";

interface ModernSectionProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  gradient?: string;
  delay?: number;
}

const ModernSection: React.FC<ModernSectionProps> = ({
  title,
  icon,
  children,
  gradient = "from-cyan-400 to-purple-500",
  delay = 0,
}) => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <motion.section
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="space-y-4 sm:space-y-6"
    >
      <div className="relative">
        <h2
          className={`text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 uppercase tracking-wider pb-4 mb-6 relative overflow-hidden`}
          style={{ fontFamily: "'Space Grotesk', 'Inter', 'system-ui'" }}
        >
          <span className="relative z-10 flex items-center">
            <i className={`${icon} text-transparent bg-gradient-to-r ${gradient} bg-clip-text mr-3`}></i>
            {title}
          </span>
          
          {/* Modern underline with gradient */}
          <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${gradient} transform origin-left`}>
            <motion.div
              initial={prefersReducedMotion ? {} : { scaleX: 0 }}
              animate={prefersReducedMotion ? {} : { scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: delay + 0.2,
                ease: "easeOut",
              }}
              className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500"
            />
          </div>
        </h2>
      </div>

      <div className="space-y-4">{children}</div>
    </motion.section>
  );
};

export default ModernSection;