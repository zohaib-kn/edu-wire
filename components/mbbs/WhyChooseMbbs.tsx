"use client";

import React from "react";
import { GraduationCap, Wallet, Languages, Globe, Building, CheckCircle } from "lucide-react";
import { MBBSCountry } from "@/lib/data/mbbs";

interface WhyChooseMbbsProps {
  data: MBBSCountry;
}

// Explicit icon mapping table to resolve icons safely
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Wallet,
  Languages,
  Globe,
  Building,
};

export default function WhyChooseMbbs({ data }: WhyChooseMbbsProps) {
  // Hide section completely if there is no whyChoose country metadata
  if (!data.whyChoose || data.whyChoose.length === 0) {
    return null;
  }

  const headingText = data.whyChooseTitle || `Why Choose MBBS in ${data.country}?`;
  const subtitleText =
    data.whyChooseSubtitle ||
    `${data.country} offers high-quality medical education, globally recognized degrees, and exceptional clinical exposure for international students.`;

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || CheckCircle;
    return <IconComponent className="h-6 w-6 text-[#0D6493]" />;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading and Subtitle (Sticky only on desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4 text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {headingText}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
              {subtitleText}
            </p>
          </div>

          {/* Right Column: Benefit List Cards */}
          <div className="lg:col-span-8 space-y-5">
            {data.whyChoose.map((benefit, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-4.5 p-6 rounded-2xl border border-slate-100 bg-white shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-slate-200 transition-all duration-300"
              >
                {/* Icon Circle Container */}
                <div className="h-12 w-12 rounded-full bg-[#0D6493]/10 border border-[#0D6493]/15 flex items-center justify-center shrink-0 shadow-xs">
                  {getIcon(benefit.iconName)}
                </div>

                {/* Content */}
                <div className="space-y-1.5 text-left">
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {benefit.description}
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
