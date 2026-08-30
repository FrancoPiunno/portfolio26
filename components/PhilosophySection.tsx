"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useState, useRef } from "react";
import { Video, TrendingUp, Layers, Code2 } from "lucide-react";

interface ScrollWordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}

function ScrollWord({ word, range, progress }: ScrollWordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="inline-block mr-[0.24em]">
      <motion.span
        style={{ opacity }}
        className="inline-block font-normal text-white"
      >
        {word}
      </motion.span>
    </span>
  );
}

export function PhilosophySection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "center 0.35"],
  });

  const p1Words =
    "Creo que la mejor tecnología es invisible y que el diseño más memorable es aquel que resuelve problemas de negocio reales.".split(
      " "
    );

  const p2Words =
    "No creo en departamentos aislados ni en transferencias burocráticas de archivos entre cinco agencias distintas.".split(
      " "
    );

  const totalWords = p1Words.length + p2Words.length;

  return (
    <section
      ref={sectionRef}
      id="sobre-mi"
      className="relative min-h-[100dvh] w-full bg-transparent text-[#FFFFFF] flex flex-col justify-center py-14 sm:py-18 lg:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">

          {/* Left Column: Manifesto Statements with progressive word illumination */}
          <div className="lg:col-span-6 space-y-10 sm:space-y-14 max-w-[560px]">
            <div>
              <h2 className="text-[clamp(1.75rem,2.6vw,2.55rem)] leading-[1.22] tracking-[-0.03em]">
                {p1Words.map((word, i) => {
                  const start = (i / totalWords) * 0.95;
                  const end = ((i + 1.5) / totalWords) * 0.95;
                  return (
                    <ScrollWord
                      key={`p1-${i}-${word}`}
                      word={word}
                      range={[start, Math.min(end, 1)]}
                      progress={scrollYProgress}
                    />
                  );
                })}
              </h2>
            </div>

            <div>
              <p className="text-[clamp(1.75rem,2.6vw,2.55rem)] leading-[1.22] tracking-[-0.03em]">
                {p2Words.map((word, i) => {
                  const idx = p1Words.length + i;
                  const start = (idx / totalWords) * 0.95;
                  const end = ((idx + 1.5) / totalWords) * 0.95;
                  return (
                    <ScrollWord
                      key={`p2-${i}-${word}`}
                      word={word}
                      range={[start, Math.min(end, 1)]}
                      progress={scrollYProgress}
                    />
                  );
                })}
              </p>
            </div>
          </div>

          {/* Right Column: Esquema Arquitecto Digital con Reflejo Naranja y Sin Trazo */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[500px] h-[380px] sm:h-[430px] flex items-center justify-center select-none"
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Resplandor Cálido Central Trasero */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full bg-[#FA8A61]/12 blur-3xl pointer-events-none" />

              {/* Anillos Concéntricos y Ejes Diagonales Guía */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 430">
                <defs>
                  {/* Filtro Glow para el fotón luminoso */}
                  <filter id="photonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Anillos Concéntricos de Precisión */}
                <circle cx="250" cy="215" r="95" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                <circle cx="250" cy="215" r="140" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                <circle cx="250" cy="215" r="185" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />

                {/* Ejes Diagonales Guía Punteados (Desde las 4 esquinas al centro) */}
                <line x1="120" y1="95" x2="380" y2="335" stroke="rgba(250, 138, 97, 0.22)" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="380" y1="95" x2="120" y2="335" stroke="rgba(250, 138, 97, 0.22)" strokeWidth="1" strokeDasharray="4 6" />

                {/* Fotón de Energía Naranja Orbitando / Viajando sobre la Diagonal */}
                <motion.circle
                  r="4.5"
                  fill="#FA8A61"
                  filter="url(#photonGlow)"
                  animate={{
                    cx: [145, 215, 285, 355, 285, 215, 145],
                    cy: [310, 250, 180, 120, 180, 250, 310],
                    opacity: [0.3, 0.9, 0.9, 0.4, 0.9, 0.9, 0.3],
                    scale: [0.85, 1.2, 1.2, 0.9, 1.2, 1.2, 0.85],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>

              {/* 4 CARDS PERIFÉRICAS SIN TRAZO (border-0) CON REFLEJO NARANJA */}

              {/* 1. Producción (Top-Left) */}
              <div
                onMouseEnter={() => setHoveredNode("produccion")}
                className="absolute top-4 left-2 sm:top-6 sm:left-4 z-20"
              >
                <div className="relative overflow-hidden flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-[#151515]/95 shadow-[0_4px_24px_rgba(0,0,0,0.45)] cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-98">
                  {/* Reflejo Naranja Animado */}
                  <motion.div
                    initial={{ x: "-120%" }}
                    animate={{ x: "240%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      delay: 0,
                      ease: [0.16, 1, 0.3, 1],
                      repeatDelay: 2.2,
                    }}
                    className="absolute inset-0 w-3/5 h-full bg-gradient-to-r from-transparent via-[#FA8A61]/35 to-transparent -skew-x-12 pointer-events-none"
                  />
                  <Video className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FA8A61] shrink-0" strokeWidth={1.6} />
                  <span className="text-[13.5px] sm:text-[15px] font-medium text-white/90 tracking-tight">Producción</span>
                </div>
              </div>

              {/* 2. Marketing (Top-Right) */}
              <div
                onMouseEnter={() => setHoveredNode("marketing")}
                className="absolute top-4 right-2 sm:top-6 sm:right-4 z-20"
              >
                <div className="relative overflow-hidden flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-[#151515]/95 shadow-[0_4px_24px_rgba(0,0,0,0.45)] cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-98">
                  {/* Reflejo Naranja Animado */}
                  <motion.div
                    initial={{ x: "-120%" }}
                    animate={{ x: "240%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      delay: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      repeatDelay: 2.2,
                    }}
                    className="absolute inset-0 w-3/5 h-full bg-gradient-to-r from-transparent via-[#FA8A61]/35 to-transparent -skew-x-12 pointer-events-none"
                  />
                  <TrendingUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FA8A61] shrink-0" strokeWidth={1.6} />
                  <span className="text-[13.5px] sm:text-[15px] font-medium text-white/90 tracking-tight">Marketing</span>
                </div>
              </div>

              {/* 3. Diseño (Bottom-Left) */}
              <div
                onMouseEnter={() => setHoveredNode("diseno")}
                className="absolute bottom-4 left-2 sm:bottom-6 sm:left-4 z-20"
              >
                <div className="relative overflow-hidden flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-[#151515]/95 shadow-[0_4px_24px_rgba(0,0,0,0.45)] cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-98">
                  {/* Reflejo Naranja Animado */}
                  <motion.div
                    initial={{ x: "-120%" }}
                    animate={{ x: "240%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      delay: 1.6,
                      ease: [0.16, 1, 0.3, 1],
                      repeatDelay: 2.2,
                    }}
                    className="absolute inset-0 w-3/5 h-full bg-gradient-to-r from-transparent via-[#FA8A61]/35 to-transparent -skew-x-12 pointer-events-none"
                  />
                  <Layers className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FA8A61] shrink-0" strokeWidth={1.6} />
                  <span className="text-[13.5px] sm:text-[15px] font-medium text-white/90 tracking-tight">Diseño</span>
                </div>
              </div>

              {/* 4. Programación (Bottom-Right) */}
              <div
                onMouseEnter={() => setHoveredNode("programacion")}
                className="absolute bottom-4 right-2 sm:bottom-6 sm:right-4 z-20"
              >
                <div className="relative overflow-hidden flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-[#151515]/95 shadow-[0_4px_24px_rgba(0,0,0,0.45)] cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-98">
                  {/* Reflejo Naranja Animado */}
                  <motion.div
                    initial={{ x: "-120%" }}
                    animate={{ x: "240%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      delay: 2.4,
                      ease: [0.16, 1, 0.3, 1],
                      repeatDelay: 2.2,
                    }}
                    className="absolute inset-0 w-3/5 h-full bg-gradient-to-r from-transparent via-[#FA8A61]/35 to-transparent -skew-x-12 pointer-events-none"
                  />
                  <Code2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FA8A61] shrink-0" strokeWidth={1.6} />
                  <span className="text-[13.5px] sm:text-[15px] font-medium text-white/90 tracking-tight">Programación</span>
                </div>
              </div>

              {/* NÚCLEO CENTRAL CIRCULAR NEGRO */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 28px rgba(250,138,97,0.12)",
                    "0 0 45px rgba(250,138,97,0.24)",
                    "0 0 28px rgba(250,138,97,0.12)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredNode("center")}
                className="relative z-20 w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] rounded-full bg-[#111111] transition-transform duration-300 cursor-pointer select-none flex flex-col items-center justify-center text-center p-3 shadow-2xl hover:scale-105"
              >
                <div className="text-[17px] sm:text-[20px] font-bold text-white tracking-tight leading-tight">
                  Arquitecto
                </div>
                <div className="text-[17px] sm:text-[20px] font-bold text-white tracking-tight leading-tight italic">
                  digital
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
