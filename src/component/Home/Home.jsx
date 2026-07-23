import { useState, useEffect } from "react";
import Profile_img from "../../assets/Saddam_Profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaFilePdf } from "react-icons/fa";
import DeveloperStatus from "../DeveloperStatus";
import TerminalTyping from "../TerminalTyping";
import WebViewModal from "../WebViewModal";

const devQuotes = [
  "// TODO: Add more coffee",
  "console.log('Hello, World!');",
  "git commit -m 'Initial commit'",
  "npm run build && npm run ship",
  "if (coffee.level === 0) refill();",
];

function Home() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [profileHovered, setProfileHovered] = useState(false);
  const [webviewOpen, setWebviewOpen] = useState(false);
  const [webviewUrl, setWebviewUrl] = useState("");

  const openWebview = (url) => {
    setWebviewUrl(url);
    setWebviewOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % devQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const resumeViewUrl =
    "https://drive.google.com/file/d/1b1sib_83OgtDtVry9thnMrjrRDmpzkMb/preview";
  const resumeDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1b1sib_83OgtDtVry9thnMrjrRDmpzkMb";

  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 px-6 md:px-12 lg:px-24 min-h-screen text-white transition-colors duration-500 relative pt-28 md:pt-0"
    >
      {/* Floating decorative code elements */}
      <div className="absolute top-20 left-10 text-cyan-500/10 font-mono text-6xl font-bold select-none pointer-events-none">
        {"</>"}
      </div>
      <div className="absolute bottom-40 right-20 text-blue-500/10 font-mono text-4xl font-bold select-none pointer-events-none">
        {"{ }"}
      </div>
      <div className="absolute top-1/3 right-1/4 text-purple-500/10 font-mono text-5xl font-bold select-none pointer-events-none">
        {"( )"}
      </div>

      {/* ===== Left Section (Text) ===== */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8 max-w-xl w-full"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/30"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-cyan-300">
            Open to Senior Software Engineering Roles
          </span>
        </motion.div>

        {/* Main Title with Code Aesthetic */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-500 font-mono text-sm">
            <span className="text-cyan-400">&lt;</span>
            <span>h1</span>
            <span className="text-cyan-400">&gt;</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Saddam Ansari
          </h1>
          <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold mt-1">
            <span className="text-gray-400">—</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 font-mono text-sm">
            <span className="text-cyan-400">&lt;/</span>
            <span>h1</span>
            <span className="text-cyan-400">&gt;</span>
          </div>
        </div>

        {/* Developer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-lg px-4 py-2 font-mono text-sm"
        >
          <span className="text-gray-500">{"// "}</span>
          <span className="text-cyan-300">{devQuotes[currentQuote]}</span>
        </motion.div>

        {/* Description */}
        <p className="text-md sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Senior Software Engineer with 3+ years of experience architecting
          scalable microservices, REST APIs, and enterprise-grade systems. I
          transform complex requirements into{" "}
          <span className="text-cyan-400 font-mono">production-ready</span>{" "}
          solutions using Node.js, NestJS, React.js, PostgreSQL, and AWS.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4">
          <AnchorLink
            offset={50}
            href="#Contact"
            className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-2xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-cyan-200">&gt;_</span>
              Connect With Me
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </AnchorLink>

          <motion.button
            onClick={() => setShowConfirm(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            className="relative flex items-center gap-2 px-6 py-3 rounded-2xl border border-cyan-500/50 text-cyan-300 font-bold shadow-xl bg-cyan-500/5 backdrop-blur-sm hover:bg-cyan-500/10 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </motion.button>
        </div>

        {/* Developer Status Terminal */}
        <DeveloperStatus />

        {/* Terminal Typing Animation */}
        <TerminalTyping />

        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          <motion.a
            href="https://www.linkedin.com/in/saddu-malik/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="relative group p-3 bg-white/5 rounded-full hover:bg-cyan-500/30 transition-all border border-gray-700 hover:border-cyan-500/50"
          >
            <FaLinkedin className="text-xl" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              LinkedIn
            </span>
          </motion.a>
          <motion.button
            onClick={() => setShowConfirm(true)}
            whileHover={{ scale: 1.1, y: -2 }}
            className="relative group p-3 bg-white/5 rounded-full hover:bg-cyan-500/30 transition-all border border-gray-700 hover:border-cyan-500/50 cursor-pointer"
          >
            <FaFilePdf className="text-xl" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Resume
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* ===== Right Section (Image) ===== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-shrink-0 relative"
      >
        {/* Glowing ring effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-500 to-sky-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <motion.div
          onMouseEnter={() => setProfileHovered(true)}
          onMouseLeave={() => setProfileHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            setProfileHovered((prev) => !prev);
          }}
          animate={{
            y: profileHovered ? 0 : [0, -8, 0],
            scale: profileHovered ? 1.5 : 1,
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.4, ease: "easeOut" },
          }}
          className={`relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square overflow-hidden shadow-2xl border-4 backdrop-blur-sm transition-all duration-300 ${
            profileHovered
              ? "rounded-2xl z-30 border-cyan-400 shadow-cyan-500/40"
              : "rounded-full z-10 border-white/10"
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))",
          }}
        >
          <img
            src={Profile_img}
            alt="Profile"
            className="object-cover h-full w-full"
          />
          {!profileHovered && (
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none"></div>
          )}
        </motion.div>

        {/* Floating code badges */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-2 -right-2 bg-gray-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-1.5 font-mono text-xs text-cyan-300 shadow-lg"
        >
          {"<Dev/>"}
        </motion.div>
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -bottom-2 -left-2 bg-gray-800/90 backdrop-blur-sm border border-purple-500/30 rounded-lg px-3 py-1.5 font-mono text-xs text-purple-300 shadow-lg"
        >
          {"{ }"}
        </motion.div>
      </motion.div>

      {/* Profile Image Backdrop Overlay (for mobile tap-dismiss) */}
      <AnimatePresence>
        {profileHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 bg-black/30 backdrop-blur-sm"
            onClick={() => setProfileHovered(false)}
          />
        )}
      </AnimatePresence>

      {/* Resume Confirm Modal */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={() => setShowConfirm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl shadow-cyan-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-xl">📄</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Resume
                </h3>
              </div>
              <p className="text-gray-300 mb-6 font-mono text-sm">
                <span className="text-cyan-400">$</span> View or download my resume
                <br />
                <span className="text-green-400">✓</span> Ready
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setShowConfirm(false);
                    openWebview(resumeViewUrl);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:from-cyan-500 hover:to-blue-500 transition shadow-lg flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View Resume
                </button>
                <a
                  href={resumeDownloadUrl}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center font-medium hover:from-emerald-500 hover:to-teal-500 transition shadow-lg flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download
                </a>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-700 transition font-medium"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WebViewModal
        url={webviewUrl}
        isOpen={webviewOpen}
        onClose={() => setWebviewOpen(false)}
      />
    </div>
  );
}

export default Home;
