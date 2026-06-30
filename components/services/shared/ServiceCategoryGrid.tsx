"use client";

import React from "react";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CalendarCheck, 
  Compass, 
  Globe, 
  FileText, 
  Landmark, 
  Calculator, 
  Coins, 
  Briefcase, 
  HelpCircle 
} from "lucide-react";

interface CategoryGridItem {
  title: string;
  description: string;
  iconName?: string;
}

interface ServiceCategoryGridProps {
  eyebrow: string;
  heading: string;
  description?: string;
  items: CategoryGridItem[];
}

const getIcon = (title: string, iconName?: string) => {
  const t = title.toLowerCase();
  
  // Try to use iconName if provided
  if (iconName) {
    const name = iconName.toLowerCase();
    if (name.includes("graduation") || name.includes("cap")) return <GraduationCap className="h-9 w-9 text-amber-700" />;
    if (name.includes("award")) return <Award className="h-9 w-9 text-amber-700" />;
    if (name.includes("book")) return <BookOpen className="h-9 w-9 text-amber-700" />;
    if (name.includes("calendar")) return <CalendarCheck className="h-9 w-9 text-amber-700" />;
    if (name.includes("compass")) return <Compass className="h-9 w-9 text-amber-700" />;
    if (name.includes("globe")) return <Globe className="h-9 w-9 text-amber-700" />;
    if (name.includes("file") || name.includes("text")) return <FileText className="h-9 w-9 text-amber-700" />;
    if (name.includes("landmark") || name.includes("bank")) return <Landmark className="h-9 w-9 text-amber-700" />;
    if (name.includes("calculator")) return <Calculator className="h-9 w-9 text-amber-700" />;
    if (name.includes("coins") || name.includes("money")) return <Coins className="h-9 w-9 text-amber-700" />;
    if (name.includes("briefcase")) return <Briefcase className="h-9 w-9 text-amber-700" />;
  }

  // Fallback to title matching
  if (t.includes("merit") || t.includes("academic")) return <GraduationCap className="h-9 w-9 text-amber-700" />;
  if (t.includes("government") || t.includes("national")) return <Landmark className="h-9 w-9 text-amber-700" />;
  if (t.includes("university") || t.includes("institutional")) return <BookOpen className="h-9 w-9 text-amber-700" />;
  if (t.includes("need") || t.includes("financial")) return <Coins className="h-9 w-9 text-amber-700" />;
  if (t.includes("destination") || t.includes("country")) return <Globe className="h-9 w-9 text-amber-700" />;
  
  return <HelpCircle className="h-9 w-9 text-amber-700" />;
};

const getChipsForScholarship = (title: string): string[] => {
  const t = title.toLowerCase();
  if (t.includes("merit") || t.includes("academic")) return ["Merit Based", "High GPA"];
  if (t.includes("government") || t.includes("national")) return ["Govt Funded", "Full Grant"];
  if (t.includes("university") || t.includes("institutional")) return ["Uni Specific", "Tuition Waiver"];
  if (t.includes("need") || t.includes("financial")) return ["Need Based", "Income Proof"];
  if (t.includes("destination") || t.includes("country")) return ["Region Specific", "Study Grant"];
  return ["Scholarship", "EduWire Help"];
};

export default function ServiceCategoryGrid({
  eyebrow,
  heading,
  description,
  items,
}: ServiceCategoryGridProps) {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-slate-50/60 select-none border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493]/70 mb-2 block">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal">
              {description}
            </p>
          )}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col h-full bg-white rounded-3xl border border-slate-100 hover:border-amber-500/20 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group"
              >
                {/* Top Visual Area */}
                <div className="relative h-56 w-full bg-gradient-to-br from-amber-50/60 via-orange-50/20 to-transparent overflow-hidden flex items-center justify-center border-b border-slate-50 flex-shrink-0">
                  {/* 1. Circular soft light-amber background circle */}
                  <div className="absolute w-36 h-36 rounded-full bg-amber-100/30 blur-md pointer-events-none" />

                  {/* 2. Dotted circular ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] rounded-full border border-dashed border-amber-200/40 animate-[spin_80s_linear_infinite] pointer-events-none" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-white/60 pointer-events-none" />

                  {/* 3. Central visual: large icon inside a rounded/circular tile */}
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-white border border-amber-100 shadow-lg shadow-slate-200/80 flex items-center justify-center scale-100 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-amber-700 scale-110">
                      {getIcon(item.title, item.iconName)}
                    </div>
                  </div>

                  {/* 4. Floating chips/cards */}
                  {getChipsForScholarship(item.title).map((chip, idx) => {
                    const posClass = idx === 0 
                      ? "absolute top-4 right-4 animate-float-1" 
                      : "absolute bottom-4 left-4 animate-float-2";

                    const accentColor = idx === 0 ? "border-amber-100 text-amber-800" : "border-emerald-100 text-emerald-800";

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
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-amber-700 transition-colors duration-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
