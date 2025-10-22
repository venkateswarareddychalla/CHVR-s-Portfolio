

import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutMe = () => {
  const cards = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Frontend Development",
      desc: "Building responsive, elegant, and high-performance user interfaces using ReactJS, Tailwind CSS, and modern frontend technologies.",
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Backend Development",
      desc: "Designing and implementing scalable backend solutions with NodeJS, ExpressJS, SQL, and MongoDB for robust and secure applications.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Project Management",
      desc: "Plans, organizes, and executes projects efficiently, managing Git workflows, Postman testing, and deployment processes.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start">
          {/* Left: Text */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Web Developer
            </h3>
            <p className="text-muted-foreground">
              I build seamless and scalable web applications as a Full Stack
              Developer. My expertise lies in ReactJS, Node.js, SQL, and
              MongoDB, creating responsive and user-centric digital experiences.
            </p>
            <p className="text-muted-foreground">
              Passionate about innovation, I strive to deliver interfaces that
              are both functional and delightful, while keeping code clean and
              maintainable.
            </p>

            <div className="pt-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1bcOhwBZX6SIIHJc387kSYj05ZkaQz7nR"
                download="CV.pdf"
                className="px-6 py-2 rounded-full outline-none transition-colors duration-300 cosmic-button"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-col lg:flex-row gap-6 items-start p-4 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4 rounded-full bg-primary/10 flex items-center justify-center self-center lg:self-start">
                  {card.icon}
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="font-semibold text-lg mb-1">{card.title}</h4>
                  <p className="text-muted-foreground text-sm">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
