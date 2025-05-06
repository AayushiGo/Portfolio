// import React, { useEffect, useRef } from "react";
// import logoTop from "../assets/logo 1.svg";
// import logoBottom from "../assets/logo2.svg";
// import YellowLight from "../assets/yellowLightBig.svg";
// import gsap from "gsap";

// const footer = () => {
//   const lightRef = useRef(null);
//   const logoRef = useRef(null)

//   useEffect(() => {
//     gsap.fromTo(
//       lightRef.current,
//       {
//         rotate: 10,
//       },
//       {
//         rotate: -20,
//         duration: 2,
//         ease: "back.inOut",
//         yoyo: true,
//         repeat: -1,
//       }
//     );
//     gsap.to(logoRef.current, {
//       rotate: 16,
//       y: 1,
//       duration: 1,
//       ease: "bounce",
//       yoyoEase: 1,
//       repeat: -1,
//     });
//   });

//   return (
//     <div className="footer w-full  hidden  rounded-tl-[3vw] rounded-tr-[3vw] p-[2vw] bg-black  relative overflow-hidden linear-gradient()">
//       <img
//         ref={lightRef}
//         className="YellowLight absolute w-[30vw] -top-[9vw] left-[5vw] rotate-3"
//         src={YellowLight}
//         alt=""
//       />

//       <section className="flex flex-col items-center justify-start mt-[3vw]">
//         <h1 className="dela-gothic-one  text-[#fff8e7] text-[3vw] max-w-[40%] text-center">
//           Let's roll credits on your next big idea.
//         </h1>
//         <button
//           // ref={buttonRef}
//           className="mt-[2.5vw]   dela-gothic-one text-[#843F2E] md:flex bg-[#fff8e7] px-4  py-2  text-4xl  shadow-[-7px_7px_0_rgba(0,0,0,1)] cursor-pointer  hover:shadow-[-4px_4px_0_rgba(0,0,0,1)] hover:bg-[#F5EBDD]"
//         >
//           Let's build
//         </button>
//       </section>

//       <section className="flex mt-[18vw]  items-center justify-between aonik-regular text-[#fff8e7] px-[2vw] ">
//         <div>
//           <h1 className="">© 2025 Aayushi Gorania. All popcorns reserved.</h1>
//         </div>
//         <div className="list-none ">
//           <ul className="flex gap-[1vw] items-center text-center ">
//           <li className=" h-[1.4vw] w-full  overflow-hidden flex flex-col group transition-all  ease-in-out ">
//               <a
//                 href="/about "
//                 className="group-hover:-translate-y-[1.4vw] duration-300 "
//               >
//                 Email
//               </a>
//               <a
//                 href="/about "
//                 className="group-hover:-translate-y-[1.4vw] duration-300 "
//               >
//                 Email
//               </a>
//             </li>
//             <span>|</span>
//             <li className=" h-[1.4vw] w-full  overflow-hidden flex flex-col group transition-all  ease-in-out ">
//               <a
//                 href="/about "
//                 className="group-hover:-translate-y-[1.4vw] duration-300  "
//               >
//                 LinkedIn
//               </a>
//               <a
//                 href="/about "
//                 className="group-hover:-translate-y-[1.4vw] duration-300 "
//               >
//                 LinkedIn
//               </a>
//             </li>
//             <span>|</span>
//             <li className=" h-[1.4vw] w-full  overflow-hidden flex flex-col group transition-all  ease-in-out ">
//               <a
//                 href="/about "
//                 className="group-hover:-translate-y-[1.4vw] duration-300 "
//               >
//                 Github
//               </a>
//               <a
//                 href="/about "
//                 className="group-hover:-translate-y-[1.4vw] duration-300 "
//               >
//                 Github
//               </a>
//             </li>
//             <span>|</span>
//             <li className=" h-[1.4vw] w-full  overflow-hidden flex flex-col group transition-all  ease-in-out ">
//               <a
//                 href="/about "
//                 className="group-hover:-translate-y-[1.4vw] duration-300 "
//               >
//                 Contact
//               </a>
//               <a
//                 href="/about "
//                 className="group-hover:-translate-y-[1.4vw] duration-300 "
//               >
//                 Contact
//               </a>
//             </li>
//             <div className="flex flex-col items-center z-50 scale-200 ml-[1vw]  ">
//           <img ref={logoRef}  src={logoTop} alt="Logo Top" />
//           <img src={logoBottom} className="ml-[0.1vw] mb-[1vw]" alt="Logo Bottom" />

//         </div>
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default footer;

import React, { useEffect, useRef } from "react";
import logoTop from "../assets/footerAssets/logo 1.svg";
import logoBottom from "../assets/footerAssets/logo2.svg";
import YellowLight from "../assets/footerAssets/yellowLightBig.svg";
import gsap from "gsap";

