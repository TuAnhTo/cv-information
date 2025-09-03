import React from "react";

interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  iconColor: string;
}

const KeyAchievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      icon: "fas fa-star",
      title: "4.8 Star App Rating",
      subtitle: "Gift Card Shopify App - 2024",
      description:
        "Achieved 4.8-star rating within one year of development using clean architecture and microservices.",
      color: "border-yellow-400",
      iconColor: "text-yellow-500",
    },
    {
      icon: "fas fa-cogs",
      title: "Microservices",
      subtitle: "VIFY Company - 2023-2025",
      description:
        "Successfully implemented microservices architecture and event-driven programming for large-scale projects.",
      color: "border-blue-400",
      iconColor: "text-blue-500",
    },
    {
      icon: "fas fa-users",
      title: "Team Leadership",
      subtitle: "Multiple Projects - 2021-2025",
      description:
        "Led and mentored development teams across various projects, managing teams of 2-6 developers.",
      color: "border-green-400",
      iconColor: "text-green-500",
    },
    {
      icon: "fas fa-globe",
      title: "Multi-Domain Expertise",
      subtitle: "Various Industries - 2020-2025",
      description:
        "Extensive experience developing applications across multiple domains: E-commerce, Healthcare, Education, Automotive.",
      color: "border-purple-400",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="space-y-6 sm:space-y-8">
      <h2
        className="text-2xl sm:text-3xl font-bold text-slate-900 uppercase tracking-wider flex items-center gradient-text"
        style={{ fontFamily: "'Space Grotesk', 'Inter', 'system-ui'" }}
      >
        <i className="fas fa-trophy text-orange-400 mr-3 sm:mr-4 text-xl sm:text-2xl animate-bounce"></i>
        Key Achievements
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} />
        ))}
      </div>
    </section>
  );
};

const AchievementCard: React.FC<{ achievement: Achievement }> = ({
  achievement,
}) => {
  return (
    <div
      className={`glass p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 ${achievement.color} shadow-lg hover-lift card-3d animate-fade-in`}
    >
      <div className="flex items-center mb-3 sm:mb-4">
        <i
          className={`${achievement.icon} ${achievement.iconColor} text-2xl sm:text-3xl mr-3 sm:mr-4 animate-pulse`}
        ></i>
        <h3
          className="text-lg sm:text-xl font-bold text-slate-900 gradient-text"
          style={{ fontFamily: "'Space Grotesk', 'Inter', 'system-ui'" }}
        >
          {achievement.title}
        </h3>
      </div>
      <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3 font-semibold">
        {achievement.subtitle}
      </p>
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        {achievement.description}
      </p>
    </div>
  );
};

export default KeyAchievements;
