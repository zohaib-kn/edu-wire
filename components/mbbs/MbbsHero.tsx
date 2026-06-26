"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wallet, Award, Clock, Globe, Shield, Coins } from "lucide-react";
import { ModalContext } from "@/components/context/ModalContext";
import { MBBSCountry } from "@/lib/data/mbbs";

interface MbbsHeroProps {
  data: MBBSCountry;
}

export default function MbbsHero({ data }: MbbsHeroProps) {
  const modalContext = useContext(ModalContext);
  const openModal = modalContext?.openModal;

  const [bgError, setBgError] = useState(!data.heroBgImage);
  const [cutoutError, setCutoutError] = useState(false);
  const [flagError, setFlagError] = useState(false);

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

  const flagSrc = data.flagIcon || `/images/flags/${data.slug}.png`;
  const bgSrc = data.heroBgImage || "";
  const cutoutSrc = data.heroCutoutImage || "/images/female-doctor.png";

  // If a country does not have floating badges, we dynamically generate 3 compact badges using the factsheet data
  const badges = data.floatingBadges || [
    { label: data.duration, sublabel: "Program", iconName: "Clock" },
    { label: data.feeRange.split("/")[0].trim().split(" ")[0] || "Affordable", sublabel: "Fees", iconName: "Wallet" },
    { label: data.language, sublabel: "Medium", iconName: "Globe" },
  ];

  // Icon selector helper
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "Wallet":
        return <Wallet className="h-5 w-5 text-[#0D6493]" />;
      case "Award":
        return <Award className="h-5 w-5 text-amber-500" />;
      case "CircleDollarSign":
      case "Stipend":
        return <Coins className="h-5 w-5 text-emerald-600" />;
      case "Clock":
        return <Clock className="h-5 w-5 text-[#0D6493]" />;
      case "Globe":
        return <Globe className="h-5 w-5 text-[#0D6493]" />;
      default:
        return <Shield className="h-5 w-5 text-[#0D6493]" />;
    }
  };

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
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[420px] h-[340px] sm:h-[400px] md:h-[440px] flex items-center justify-center">
              
              {/* Outer decorative dashed ring */}
              <div className="absolute w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-[#0D6493]/25 animate-[spin_100s_linear_infinite]" />
              <div className="absolute w-[310px] h-[310px] sm:w-[370px] sm:h-[370px] rounded-full border border-dotted border-amber-500/20" />

              {/* Circular City Background Image frame */}
              <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                {!bgError ? (
                  <Image
                    key={bgSrc}
                    src={bgSrc}
                    alt={`${data.country} background visual`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    onError={() => setBgError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0D6493]/15 to-[#E1EDF8] flex items-center justify-center">
                    <Globe className="h-12 w-12 text-[#0D6493]/25" />
                  </div>
                )}
                {/* Visual Overlay to blend background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D6493]/10 via-transparent to-transparent" />
              </div>

              {/* Doctor Cutout on top, sitting perfectly */}
              <div className="absolute bottom-0 right-[-5%] sm:right-[-2%] w-[85%] h-[95%] sm:h-[100%] z-10 flex items-end justify-end select-none pointer-events-none">
                {!cutoutError ? (
                  <Image
                    src={cutoutSrc}
                    alt="Medical Consultant/Doctor representation"
                    width={400}
                    height={460}
                    className="object-contain h-[92%] sm:h-[95%] w-auto max-h-[420px] origin-bottom drop-shadow-lg transition-transform duration-500 hover:scale-[1.01]"
                    onError={() => setCutoutError(true)}
                    priority
                  />
                ) : (
                  <div className="hidden" />
                )}
              </div>

              {/* Flag Label at top right */}
              <div className="absolute top-[5%] right-[5%] sm:right-[2%] z-20 bg-white/95 backdrop-blur-sm rounded-full px-3.5 py-1.5 shadow-md flex items-center gap-2 border border-slate-100">
                {!flagError && flagSrc ? (
                  <div className="relative w-5 h-3.5 overflow-hidden rounded-[2px] shadow-sm shrink-0">
                    <Image
                      src={flagSrc}
                      alt={`${data.country} flag`}
                      fill
                      className="object-cover"
                      onError={() => setFlagError(true)}
                    />
                  </div>
                ) : null}
                <span className="text-[10px] font-bold text-slate-800 tracking-wider uppercase leading-none">
                  {data.country}
                </span>
              </div>

              {/* Desktop Floating Badges (Hidden on mobile to avoid overlap, rendered as chips below visual instead) */}
              {badges.map((badge, idx) => {
                // Determine placement positions
                const placements = [
                  "top-[12%] left-[-8%] sm:left-[-12%]", // Badge 1
                  "top-[44%] left-[-12%] sm:left-[-16%]", // Badge 2
                  "bottom-[10%] left-[-6%] sm:left-[-10%]", // Badge 3
                ];
                return (
                  <div
                    key={idx}
                    className={`absolute ${placements[idx]} hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-2xl p-3 shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg z-20`}
                  >
                    <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                      {getBadgeIcon(badge.iconName)}
                    </div>
                    <div className="flex flex-col text-left pr-2">
                      <span className="text-xs font-extrabold text-slate-900 leading-tight">
                        {badge.label}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 tracking-wide uppercase mt-0.5 leading-none">
                        {badge.sublabel}
                      </span>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Mobile Benefit Chips (stacked or listed underneath visual) */}
            <div className="w-full max-w-[340px] mt-6 sm:hidden grid grid-cols-3 gap-3">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 rounded-xl p-2.5 flex flex-col items-center text-center shadow-sm"
                >
                  <div className="h-8 w-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs mb-1.5">
                    {getBadgeIcon(badge.iconName)}
                  </div>
                  <span className="text-[11px] font-extrabold text-slate-900 leading-tight">
                    {badge.label}
                  </span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wide mt-0.5 leading-none">
                    {badge.sublabel}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
