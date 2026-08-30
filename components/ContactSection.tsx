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
      {/* ─── ANIMATED SMOOTH FLOW LINES (FONDO NEGRO CON LÍNEAS LISAS, DEGRADADO Y RESPLANDOR) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradiente de flujo 1 (Coral a Ámbar luminoso) */}
            <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FA8A61" stopOpacity="0" />
              <stop offset="20%" stopColor="#FA8A61" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FF9F7A" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#FA8A61" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FA8A61" stopOpacity="0" />
            </linearGradient>

            {/* Gradiente de flujo 2 (Brillo blanco cálido y coral) */}
            <linearGradient id="flowGrad2" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FF5520" stopOpacity="0" />
              <stop offset="30%" stopColor="#FA8A61" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="85%" stopColor="#FA8A61" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FF5520" stopOpacity="0" />
            </linearGradient>

            {/* Gradiente de flujo 3 (Onda profunda) */}
            <linearGradient id="flowGrad3" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FA8A61" stopOpacity="0" />
              <stop offset="25%" stopColor="#F87747" stopOpacity="0.25" />
              <stop offset="55%" stopColor="#FFB394" stopOpacity="0.7" />
              <stop offset="85%" stopColor="#FA8A61" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FA8A61" stopOpacity="0" />
            </linearGradient>

            {/* Filtro de Resplandor Liso (Glow) */}
            <filter id="flowGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur1" />
              <feGaussianBlur stdDeviation="2" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Línea 1 Lisa con Resplandor (Onda superior fluida) */}
          <motion.path
            d="M -100 320 C 300 180, 650 480, 1100 260 S 1550 420, 1650 350"
            fill="none"
            stroke="url(#flowGrad1)"
            strokeWidth="2"
            filter="url(#flowGlow)"
            animate={{
              d: [
                "M -100 320 C 300 180, 650 480, 1100 260 S 1550 420, 1650 350",
                "M -100 260 C 340 380, 720 190, 1150 390 S 1520 220, 1650 280",
                "M -100 380 C 260 220, 600 450, 1080 200 S 1580 380, 1650 340",
                "M -100 320 C 300 180, 650 480, 1100 260 S 1550 420, 1650 350",
              ],
              opacity: [0.65, 0.95, 0.7, 0.65],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Línea 2 Lisa con Resplandor (Onda central brillante) */}
          <motion.path
            d="M -100 450 C 350 580, 750 280, 1150 500 S 1500 320, 1650 440"
            fill="none"
            stroke="url(#flowGrad2)"
            strokeWidth="2.2"
            filter="url(#flowGlow)"
            animate={{
              d: [
                "M -100 450 C 350 580, 750 280, 1150 500 S 1500 320, 1650 440",
                "M -100 520 C 290 340, 680 560, 1100 320 S 1560 490, 1650 390",
                "M -100 390 C 380 520, 800 240, 1200 480 S 1480 290, 1650 460",
                "M -100 450 C 350 580, 750 280, 1150 500 S 1500 320, 1650 440",
              ],
              opacity: [0.7, 1, 0.75, 0.7],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />

          {/* Línea 3 Lisa con Resplandor (Onda armónica intermedia) */}
          <motion.path
            d="M -100 390 C 320 280, 700 420, 1120 310 S 1520 400, 1650 360"
            fill="none"
            stroke="url(#flowGrad1)"
            strokeWidth="1.6"
            filter="url(#flowGlow)"
            animate={{
              d: [
                "M -100 390 C 320 280, 700 420, 1120 310 S 1520 400, 1650 360",
                "M -100 340 C 360 440, 750 260, 1180 430 S 1490 280, 1650 330",
                "M -100 420 C 280 310, 660 460, 1090 270 S 1550 430, 1650 380",
                "M -100 390 C 320 280, 700 420, 1120 310 S 1520 400, 1650 360",
              ],
              opacity: [0.5, 0.85, 0.6, 0.5],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.6,
            }}
          />

          {/* Línea 4 Lisa con Resplandor (Onda inferior profunda) */}
          <motion.path
            d="M -100 620 C 380 480, 820 690, 1220 520 S 1540 640, 1650 580"
            fill="none"
            stroke="url(#flowGrad3)"
            strokeWidth="1.8"
            filter="url(#flowGlow)"
            animate={{
              d: [
                "M -100 620 C 380 480, 820 690, 1220 520 S 1540 640, 1650 580",
                "M -100 560 C 440 650, 760 490, 1160 630 S 1500 520, 1650 610",
                "M -100 660 C 320 520, 860 670, 1250 480 S 1580 660, 1650 550",
                "M -100 620 C 380 480, 820 690, 1220 520 S 1540 640, 1650 580",
              ],
              opacity: [0.45, 0.8, 0.5, 0.45],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.2,
            }}
          />

          {/* Línea 5 Lisa con Resplandor (Onda alta sutil) */}
          <motion.path
            d="M -100 220 C 420 350, 800 150, 1200 340 S 1510 190, 1650 250"
            fill="none"
            stroke="url(#flowGrad2)"
            strokeWidth="1.4"
            filter="url(#flowGlow)"
            animate={{
              d: [
                "M -100 220 C 420 350, 800 150, 1200 340 S 1510 190, 1650 250",
                "M -100 290 C 360 180, 740 370, 1140 220 S 1560 320, 1650 210",
                "M -100 180 C 460 320, 840 180, 1230 360 S 1480 220, 1650 270",
                "M -100 220 C 420 350, 800 150, 1200 340 S 1510 190, 1650 250",
              ],
              opacity: [0.4, 0.75, 0.5, 0.4],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          />
        </svg>
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
