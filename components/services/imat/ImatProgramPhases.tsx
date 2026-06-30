"use client";

import React from "react";
import { BookOpen, Sparkles, FileText, PhoneCall, Check } from "lucide-react";
import { ImatPhase } from "@/lib/data/service-pages/types";

interface ImatProgramPhasesProps {
  data: {
    eyebrow: string;
    heading: string;
    description: string;
    phases: ImatPhase[];
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Sparkles,
  FileText,
  PhoneCall,
};

const getChipsForImatPhase = (num: string): string[] => {
  if (num === "1") return ["Foundation", "Basics"];
  if (num === "2") return ["Advanced", "Topics"];
  if (num === "3") return ["Mock Exams", "Time Prep"];
  if (num === "4") return ["Final Review", "Exam Ready"];
  return ["Coaching", "IMAT Prep"];
};

export default function ImatProgramPhases({ data }: ImatProgramPhasesProps) {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white select-none text-slate-900" id="coaching">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493]/70 mb-2 block">
            {data.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-tight mb-4">
            IMAT Preparation <em className="text-[#0D6493] not-italic">Program 2026</em>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {data.description}
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.phases.map((phase: ImatPhase, index: number) => {
            const Icon = iconMap[phase.iconName] || BookOpen;
            return (
              <div
                key={index}
                className="flex flex-col h-full bg-white rounded-3xl border border-slate-100 hover:border-[#0D6493]/20 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden relative group"
              >
                {/* Accent Top Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0D6493] to-[#1355c4] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-20" />
                
                {/* Large Decorative Phase Number */}
                <div className="text-5xl font-extrabold text-[#0D6493]/8 absolute top-4 right-4 leading-none select-none z-10">
                  {phase.num}
                </div>

                {/* Top Visual Area */}
                <div className="relative h-40 w-full bg-gradient-to-br from-violet-100/50 via-purple-50/20 to-transparent overflow-hidden flex items-center justify-center border-b border-slate-50 flex-shrink-0">
                  {/* Decorative dotted ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-dashed border-violet-200/50 animate-[spin_80s_linear_infinite] pointer-events-none" />
                  {/* Inner solid ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/80 pointer-events-none" />

                  {/* Centered Icon Container */}
                  <div className="relative z-10 p-3 bg-white rounded-2xl shadow-md border border-violet-100 text-violet-700 scale-110 group-hover:scale-115 transition-transform duration-300 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Floating chips */}
                  {getChipsForImatPhase(phase.num).map((chip, idx) => (
                    <div
                      key={idx}
                      className={`absolute ${idx === 0 ? "top-3 left-4 animate-float-1" : "bottom-3 right-4 animate-float-2"} flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm border border-violet-100 text-[8px] font-bold text-violet-700 z-10 pointer-events-none`}
                    >
                      {chip}
                    </div>
                  ))}
                </div>

                {/* Card Title & Points List Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#0D6493] transition-colors duration-200 mb-4 tracking-tight">
                    {phase.title}
                  </h3>
                  
                  {/* Points List */}
                  <ul className="space-y-3 flex-grow">
                    {phase.points.map((point: string, ptIdx: number) => (
                      <li key={ptIdx} className="text-xs md:text-sm text-slate-600 flex items-start gap-2.5 leading-relaxed font-normal">
                        <Check className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
