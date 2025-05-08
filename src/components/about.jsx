import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import poster from "../assets/aboutAssets/poster.svg";
import VintagePaper from "../assets/aboutAssets/vintagepaper.png";
import stamp from "../assets/aboutAssets/stamp.svg";

const About = () => {
  const posterRef = useRef();
  const aboutHeadingRef = useRef();
  const headingOneRef = useRef();
  const headingTwoRef = useRef();
  const headingThreeRef = useRef();
  const vintagePaperRef = useRef();
  const buttonRef = useRef();
  const stampRef = useRef();

  useEffect(() => {
    const poster = posterRef.current;
    const aboutHeading = aboutHeadingRef.current;
    const headingOne = headingOneRef.current;
    const headingTwo = headingTwoRef.current;
    const headingThree = headingThreeRef.current;
    const VintagePaper = vintagePaperRef.current;
    const button = buttonRef.current;
    const stamp = stampRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline();

          // Animate poster
          if (aboutHeading) {
            tl.to(aboutHeading, {
              y: 0,
              duration: 0.6,
              scrub: true,
              power: "bounce",
            });
          }

          if (VintagePaper) {
            tl.to(VintagePaper, {
              opacity: 1,
              scrub: true,
            });
          }

          if (poster) {
            tl.to(poster, {
              opacity: 1,
              scrub: true,
            });
          }

          // Animate heading
          if (headingOne) {
            tl.to(headingOne, {
              y: 0,
              opacity: 1,
              scrub: true,
            });
          }

          if (headingTwo) {
            tl.to(headingTwo, {
              y: 0,
              opacity: 1,
              scrub: true,
            });
          }

          if (headingThree) {
            tl.to(headingThree, {
              y: 0,
              opacity: 1,
              scrub: true,
            });
          }

          if (button) {
            tl.to(button, {
              scale: 1,
              scrub: true,
            });
          }

          if (stamp) {
            tl.to(stamp, {
              scale: 1,
              scrub: true,
            });
          }

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    // Observe only one container that wraps them both
    if (headingOne) {
      observer.observe(headingOne);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="about bg-[#fff8e7] flex items-start justify-center mt-[4vw]  ">
      <section className=" flex flex-col items-center justify-center  ">
        <div className="h-fit overflow-hidden ">
          <h1
            ref={aboutHeadingRef}
            className="dela-gothic-one text-[4vw] md:text-[2.5vw] text-[#87392D] translate-y-[3vw]"
          >
            About
          </h1>
        </div>

        <div
          ref={vintagePaperRef}
          className="flex opacity-0 items-center   justify-center relative mt-[5vw] md:mt-[0vw] scale-130 md:scale-100"
        >
          <img className="w-[55vw] select-none mt-[7vw] md:mt-[0vw] rotate-90 md:rotate-0 scale-110 md:scale-100  " src={VintagePaper} alt="" />
          <img
            ref={posterRef}
            className="-ml-[14vw] md:-ml[17vw] mb-[14vw] opacity-0 z-10  h-[37vw]   transition-all duration-1000 select-none"
            src={poster}
            alt="Poster"
          />

          <div className="architects-daughter  absolute top-[13vw]  max-w-[52%] md:max-w-[90%]   left-[9vw] md:left-[7vw]  leading-[2.6vw] md:leading-[2.1vw] tracking-wide text-[#280a05] text-[1.7vw] md:text-[1.4vw] ">
            <h1 ref={headingOneRef} className=" translate-y-24 opacity-0">
              Hi, I'm Aayushi — <br /> Designer, developer, and motion
              enthusiast.
            </h1>

            <h1
              ref={headingTwoRef}
              className="mt-[2vw]  md:max-w-[60%] translate-y-24 opacity-0  "
            >
              I craft animated websites that feel alive—where every scroll,
              hover, and transition tells a story. Blending creativity with
              clean code, I turn ideas into expressive, fluid digital
              experiences that move, engage, and stick with you.
            </h1>

            <h1
              ref={headingThreeRef}
              className="mt-[2vw] max-w-[80%] translate-y-24 opacity-0 "
            >
              This isn't just design — it's storytelling in motion.
            </h1>
            <button
              ref={buttonRef}
              className="mt-[2.5vw] scale-0  dela-gothic-one text-[#fff8e7] md:flex bg-[#843F2E] px-2  py-1  text-[1.3vw]  shadow-[-2px_2px_0_rgba(0,0,0,1)] md:shadow-[-4px_4px_0_rgba(0,0,0,1)]  cursor-pointer   hover:shadow-[-2px_2px_0_rgba(0,0,0,1)] hover:bg-[#A95F4E]"
            ><a href="mailto:aayushigorania@gmail.com">Let's build</a>
              
            </button>
            <img
              ref={stampRef}
              className="ml-[36vw] md:ml-[42vw]  mt-[2vw] w-[7vw] -rotate-12 scale-0 orbit"
              src={stamp}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
