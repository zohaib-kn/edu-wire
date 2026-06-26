"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import { MBBSCountry } from "@/lib/data/mbbs";

interface StudyJourneyProps {
  data: MBBSCountry;
}

export default function StudyJourney({ data }: StudyJourneyProps) {
  if (!data.applicationProcess) {
    return null;
  }

  const { timelineDisclaimer, steps } = data.applicationProcess;

  // Concise step labels mapped to the 6 stages of the process
  const conciseLabels = ["Apply", "Pre-Enrol", "Funding", "Visa", "Depart", "Arrive"];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Journey to Study in <span className="text-[#0D6493]">{data.country}</span>
          </h2>
          {timelineDisclaimer && (
            <div className="inline-flex items-start gap-2 text-slate-500 text-xs sm:text-sm font-medium bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-200/50 max-w-xl mx-auto text-left">
              <AlertCircle className="h-4.5 w-4.5 text-[#0D6493] shrink-0 mt-0.5" />
              <span>{timelineDisclaimer}</span>
            </div>
          )}
        </div>

        {/* Desktop Horizontal Timeline (Hidden on Mobile) */}
        <div className="hidden lg:block relative py-8">
          {/* Subtle Progress Connecting Line */}
          <div className="absolute top-[52px] left-[8%] right-[8%] h-[2px] bg-slate-200" />

          {/* Timeline Grid */}
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const label = conciseLabels[idx] || step.title;
              return (
                <div key={idx} className="flex flex-col items-center text-center px-2 group">
                  {/* Circle Badge */}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#0D6493] flex items-center justify-center font-bold text-sm text-[#0D6493] shadow-sm group-hover:bg-[#0D6493] group-hover:text-white transition-all duration-300">
                    {idx + 1}
                  </div>

                  {/* Concise Label */}
                  <div className="mt-4 text-slate-900 font-extrabold text-base">
                    {label}
                  </div>

                  {/* Description */}
                  <div className="mt-2 text-slate-500 text-xs font-semibold leading-relaxed max-w-[150px]">
                    {step.shortDesc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline (Hidden on Desktop) */}
        <div className="lg:hidden relative pl-8 space-y-10 before:content-[''] before:absolute before:top-2 before:left-[15px] before:bottom-2 before:w-[2px] before:bg-slate-200">
          {steps.map((step, idx) => {
            const label = conciseLabels[idx] || step.title;
            return (
              <div key={idx} className="relative pl-6 flex flex-col items-start text-left group">
                {/* Numbered marker */}
                <div className="absolute left-[-29px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#0D6493] flex items-center justify-center font-bold text-xs text-[#0D6493] z-10">
                  {idx + 1}
                </div>

                {/* Concise Label */}
                <h3 className="text-slate-900 font-extrabold text-base leading-none mb-1">
                  {label}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                  {step.shortDesc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
