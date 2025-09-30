import { ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center"
    >
      <p className="text-sm text-muted-foreground text-left">
        Thank You for Visiting My Portfolio!!❤️
        <br />
         <span className="block">Your <span className="font-semibold">Venkateswara Reddy ✨</span></span>
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors animate-bounce"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
