"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const EASTER_EGGS = [
  "🚀 Initiating warp speed...",
  "🐛 Debugging the matrix...",
  "☕ Coffee level: critical. Refilling...",
  "🔥 Compiling success...",
  "🎮 Achievement unlocked: Secret Portfolio Mode",
  "🦄 Deploying to production...",
  "🐧 Linux is better (just kidding... mostly)",
  "🧠 Cognitive load: 100%",
  "💡 Idea generated. Now where did I put that coffee?",
  "🔄 Refactoring legacy code...",
];

export default function EasterEgg() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [message, setMessage] = useState("");
  const [keySequence, setKeySequence] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newSequence = [...keySequence, e.key].slice(-10);
      setKeySequence(newSequence);

      const konamiMatch = KONAMI_CODE.every(
        (key, index) => newSequence[index] === key
      );

      if (konamiMatch) {
        const randomMessage =
          EASTER_EGGS[Math.floor(Math.random() * EASTER_EGGS.length)];
        setMessage(randomMessage);
        setShowEasterEgg(true);
        setKeySequence([]);
        setTimeout(() => setShowEasterEgg(false), 4000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keySequence]);

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50 max-w-sm"
        >
          <div className="bg-gray-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🎮</span>
              <div>
                <p className="text-xs text-cyan-400 font-mono mb-1">
                  SECRET UNLOCKED
                </p>
                <p className="text-white font-medium">{message}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Press ESC to dismiss
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
