const AboutSection = () => {
  return (
    <section id="about" className="w-full py-12 md:py-16 lg:py-24">
      <div className="my-container w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-x-24 gap-y-8">
          {/* Image and overlay section */}
          <div className="w-full max-w-xl mx-auto relative aspect-square">
            <div className="w-full flex justify-center sm:block">
              <img
                className="w-[80%] aspect-square object-cover rounded-xl"
                src="/assets/team/group.jpg"
                alt="About Us"
              />
            </div>
            <div className="w-full p-12 absolute max-w-md bottom-0 right-0 bg-slate-900/80 backdrop-blur-md rounded-[20px]">
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
          <div className="w-full flex flex-col justify-start items-start gap-3 md:gap-5 mt-8 lg:mt-0">
            <div className="self-stretch text-violet-600 text-lg md:text-xl font-semibold font-['Poppins'] uppercase tracking-widest">
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
