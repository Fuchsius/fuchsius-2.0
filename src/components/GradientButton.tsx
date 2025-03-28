import React, { ReactNode } from "react";

// Define TypeScript types for the component props
type GradientType = "purple" | "blue" | "teal" | "pink" | "green";
type ButtonSize = "sm" | "md" | "lg";
type IconPosition = "left" | "right";

interface GradientButtonProps {
  text?: string;
  size?: ButtonSize;
  gradientType?: GradientType;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text = "Discover More",
  size = "md",
  gradientType = "purple",
  onClick,
  className = "",
  // fullWidth = false,
  disabled = false,
  icon = null,
  iconPosition = "right",
}) => {
  // Size variants
  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm rounded-[16px]",
    md: "px-5 py-3 md:py-4 text-base md:text-lg rounded-[20px]",
    lg: "px-6 py-4 md:py-5 text-lg md:text-xl rounded-[24px]",
  };

  // Gradient variants
  const gradientVariants: Record<
    GradientType,
    {
      container: string;
      button: string;
      shadow: string;
    }
  > = {
    purple: {
      container: "bg-linear-to-b from-my-purple2 to-my-lightpurple2",
      button:
        "bg-[radial-gradient(ellipse_97.54%_50.91%_at_50.00%_2.46%,_#A052FF_0%,_#7300FF_100%)]",
      shadow: "shadow-my-purple/50",
    },
    blue: {
      container: "bg-linear-to-b from-blue-400 to-blue-600",
      button:
        "bg-[radial-gradient(ellipse_97.54%_50.91%_at_50.00%_2.46%,_#52A2FF_0%,_#0047FF_100%)]",
      shadow: "shadow-blue-500/50",
    },
    teal: {
      container: "bg-linear-to-b from-teal-400 to-teal-600",
      button:
        "bg-[radial-gradient(ellipse_97.54%_50.91%_at_50.00%_2.46%,_#52FFE0_0%,_#00C3FF_100%)]",
      shadow: "shadow-teal-500/50",
    },
    pink: {
      container: "bg-linear-to-b from-pink-400 to-pink-600",
      button:
        "bg-[radial-gradient(ellipse_97.54%_50.91%_at_50.00%_2.46%,_#FF52A8_0%,_#FF0073_100%)]",
      shadow: "shadow-pink-500/50",
    },
    green: {
      container: "bg-linear-to-b from-green-400 to-green-600",
      button:
        "bg-[radial-gradient(ellipse_97.54%_50.91%_at_50.00%_2.46%,_#52FF7A_0%,_#00B347_100%)]",
      shadow: "shadow-green-500/50",
    },
  };

  const selectedGradient = gradientVariants[gradientType];
  const selectedSize = sizeClasses[size];

  //   const widthClass = fullWidth ? "" : "";
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer hover:-translate-y-1";

  return (
    <button
      className={`p-[2px] rounded-[20px] shadow-2xl ${selectedGradient.container} ${selectedGradient.shadow} ${className}`}
      disabled={disabled}
      type="button"
    >
      <div
        className={`${selectedSize} font-semibold ${selectedGradient.button} ${disabledClasses} transition-all flex items-center justify-center`}
        onClick={disabled ? undefined : onClick}
      >
        {iconPosition === "left" && icon && (
          <span className="mr-2">{icon}</span>
        )}

        {text}

        {iconPosition === "right" && icon && (
          <span className="ml-2">{icon}</span>
        )}
      </div>
    </button>
  );
};

export default GradientButton;
