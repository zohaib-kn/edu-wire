"use client";

import React from "react";
import { School, Briefcase, Wrench, GraduationCap } from "lucide-react";
import { DestinationEducationSystem } from "@/lib/data/destinations/types";

interface DestinationEducationSystemProps {
  data?: DestinationEducationSystem;
}

export default function DestinationEducationSystemComponent({
  data,
}: DestinationEducationSystemProps) {
  if (!data) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "university":
        return <School className="h-6 w-6 text-[#0D6493]" />;
      case "briefcase":
        return <Briefcase className="h-6 w-6 text-[#0D6493]" />;
      case "tools":
        return <Wrench className="h-6 w-6 text-[#0D6493]" />;
      default:
        return <GraduationCap className="h-6 w-6 text-[#0D6493]" />;
    }
  };

  return (
    <section className="py-16 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#0D6493]/5 text-[#0D6493] text-xs font-bold uppercase tracking-wider">
            Education Structure
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            {data.title.includes("Education System") ? (
              <>
                {data.title.split("Education System")[0]}
                <span className="text-[#0D6493]">Education System</span>
              </>
            ) : (
              data.title
            )}
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Institutions Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-center text-slate-900">
            {data.subtitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.institutions.map((inst, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl border border-slate-100 p-6 flex flex-col justify-start items-center text-center gap-4 hover:shadow-md transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#0D6493]/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#0D6493]/20">
                  {getIcon(inst.icon)}
                </div>

                {/* Text content */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-slate-900 leading-tight">
                    {inst.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {inst.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
