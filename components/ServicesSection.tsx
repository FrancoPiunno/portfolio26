"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ItemData {
  id: string;
  title: string;
  number?: string;
  descriptionLines: string[];
}

const servicesData: ItemData[] = [
  {
    id: "marketing",
    title: "Marketing",
    descriptionLines: [
      "Estrategia de crecimiento y optimización de conversión basada en datos, no en intuición.",
      "Se audita lo que existe, se identifican los puntos donde se pierden clientes, y se ajusta con acceso directo a lo construido.",
    ],
  },
  {
    id: "diseno",
    title: "Diseño",
    descriptionLines: [
      "Interfaces y sistemas visuales diseñados para vender, no solo para verse prolijos.",
      "Cada decisión de UI se toma sabiendo cómo se va a construir en código y qué tiene que provocar en quien lo usa.",
    ],
  },
  {
    id: "produccion",
    title: "Producción",
    descriptionLines: [
      "Video y contenido audiovisual con un objetivo de negocio detrás de cada corte.",
      "Piezas de producto, campañas o contenido de conversión, sosteniendo el mismo mensaje que ya está construido en la marca.",
    ],
  },
  {
    id: "programacion",
    title: "Programación",
    descriptionLines: [
      "Software y plataformas construidos para funcionar, no solo para lucir bien en una demo.",
      "Arquitectura pensada para escalar, código legible por cualquier equipo futuro, e interfaz ya integrada al sistema de diseño de marca.",
    ],
  },
];

