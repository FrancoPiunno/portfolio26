"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Mail, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { openContactModal, CONTACT_MODAL_EVENT } from "./ContactModal";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
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

interface NavbarProps {
  activeTab?: string;
}

export function Navbar({ activeTab = "Sobre mi" }: NavbarProps) {
  const [currentTab, setCurrentTab] = useState(activeTab);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [showDesktopCta, setShowDesktopCta] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [logoAnimationKey, setLogoAnimationKey] = useState(0);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);

  // Escuchar evento de modal de contacto para mobile
  useEffect(() => {
    const handleContactEvent = () => {
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        setIsMobileContactOpen(true);
      }
    };
    window.addEventListener(CONTACT_MODAL_EVENT, handleContactEvent);
    return () => window.removeEventListener(CONTACT_MODAL_EVENT, handleContactEvent);
  }, []);

  // Ciclo de animación del logo cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoAnimationKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToHref = (href: string, tabName?: string) => {
    if (tabName) setCurrentTab(tabName);

    if (href === "/" || href === "#hero") {
      const lenis = (window as unknown as { lenis?: { scrollTo: (t: number, o?: Record<string, unknown>) => void } }).lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (href.startsWith("#")) {
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const lenis = (window as unknown as { lenis?: { scrollTo: (t: HTMLElement, o?: Record<string, unknown>) => void } }).lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(targetEl, { offset: -20, duration: 1.2 });
        } else {
          const rect = targetEl.getBoundingClientRect();
          const targetY = window.pageYOffset + rect.top - 20;
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      }
    }
  };

  useEffect(() => {
    let lastPastHero = false;
    let lastDesktopCta = false;
    let lastDark = false;

    const handleScroll = () => {
      // 1. Detectar si entramos en la sección de Contacto
      const contactoEl = document.getElementById("contacto");
      let inContact = false;
      if (contactoEl) {
        const cRect = contactoEl.getBoundingClientRect();
        inContact = cRect.top <= 140;
      }

      // 2. Detectar si pasamos el hero
      const trabajoEl = document.getElementById("trabajo");
      let pastHero = false;
      if (trabajoEl) {
        const rect = trabajoEl.getBoundingClientRect();
        pastHero = rect.top <= window.innerHeight * 0.45;
      } else {
        pastHero = window.scrollY > window.innerHeight * 0.65;
      }

      // Mobile Navbar: Visible desde que pasamos el Hero hasta el final (Contacto y Footer incluidos)
      if (pastHero !== lastPastHero) {
        lastPastHero = pastHero;
        setIsScrolledPastHero(pastHero);
      }

      // Desktop CTA: Se oculta en Hero y en Contacto
      const desktopCtaVisible = pastHero && !inContact;
      if (desktopCtaVisible !== lastDesktopCta) {
        lastDesktopCta = desktopCtaVisible;
        setShowDesktopCta(desktopCtaVisible);
      }

      // 3. Detectar si entramos en la zona oscura (Filosofía / sobre-mi en adelante)
      const darkSection = document.getElementById("sobre-mi") || document.getElementById("siguiente-seccion");
      if (darkSection) {
        const rect = darkSection.getBoundingClientRect();
        const dark = rect.top <= 70;
        if (dark !== lastDark) {
          lastDark = dark;
          setIsDarkBg(dark);
        }
      }

      // 4. ScrollSpy para pestaña activa
      const sobreMiEl = document.getElementById("sobre-mi");

      if (contactoEl && contactoEl.getBoundingClientRect().top <= window.innerHeight * 0.5) {
        setCurrentTab("Contacto");
      } else if (sobreMiEl && sobreMiEl.getBoundingClientRect().top <= window.innerHeight * 0.5) {
        setCurrentTab("Sobre mi");
      } else if (trabajoEl && trabajoEl.getBoundingClientRect().top <= window.innerHeight * 0.5) {
        setCurrentTab("Trabajo");
      } else {
        setCurrentTab("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let rafId: number;
    const loop = () => {
      handleScroll();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const navItems = [
    { name: "Trabajo", href: "#trabajo" },
    { name: "Sobre mi", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* ─── TOP HEADER (Brand Logo + Desktop Navigation) ─── */}
      <header className="fixed top-0 left-0 right-0 z-40 w-full pt-6 sm:pt-8 pb-4 px-6 sm:px-10 lg:px-16 transition-all duration-300 pointer-events-none">
        <div className="max-w-[1380px] mx-auto relative flex items-center justify-between pointer-events-auto">
          
          {/* Brand Logo con animación escalonada que se repite cada 5s */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToHref("/", "");
            }}
            className={`text-[clamp(1.85rem,2.4vw,2.4rem)] font-black italic tracking-tight select-none transition-colors duration-300 hover:scale-[1.02] z-20 cursor-pointer inline-flex items-baseline overflow-hidden ${
              isDarkBg ? "text-white" : "text-[#101010]"
            }`}
          >
            {["f", "r", "a", "n", "."].map((char, index) => (
              <motion.span
                key={`${logoAnimationKey}-${index}`}
                initial={{ opacity: 0, y: 18, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.32,
                  delay: logoAnimationKey === 0 ? 1.15 + index * 0.08 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </Link>

          {/* Desktop Center / Right Nav Menu */}
          <nav
            className={`hidden md:flex items-center p-0 rounded-full overflow-hidden backdrop-blur-md z-20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isDarkBg
                ? "bg-white/[0.08] border border-white/[0.10]"
                : "bg-black/[0.04] border border-black/[0.06]"
            } ${
              isScrolledPastHero
                ? "absolute left-1/2 -translate-x-1/2"
                : "mr-0 ml-auto"
            }`}
          >
            {navItems.map((item) => {
              const isActive = currentTab === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHref(item.href, item.name);
                  }}
                  className={`relative px-5 py-2.5 rounded-full text-[14px] sm:text-[15px] whitespace-nowrap transition-colors duration-200 select-none z-10 cursor-pointer ${
                    isActive
                      ? isDarkBg
                        ? "text-white font-semibold"
                        : "text-[#101010] font-semibold"
                      : isDarkBg
                      ? "text-white/60 hover:text-white font-normal"
                      : "text-[#101010]/60 hover:text-[#101010] font-normal"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-navbar-pill"
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute inset-0 rounded-full -z-10 ${
                        isDarkBg ? "bg-white/[0.16]" : "bg-white"
                      }`}
                    />
                  )}
                  <span className="whitespace-nowrap">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center gap-4 z-20">
            <div
              className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                showDesktopCta
                  ? "opacity-100 scale-100 pointer-events-auto translate-x-0"
                  : "opacity-0 scale-90 pointer-events-none translate-x-4 w-0 overflow-hidden"
              }`}
            >
              <button
                type="button"
                onClick={openContactModal}
                className="group inline-flex items-center gap-1.5 bg-[#FA8A61] hover:bg-[#F87747] text-[#101010] font-medium text-[15px] px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer select-none"
              >
                <span>Trabajemos juntos</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── MOBILE BOTTOM BAR (< md) - Oculto en Hero, aparece en Trabajo ─── */}
      <AnimatePresence>
        {isScrolledPastHero && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.92 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-2.5 sm:gap-3 pointer-events-auto select-none"
          >
            <AnimatePresence mode="wait">
              {!isMobileContactOpen ? (
                /* Estado 1: Navbar Regular */
                <motion.div
                  key="mobile-nav-bar"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2.5 sm:gap-3"
                >
                  {/* Navbar idéntico exactamente al de desktop con whitespace-nowrap */}
                  <nav
                    className={`flex items-center flex-nowrap p-0 rounded-full overflow-hidden backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 ${
                      isDarkBg
                        ? "bg-white/[0.08] border border-white/[0.10]"
                        : "bg-black/[0.04] border border-black/[0.06]"
                    }`}
                  >
                    {navItems.map((item) => {
                      const isActive = currentTab === item.name;
                      return (
                        <a
                          key={`mobile-nav-${item.name}`}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToHref(item.href, item.name);
                          }}
                          className={`relative px-3.5 sm:px-5 py-2.5 rounded-full text-[13.5px] sm:text-[15px] whitespace-nowrap shrink-0 transition-colors duration-200 select-none z-10 cursor-pointer ${
                            isActive
                              ? isDarkBg
                                ? "text-white font-semibold"
                                : "text-[#101010] font-semibold"
                              : isDarkBg
                              ? "text-white/60 hover:text-white font-normal"
                              : "text-[#101010]/60 hover:text-[#101010] font-normal"
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="active-mobile-navbar-pill"
                              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                              className={`absolute inset-0 rounded-full -z-10 ${
                                isDarkBg ? "bg-white/[0.16]" : "bg-white"
                              }`}
                            />
                          )}
                          <span className="whitespace-nowrap">{item.name}</span>
                        </a>
                      );
                    })}
                  </nav>

                  {/* Botón Circular 'Trabajemos juntos' AFUERA del navbar */}
                  <button
                    type="button"
                    onClick={() => setIsMobileContactOpen(true)}
                    className="w-11 h-11 rounded-full bg-[#FA8A61] hover:bg-[#F87747] active:scale-90 text-[#101010] flex items-center justify-center transition-all shadow-[0_4px_18px_rgba(250,138,97,0.38)] cursor-pointer shrink-0 select-none"
                    aria-label="Trabajemos juntos"
                  >
                    <ArrowUpRight className="w-5 h-5 stroke-[2.4]" />
                  </button>
                </motion.div>
              ) : (
                /* Estado 2: Navbar transformado en Dialog de Contacto Transparente (Vertical y Más Grande) */
                <motion.div
                  key="mobile-contact-bar"
                  initial={{ opacity: 0, scale: 0.95, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 8 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-end gap-2.5 w-[calc(100vw-2.5rem)] max-w-[340px]"
                >
                  {/* Contenedor transparente vertical con el mismo estilo del navbar */}
                  <div
                    className={`flex-1 flex flex-col gap-2 p-2 rounded-2xl backdrop-blur-xl transition-all duration-500 shadow-2xl ${
                      isDarkBg
                        ? "bg-[#181818]/90 border border-white/15 text-white"
                        : "bg-white/90 border border-black/10 text-[#101010]"
                    }`}
                  >
                    {/* Opción WhatsApp (Vertical Arriba - Sin fondo, solo texto e icono) */}
                    <a
                      href="https://wa.me/5491127964772?text=Hola%20Franco,%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileContactOpen(false)}
                      className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-[17px] sm:text-[18px] font-bold text-[#25D366] hover:opacity-80 active:scale-[0.98] transition-all select-none cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <WhatsAppIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-current" />
                        <span>WhatsApp</span>
                      </div>
                      <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.4] opacity-80" />
                    </a>

                    {/* Opción Email (Vertical Abajo - Sin fondo, solo texto e icono + email visible abajo) */}
                    <div className="flex flex-col">
                      <a
                        href="mailto:piunnofranco@gmail.com?subject=Proyecto%20-%20Trabajemos%20juntos"
                        onClick={() => setIsMobileContactOpen(false)}
                        className={`flex items-center justify-between w-full px-4 py-2 rounded-xl text-[17px] sm:text-[18px] font-bold active:scale-[0.98] transition-all select-none cursor-pointer ${
                          isDarkBg
                            ? "text-white hover:text-white/80"
                            : "text-[#101010] hover:text-[#101010]/80"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2]" />
                          <span>Email</span>
                        </div>
                        <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.4] opacity-80" />
                      </a>
                      <a
                        href="mailto:piunnofranco@gmail.com?subject=Proyecto%20-%20Trabajemos%20juntos"
                        onClick={() => setIsMobileContactOpen(false)}
                        className={`px-4 text-[12.5px] font-normal -mt-0.5 pb-1 select-none hover:underline ${
                          isDarkBg ? "text-white/70" : "text-[#101010]/70"
                        }`}
                      >
                        piunnofranco@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Botón Circular para Cerrar / Volver */}
                  <button
                    type="button"
                    onClick={() => setIsMobileContactOpen(false)}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 select-none active:scale-90 bg-[#FA8A61] hover:bg-[#F87747] text-[#101010] shadow-[0_4px_18px_rgba(250,138,97,0.38)] mb-0.5"
                    aria-label="Cerrar opciones de contacto"
                    title="Volver"
                  >
                    <X className="w-5 h-5 stroke-[2.4]" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
