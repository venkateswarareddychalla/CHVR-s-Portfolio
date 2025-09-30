import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

// id, size, x, y, opacity, animationDuration - stars
// id, size, x, y, delay, animationDuration - meteors

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([])

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
        generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // generating stars based on screen size
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Size between 1 and 4
        x: Math.random() * 100, // Percentage of screen width
        y: Math.random() * 100, // Percentage of screen height
        opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // Duration between 2s and 6s
      });
      setStars(newStars);
    }
  };

  // generating meteors based on screen size
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // Size between 1 and 3
        x: Math.random() * 100, // Percentage of screen width
        y: Math.random() * 20,
        delay: Math.random() * 15 , // Delay between 0s and 15s
        animationDuration: Math.random() * 3 + 3, // Duration between 3s and 6s
      });
      setMeteors(newMeteors);
    }
  };

  return (
    <div
      className={cn("fixed inset-0 overflow-hidden pointer-events-none z-0")}
    >
      {stars.map((star) => (
        <div key={star.id} className={cn("star animate-pulse-subtle")} style={
            {
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: `${star.opacity}`,
                animationDuration: `${star.animationDuration}s`
            }
        }></div>
      ))}
      {meteors.map((meteor) => (
        <div key={meteor.id} className={cn("meteor animate-meteor")} style={
            {
                width: `${meteor.size*50}px`,
                height: `${meteor.size*2}px`,
                left: `${meteor.x}%`,
                top: `${meteor.y}%`,
                animationDelay: `${meteor.delay}`,
                animationDuration: `${meteor.animationDuration}s`
            }
        }></div>
      ))}
    </div>
  );
};

export default StarBackground;




// resize event → A built-in browser event that fires whenever the viewport size changes.

// pointer-events: none; means the element ignores all mouse/touch events.
// meteor - space rock.