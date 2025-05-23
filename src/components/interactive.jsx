import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import SpinReelSound from "../assets/homeAssets/spinaudio.mp3";


import NoticeBoardimg from "../assets/interactiveAssets/noticeboard.png";
import Flag from "../assets/interactiveAssets/flag.png";
import PostStamp from "../assets/interactiveAssets/postStamp.png";
import Paper from "../assets/interactiveAssets/paper.png";
import Calendar from "../assets/interactiveAssets/calendar.png";
import FilmRoll1 from "../assets/interactiveAssets/filmroll1.png";
import FilmRoll2 from "../assets/interactiveAssets/filmroll2.png";
import CinemaTicket from "../assets/interactiveAssets/cinematicket.png";
import CarImage from "../assets/interactiveAssets/car.png";
import UkeleleImage from "../assets/interactiveAssets/ukelele.png";
import Wanted from "../assets/interactiveAssets/wanted.png";
import Stickynote from "../assets/interactiveAssets/note.png";
import Figmapin from "../assets/interactiveAssets/figmapin.png";
import Htmlpin from "../assets/interactiveAssets/htmlpin.png";
import Csspin from "../assets/interactiveAssets/csspin.png";
import Gsappin from "../assets/interactiveAssets/gsappin.png";
import Reactpin from "../assets/interactiveAssets/reactpin.png";
import Plane from "../assets/interactiveAssets/plane.png";

gsap.registerPlugin(MotionPathPlugin);

