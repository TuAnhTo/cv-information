import React from "react";

const WorkExperience: React.FC = () => {
  return (
    <section className="space-y-6 sm:space-y-8">
      <h2
        className="text-2xl sm:text-3xl font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between gradient-text animate-fade-in sticky top-0 bg-white/90 backdrop-blur-sm z-10 py-4 -mx-4 px-4 rounded-lg"
        style={{ fontFamily: "'Space Grotesk', 'Inter', 'system-ui'" }}
      >
        <div className="flex items-center">
          <i className="fas fa-briefcase text-cyan-400 mr-3 sm:mr-4 text-xl sm:text-2xl"></i>
          Work Experience
        </div>
      </h2>

      {/* Scrollable projects container */}
      <div className="max-h-[85vh] overflow-y-auto pr-2 custom-scrollbar relative">
        <div className="relative pl-6 sm:pl-8 timeline-line">
          <ExperienceItem
            company=""
            position="Backend Developer"
            period="Jan 2025 - Present"
            colorScheme="from-cyan-400 to-purple-500"
            projects={[
              {
                title: "Google Shopping Feed (Jan 2025 - Present)",
                teamSize: "3 people",
                description:
                  "Shopify App project integrated with Google Merchant Center to sync products from Shopify to Google Shopping.",
                techStack: [
                  "Node.js + NestJS (TypeScript)",
                  "MongoDB + Mongoose ODM",
                  "Redis (caching & queues)",
                  "BullMQ job processing",
                  "Docker containerization",
                ],
                databaseDesign: [
                  "MongoDB schema design for product feeds with optimized indexing",
                  "Collections design: Products, Feeds, GoogleMerchant, SyncLogs",
                  "Compound indexes for multi-field queries (shopId + status + updatedAt)",
                  "TTL indexes for automatic cleanup of temporary data",
                  "Aggregation pipelines for complex reporting and analytics",
                  "Sharding strategy for large-scale data distribution",
                ],
                features: [
                  "Shopify App integration (OAuth, Webhooks, GraphQL API)",
                  "Google Shopping feeds management",
                  "Google Merchant Center API integration",
                  "Background job processing with queue system",
                  "Multi-language support",
                  "Real-time sync Shopify ↔ Google",
                ],
                architecture: [
                  "Modular NestJS structure",
                  "Repository pattern + Domain models",
                  "Microservices approach with separate modules",
                  "RESTful APIs + GraphQL integration",
                  "Middleware for auth, validation, security",
                ],
                tags: [
                  "Node.js",
                  "NestJS",
                  "TypeScript",
                  "MongoDB",
                  "Redis",
                  "BullMQ",
                  "Google API",
                  "Shopify API",
                  "Docker",
                ],
              },
            ]}
          />

          <ExperienceItem
            company=""
            position="Backend Developer"
            period="May 2023 - 2025"
            colorScheme="from-purple-500 to-pink-400"
            achievement="Achieved 4.8 star rating within one year!"
            projects={[
              {
                title: "Gift Card (May 2023 - Present)",
                teamSize: "2 people",
                description:
                  "Gift card management Shopify App built with NestJS + TypeScript architecture, using MongoDB as the main database.",
                techStack: [
                  "NestJS/Node.js with TypeScript",
                  "MongoDB design and optimization",
                  "Redis queue management",
                  "RabbitMQ message broker",
                  "AWS services (S3, SES) integration",
                  "Shopify API development",
                  "Docker containerization",
                  "GitLab CI/CD pipeline",
                ],
                databaseDesign: [
                  "MongoDB schema design for Gift Card system with optimized performance",
                  "Collections: GiftCards, Transactions, Customers, Templates, Analytics",
                  "Embedded vs Referenced documents strategy for gift card transactions",
                  "Index optimization for gift card lookup by code (unique + sparse)",
                  "Time-series design for transaction history tracking",
                  "Data archiving strategy for expired gift cards",
                  "MongoDB aggregation for revenue reporting and analytics",
                ],
                architecture: [
                  "Microservices communication",
                  "Event-driven programming",
                  "Queue-based processing",
                  "Modular monolith design",
                  "Clean Architecture principles",
                ],
                tags: [
                  "NestJS",
                  "TypeScript",
                  "MongoDB",
                  "RabbitMQ",
                  "AWS",
                  "GitLab CI/CD",
                ],
              },
            ]}
          />

          <ExperienceItem
            company=""
            position="Backend Developer"
            period="Sep 2022 - Apr 2023"
            colorScheme="from-teal-400 to-cyan-500"
            projects={[
              {
                title: "Payment-Donate (Sep 2022 - Apr 2023)",
                teamSize: "4 people",
                description:
                  "Real-time donation system for live streaming platforms",
                features: [
                  "Real-time listener for donation events, displaying messages on live streams",
                  "Website platform enabling users to donate to live streamers with interactive features",
                ],
                databaseDesign: [
                  "MySQL relational database for user management and donation tracking",
                  "MongoDB for real-time messages and streaming data",
                  "Hybrid database architecture (MySQL + MongoDB)",
                  "Database normalization for user profiles and payment records",
                  "Real-time data sync between MySQL transactions and MongoDB events",
                  "Indexing strategy for fast donation lookup and streamer analytics",
                ],
                tags: ["Node.js", "Socket.io", "Vue.js", "MongoDB", "MySQL"],
              },
            ]}
          />

          <ExperienceItem
            company=""
            position="Backend Developer"
            period="Apr 2022 - Apr 2023"
            colorScheme="from-green-400 to-cyan-400"
            projects={[
              {
                title: "Onlineface.jp & Auto-academy.com (Oct 2022 - Apr 2023)",
                teamSize: "5 people",
                description:
                  "AI-powered driving education platform for license acquisition with intelligent progress tracking. Project maintenance and code refactoring",
                databaseDesign: [
                  "MySQL database optimization for user progress tracking",
                  "Relational schema design for courses, lessons, and user progress",
                  "Performance optimization with proper indexing on user_id and course_id",
                  "Database migration and refactoring for improved query performance",
                  "Data archiving strategy for completed courses and user activities",
                ],
                tags: [
                  "PHP",
                  "Laravel",
                  "ReactJS",
                  "Docker",
                  "AWS",
                  "MySQL",
                  "Azure",
                ],
              },
              {
                title: "Bstudy.vn (Apr 2022 - Sep 2022)",
                teamSize: "5 people",
                description:
                  "English learning application for children - Backend development",
                tags: [
                  "PHP",
                  "Laravel",
                  "Vue.js",
                  "Docker",
                  "AWS",
                  "MySQL",
                  "Flutter",
                ],
              },
              {
                title: "Hada-lounge.com (Dec 2021 - Apr 2022)",
                teamSize: "6 people",
                description:
                  "Beauty services platform with cosmetic consultations, appointment booking, and online assessments",
                databaseDesign: [
                  "MySQL relational database design for beauty clinic management",
                  "Normalized schema for appointments, customers, treatments, and staff",
                  "Database optimization for appointment scheduling queries",
                  "Foreign key constraints ensuring data integrity across clinic operations",
                  "Query optimization for CSV export functionality",
                ],
                features: [
                  "Developed and extended platform functionality",
                  "Created notification system for multiple clinic users",
                  "Implemented CSV export functionality for clinic members by examination type",
                  "Project maintenance and code refactoring",
                ],
                tags: ["PHP", "Laravel", "Vue.js", "Docker", "AWS", "MySQL"],
              },
            ]}
          />

          <ExperienceItem
            company=""
            position="Node.js Developer"
            period="Mar 2021 - Apr 2022"
            colorScheme="from-orange-400 to-red-500"
            projects={[
              {
                title: "Reos.vn (Mar 2021 - Sep 2021)",
                teamSize: "5 people",
                databaseDesign: [
                  "MySQL database management and optimization for e-commerce platform",
                  "Schema design for product catalog, orders, and payment transactions",
                  "Database indexing for improved query performance on product searches",
                  "Data integrity constraints for payment processing workflows",
                  "Database backup and recovery strategy implementation",
                ],
                features: [
                  "Database management and data manipulation",
                  "Online payment gateway integration (VNPAY)",
                  "Bug fixes and software maintenance",
                ],
                tags: ["Node.js", "Express", "PugJS", "Docker", "PM2", "MySQL"],
              },
              {
                title: "Toyota_crm (Apr 2021 - Jul 2021)",
                teamSize: "3 people",
                databaseDesign: [
                  "MySQL database design for customer relationship management system",
                  "Prisma ORM integration for type-safe database operations",
                  "Relational schema design for customers, leads, and sales pipeline",
                  "Database performance optimization for CRM dashboard queries",
                  "Data migration scripts for legacy Toyota customer data",
                ],
                features: [
                  "Database management and data operations",
                  "Software debugging and error correction",
                  "Customer requirements analysis and implementation",
                ],
                tags: [
                  "Node.js",
                  "Express",
                  "Prisma",
                  "Docker",
                  "PM2",
                  "MySQL",
                ],
              },
            ]}
          />

          <ExperienceItem
            company=""
            position="Node.js Developer"
            period="Dec 2020 - Mar 2021"
            colorScheme="from-yellow-400 to-orange-500"
            projects={[
              {
                teamSize: "2 people",
                description:
                  "Freelance Node.js development projects for various clients",
                databaseDesign: [
                  "PostgreSQL database design for serverless applications",
                  "Schema optimization for AWS Lambda cold start performance",
                  "Connection pooling strategy for PostgreSQL with Lambda",
                  "Database migration scripts for client projects",
                  "Message queue database design with RabbitMQ integration",
                ],
                tags: [
                  "Node.js",
                  "Express",
                  "AWS Lambda",
                  "RabbitMQ",
                  "Docker",
                  "PostgreSQL",
                ],
              },
            ]}
          />

          <ExperienceItem
            company=""
            position="Node.js Developer"
            period="May 2020 - Dec 2020"
            colorScheme="from-indigo-400 to-purple-500"
            projects={[
              {
                title: "ITOKIN (May 2020 - Dec 2020)",
                teamSize: "4 people",
                databaseDesign: [
                  "MongoDB schema design for LinkedIn automation and contact management",
                  "Document structure optimization for user profiles and connection data",
                  "Indexing strategy for efficient contact search and filtering",
                  "Background job queue storage in MongoDB collections",
                  "Data retention policies for automated connection tracking",
                ],
                features: [
                  "LinkedIn automation tool for professional networking",
                  "Background task system for automated connections",
                  "API design for system version tracking",
                ],
                tags: ["Node.js", "Express", "MongoDB", "Docker"],
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

interface Project {
  title?: string;
  teamSize: string;
  description?: string;
  techStack?: string[];
  databaseDesign?: string[];
  features?: string[];
  architecture?: string[];
  tags: string[];
}

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  colorScheme: string;
  achievement?: string;
  projects: Project[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  period,
  colorScheme,
  achievement,
  projects,
}) => {
  return (
    <div className="relative mb-10 sm:mb-12 md:mb-16 group">
      <div
        className={`absolute -left-4 sm:-left-6 top-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${colorScheme} rounded-full border-3 sm:border-4 border-white shadow-lg group-hover:scale-125 transition-all duration-500 animate-pulse`}
      ></div>

      <div
        className={`glass p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover-lift card-3d border border-white/20 group-hover:border-cyan-400/30 transition-all duration-500`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-3 sm:gap-0">
          <div>
            <h3
              className="text-xl sm:text-2xl font-bold text-slate-900 mb-2"
              style={{ fontFamily: "'Space Grotesk', 'Inter', 'system-ui'" }}
            >
              {position}
            </h3>
            <p className="text-lg sm:text-xl font-semibold gradient-text-neon">
              {company}
            </p>
          </div>
          <span
            className={`bg-gradient-to-r ${colorScheme} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg flex-shrink-0`}
          >
            {period}
          </span>
        </div>

        {achievement && (
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 p-6 mb-6 rounded-xl">
            <div className="flex items-center">
              <i className="fas fa-star text-yellow-500 mr-3 text-xl animate-bounce"></i>
              <span className="text-sm font-bold text-yellow-800">
                {achievement}
              </span>
            </div>
          </div>
        )}

        <div className="space-y-6 mb-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {projects[0]?.tags.map((tag, index) => (
            <TechTag key={index} name={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="glass-dark p-4 sm:p-6 rounded-xl">
    {project.title && (
      <h4 className="font-bold text-slate-800 text-base sm:text-lg mb-2 sm:mb-3 gradient-text">
        {project.title}
      </h4>
    )}
    <p className="text-xs sm:text-sm text-slate-700 mb-2">
      Team size: {project.teamSize}
    </p>
    {project.description && (
      <p className="text-xs sm:text-sm text-slate-700 mb-3 sm:mb-4">
        {project.description}
      </p>
    )}

    {project.techStack && (
      <SkillSection
        title="Backend Tech Stack:"
        items={project.techStack}
        icon="fas fa-check-circle"
        color="text-green-400"
      />
    )}

    {project.databaseDesign && (
      <SkillSection
        title="Database Design:"
        items={project.databaseDesign}
        icon="fas fa-database"
        color="text-purple-400"
      />
    )}

    {project.features && (
      <SkillSection
        title="Key Features:"
        items={project.features}
        icon="fas fa-star"
        color="text-orange-400"
      />
    )}

    {project.architecture && (
      <SkillSection
        title="Architecture:"
        items={project.architecture}
        icon="fas fa-cog"
        color="text-cyan-400"
      />
    )}
  </div>
);

const SkillSection: React.FC<{
  title: string;
  items: string[];
  icon: string;
  color: string;
}> = ({ title, items, icon, color }) => (
  <div className="mb-4">
    <h5
      className={`font-bold text-slate-800 text-xs mb-2 sm:mb-3 uppercase tracking-wide neon-text ${color}`}
    >
      {title}
    </h5>
    <div className="grid grid-cols-1 gap-1 text-xs text-slate-600">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <i className={`${icon} ${color} mr-2`}></i>
          {item}
        </div>
      ))}
    </div>
  </div>
);

const TechTag: React.FC<{ name: string }> = ({ name }) => {
  const getTagColor = (name: string) => {
    const colorMap: { [key: string]: string } = {
      "Node.js": "from-green-400 to-green-500",
      NestJS: "from-red-400 to-red-500",
      TypeScript: "from-blue-400 to-blue-500",
      MongoDB: "from-green-400 to-green-500",
      Redis: "from-red-400 to-red-500",
      AWS: "from-orange-400 to-orange-500",
      Docker: "from-gray-400 to-gray-500",
      PHP: "from-purple-400 to-purple-500",
      Laravel: "from-red-400 to-red-500",
      "Vue.js": "from-green-400 to-green-500",
      React: "from-blue-400 to-blue-500",
      MySQL: "from-yellow-400 to-yellow-500",
    };
    return colorMap[name] || "from-gray-400 to-gray-500";
  };

  return (
    <span
      className={`bg-gradient-to-r ${getTagColor(
        name
      )} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg hover:scale-110 transition-transform duration-200`}
    >
      {name}
    </span>
  );
};

export default WorkExperience;
