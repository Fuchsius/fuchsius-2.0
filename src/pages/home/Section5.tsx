import { useRef, useEffect } from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { FaRegCalendarCheck, FaRegLaugh } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate container border gradient
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate stats items with counter effect
      const statItems = statsRef.current?.children;
      if (statItems) {
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate numbers
        const numberElements = document.querySelectorAll(".counter-number");
        numberElements.forEach((el) => {
          const target = parseInt(el.textContent || "0", 10);
          gsap.fromTo(
            el,
            { innerText: "0" },
            {
              innerText: target,
              duration: 2,
              snap: { innerText: 1 },
              ease: "power2.out",
              scrollTrigger: {
                trigger: statsRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // Animate icons with bounce
        const icons = document.querySelectorAll(".stat-icon");
        gsap.fromTo(
          icons,
          { scale: 0, rotate: -45 },
          {
            scale: 1,
            rotate: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-12">
      <div className="my-container w-full">
        <div
          ref={containerRef}
          className="bg-gradient-to-b from-my-purple2 via-my-lightpurple to-my-purple px-[1px] rounded-lg w-full"
        >
          <div className="w-full h-full p-8 bg-my-black rounded-lg">
            <div
              ref={statsRef}
              className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5"
            >
              <div className="sm:flex items-center gap-4 block">
                <div className="w-full sm:w-auto flex justify-center sm:block">
                  <div className="stat-icon text-white bg-my-purple w-24 h-24 flex items-center justify-center rounded-lg">
                    <FaRegCalendarCheck size={32} />
                  </div>
                </div>
                <div className="flex flex-col sm:mt-0 sm:text-left text-center mt-4">
                  <div className="counter-number font-semibold text-3xl">2</div>
                  <div>Year Of experience</div>
                </div>
              </div>
              <div className="sm:flex items-center gap-4 block">
                <div className="w-full sm:w-auto flex justify-center sm:block">
                  <div className="stat-icon text-white bg-my-purple w-24 h-24 flex items-center justify-center rounded-lg">
                    <AiOutlineSafety size={32} />
                  </div>
                </div>
                <div className="flex flex-col sm:mt-0 sm:text-left text-center mt-4">
                  <div className="counter-number font-semibold text-3xl">
                    50
                  </div>
                  <div>Project Complete</div>
                </div>
              </div>
              <div className="sm:flex items-center gap-4 block">
                <div className="w-full sm:w-auto flex justify-center sm:block">
                  <div className="stat-icon text-white bg-my-purple w-24 h-24 flex items-center justify-center rounded-lg">
                    <RiGroupLine size={32} />
                  </div>
                </div>
                <div className="flex flex-col sm:mt-0 sm:text-left text-center mt-4">
                  <div className="counter-number font-semibold text-3xl">
                    40
                  </div>
                  <div>Team Members</div>
                </div>
              </div>
              <div className="sm:flex items-center gap-4 block">
                <div className="w-full sm:w-auto flex justify-center sm:block">
                  <div className="stat-icon text-white bg-my-purple w-24 h-24 flex items-center justify-center rounded-lg">
                    <FaRegLaugh size={32} />
                  </div>
                </div>
                <div className="flex flex-col sm:mt-0 sm:text-left text-center mt-4">
                  <div className="counter-number font-semibold text-3xl">
                    50
                  </div>
                  <div>Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
