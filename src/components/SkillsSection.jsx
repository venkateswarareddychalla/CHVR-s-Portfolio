// import React, { useState } from "react";
// import { cn } from "../lib/utils";

// const skills = [
//   // Frontend Skills
//   { name: "HTML/CSS", level: 80, category: "frontend" },
//   { name: "JavaScript", level: 85, category: "frontend" },
//   { name: "React.JS", level: 85, category: "frontend" },
//   { name: "Tailwind CSS", level: 70, category: "frontend" },
//   { name: "BootStrap", level: 75, category: "frontend" },
//   { name: "Shadcn UI", level: 60, category: "frontend" },
//   { name: "Next.JS", level: 30, category: "frontend" },

//   // Backend Skills
//   { name: "Node.JS", level: 75, category: "backend" },
//   { name: "Express.JS", level: 75, category: "backend" },
//   { name: "MongoDB", level: 65, category: "backend" },
//   { name: "MySQL", level: 80, category: "backend" },

//   // Programming Languages
//   { name: "Python", level: 65, category: "languages" },
//   { name: "C++", level: 50, category: "languages" },

//   // Tools
//   { name: "Git/GitHub", level: 80, category: "tools" },
//   { name: "VS Code", level: 90, category: "tools" },
//   { name: "Postman", level: 70, category: "tools" },
//   { name: "Render", level: 80, category: "tools" },
//   { name: "Vercel", level: 80, category: "tools" },
// ];

// const categories = ["all", "frontend", "backend", "languages", "tools"];

// const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//     const filteredSkills = skills.filter(skill => activeCategory === 'all' || skill.category === activeCategory);

//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30 ">
//       <div className="container mx-auto max-w-7xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary">Skills</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
//                 activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card p-6 rounded-lg shadow-xs card-hover"
//             >
//               <div className="text-left mb-4">
//                 <h3 className="font-semibold text-lg">{skill.name}</h3>
//               </div>
//               <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden ">
//                 <div
//                   className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//               <div className="text-right mt-1">
//                 <span className="text-sm text-muted-foreground">
//                   {skill.level}%
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;



import React, { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React.JS", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "BootStrap", level: 75, category: "frontend" },
  { name: "Shadcn UI", level: 60, category: "frontend" },
  { name: "Next.JS", level: 30, category: "frontend" },
  { name: "Node.JS", level: 75, category: "backend" },
  { name: "Express.JS", level: 75, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },
  { name: "Python", level: 65, category: "languages" },
  { name: "C++", level: 50, category: "languages" },
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Postman", level: 70, category: "tools" },
  { name: "Render", level: 80, category: "tools" },
  { name: "Vercel", level: 80, category: "tools" },
];

const categories = ["all", "frontend", "backend", "languages", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
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
                "px-4 sm:px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm sm:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
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
              <div className="text-left mb-3 sm:mb-4">
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
