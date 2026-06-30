"use client";

import React from "react";
import { 
  Globe, 
  GraduationCap, 
  Briefcase, 
  FileCheck2, 
  Sparkles,
  HelpCircle
} from "lucide-react";
import { ServicePageBenefit } from "@/lib/data/service-pages/types";

interface ServiceBenefitsProps {
  heading: string;
  items: ServicePageBenefit[];
}

const getIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("trusted") || t.includes("worldwide")) return <Globe className="h-5 w-5 text-[#0D6493]" />;
  if (t.includes("academic") || t.includes("success")) return <GraduationCap className="h-5 w-5 text-[#0D6493]" />;
  if (t.includes("career") || t.includes("growth")) return <Briefcase className="h-5 w-5 text-[#0D6493]" />;
  if (t.includes("visa") || t.includes("immigration")) return <FileCheck2 className="h-5 w-5 text-[#0D6493]" />;
  if (t.includes("confidence") || t.includes("boost")) return <Sparkles className="h-5 w-5 text-[#0D6493]" />;
  return <HelpCircle className="h-5 w-5 text-[#0D6493]" />;
};

export default function ServiceBenefits({
  heading,
  items,
}: ServiceBenefitsProps) {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493]/70 mb-2 block">
            Future Value
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            {heading}
          </h2>
        </div>

        {/* Compact grid layout - not oversized cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex gap-4 p-5 rounded-lg border border-slate-100 bg-slate-50/40 hover:bg-slate-50 transition-colors duration-200"
            >
              {/* Left Column: Icon */}
              <div className="flex-shrink-0 mt-1 inline-flex items-center justify-center p-2.5 bg-[#0D6493]/5 rounded-[8px] h-fit">
                {getIcon(item.title)}
              </div>
              
              {/* Right Column: Content */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
