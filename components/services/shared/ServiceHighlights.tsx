"use client";

import React from "react";
import { 
  BookOpen, 
  Award, 
  FileSpreadsheet, 
  Laptop, 
  Target, 
  PenTool, 
  CalendarCheck,
  HelpCircle,
  GraduationCap,
  Landmark,
  Calculator,
  Compass,
  Globe,
  FileText
} from "lucide-react";
import { ServicePageHighlight } from "@/lib/data/service-pages/types";

interface ServiceHighlightsProps {
  heading: string;
  items: ServicePageHighlight[];
}

const getIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("scholarship")) return <GraduationCap className="h-9 w-9 text-[#0D6493]" />;
  if (t.includes("loan") || t.includes("financial")) return <Landmark className="h-9 w-9 text-[#0D6493]" />;
  if (t.includes("budget") || t.includes("calculator")) return <Calculator className="h-9 w-9 text-[#0D6493]" />;
  if (t.includes("country") || t.includes("advice") || t.includes("destination")) return <Compass className="h-9 w-9 text-[#0D6493]" />;
  if (t.includes("forex") || t.includes("payment")) return <Globe className="h-9 w-9 text-[#0D6493]" />;
  if (t.includes("insurance") || t.includes("visa")) return <FileText className="h-9 w-9 text-[#0D6493]" />;

  if (t.includes("material")) return <BookOpen className="h-9 w-9 text-[#0D6493]" />;
  if (t.includes("trainer") || t.includes("certified")) return <Award className="h-9 w-9 text-[#0D6493]" />;
  if (t.includes("mock") || t.includes("feedback")) return <FileSpreadsheet className="h-9 w-9 text-[#0D6493]" />;
  if (t.includes("flexible") || t.includes("classes")) return <Laptop className="h-9 w-9 text-[#0D6493]" />;
  if (t.includes("target") || t.includes("band")) return <Target className="h-9 w-9 text-[#0D6493]" />;
  if (t.includes("speaking") || t.includes("writing") || t.includes("practice")) return <PenTool className="h-9 w-9 text-[#0D6493]" />;
  if (t.includes("booking") || t.includes("assistance")) return <CalendarCheck className="h-9 w-9 text-[#0D6493]" />;
  return <HelpCircle className="h-9 w-9 text-[#0D6493]" />;
};

const getChipsForHighlight = (title: string): string[] => {
  const t = title.toLowerCase();
  // IELTS
  if (t.includes("material")) return ["IELTS Prep", "Study Docs"];
  if (t.includes("trainer") || t.includes("certified")) return ["Expert Mentor", "Certified"];
  if (t.includes("mock") || t.includes("feedback")) return ["Mock Test", "Review"];
  if (t.includes("classes") || t.includes("flexible")) return ["Flexible Class", "Interactive"];
  if (t.includes("target") || t.includes("band")) return ["Band 7.5+", "Target Score"];
  if (t.includes("speaking") || t.includes("writing")) return ["Interview Prep", "Essay Review"];
  if (t.includes("booking")) return ["Slot Booking", "Exam Date"];
  
  // Financial Assistance
  if (t.includes("loan") || t.includes("loans")) return ["Education Loan", "Low Interest"];
  if (t.includes("budget") || t.includes("costs")) return ["Budget Plan", "Cost Estimate"];
  if (t.includes("forex") || t.includes("payment")) return ["Forex Support", "Safe Transfer"];
  if (t.includes("fee") || t.includes("visa")) return ["Visa Support", "Fee Assistance"];
  if (t.includes("insurance") || t.includes("travel")) return ["Travel Cover", "Medical Insurance"];

  return ["EduWire", "Overseas Guidance"];
};

export default function ServiceHighlights({
  heading,
  items,
}: ServiceHighlightsProps) {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-slate-50/60 select-none border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493]/70 mb-2 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            {heading}
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-white rounded-3xl border border-slate-100 hover:border-[#0D6493]/20 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group"
            >
              {/* Top Visual Area */}
              <div className="relative h-56 w-full bg-gradient-to-br from-sky-50/60 via-blue-50/20 to-transparent overflow-hidden flex items-center justify-center border-b border-slate-50 flex-shrink-0">
                {/* 1. Circular soft light-blue background circle */}
                <div className="absolute w-36 h-36 rounded-full bg-blue-100/30 blur-md pointer-events-none" />

                {/* 2. Dotted circular ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] rounded-full border border-dashed border-[#0D6493]/15 animate-[spin_80s_linear_infinite] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-white/60 pointer-events-none" />

                {/* 3. Central visual: large icon inside a rounded/circular tile */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-white border border-[#0D6493]/10 shadow-lg shadow-slate-200/80 flex items-center justify-center scale-100 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-[#0D6493] scale-110">
                    {getIcon(item.title)}
                  </div>
                </div>

                {/* 4. Floating chips/cards */}
                {getChipsForHighlight(item.title).map((chip, idx) => {
                  const posClass = idx === 0 
                    ? "absolute top-4 right-4 animate-float-1" 
                    : "absolute bottom-4 left-4 animate-float-2";

                  const accentColor = idx === 0 ? "border-sky-100 text-[#0D6493]" : "border-emerald-100 text-emerald-800";

                  return (
                    <div
                      key={idx}
                      className={`${posClass} flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md border ${accentColor} text-[10px] font-bold z-10 pointer-events-none`}
                    >
                      {chip}
                    </div>
                  );
                })}
              </div>

              {/* Card Title & Description Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#0D6493] transition-colors duration-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow font-normal">
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
