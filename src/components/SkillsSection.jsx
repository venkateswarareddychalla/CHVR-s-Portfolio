
import React, { useState } from "react";
import { cn } from "../lib/utils";
import {
  Code2,
  FileCode2,
  Atom,
  Wind,
  Layout,
  PanelLeft,
  ArrowRightCircle,
  Server,
  Network,
  Database,
  DatabaseZap,
  TerminalSquare,
  Braces,
  GitBranch,
  Monitor,
  Send,
  Cloud,
  Triangle,
} from "lucide-react";

const skills = [
  { name: "HTML/CSS", level: 80, category: "frontend", icon: Code2, color: "#E44D26" },
  { name: "JavaScript", level: 85, category: "frontend", icon: FileCode2, color: "#F7DF1E" },
  { name: "React.JS", level: 85, category: "frontend", icon: Atom, color: "#61DAFB" },
  { name: "Tailwind CSS", level: 70, category: "frontend", icon: Wind, color: "#38BDF8" },
  { name: "BootStrap", level: 75, category: "frontend", icon: Layout, color: "#7952B3" },
  { name: "Shadcn UI", level: 60, category: "frontend", icon: PanelLeft, color: "#8E8E8E" },
  { name: "Next.JS", level: 30, category: "frontend", icon: ArrowRightCircle, color: "#000000" },

  { name: "Node.JS", level: 75, category: "backend", icon: Server, color: "#68A063" },
  { name: "Express.JS", level: 75, category: "backend", icon: Network, color: "#404040" },
  { name: "MongoDB", level: 65, category: "backend", icon: Database, color: "#47A248" },
  { name: "MySQL", level: 80, category: "backend", icon: DatabaseZap, color: "#00758F" },

  { name: "Python", level: 65, category: "languages", icon: TerminalSquare, color: "#3776AB" },
  { name: "C++", level: 50, category: "languages", icon: Braces, color: "#00599C" },

  { name: "Git/GitHub", level: 80, category: "tools", icon: GitBranch, color: "#F05032" },
  { name: "VS Code", level: 90, category: "tools", icon: Monitor, color: "#007ACC" },
  { name: "Postman", level: 70, category: "tools", icon: Send, color: "#FF6C37" },
  { name: "Render", level: 80, category: "tools", icon: Cloud, color: "#46E3B7" },
  { name: "Vercel", level: 80, category: "tools", icon: Triangle, color: "#000000" },
];

const categories = ["all", "frontend", "backend", "languages", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 sm:px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm sm:text-base border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground hover:bg-secondary border-primary/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 sm:p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-3 sm:mb-4 flex items-center gap-3">
                <skill.icon color={skill.color} size={28} />
                <h3 className="font-semibold text-base sm:text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
