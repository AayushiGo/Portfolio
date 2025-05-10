import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import logoTop from "../assets/loaderAssets/logo 1.svg";
import logoBottom from "../assets/loaderAssets/logo2.svg";
import bgVideo from "../assets/loaderAssets/glitch.mp4";

const Loader = ({ children }) => {
  const loaderPageRef = useRef(null);
  const contentRef = useRef(null);
  const numberRef = useRef(null);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);

  const { contextSafe } = useGSAP();

  useGSAP(() => {
    const animate = contextSafe(() => {
      gsap.to(logoRef.current, {
        rotate: 16,
        y: 7,
        duration: 1,
        ease: "bounce",
        yoyoEase: 1,
        repeat: -1,
      });

      const tl = gsap.timeline();

      tl.to(numberRef.current, { y: "-2vw", duration: 1 })
        .to(numberRef.current, { y: "-6vw", duration: 1 })
        .to(numberRef.current, { y: "-10vw", duration: 1 })
        .to(numberRef.current, { y: "-14vw", duration: 1 })
        .to(numberRef.current, { y: "-15vw", duration: 1 });

      tl.to(buttonRef.current, {
        scale: 1,
        ease: "power2",
      });
    });

    animate();
  }, []);

  const handleClick = () => {
    gsap.to(loaderPageRef.current, {
      opacity: 0,
      filter: "blur(70px)",
      ease: "power2.inOut",
      duration: 1.2,
      delay: 0.5,
      onComplete: () => {
        loaderPageRef.current.style.display = "none";
        contentRef.current.style.display = "block";
      },
    });
  };

  return (
    <>
      <div
        ref={loaderPageRef}
        className="loaderpage fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-[#FFF8E7]"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
          src={bgVideo}
        ></video>
        <div className="flex flex-col items-center z-50">
          <img ref={logoRef} src={logoTop} alt="Logo Top" />
          <img src={logoBottom} className="ml-1 mb-4" alt="Logo Bottom" />
          <h1 className="dela-gothic-one text-center mt-4 text-md max-w-[70%] sm:text-xl md:text-2xl">
            Presenting something reel-ly cool...
          </h1>
          <button
            onClick={handleClick}
            ref={buttonRef}
            className="mt-[2.5vw] scale-0  dela-gothic-one text-[#843F2E] md:flex bg-[#fff8e7] px-2  py-1  text-[1.7vw] md:text-[1.3vw]  shadow-[-2px_2px_0_rgba(0,0,0,1)] md:shadow-[-4px_4px_0_rgba(0,0,0,1)]  cursor-pointer   hover:shadow-[-2px_2px_0_rgba(0,0,0,1)] hover:bg-[#F5EBDD]"
          >
            Enter
          </button>
        </div>
        <div className="absolute bottom-10 right-10 h-[2.5vw]  overflow-hidden text-[2vw] dela-gothic-one">
          <div ref={numberRef} className=" transition-all ease">
            <h1>00</h1>
            <h1>23</h1>
            <h1>57</h1>
            <h1>79</h1>
            <h1>100</h1>
          </div>
        </div>
      </div>

      <div ref={contentRef} style={{ display: "none" }}>
        {children}
      </div>
    </>
  );
};

export default Loader;
