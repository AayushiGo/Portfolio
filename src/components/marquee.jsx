import React from 'react'
import FilmReelImage from "../assets/homeAssets/roll.svg";

const marquee = () => {
    const words = [
        "Creative Developer ",
        "Web Alchemist",
        "Frontend Visionary",
        "Digital Architect",
        "Interactive Storyteller",
        "Pixel Innovator",
        "Creative Technologist",
        "Code Artisan",
        "Design Engineer",
        "Creative Developer ",
      ];
  return (
    
     <div className="relative mt-[20vw]  md:mt-[20vw] lg:mt-[7vw] scale-200 md:scale-125 lg:scale-100  w-full marquee">
     {/* Background Reel Images */}
     <div className="flex items-center justify-center -z-10">
       <img className="mt-2" src={FilmReelImage} alt="Film Reel" />
       <img className="mt-2" src={FilmReelImage} alt="Film Reel" />
       <img className="mt-2" src={FilmReelImage} alt="Film Reel" />
     </div>

     {/* Scrolling Text */}
     <div className="absolute top-[1.5vw] md:top-[2.5vw]  left-0 w-full  whitespace-nowrap ">
       <div className=" inline-block">
         {words.map((word, i) => (
           <h1
             className="inline-block mx-[1vw] text-[1.7vw] text-[#FFF8E7] dela-gothic-one"
             key={i}
           >
             {word}
           </h1>
         ))}
       </div>
     </div>
   </div>
  )
}

export default marquee