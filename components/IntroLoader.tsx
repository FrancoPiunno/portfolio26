"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroLoader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const letters = ["f", "r", "a", "n", "."];

  useEffect(() => {
    // 1. Bloquear scroll al cargar
    document.body.style.overflow = "hidden";
    const lenisInstance = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (lenisInstance) {
      lenisInstance.stop();
    }

    // 2. Duración de la animación: escritura (~750ms) + pausa (~400ms) = 1.25s
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
      const lenis = (window as unknown as { lenis?: { start: () => void } }).lenis;
      if (lenis) {
        lenis.start();
      }
    }, 1200);

    // Safeguard absoluto para desmontar por completo el loader del DOM tras la animación
    const unmountTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 2100);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = "";
      const lenis = (window as unknown as { lenis?: { start: () => void } }).lenis;
      if (lenis) {
        lenis.start();
      }
    };
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="intro-screen"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[999999] bg-[#101010] flex items-center justify-center select-none overflow-hidden"
        >
          {/* Top Orange Atmospheric Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: [0.45, 0.8, 0.5],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[850px] lg:w-[1100px] h-[300px] sm:h-[420px] rounded-[100%] bg-gradient-to-b from-[#FA8A61]/40 via-[#FA8A61]/15 to-transparent blur-[70px] sm:blur-[110px] pointer-events-none"
          />

          {/* Logo animado 'fran.' idéntico al navbar */}
          <div className="relative z-10 flex items-baseline overflow-hidden px-4">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 35, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.28,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[clamp(3.75rem,9.5vw,9.5rem)] font-black italic tracking-tight text-white select-none inline-block leading-none"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
