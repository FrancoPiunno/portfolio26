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

        {/* 4. Elegant Animated Flow Lines (Ondas fluidas en movimiento continuo) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FA8A61" stopOpacity="0" />
              <stop offset="25%" stopColor="#FA8A61" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#FFA47D" stopOpacity="0.75" />
              <stop offset="80%" stopColor="#FA8A61" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FA8A61" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="flowGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF5520" stopOpacity="0" />
              <stop offset="35%" stopColor="#FA8A61" stopOpacity="0.35" />
              <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="90%" stopColor="#FF5520" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FA8A61" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="flowGrad3" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FA8A61" stopOpacity="0" />
              <stop offset="30%" stopColor="#FF7744" stopOpacity="0.25" />
              <stop offset="70%" stopColor="#FA8A61" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FA8A61" stopOpacity="0" />
            </linearGradient>

            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Flow Wave Line 1 (Línea principal fluida superior) */}
          <motion.path
            d="M -100 320 C 300 180, 650 480, 1100 260 S 1550 420, 1650 350"
            fill="none"
            stroke="url(#flowGrad1)"
            strokeWidth="2.2"
            filter="url(#glowFilter)"
            animate={{
              d: [
                "M -100 320 C 300 180, 650 480, 1100 260 S 1550 420, 1650 350",
                "M -100 260 C 340 380, 720 190, 1150 390 S 1520 220, 1650 280",
                "M -100 380 C 260 220, 600 450, 1080 200 S 1580 380, 1650 340",
                "M -100 320 C 300 180, 650 480, 1100 260 S 1550 420, 1650 350",
              ],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Flow Wave Line 2 (Línea complementaria en contrafase) */}
          <motion.path
            d="M -100 450 C 350 580, 750 280, 1150 500 S 1500 320, 1650 440"
            fill="none"
            stroke="url(#flowGrad2)"
            strokeWidth="1.8"
            filter="url(#glowFilter)"
            animate={{
              d: [
                "M -100 450 C 350 580, 750 280, 1150 500 S 1500 320, 1650 440",
                "M -100 520 C 290 340, 680 560, 1100 320 S 1560 490, 1650 390",
                "M -100 390 C 380 520, 800 240, 1200 480 S 1480 290, 1650 460",
                "M -100 450 C 350 580, 750 280, 1150 500 S 1500 320, 1650 440",
              ],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Flow Wave Line 3 (Línea de corriente con estela punteada continua) */}
          <motion.path
            d="M -100 390 C 320 280, 700 420, 1120 310 S 1520 400, 1650 360"
            fill="none"
            stroke="url(#flowGrad1)"
            strokeWidth="1.4"
            strokeDasharray="10 14"
            animate={{
              strokeDashoffset: [0, -180],
              d: [
                "M -100 390 C 320 280, 700 420, 1120 310 S 1520 400, 1650 360",
                "M -100 340 C 360 440, 750 260, 1180 430 S 1490 280, 1650 330",
                "M -100 420 C 280 310, 660 460, 1090 270 S 1550 430, 1650 380",
                "M -100 390 C 320 280, 700 420, 1120 310 S 1520 400, 1650 360",
              ],
            }}
            transition={{
              strokeDashoffset: { duration: 12, repeat: Infinity, ease: "linear" },
              d: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Flow Wave Line 4 (Línea profunda inferior de cadencia lenta) */}
          <motion.path
            d="M -100 620 C 380 480, 820 690, 1220 520 S 1540 640, 1650 580"
            fill="none"
            stroke="url(#flowGrad3)"
            strokeWidth="1.5"
            animate={{
              d: [
                "M -100 620 C 380 480, 820 690, 1220 520 S 1540 640, 1650 580",
                "M -100 560 C 440 650, 760 490, 1160 630 S 1500 520, 1650 610",
                "M -100 660 C 320 520, 860 670, 1250 480 S 1580 660, 1650 550",
                "M -100 620 C 380 480, 820 690, 1220 520 S 1540 640, 1650 580",
              ],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Flow Wave Line 5 (Línea de corriente fina con pulsación) */}
          <motion.path
            d="M -100 220 C 420 350, 800 150, 1200 340 S 1510 190, 1650 250"
            fill="none"
            stroke="url(#flowGrad2)"
            strokeWidth="1.2"
            strokeDasharray="6 10"
            animate={{
              strokeDashoffset: [0, 140],
              d: [
                "M -100 220 C 420 350, 800 150, 1200 340 S 1510 190, 1650 250",
                "M -100 290 C 360 180, 740 370, 1140 220 S 1560 320, 1650 210",
                "M -100 180 C 460 320, 840 180, 1230 360 S 1480 220, 1650 270",
                "M -100 220 C 420 350, 800 150, 1200 340 S 1510 190, 1650 250",
              ],
            }}
            transition={{
              strokeDashoffset: { duration: 14, repeat: Infinity, ease: "linear" },
              d: { duration: 24, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            }}
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
