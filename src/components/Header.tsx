import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header: React.FC = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <motion.header
      initial={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      style={{ willChange: prefersReducedMotion ? "auto" : "transform" }}
    >
      {/* Static background elements - no animation for performance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-12 lg:space-x-16">
        {/* Optimized Profile Avatar */}
        <motion.div
          initial={prefersReducedMotion ? {} : { scale: 0.8, opacity: 0 }}
          animate={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
          className="relative group flex-shrink-0"
          style={{ willChange: prefersReducedMotion ? "auto" : "transform" }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative cursor-pointer">
                  <Avatar className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 border-4 border-white shadow-2xl">
                    <AvatarFallback className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-cyan-400 to-purple-500 text-white">
                      TU
                    </AvatarFallback>
                  </Avatar>

                  {/* Static Status Badge */}
                  <div className="absolute -bottom-3 -right-3">
                    <Badge className="bg-gradient-to-r from-green-400 to-green-500 text-white border-4 border-white h-12 w-12 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-sm" />
                    </Badge>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Available for new opportunities!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>

        {/* Simplified Header Info */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="flex-1 space-y-4 sm:space-y-6 text-center sm:text-left"
          style={{ willChange: prefersReducedMotion ? "auto" : "transform" }}
        >
          <div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text-neon mb-3 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', 'Inter', 'system-ui'" }}
            >
              TO ANH TU
            </h1>
            <Badge
              variant="outline"
              className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 tracking-wider uppercase border-cyan-400 bg-cyan-400/10"
            >
              Backend Developer
            </Badge>
          </div>

          <div className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Passionate Backend Developer born on December 20, 1998, from Ha Hoa
            - Phu Tho - Vietnam. With{" "}
            <span className="font-semibold text-green-400">5 years</span> of
            Backend development experience, seeking dynamic work environment to
            develop programming skills and knowledge.
          </div>

          {/* Contact Info */}
          {/*<div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-slate-300">*/}
          {/*  {[*/}
          {/*    {*/}
          {/*      icon: "fas fa-phone",*/}
          {/*      text: "0966069045",*/}
          {/*      variant: "default" as const,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      icon: "fas fa-envelope",*/}
          {/*      text: "toanhtu.98@gmail.com",*/}
          {/*      variant: "secondary" as const,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      icon: "fas fa-map-marker-alt",*/}
          {/*      text: "Ha Hoa, Phu Tho, Vietnam",*/}
          {/*      variant: "outline" as const,*/}
          {/*    },*/}
          {/*  ].map((item, index) => (*/}
          {/*    <ContactButton key={index} {...item} />*/}
          {/*  ))}*/}
          {/*</div>*/}
        </motion.div>
      </div>
    </motion.header>
  );
};

const ContactButton: React.FC<{
  icon: string;
  text: string;
  variant: "default" | "secondary" | "outline";
}> = ({ icon, text, variant }) => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const handleClick = () => {
    if (text.includes("@")) {
      window.open(`mailto:${text}`, "_blank");
    } else if (text.includes("096")) {
      window.open(`tel:${text}`, "_blank");
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            style={{ willChange: prefersReducedMotion ? "auto" : "transform" }}
          >
            <Button
              variant={variant}
              onClick={handleClick}
              className="text-sm sm:text-base gap-3 hover:bg-white/10 transition-colors duration-200"
            >
              <i className={icon} />
              <span className="font-medium">{text}</span>
            </Button>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {text.includes("@")
              ? "Send email"
              : text.includes("096")
              ? "Call phone"
              : "View location"}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Header;
