import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToSection component listens for hash changes and scrolls to the corresponding section
const ScrollToSection: React.FC = () => {
  const { hash } = useLocation(); // Get the current URL hash

  useEffect(() => {
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]); // Runs when the hash changes

  return null;
};

export default ScrollToSection;
