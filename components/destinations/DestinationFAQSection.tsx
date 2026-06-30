"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { DestinationFAQ } from "@/lib/data/destinations/types";

interface DestinationFAQSectionProps {
  faqs: DestinationFAQ[];
}

export default function DestinationFAQSection({ faqs }: DestinationFAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-white select-none">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#0D6493]/5 text-[#0D6493] text-xs font-bold uppercase tracking-wider">
            FAQs
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Frequently <span className="text-[#0D6493]">Asked Questions</span>
          </h2>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const ariaId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#0D6493]/3 border-[#0D6493]/20 shadow-sm"
                    : "bg-slate-50 border-slate-100 hover:bg-slate-100/50"
                }`}
              >
                {/* FAQ Header */}
                <h3 id={headerId}>
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={ariaId}
                  >
                    <span className="flex items-center gap-3.5">
                      <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? "text-[#0D6493]" : "text-slate-400"}`} />
                      <span className="text-sm md:text-base leading-snug tracking-tight font-extrabold">
                        {faq.question}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-4.5 w-4.5 text-slate-450 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                </h3>

                {/* FAQ Content */}
                <div
                  id={ariaId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[500px] border-t border-slate-200/40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="px-6 py-5 text-xs md:text-sm text-slate-650 leading-relaxed font-semibold">
                    {faq.answer}
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
