"use client";

import React from "react";
import { Users, Calendar, TrendingUp, Shield, HelpCircle, Check, X } from "lucide-react";
import { ImatFeature, TableData } from "@/lib/data/service-pages/types";

interface ImatWhyChooseProps {
  data: {
    eyebrow: string;
    heading: string;
    description: string;
    features: ImatFeature[];
    comparison: {
      eyebrow: string;
      heading: string;
      table: TableData;
    };
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Calendar,
  TrendingUp,
  Shield,
};

export default function ImatWhyChoose({ data }: ImatWhyChooseProps) {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-slate-50/60 select-none border-y border-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Why Choose Features */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493]/70 mb-2 block">
              {data.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-tight mb-4">
              What Makes Our <em className="text-[#0D6493] not-italic font-extrabold">IMAT Coaching</em> Different
            </h2>
            <p className="text-slate-500 text-base md:text-lg mb-8 leading-relaxed font-normal">
              {data.description}
            </p>
            
            <div className="space-y-4">
              {data.features.map((feature: ImatFeature, idx: number) => {
                const Icon = iconMap[feature.iconName] || HelpCircle;
                return (
                  <div 
                    key={idx}
                    className="flex gap-4 p-5 bg-white rounded-lg border border-slate-200/80 hover:border-[#0D6493]/20 hover:shadow-md transition-all duration-200"
                  >
                    <div className="shrink-0 p-2.5 bg-[#0D6493]/5 text-[#0D6493] rounded-lg h-fit">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-slate-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Comparison Table */}
          <div className="lg:col-span-6 w-full lg:sticky lg:top-24">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c49a28] mb-2 block">
                {data.comparison.eyebrow}
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 leading-tight">
                {data.comparison.heading}
              </h3>
            </div>

            {/* Semantic Comparison Table with wrapper for horizontal scroll */}
            <div className="overflow-x-auto w-full border border-slate-200/80 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 bg-white">
                <caption className="sr-only">IMAT vs NEET comparative features list</caption>
                <thead className="bg-slate-900 text-white">
                  <tr>
                    {data.comparison.table.headers.map((header: string, idx: number) => (
                      <th
                        key={idx}
                        scope="col"
                        className="px-5 py-3.5 text-left text-xs md:text-sm font-bold uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.comparison.table.rows.map((row: string[], rowIdx: number) => (
                    <tr key={rowIdx} className="hover:bg-slate-50/50 transition-colors odd:bg-white even:bg-slate-50/20">
                      <td className="px-5 py-3.5 text-xs md:text-sm font-bold text-slate-900 whitespace-nowrap">
                        {row[0]}
                      </td>
                      <td className="px-5 py-3.5 text-xs md:text-sm font-semibold text-slate-700 whitespace-normal">
                        {row[1].startsWith("✓") ? (
                          <span className="flex items-center gap-1.5 text-[#059669]">
                            <Check className="h-4 w-4 shrink-0 font-bold" />
                            <span>{row[1].replace("✓", "").trim()}</span>
                          </span>
                        ) : row[1].startsWith("✗") ? (
                          <span className="flex items-center gap-1.5 text-[#dc2626]">
                            <X className="h-4 w-4 shrink-0 font-bold" />
                            <span>{row[1].replace("✗", "").trim()}</span>
                          </span>
                        ) : (
                          <span>{row[1]}</span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-xs md:text-sm text-slate-500 whitespace-normal">
                        {row[2].startsWith("✓") ? (
                          <span className="flex items-center gap-1.5 text-[#059669]">
                            <Check className="h-4 w-4 shrink-0 font-bold" />
                            <span>{row[2].replace("✓", "").trim()}</span>
                          </span>
                        ) : row[2].startsWith("✗") ? (
                          <span className="flex items-center gap-1.5 text-[#dc2626]">
                            <X className="h-4 w-4 shrink-0 font-bold" />
                            <span>{row[2].replace("✗", "").trim()}</span>
                          </span>
                        ) : (
                          <span>{row[2]}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
