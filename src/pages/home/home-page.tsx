import { useEffect } from "react";

import Header from "@/components/header";
import ServicesCarousel from "@/components/ServicesCarousel";
import { SERVICES } from "@/data/services.data";
import { EmblaOptionsType } from "embla-carousel";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { RiGroupLine } from "react-icons/ri";
import { FaRegLaugh } from "react-icons/fa";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ReviewCarousel from "@/components/ReviewsCarousel";
import HeroSection from "./hero-section";
import { TiTick } from "react-icons/ti";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Swiper CSS
// import 'swiper/modules/pagination/pagination.css';

import { Autoplay } from "swiper/modules";

import ScrollToSection from "@/components/ScrollToSection";

import { useLocation } from "react-router-dom";
import AboutSection from "./about-section";

export const LOGOS = [
  "/assets/logos/travelgate.svg",
  "/assets/logos/prabhu.svg",
  "/assets/logos/traveltribe.svg",
  "/assets/logos/kingswood.svg",
];

export const OUR_TEAM = [
  {
    name: "Tharindu Kulasignhe",
    role: "CEO/Founder",
    image: "/assets/team/1.png",
  },
  {
    name: "Thisura Theshan",
    role: "Co-Founder",
    image: "/assets/team/5.jpg",
  },
  {
    name: "Nadeesha Jayawickrama",
    role: "Project Manager",
    image: "/assets/team/2.png",
  },
  {
    name: "Kalana Didulanga",
    role: "Full Stack Developer",
    image: "/assets/team/3.png",
  },
  {
    name: "Didul Adeesha",
    role: "UI UX Designer",
    image: "/assets/team/4.png",
  },
];

