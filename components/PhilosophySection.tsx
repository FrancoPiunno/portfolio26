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

          {/* Right Column: Rediseño Profesional del Esquema Arquitecto Digital (Flotante y Animado) */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[520px] h-[380px] sm:h-[420px] flex items-center justify-center select-none"
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Ondas y Círculos Expansivos en Bucle Continuo (Ripple Effect) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Anillo de órbita sutil punteado de fondo */}
                <div className="w-[330px] h-[330px] rounded-full border border-white/[0.04] border-dashed" />

                {/* 4 Ondas concéntricas que nacen en el centro, se expanden y desaparecen */}
                {[0, 1.5, 3.0, 4.5].map((delay, idx) => (
                  <motion.div
                    key={`ripple-${idx}`}
                    initial={{ scale: 0.35, opacity: 0 }}
                    animate={{
                      scale: [0.35, 1.05, 1.65],
                      opacity: [0, 0.42, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: delay,
                    }}
                    className="absolute w-[220px] h-[220px] rounded-full border border-[#FA8A61]/35 pointer-events-none"
                  />
                ))}
              </div>

              {/* SVG de Vectores de Conexión y Rayos de Energía Continuos */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 500 400">
                <defs>
                  {/* Gradiente Activo Naranja */}
                  <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FA8A61" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#F87747" stopOpacity="0.3" />
                  </linearGradient>

                  {/* Filtro Glow para partículas de energía */}
                  <filter id="energyGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* 1. Líneas de base estáticas / punteadas */}
                <line x1="100" y1="75" x2="250" y2="200" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="400" y1="75" x2="250" y2="200" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="100" y1="325" x2="250" y2="200" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="400" y1="325" x2="250" y2="200" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="3 3" />

                {/* 2. Rayos de energía con flujo animado constante */}
                <line
                  x1="100"
                  y1="75"
                  x2="250"
                  y2="200"
                  stroke={hoveredNode === "produccion" || hoveredNode === "center" ? "#FA8A61" : "#FA8A61"}
                  strokeWidth={hoveredNode === "produccion" || hoveredNode === "center" ? "2" : "1.4"}
                  strokeOpacity={hoveredNode === "produccion" || hoveredNode === "center" ? "1" : "0.55"}
                  strokeDasharray="6 10"
                  className="animate-[dash-flow_1.6s_linear_infinite]"
                />

                <line
                  x1="400"
                  y1="75"
                  x2="250"
                  y2="200"
                  stroke={hoveredNode === "marketing" || hoveredNode === "center" ? "#FA8A61" : "#FA8A61"}
                  strokeWidth={hoveredNode === "marketing" || hoveredNode === "center" ? "2" : "1.4"}
                  strokeOpacity={hoveredNode === "marketing" || hoveredNode === "center" ? "1" : "0.55"}
                  strokeDasharray="6 10"
                  className="animate-[dash-flow_1.6s_linear_infinite]"
                />

                <line
                  x1="100"
                  y1="325"
                  x2="250"
                  y2="200"
                  stroke={hoveredNode === "diseno" || hoveredNode === "center" ? "#FA8A61" : "#FA8A61"}
                  strokeWidth={hoveredNode === "diseno" || hoveredNode === "center" ? "2" : "1.4"}
                  strokeOpacity={hoveredNode === "diseno" || hoveredNode === "center" ? "1" : "0.55"}
                  strokeDasharray="6 10"
                  className="animate-[dash-flow_1.6s_linear_infinite]"
                />

                <line
                  x1="400"
                  y1="325"
                  x2="250"
                  y2="200"
                  stroke={hoveredNode === "programacion" || hoveredNode === "center" ? "#FA8A61" : "#FA8A61"}
                  strokeWidth={hoveredNode === "programacion" || hoveredNode === "center" ? "2" : "1.4"}
                  strokeOpacity={hoveredNode === "programacion" || hoveredNode === "center" ? "1" : "0.55"}
                  strokeDasharray="6 10"
                  className="animate-[dash-flow_1.6s_linear_infinite]"
                />

                {/* 3. Partículas de energía luminosas viajando continuamente hacia el centro */}
                <motion.circle
                  r="3.5"
                  fill="#FA8A61"
                  filter="url(#energyGlow)"
                  animate={{
                    cx: [100, 250],
                    cy: [75, 200],
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                />

                <motion.circle
                  r="3.5"
                  fill="#FA8A61"
                  filter="url(#energyGlow)"
                  animate={{
                    cx: [400, 250],
                    cy: [75, 200],
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.55 }}
                />

                <motion.circle
                  r="3.5"
                  fill="#FA8A61"
                  filter="url(#energyGlow)"
                  animate={{
                    cx: [100, 250],
                    cy: [325, 200],
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                />

                <motion.circle
                  r="3.5"
                  fill="#FA8A61"
                  filter="url(#energyGlow)"
                  animate={{
                    cx: [400, 250],
                    cy: [325, 200],
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.65 }}
                />
              </svg>

              {/* 4 NODOS PERIFÉRICOS CON FLOTACIÓN SUAVE (SIN TRAZO) */}

              {/* Nodo 1: Producción (Top-Left) */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredNode("produccion")}
                className={`absolute top-6 left-4 sm:top-8 sm:left-6 px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer select-none flex items-center gap-2 ${hoveredNode === "produccion"
                    ? "bg-[#FA8A61]/20 shadow-[0_0_20px_rgba(250,138,97,0.35)] scale-105"
                    : "bg-white/[0.05] text-white/80 hover:text-white hover:bg-white/[0.08]"
                  }`}
              >
                <Video className="w-4 h-4 text-[#FA8A61]" strokeWidth={0.5} />
                <span className="text-[14px] sm:text-[15px] font-medium tracking-tight">Producción</span>
              </motion.div>

              {/* Nodo 2: Marketing (Top-Right) */}
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredNode("marketing")}
                className={`absolute top-6 right-4 sm:top-8 sm:right-6 px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer select-none flex items-center gap-2 ${hoveredNode === "marketing"
                    ? "bg-[#FA8A61]/20 shadow-[0_0_20px_rgba(250,138,97,0.35)] scale-105"
                    : "bg-white/[0.05] text-white/80 hover:text-white hover:bg-white/[0.08]"
                  }`}
              >
                <TrendingUp className="w-4 h-4 text-[#FA8A61]" strokeWidth={0.5} />
                <span className="text-[14px] sm:text-[15px] font-medium tracking-tight">Marketing</span>
              </motion.div>

              {/* Nodo 3: Diseño (Bottom-Left) */}
              <motion.div
                animate={{ y: [2, -4, 2] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredNode("diseno")}
                className={`absolute bottom-6 left-4 sm:bottom-8 sm:left-6 px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer select-none flex items-center gap-2 ${hoveredNode === "diseno"
                    ? "bg-[#FA8A61]/20 shadow-[0_0_20px_rgba(250,138,97,0.35)] scale-105"
                    : "bg-white/[0.05] text-white/80 hover:text-white hover:bg-white/[0.08]"
                  }`}
              >
                <Layers className="w-4 h-4 text-[#FA8A61]" strokeWidth={0.5} />
                <span className="text-[14px] sm:text-[15px] font-medium tracking-tight">Diseño</span>
              </motion.div>

              {/* Nodo 4: Programación (Bottom-Right) */}
              <motion.div
                animate={{ y: [-4, 2, -4] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredNode("programacion")}
                className={`absolute bottom-6 right-4 sm:bottom-8 sm:right-6 px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer select-none flex items-center gap-2 ${hoveredNode === "programacion"
                    ? "bg-[#FA8A61]/20 shadow-[0_0_20px_rgba(250,138,97,0.35)] scale-105"
                    : "bg-white/[0.05] text-white/80 hover:text-white hover:bg-white/[0.08]"
                  }`}
              >
                <Code2 className="w-4 h-4 text-[#FA8A61]" strokeWidth={0.5} />
                <span className="text-[14px] sm:text-[15px] font-medium tracking-tight">Programación</span>
              </motion.div>

              {/* NÚCLEO CENTRAL CIRCULAR CON PULSO DE ENERGÍA CONSTANTE */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(250,138,97,0.12)",
                    "0 0 35px rgba(250,138,97,0.28)",
                    "0 0 20px rgba(250,138,97,0.12)",
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredNode("center")}
                className={`relative z-20 w-[136px] h-[136px] sm:w-[150px] sm:h-[150px] rounded-full transition-all duration-300 cursor-pointer select-none flex flex-col items-center justify-center text-center backdrop-blur-md p-3 ${hoveredNode === "center"
                    ? "bg-neutral-900/95 scale-105"
                    : "bg-neutral-950/90 shadow-2xl"
                  }`}
              >
                <div className="text-[16px] sm:text-[18px] font-bold text-white tracking-tight leading-tight">
                  Arquitecto
                </div>
                <div className="text-[16px] sm:text-[18px] font-bold text-white tracking-tight leading-tight italic">
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
