"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";
import { Sparkles } from "lucide-react";
import { FloatingCard } from "@/lib/data/service-pages/types";

interface ServiceHeroProps {
  heading: string;
  description: string;
  ctaText: string;
  imagePath: string;
  badge?: string;
  stats?: { num: string; label: string }[];
  sideContent?: React.ReactNode;
  floatingCards?: FloatingCard[];
}

const renderStatNum = (num: string) => {
  const match = num.match(/^([0-9\.,]*)(.*)$/);
  if (match) {
    const val = match[1];
    const unit = match[2];
    return (
      <>
        {val}
        {unit && <span className="text-primary font-bold ml-0.5">{unit}</span>}
      </>
    );
  }
  return num;
};

export default function ServiceHero({
  heading,
  description,
  ctaText,
  imagePath,
  badge,
  stats,
  sideContent,
}: ServiceHeroProps) {
  const { openModal } = useModal();



  return (
    <section className="relative w-full bg-white overflow-hidden select-none">
      {/* Enhanced background accents with more depth */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-sky-50 via-blue-50/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl" />
      </div>

      {/* Main layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <div className="flex flex-col">
            {/* Enhanced service badge with animation */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6 w-fit animate-fade-in">
                <Sparkles className="w-3.5 h-3.5" />
                {badge}
              </div>
            )}

            {/* Enhanced heading with better typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.1] text-slate-950 mb-6">
              {heading.split("&").map((part, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && (
                    <span className="block sm:inline lg:block text-primary"> &amp; </span>
                  )}
                  {part.replace("&", "").trim()}
                </React.Fragment>
              ))}
            </h1>

            {/* Enhanced description with better readability */}
            <p className="text-base sm:text-lg text-slate-600 font-medium mb-8 leading-relaxed max-w-xl">
              {description}
            </p>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold bg-primary hover:bg-primary-dark text-white rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
              >
                {ctaText}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              {sideContent && (
                <a
                  href="#coaching"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  View Program
                </a>
              )}
            </div>

            {/* Enhanced stats with better visual hierarchy */}
            {stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-slate-100">
                {stats.map((stat, idx) => (
                  <div key={idx} className="group hover:bg-slate-50/50 p-2 rounded-lg transition-all duration-200">
                    <div className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-none group-hover:text-primary transition-colors">
                      {renderStatNum(stat.num)}
                    </div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-2 group-hover:text-slate-600 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: Clean Visual Area ── */}
          <div className="relative w-full flex flex-col items-center justify-center lg:items-end">
            {sideContent ? (
              /* If sideContent is provided (e.g. IMAT countdown card), render it without overlays */
              <div className="relative w-full max-w-[520px]">
                <div className="w-full rounded-2xl overflow-hidden border border-primary/20 shadow-xl shadow-primary/10 relative z-10 bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                  {sideContent}
                </div>
              </div>
            ) : imagePath ? (
              /* Render the clean, data-driven image blending with the background */
              <div className="relative w-full max-w-[760px] flex items-center justify-center lg:justify-end">
                {/* Subtle soft glow background element behind the image */}
                <div className="absolute inset-4 -z-10 rounded-full bg-sky-100/50 blur-3xl" />
                <Image
                  src={imagePath}
                  alt={`${heading} visual`}
                  width={900}
                  height={560}
                  priority
                  className="h-auto w-full max-w-[720px] object-contain"
                />
              </div>
            ) : null}
          </div>

        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(1deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-1 { animation: float-1 4s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 5s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 3.5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
} 