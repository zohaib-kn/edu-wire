"use client";

import React from "react";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { DestinationWorkOpportunitiesSection } from "@/lib/data/destinations/types";

interface DestinationWorkOpportunitiesProps {
  data?: DestinationWorkOpportunitiesSection;
}

export default function DestinationWorkOpportunities({
  data,
}: DestinationWorkOpportunitiesProps) {
  if (!data) return null;

  return (
    <section className="py-16 bg-slate-50 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#0D6493]/5 text-[#0D6493] text-xs font-bold uppercase tracking-wider">
            Careers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            {data.title.includes("Opportunities in") ? (
              <>
                Work <span className="text-[#0D6493]">Opportunities in Spain</span>
              </>
            ) : (
              data.title
            )}
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* 4 Columns Desktop, 2 Tablet, 1 Mobile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.opportunities.map((opp, index) => {
            const hasImage = !!opp.image;

            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col group h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden shrink-0 flex items-center justify-center">
                  {hasImage ? (
                    <Image
                      src={opp.image}
                      alt={opp.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized={true}
                    />
                  ) : (
                    // Fallback visual
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-[#0D6493]/10 flex flex-col items-center justify-center gap-3 p-4">
                      <div className="w-12 h-12 rounded-full bg-[#0D6493]/10 flex items-center justify-center text-[#0D6493]">
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-center">
                        {opp.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Heading */}
                <div className="p-5 flex-grow flex items-center justify-start">
                  <h4 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#0D6493] transition-colors">
                    {opp.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
