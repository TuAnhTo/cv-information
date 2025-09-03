import { motion } from "framer-motion";

// Optimized animation variants for performance
const getContainerVariants = (prefersReducedMotion: boolean) => ({
  hidden: prefersReducedMotion ? {} : { opacity: 0, x: -30 },
  visible: prefersReducedMotion
    ? {}
    : {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.4,
          staggerChildren: 0.05,
        },
      },
});

const getItemVariants = (prefersReducedMotion: boolean) => ({
  hidden: prefersReducedMotion ? {} : { opacity: 0, y: 15 },
  visible: prefersReducedMotion
    ? {}
    : {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 },
      },
});

const Sidebar: React.FC = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const containerVariants = getContainerVariants(prefersReducedMotion);
  const itemVariants = getItemVariants(prefersReducedMotion);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
      style={{ willChange: prefersReducedMotion ? "auto" : "transform" }}
    >
      {/* Floating Cards Layout */}
      <motion.div variants={itemVariants}>
        <AboutSection />
      </motion.div>

      <motion.div variants={itemVariants}>
        <EducationSection />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TechnicalSkillsSection />
      </motion.div>

      <motion.div variants={itemVariants}>
        <DetailedSkillsSection />
      </motion.div>

      <motion.div variants={itemVariants}>
        <LanguagesSection />
      </motion.div>
    </motion.div>
  );
};

const AboutSection: React.FC = () => (
  <section className="space-y-3 sm:space-y-4">
    <h2
      className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider border-b-2 border-gradient-to-r from-cyan-400 to-purple-500 pb-3 animate-fade-in"
      style={{ fontFamily: "'Space Grotesk', 'Inter', 'system-ui'" }}
    >
      <i className="fas fa-user-circle text-cyan-400 mr-3"></i>
      About Me
    </h2>
    <p className="text-slate-700 leading-relaxed text-xs sm:text-sm animate-fade-in">
      <strong>Personal Information:</strong>
      <br />
      • Full Name: To Anh Tu
      <br />
      • Date of Birth: December 20, 1998 (26 years old)
      <br />
      • Hometown: Ha Hoa, Phu Tho, Vietnam
      <br />
      • Experience: 5 years of Backend development
      <br />
      <br />
      Passionate Backend Developer with expertise in modern web technologies and
      microservices architecture. Experienced in building scalable applications
      and leading development teams across various industries.
    </p>
  </section>
);

const EducationSection: React.FC = () => (
  <section className="space-y-3 sm:space-y-4">
    <h2
      className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider border-b-2 border-gradient-to-r from-purple-500 to-pink-400 pb-3"
      style={{ fontFamily: "'Space Grotesk', 'Inter', 'system-ui'" }}
    >
      <i className="fas fa-graduation-cap text-purple-500 mr-3"></i>
      Education
    </h2>
    <div className="relative pl-4 sm:pl-6 border-l-2 border-gradient-to-b from-cyan-400 to-purple-500 hover-lift">
      <div className="absolute -left-2 sm:-left-3 top-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full shadow-lg animate-pulse"></div>
      <div className="glass p-3 sm:p-4 rounded-xl space-y-2">
        <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
          Bachelor of Information Technology
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm">
          Hanoi University of Business and Technology
        </p>
        <span className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
          2017 - 2021
        </span>
      </div>
    </div>
  </section>
);

