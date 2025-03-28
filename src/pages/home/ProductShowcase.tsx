import React from "react";

interface ProductCardData {
  title: string;
  description: string;
  ctaText: string;
  bgColor: string;
  textColor?: string;
  accentColor?: string;
}

const ProductShowcase: React.FC = () => {
  const products: ProductCardData[] = [
    {
      title: "Built, invest, adjust, enjoy.",
      description: "Automate workflows for efficiency.",
      ctaText: "EfficlAI",
      bgColor: "bg-gradient-to-br from-[#1E2029] to-[#4A4E69]",
      textColor: "text-white",
      accentColor: "bg-[#6366F1]",
    },
    {
      title: "Human Connections Drive Success",
      description: "Effortlessly optimize workflows with AI.",
      ctaText: "OptiFlow",
      bgColor: "bg-gradient-to-br from-[#4338CA] to-[#5B21B6]",
      textColor: "text-white",
      accentColor: "bg-yellow-500",
    },
    {
      title: "Hire top finance tech experts now",
      description: "Automate workflows for efficiency.",
      ctaText: "EfficlAI",
      bgColor: "bg-gradient-to-br from-[#1E2029] to-[#4A4E69]",
      textColor: "text-white",
      accentColor: "bg-[#6366F1]",
    },
  ];

  return (
    <div className=" w-full">
      <div className=" my-container py-24">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className=" flex flex-col gap-4 w-full">
            <div className="uppercase text-xl font-semibold tracking-wide text-my-purple">
              our team
            </div>
            <div className="self-stretch text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px]">
              <span className="text-purple-300 mr-3">Maximize</span>
              ROI with <br /> Efficiency-Driven AI.
            </div>
          </div>
          <div className=" mt-4 md:mt-0 max-w-sm w-full ms-auto">
            <p className="text-lg md:text-xl font-semibold">Work Smarter.</p>
            <p className="text-md md:text-lg mt-4 font-light">
              Our AI solutions boost ROI by enhancing efficiency and cutting
              costs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<ProductCardData> = ({
  title,
  description,
  ctaText,
  bgColor,
  textColor = "text-white",
  accentColor = "bg-[#6366F1]",
}) => {
  return (
    <div
      className={`
        ${bgColor} 
        ${textColor}
        rounded-2xl 
        p-6 
        space-y-6 
        shadow-2xl 
        border 
        border-white/10
        transition-transform 
        hover:scale-[1.02]
      `}
    >
      <div className="flex justify-between items-start">
        <div
          className={`${accentColor} px-3 py-1 rounded-full text-xs font-medium`}
        >
          {ctaText}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>

      <div className="bg-white/10 rounded-xl aspect-video overflow-hidden">
        <div className="w-full h-full bg-gray-800 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductShowcase;
