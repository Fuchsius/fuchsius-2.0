import React, { useCallback, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import gsap from "gsap";

interface Service {
  title: string;
  description: string;
  slug: string;
}

interface ServicesCarouselProps {
  services: Service[];
}

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ services }) => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    align: "start",
    breakpoints: {
      "(min-width: 768px) and (max-width: 1023px)": { align: "start" },
      "(min-width: 1024px)": { align: "start" },
    },
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    // Ensure clean animation timeline
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Animate controls
      gsap.fromTo(
        controlsRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );

      // Animate service cards
      gsap.fromTo(
        ".service-card",
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.4,
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section id="services" className="w-full py-12 md:py-16 lg:py-24">
      <div
        ref={containerRef}
        className="my-container w-full max-w-7xl mx-auto px-4"
      >
        <div className="flex items-center justify-between mb-8 px-4">
          <div
            ref={titleRef}
            className="uppercase text-3xl font-semibold font-redHatDisplay leading-10"
          >
            Our Service
          </div>

          <div ref={controlsRef} className="flex gap-5">
            <div
              className="border border-my-purple text-my-purple w-12 h-12 max-h-12 max-w-12 rounded-full flex items-center justify-center hover:shadow-myshadow1 transition-all cursor-pointer"
              onClick={scrollPrev}
            >
              <FaArrowLeft />
            </div>
            <div
              className="border border-my-purple text-my-purple w-12 h-12 max-h-12 max-w-12 rounded-full flex items-center justify-center hover:shadow-myshadow1 transition-all cursor-pointer"
              onClick={scrollNext}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {services.map((service, index) => (
              <div
                key={index}
                className="embla__slide px-4 flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
              >
                <div className="service-card border-2 border-my-purple rounded-lg py-12 px-6 md:px-10 lg:px-16 flex flex-col h-full transition-all min-h-64 md:min-h-80 lg:min-h-96">
                  <div className="text-2xl lg:text-3xl font-semibold font-redHatDisplay leading-10 text-center">
                    {service.title}
                  </div>
                  <p className="text-center my-5">{service.description}</p>
                  <button className="mt-auto mx-auto bg-linear-to-b from-my-purple2 to-my-lightpurple2 p-[2px] rounded-[20px] shadow-2xl shadow-my-purple/50">
                    <div
                      onClick={() => {
                        navigate(`/services/${service.slug}`);
                      }}
                      className=" px-5 py-3 md:py-4 font-semibold rounded-[20px] !text-xs md:text-lg lg:text-xl bg-[radial-gradient(ellipse_97.54%_50.91%_at_50.00%_2.46%,_#A052FF_0%,_#7300FF_100%)] cursor-pointer hover:-translate-y-1 transition-all"
                    >
                      Learn More
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
