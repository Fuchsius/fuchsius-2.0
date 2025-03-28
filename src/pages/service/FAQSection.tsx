import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Define the structure for a single FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

// FAQ Component
const FAQSection: React.FC = () => {
  // FAQ data - can be easily expanded or fetched from an external source
  const faqData: FAQItem[] = [
    {
      question: "What services does Fuchsius Pvt Ltd. offer?",
      answer:
        "We offer a range of IT and digital solutions, including Web Development, Mobile App Development, UI/UX Design, SEO, Digital Marketing, and IT Support to help businesses grow and succeed in the digital space.",
    },
    {
      question: "Where is Fuchsius Pvt Ltd. located?",
      answer:
        "Fuchsius Pvt Ltd. operates remotely, allowing us to serve clients worldwide with flexible and efficient digital solutions.",
    },
    {
      question: "How can I get a quote for my project?",
      answer:
        "You can contact us through our website, email, or phone with details about your project. Our team will assess your requirements and provide a customized quote based on your needs.",
    },
    {
      question: "Do you offer custom web and mobile app development?",
      answer:
        "Yes! We specialize in creating custom web and mobile applications tailored to your business goals, ensuring functionality, performance, and scalability.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with businesses across various industries, including e-commerce, healthcare, finance, education, startups, and enterprise-level companies.",
    },
    {
      question: "Do you provide IT support for businesses?",
      answer:
        "Yes! We offer 24/7 IT support, network security, cloud solutions, and troubleshooting to ensure your business runs smoothly without technical disruptions.",
    },
    {
      question: "How can I contact Fuchsius Pvt Ltd.?",
      answer:
        "You can reach us via our website, email, or phone for inquiries, project discussions, or support. Our team is always ready to assist you.",
    },
  ];

  return (
    <div className=" w-full flex items-center justify-center py-24">
      <div className="w-full my-container">
        <div className="self-stretch text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px] mb-12">
          Questions About
          <span className="text-purple-300 ml-3">Service.</span>
        </div>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FAQAccordion key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Individual FAQ Accordion Component
const FAQAccordion: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-my-purple/5 rounded-2xl border border-my-purple overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full 
          flex 
          justify-between 
          items-center 
          p-6 
          text-left 
          focus:outline-none 
          transition-colors 
          duration-300
            hover:text-my-lightpurple2
        "
      >
        <span
          className={` ${
            isOpen && "text-my-purple2"
          } text-base md:text-lg font-semibold`}
        >
          {question}
        </span>
        <ChevronDown
          className={`
            transition-transform 
            duration-300 
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      <div
        className={`
          grid 
          transition-all 
          duration-300 
          ease-in-out
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div
          className={`
          overflow-hidden 
          transition-all 
          duration-300 
          ease-in-out
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
        >
          <div className="p-6 pt-0 text-gray-300 text-sm md:text-base">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
