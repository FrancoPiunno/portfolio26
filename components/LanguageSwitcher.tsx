"use client";

import { motion } from "framer-motion";
import { useLanguage, Language } from "@/context/LanguageContext";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const options: { code: Language; label: string }[] = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
  ];

  return (
    <div
      role="group"
      aria-label="Selector de idioma / Language selector"
      className={`inline-flex items-center p-0 rounded-full overflow-hidden backdrop-blur-md transition-all duration-300 bg-black/[0.04] border border-black/[0.06] select-none ${className}`}
    >
      {options.map((opt) => {
        const isActive = language === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLanguage(opt.code)}
            className={`relative px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[12px] sm:text-[14px] whitespace-nowrap transition-colors duration-200 select-none z-10 cursor-pointer ${
              isActive
                ? "text-[#101010] font-semibold"
                : "text-[#101010]/60 hover:text-[#101010] font-normal"
            }`}
            aria-pressed={isActive}
          >
            {isActive && (
              <motion.div
                layoutId="active-language-pill"
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 rounded-full bg-white shadow-sm -z-10"
              />
            )}
            <span className="whitespace-nowrap tracking-wide">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
