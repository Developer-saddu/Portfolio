import { useState } from "react";
import { motion } from "framer-motion";
import project_data from "../../assets/project_data";
import { FaGithub, FaExternalLinkAlt, FaChevronUp } from "react-icons/fa";

function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-12 px-6" id="Projects">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-cyan-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <p className="text-gray-400">Explore my latest work</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project_data.map((project) => (
          <motion.div
            key={project.p_no}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (project.p_no - 1) * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 self-start"
          >
            {/* Project Image */}
            <div className="h-44 overflow-hidden">
              <img
                src={project.p_img}
                alt={project.p_name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-cyan-400 transition-colors">
                {project.p_name}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {project.p_desc}
              </p>

              {/* Key Features Preview */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-cyan-400 font-semibold">
                    Highlights:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {expandedId === project.p_no
                      ? project.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs text-gray-300 bg-gray-700/50 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))
                      : project.features.slice(0, 2).map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs text-gray-300 bg-gray-700/50 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                    {project.features.length > 2 && (
                      <button
                        onClick={() => toggleExpand(project.p_no)}
                        className="text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded border border-cyan-700/50 flex items-center gap-1 cursor-pointer"
                      >
                        {expandedId === project.p_no ? (
                          <>
                            <FaChevronUp /> Show Less
                          </>
                        ) : (
                          <>+{project.features.length - 2} More</>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-2">
                <p className="text-xs text-cyan-400 font-semibold">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {expandedId === project.p_no
                    ? project.tech.split(",").map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-cyan-900/30 text-cyan-300 rounded-full border border-cyan-700/50"
                        >
                          {tech.trim()}
                        </span>
                      ))
                    : project.tech
                        .split(",")
                        .slice(0, 4)
                        .map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-cyan-900/30 text-cyan-300 rounded-full border border-cyan-700/50"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                  {project.tech.split(",").length > 4 && (
                    <button
                      onClick={() => toggleExpand(project.p_no)}
                      className="px-3 py-1 text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-700/50 flex items-center gap-1 cursor-pointer"
                    >
                      {expandedId === project.p_no ? (
                        <>
                          <FaChevronUp /> Less
                        </>
                      ) : (
                        <>+{project.tech.split(",").length - 4} More</>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                {project.p_href && project.p_href !== "#" && (
                  <a
                    href={project.p_href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-medium rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                )}
                {project.p_github && project.p_github !== "#" && (
                  <a
                    href={project.p_github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-gray-700 text-white text-sm font-medium rounded-xl hover:bg-gray-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <FaGithub />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
