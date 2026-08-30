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

          {/* Right Column: Matriz de Convergencia Minimalista y Moderna */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[480px] bg-white/[0.015] border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.36)] select-none overflow-hidden"
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Sutil resplandor ambiental detrás del centro */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FA8A61]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Retícula Geométrica y Líneas de Guía Ultra-finas */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FA8A61" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#FA8A61" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FA8A61" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Ejes Centrales Cartesianos */}
                <line x1="50%" y1="12%" x2="50%" y2="88%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="12%" y1="50%" x2="88%" y2="50%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />

                {/* Anillo de precisión minimalista */}
                <circle cx="50%" cy="50%" r="72" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              </svg>

              {/* Grid de las 4 Disciplinas (2x2) */}
              <div className="relative z-10 grid grid-cols-2 gap-4 sm:gap-6 min-h-[300px] sm:min-h-[330px]">
                
                {/* 1. Producción (Top Left) */}
                <motion.div
                  onMouseEnter={() => setHoveredNode("produccion")}
                  className={`flex flex-col justify-between p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    hoveredNode === "produccion"
                      ? "bg-white/[0.06] border-[#FA8A61]/40 shadow-[0_0_24px_rgba(250,138,97,0.15)] -translate-y-0.5"
                      : "bg-white/[0.02] border-white/[0.05] hover:border-white/[0.12]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <Video className="w-4 h-4 text-[#FA8A61]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-mono tracking-widest text-white/30">01</span>
                  </div>
                  <div>
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-white tracking-tight">Producción</h3>
                    <p className="text-[12px] sm:text-[12.5px] text-white/50 font-normal leading-tight pt-1">Video & Audio</p>
                  </div>
                </motion.div>

                {/* 2. Marketing (Top Right) */}
                <motion.div
                  onMouseEnter={() => setHoveredNode("marketing")}
                  className={`flex flex-col justify-between p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    hoveredNode === "marketing"
                      ? "bg-white/[0.06] border-[#FA8A61]/40 shadow-[0_0_24px_rgba(250,138,97,0.15)] -translate-y-0.5"
                      : "bg-white/[0.02] border-white/[0.05] hover:border-white/[0.12]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-[#FA8A61]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-mono tracking-widest text-white/30">02</span>
                  </div>
                  <div>
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-white tracking-tight">Marketing</h3>
                    <p className="text-[12px] sm:text-[12.5px] text-white/50 font-normal leading-tight pt-1">Conversión & Datos</p>
                  </div>
                </motion.div>

                {/* 3. Diseño (Bottom Left) */}
                <motion.div
                  onMouseEnter={() => setHoveredNode("diseno")}
                  className={`flex flex-col justify-between p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    hoveredNode === "diseno"
                      ? "bg-white/[0.06] border-[#FA8A61]/40 shadow-[0_0_24px_rgba(250,138,97,0.15)] translate-y-0.5"
                      : "bg-white/[0.02] border-white/[0.05] hover:border-white/[0.12]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <Layers className="w-4 h-4 text-[#FA8A61]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-mono tracking-widest text-white/30">03</span>
                  </div>
                  <div>
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-white tracking-tight">Diseño</h3>
                    <p className="text-[12px] sm:text-[12.5px] text-white/50 font-normal leading-tight pt-1">UI/UX & Sistemas</p>
                  </div>
                </motion.div>

                {/* 4. Programación (Bottom Right) */}
                <motion.div
                  onMouseEnter={() => setHoveredNode("programacion")}
                  className={`flex flex-col justify-between p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    hoveredNode === "programacion"
                      ? "bg-white/[0.06] border-[#FA8A61]/40 shadow-[0_0_24px_rgba(250,138,97,0.15)] translate-y-0.5"
                      : "bg-white/[0.02] border-white/[0.05] hover:border-white/[0.12]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-[#FA8A61]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-mono tracking-widest text-white/30">04</span>
                  </div>
                  <div>
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-white tracking-tight">Programación</h3>
                    <p className="text-[12px] sm:text-[12.5px] text-white/50 font-normal leading-tight pt-1">Full-Stack & Escala</p>
                  </div>
                </motion.div>

              </div>

              {/* NÚCLEO CENTRAL MINIMALISTA (Badge Flotante de Integración) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
                <motion.div
                  onMouseEnter={() => setHoveredNode("center")}
                  className={`px-4 sm:px-5 py-2.5 rounded-full backdrop-blur-2xl border transition-all duration-300 cursor-pointer flex items-center gap-2.5 shadow-2xl ${
                    hoveredNode === "center"
                      ? "bg-[#141414] border-[#FA8A61] scale-105 shadow-[0_0_28px_rgba(250,138,97,0.3)]"
                      : "bg-[#101010]/95 border-white/15 hover:border-white/30"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#FA8A61] animate-pulse" />
                  <span className="text-[13px] sm:text-[14px] font-bold text-white tracking-tight">
                    Arquitecto <span className="italic font-bold text-white">digital</span>
                  </span>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
