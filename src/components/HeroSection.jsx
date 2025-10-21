// import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
// import React from "react";

// const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="container max-w-6xl mx-auto text-center z-10 ">
//         <div className="space-y-8">
//           <h1 className="text-3xl md:text-5xl font-bold tracking-tight ">
//             <span className="opacity-0 animate-fade-in ">Hi, I'm </span>
//             <span className="bg-[#CCFF00] px-3 rounded-2xl"><span className="text-primary opacity-0 animate-slide-in-left-delay-1">
//               Venkateswara Reddy{" "}
//             </span>
//             <span className="text-gradient ml-2  opacity-0 animate-slide-in-left-delay-2">
//               Challa
//             </span>
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//             I transform concepts into interactive, dynamic web experiences. My
//             designs prioritize clarity, responsiveness, and engaging visuals.
//           </p>
//           <div className="flex justify-center mt-4 space-x-6 opacity-0 animate-fade-in-delay-4">
//             <a
//               href="https://www.linkedin.com/in/venkateswara-reddy-challa/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-primary hover:text-primary/80 transition-colors"
//               title="LinkedIn"
//             >
//               <Linkedin size={28} />
//             </a>
//             <a
//               href="https://github.com/venkateswarareddychalla"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-primary hover:text-primary/80 transition-colors"
//               title="GitHub"
//             >
//               <Github size={28} />
//             </a>
//             <a
//               href="mailto:venkateswarareddychalla6@gmail.com"
//               className="text-primary hover:text-primary/80 transition-colors"
//               title="Email"
//             >
//               <Mail size={28} />
//             </a>
//           </div>
//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2">Scroll</span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto text-center z-10">
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="bg-[#CCFF00] px-3 rounded-2xl inline-block">
              <span className="text-primary opacity-0 animate-slide-in-left-delay-1">
                Venkateswara Reddy{" "}
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-slide-in-left-delay-2">
                Challa
              </span>
            </span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-xl md:max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I transform concepts into interactive, dynamic web experiences. My
            designs prioritize clarity, responsiveness, and engaging visuals.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-center gap-4 sm:gap-6 opacity-0 animate-fade-in-delay-4">
            <a
              href="https://www.linkedin.com/in/venkateswara-reddy-challa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/venkateswarareddychalla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              title="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="mailto:venkateswarareddychalla6@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors"
              title="Email"
            >
              <Mail size={28} />
            </a>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
