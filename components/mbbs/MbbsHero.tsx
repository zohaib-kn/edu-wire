"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";
import { ModalContext } from "@/components/context/ModalContext";
import { MBBSCountry } from "@/lib/data/mbbs";

interface MbbsHeroProps {
  data: MBBSCountry;
}

export default function MbbsHero({ data }: MbbsHeroProps) {
  const modalContext = useContext(ModalContext);
  const openModal = modalContext?.openModal;

  const [bgError, setBgError] = useState(!data.heroBgImage);

  const handleCtaClick = (e: React.MouseEvent) => {
    if (openModal) {
      e.preventDefault();
      openModal();
    }
  };

  // Safe Fallbacks
  const heroTitle = data.heroTitle || `Study MBBS in ${data.country} with EduWire`;
  const heroParagraph =
    data.heroParagraph ||
    data.description ||
    `Get world-class, globally recognized medical education. ${data.country} offers high-quality programs taught in English with excellent clinical exposure. Let EduWire be your partner.`;

  const bgSrc = data.heroBgImage || "";

  // Helper to split the title and highlight the country name
  const highlightCountryName = (title: string, country: string) => {
    const parts = title.split(new RegExp(`(${country})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === country.toLowerCase() ? (
            <span key={index} className="text-[#0D6493] relative inline-block">
              {part}
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#0D6493]/30 rounded-full" />
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#E1EDF8]/20 via-white to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow / Breadcrumb */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493] bg-[#0D6493]/10 px-4 py-1.5 rounded-full inline-block">
                Study MBBS Abroad
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {highlightCountryName(heroTitle, data.country)}
            </h1>

            {/* Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              {heroParagraph}
            </p>

            {/* CTA button */}
            <div className="pt-2">
              {openModal ? (
                <button
                  onClick={handleCtaClick}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D6493] px-8 py-4 text-sm font-bold text-white shadow-md shadow-[#0D6493]/20 hover:bg-[#0c5982] hover:shadow-lg transition-all transform hover:scale-[1.01]"
                >
                  <span>Get Free Counselling</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D6493] px-8 py-4 text-sm font-bold text-white shadow-md hover:bg-[#0c5982] hover:shadow-lg transition-all"
                >
                  <span>Get Free Counselling</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>

            {/* Trust pills under CTA */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "English-taught programs",
                "Scholarship support",
                "Europe-based education",
              ].map((pill, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Premium Visual Composition */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[480px] h-[300px] sm:h-[360px] md:h-[400px]">
              {!bgError && bgSrc ? (
                <Image
                  key={bgSrc}
                  src={bgSrc}
                  alt={`Study MBBS in ${data.country}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  onError={() => setBgError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Globe className="h-16 w-16 text-[#0D6493]/25" />
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
