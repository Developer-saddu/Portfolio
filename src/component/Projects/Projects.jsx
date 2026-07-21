import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project_data from "../../assets/project_data";
import WebViewModal from "../WebViewModal";
import {
  FaExternalLinkAlt,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
  FaBug,
  FaRocket,
  FaSpinner,
  FaPause,
  FaPlay,
  FaEye,
  FaGlobe,
} from "react-icons/fa";

const AUTO_SLIDE_INTERVAL = 5000;

const statusConfig = {
  deployed: { icon: <FaRocket className="w-3 h-3" />, color: "text-green-400", bg: "bg-green-500/20", label: "LIVE" },
  wip: { icon: <FaSpinner className="w-3 h-3" />, color: "text-yellow-400", bg: "bg-yellow-500/20", label: "WIP" },
  bugs: { icon: <FaBug className="w-3 h-3" />, color: "text-red-400", bg: "bg-red-500/20", label: "KNOWN BUGS" },
};

const getStatus = () => "deployed";

function ProjectCard({ project, index, onDemoClick }) {
  const [expanded, setExpanded] = useState(false);
  const status = getStatus(index);
  const st = statusConfig[status];

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="h-44 overflow-hidden relative">
        <img
          src={project.p_img}
          alt={project.p_name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-mono ${st.bg} ${st.color} border border-current/20`}>
            {st.icon}
            {st.label}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-3 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-200 group-hover:text-cyan-400 transition-colors line-clamp-2">
          {project.p_name}
        </h3>

        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
          {project.p_desc}
        </p>

        {project.features && (
          <div className="space-y-1.5">
            <p className="text-xs text-cyan-400 font-semibold font-mono">&gt; Highlights:</p>
            <div className="flex flex-wrap gap-1">
              {(expanded ? project.features : project.features.slice(0, 2)).map((f, i) => (
                <span key={i} className="text-xs text-gray-300 bg-gray-700/50 px-2 py-1 rounded font-mono">{f}</span>
              ))}
              {project.features.length > 2 && (
                <button onClick={() => setExpanded(!expanded)} className="text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded border border-cyan-700/50 flex items-center gap-1 cursor-pointer font-mono">
                  {expanded ? <><FaChevronUp /> Less</> : <>+{project.features.length - 2} more</>}
                </button>
              )}
            </div>
          </div>
        )}

        <div className="space-y-1.5">
          <p className="text-xs text-cyan-400 font-semibold font-mono">&gt; Tech Stack:</p>
          <div className="flex flex-wrap gap-1.5">
            {(expanded ? project.tech.split(",") : project.tech.split(",").slice(0, 4)).map((t, i) => (
              <span key={i} className="px-2 py-0.5 text-xs bg-cyan-900/30 text-cyan-300 rounded-full border border-cyan-700/50 font-mono">{t.trim()}</span>
            ))}
            {project.tech.split(",").length > 4 && (
              <button onClick={() => setExpanded(!expanded)} className="px-2 py-0.5 text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-700/50 flex items-center gap-1 cursor-pointer font-mono">
                {expanded ? <><FaChevronUp /></> : <>+{project.tech.split(",").length - 4}</>}
              </button>
            )}
          </div>
        </div>

        <div className="pt-2 mt-auto">
          {project.p_href && project.p_href !== "#" && (
            <button
              onClick={() => onDemoClick(project.p_href)}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-medium rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaExternalLinkAlt />
              Demo
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);

  const [demoChoiceUrl, setDemoChoiceUrl] = useState(null);
  const [webviewOpen, setWebviewOpen] = useState(false);
  const [webviewUrl, setWebviewUrl] = useState("");

  const totalProjects = project_data.length;

  const getVisibleProjects = useCallback((idx) => {
    const first = ((idx % totalProjects) + totalProjects) % totalProjects;
    const second = ((first + 1) % totalProjects);
    return [project_data[first], project_data[second]];
  }, []);

  const goTo = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(((index % totalProjects) + totalProjects) % totalProjects);
  }, [currentIndex, totalProjects]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  }, [totalProjects]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  }, [totalProjects]);

  useEffect(() => {
    if (isPaused || demoChoiceUrl) { clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(next, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, next, demoChoiceUrl]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (demoChoiceUrl) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next, demoChoiceUrl]);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (demoChoiceUrl) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  const handleDemoClick = (url) => {
    setDemoChoiceUrl(url);
  };

  const handleViewHere = () => {
    setWebviewUrl(demoChoiceUrl);
    setWebviewOpen(true);
    setDemoChoiceUrl(null);
  };

  const handleNewTab = () => {
    window.open(demoChoiceUrl, "_blank", "noopener,noreferrer");
    setDemoChoiceUrl(null);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="py-12 px-6" id="Projects">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-cyan-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          &lt;Projects /&gt;
        </motion.h2>
        <p className="text-gray-400 font-mono text-sm">
          {"// Swipe or use arrows — 2 per slide"}
        </p>
      </div>

      <div
        className="max-w-5xl mx-auto relative"
        onMouseEnter={() => !demoChoiceUrl && setIsPaused(true)}
        onMouseLeave={() => !demoChoiceUrl && setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800 rounded-full overflow-hidden z-10">
          <motion.div
            key={isPaused || demoChoiceUrl ? "paused" : currentIndex}
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: isPaused || demoChoiceUrl ? "0%" : "100%" }}
            transition={{ duration: isPaused || demoChoiceUrl ? 0 : AUTO_SLIDE_INTERVAL / 1000, ease: "linear" }}
          />
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-cyan-400 hover:bg-gray-700 hover:border-cyan-500/50 transition-all shadow-lg hidden md:block"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-cyan-400 hover:bg-gray-700 hover:border-cyan-500/50 transition-all shadow-lg hidden md:block"
        >
          <FaChevronRight className="text-xl" />
        </button>

        <div className="overflow-hidden rounded-2xl px-1">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {getVisibleProjects(currentIndex).map((project, i) => (
                <ProjectCard
                  key={`${currentIndex}-${project.p_no}`}
                  project={project}
                  index={(currentIndex + i) % totalProjects}
                  onDemoClick={handleDemoClick}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="flex items-center gap-2">
            {project_data.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-7 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30"
                    : "w-3 h-3 bg-gray-600 hover:bg-cyan-400/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            title={isPaused ? "Resume" : "Pause"}
          >
            {isPaused ? <FaPlay className="text-xs" /> : <FaPause className="text-xs" />}
          </button>
        </div>
        <p className="text-center text-xs text-gray-500 font-mono mt-2">
          {currentIndex + 1} / {totalProjects} — ← → keys or swipe
        </p>
      </div>

      {/* Demo Choice Modal */}
      <AnimatePresence>
        {demoChoiceUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={() => setDemoChoiceUrl(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl shadow-cyan-500/20 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Open Demo</h3>
              <p className="text-gray-400 text-sm mb-6">How would you like to view this project?</p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleViewHere}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:from-cyan-500 hover:to-blue-500 transition shadow-lg flex items-center justify-center gap-2"
                >
                  <FaEye />
                  View Here
                </button>
                <button
                  onClick={handleNewTab}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium hover:from-emerald-500 hover:to-teal-500 transition shadow-lg flex items-center justify-center gap-2"
                >
                  <FaExternalLinkAlt />
                  Open in New Tab
                </button>
                <button
                  onClick={() => setDemoChoiceUrl(null)}
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
    </section>
  );
}

export default Projects;
