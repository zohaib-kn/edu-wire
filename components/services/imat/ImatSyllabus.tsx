"use client";

import React from "react";
import { 
  HelpCircle, 
  Globe, 
  Dna, 
  FlaskConical, 
  Calculator,
  AlertCircle
} from "lucide-react";
import { ImatSubject } from "@/lib/data/service-pages/types";

interface ImatSyllabusProps {
  data: {
    eyebrow: string;
    heading: string;
    description: string;
    subjects: ImatSubject[];
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  "logical reasoning": HelpCircle,
  "general knowledge": Globe,
  "biology": Dna,
  "chemistry": FlaskConical,
  "physics & maths": Calculator,
};

const getChipsForImatSubject = (name: string): string[] => {
  const n = name.toLowerCase();
  if (n.includes("logical")) return ["Critical Thinking", "Problem Solving"];
  if (n.includes("general") || n.includes("knowledge")) return ["World History", "Politics"];
  if (n.includes("biology")) return ["Cytology", "Genetics"];
  if (n.includes("chemistry")) return ["Organic", "Equations"];
  if (n.includes("physics") || n.includes("maths")) return ["Mechanics", "Algebra"];
  return ["IMAT", "Subject Prep"];
};

export default function ImatSyllabus({ data }: ImatSyllabusProps) {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-slate-900 select-none text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
            {data.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight mb-4">
            What IMAT Tests — <em className="text-[#c49a28] not-italic">Section by Section</em>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {data.description}
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {data.subjects.map((subject: ImatSubject, index: number) => {
            const Icon = iconMap[subject.name.toLowerCase()] || AlertCircle;
            return (
              <div
                key={index}
                className="flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Accent Top Bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[3px] z-20"
                  style={{ backgroundColor: subject.color }}
                />

                {/* Top Visual Area */}
                <div className="relative h-36 w-full bg-white/[0.02] overflow-hidden flex items-center justify-center border-b border-white/5 flex-shrink-0">
                  {/* Decorative dotted ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-dashed border-white/10 animate-[spin_80s_linear_infinite] pointer-events-none" />
                  
                  {/* Centered Icon Container */}
                  <div 
                    className="relative z-10 p-3 rounded-2xl shadow-md scale-110 group-hover:scale-115 transition-transform duration-300 flex items-center justify-center"
                    style={{ backgroundColor: subject.bgColor }}
                  >
                    <Icon className="h-5 w-5" style={{ color: subject.color }} />
                  </div>

                  {/* Floating chips (short, dark mode styled) */}
                  {getChipsForImatSubject(subject.name).map((chip, idx) => (
                    <div
                      key={idx}
                      className={`absolute ${idx === 0 ? "top-2.5 left-3 animate-float-1" : "bottom-2.5 right-3 animate-float-2"} flex items-center gap-1 bg-slate-800/90 backdrop-blur-sm rounded px-1.5 py-0.5 border border-white/10 text-[8px] font-bold z-10 pointer-events-none`}
                      style={{ color: subject.color }}
                    >
                      {chip}
                    </div>
                  ))}
                </div>

                {/* Card Title & Topics List Area */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-white mb-3 tracking-tight">
                    {subject.name}
                  </h3>
                  
                  {/* Topics List */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {subject.topics.map((topic: string, topicIdx: number) => (
                      <li key={topicIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed font-normal">
                        <span className="text-lg leading-none" style={{ color: subject.color }}>·</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Score / Questions Badge */}
                  <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-slate-300 w-fit">
                    {subject.questions}
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
