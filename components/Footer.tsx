"use client";

import { Globe } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-transparent text-[#FFFFFF] border-t border-white/[0.06] pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-[1380px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 lg:gap-16">

        {/* Left Column: Argentine Badge & Copyright */}
        <div className="flex flex-col justify-between space-y-6 sm:space-y-8">
          {/* Bordered Badge */}
          <div className="border border-white/25 rounded-md px-5 py-3.5 flex items-center gap-4 w-fit bg-white/[0.02]">
            <Globe className="w-8 h-8 text-white stroke-[1.2]" />
            <div className="text-[12px] sm:text-[13px] font-medium tracking-wider leading-[1.3] text-white uppercase select-none">
              <p>Argentino</p>
              <p>Trabajando para</p>
              <p>El mundo</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-[13px] sm:text-[14px] text-white/70 font-normal select-none">
            @{currentYear} Franco Piunno, Todos los derechos reservados.
          </p>
        </div>

        {/* Right Column: fran. logo, social links & email */}
        <div className="flex flex-col items-start space-y-5 sm:space-y-6">
          {/* Large fran. logo in black italic */}
          <Link
            href="/"
            className="text-[clamp(2.75rem,4vw,3.9rem)] font-black italic tracking-tight text-white select-none leading-none hover:opacity-90 transition-opacity"
          >
            fran.
          </Link>

          {/* Social Links & Email */}
          <div className="space-y-2">
            <div className="flex items-center gap-6 text-[14px] sm:text-[15px] font-normal text-white">
              <a
                href="https://www.instagram.com/franpi1_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FA8A61] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.behance.net/francopiunno"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FA8A61] transition-colors"
              >
                Behance
              </a>
              <a
                href="https://www.linkedin.com/in/franco-piunno/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FA8A61] transition-colors"
              >
                Linkedin
              </a>
            </div>

            {/* Email link */}
            <p>
              <a
                href="mailto:piunnofranco@gmail.com"
                className="text-[14px] sm:text-[15px] text-white/80 hover:text-white transition-colors"
              >
                piunnofranco@gmail.com
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
