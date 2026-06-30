"use client";

import React from "react";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { useModal } from "@/components/context/ModalContext";

interface ImatFinalCtaProps {
  data: {
    heading: string;
    description: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
    trustItems: string[];
  };
}

export default function ImatFinalCta({ data }: ImatFinalCtaProps) {
  const { openModal } = useModal();

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-slate-50/60 select-none text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Banner Card */}
        <div className="relative bg-slate-950 text-white rounded-lg p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl text-center">
          
          {/* Decorative Gradients inside card */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(10,61,143,0.3),transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(196,154,40,0.1),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent,transparent_60px,rgba(255,255,255,0.015)_60px,rgba(255,255,255,0.015)_120px)] pointer-events-none" />

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-4">
              IMAT 2026 is on <em className="text-[#c49a28] not-italic">17 September</em>.<br />Don&apos;t Wait — Start Today.
            </h2>
            
            {/* Paragraph */}
            <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed max-w-xl mx-auto font-normal">
              {data.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <button
                onClick={openModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#c49a28] hover:bg-[#a8831f] px-8 py-4 text-sm md:text-base font-bold text-white shadow-lg shadow-[#c49a28]/10 transition-all active:scale-[0.98]"
              >
                <span>{data.primaryCtaText}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={data.secondaryCtaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 text-sm md:text-base font-bold text-white shadow-lg transition-all active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-[#c49a28] shrink-0" />
                <span>{data.secondaryCtaText}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 border-t border-white/10">
              {data.trustItems.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-slate-400 font-semibold">
                  <CheckCircle className="h-4 w-4 text-[#c49a28] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
