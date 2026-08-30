"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ItemData {
  id: string;
  title: string;
  number?: string;
  description: string;
}

const servicesData: ItemData[] = [
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Estrategia de crecimiento y optimización de conversión basada en datos, no en intuición. Se audita lo que existe, se identifican los puntos donde se pierden clientes, y se ajusta con acceso directo a lo construido.",
  },
  {
    id: "diseno",
    title: "Diseño",
    description:
      "Interfaces y sistemas visuales diseñados para vender, no solo para verse prolijos. Cada decisión de UI se toma sabiendo cómo se va a construir en código y qué tiene que provocar en quien lo usa.",
  },
  {
    id: "produccion",
    title: "Producción",
    description:
      "Video y contenido audiovisual con un objetivo de negocio detrás de cada corte. Piezas de producto, campañas o contenido de conversión, sosteniendo el mismo mensaje que ya está construido en la marca.",
  },
  {
    id: "programacion",
    title: "Programación",
    description:
      "Software y plataformas construidos para funcionar, no solo para lucir bien en una demo. Arquitectura pensada para escalar, código legible por cualquier equipo futuro, e interfaz ya integrada al sistema de diseño de marca.",
  },
];

const workProcessData: ItemData[] = [
  {
    id: "estrategia",
    title: "Estrategia",
    number: "01",
    description:
      "Diagnóstico del punto de partida y definición del objetivo medible del proyecto. Alcance, plazo y precio quedan cerrados por escrito antes de tocar una línea de código.",
  },
  {
    id: "direccion",
    title: "Dirección",
    number: "02",
    description:
      "Arquitectura técnica y sistema visual definidos como una sola decisión, no en paralelo. Lo que se diseña ya considera cómo se va a construir — y viceversa.",
  },
  {
    id: "ejecucion",
    title: "Ejecución",
    number: "03",
    description:
      "Desarrollo y diseño avanzan en el mismo sprint, no en handoffs secuenciales. Avances reales en checkpoints semanales, con acceso a staging, sin entregas sorpresa al final.",
  },
  {
    id: "optimizacion",
    title: "Optimización",
    number: "04",
    description:
      "El producto sale al mercado y entra en una fase corta de medición antes de escalar. Ajustes con datos reales de uso — puente natural hacia un acompañamiento mensual de crecimiento.",
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
          
          {/* Left Column: Interactive typography list + Mobile FAQ Dropdowns */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col space-y-3 sm:space-y-4 lg:space-y-5">
            {currentItems.map((item) => {
              const isSelected = item.id === selectedId;
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
                      <span>{item.title}</span>
                      {activeTab === "como-trabajo" && item.number && (
                        <span
                          className={`text-[clamp(1.25rem,1.8vw,1.75rem)] font-medium ml-2 sm:ml-3 tracking-[0.08em] translate-y-[0.24em] sm:translate-y-[0.3em] select-none leading-none inline-block transition-colors duration-150 ${
                            isSelected
                              ? "text-[#ff6238]"
                              : "text-white/35 group-hover:text-white/70"
                          }`}
                        >
                          {item.number}
                        </span>
                      )}
                    </span>
                  </button>

                  {/* Mobile-Only Accordion Dropdown (Estilo FAQ) */}
                  <div className="md:hidden overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 12, marginBottom: 16 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
                          transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                          <p className="text-[clamp(1.35rem,4.8vw,1.65rem)] leading-[1.4] text-white/85 font-normal tracking-[-0.015em] pl-3.5 border-l-2 border-[#FA8A61]/70 py-1.5">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop-only side-by-side description */}
          <div className="hidden md:block md:col-span-6 lg:col-span-5 w-full md:pt-3">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeItem.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="text-[clamp(1.75rem,2.5vw,2.4rem)] leading-[1.32] text-white/85 font-normal tracking-[-0.025em] max-w-[620px]"
              >
                {activeItem.description}
              </motion.p>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
