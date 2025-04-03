import { useRef, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChoodrUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title and heading
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate image
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate cards with stagger
      const cards =
        cardsContainerRef.current?.querySelectorAll(".feature-card");
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          x: -30,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-12 md:py-16 lg:py-24">
      <div className="my-container">
        <div className="flex flex-col lg:flex-row gap-y-16 lg:gap-y-0 lg:gap-x-8">
          {/* Left Column */}
          <div className="flex flex-col gap-y-8 w-full">
            <div
              ref={titleRef}
              className="uppercase text-xl font-semibold tracking-wide text-my-purple"
            >
              Why choose us
            </div>
            <div ref={headingRef} className="self-stretch">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px]">
                We Provide
                <br className="hidden md:block" />
                Exclusive Service
                <br className="hidden md:block" />
              </span>
              <span className="text-purple-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px]">
                For Your Business.
              </span>
            </div>
            <div className="w-full">
              <img
                ref={imageRef}
                src="/assets/images/image1.svg"
                alt="Fuchsius"
                className="lg:w-9/12 object-cover w-full"
              />
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div
            ref={cardsContainerRef}
            className="w-full lg:h-auto relative flex justify-center items-center py-16 md:py-20 lg:py-0"
          >
            <div className="flex flex-col gap-y-8 md:gap-y-12 z-20 w-full">
              {/* First row */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-x-8 w-full">
                <div className="feature-card flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full bg-bg1">
                  <div className="text-lg font-semibold">Big Data Analysis</div>
                  <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                    <TiTick size={24} />
                  </div>
                </div>
                <div className="feature-card flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full bg-bg1">
                  <div className="text-lg font-semibold">
                    High Quality Security
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                    <TiTick size={24} />
                  </div>
                </div>
              </div>

              {/* Second row - with offset on larger screens */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-x-8 w-full md:ml-0 lg:-ml-32">
                <div className="feature-card flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full bg-bg1">
                  <div className="text-lg font-semibold">
                    24/7 Online Support
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                    <TiTick size={24} />
                  </div>
                </div>
                <div className="feature-card flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full bg-bg1">
                  <div className="text-lg font-semibold">24/7 Support Team</div>
                  <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                    <TiTick size={24} />
                  </div>
                </div>
              </div>

              {/* Third row */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-x-8 w-full">
                <div className="feature-card flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full bg-bg1">
                  <div className="text-lg font-semibold">
                    Business Improvement
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                    <TiTick size={24} />
                  </div>
                </div>
                <div className="feature-card flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full bg-bg1">
                  <div className="text-lg font-semibold">Easy Solutions</div>
                  <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                    <TiTick size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoodrUs;
