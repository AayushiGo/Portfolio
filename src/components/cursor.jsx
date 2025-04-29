import React, { useEffect } from "react";
import gsap from "gsap";
import popcorn1 from "../assets/cursorAssets/popcorn1.svg";
import popcorn2 from "../assets/cursorAssets/popcorn 2.svg";

const popcornImages = [popcorn1, popcorn2];

const cursor = () => {
  const handleClick = (e) => {
    const count = Math.floor(Math.random() * 4) + 2; // 2 to 5 popcorns
    const { clientX: x, clientY: y } = e;

    for (let i = 0; i < count; i++) {
      const popcorn = document.createElement("img");
      popcorn.src =
        popcornImages[Math.floor(Math.random() * popcornImages.length)];
      popcorn.className = "pointer-events-none fixed w-[2vw] h-[2vw] z-50 ";
      popcorn.style.position = "fixed";
      popcorn.style.left = `${x}px`;
      popcorn.style.top = `${y}px`;
      popcorn.style.opacity = 0;

      document.body.appendChild(popcorn);

      const baseMultiplier = window.innerWidth / 1920; // scale relative to full HD width

      const xOffset = (Math.random() - 0.5) * 150 * baseMultiplier; // horizontal spread
      const yLift = (Math.random() * 40 + 60) * baseMultiplier; // vertical lift

      gsap.set(popcorn, { opacity: 1, scale: 1 });

      gsap.to(popcorn, {
        x: xOffset,
        y: -yLift, // move upward
        duration: 0.4,
        ease: "circ.out", // fast launch
        onComplete: () => {
          gsap.to(popcorn, {
            y: 0, // fall back down
            scale: 0.3,
            opacity: 0,
            duration: 0.6,
            ease: "back.in", // simulate gravity & bounce
            onComplete: () => popcorn.remove(),
          });
        },
      });
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default cursor;
