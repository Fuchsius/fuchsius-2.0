import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";
import { NAV_ITEMS } from "./header";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white pb-6 pt-24">
      <div className="my-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-10">
            <div>
              <h3 className="font-semibold mb-6 tracking-wide">QUICK LINKS</h3>
              <div className="flex flex-wrap gap-3">
                {NAV_ITEMS.map((link) => (
                  <Link
                    key={link.url}
                    to={link.url}
                    className="px-5 py-2 rounded-full border border-my-purple text-sm hover:bg-my-purple
                    transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-my-purple/20"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold">
                <img src="/logo2.svg" alt="" />
              </Link>
            </div>

            <div>
              {/* <h3 className="text-lg font-bold mb-6 tracking-wide">QUICK LINKS</h3> */}
              <div className="flex gap-3">
                {[
                  { icon: <FaFacebookF size={16} />, href: "https://www.facebook.com/fuchsius" },
                  { icon: <FaLinkedinIn size={16} />, href: "https://www.linkedin.com/company/fuchsius/" },
                  { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/fuchsius_official/" },
                  { icon: <FaGlobe size={16} />, href: "https://www.fuchsius.com/" },
                  { icon: <FaTwitter size={16} />, href: "https://www.x.com/fuchsius" },
                ].map((social, index) => (
                  <a target="_blank"
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-fuchsia-600 
                    hover:bg-fuchsia-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 
                    hover:shadow-lg hover:shadow-fuchsia-500/30"
                    aria-label={`Social media link ${index + 1}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-10 lg:ml-auto lg:text-right">
            <div>
              <h3 className="text-lg font-bold mb-6 tracking-wide">
                Contact Us
              </h3>
              <a
                href="tel:+19998887766"
                className="block mb-3 text-lg hover:text-my-purple transition-colors"
              >
                +94 77 782 5062
              </a>
              <a
                href="mailto:hello@niskalastd.com"
                className="block mb-3 hover:text-my-purple transition-colors"
              >
                supprt@fuchsius.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 tracking-wide">Location</h3>
              <address className="not-italic">
                <p className="mb-2 text-gray-300">Sir Baron Jayathilake Mawatha,</p>
                <p className="text-gray-300">Colombo 00100</p>
              </address>
            </div>
          </div>
        </div>

        {/* Copyright Section - Added for completeness */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Fuchsius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