const workProcessData: ItemData[] = [
  {
    id: "estrategia",
    title: "Estrategia",
    number: "01",
    descriptionLines: [
      "Diagnóstico del punto de partida y definición del objetivo medible del proyecto.",
      "Alcance, plazo y precio quedan cerrados por escrito antes de tocar una línea de código.",
    ],
  },
  {
    id: "direccion",
    title: "Dirección",
    number: "02",
    descriptionLines: [
      "Arquitectura técnica y sistema visual definidos como una sola decisión, no en paralelo.",
      "Lo que se diseña ya considera cómo se va a construir — y viceversa.",
    ],
  },
  {
    id: "ejecucion",
    title: "Ejecución",
    number: "03",
    descriptionLines: [
      "Desarrollo y diseño avanzan en el mismo sprint, no en handoffs secuenciales.",
      "Avances reales en checkpoints semanales, con acceso a staging, sin entregas sorpresa al final.",
    ],
  },
  {
    id: "optimizacion",
    title: "Optimización",
    number: "04",
    descriptionLines: [
      "El producto sale al mercado y entra en una fase corta de medición antes de escalar.",
      "Ajustes con datos reales de uso — puente natural hacia un acompañamiento mensual de crecimiento.",
    ],
  },
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"servicios" | "como-trabajo">("servicios");
  const [activeServiceId, setActiveServiceId] = useState<string>("marketing");
  const [activeProcessId, setActiveProcessId] = useState<string>("estrategia");

  const currentItems = activeTab === "servicios" ? servicesData : workProcessData;
  const selectedId = activeTab === "servicios" ? activeServiceId : activeProcessId;
  const activeItem =
    currentItems.find((item) => item.id === selectedId) || currentItems[0];

  const handleTabClick = (tab: "servicios" | "como-trabajo") => {
    setActiveTab(tab);
  };

  const handleItemClick = (id: string) => {
    if (activeTab === "servicios") {
      setActiveServiceId((prev) => (prev === id ? "" : id));
    } else {
      setActiveProcessId((prev) => (prev === id ? "" : id));
    }
  };

  return (
    <section
      id="servicios"
      className="relative min-h-[100dvh] w-full bg-transparent text-[#FFFFFF] flex flex-col justify-center py-14 sm:py-18 lg:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Top Header Tabs */}
        <div role="tablist" aria-label="Secciones de Servicios y Metodología" className="flex items-center gap-8 sm:gap-14 mb-10 sm:mb-16 lg:mb-20">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "servicios"}
            aria-controls="panel-servicios"
            onClick={() => handleTabClick("servicios")}
            className={`text-[clamp(1.75rem,2.4vw,2.2rem)] tracking-tight transition-colors cursor-pointer select-none ${
              activeTab === "servicios"
                ? "font-bold text-white"
                : "font-light text-white/40 hover:text-white/80"
            }`}
          >
            Servicios
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "como-trabajo"}
            aria-controls="panel-como-trabajo"
            onClick={() => handleTabClick("como-trabajo")}
            className={`text-[clamp(1.75rem,2.4vw,2.2rem)] tracking-tight transition-colors cursor-pointer select-none ${
              activeTab === "como-trabajo"
                ? "font-bold text-white"
                : "font-light text-white/40 hover:text-white/80"
            }`}
          >
            Como trabajo
          </button>
        </div>

        {/* 2-Column Responsive Side-by-Side Layout (Desktop) / Accordion (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Interactive typography list animada palabra por palabra */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col space-y-3 sm:space-y-4 lg:space-y-5">
            {currentItems.map((item, itemIdx) => {
              const isSelected = item.id === selectedId;
              const words = item.title.split(" ");
              return (
                <div key={item.id} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => handleItemClick(item.id)}
                    className="text-left group cursor-pointer w-fit py-0.5 transition-all duration-150"
                  >
                    <span
                      className={`inline-flex items-start text-[clamp(3.4rem,6.8vw,5.8rem)] tracking-[-0.04em] leading-[0.98] select-none transition-all duration-150 ${
                        isSelected
                          ? "font-bold text-white"
                          : "font-extralight text-white/35 hover:text-white/70"
                      }`}
                    >
                      <span className="inline-flex overflow-hidden pb-1">
                        {words.map((word, wIdx) => (
                          <motion.span
                            key={`${activeTab}-${item.id}-w-${wIdx}`}
                            initial={{ opacity: 0, y: 26, filter: "blur(4px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                              duration: 0.48,
                              delay: 0.08 * itemIdx + wIdx * 0.08,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="inline-block mr-[0.26em] last:mr-0 will-change-transform"
                          >
                            {word}
                          </motion.span>
                        ))}
                      </span>
                      {activeTab === "como-trabajo" && item.number && (
                        <span className="overflow-hidden inline-block pb-1">
                          <motion.span
                            key={`${activeTab}-${item.id}-num`}
                            initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                              duration: 0.48,
                              delay: 0.08 * itemIdx + 0.12,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className={`text-[clamp(1.25rem,1.8vw,1.75rem)] font-medium ml-2 sm:ml-3 tracking-[0.08em] translate-y-[0.24em] sm:translate-y-[0.3em] select-none leading-none inline-block transition-colors duration-150 ${
                              isSelected
                                ? "text-[#ff6238]"
                                : "text-white/35 group-hover:text-white/70"
                            }`}
                          >
                            {item.number}
                          </motion.span>
                        </span>
                      )}
                    </span>
                  </button>

                  {/* Mobile-Only Accordion Dropdown (Renglón por renglón) */}
                  <div className="md:hidden overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 12, marginBottom: 16 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
                          transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
                          className="space-y-2 pl-3.5 border-l-2 border-[#FA8A61]/70 py-1.5"
                        >
                          {item.descriptionLines.map((line, lIdx) => (
                            <div key={lIdx} className="overflow-hidden">
                              <motion.p
                                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                  duration: 0.48,
                                  delay: lIdx * 0.11,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="text-[clamp(1.35rem,4.8vw,1.65rem)] leading-[1.4] text-white/85 font-normal tracking-[-0.015em] will-change-transform"
                              >
                                {line}
                              </motion.p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop-only side-by-side description (Renglón por renglón) */}
          <div className="hidden md:block md:col-span-6 lg:col-span-5 w-full md:pt-3">
            <AnimatePresence mode="wait">
              <div
                key={`${activeTab}-${activeItem.id}`}
                className="text-[clamp(1.75rem,2.5vw,2.4rem)] leading-[1.32] text-white/85 font-normal tracking-[-0.025em] max-w-[620px] space-y-3"
              >
                {activeItem.descriptionLines.map((line, lIdx) => (
                  <div key={lIdx} className="overflow-hidden">
                    <motion.p
                      initial={{ opacity: 0, y: 24, filter: "blur(5px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -16, filter: "blur(3px)" }}
                      transition={{
                        duration: 0.52,
                        delay: lIdx * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="block will-change-transform"
                    >
                      {line}
                    </motion.p>
                  </div>
                ))}
              </div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
