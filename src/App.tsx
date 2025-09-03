import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import WorkExperience from "./components/WorkExperience";
import KeyAchievements from "./components/KeyAchievements";

function App() {
  useEffect(() => {
    // Add Font Awesome
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Check user's motion preference
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-sans text-slate-800 antialiased overflow-x-hidden min-h-screen">
      {/* Simplified background - no animation */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-400/10"></div>
      </div>

      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full mx-auto my-4 md:my-8 bg-white/80 backdrop-blur-xl shadow-2xl rounded-xl md:rounded-3xl overflow-hidden border border-white/20 px-2 md:px-6 lg:px-8"
        style={{
          willChange: prefersReducedMotion ? "auto" : "transform",
          transform: "translate3d(0,0,0)", // Force GPU acceleration
        }}
      >
        {/* Static gradient border - no animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 opacity-20 pointer-events-none" />

        {/* Header Section */}
        <Header />

        {/* Simplified Layout */}
        <div className="relative min-h-screen">
          {/* Static grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.2) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative z-10">
            {/* Left Sidebar */}
            <motion.div
              initial={prefersReducedMotion ? {} : { x: -50, opacity: 0 }}
              animate={prefersReducedMotion ? {} : { x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:col-span-4 lg:col-start-1 space-y-6 p-4 lg:p-6"
              style={{
                willChange: prefersReducedMotion ? "auto" : "transform",
              }}
            >
              <Sidebar />
            </motion.div>

            {/* Main Content */}
            <motion.main
              initial={prefersReducedMotion ? {} : { x: 50, opacity: 0 }}
              animate={prefersReducedMotion ? {} : { x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-8 lg:col-start-5 p-4 sm:p-6 md:p-8 lg:p-12 space-y-12 md:space-y-16"
              style={{
                willChange: prefersReducedMotion ? "auto" : "transform",
              }}
            >
              <WorkExperience />
              <KeyAchievements />
            </motion.main>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="text-center py-12 text-slate-500 text-sm relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-500/5 to-pink-400/5 blur-3xl"></div>
        <div className="relative z-10">
          <p
            className="font-semibold"
            style={{ fontFamily: "'Space Grotesk', 'Inter', 'system-ui'" }}
          >
            © 2025 TO ANH TU - Backend Developer
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
