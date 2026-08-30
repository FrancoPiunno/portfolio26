"use client";

import { ArrowUpRight } from "lucide-react";
import { openContactModal } from "./ContactModal";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative min-h-[100dvh] w-full bg-transparent text-[#FFFFFF] flex flex-col justify-center py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto w-full relative z-10">

        {/* Main Content: Headline, Description and CTA Button */}
        <div className="w-full max-w-[1280px] space-y-8 sm:space-y-10">

          {/* Headline & Description */}
          <div className="space-y-6 sm:space-y-10">
            <h2 className="text-[clamp(4.75rem,12.5vw,7.2rem)] font-normal leading-[0.88] tracking-[-0.045em] text-white">
              ¿Tenés un proyecto <br />
              <span className="font-medium text-white">en mente?</span>
            </h2>
            <p className="text-[clamp(1.5rem,2.2vw,2rem)] text-white/85 font-normal leading-[1.35] max-w-[860px] pt-1">
              Trabajemos juntos para transformar tu idea en una experiencia digital sólida, estética y orientada a resultados reales.
            </p>
          </div>

          {/* 'Trabajemos juntos' Primary Button (Full Rounded) */}
          <div className="pt-2">
            <button
              type="button"
              onClick={openContactModal}
              className="group inline-flex items-center gap-3.5 bg-[#FA8A61] hover:bg-[#F87747] text-[#101010] font-semibold text-[19px] sm:text-[21px] px-9 py-5 rounded-full transition-all duration-200 shadow-[0_4px_28px_rgba(250,138,97,0.32)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer select-none"
            >
              <span>Trabajemos juntos</span>
              <ArrowUpRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
