"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/lib/data/service-pages/types";

interface ServiceFAQProps {
  heading: string;
  items: FAQItem[];
}

export default function ServiceFAQ({ heading, items }: ServiceFAQProps) {
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white select-none">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493]/70 mb-2 block">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = !!openIndexes[index];
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="border border-slate-200/80 rounded-lg overflow-hidden transition-colors hover:border-[#0D6493]/20"
              >
                {/* Accordion Header Button */}
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 md:py-5 bg-slate-50/50 hover:bg-[#0D6493]/5 transition-all text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6493]/40 focus-visible:z-10 text-base md:text-lg font-bold min-h-[52px]"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 ml-4 transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
                      isOpen ? "rotate-180 text-[#0D6493]" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content Panel */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`transition-all duration-300 ease-in-out motion-reduce:transition-none overflow-hidden ${
                    isOpen ? "max-h-[500px] border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <div className="px-5 py-4 md:py-5 bg-white text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                    {item.answer}
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
