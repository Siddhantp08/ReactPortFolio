import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Social media and contact links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/siddhant-patnaik-93500b248/",
    github: "https://github.com/Siddhantp08",
    email: "mailto:siddhantpatnaik08@gmail.com",
    instagram: "https://instagram.com/siddhant_patnaik08"
  };

  const navLinks = [
    { href: "", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="relative mb-20">
      {/* Main Navbar */}
      <div className="flex items-center justify-between py-6">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <DiCssdeck size="2.5rem" />
          <span className="m-0.5 flex items-center text-2xl">Portfolio</span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex m-8 items-center justify-center gap-8 text-xl">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="hover:text-blue-500 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Social Links */}
        <div className="hidden lg:flex m-8 items-center justify-center gap-4 text-2xl">
          <a 
            href={"https://www.linkedin.com/in/siddhant-patnaik-93500b248/"}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-blue-500"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a 
            href={"https://github.com/Siddhantp08"}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-gray-600"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a 
            href={"siddhantpatnaik08@gmail.com"}
            className="transition-colors duration-300 hover:text-red-500"
            aria-label="Send Email"
          >
            <FaEnvelope />
          </a>
          <a 
            href={"https://instagram.com/siddhant_patnaik08"}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-pink-500"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute w-full bg-white dark:bg-gray-900 shadow-lg rounded-b-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } lg:hidden`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {/* Mobile Navigation Links */}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg py-2 hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          {/* Mobile Social Links */}
          <div className="flex justify-center gap-6 pt-4 border-t text-2xl">
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-blue-500"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-gray-600"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href={socialLinks.email}
              className="transition-colors duration-300 hover:text-red-500"
              aria-label="Send Email"
            >
              <FaEnvelope />
            </a>
            <a 
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-pink-500"
              aria-label="Instagram Profile"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;