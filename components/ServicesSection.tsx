"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface ItemData {
  id: string;
  title: string;
  number?: string;
  descriptionLines: string[];
}

export function ServicesSection() {
  const { t } = useLanguage();
  const servicesData = t.services.servicesList;
  const workProcessData = t.services.processList;

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
            {t.services.servicesTab}
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
            {t.services.processTab}
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
                    className="text-left group cursor-pointer w-fit max-w-full py-0.5 transition-all duration-150"
                  >
                    <span
                      className={`inline-flex flex-wrap items-baseline text-[clamp(3.4rem,6.8vw,5.8rem)] tracking-[-0.04em] leading-[0.98] select-none transition-all duration-150 ${
                        isSelected
                          ? "font-bold text-white"
                          : "font-extralight text-white/35 hover:text-white/70"
                      }`}
                    >
                      {words.map((word, wIdx) => {
                        const isLastWord = wIdx === words.length - 1;
                        return (
                          <span
                            key={`${activeTab}-${item.id}-w-${wIdx}`}
                            className="inline-flex items-baseline mr-[0.26em] last:mr-0"
                          >
                            <span className="inline-block overflow-hidden pb-1">
                              <motion.span
                                initial={{ opacity: 0, y: 26, filter: "blur(4px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                  duration: 0.48,
                                  delay: 0.08 * itemIdx + wIdx * 0.08,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="inline-block will-change-transform"
                              >
                                {word}
                              </motion.span>
                            </span>

                            {/* El número de paso va acoplado a la última palabra para evitar salto de línea huérfano */}
                            {isLastWord && activeTab === "como-trabajo" && item.number && (
                              <span className="overflow-hidden inline-block pb-1 ml-2 sm:ml-3 self-baseline">
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
                                  className={`text-[clamp(1.25rem,1.8vw,1.75rem)] font-medium tracking-[0.08em] select-none leading-none inline-block transition-colors duration-150 ${
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
                        );
                      })}
                    </span>
                  </button>

                  {/* Mobile-Only Accordion Dropdown (Renglón por renglón) */}
                  <div className="md:hidden overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 8, marginBottom: 14 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
                          transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
                          className="space-y-2 pl-3.5 border-l-2 border-[#FA8A61]/70 py-1"
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
