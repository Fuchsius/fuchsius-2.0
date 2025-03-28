import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",  // Enable smooth scrolling
    });
  }, [location]);  // Trigger on route change

  return null;
};

export default ScrollToTop;
