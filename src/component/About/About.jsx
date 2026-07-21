"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About"
      className="py-20 px-6 md:px-16 lg:px-24 text-white transition-colors duration-500 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center md:text-left relative z-10">
        {/* Heading with accent */}
        <motion.div className="inline-block mb-8">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-cyan-400"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
        </motion.div>

        {/* Cards container */}
        <motion.div
          className="grid gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A{" "}
            <span className="text-cyan-300">Backend-focused Full Stack Developer</span>{" "}
            with 3+ years of experience building scalable microservices, REST
            APIs, and enterprise applications. My core stack spans{" "}
            <span className="text-cyan-300">
              Node.js, NestJS, Express.js, TypeScript, React.js
            </span>{" "}
            on the web side, and{" "}
            <span className="text-cyan-300">
              PostgreSQL, MySQL, Redis, NATS JetStream, AWS, and Docker
            </span>{" "}
            on the infrastructure side — I work across both.
          </motion.p>

          <motion.p
            className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I have worked at{" "}
            <span className="text-cyan-300">Kognito Kube</span>,{" "}
            <span className="text-cyan-300">KHKR Innovator Tech Solutions</span>,
            and <span className="text-cyan-300">Truequations Pvt. Ltd.</span>,{" "}
            shipping production-grade backend services, microservices, and
            full-stack applications. Outside of work, I built{" "}
            <span className="text-cyan-300">Million Makers</span> — a
            microservices-based survey rewards platform — and{" "}
            <span className="text-cyan-300">Teachopia</span>, a full-featured
            Learning Management System.
          </motion.p>

          <motion.p
            className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I&apos;m actively looking for{" "}
            <span className="text-cyan-300">
              Backend or Full Stack Developer roles
            </span>{" "}
            where I can design robust systems, work with scalable
            architectures, and contribute to high-impact engineering teams. I
            have hands-on experience with microservices, event-driven
            architectures, and cloud-native deployments, with a strong bias
            toward writing clean, production-ready code.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
