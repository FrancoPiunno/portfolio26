"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { openContactModal } from "./ContactModal";

export function ContactSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="contacto"
      className="relative min-h-[100dvh] w-full bg-transparent text-[#FFFFFF] flex flex-col justify-center py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* ─── ANIMATED BACKGROUND LAYER ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        
        {/* 1. Primary Warm Glow Orb (Top Right / Center) */}
        <motion.div
          animate={{
            x: [0, 45, -35, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.22, 0.96, 1],
            opacity: [0.22, 0.38, 0.24, 0.22],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[15%] -right-[10%] w-[550px] sm:w-[750px] lg:w-[950px] h-[550px] sm:h-[750px] lg:h-[950px] rounded-full bg-gradient-to-br from-[#FA8A61]/35 via-[#F87747]/20 to-transparent blur-[100px] sm:blur-[140px] lg:blur-[170px]"
        />

        {/* 2. Secondary Amber / Ember Orb (Bottom Left) */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
            scale: [0.95, 1.18, 1.02, 0.95],
            opacity: [0.15, 0.32, 0.18, 0.15],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute -bottom-[20%] -left-[15%] w-[500px] sm:w-[700px] lg:w-[850px] h-[500px] sm:h-[700px] lg:h-[850px] rounded-full bg-gradient-to-tr from-[#FF5520]/28 via-[#FA8A61]/15 to-transparent blur-[110px] sm:blur-[150px] lg:blur-[180px]"
        />

        {/* 3. Subtle Violet Depth Accent Orb (Center Depth) */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, 25, -35, 0],
            scale: [1, 1.15, 0.9, 1],
            opacity: [0.08, 0.18, 0.1, 0.08],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-r from-purple-600/20 via-pink-500/10 to-transparent blur-[120px] sm:blur-[160px]"
        />

        {/* 4. Elegant SVG Architectural Geometric Circles */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07] sm:opacity-[0.09]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="contactLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FA8A61" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FA8A61" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Anillo concéntrico grande animado */}
          <motion.circle
            cx="85%"
            cy="40%"
            r="380"
            fill="none"
            stroke="url(#contactLineGrad)"
            strokeWidth="1.2"
            strokeDasharray="6 12"
            animate={{ rotate: 360 }}
            transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "85% 40%" }}
          />

          {/* Anillo secundario */}
          <motion.circle
            cx="85%"
            cy="40%"
            r="220"
            fill="none"
            stroke="url(#contactLineGrad)"
            strokeWidth="0.8"
            strokeDasharray="4 8"
            animate={{ rotate: -360 }}
            transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "85% 40%" }}
          />

          {/* Línea diagonal técnica sutil */}
          <motion.line
            x1="0%"
            y1="90%"
            x2="50%"
            y2="10%"
            stroke="url(#contactLineGrad)"
            strokeWidth="0.7"
            strokeDasharray="5 8"
            animate={{ strokeDashoffset: [0, 52] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* 5. Nodos / Partículas flotantes ambientales sutiles */}
        {mounted && (
          <div className="absolute inset-0">
            {[
              { top: "25%", left: "18%", delay: 0, duration: 8, size: 3 },
              { top: "65%", left: "12%", delay: 2.5, duration: 9.5, size: 2.5 },
              { top: "30%", left: "75%", delay: 1.2, duration: 7.5, size: 3.5 },
              { top: "80%", left: "68%", delay: 3.8, duration: 10, size: 2 },
              { top: "15%", left: "85%", delay: 2.1, duration: 8.8, size: 3 },
              { top: "50%", left: "92%", delay: 3.2, duration: 9.2, size: 2.5 },
              { top: "72%", left: "42%", delay: 1.7, duration: 8.2, size: 2.5 },
            ].map((pt, idx) => (
              <motion.div
                key={`contact-pt-${idx}`}
                style={{
                  top: pt.top,
                  left: pt.left,
                  width: `${pt.size}px`,
                  height: `${pt.size}px`,
                }}
                className="absolute rounded-full bg-[#FA8A61]/50"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [0.15, 0.7, 0.15],
                  scale: [0.8, 1.35, 0.8],
                }}
                transition={{
                  duration: pt.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: pt.delay,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* ─── FOREGROUND CONTENT ─── */}
      <div className="max-w-[1380px] mx-auto w-full relative z-10">

        {/* Main Content: Headline, Description and CTA Button */}
        <div className="w-full max-w-[1280px] space-y-8 sm:space-y-10">

          {/* Headline & Description */}
          <div className="space-y-6 sm:space-y-10">
            <h2 className="text-[clamp(4.75rem,12.5vw,7.2rem)] font-normal leading-[0.88] tracking-[-0.045em] text-white">
              ¿Tenés un proyecto <br />
              <span className="font-medium text-white">en mente?</span>
            </h2>
            <p className="text-[clamp(1.5rem,2.2vw,2rem)] text-white/85 font-normal leading-[1.35] max-w-[860px] pt-1">
              Trabajemos juntos para transformar tu idea en una experiencia digital sólida, estética y orientada a resultados reales.
            </p>
          </div>

          {/* 'Trabajemos juntos' Primary Button (Full Rounded) */}
          <div className="pt-2">
            <button
              type="button"
              onClick={openContactModal}
              className="group inline-flex items-center gap-3.5 bg-[#FA8A61] hover:bg-[#F87747] text-[#101010] font-semibold text-[19px] sm:text-[21px] px-9 py-5 rounded-full transition-all duration-200 shadow-[0_4px_28px_rgba(250,138,97,0.32)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer select-none"
            >
              <span>Trabajemos juntos</span>
              <ArrowUpRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
