import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe2, Handshake, Share2, Palette } from "lucide-react";
import {
  FaPenNib,
  FaFileSignature,
  FaExchangeAlt,
  FaTasks,
  FaCalendarCheck,
  FaUsers,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-main-sand border-main-taupe/30 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(124,143,94,0.08)] to-transparent group-hover:via-[rgba(124,143,94,0.18)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-main-taupe/20 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-main-ink">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-main-bone hover:bg-main-taupe/20 text-main-ink border-main-taupe/30 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Globe2,
      title: "Languages",
      color: "text-accent-forest",
      skills: [
        { name: "Spanish (Native)", icon: <span>🇪🇸</span> },
        { name: "English (Professional)", icon: <span>🇬🇧</span> },
        { name: "German (B1, ÖIF certified)", icon: <span>🇩🇪</span> },
      ],
    },
    {
      icon: Handshake,
      title: "Competencies",
      color: "text-accent-sage",
      skills: [
        { name: "Copywriting", icon: <FaPenNib className="w-4 h-4 text-accent-forest" /> },
        { name: "Diplomatic report writing", icon: <FaFileSignature className="w-4 h-4 text-accent-forest" /> },
        { name: "Translation (ES/EN)", icon: <FaExchangeAlt className="w-4 h-4 text-accent-gold" /> },
        { name: "Project management", icon: <FaTasks className="w-4 h-4 text-accent-sage" /> },
        { name: "Event coordination", icon: <FaCalendarCheck className="w-4 h-4 text-accent-rust" /> },
        { name: "Cross-cultural communication", icon: <FaUsers className="w-4 h-4 text-accent-forest" /> },
      ],
    },
    {
      icon: Share2,
      title: "Digital",
      color: "text-accent-gold",
      skills: [
        { name: "Instagram", icon: <FaInstagram className="w-4 h-4 text-accent-rust" /> },
        { name: "Facebook", icon: <FaFacebook className="w-4 h-4 text-accent-forest" /> },
        { name: "LinkedIn", icon: <FaLinkedin className="w-4 h-4 text-accent-sage" /> },
        { name: "Canva", icon: <Palette className="w-4 h-4 text-accent-gold" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="pt-15 lg:pt-0 min-h-screen bg-main-bone relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-20 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-main-ink mb-4 font-serif">Skills</h2>
          <p className="text-lg text-main-taupe max-w-2xl mx-auto">
            Languages, competencies, and the tools I use to bring people together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(124, 143, 94, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(124, 143, 94, 0.08) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
