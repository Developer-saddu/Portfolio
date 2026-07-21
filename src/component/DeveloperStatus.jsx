"use client";
import { motion } from "framer-motion";
import { Terminal, Cpu, Coffee, Zap } from "lucide-react";

const statusItems = [
  {
    icon: <Cpu className="w-4 h-4" />,
    label: "System Status",
    value: "Operational",
    color: "text-green-400",
  },
  {
    icon: <Coffee className="w-4 h-4" />,
    label: "Caffeine Level",
    value: "Critical",
    color: "text-yellow-400",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    label: "Bug Fix Rate",
    value: "2/day avg",
    color: "text-cyan-400",
  },
  {
    icon: <Terminal className="w-4 h-4" />,
    label: "Current Focus",
    value: "Microservices",
    color: "text-purple-400",
  },
];

export default function DeveloperStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-8 w-full max-w-xl"
    >
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 font-mono text-sm">
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-gray-400 ml-2">
            saddam@portfolio:~$
          </span>
        </div>
        <div className="space-y-2">
          {statusItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-cyan-400">{item.icon}</span>
                <span>{item.label}:</span>
              </div>
              <span className={`${item.color} font-semibold`}>
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-700/50">
          <p className="text-xs text-gray-500">
            <span className="text-cyan-400">$</span> uptime --since &quot;3
            years ago&quot;
            <br />
            <span className="text-green-400">✓</span> Still debugging...
          </p>
        </div>
      </div>
    </motion.div>
  );
}
