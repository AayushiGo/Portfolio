import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SundeownVideo from "../assets/workAssets/Sundown Studio.mp4";
import RainDelayVideo from "../assets/workAssets/Rain Delay Media.mp4";
import MaxMilkinVideo from "../assets/workAssets/max milkin.mp4";
import NikeVideo from "../assets/workAssets/Nike Reimagine.mp4";
import filmStripImg from "../assets/workAssets/filmstrip.png";
import SpinReelSound from "../assets/homeAssets/spinaudio.mp3";


const work = () => {
  gsap.registerPlugin();

  const workHeadingRef = useRef();
  const FirstH = useRef();
  const FirstP = useRef();
  const FirstV = useRef();

  const SecondH = useRef();
  const SecondP = useRef();
  const SecondV = useRef();

  const ThirdH = useRef();
  const ThirdP = useRef();
  const ThirdV = useRef();

  const FourthH = useRef();
  const FourthP = useRef();
  const FourthV = useRef();

  useEffect(() => {
    const createObserver = (element, refs) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline();

            if (refs.video) {
              tl.to(refs.video, {
                y: 0,
                x: 0,
                opacity: 1,
                duration: 0.6,
              });
            }

            if (refs.heading) {
              tl.to(refs.heading, {
                y: 0,
                duration: 0.6,
              });
            }

            if (refs.paragraph) {
              tl.to(refs.paragraph, {
                y: 0,
                opacity: 1,
                duration: 0.6,
              });
            }

            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.4 }
      );

      if (element) {
        observer.observe(element);
      }
    };

    // Observe the heading animation (once at top)
    if (workHeadingRef.current) {
      gsap.to(workHeadingRef.current, {
        y: 0,
        duration: 1,
        ease: "power2",
        scrollTrigger: {
          trigger: workHeadingRef.current,
          start: "top 80%",
        },
      });
    }

    // Observe first work section
    createObserver(FirstV.current, {
      video: FirstV.current,
      heading: FirstH.current,
      paragraph: FirstP.current,
    });

    // Observe second work section
    createObserver(SecondV.current, {
      video: SecondV.current,
      heading: SecondH.current,
      paragraph: SecondP.current,
    });

    // Observe third work section
    createObserver(ThirdV.current, {
      video: ThirdV.current,
      heading: ThirdH.current,
      paragraph: ThirdP.current,
    });

    // Observe fourth work section
    createObserver(FourthV.current, {
      video: FourthV.current,
      heading: FourthH.current,
      paragraph: FourthP.current,
    });
  }, []);

  function play() {
    new Audio(SpinReelSound).play();
  }

  return (
    <div onClick={play}
      id="work"
      className="about bg-[#fff8e7] flex items-start justify-center mt-[10vh] md:mt-[1vw]  "
    >
      <section className=" flex flex-col items-center justify-center  mt-[7vw] md:mt-0 ">
        <div className="h-fit overflow-hidden">
          <h1
            ref={workHeadingRef}
            className="dela-gothic-one text-[4vw] md:text-[2.5vw] text-[#87392D] translate-y-[3vw] "
          >
            Works
          </h1>
        </div>

        {/* first */}

        <div className="flex  flex-col md:flex-row mt-[30vw] md:mt-[10vw] gap-[4vw]  md:gap-[9vw] scale-200 md:scale-110 lg:scale-100 ">
          
          <div
            ref={FirstV}
            className="translate-y-[7vw] -translate-x-[7vw] opacity-0"
          >
            <img
              className="w-[34vw] absolute  md:-rotate-6 z-10"
              src={filmStripImg}
              alt=""
            />
            <video
              autoPlay
              muted
              loop
              className="w-[31vw] mt-[2.7vw] ml-[2vw] md:-rotate-6 z-0  "
              src={MaxMilkinVideo}
            ></video>
          </div>

          <div className="max-w-[35vw] mb-[10vh] ">
            <div className="dela-gothic-one text-[2vw] text-[#87392D] overflow-hidden  ">
              <h1 ref={FirstH} className="translate-y-[3vw] text-center md:text-left">
                Max Milkin Portfolio Clone
              </h1>
            </div>
            <p
              ref={FirstP}
              className="text-[1.4vw] translate-y-[5vw] mt-[0.7vw] opacity-0 hidden md:flex"
            >
             Cloned Max Milkin’s portfolio website to practice creative web development and animation techniques. Focused on replicating smooth transitions, unique layouts, and bold typography. This project improved my skills in interactive design and modern portfolio aesthetics.
            </p>
          </div>
        </div>

        {/* second */}

        <div className="flex flex-col-reverse md:flex-row mt-[15vw] md:mt-[10vw] gap-[4vw]  md:gap-[9vw] scale-200 md:scale-110 lg:scale-100 ">
          <div className="max-w-[35vw] mb-[10vh] ">
            <div className="dela-gothic-one text-[2vw] text-[#87392D] overflow-hidden  ">
              <h1 ref={SecondH} className="translate-y-[3vw] text-center md:text-left">
                Rain Delay Media Clone
              </h1>
            </div>
            <p
              ref={SecondP}
              className="text-[1.5vw] translate-y-[5vw] mt-[0.7vw] opacity-0 hidden md:flex"
            >
              Recreated the Rain Delay Media website as a practice project to enhance my creative web development skills. Focused on replicating its bold typography, smooth animations, and dynamic layout. This project helped me explore interactive web experiences and clean, modern design.
            </p>
          </div>
          <div
            ref={SecondV}
            className="translate-y-[7vw] mt-[5vh] translate-x-[7vw] opacity-0"
          >
            <img
              className="w-[34vw] absolute  md:rotate-6 z-10"
              src={filmStripImg}
              alt=""
            />
            <video
              autoPlay
              muted
              loop
              className="w-[31vw] mt-[2.7vw] ml-[2vw] md:rotate-6 z-0  "
              src={RainDelayVideo}
            ></video>
          </div>
        </div>

        {/* third */}
        <div className="flex flex-col md:flex-row mt-[15vw] md:mt-[10vw] gap-[4vw]  md:gap-[9vw] scale-200 md:scale-110 lg:scale-100  ">
          <div
            ref={ThirdV}
            className="translate-y-[7vw] mt-[5vh] -translate-x-[7vw] opacity-0"
          >
            <img
              className="w-[34vw] absolute  md:-rotate-6 z-10"
              src={filmStripImg}
              alt=""
            />
            <video
              autoPlay
              muted
              loop
              className="w-[31vw] mt-[2.7vw] ml-[2vw] md:-rotate-6 z-0  "
              src={SundeownVideo}
            ></video>
          </div>

          <div className="max-w-[35vw] mb-[10vh] ">
            <div className="dela-gothic-one text-[2vw] text-[#87392D] overflow-hidden  ">
              <h1 ref={ThirdH} className="translate-y-[3vw] text-center md:text-left">
                Sundow Studio Clone
              </h1>
            </div>
            <p
              ref={ThirdP}
              className="text-[1.5vw] translate-y-[5vw] mt-[0.7vw] opacity-0 hidden md:flex"
            >
              Sundown Studio Clone is a practice project where I recreated the official Sundown Studio website to sharpen my creative web development skills. The clone focuses on replicating the site’s clean aesthetic, bold typography, and smooth scroll-based animations. 
            </p>
          </div>
        </div>

        {/* fourthd */}
        <div className="flex flex-col-reverse md:flex-row mb-[15vw] mt-[15vw] md:mt-[10vw] gap-[4vw]  md:gap-[9vw] scale-200 md:scale-110 lg:scale-100  ">
          <div className="max-w-[35vw] mb-[5vh] ">
            <div className="dela-gothic-one text-[2vw] text-[#87392D] overflow-hidden  ">
              <h1 ref={FourthH} className="translate-y-[3vw] text-center md:text-left">
                Nike Reimagine
              </h1>
            </div>
            <p
              ref={FourthP}
              className="text-[1.5vw] translate-y-[5vw] mt-[0.7vw] opacity-0 hidden md:flex"
            >
             Nike Reimagine is a bold, modern redesign concept that transforms the online Nike experience. Featuring sleek visuals, seamless navigation, and immersive product displays, it connects with today’s dynamic, style-forward audience. It was a hackathon project  
            </p>
          </div>
          <div
            ref={FourthV}
            className="translate-y-[7vw] mt-[2vh] translate-x-[7vw] opacity-0"
          >
            <img
              className="w-[34vw] absolute  md:rotate-6 z-10"
              src={filmStripImg}
              alt=""
            />
            <video
              autoPlay
              muted
              loop
              className="w-[31vw] mt-[2.7vw] ml-[2vw] md:rotate-6 z-0  "
              src={NikeVideo}
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default work;

// flex mt-[15vw]  gap-[9vw] mb-[10vw]

// flex mt-[15vw] md:mt-[10vw] gap-[4vw]  md:gap-[9vw] scale-125 md:scale-110 lg:scale-100
