"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { openContactModal } from "./ContactModal";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  // Subtle mouse parallax for ambient lights
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 25 });

  const ambientShiftX = useTransform(springX, [-0.5, 0.5], [-25, 25]);
  const ambientShiftY = useTransform(springY, [-0.5, 0.5], [-25, 25]);
  const ambientShiftXReverse = useTransform(springX, [-0.5, 0.5], [20, -20]);
  const ambientShiftYReverse = useTransform(springY, [-0.5, 0.5], [20, -20]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("trabajo") || document.getElementById("siguiente-seccion");
    const lenisInstance = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement | number, opts?: Record<string, unknown>) => void } }).lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(nextSection || window.innerHeight, { duration: 1.4 });
    } else if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactEl = document.getElementById("contacto");
    if (contactEl) {
      const lenisInstance = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement, opts?: Record<string, unknown>) => void } }).lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(contactEl, { offset: -30, duration: 1.3 });
      } else {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full bg-transparent text-[#101010] flex flex-col justify-between pt-16 sm:pt-20 lg:pt-20 xl:pt-24 pb-3 sm:pb-6 lg:pb-14 xl:pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* ─── FONDO ANIMADO SÚPER SUTIL ─── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
        {/* 1. Malla de Puntos Arquitectónica con Difuminado Radial Suave */}
        <div
          className="absolute inset-0 opacity-[0.28] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_15%,transparent_85%)]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(16, 16, 16, 0.22) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* 2. Resplandor / Orb 1: Cálido Naranja Suave - Flotando suavemente con interacción al mouse */}
        <motion.div
          style={{ x: ambientShiftX, y: ambientShiftY }}
          className="absolute top-[-5%] right-[10%] w-[380px] sm:w-[540px] lg:w-[680px] h-[380px] sm:h-[540px] lg:h-[680px]"
        >
          <motion.div
            animate={{
              scale: [1, 1.12, 0.95, 1],
              opacity: [0.32, 0.48, 0.36, 0.32],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full rounded-full bg-gradient-to-tr from-[#FA8A61]/35 via-[#FDBA74]/25 to-transparent blur-[90px] sm:blur-[140px]"
          />
        </motion.div>

        {/* 3. Resplandor / Orb 2: Acento Melocotón / Luz Suave a la izquierda */}
        <motion.div
          style={{ x: ambientShiftXReverse, y: ambientShiftYReverse }}
          className="absolute bottom-[8%] left-[-8%] sm:left-[2%] w-[320px] sm:w-[460px] lg:w-[580px] h-[320px] sm:h-[460px] lg:h-[580px]"
        >
          <motion.div
            animate={{
              scale: [0.95, 1.08, 0.92, 0.95],
              opacity: [0.22, 0.36, 0.26, 0.22],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="w-full h-full rounded-full bg-gradient-to-br from-[#FA8A61]/25 via-[#FED7AA]/30 to-transparent blur-[85px] sm:blur-[130px]"
          />
        </motion.div>

        {/* 4. Trazos y Arcos SVG Sutiles (Concepto Arquitectura Digital) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.14] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FA8A61" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#101010" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Círculo de coordenadas orbitales en la esquina superior derecha */}
          <motion.circle
            cx="82%"
            cy="28%"
            r="160"
            fill="none"
            stroke="url(#heroLineGrad)"
            strokeWidth="1"
            strokeDasharray="4 8"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "82% 28%" }}
          />

          {/* Línea diagonal técnica sutil */}
          <motion.line
            x1="5%"
            y1="85%"
            x2="35%"
            y2="30%"
            stroke="url(#heroLineGrad)"
            strokeWidth="0.8"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, 48] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* 5. Micro-Partículas / Nodos Flotantes Ambientales */}
        {mounted && (
          <div className="absolute inset-0">
            {[
              { top: "22%", left: "14%", delay: 0, duration: 7, size: 3 },
              { top: "68%", left: "28%", delay: 2.2, duration: 8.5, size: 2.5 },
              { top: "35%", left: "48%", delay: 1.1, duration: 6.5, size: 3.5 },
              { top: "78%", left: "62%", delay: 3.4, duration: 9, size: 2 },
              { top: "18%", left: "76%", delay: 1.8, duration: 7.8, size: 3 },
              { top: "52%", left: "88%", delay: 2.9, duration: 8.2, size: 2.5 },
            ].map((pt, idx) => (
              <motion.div
                key={`hero-particle-${idx}`}
                style={{
                  top: pt.top,
                  left: pt.left,
                  width: `${pt.size}px`,
                  height: `${pt.size}px`,
                }}
                className="absolute rounded-full bg-[#FA8A61]/45"
                animate={{
                  y: [0, -18, 0],
                  x: [0, 8, 0],
                  opacity: [0.15, 0.65, 0.15],
                  scale: [0.8, 1.3, 0.8],
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

      <div className="max-w-[1380px] mx-auto w-full flex-1 flex flex-col justify-between relative z-10">

        {/* Main Grid / Stack: Mobile (1. Headline -> 2. Photo -> 3. CTAs) | Desktop (2 columns) */}
        <div className="flex flex-col justify-between lg:grid lg:grid-cols-12 lg:grid-rows-[auto_1fr] gap-4 sm:gap-6 lg:gap-x-4 flex-1 h-full min-h-0">

          {/* 1. Mobile: Headline Arriba | Desktop: Saludo y Descripción (Col 1-7 Row 1) */}
          <div className="order-1 lg:order-none lg:col-span-7 lg:col-start-1 lg:row-start-1 self-start space-y-2 max-w-[560px] pt-3 sm:pt-4 lg:pt-1">
            {/* Solo en Mobile: Headline en la parte superior */}
            <div className="block lg:hidden">
              <h1 className="text-[clamp(2.45rem,7.8vw,3.6rem)] font-normal leading-[0.94] tracking-[-0.035em] text-[#101010]">
                Arquitecto digital <br />
                <span className="font-normal">a tus servicios</span>
              </h1>
            </div>

            {/* Solo en Desktop: Saludo y Descripción */}
            <div className="hidden lg:block space-y-2">
              <h2 className="text-[clamp(1.15rem,1.4vw,1.4rem)] font-bold text-[#101010] tracking-tight">
                Hola soy Franco Piunno.
              </h2>
              <p className="text-[clamp(1rem,1.18vw,1.18rem)] text-[#101010]/85 leading-[1.48] font-normal">
                Elimino la fricción de coordinar programadores, diseñadores, editores y marketers centralizando todo el ciclo: código, diseño, video y adquisición bajo una sola visión estratégica.
              </p>
            </div>
          </div>

          {/* 2. Hero Portrait Image (Mobile Order 2 | Desktop Col 8-12 Rows 1-2) */}
          <div className="order-2 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 relative flex-1 flex items-center lg:items-end justify-center lg:justify-end self-center lg:self-end h-full w-full my-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 1.35,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative w-[75vw] sm:w-[55vw] lg:w-[38vw] xl:w-[40vw] 2xl:w-[42vw] h-[45vh] sm:h-[50vh] lg:h-[82vh] xl:h-[86vh] 2xl:h-[90vh] -mb-1 sm:-mb-4 lg:-mb-14 xl:-mb-20 pointer-events-none lg:scale-[1.25] xl:scale-[1.28] 2xl:scale-[1.32] origin-bottom lg:origin-bottom-right"
            >
              <Image
                src="/images/my.png"
                alt="Franco Piunno - Arquitecto Digital"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain object-center lg:object-bottom select-none mix-blend-luminosity"
              />
            </motion.div>
          </div>

          {/* 3. Mobile Order 3 (CTAs) | Desktop Col 1-7 Row 2 (Headline + CTAs) */}
          <div className="order-3 lg:order-none lg:col-span-7 lg:col-start-1 lg:row-start-2 mt-auto self-end mb-1 sm:mb-2 lg:mb-10 xl:mb-14 w-full pt-2">
            {/* Main Headline (Solo en Desktop) */}
            <div className="hidden lg:block mb-4 sm:mb-5 lg:mb-6">
              <h1 className="text-[clamp(2.65rem,5.2vw,5.5rem)] font-normal leading-[0.93] tracking-[-0.035em] text-[#101010]">
                Arquitecto digital <br />
                <span className="font-normal">a tus servicios</span>
              </h1>
            </div>

            {/* CTAs Row (Presente en Mobile y Desktop al fondo) */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 pt-1 sm:pt-2">
              {/* Primary Orange Pill CTA */}
              <button
                type="button"
                onClick={openContactModal}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#FA8A61] hover:bg-[#F87747] text-[#101010] font-semibold text-[16px] sm:text-[18px] lg:text-[19px] px-8 sm:px-9 py-4 sm:py-4.5 rounded-full transition-all duration-200 shadow-[0_4px_18px_rgba(250,138,97,0.32)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer select-none"
              >
                <span>Trabajemos juntos</span>
                <ArrowUpRight className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Scroll Trigger */}
              <button
                onClick={scrollToNextSection}
                className="group inline-flex items-center gap-2.5 text-[#101010] text-[15px] sm:text-[17px] font-medium hover:opacity-75 transition-all cursor-pointer py-3 select-none"
              >
                <span>Scrollea para ver más</span>
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="inline-block"
                >
                  <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2] text-[#101010]" />
                </motion.span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
