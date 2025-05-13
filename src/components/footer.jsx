
import React, { useEffect, useRef } from "react";
import logoTop from "../assets/footerAssets/logo 1.svg";
import logoBottom from "../assets/footerAssets/logo2.svg";
import YellowLight from "../assets/footerAssets/yellowLightBig.svg";
import gsap from "gsap";
import SpinReelSound from "../assets/homeAssets/spinaudio.mp3";


const footer = () => {
  const lightRef = useRef();
  const logoRef = useRef();
  const headingRef = useRef();
  const buttonRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    const heading = headingRef.current;
    const button = buttonRef.current;
    const links = linksRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline();

          if (heading) {
            tl.to(heading, {
              scale: 1,
              scrub: true,
            });
          }

          if (button) {
            tl.to(button, {
              scale: 1,
              scrub: true,
            });
          }

          if (links) {
            tl.to(links, {
              opacity: 1,
              scrub: true,
            });
          }

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    // Observe only one container that wraps them both
    if (heading) {
      observer.observe(heading);
    }

    gsap.fromTo(
      lightRef.current,
      {
        rotate: 10,
      },
      {
        rotate: -20,
        duration: 2,
        ease: "back.inOut",
        yoyo: true,
        repeat: -1,
      }
    );
    gsap.to(logoRef.current, {
      rotate: 16,
      y: 1,
      duration: 1,
      ease: "bounce",
      yoyoEase: 1,
      repeat: -1,
    });

    return () => observer.disconnect();
  }, []);

  function play() {
    new Audio(SpinReelSound).play();
  }

  return (
    <div onClick={play}
      id="footer"
      className="footer bg-black relative flex flex-col  items-center justify-between   overflow-hidden mt-[5vh] min-h-[60vh] py-[2vw] rounded-t-3xl "
    >
      <img
        ref={lightRef}
        className="YellowLight absolute w-[60vw] md:w-[40vw] lg:w-[30vw] -top-[9vw] left-[5vw] rotate-3"
        src={YellowLight}
        alt=""
      />

      <section className="flex  flex-col items-center justify-start mt-[13vw] md:mt-[10vw] ">
        <h1
          ref={headingRef}
          className="dela-gothic-one scale-0  text-[#fff8e7] text-[6vw] md:text-[4vw] max-w-[70%] md:max-w-[60%] text-center"
        >
          Let's roll credits on your next big idea.
        </h1>
        <button
          ref={buttonRef}
          className="mt-5 md:mt-8 scale-0 dela-gothic-one text-[#843F2E] bg-[#fff8e7] 
             text-[4.5vw] md:text-2xl lg:text-3xl xl:text-4xl
             px-5 py-2.5 md:px-7 md:py-3.5 lg:px-8 lg:py-5
             shadow-[-7px_7px_0_rgba(0,0,0,1)] 
             cursor-pointer hover:shadow-[-4px_4px_0_rgba(0,0,0,1)] 
             hover:bg-[#F5EBDD] transition-all duration-300"
        >
          <a href="mailto:aayushigorania@gmail.com">Let's build</a>
        </button>
      </section>

      <section
        ref={linksRef}
        className="flex flex-col  lg:flex-row opacity-0  gap-[1vh]   md:mt-[23vw] lg:mt-[18vw]  items-center justify-between  text-[#fff8e7] px-[2.5vw] "
      >
        <div className=" w-full">
          <h1 className=" text-[1.2vw] aeonik-regular  hidden lg:flex  ">
            © 2025 Aayushi Gorania. All popcorns reserved.
          </h1>
        </div>
        <div className="list-none  lg:ml-[40vw] aeonik-regular ">
          <ul className="flex gap-[3vw] md:gap-[2vw] lg:gap-[1vw]  items-center text-center text-[2.4vw] md:text-[2vw] lg:text-[1.2vw]  ">
            <li className=" h-[2vh] md:h-[3.2vh] px-1  w-full  overflow-hidden flex flex-col group transition-all  ease-in-out ">
              <a
                href="mailto:aayushigorania@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:-translate-y-[1.4vw] duration-300 "
              >
                Email
              </a>
              <a
                href="mailto:aayushigorania@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:-translate-y-[1.7vw] duration-300 "
              >
                Email
              </a>
            </li>
            <span>|</span>

            <li className="h-[2vh] md:h-[3.2vh] px-2.5 w-full  overflow-hidden flex flex-col group transition-all  ease-in-out ">
              <a
                href="https://www.linkedin.com/in/aayushi-gorania/"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:-translate-y-[1.4vw] duration-300  "
              >
                LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/in/aayushi-gorania/"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:-translate-y-[1.7vw] duration-300 "
              >
                LinkedIn
              </a>
            </li>
            <span>|</span>
            <li className=" h-[2vh] md:h-[3.2vh] px-1 w-full  overflow-hidden flex flex-col group transition-all  ease-in-out ">
              <a
                href="https://github.com/AayushiGo"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:-translate-y-[1.4vw] duration-300 "
              >
                Github
              </a>
              <a
                href="https://github.com/AayushiGo"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:-translate-y-[1.7vw] duration-300 "
              >
                Github
              </a>
            </li>

            <div className="hidden lg:flex flex-col items-center z-50 scale-55 md:scale-100 lg:scale-200 ml-[1vw]  ">
              <img ref={logoRef} src={logoTop} alt="Logo Top" />
              <img
                src={logoBottom}
                className="ml-[0.1vw] mb-[1vw]"
                alt="Logo Bottom"
              />
            </div>
          </ul>
        </div>
        <div>
          <h1 className=" text-[2.7vw] lg:hidden mt-1 ">
            © 2025 Aayushi Gorania. All popcorns reserved.
          </h1>
        </div>
      </section>
    </div>
  );
};

export default footer;
