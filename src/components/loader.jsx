import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import logoTop from "../assets/loaderAssets/logo 1.svg";
import logoBottom from "../assets/loaderAssets/logo2.svg";
import bgVideo from "../assets/loaderAssets/glitch.mp4";
import SpinReelSound from "../assets/homeAssets/spinaudio.mp3";
import { createAssetPreloader } from "../utils/assetPreloader";



const Loader = ({ children }) => {
  const loaderPageRef = useRef(null);
  const contentRef = useRef(null);
  const numberRef = useRef(null);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);
  const progressBarRef = useRef(null);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const { contextSafe } = useGSAP();

  // Initialize asset preloader
  useEffect(() => {
    const preloader = createAssetPreloader();
    
    preloader
      .onProgressCallback((loaded, total) => {
        const progress = Math.round((loaded / total) * 100);
        setLoadingProgress(progress);
      })
      .onCompleteCallback(() => {
        setLoadingComplete(true);
        setIsLoading(false);
      });

    // Start loading assets
    preloader.loadAll();
  }, []);

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

  // Animate progress bar
  useGSAP(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${loadingProgress}%`,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [loadingProgress]);

  const handleClick = () => {
    if (!loadingComplete) return; // Don't allow entry until loading is complete
    
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

  function play() {
    new Audio(SpinReelSound).play();
  }

  return (
    <>
      <div onClick={play}
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
            {isLoading ? "Loading assets..." : "Presenting something reel-ly cool..."}
          </h1>
          
          {/* Loading Progress Bar */}
          {isLoading && (
            <div className="mt-4 w-[300px] max-w-[80%]">
              <div className="w-full bg-[#843F2E] bg-opacity-30 rounded-full h-2 overflow-hidden">
                <div 
                  ref={progressBarRef}
                  className="h-full bg-[#843F2E] rounded-full transition-all duration-300 ease-out"
                  style={{ width: '0%' }}
                ></div>
              </div>
              <p className="dela-gothic-one text-center mt-2 text-sm text-[#843F2E]">
                {loadingProgress}%
              </p>
            </div>
          )}
          
          <button
            onClick={handleClick}
            ref={buttonRef}
            className={`mt-[2.5vw] scale-0 dela-gothic-one text-[#843F2E] md:flex bg-[#fff8e7] px-2 py-1 text-[1.7vw] md:text-[1.3vw] shadow-[-2px_2px_0_rgba(0,0,0,1)] md:shadow-[-4px_4px_0_rgba(0,0,0,1)] hover:shadow-[-2px_2px_0_rgba(0,0,0,1)] hover:bg-[#F5EBDD] ${
              loadingComplete ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
            }`}
            disabled={!loadingComplete}
          >
            {loadingComplete ? 'Enter' : 'Loading...'}
          </button>
        </div>
        <div className="absolute bottom-10 right-10 h-[2.5vw] overflow-hidden text-[2vw] dela-gothic-one">
          <div ref={numberRef} className=" transition-all ease">
            <h1>00</h1>
            <h1>25</h1>
            <h1>50</h1>
            <h1>75</h1>
            <h1>{loadingProgress}</h1>
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