const Interactive = () => {
  const flagRef = useRef();
  const postRef = useRef();
  const paperRef = useRef();
  const stickynoteRef = useRef();
  const filmR1Ref = useRef();
  const filmR2Ref = useRef();
  const calendarRef = useRef();
  const wantedRef = useRef();
  const cinematicketRef1 = useRef();
  const cinematicketRef2 = useRef();

  const carRef = useRef();
  const ukeleleRef = useRef();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const noticeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline();

          tl.to(noticeRef.current, {
            scale: 1,
            duration: 1.2,
            ease: "back.out",
          });

          tl.to(flagRef.current, {
            opacity: 1,
            duration: 0.1,
          });

          tl.to(paperRef.current, {
            opacity: 1,
          });

          tl.to(postRef.current, {
            scale: 1,

            rotate: 3,
          });

          tl.to(stickynoteRef.current, {
            scale: 1,
          });

          tl.to(filmR2Ref.current, {
            opacity: 1,
          });

          tl.to(filmR1Ref.current, {
            opacity: 1,
          });

          tl.to(calendarRef.current, {
            opacity: 1,
          });

          tl.to(wantedRef.current, {
            opacity: 1,
          });

          tl.to(cinematicketRef1.current, {
            opacity: 1,
          });

          tl.to(cinematicketRef2.current, {
            opacity: 1,

            rotate: 12,
          });

          tl.to(carRef.current, {
            opacity: 1,
          });

          tl.to(ukeleleRef.current, {
            opacity: 1,
          });

          gsap.to("#plane", {
            duration: 17,

            repeat: -1,
            ease: "power1.inOut",
            motionPath: {
              path: "#flightPath",
              align: "#flightPath",
              autoRotate: true,
              alignOrigin: [0.5, 0.5],
            },
          });

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (noticeRef.current) {
      observer.observe(noticeRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  function play() {
    new Audio(SpinReelSound).play();
  }

  return (
    <div onClick={play}
      id="interactive"
      className="flex items-center scale-105  justify-center overflow-hidden py-[35vw] md:py-[5vw]  mb-[2vw] select-none "
    >
      <div ref={noticeRef} className=" relative w-[75vw] md:w-[70vw]  scale-0">
        {/* notice board */}
        <img
          loading="lazy"
          className=" w-full scale-150 md:scale-100 relative rotate-90 md:rotate-0 "
          src={NoticeBoardimg}
          alt="Notice Board"
        />

        {/* Flag */}
        <img
          loading="lazy"
          ref={flagRef}
          className="flags absolute w-[43vw] scale-125 -top-[35vw] -left-[6vw] md:w-[37vw] md:-top-[5vw] md:-left-[8vw] z-10 opacity-0 "
          src={Flag}
          alt=""
        />

        {/* Stamp */}
        <img
          loading="lazy"
          ref={postRef}
          className="absolute w-[28vw]  left-[39vw] md:w-[19vw] bottom-[10vw]  md:bottom-[23vw] md:left-[20vw] rotate-3 z-10 scale-0"
          src={PostStamp}
          alt=""
        />

        {/* Paper */}
        <div ref={paperRef} className="opacity-0">
          <img
            loading="lazy"
            className="absolute scale-125 md:scale-100 w-[33vw] bottom-[30vw] left-[1vw] md:bottom-[7vw] md:-left-[3vw] md:-rotate-1 rotate-8  z-0"
            src={Paper}
            alt=""
          />
          <div className="absolute -top-[6vw]  left-[9.5vw] md:top-[16vw] md:left-[6.7vw] text-[1vw] flex flex-col items-start gap-[0.4vw] architects-daughter md:-rotate-3 rotate-5 ">
            <h1 className="text-[2vw] md:text-[1.7vw]">Skills</h1>
            <li className="text-[1.2vw] md:text-[1vw]">
              Front-end Development
            </li>
            <li className="text-[1.2vw] md:text-[1vw]">Creative Development</li>
            <li className="text-[1.2vw] md:text-[1vw]">Web Design</li>
          </div>
        </div>

        {/* Calendar */}
        <div ref={calendarRef} className="opacity-0">
          <img
            loading="lazy"
            className="absolute w-[24vw] bottom-[37vw] left-[42vw] md:w-[15vw] md:bottom-[22vw] md:left-[51vw] "
            src={Calendar}
            alt=""
          />
          <div className="absolute top-[3vw] left-[50vw] md:top-[18vw] md:left-[56vw] text-[1.6vw] md:text-[1vw] flex flex-col items-end justify-center gap-[0.4vw] architects-daughter">
            <h1>Located in India</h1>
            <h1>{time.toLocaleTimeString()}</h1>
            <h1>{time.toLocaleDateString()}</h1>
          </div>
        </div>

        {/* Film roll */}
        <img
          loading="lazy"
          ref={filmR2Ref}
          className="absolute w-[27vw] bottom-[26vw] left-[23vw] md:w-[19vw] md:bottom-[24.5vw] md:left-[34.3vw] opacity-0"
          src={FilmRoll2}
          alt=""
        />

        {/* Film roll */}
        <img
          loading="lazy"
          ref={filmR1Ref}
          className="absolute w-[27vw] bottom-[31vw] left-[22vw] md:w-[18vw] md:bottom-[28vw] md:left-[34vw] opacity-0"
          src={FilmRoll1}
          alt=""
        />

        {/* cinema ticket */}
        <img
          loading="lazy"
          ref={cinematicketRef1}
          className="absolute  w-[26vw] bottom-[19vw] left-[2vw] md:w-[14vw] md:bottom-[6vw] md:left-[4vw]  opacity-0"
          src={CinemaTicket}
          alt=""
        />

        {/* cinema ticket */}
        <img
          loading="lazy"
          ref={cinematicketRef2}
          className="absolute w-[26vw] bottom-[18vw]  left-[2vw] md:w-[14vw] md:bottom-[5vw] md:left-[4vw] z-10 opacity-0  "
          src={CinemaTicket}
          alt=""
        />

        
         {/* vintage car  */}
        <img
          loading="lazy"
          ref={carRef}
          className="absolute w-[30vw] top-[62vw] -left-[8vw] md:w-[20vw] md:-bottom-[1vw] md:left-[55vw] opacity-0"
          src={CarImage}
          alt=""
        />


        {/* ukelele  */}
        <img
          loading="lazy"
          ref={ukeleleRef}
          className="absolute w-[30vw] left-[47vw] md:w-[20vw] md:-bottom-[1vw] md:left-[55vw] opacity-0"
          src={UkeleleImage}
          alt=""
        />

        {/* wanted  */}

        <img
          loading="lazy"
          ref={wantedRef}
          className="absolute w-[23vw] left-[35vw] -bottom-[20vw] md:w-[14vw] md:bottom-[3vw] md:left-[45vw] opacity-0"
          src={Wanted}
          alt=""
        />

        {/* sticky note */}
        <div className="scale-0" ref={stickynoteRef}>
          <img
            loading="lazy"
            className="absolute w-[33vw] -bottom-[15vw]  md:w-[20vw] md:bottom-[4vw] md:left-[21vw]"
            src={Stickynote}
            alt=""
          />
          <h1 className="architects-daughter text-[2.2vw] left-[11vw] -bottom-[5vw] md:text-[1.5vw] text-center absolute md:bottom-[10.5vw] md:left-[27.5vw] -rotate-3">
            Creating <br /> something <br /> alive!
          </h1>
        </div>

        {/* figma pin */}
        <img
          loading="lazy"
          src={Figmapin}
          className="absolute w-[15vw] left-[17vw] -bottom-[20vw] md:w-[7vw] md:bottom-[4vw] md:left-[17vw] hover:scale-110 transition-all"
          alt=""
        />

        {/* html pin */}
        <img
          loading="lazy"
          src={Htmlpin}
          className="absolute w-[12vw] left-[20vw] bottom-[10vw] md:w-[6.5vw] md:bottom-[24vw] md:left-[37vw] hover:scale-110 transition-all"
          alt=""
        />

        {/* css pin */}
        <img
          loading="lazy"
          src={Csspin}
          className="absolute w-[10vw] md:w-[6.5vw] bottom-[52vw] left-[30vw] md:bottom-[38vw] md:left-[41vw] hover:scale-110 transition-all"
          alt=""
        />

        {/* react pin */}
        <img
          loading="lazy"
          src={Reactpin}
          className="absolute w-[11vw] bottom-[20vw] left-[29vw] md:w-[6.5vw] md:bottom-[15vw] md:left-[40vw] hover:scale-110 transition-all"
          alt=""
        />

        {/* gsap pin */}
        <img
          loading="lazy"
          src={Gsappin}
          className="absolute w-[12vw] left-[26vw] -bottom-[5vw] md:w-[6.5vw] md:bottom-[4vw] md:left-[35vw] hover:scale-110 transition-all"
          alt=""
        />

        <div>
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=""
              id="flightPath"
              d="M 24 31 C 468 -64 300 500 672 552 C 1114 439 838 -95 400 200 C 101 650 -333 155 26 31"
              fill="transparent"
              stroke="none"
            />
          </svg>

          <img
            loading="lazy"
            id="plane"
            src={Plane}
            className="absolute w-[25vw] md:w-[16vw] top-[4vw] left-[10vw]  z-50"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Interactive;