const footer = () => {
  const lightRef = useRef();
  const logoRef = useRef();
  const headingRef = useRef();
  const buttonRef = useRef();
  const linksRef = useRef()


  useEffect(() => {
    const heading = headingRef.current
    const button = buttonRef.current
    const links = linksRef.current

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
              y:0,
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
    

  return (
    <div id="footer" className="footer  bg-black relative overflow-hidden py-[1vw]  ">
      <img
        ref={lightRef}
        className="YellowLight absolute w-[30vw] -top-[9vw] left-[5vw] rotate-3"
        src={YellowLight}
        alt=""
      />

      <section className="flex flex-col items-center justify-start mt-[10vw] ">
        <h1 ref={headingRef} className="dela-gothic-one scale-0  text-[#fff8e7] text-[3.5vw] md:text-[3vw] max-w-[40%] text-center">
          Let's roll credits on your next big idea.
        </h1>
        <button
          ref={buttonRef}
          className="md:mt-[2.5vw] mt-[2.7vw] text-[2.2vw] px-2 py-1 scale-0   dela-gothic-one text-[#843F2E] md:flex bg-[#fff8e7] lg:px-4  lg:py-2 xl:px-6 xl:py-3  lg:text-4xl  shadow-[-7px_7px_0_rgba(0,0,0,1)] cursor-pointer  hover:shadow-[-4px_4px_0_rgba(0,0,0,1)] hover:bg-[#F5EBDD]"
        ><a href="mailto:aayushigorania@gmail.com">Let's build</a>
          
        </button>
      </section>

      <section ref={linksRef} className=" flex mt-[17vw] md:mt-[23vw]  translate-y-[7vw] items-center justify-between aonik-regular text-[#fff8e7] px-[2.5vw] ">
        <div>
          <h1 className=" text-[1.2vw]">© 2025 Aayushi Gorania. All popcorns reserved.</h1>
        </div>
        <div className="list-none ">
          <ul className="flex gap-[0.4vw] md:gap-[1vw]  items-center text-center text-[1.4vw] md:text-[1.2vw]  ">
            <li className=" h-[1.5vw] w-full  overflow-hidden flex flex-col group transition-all  ease-in-out ">
              <a
                href="mailto:aayushigorania@gmail.com"  target="_blank"
              rel="noopener noreferrer"
                className="group-hover:-translate-y-[1.4vw] duration-300 "
              >
                Email
              </a>
              <a
                href="mailto:aayushigorania@gmail.com"  target="_blank"
              rel="noopener noreferrer"
                className="group-hover:-translate-y-[1.7vw] duration-300 "
              >
                Email
              </a>
            </li>
            <span>|</span>
            <li className=" h-[1.5vw] w-full  overflow-hidden flex flex-col group transition-all  ease-in-out ">
              <a
                href="https://www.linkedin.com/in/aayushi-gorania/"  target="_blank"
              rel="noopener noreferrer"
                className="group-hover:-translate-y-[1.4vw] duration-300  "
              >
                LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/in/aayushi-gorania/"  target="_blank"
              rel="noopener noreferrer"
                className="group-hover:-translate-y-[1.7vw] duration-300 "
              >
                LinkedIn
              </a>
            </li>
            <span>|</span>
            <li className=" h-[1.5vw] w-full  overflow-hidden flex flex-col group transition-all  ease-in-out ">
              <a
                href="https://github.com/AayushiGo"  target="_blank"
              rel="noopener noreferrer"
                className="group-hover:-translate-y-[1.4vw] duration-300 "
              >
                Github
              </a>
              <a
                href="https://github.com/AayushiGo"  target="_blank"
              rel="noopener noreferrer"
                className="group-hover:-translate-y-[1.7vw] duration-300 "
              >
                Github
              </a>
            </li>
            {/* <span>|</span>
            <li className=" h-[1.5vw] w-full  overflow-hidden flex flex-col group transition-all  ease-in-out ">
              <a
                href="/about "
                className="group-hover:-translate-y-[1.4vw] duration-300 "
              >
                Contact
              </a>
              <a
                href="/about "
                className="group-hover:-translate-y-[1.7vw] duration-300 "
              >
                Contact
              </a>
            </li> */}
            <div className="flex flex-col items-center z-50 scale-55 md:scale-100 lg:scale-200 ml-[1vw]  ">
              <img ref={logoRef} src={logoTop} alt="Logo Top" />
              <img
                src={logoBottom}
                className="ml-[0.1vw] mb-[1vw]"
                alt="Logo Bottom"
              />
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default footer;
