"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { ClientsSection } from "@/components/ClientsSection";
import { PhilosophySection } from "@/components/PhilosophySection";

export function LightSectionContainer() {
  return (
    <div
      className="relative text-[#101010] overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] via-60% to-[#0F0F0F]"
    >
      {/* Glow 1: Superior Derecho (Hero) - Flotación sutil orgánica constante */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-28 w-[500px] sm:w-[750px] lg:w-[950px] h-[500px] sm:h-[750px] lg:h-[950px] -z-0"
      >
        <motion.div
          animate={{
            x: [0, 24, -18, 0],
            y: [0, -20, 16, 0],
            scale: [1, 1.05, 0.97, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full rounded-full bg-[#FA8A61]/35 blur-[120px] sm:blur-[170px]"
        />
      </div>

      {/* Glow 2: Centro/Inferior Izquierdo (Trabajos / Transición) - Flotación sutil orgánica constante */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[38%] -left-32 w-[480px] sm:w-[700px] lg:w-[900px] h-[480px] sm:h-[700px] lg:h-[900px] -z-0"
      >
        <motion.div
          animate={{
            x: [0, -20, 18, 0],
            y: [0, 22, -15, 0],
            scale: [0.96, 1.05, 0.98, 0.96],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full rounded-full bg-[#FA8A61]/30 blur-[120px] sm:blur-[170px]"
        />
      </div>

      {/* Secciones integradas en la transición fluida */}
      <div className="relative z-10">
        <Hero />
        <ClientsSection />
        <PhilosophySection />
      </div>
    </div>
  );
}
