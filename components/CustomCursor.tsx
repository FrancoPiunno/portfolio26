"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  // Posición instantánea del mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Física de resorte suave para el anillo seguidor (trailing circle)
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Solo habilitar en dispositivos con mouse de precisión (no touch)
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Detección reactiva de elementos interactivos
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(
          "a, button, [role='button'], input, textarea, [data-cursor-hover], .cursor-pointer"
        );

        if (interactiveEl) {
          setIsHovered(true);
          const customText = interactiveEl.getAttribute("data-cursor-text");
          setHoverText(customText || null);
        } else {
          setIsHovered(false);
          setHoverText(null);
        }
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* 1. Punto central reactivo e instantáneo (Dot) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.6 : isHovered ? 0.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FA8A61] shadow-[0_0_8px_rgba(250,138,97,0.8)]"
      />

      {/* 2. Anillo exterior seguidor con física de inercia y cambio de escala */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? (hoverText ? 2.4 : 1.65) : 1,
          borderColor: isHovered ? "rgba(250, 138, 97, 0.9)" : "rgba(250, 138, 97, 0.35)",
          backgroundColor: isHovered ? "rgba(250, 138, 97, 0.12)" : "rgba(250, 138, 97, 0.02)",
          backdropFilter: isHovered ? "blur(1px)" : "none",
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[#FA8A61]/40 flex items-center justify-center"
      >
        {hoverText && (
          <span className="text-[9px] font-bold tracking-wider uppercase text-white select-none scale-75">
            {hoverText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
