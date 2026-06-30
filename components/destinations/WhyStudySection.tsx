"use client";

import React from "react";
import { 
  GraduationCap, 
  Briefcase, 
  IdCard, 
  Compass, 
  School, 
  CircleDollarSign,
  ClipboardCheck,
  ShieldCheck,
  Award,
  Languages,
  Users
} from "lucide-react";
import { DestinationBenefit } from "@/lib/data/destinations/types";

interface WhyStudySectionProps {
  benefits: DestinationBenefit[];
  countryName?: string;
}

export default function WhyStudySection({ benefits, countryName }: WhyStudySectionProps) {
  // Map string icon identifiers to Lucide Icons
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "graduation-cap":
        return <GraduationCap className="h-6 w-6 text-[#0D6493]" />;
      case "briefcase":
        return <Briefcase className="h-6 w-6 text-[#0D6493]" />;
      case "id-card":
        return <IdCard className="h-6 w-6 text-[#0D6493]" />;
      case "passport":
        return <Compass className="h-6 w-6 text-[#0D6493]" />;
      case "university":
        return <School className="h-6 w-6 text-[#0D6493]" />;
      case "hand-holding-usd":
        return <CircleDollarSign className="h-6 w-6 text-[#0D6493]" />;
      case "clipboard-check":
        return <ClipboardCheck className="h-6 w-6 text-[#0D6493]" />;
      case "shield-alt":
        return <ShieldCheck className="h-6 w-6 text-[#0D6493]" />;
      case "award":
        return <Award className="h-6 w-6 text-[#0D6493]" />;
      case "language":
        return <Languages className="h-6 w-6 text-[#0D6493]" />;
      case "users":
        return <Users className="h-6 w-6 text-[#0D6493]" />;
      default:
        return <GraduationCap className="h-6 w-6 text-[#0D6493]" />;
    }
  };

  return (
    <section className="py-16 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#0D6493]/5 text-[#0D6493] text-xs font-bold uppercase tracking-wider">
            Why {countryName === "UK" ? "the UK" : (countryName || "UK")}?
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Why Choose <span className="text-[#0D6493]">Studies in {countryName || "UK"}?</span>
          </h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl border border-slate-100 p-6 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#0D6493]/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#0D6493]/20">
                {getIcon(benefit.icon)}
              </div>

              {/* Text */}
              <div className="space-y-2 w-full">
                <h4 className="text-lg font-bold text-slate-900 leading-tight">
                  {benefit.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
                {benefit.points && benefit.points.length > 0 && (
                  <ul className="list-disc list-inside text-slate-600 text-sm space-y-1.5 mt-2 pl-1">
                    {benefit.points.map((pt, ptIdx) => (
                      <li key={ptIdx} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