const TechnicalSkillsSection: React.FC = () => {
  const skills = [
    "Node.js",
    "NestJS / Express",
    "TypeScript",
    "PHP",
    "React",
    "Vue.js",
  ];
  const techStack = [
    { name: "AWS", color: "from-orange-400 to-orange-500" },
    { name: "GitLab CI/CD", color: "from-indigo-400 to-indigo-500" },
    { name: "Redis", color: "from-purple-400 to-purple-500" },
    { name: "RabbitMQ", color: "from-pink-400 to-pink-500" },
    { name: "Docker", color: "from-blue-400 to-blue-500" },
    { name: "MongoDB", color: "from-green-400 to-green-500" },
    { name: "MySQL", color: "from-yellow-400 to-yellow-500" },
    { name: "Prisma", color: "from-purple-400 to-purple-500" },
    { name: "Socket.io", color: "from-red-400 to-red-500" },
    { name: "PM2", color: "from-indigo-400 to-indigo-500" },
  ];

  return (
    <section className="space-y-3 sm:space-y-4">
      <h2
        className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider border-b-2 border-gradient-to-r from-green-400 to-cyan-400 pb-3"
        style={{ fontFamily: "'Space Grotesk', 'Inter', 'system-ui'" }}
      >
        <i className="fas fa-code text-green-400 mr-3"></i>
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 gap-2 sm:gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="glass p-3 sm:p-4 rounded-xl hover-lift card-3d"
          >
            <span className="font-medium text-slate-800 text-xs sm:text-sm">
              {skill}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:mt-8">
        <h3 className="font-semibold text-slate-700 text-xs sm:text-sm mb-3 sm:mb-4 gradient-text">
          Technologies & Tools
        </h3>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`bg-gradient-to-r ${tech.color} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce-subtle hover:scale-110 transition-transform duration-200`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const DetailedSkillsSection: React.FC = () => {
  const backendSkills = [
    "Performance and scalability optimization",
    "API design",
    "Express, NestJS, ES6, Microservices",
    "Clean code & TeamWork",
    "Project estimation & time management",
    "Scrum, Kanban",
    "Git, PM2, Redis",
    "Design Patterns",
    "OOP, MySQL, MongoDB, Prisma, Sequelize",
    "AWS S3, Lambda functions, RabbitMQ, socket.io, pusher, firebase, cloudwatch, cloudfront, lightsail, nginx, docker",
    "AWS Load Balancer",
    "CI/CD, GitLab runner, GitHub actions",
  ];

  const frontendSkills = [
    "React, Vue.js frameworks",
    "React hooks and component lifecycle",
    "HTML, CSS, ShadCN UI, Tailwind CSS, Bootstrap",
  ];

  const osSkills = ["macOS (Primary)", "Windows 10/11", "Ubuntu Linux"];

  return (
    <section className="space-y-3 sm:space-y-4">
      <h2
        className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider border-b-2 border-gradient-to-r from-purple-500 to-pink-400 pb-3"
        style={{ fontFamily: "'Space Grotesk', 'Inter', 'system-ui'" }}
      >
        <i className="fas fa-cogs text-purple-500 mr-3"></i>
        Detailed Skills
      </h2>

      <SkillCategory
        title="Backend"
        icon="fas fa-server"
        color="text-cyan-400"
        skills={backendSkills}
      />
      <SkillCategory
        title="Frontend"
        icon="fas fa-desktop"
        color="text-green-400"
        skills={frontendSkills}
      />
      <SkillCategory
        title="Operating Systems"
        icon="fas fa-desktop"
        color="text-orange-400"
        skills={osSkills}
      />
    </section>
  );
};

const SkillCategory: React.FC<{
  title: string;
  icon: string;
  color: string;
  skills: string[];
}> = ({ title, icon, color, skills }) => {
  const colors = [
    "bg-cyan-400",
    "bg-purple-500",
    "bg-pink-400",
    "bg-green-400",
    "bg-orange-400",
  ];

  return (
    <div className="glass p-3 sm:p-4 rounded-xl hover-lift">
      <h3
        className={`font-semibold text-slate-900 text-sm sm:text-base mb-3 ${color}`}
      >
        <i className={`${icon} mr-2`}></i>
        {title}
      </h3>
      <div className="text-xs sm:text-sm text-slate-700 space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span
              className={`w-2 h-2 ${
                colors[index % colors.length]
              } rounded-full mr-2`}
            ></span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const LanguagesSection: React.FC = () => (
  <section className="space-y-3 sm:space-y-4">
    <h2
      className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider border-b-2 border-gradient-to-r from-orange-400 to-pink-400 pb-3"
      style={{ fontFamily: "'Space Grotesk', 'Inter', 'system-ui'" }}
    >
      <i className="fas fa-language text-orange-400 mr-3"></i>
      Languages
    </h2>
    <div className="space-y-2 sm:space-y-3">
      <div className="flex justify-between items-center glass p-2 sm:p-3 rounded-xl hover-lift">
        <span className="font-medium text-slate-800 text-xs sm:text-sm">
          Vietnamese
        </span>
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          Native
        </span>
      </div>
      <div className="flex justify-between items-center glass p-2 sm:p-3 rounded-xl hover-lift">
        <span className="font-medium text-slate-800 text-xs sm:text-sm">
          English
        </span>
        <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          Intermediate
        </span>
      </div>
    </div>
  </section>
);

export default Sidebar;
