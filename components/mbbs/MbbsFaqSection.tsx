"use client";

import React, { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { MBBSCountry } from "@/lib/data/mbbs";

interface MbbsFaqSectionProps {
  data: MBBSCountry;
}

export default function MbbsFaqSection({ data }: MbbsFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  if (!data.faqs || data.faqs.length === 0) {
    return null;
  }

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            Find answers to standard queries about studying MBBS in {data.country}, admission requirements, and scholarship rules.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {data.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#0D6493] bg-slate-50/30"
                    : "border-slate-200/80 bg-white hover:border-slate-300"
                }`}
              >
                {/* FAQ Question Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-950 group"
                  aria-expanded={isOpen}
                  id={`faq-header-${idx}`}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors ${
                      isOpen ? "text-[#0D6493]" : "text-slate-400 group-hover:text-[#0D6493]"
                    }`} />
                    <span className="text-sm sm:text-base text-slate-800 tracking-tight leading-relaxed">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0">
                    {isOpen ? (
                      <div className="w-6 h-6 rounded-full bg-[#0D6493]/10 flex items-center justify-center text-[#0D6493]">
                        <Minus className="h-4 w-4" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#0D6493] group-hover:bg-[#0D6493]/10 transition-colors">
                        <Plus className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </button>

                {/* FAQ Answer Panel */}
                <div
                  id={`faq-panel-${idx}`}
                  aria-labelledby={`faq-header-${idx}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[500px] border-t border-slate-100" : "max-h-0 pointer-events-none"
                  }`}
                >
                  <div className="px-6 py-5 text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
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
