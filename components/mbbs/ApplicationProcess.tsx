"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckSquare, ListChecks } from "lucide-react";
import { MBBSCountry } from "@/lib/data/mbbs";

interface ApplicationProcessProps {
  data: MBBSCountry;
}

export default function ApplicationProcess({ data }: ApplicationProcessProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  if (!data.applicationProcess) {
    return null;
  }

  const { steps } = data.applicationProcess;

  const toggleStep = (idx: number) => {
    setActiveStep(activeStep === idx ? -1 : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Detailed Application Process
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            Follow our step-by-step roadmap to successfully secure your seat at a medical university in {data.country}.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {steps.map((step, idx) => {
            const isOpen = activeStep === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#0D6493] bg-slate-50/40 shadow-xs"
                    : "border-slate-200/80 bg-white hover:border-slate-300"
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleStep(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 group"
                  aria-expanded={isOpen}
                  id={`accordion-header-${idx}`}
                  aria-controls={`accordion-panel-${idx}`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                      isOpen ? "bg-[#0D6493] text-white" : "bg-slate-100 text-[#0D6493]"
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base md:text-lg text-slate-800 tracking-tight group-hover:text-[#0D6493] transition-colors">
                      {step.title}
                    </span>
                  </div>
                  <div>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-[#0D6493]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                    )}
                  </div>
                </button>

                {/* Collapsible Panel */}
                <div
                  id={`accordion-panel-${idx}`}
                  aria-labelledby={`accordion-header-${idx}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[1500px] border-t border-slate-100" : "max-h-0 pointer-events-none"
                  }`}
                >
                  <div className="p-6 sm:p-8 space-y-8">
                    {step.detailedContent.map((subSec, sIdx) => (
                      <div key={sIdx} className="space-y-4">
                        <h4 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
                          <CheckSquare className="h-4.5 w-4.5 text-[#0D6493] shrink-0" />
                          <span>{subSec.title}</span>
                        </h4>

                        <div className="grid grid-cols-1 gap-3 pl-6.5">
                          {subSec.items.map((item, iIdx) => (
                            <div
                              key={iIdx}
                              className="flex items-start gap-2.5 bg-white border border-slate-100/80 p-3.5 sm:p-4 rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)]"
                            >
                              <span className="text-[#0D6493] text-xs font-bold shrink-0 mt-0.5 select-none">
                                ✓
                              </span>
                              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
