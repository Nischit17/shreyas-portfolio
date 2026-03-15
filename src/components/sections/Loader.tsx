"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "Initializing AI Strategy Interface...",
  "Loading Global Intelligence Layer...",
  "Synchronizing Enterprise Systems...",
  "Access Granted."
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (messageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setMessageIndex((prev) => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        onComplete();
      }, 800);
    }
  }, [messageIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background pointer-events-none"
    >
      <div className="flex flex-col items-center">
        {/* Animated neural nodes */}
        <div className="flex gap-2 mb-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Terminal Text */}
        <div className="font-mono text-sm md:text-base text-primary/80 h-6">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {messages[messageIndex]}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
