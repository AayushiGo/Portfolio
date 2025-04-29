import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SundeownVideo from "../assets/workAssets/Sundown Studio.mp4";
import RainDelayVideo from "../assets/workAssets/Rain Delay Media.mp4";
import MaxMilkinVideo from "../assets/workAssets/max milkin.mp4";
import NikeVideo from '../assets/workAssets/Nike Reimagine.mp4'
import filmStripImg from "../assets/workAssets/filmstrip.png";

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
        duration: 0.6,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: workHeadingRef.current,
          start: "top 80%",
          once: true,
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

  return (
    <div id="work" className="about bg-[#fff8e7] flex items-start justify-center p-[4vw]">
      <section className=" flex flex-col items-center justify-center ">
        <div className="h-fit overflow-hidden">
          <h1
            ref={workHeadingRef}
            className="dela-gothic-one text-[2.5vw] text-[#87392D] translate-y-[3vw] "
          >
            Works
          </h1>
        </div>

        {/* first */}

        <div className="flex mt-[10vw]  gap-[9vw]  ">
          <div
            ref={FirstV}
            className="translate-y-[7vw] -translate-x-[7vw] opacity-0"
          >
            <img
              className="w-[34vw] absolute  -rotate-6 z-10"
              src={filmStripImg}
              alt=""
            />
            <video
              autoPlay
              muted
              loop
              className="w-[31vw] mt-[2.7vw] ml-[2vw] -rotate-6 z-0  "
              src={MaxMilkinVideo}
            ></video>
          </div>

          <div className="max-w-[35vw] ">
            <div className="dela-gothic-one text-[2vw] text-[#87392D] overflow-hidden  ">
              <h1 ref={FirstH} className="translate-y-[3vw]">
                Max Milkin Portfolio Clone
              </h1>
            </div>
            <p
              ref={FirstP}
              className="text-[1.5vw] translate-y-[5vw] mt-[0.7vw] opacity-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              inventore ea fugit nam numquam, doloremque rerum iste recusandae
              odio ducimus ullam, natus atque amet! Fugit sapiente atque
              reprehenderit tempore distinctio?
            </p>
          </div>
        </div>

        {/* second */}

        <div className="flex mt-[15vw]  gap-[9vw]  ">
          <div className="max-w-[35vw] ">
            <div className="dela-gothic-one text-[2vw] text-[#87392D] overflow-hidden  ">
              <h1 ref={SecondH} className="-translate-y-[3vw]">
                Rain Delay Media Clone
              </h1>
            </div>
            <p
              ref={SecondP}
              className="text-[1.5vw] translate-y-[5vw] mt-[0.7vw] opacity-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              inventore ea fugit nam numquam, doloremque rerum iste recusandae
              odio ducimus ullam, natus atque amet! Fugit sapiente atque
              reprehenderit tempore distinctio?
            </p>
          </div>
          <div
            ref={SecondV}
            className="translate-y-[7vw] translate-x-[7vw] opacity-0"
          >
            <img
              className="w-[34vw] absolute  rotate-6 z-10"
              src={filmStripImg}
              alt=""
            />
            <video
              autoPlay
              muted
              loop
              className="w-[31vw] mt-[2.7vw] ml-[2vw] rotate-6 z-0  "
              src={RainDelayVideo}
            ></video>
          </div>
        </div>

        {/* third */}
        <div className="flex mt-[15vw]  gap-[9vw]  ">
          <div
            ref={ThirdV}
            className="translate-y-[7vw] -translate-x-[7vw] opacity-0"
          >
            <img
              className="w-[34vw] absolute  -rotate-6 z-10"
              src={filmStripImg}
              alt=""
            />
            <video
              autoPlay
              muted
              loop
              className="w-[31vw] mt-[2.7vw] ml-[2vw] -rotate-6 z-0  "
              src={SundeownVideo}
            ></video>
          </div>

          <div className="max-w-[35vw] ">
            <div className="dela-gothic-one text-[2vw] text-[#87392D] overflow-hidden  ">
              <h1 ref={ThirdH} className="translate-y-[3vw]">
                Sundow Studio Clone
              </h1>
            </div>
            <p
              ref={ThirdP}
              className="text-[1.5vw] translate-y-[5vw] mt-[0.7vw] opacity-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              inventore ea fugit nam numquam, doloremque rerum iste recusandae
              odio ducimus ullam, natus atque amet! Fugit sapiente atque
              reprehenderit tempore distinctio?
            </p>
          </div>
        </div>

        {/* fourthd */}
        <div className="flex mt-[15vw]  gap-[9vw] mb-[10vw]  ">
          <div className="max-w-[35vw] ">
            <div className="dela-gothic-one text-[2vw] text-[#87392D] overflow-hidden  ">
              <h1 ref={FourthH} className="translate-y-[3vw]">
                Nike Reimagine
              </h1>
            </div>
            <p
              ref={FourthP}
              className="text-[1.5vw] translate-y-[5vw] mt-[0.7vw] opacity-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              inventore ea fugit nam numquam, doloremque rerum iste recusandae
              odio ducimus ullam, natus atque amet! Fugit sapiente atque
              reprehenderit tempore distinctio?
            </p>
          </div>
          <div
            ref={FourthV}
            className="translate-y-[7vw] translate-x-[7vw] opacity-0"
          >
            <img
              className="w-[34vw] absolute  rotate-6 z-10"
              src={filmStripImg}
              alt=""
            />
            <video
              autoPlay
              muted
              loop
              className="w-[31vw] mt-[2.7vw] ml-[2vw] rotate-6 z-0  "
              src={NikeVideo}
            ></video>
          </div>
        </div>


      </section>
    </div>
  );
};

export default work;




