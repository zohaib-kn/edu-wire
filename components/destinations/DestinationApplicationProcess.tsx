"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { DestinationProcessStep } from "@/lib/data/destinations/types";

interface DestinationApplicationProcessProps {
  steps: DestinationProcessStep[];
  activeStep: number;
  onStepChange: (idx: number) => void;
}

export default function DestinationApplicationProcess({
  steps,
  activeStep,
  onStepChange,
}: DestinationApplicationProcessProps) {
  return (
    <section className="py-12 bg-slate-50 select-none">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Accordion List */}
        <div className="space-y-4">
          {steps.map((step, idx) => {
            const isOpen = activeStep === idx;
            const ariaId = `process-content-${idx}`;
            const headerId = `process-header-${idx}`;

            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary/20 shadow-md ring-4 ring-[#0D6493]/3"
                    : "border-slate-150 hover:border-slate-200 shadow-sm"
                }`}
              >
                {/* Accordion Header */}
                <h3 id={headerId}>
                  <button
                    onClick={() => onStepChange(isOpen ? -1 : idx)}
                    className="w-full text-left px-6 py-5 md:py-6 flex items-center justify-between gap-4 font-bold text-slate-950 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-3xl"
                    aria-expanded={isOpen}
                    aria-controls={ariaId}
                  >
                    <span className="flex items-center gap-3.5">
                      <span
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-extrabold transition-colors ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-[#0D6493]/5 text-[#0D6493]"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="text-base md:text-lg leading-snug tracking-tight font-extrabold">
                        {step.title}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                </h3>

                {/* Accordion Content */}
                <div
                  id={ariaId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[2500px] border-t border-slate-100 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="px-6 py-6 md:px-8 md:py-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6.5">
                      {step.sections.map((section, sIdx) => {
                        const isWarning = section.heading && section.heading.includes("⚠️");
                        const isNote = section.heading && section.heading.includes("📌");

                        return (
                          <div
                            key={sIdx}
                            className={`p-6 rounded-2xl border ${
                              isWarning
                                ? "bg-red-50/50 border-red-100"
                                : isNote
                                ? "bg-amber-50/50 border-amber-100"
                                : "bg-slate-50 border-slate-100"
                            }`}
                          >
                            {/* Section Heading */}
                            {section.heading && (
                              <h4
                                className={`text-sm md:text-base font-bold tracking-tight mb-3.5 flex items-start gap-2 ${
                                  isWarning
                                    ? "text-red-800"
                                    : isNote
                                    ? "text-amber-800"
                                    : "text-slate-900"
                                }`}
                              >
                                <span>{section.heading}</span>
                              </h4>
                            )}

                            {/* Section Paragraphs */}
                            {section.paragraphs &&
                              section.paragraphs.map((p, pIdx) => {
                                const pWarning = p.includes("⚠️");
                                const pNote = p.includes("📌");
                                const pHourglass = p.includes("⏳");

                                return (
                                  <p
                                    key={pIdx}
                                    className={`text-xs md:text-sm leading-relaxed mb-3 last:mb-0 ${
                                      pWarning
                                        ? "text-red-750 font-semibold"
                                        : pNote
                                        ? "text-amber-800 font-semibold"
                                        : pHourglass
                                        ? "text-slate-700 font-medium italic"
                                        : "text-slate-600 font-medium"
                                    }`}
                                  >
                                    {p}
                                  </p>
                                );
                              })}

                            {/* Section Items */}
                            {section.items && (
                              <ul className="list-disc pl-4 space-y-2 mt-3 text-xs md:text-sm text-slate-650 font-medium">
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>{item}</li>
                                ))}
                              </ul>
                            )}

                            {/* Additional custom render properties if they exist */}
                            {section.paragraphs2 &&
                              section.paragraphs2.map((p, pIdx) => (
                                <p
                                  key={pIdx}
                                  className="text-xs md:text-sm leading-relaxed mt-3 font-medium text-slate-600"
                                >
                                  {p}
                                </p>
                              ))}

                            {section.items2 && (
                              <ul className="list-disc pl-4 space-y-2 mt-3 text-xs md:text-sm text-slate-650 font-medium">
                                {section.items2.map((item, itemIdx) => (
                                  <li key={itemIdx}>{item}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </div>
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
