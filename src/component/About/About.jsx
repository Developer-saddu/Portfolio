"use client";
import { motion } from "framer-motion";
import { FileCode2, GitBranch, Coffee, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "3+", icon: <GitBranch className="w-5 h-5" /> },
    { label: "Microservices Built", value: "15+", icon: <FileCode2 className="w-5 h-5" /> },
    { label: "Coffee Consumed", value: "∞", icon: <Coffee className="w-5 h-5" /> },
    { label: "Bugs Fixed", value: "1000+", icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <section
      id="About"
      className="py-20 px-6 md:px-16 lg:px-24 text-white transition-colors duration-500 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileCode2 className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400">
              About.config()
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-sm">
            {"// Loading developer profile..."}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 text-center hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex justify-center text-cyan-400 mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio Cards */}
        <motion.div
          className="grid gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">👨‍💻</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-cyan-300 mb-2">
                  The Developer
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A{" "}
                  <span className="text-cyan-300 font-mono">
                    Senior Software Engineer
                  </span>{" "}
                  with 3+ years of battle-tested experience in building
                  scalable microservices, REST APIs, and enterprise applications.
                  My weapon of choice:{" "}
                  <span className="text-cyan-300">Node.js, NestJS, React.js</span>{" "}
                  and a healthy addiction to clean architecture.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">🏢</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-cyan-300 mb-2">
                  The Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  From{" "}
                  <span className="text-cyan-300">Truequations</span> to{" "}
                  <span className="text-cyan-300">Kognito Kube</span>, I&apos;ve
                  led teams, architected systems, and shipped features that
                  actually work (most of the time). Currently crafting
                  microservices magic at{" "}
                  <span className="text-cyan-300">Kognito Kube</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">🚀</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-cyan-300 mb-2">
                  The Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I don&apos;t just write code — I{" "}
                  <span className="text-cyan-300">architect solutions</span>.
                  Microservices, event-driven systems, and cloud-native
                  deployments are my playground. Currently seeking{" "}
                  <span className="text-cyan-300">Senior Software Engineering</span>{" "}
                  roles where I can lead, innovate, and maybe fix that one bug
                  that&apos;s been haunting me since 2022.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6"
        >
          <h3 className="text-lg font-bold text-cyan-300 mb-4 font-mono">
            {"// Fun Facts"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-cyan-400">▸</span>
              <span>
                I dream in <span className="text-cyan-300">NATS JetStream</span>{" "}
                topics
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-cyan-400">▸</span>
              <span>
                My code has <span className="text-cyan-300">99.9% uptime</span>{" "}
                (the other 0.1% is on production)
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-cyan-400">▸</span>
              <span>
                I can debug a <span className="text-cyan-300">race condition</span>{" "}
                in my sleep
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-cyan-400">▸</span>
              <span>
                <span className="text-cyan-300">Docker</span> containers are my
                happy place
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
