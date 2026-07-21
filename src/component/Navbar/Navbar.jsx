import { useRef, useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Terminal, GitBranch, Circle, Command } from "lucide-react";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import "./Navbar.css";

const navItems = [
  { id: "Home", label: "Home", href: "#Home", key: "H" },
  { id: "About", label: "About", href: "#About", key: "A" },
  { id: "Skills", label: "Skills", href: "#Skills", key: "S" },
  { id: "Experiences", label: "Exp", href: "#Experiences", key: "E" },
  { id: "Projects", label: "Projects", href: "#Projects", key: "P" },
  { id: "Contact", label: "Contact", href: "#Contact", key: "C" },
];

function Navbar() {
  const menuRef = useRef(null);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleLinkClick = () => closeMenu();

  return (
    <>
      {/* ── Top Status Bar (IDE / Terminal Chrome) ── */}
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-4 md:px-8 py-1 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800/50 text-[10px] md:text-xs font-mono text-gray-500 select-none">
        <div className="flex items-center gap-3 md:gap-5">
          <div className="flex items-center gap-1.5">
            <Circle className="w-1.5 h-1.5 md:w-2 md:h-2 fill-green-400 text-green-400 animate-pulse" />
            <span className="text-green-400/80">build: passing</span>
          </div>
          <span className="text-gray-700 select-none">|</span>
          <div className="flex items-center gap-1.5">
            <GitBranch className="w-3 h-3" />
            <span>main</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <Command className="w-3 h-3" />
          <span className="hidden sm:inline">Ctrl+K</span>
          <span className="text-gray-700 hidden sm:inline">command palette</span>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav className="navbar fixed left-0 right-0 flex items-center justify-between max-w-full md:max-w-5xl mx-auto py-2.5 px-4 md:px-6 rounded-b-2xl mt-7 bg-gray-900/85 backdrop-blur-xl border border-cyan-500/20 border-t-0 shadow-lg shadow-cyan-500/5 z-40">
        {/* Logo — terminal prompt style */}
        <div className="flex items-center gap-2 shrink-0">
          <Terminal className="w-5 h-5 text-cyan-400 hidden sm:block" />
          <a
            href="#Home"
            className="group flex items-center text-sm md:text-base font-mono font-bold no-underline"
          >
            <span className="text-gray-500">&gt;</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-1">
              saddam.ansari
            </span>
            <span className="inline-block w-2 h-4 md:h-[18px] bg-cyan-400 ml-0.5 cursor-blink" />
          </a>
        </div>

        {/* Desktop Navigation — JSX tag style */}
        <ul className="hidden md:flex items-center list-none gap-0.5 font-mono text-sm">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <AnchorLink
                className={`anchor-link relative flex items-center px-3 py-1.5 rounded-md transition-all duration-200 group ${
                  activeSection === item.id
                    ? "text-cyan-300 bg-cyan-500/10 shadow-[inset_0_0_8px_rgba(6,182,212,0.08)]"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                }`}
                href={item.href}
                offset={50}
                onClick={closeMenu}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span
                  className={`text-xs transition-colors duration-200 ${
                    activeSection === item.id ? "text-cyan-500" : "text-gray-600 group-hover:text-gray-400"
                  }`}
                >
                  &lt;
                </span>
                <span className="mx-0.5">{item.label}</span>
                <span
                  className={`text-xs transition-colors duration-200 ${
                    activeSection === item.id ? "text-cyan-500" : "text-gray-600 group-hover:text-gray-400"
                  }`}
                >
                  /&gt;
                </span>

                {hoveredItem === item.id && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-600 font-mono whitespace-nowrap bg-gray-950 px-1.5 py-0.5 rounded border border-gray-800 pointer-events-none">
                    Alt+{item.key}
                  </span>
                )}
              </AnchorLink>

              {activeSection === item.id && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-gray-600">
            <span className="text-gray-700">//</span>
            <span>available for hire</span>
            <Circle className="w-1.5 h-1.5 fill-green-400 text-green-400 animate-pulse" />
          </div>

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
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* ── Mobile Menu (Terminal Themed) ── */}
      <div
        ref={menuRef}
        className={`nav-menu md:hidden fixed top-0 right-0 h-full w-80 bg-gray-950/98 backdrop-blur-xl z-50 transition-transform duration-300 ease-in-out border-l border-cyan-500/20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header — terminal title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/50 bg-gray-900/50">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs text-gray-500">menu.exe</span>
            <span className="flex gap-1 ml-2">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <span className="w-2 h-2 rounded-full bg-green-500/60" />
            </span>
          </div>
          <button
            onClick={closeMenu}
            className="p-1 hover:bg-gray-800 rounded transition-colors group"
            aria-label="Close menu"
          >
            <img
              src={menu_close}
              alt="Close"
              className="w-5 h-5 invert opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </button>
        </div>

        {/* Status info block */}
        <div className="px-4 py-3 border-b border-gray-800/30 space-y-1.5 font-mono text-xs">
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-green-400">&gt;</span>
            <span className="text-gray-400">saddam.ansari</span>
            <span className="inline-block w-1.5 h-3.5 bg-cyan-400 cursor-blink" />
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <GitBranch className="w-3 h-3" />
            <span>branch: main</span>
          </div>
          <div className="flex items-center gap-2">
            <Circle className="w-1.5 h-1.5 fill-green-400 text-green-400 animate-pulse" />
            <span className="text-green-400/70">build: passing</span>
          </div>
        </div>

        {/* Navigation links — with line numbers */}
        <ul className="flex flex-col gap-0.5 p-3 font-mono">
          {navItems.map((item, index) => (
            <li key={item.id}>
              <AnchorLink
                className={`anchor-link flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-base ${
                  activeSection === item.id
                    ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 shadow-[inset_0_0_8px_rgba(6,182,212,0.08)]"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/40 border border-transparent"
                }`}
                href={item.href}
                offset={50}
                onClick={handleLinkClick}
              >
                <span className="text-gray-700 text-xs w-5 text-right font-mono shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-xs transition-colors shrink-0 ${
                    activeSection === item.id ? "text-cyan-500" : "text-gray-600"
                  }`}
                >
                  &lt;
                </span>
                <span className="font-medium">{item.label}</span>
                <span
                  className={`text-xs transition-colors ${
                    activeSection === item.id ? "text-cyan-500" : "text-gray-600"
                  }`}
                >
                  /&gt;
                </span>
                {activeSection === item.id && (
                  <span className="ml-auto text-[10px] text-cyan-500 animate-pulse">
                    &#x25CF;
                  </span>
                )}
              </AnchorLink>
            </li>
          ))}
          <li className="mt-4 pt-4 border-t border-gray-800/30">
            <div className="px-4 py-2 text-xs font-mono text-gray-600 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">//</span>
                <span>available for hire</span>
                <Circle className="w-1.5 h-1.5 fill-green-400 text-green-400" />
              </div>
              <div className="flex items-center gap-2">
                <Command className="w-3 h-3" />
                <span>Ctrl+K command palette</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
