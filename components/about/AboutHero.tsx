"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle, Users } from "lucide-react";
import { ModalContext } from "@/components/context/ModalContext";

export default function AboutHero() {
  const modalContext = useContext(ModalContext);
  const openModal = modalContext?.openModal;

  const handleConsultationClick = (e: React.MouseEvent) => {
    if (openModal) {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <section className="relative pt-8 pb-16 overflow-hidden bg-gradient-to-b from-[#E1EDF8]/20 via-white to-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493] bg-[#0D6493]/10 px-4 py-1.5 rounded-full inline-block">
                About Edu-Wire
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-4">
                Guiding students toward <br />
                <span className="relative inline-block px-1">
                  global education
                  <svg className="absolute w-full h-2.5 -bottom-1.5 left-0 text-[#f4a261]" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>{" "}
                opportunities
              </h1>
            </div>

            {/* Paragraph */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl font-medium">
              Unlock global education opportunities with EduWire. From IELTS coaching to university admissions and visa support, we guide you every step of the way. Start your journey to studying abroad with expert help and confidence.
            </p>

            {/* Button */}
            <div>
              {openModal ? (
                <button
                  onClick={handleConsultationClick}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D6493] px-8 py-4 text-sm font-bold text-white shadow-md shadow-[#0D6493]/20 hover:bg-[#0c5982] hover:shadow-lg transition-all transform hover:scale-[1.01]"
                >
                  <span>Book Your Free Session</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D6493] px-8 py-4 text-sm font-bold text-white shadow-md hover:bg-[#0c5982] hover:shadow-lg transition-all"
                >
                  <span>Book Your Free Session</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-6 max-w-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-2xl font-extrabold text-[#0D6493]">
                  <Award className="h-5 w-5 text-[#f4a261] shrink-0" />
                  <span>12+</span>
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-snug">
                  Years Experience
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-2xl font-extrabold text-[#0D6493]">
                  <CheckCircle className="h-5 w-5 text-[#f4a261] shrink-0" />
                  <span>2000+</span>
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-snug">
                  Visa Approvals
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-2xl font-extrabold text-[#0D6493]">
                  <Users className="h-5 w-5 text-[#f4a261] shrink-0" />
                  <span>1000+</span>
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-snug">
                  Uni Partners
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Circular Frame Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[380px] h-[380px] lg:h-[420px] flex items-center justify-center">
              
              {/* Circular Background Frame */}
              <div className="absolute w-[290px] h-[290px] sm:w-[340px] sm:h-[340px] rounded-full bg-gradient-to-br from-[#0D6493]/10 to-[#E1EDF8]/40 border border-[#0D6493]/20 shadow-sm" />
              <div className="absolute w-[260px] h-[260px] sm:w-[305px] sm:h-[305px] rounded-full border border-dashed border-[#0D6493]/30" />
              
              {/* Cutout Image */}
              <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] z-10 select-none">
                <Image
                  src="/images/About-Us.png"
                  alt="About Edu-Wire consultants"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain object-bottom"
                  priority={true}
                  unoptimized={true}
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}