import { useRef, useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import "./Navbar.css";

const navItems = [
  { id: "Home", label: "Home", href: "#Home" },
  { id: "About", label: "About", href: "#About" },
  { id: "Skills", label: "Skills", href: "#Skills" },
  { id: "Experiences", label: "Experience", href: "#Experiences" },
  { id: "Projects", label: "Projects", href: "#Projects" },
  { id: "Contact", label: "Contact", href: "#Contact" },
];

function Navbar() {
  const menuRef = useRef(null);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      <nav className="navbar fixed left-0 right-0 flex items-center justify-between max-w-full md:max-w-5xl mx-auto py-3 px-4 md:px-6 rounded-2xl mt-2 bg-gray-900/80 backdrop-blur-xl border border-cyan-500/20 shadow-lg z-50">
        <div className="flex items-center">
          <a
            href="#Home"
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Saddam Ansari
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center list-none gap-1 font-semibold">
          {navItems.map((item) => (
            <li key={item.id}>
              <AnchorLink
                className={`anchor-link relative px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
                href={item.href}
                offset={50}
                onClick={closeMenu}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0"
                  }`}
                />
              </AnchorLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden nav-mob-open cursor-pointer hover:scale-110 transition-transform invert p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <img src={menu_close} alt="Close menu" className="w-6 h-6" />
          ) : (
            <img src={menu_open} alt="Open menu" className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`nav-menu md:hidden fixed top-0 right-0 h-full w-72 bg-gray-900/95 backdrop-blur-xl z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full justify-between items-center p-6 border-b border-gray-700/50">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Saddam Ansari
          </span>
          <button
            onClick={closeMenu}
            className="p-2 hover:scale-110 transition-transform invert"
            aria-label="Close menu"
          >
            <img src={menu_close} alt="Close" className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-2 p-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <AnchorLink
                className={`anchor-link block px-4 py-3 rounded-lg transition-all duration-300 text-lg font-medium ${
                  activeSection === item.id
                    ? "text-cyan-400 bg-cyan-500/10"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
                }`}
                href={item.href}
                offset={50}
                onClick={handleLinkClick}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-r-full" />
                )}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
