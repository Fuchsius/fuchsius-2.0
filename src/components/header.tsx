import { useState, useEffect } from "react";
import { Link } from "react-router";

export const NAV_ITEMS = [
  { name: "Home", url: "../" },
  { name: "About Us", url: "/#about" },
  { name: "Contact Us", url: "/#contact" },
  { name: "Services", url: "/#services" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-10 sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? "bg-[#0c0618]/80 backdrop-blur-sm" : ""
      }`}
    >
      <div className="my-container mx-auto px-4 flex items-center justify-between">
        {/* Logo placeholder - you can add your logo here */}
        <div className="flex-shrink-0">
          <Link to="../" className="text-xl font-bold">
            <img src="/logo2.svg" alt="" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-2.5">
      {NAV_ITEMS.map((item, index) => (
        <Link
          to={item.url}
          key={index}
          className="rounded-full py-2.5 px-5 border-my-purple border hover:bg-my-purple transition-all duration-300 text-nowrap"
        >
          {item.name}
        </Link>
      ))}
    </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 focus:outline-none cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Contact button - only visible on desktop */}
        {/* <button className="hidden lg:block rounded-full py-2.5 px-5 border-my-purple border bg-my-purple hover:bg-transparent transition-all duration-300 cursor-pointer text-nowrap">
          Contact Us
        </button> */}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0c0618] py-4">
          <nav className="flex flex-col items-center gap-2">
            {NAV_ITEMS.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                className="w-4/5 text-center rounded-full py-2.5 px-5 border-my-purple border hover:bg-my-purple transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* <button className="w-4/5 text-center rounded-full py-2.5 px-5 border-my-purple border bg-my-purple hover:bg-transparent transition-all duration-300 cursor-pointer mt-2">
              Contact Us
            </button> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
