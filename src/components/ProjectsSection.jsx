import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "QuickGPT",
    description:
      "AI-powered chat app with image generation, payments, and a community gallery.",
    image: "/projects/quickgpt.png",
    tags: [
      "React.JS",
      "T.CSS",
      "Node.JS",
      "Mongoose",
      "Stripe",
      "Vercel",
    ],
    demoUrl: "https://chat-gpt-clone-five-indol.vercel.app/",
    githubUrl: "https://github.com/venkateswarareddychalla/ChatGPT-Clone",
  },
  {
    id: 2,
    title: "Tomato",
    description:
      "Full food delivery ecosystem with customer and admin apps plus Stripe integration.",
    image: "/projects/tomato.png",
    tags: [
      "React.JS",
      "Node.JS",
      "Mongoose",
      "Stripe",
      "Render",
    ],
    demoUrl: "https://food-delivery-frontend-2hty.onrender.com/",
    githubUrl: "https://github.com/venkateswarareddychalla/Food-Delivery",
  },
  {
    id: 3,
    title: "NxtWatch",
    description:
      "YouTube clone with responsive UI, icons, and dynamic API-driven content.",
    image: "/projects/youtube.png",
    tags: [
      "React.JS",
      "Styled Components",
      "API Fetching",
    ],
    demoUrl: "https://chvenkynxtwatch.ccbp.tech/",
    githubUrl: "https://github.com/venkateswarareddychalla/nxtwatch",
  },
  {
    id: 4,
    title: "NxtTrendz",
    description:
      "E-commerce app with responsive design and real-time product data fetching.",
    image: "/projects/ecommerce.png",
    tags: [
      "React.JS",
        "React Routing",
        "API Fetching",

    ],
    demoUrl: "https://chvenkynxttrend.ccbp.tech",
    githubUrl: "https://github.com/venkateswarareddychalla/e-commerce-app",
  },
  {
    id: 5,
    title: "Jobby App",
    description:
      "Job listings clone with responsive UI and dynamic API integration.",
    image: "/projects/jobby.png",
    tags: ["React.JS", "React Routing", "API Fetching"],
    demoUrl: "https://chvenkyjobbyapp.ccbp.tech/",
    githubUrl: "https://github.com/venkateswarareddychalla/jobby-app",
  },
  {
    id: 6,
    title: "Emoji Game App",
    description:
      "Fun emoji game with interactive UI and responsive gameplay.",
    image: "/projects/emoji.png",
    tags: ["HTML", "CSS", "FlexBox", "React.JS"],
    demoUrl: "https://chvenkyemojiapp.ccbp.tech/",
    githubUrl: "https://github.com/venkateswarareddychalla/emoji-game",
  },

  {
    id: 7,
    title: "IPL Dashboard",
    description:
      "Cricket dashboard app with team stats and smooth navigation.",
    image: "/projects/ipl.png",
    tags: ["React.JS", "Routing", "Fetch"],
    demoUrl: "https://chvenkyiplapp.ccbp.tech/",
    githubUrl: "https://github.com/venkateswarareddychalla/IPL---Dashboard",
  },

  {
    id: 8,
    title: "To-Do List",
    description:
      "Simple task manager with add, save, and complete functionality.",
    image: "/projects/todos.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://todo-list-seven-gilt-30.vercel.app/",
    githubUrl: "https://github.com/venkateswarareddychalla/todo-list",
  },
  {
    id: 9,
    title: "Wikipedia",
    description:
      "Wikipedia search app with stylish, responsive interface.",
    image: "/projects/wikipedia.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://wikipedia-wheat-gamma.vercel.app/",
    githubUrl: "https://github.com/venkateswarareddychalla/wikipedia",
  },
  {
    id: 10,
    title: "Food Munch",
    description:
      "Responsive restaurant landing page with menu, payments, and promotions.",
    image: "/projects/foodmunch.png",
    tags: ["HTML", "CSS", "BootStrap"],
    demoUrl: "https://food-munch-responsive-app.vercel.app/",
    githubUrl:
      "https://github.com/venkateswarareddychalla/food-munch-responsive-app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 py-24 relative ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            <ExternalLink size={20} />
                        </a>
                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="https://github.com/venkateswarareddychalla" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">Check My Github <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
