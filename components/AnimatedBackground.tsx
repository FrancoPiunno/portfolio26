"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [darkProgress, setDarkProgress] = useState(0);

  useEffect(() => {
    let lastProgress = -1;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      
      // En la parte superior de la página (Hero y Selección de clientes), el fondo SIEMPRE es blanco puro (darkProgress = 0)
      if (scrollY < 80) {
        if (lastProgress !== 0) {
          lastProgress = 0;
          setDarkProgress(0);
        }
        return;
      }

      const el = document.getElementById("sobre-mi") || document.getElementById("siguiente-seccion");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Inicia la transición cuando Filosofía asoma por abajo (rect.top <= windowH * 0.95)
      // y llega a 100% negro cuando Filosofía está en el tercio superior (rect.top <= windowH * 0.25)
      const startY = windowH * 0.95;
      const endY = windowH * 0.25;

      const progress = Math.min(
        Math.max((startY - rect.top) / (startY - endY), 0),
        1
      );

      if (Math.abs(progress - lastProgress) > 0.002) {
        lastProgress = progress;
        setDarkProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // RAF loop para sincronizar en cada frame con Lenis smooth scroll
    let rafId: number;
    const loop = () => {
      handleScroll();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#FFFFFF]"
    >
      {/* Glow 1: Superior Derecho (Hero) - Flotación orgánica sutil */}
      <div className="absolute -top-28 -right-28 w-[500px] sm:w-[750px] lg:w-[950px] h-[500px] sm:h-[750px] lg:h-[950px] z-10">
        <motion.div
          animate={{
            x: [0, 26, -20, 0],
            y: [0, -22, 18, 0],
            scale: [1, 1.06, 0.96, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full rounded-full bg-[#FA8A61]/35 blur-[120px] sm:blur-[180px]"
        />
      </div>

      {/* Glow 2: Centro/Inferior Izquierdo (Trabajos / Transición) - Flotación orgánica sutil */}
      <div className="absolute top-[38%] -left-32 w-[480px] sm:w-[700px] lg:w-[900px] h-[480px] sm:h-[700px] lg:h-[900px] z-10">
        <motion.div
          animate={{
            x: [0, -22, 20, 0],
            y: [0, 24, -16, 0],
            scale: [0.96, 1.05, 0.98, 0.96],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full rounded-full bg-[#FA8A61]/30 blur-[120px] sm:blur-[180px]"
        />
      </div>

      {/* Capa de Fondo Oscuro: Transiciona de 0 a 1 de opacidad suavemente al scrollear de Trabajo a Filosofía */}
      <div
        style={{ opacity: darkProgress }}
        className="absolute inset-0 bg-[#0F0F0F] z-20 will-change-[opacity]"
      />
    </div>
  );
}
