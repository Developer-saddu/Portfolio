"use client";
import { motion } from "framer-motion";

const snippets = [
  {
    code: "const engineer = new SaddamAnsari();",
    output: "✓ Initialized with 3+ years of experience",
  },
  {
    code: "engineer.buildMicroservices();",
    output: "✓ Microservices built with NestJS + NATS JetStream",
  },
  {
    code: "engineer.deployToAWS();",
    output: "✓ Deployed to AWS with Docker + NGINX",
  },
  {
    code: "await engineer.solveBug();",
    output: "✓ Bug fixed. Coffee consumed: ∞",
  },
];

export default function TerminalTyping() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="mt-8 w-full max-w-xl"
    >
      <div className="bg-gray-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/10">
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-gray-400 ml-2 font-mono">
            saddam@dev:~$
          </span>
        </div>
        <div className="p-4 font-mono text-sm space-y-3">
          {snippets.map((snippet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + index * 0.8 }}
            >
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 select-none">$</span>
                <span className="text-gray-300">{snippet.code}</span>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + index * 0.8 }}
                className="ml-4 text-green-400 text-xs"
              >
                {snippet.output}
              </motion.div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, repeat: Infinity, duration: 0.8 }}
            className="flex items-center gap-1"
          >
            <span className="text-cyan-400">$</span>
            <span className="text-gray-300">_</span>
            <span className="w-2 h-4 bg-cyan-400 animate-pulse"></span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
