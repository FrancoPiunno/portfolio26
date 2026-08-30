"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, X } from "lucide-react";

export const CONTACT_MODAL_EVENT = "open-contact-modal-event";

export function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function openContactModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CONTACT_MODAL_EVENT));
  }
}

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleOpen = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 768) {
        setIsOpen(true);
      }
    };
    window.addEventListener(CONTACT_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(CONTACT_MODAL_EVENT, handleOpen);
  }, []);

  // Bloquear scroll de fondo cuando el modal está abierto
  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (lenis && typeof lenis.stop === "function") lenis.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (lenis && typeof lenis.start === "function") lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (lenis && typeof lenis.start === "function") lenis.start();
    };
  }, [isOpen]);

  // Tecla Escape para cerrar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!mounted) return null;

  const email = "piunnofranco@gmail.com";
  const whatsappUrl = "https://wa.me/5491127964772?text=Hola%20Franco,%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.";

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md select-none"
          onClick={() => setIsOpen(false)}
        >
          {/* Dialog Card: Sin trazo (border-0 ring-0) y Sin rounded (rounded-none) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#121212] text-white p-7 sm:p-10 rounded-none border-0 ring-0 outline-none shadow-2xl overflow-hidden flex flex-col space-y-6"
          >
            {/* Botón Cerrar (Sin rounded) */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 text-white/70 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] rounded-none transition-colors cursor-pointer"
              title="Cerrar"
            >
              <X className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Encabezado */}
            <div className="space-y-2 pr-6">
              <h3 className="text-[clamp(2rem,3.8vw,2.75rem)] font-bold tracking-tight text-white leading-tight">
                Trabajemos juntos
              </h3>
              <p className="text-[14px] sm:text-[15.5px] text-white/70 font-normal leading-relaxed">
                ¿Por qué medio preferís contactarme para hablar de tu proyecto?
              </p>
            </div>

            {/* Opciones de Contacto (WhatsApp y Email) */}
            <div className="flex flex-col space-y-3.5 pt-2">
              {/* 1. Opción WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between p-4.5 sm:p-5 bg-[#25D366] hover:bg-[#20bd5a] text-[#101010] rounded-none border-0 ring-0 outline-none transition-all cursor-pointer shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <WhatsAppIcon className="w-6 h-6 fill-current" />
                  <div className="text-left">
                    <p className="text-[16px] sm:text-[17px] font-bold leading-tight">WhatsApp</p>
                    <p className="text-[12px] sm:text-[13px] opacity-85 font-medium">Chat directo e instantáneo</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* 2. Opción Email */}
              <a
                href={`mailto:${email}?subject=Proyecto%20-%20Trabajemos%20juntos`}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between p-4.5 sm:p-5 bg-white/[0.08] hover:bg-white/[0.14] text-white rounded-none border-0 ring-0 outline-none transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <Mail className="w-6 h-6 stroke-[1.8]" />
                  <div className="text-left">
                    <p className="text-[16px] sm:text-[17px] font-bold leading-tight">Email</p>
                    <p className="text-[12px] sm:text-[13px] text-white/60 font-normal">{email}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 stroke-[2.2] text-white/80 group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