const HomePage = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const SLIDES = [
    {
      id: 1,
      name: "Sangeeth Prabhu",
      role: "Founder Salon Prabhu",
      description:
        "Working with Fuchsius was a great experience. They delivered a modern, user-friendly website for Prabhu.lk that perfectly matches our vision. Highly recommended!",
    },
    {
      id: 2,
      name: "Ashara Chamodi",
      role: "Founder Emi Fashion",
      description:
        "Fuchsius did an outstanding job on our website. They delivered a stylish, responsive site for EMI Fashion that perfectly aligns with our brand. We’re very happy with the result and recommend them without hesitation!",
    },
    {
      id: 2,
      name: "Praneetha",
      role: "Founder Praneetha Foods",
      description:
        "We are very happy with the work done by Fuchsius Pvt Ltd on our website. They created a clean, easy-to-use site for Praneetha Foods that meets all our needs. We highly recommend their services!",
    },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Header />

      <ScrollToSection />

      <HeroSection />

      <ServicesCarousel services={SERVICES} />

      <AboutSection />

      <div className="w-full py-12 md:py-16 lg:py-24">
        <div className="my-container">
          <div className="flex flex-col lg:flex-row gap-y-16 lg:gap-y-0 lg:gap-x-8">
            {/* Left Column */}
            <div className="flex flex-col gap-y-8 w-full">
              <div className="uppercase text-xl font-semibold tracking-wide text-my-purple">
                Why choose us
              </div>
              <div className="self-stretch">
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
                  src="/assets/images/image1.svg"
                  alt="Fuchsius"
                  className="lg:w-9/12 object-cover w-full"
                />
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="w-full lg:h-auto relative flex justify-center items-center py-16 md:py-20 lg:py-0">
              <div className="flex flex-col gap-y-8 md:gap-y-12 z-20 w-full">
                {/* First row */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-x-8 w-full">
                  <div className="flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full  bg-bg1">
                    <div className="text-lg font-semibold">
                      Big Data Analysis
                    </div>
                    <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                      <TiTick size={24} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full  bg-bg1">
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
                  <div className="flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full  bg-bg1">
                    <div className="text-lg font-semibold">
                      24/7 Online Support
                    </div>
                    <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                      <TiTick size={24} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full  bg-bg1">
                    <div className="text-lg font-semibold">
                      24/7 Support Team
                    </div>
                    <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                      <TiTick size={24} />
                    </div>
                  </div>
                </div>

                {/* Third row */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-x-8 w-full">
                  <div className="flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full  bg-bg1">
                    <div className="text-lg font-semibold">
                      Business Improvement
                    </div>
                    <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                      <TiTick size={24} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full  bg-bg1">
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

      <div className="w-full py-12">
        <div className="my-container w-full">
          <div className=" bg-gradient-to-b from-my-purple2 via-my-lightpurple to-my-purple px-[1px] rounded-lg w-full">
            <div className=" w-full h-full p-8 bg-my-black rounded-lg">
              <div className=" w-full grid grid-cols-2 lg:grid-cols-4 gap-5 ">
                <div className=" sm:flex items-center gap-4 block">
                  <div className="w-full sm:w-auto flex justify-center sm:block">
                    <div className=" text-white bg-my-purple w-24 h-24 flex items-center justify-center rounded-lg">
                      <FaRegCalendarCheck size={32} />
                    </div>
                  </div>
                  <div className=" flex flex-col sm:mt-0 sm:text-left text-center mt-4">
                    <div className=" font-semibold text-3xl">2+</div>
                    <div>Year Of experience</div>
                  </div>
                </div>
                <div className=" sm:flex items-center gap-4 block">
                  <div className="w-full sm:w-auto flex justify-center sm:block">
                    <div className=" text-white bg-my-purple w-24 h-24 flex items-center justify-center rounded-lg">
                      <AiOutlineSafety size={32} />
                    </div>
                  </div>
                  <div className=" flex flex-col sm:mt-0 sm:text-left text-center mt-4">
                    <div className=" font-semibold text-3xl">50+</div>
                    <div>Project Complete</div>
                  </div>
                </div>
                <div className=" sm:flex items-center gap-4 block">
                  <div className="w-full sm:w-auto flex justify-center sm:block">
                    <div className=" text-white bg-my-purple w-24 h-24 flex items-center justify-center rounded-lg">
                      <RiGroupLine size={32} />
                    </div>
                  </div>
                  <div className=" flex flex-col sm:mt-0 sm:text-left text-center mt-4">
                    <div className=" font-semibold text-3xl">40+</div>
                    <div>Team Members</div>
                  </div>
                </div>
                <div className=" sm:flex items-center gap-4 block">
                  <div className="w-full sm:w-auto flex justify-center sm:block">
                    <div className=" text-white bg-my-purple w-24 h-24 flex items-center justify-center rounded-lg">
                      <FaRegLaugh size={32} />
                    </div>
                  </div>
                  <div className=" flex flex-col sm:mt-0 sm:text-left text-center mt-4">
                    <div className=" font-semibold text-3xl">50+</div>
                    <div>Satisfied Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />

      {/* <ProductShowcase /> */}

      <section id="testimonials" className="w-full relative">
        <img
          src="/assets/images/bg3.svg"
          alt="bg3"
          className=" absolute h-full w-full inset-0"
        />
        <div className="my-container py-12 md:py-16 lg:py-24">
          <div className="flex flex-col w-full">
            {/* Left Column */}
            <div className="flex flex-col gap-y-8 w-full">
              <div className="uppercase text-xl font-semibold tracking-wide text-my-purple">
                Testimonials
                <div className="embla__slide h-full mt-3">
                  <div className="min-h-20 h-full ">
                    <div className="text-white text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px]">
                      <span className="text-purple-300 mr-3 ">
                        Client Experiences{" "}
                      </span>
                      <br /> with Fuchsius
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full mt-8">
              <ReviewCarousel slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-12 md:py-16 lg:py-24">
        <div className="my-container">
          <div className="flex flex-col w-full">
            {/* Title */}
            <div className="flex flex-col gap-y-8 w-full text-center">
              <div className="uppercase text-xl font-semibold tracking-wide text-my-purple">
                our team
              </div>
              <div>
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay">
                  Our Special
                </span>
                <span className="text-purple-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-3 font-normal font-redHatDisplay">
                  Team.
                </span>
              </div>
            </div>

            {/* Swiper Slider */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              speed={1000}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2 }, // 2 slides on tablets
                1024: { slidesPerView: 4 }, // 4 slides on large screens
              }}
              className="w-full mt-8"
            >
              {OUR_TEAM.map((member, index) => (
                <SwiperSlide key={index} className="flex justify-center w-full">
                  <div className="flex justify-center">
                    <div className="flex flex-col gap-4  w-full max-w-md ">
                      <div className="border border-my-purple w-full  overflow-hidden rounded-lg aspect-square">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                        />
                      </div>
                      <div className="w-full text-center">
                        <div className="text-xl md:text-2xl lg:text-3xl font-redHatDisplay leading-10">
                          {member.name}
                        </div>
                        <div className="text-my-lightpurple md:text-lg lg:text-xl font-redHatDisplay">
                          {member.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="w-full bg-bg2 py-10">
        <div className="my-container w-full">
          <div className="bg-gradient-to-b from-my-purple2 via-my-lightpurple to-my-purple px-[1px] rounded-lg w-full">
            <div className="w-full h-full px-8 py-1 bg-bg2 rounded-lg">
              {/* Swiper Logo Slider */}
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView="auto"
                loop={true} // 🔄 Infinite Rotation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1000} // Smooth sliding
                className="w-full"
                breakpoints={{
                  768: { slidesPerView: 2 }, // 2 slides on tablets
                  1024: { slidesPerView: 4 }, // 4 slides on large screens
                }}
              >
                {LOGOS.map((logo, index) => (
                  <SwiperSlide key={index} className="flex h-10 justify-center">
                    <a href="#" className="flex justify-center">
                      <img
                        src={logo}
                        alt={`Logo ${index}`}
                        className="h-12 md:h-14 lg:h-16 w-auto"
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
