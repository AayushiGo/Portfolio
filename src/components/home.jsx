import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import Cassete from "../assets/homeAssets/cassete.png";
import Cd from "../assets/homeAssets/Caset.png";
import CreativeDev from "../assets/homeAssets/Cd.svg";
import CreativeDevMobile from "../assets/homeAssets/CdM.svg";

import TicketMenuImage from "../assets/homeAssets/TicketMenuimg.png";
import YellowLight from "../assets/homeAssets/yellowLight.svg";
import CloseIcon from "../assets/homeAssets/close.svg";
import SpinReelSound from "../assets/homeAssets/spinaudio.mp3";

import Marquee from "./marquee";

import gsap from "gsap";

const home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const creativeDevRef = useRef();
  const textRef = useRef();
  const lightRef = useRef();
  const cdRef = useRef();
  const cassetteRef = useRef();

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

  // onload animations

  useEffect(() => {
    const creativeDevElement = creativeDevRef.current;
    const navElement = navRef.current;
    const textElement = textRef.current;
    const cdElement = cdRef.current;
    const casseteElement = cassetteRef.current;

    gsap.registerPlugin();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline();

          tl.to(navElement, {
            y: 0,
            duration: 1.2,
            ease: "power4.inOut",
          });

          tl.fromTo(
            creativeDevElement,
            {
              scale: 0,
            },
            {
              scale: 1,
              duration: 1,

              ease: "back.out(1.7)",
            }
          );

          tl.to(cdElement, {
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
          });

          tl.to(casseteElement, {
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
          });

          tl.to(textElement, {
            y: 0,
            duration: 0.5,
            ease: "power3",
          });

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    gsap.to(lightRef.current, {
      rotate: -20,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    if (navElement && creativeDevElement) {
      observer.observe(navElement && creativeDevElement);
    }

    return () => observer.disconnect();
  }, []);

  // Sound Function

  function play() {
    new Audio(SpinReelSound).play();
  }

  return (
    <>
      <div id="home" onClick={play} className="home  ">
        {/* Menu */}
        <div
          className={`menusection w-[110vw] h-[50vw] md:w-[40vw] md:h-[20vw]  absolute  -right-3 z-10 bg-cover bg-center flex flex-col items-center justify-between p-[2.5vw] gap-[1vw] transition-all ease-in-out duration-1000   ${
            menuOpen ? "top-0" : "-top-[50vh] md:-top-[50vh] "
          } `}
          style={{
            backgroundImage: `${TicketMenuImage}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <img
            ref={lightRef}
            className="YellowLight absolute w-[35vw] md:w-[18vw] -top-[11vw] left-[50vw] md:left-[12vw] rotate-12"
            src={YellowLight}
            alt=""
          />

          {/* Menu Items */}
          <ul className="text-[#fff8e7] dela-gothic-one text-[6vw] md:text-[2vw] flex flex-col items-start -ml-[40vw] mt-[4vh] md:-ml-[14vw] md:mt-[2vw] z-50   ">
          <li className=" h-[9vw] md:h-[3vw] w-full text-[6vw] md:text-[2vw] overflow-hidden flex flex-col group transition-all  ease-in-out ">
              <a
                href="/home "
                className="group-hover:-translate-y-[3vw] duration-500 "
              >
                Home
              </a>
              <Link
                to={"/home"}
                href="/home "
                className="group-hover:-translate-y-[3vw] duration-500 "
              >
                Home
              </Link>
            </li>

            <li className=" h-[9vw] md:h-[3vw] w-full text-[6vw] md:text-[2vw] overflow-hidden flex flex-col group transition-all  ease-in-out ">
              <a
                href="/about "
                className="group-hover:-translate-y-[3vw] duration-500 "
              >
                About
              </a>
              <Link
                to={"/about"}
                href="/about "
                className="group-hover:-translate-y-[3vw] duration-500 "
              >
                About
              </Link>
            </li>

            <li className=" h-[9vw] md:h-[3vw] w-full text-[6vw] md:text-[2vw] overflow-hidden flex flex-col group transition-all  ease-in-out ">
              <a
                href="/work "
                className="group-hover:-translate-y-[3vw] duration-500 "
              >
                Work
              </a>
              <Link
                to={"/work"}
                href="/work "
                className="group-hover:-translate-y-[3vw] duration-500 "
              >
                Work
              </Link>
            </li>
          </ul>

          {/*Menu Footer Links */}
          <div className="aeonik-regular text-[#fff8e7] text-[3vw] aeonik-regular md:text-[1vw] flex flex-wrap gap-[1.2vw] justify-center z-50 mb-[4vw] md:mb-[1vw]">
            <a
              href="mailto:aayushigorania@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110"
            >
              Email
            </a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/in/aayushi-gorania/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110"
            >
              LinkedIn
            </a>
            <span>|</span>
            <a
              href="https://github.com/AayushiGo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110"
            >
              Github
            </a>
            <span className="hidden md:flex">|</span>
            <Link to={"/interactive"} className="hover:scale-110 hidden md:flex">
              Fun
            </Link>
          </div>
          <img
            onClick={() => setMenuOpen(false)}
            className="absolute w-[4vw] md:w-[1.2vw] top-[6vh] right-[20vw] md:top-[5vw] md:right-[8vw] cursor-pointer"
            src={CloseIcon}
            alt=""
          />
        </div>

        {/* Navbar */}
        <nav
          ref={navRef}
          className="navbar  -translate-y-[13vw] flex items-center justify-between px-7 py-7 md:px-10 md:py-12 "
        >
          <h1 className="text-[#87392D] dela-gothic-one cursor-pointer text-sm md:text-xl">
            Aayushi{" "}
            <span className="opacity-0 md:opacity-100 lg:opacity-100 xl:opacity-100 cursor-pointer">
              Gorania
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 md:gap-7 text-[#FDF6E3] dela-gothic-one z-0">
            <button className="hidden md:flex bg-[#843F2E] px-4 md:px-[1vw] py-2 md:py-[0.5vw] text-xs md:text-sm shadow-[-5px_5px_0_rgba(0,0,0,1)] cursor-pointer transition-all hover:shadow-[-2px_2px_0_rgba(0,0,0,1)] hover:bg-[#A95F4E]">
              <a href="mailto:aayushigorania@gmail.com">Let's build</a>
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex bg-[#843F2E]  px-2 md:px-[1vw] py-1 md:py-[0.35vw] text-sm md:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] shadow-[-3px_3px_0_rgba(0,0,0,1)] md:shadow-[-5px_5px_0_rgba(0,0,0,1)] cursor-pointer transition-all hover:shadow-[-2px_2px_0_rgba(0,0,0,1)] hover:bg-[#A95F4E]"
            >
              Menu
            </button>
          </div>
        </nav>

        {/* Main section */}
        <section className=" flex items-center justify-center flex-col mt-[10vw]">
          <img
            ref={creativeDevRef}
            className="w-[73vw] md:w-[73vw] scale-0 hidden md:flex  CreativeDev select-none"
            src={CreativeDev}
            alt="Creative Dev"
          />

          <img
            className="w-[93vw]  md:hidden  CreativeDev select-none"
            src={CreativeDevMobile}
            alt="Creative Dev"
          />

          <img
            src={Cd}
            ref={cdRef}
            className=" absolute opacity-0 hidden md:flex w-[7vw] left-[10vw] top-[39vw] md:top-[36vw] lg:top-[32vw]  xl:top-[28vw] orbitt  "
            alt=""
          />
          <img
            src={Cassete}
            ref={cassetteRef}
            className=" absolute opacity-0 hidden md:flex w-[8vw] left-[77vw] top-[27vw] md:top-[23vw] lg:top-[19vw] xl:top-[16vw] rotate-12  "
            alt=""
          />

          <div className=" aeonik-regular text-[4.5vw] md:text-[2.2vw] w-[60%] text-center h-fit overflow-hidden mt-[3vw] md:-mt-[2vw]  lg:-mt-[2vw] text-[#1f1f1f]">
            <h1 ref={textRef} className="  aeonik-regular">
              Learning, experimenting, and building.
            </h1>
          </div>
        </section>

        {/* Marquee */}

        <Marquee />
      </div>
    </>
  );
};

export default home;
