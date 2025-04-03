import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image section animation
      gsap.fromTo(
        imageWrapperRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Overlay card animation
      gsap.fromTo(
        overlayRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Content section animations
      const textElements = contentRef.current?.querySelectorAll("span, p");

      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (textElements) {
        gsap.fromTo(
          textElements,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-12 md:py-16 lg:py-24"
    >
      <div className="my-container w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-x-24 gap-y-8">
          {/* Image and overlay section */}
          <div
            ref={imageWrapperRef}
            className="w-full max-w-xl mx-auto relative aspect-square"
          >
            <div ref={imageRef} className="w-full flex justify-center sm:block">
              <img
                className="w-[80%] aspect-square object-cover rounded-xl"
                src="/assets/team/group.jpg"
                alt="About Us"
              />
            </div>
            <div
              ref={overlayRef}
              className="w-full p-12 absolute max-w-md bottom-0 right-0 bg-slate-900/80 backdrop-blur-md rounded-[20px]"
            >
              <p className="text-sm md:text-base ">
                We provide custom software, IT consulting, web and mobile apps,
                cloud solutions, cybersecurity, and AI technologies to help your
                business grow.
              </p>
              <a
                href="#services"
                className=" flex gap-2 items-center mt-4 underline underline-offset-2 justify-center lg:justify-start"
              >
                Service{" "}
                <img
                  src="/assets/images/CTAButton.svg"
                  alt=""
                  className="rotate-180"
                />
              </a>
            </div>
          </div>

          {/* Text content section */}
          <div
            ref={contentRef}
            className="w-full flex flex-col justify-start items-start gap-3 md:gap-5 mt-8 lg:mt-0"
          >
            <div
              ref={headingRef}
              className="self-stretch text-violet-600 text-lg md:text-xl font-semibold font-['Poppins'] uppercase tracking-widest"
            >
              About us
            </div>
            <div className="self-stretch">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px]">
                We Are Increasing
                <br className="hidden md:block" />
                Business Success with
                <br className="hidden md:block" />
              </span>
              <span className="text-purple-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px]">
                IT Solution.
              </span>
            </div>
            <div className="">
              <p>
                At Fuchsius Pvt Ltd., we specialize in Empowering Future-Focused
                Solutions. Our mission is to provide innovative IT services that
                help businesses succeed in a rapidly evolving digital world.
                With a team of experts, we offer tailored, forward-thinking
                solutions that enable our clients to stay ahead of the curve and
                achieve sustainable growth. Partner with us to unlock the full
                potential of your business and navigate the future with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
