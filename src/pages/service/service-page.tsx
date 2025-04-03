import Footer from "@/components/Footer";
import Header from "@/components/header";
import { SERVICES } from "@/data/services.data";
import { useEffect, useRef, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { Link, useNavigate, useParams } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import ContactSection from "@/components/ContactSection";
import ReviewCarousel from "@/components/ReviewsCarousel";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import FAQSection from "./FAQSection";

import { useLocation } from "react-router-dom";

const ServicePage = () => {
  const leftBallRef = useRef(null);
  const centerBallRef = useRef(null);
  const rightBallRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // This effect will run whenever the location changes

  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const OPTIONS: EmblaOptionsType = { loop: true };
  // const SLIDE_COUNT = 3;

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

  let navigate = useNavigate();

  const getData = async () => {
    try {
      setIsLoading(true);
      const service = SERVICES.find(
        (service) => service.slug === params.servicename
      );
      setData(service);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [params]);
  return (
    <>
      <Header />

      {isLoading ? (
        <div className=" my-container py-32">
          <div className=" flex items-center justify-center gap-4">
            <AiOutlineLoading3Quarters className="animate-spin" />
            <div>Loading...</div>
          </div>
        </div>
      ) : (
        <>
          <div className=" w-full overflow-x-auto relative">
            <div className=" w-full">
              <div className="my-container py-32">
                <div className="flex flex-col items-center justify-center relative gap-7">
                  <h1 className=" uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-redHatDisplay font-extrabold text-center bg-gradient-to-r from-my-black via-my-lightpurple to-my-black bg-clip-text text-transparent">
                    {data?.title}
                  </h1>
                  <h6 className=" flex text-2xl lg:text-3xl font-redHatDisplay font-semibold gap-4 leading-10 text-center text-my-lightpurple">
                    <Link to={"/"}>Home</Link>{" "}
                    <IoIosArrowForward className=" my-auto" /> {data?.title}
                  </h6>
                </div>
              </div>
              <div className="absolute w-full h-full top-0 z-0">
                <div className="relative w-full h-full flex justify-center items-center">
                  <div
                    ref={leftBallRef}
                    className="border object-left rotate-[-146.71deg] opacity-90 bg-gradient-to-l from-[#C60786] to-[#8400FF] 
                  blur-[160px] rounded-full w-64 h-64 mix-blend-lighten -translate-x-[75%] "
                  />
                  {/* <div
                  ref={centerBallRef}
                  className="border object-center rotate-[-146.71deg] opacity-90 bg-gradient-to-l from-[#C60786] to-[#8400FF] 
                  blur-[114.55px] rounded-full w-[480px] h-64 mix-blend-lighten "
                  /> */}
                  <div
                    ref={rightBallRef}
                    className="border object-right rotate-[-146.71deg] opacity-90 bg-gradient-to-l from-[#C60786] to-[#8400FF] 
                  blur-[160px] rounded-full w-64 h-64 mix-blend-lighten translate-x-[75%]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" my-container flex flex-col sm:flex-row py-12 gap-5">
            <div className=" flex flex-col w-full gap-12">
              <div className=" flex flex-col gap-5">
                <h1 className="text-my-lightpurple2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px] mb-3">
                  {data?.title}
                </h1>
                {data?.paragraph.map((para: string, index: number) => (
                  <p key={index} className=" max-w-4xl">
                    {para}
                  </p>
                ))}
              </div>

              <div className=" flex flex-col gap-5">
                <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px] mb-3">
                  Benefits With{" "}
                  <span className="text-my-lightpurple">Our Service.</span>
                </h1>
                <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className=" flex items-center gap-4">
                    <div className=" text-white bg-my-purple min-w-24 min-h-24 flex items-center justify-center rounded-lg">
                      <FaRegLightbulb size={32} />
                    </div>
                    <div className=" flex flex-col">
                      <div className=" font-semibold text-2xl">
                        Flexible Solutions
                      </div>
                      <div className="text-sm">
                        Completely grow multimedia based content before global
                        scenarios.
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center gap-4">
                    <div className=" text-white bg-my-purple min-w-24 min-h-24 flex items-center justify-center rounded-lg">
                      <BiSupport size={32} />
                    </div>
                    <div className=" flex flex-col">
                      <div className=" font-semibold text-2xl">
                        Customer Engagement
                      </div>
                      <div className="text-sm">
                        Strengthen our company's engagement with customers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-5">
              {SERVICES.map((service, index) => (
                <div
                  key={index}
                  onClick={() => {
                    navigate(`/services/${service.slug}`);
                  }}
                  className="flex items-center gap-5 justify-between px-6 rounded-lg border border-my-purple hover:shadow-myshadow1 py-5 w-full md:w-80 bg-bg1 transition-all cursor-pointer"
                >
                  <div className="text-lg font-semibold">{service.title}</div>
                  <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                    <FaArrowRight size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactSection />

          <FAQSection />

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
                          <span className="text-purple-300 mr-3 ">Future</span>
                          of <br /> Efficiency is Here
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
        </>
      )}

      <Footer />
    </>
  );
};

export default ServicePage;
