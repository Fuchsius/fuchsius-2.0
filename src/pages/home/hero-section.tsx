import { useRef } from "react";
import gsap from "gsap";

import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const HeroSection = () => {
  const tl = useRef<GSAPTimeline | null>(null);
  const leftBallRef = useRef(null);
  const centerBallRef = useRef(null);
  const rightBallRef = useRef(null);
  const mainTitleRef = useRef(null);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);
  const subtitleRef = useRef(null);
  const rightContentRef = useRef(null);
  const supportBoxesRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "") {
      // Kill previous animations if they exist
      if (tl.current) tl.current.kill();

      // Create GSAP timeline
      tl.current = gsap.timeline({ repeat: -1, yoyo: true });

      tl.current
        .fromTo(
          leftBallRef.current,
          { x: "-95%", y: "50%", scale: 0.8, rotation: -146.71, opacity: 0.7 },
          { x: "-75%", y: "-60%", scale: 1, rotation: -136.71, opacity: 0.9, duration: 8, ease: "power1.inOut" }
        )
        .fromTo(
          centerBallRef.current,
          { scale: 0.9, rotation: -146.71, opacity: 0.7 },
          { scale: 1.1, rotation: -156.71, opacity: 0.9, duration: 3, ease: "power1.inOut" },
          0
        )
        .fromTo(
          rightBallRef.current,
          { x: "90%", y: "-50%", scale: 0.8, rotation: -146.71, opacity: 0.7 },
          { x: "30%", y: "60%", scale: 1, rotation: -136.71, opacity: 0.9, duration: 8, ease: "power1.inOut" },
          0
        );

      // Other animations (titles, logo, buttons, etc.)
      gsap.fromTo(mainTitleRef.current, { opacity: 0, y: 50, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" });
      gsap.fromTo(logoRef.current, { opacity: 0, rotate: -20, scale: 0.7 }, { opacity: 1, rotate: 0, scale: 1, duration: 1, delay: 0.5, ease: "back.out(1.7)" });
      gsap.fromTo(buttonRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 0.7, ease: "power3.out" });
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power3.out" });
      gsap.fromTo(rightContentRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 1.1, ease: "power3.out" });

      if (supportBoxesRef.current?.children) {
        gsap.fromTo(supportBoxesRef.current.children, { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.7, delay: 1.3, ease: "power3.out" });
      }

      gsap.fromTo(backgroundRef.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power1.inOut" });
    }

    return () => {
      if (tl.current) tl.current.kill();
    };
  }, [location.hash]);

  return (
    <div className="w-full overflow-hidden relative">
      <div className="my-container">
        <div className="min-h-[calc(100vh-135px)] flex items-center justify-center relative">
          <h1
            ref={mainTitleRef}
            className="uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[198px] font-redHatDisplay font-extrabold text-center bg-gradient-to-r from-my-black via-my-lightpurple to-my-black bg-clip-text text-transparent"
          >
            FUCHSIUS
          </h1>

          <img
            ref={logoRef}
            src="/logo.svg"
            alt="Fuchsius"
            className="absolute w-36 sm:w-48 md:w-60 lg:w-72 xl:w-auto"
          />

          <button
            ref={buttonRef}
            className="rounded-full bg-my-purple/25 p-[5px] absolute top-64 lg:top-60 left-0 hover:shadow-xl hover:shadow-my-purple/50 transition-all z-10"
          >
            <div className="border border-my-purple px-2.5 py-[5px] rounded-full">
              Transform Your IT with Fuchsius
            </div>
          </button>

          <div
            ref={subtitleRef}
            className="text-3xl md:text-4xl xl:text-5xl absolute bottom-5 lg:bottom-20 left-0 font-redHatDisplay font-semibold z-10"
          >
            Empowering
            <br />Future-Focused <span className="text-my-lightpurple">Solutions.</span>
          </div>


          <div
            ref={rightContentRef}
            className="max-w-[400px] absolute bottom-32 right-0 flex flex-col items-start gap-5 lg:gap-8 z-10"
          >
            <p className="text-base md:text-lg lg:text-xl">
              Your Partner in Web, Mobile, Digital Marketing, SEO, UI/UX & IT Solutions.
            </p>

            {/* <div className="w-full flex justify-center sm:justify-start"> */}
              <div className="bg-linear-to-b from-my-purple2 to-my-lightpurple2 p-[2px] rounded-[20px] shadow-2xl shadow-my-purple/50 ">
                <a href="#about" className="inline-block px-5 py-3 md:py-4 font-semibold rounded-[20px] text-base md:text-lg lg:text-xl bg-[radial-gradient(ellipse_97.54%_50.91%_at_50.00%_2.46%,_#A052FF_0%,_#7300FF_100%)] cursor-pointer hover:-translate-y-1 transition-all">
                  Discover More
                </a>
              </div>
            {/* </div> */}
          </div>

          <div
            ref={supportBoxesRef}
            className="absolute top-10 lg:top-16 right-5 space-y-5 z-10"
          >
            <Link to={"#services"} className="relative text-sm w-60 pb-3 hover:scale-125 cursor-pointer block">
              <div className="max-w-[143px]">Explore Our IT Services</div>
              <div className="absolute bottom-0">
                <img src="/assets/images/vector1.svg" alt="" />
              </div>

              <img
                src="/assets/images/arrow2.svg"
                className="absolute top-0 right-3 w-3 animate-bounce"
                alt="arrow"
              />
            </Link>

            <Link to="#contact" className="relative text-sm w-60 hover:scale-125 pb-3 cursor-pointer block">
              <div className="max-w-[143px]">24/7 Customer Support</div>
              <div className="absolute bottom-0">
                <img src="/assets/images/vector1.svg" alt="" />
              </div>

              <img
                src="/assets/images/arrow2.svg"
                className="absolute top-0 right-3 w-3 rotate-45"
                alt="arrow"
              />
            </Link>

          </div>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 z-0 overflow-hidden">
        <div className="relative w-full h-full flex justify-center items-center">
          <div
            ref={leftBallRef}
            className="border object-left rotate-[-146.71deg] opacity-90 bg-gradient-to-l from-[#C60786] to-[#8400FF] 
          blur-[160px] rounded-full w-80 h-80 mix-blend-lighten -translate-x-[75%] "
          />
          <div
            ref={centerBallRef}
            className="border object-center rotate-[-146.71deg] opacity-90 bg-gradient-to-l from-[#C60786] to-[#8400FF] 
          blur-[114.55px] rounded-full w-[480px] h-64 mix-blend-lighten "
          />
          <div
            ref={rightBallRef}
            className="border object-right rotate-[-146.71deg] opacity-90 bg-gradient-to-l from-[#C60786] to-[#8400FF] 
          blur-[160px] rounded-full w-80 h-80 mix-blend-lighten translate-x-[75%] "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
