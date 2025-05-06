import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

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

  return (
    <div id="interactive" className="flex items-center justify-center overflow-hidden py-[10vw]">
      <div ref={noticeRef} className=" relative w-[70vw]  scale-0">
        {/* notice board */}
        <img
          className=" w-full relative "
          src={NoticeBoardimg}
          alt="Notice Board"
        />

        {/* Flag */}
        <img
          ref={flagRef}
          className="flags absolute w-[43vw] bottom-[21vw] -left-[8vw] z-10 opacity-0 "
          src={Flag}
          alt=""
        />

        {/* Stamp */}
        <img
          ref={postRef}
          className="absolute w-[19vw] bottom-[23vw] left-[20vw] rotate-3 z-10 scale-0"
          src={PostStamp}
          alt=""
        />

        {/* Paper */}
        <div ref={paperRef} className="opacity-0">
          <img
            className="absolute w-[33vw] bottom-[7vw] -left-[3vw] -rotate-1 z-0"
            src={Paper}
            alt=""
          />
          <div className="absolute top-[16vw] left-[6.7vw] text-[1vw] flex flex-col items-start gap-[0.4vw] architects-daughter -rotate-3">
            <h1 className="text-[1.7vw]">Skills</h1>
            <li>Front-end Development</li>
            <li>Creative Development</li>
            <li>Web Design</li>
          </div>
        </div>

        {/* Calendar */}
        <div ref={calendarRef} className="opacity-0">
          <img
            className="absolute w-[15vw] bottom-[22vw] left-[51vw] "
            src={Calendar}
            alt=""
          />
          <div className="absolute top-[18vw] left-[56vw] text-[1vw] flex flex-col items-end justify-center gap-[0.4vw] architects-daughter">
            <h1>Located in India</h1>
            <h1>{time.toLocaleTimeString()}</h1>
            <h1>{time.toLocaleDateString()}</h1>
          </div>
        </div>

        {/* Film roll */}
        <img
          ref={filmR2Ref}
          className="absolute w-[19vw] bottom-[24.5vw] left-[34.3vw] opacity-0"
          src={FilmRoll2}
          alt=""
        />

        {/* Film roll */}
        <img
          ref={filmR1Ref}
          className="absolute w-[18vw] bottom-[28vw] left-[34vw] opacity-0"
          src={FilmRoll1}
          alt=""
        />

        {/* cinema ticket */}
        <img
          ref={cinematicketRef1}
          className="absolute w-[14vw] bottom-[6vw] left-[4vw] z-10 opacity-0"
          src={CinemaTicket}
          alt=""
        />

        {/* cinema ticket */}
        <img
          ref={cinematicketRef2}
          className="absolute w-[14vw] bottom-[5vw] left-[4vw] opacity-0  "
          src={CinemaTicket}
          alt=""
        />

        {/* vintage car */}
        <img
          ref={carRef}
          className="absolute w-[20vw] -bottom-[8vw] -left-[7vw] -rotate-3 opacity-0"
          src={CarImage}
          alt=""
        />

        {/* ukelele  */}
        <img
          ref={ukeleleRef}
          className="absolute w-[20vw] -bottom-[1vw] left-[55vw] opacity-0"
          src={UkeleleImage}
          alt=""
        />

        {/* wanted  */}

        <img
          ref={wantedRef}
          className="absolute w-[14vw] bottom-[3vw] left-[45vw] opacity-0"
          src={Wanted}
          alt=""
        />

        {/* sticky note */}
        <div className="scale-0" ref={stickynoteRef}>
          <img
            className="absolute w-[20vw] bottom-[4vw] left-[21vw]"
            src={Stickynote}
            alt=""
          />
          <h1 className="architects-daughter text-[1.5vw] text-center absolute bottom-[10.5vw] left-[27.5vw] -rotate-3">
            Creating <br /> something <br /> alive!
          </h1>
        </div>

        {/* figma pin */}
        <img
          src={Figmapin}
          className="absolute w-[7vw] bottom-[4vw] left-[17vw] hover:scale-110 transition-all"
          alt=""
        />

        {/* html pin */}
        <img
          src={Htmlpin}
          className="absolute w-[6.5vw] bottom-[24vw] left-[37vw] hover:scale-110 transition-all"
          alt=""
        />

        {/* css pin */}
        <img
          src={Csspin}
          className="absolute w-[6.5vw] bottom-[38vw] left-[41vw] hover:scale-110 transition-all"
          alt=""
        />

        {/* react pin */}
        <img
          src={Reactpin}
          className="absolute w-[6.5vw] bottom-[15vw] left-[40vw] hover:scale-110 transition-all"
          alt=""
        />

        {/* gsap pin */}
        <img
          src={Gsappin}
          className="absolute w-[6.5vw] bottom-[4vw] left-[35vw] hover:scale-110 transition-all"
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
            id="plane"
            src={Plane}
            className="absolute w-[16vw] top-[4vw] left-[10vw]  z-50"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Interactive;
