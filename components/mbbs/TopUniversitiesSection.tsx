"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GraduationCap, Calendar, Landmark, BookOpen } from "lucide-react";
import { MBBSCountry } from "@/lib/data/mbbs";

interface TopUniversitiesSectionProps {
  data: MBBSCountry;
}

export default function TopUniversitiesSection({ data }: TopUniversitiesSectionProps) {
  // Track image load errors by university name to support multiple cards
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Hide the section completely if universitiesDetailed is missing
  if (!data.universitiesDetailed || data.universitiesDetailed.length === 0) {
    return null;
  }

  const handleImageError = (uniName: string) => {
    setImageErrors((prev) => ({ ...prev, [uniName]: true }));
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Top Leading Universities in <span className="text-[#0D6493]">{data.country}</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            Explore recognised medical universities, program details, and estimated yearly costs for MBBS in {data.country}.
          </p>
        </div>

        {/* Dynamic List of Detailed Universities */}
        <div className="space-y-16">
          {data.universitiesDetailed.map((uni, idx) => {
            const uniKey = uni.name || `unnamed-uni-${idx}`;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-8"
              >
                
                {/* Card Header: Name, Badges & Description */}
                <div className="space-y-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {uni.name && (
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        {uni.name}
                      </h3>
                    )}
                    
                    {/* Badges */}
                    {uni.badges && uni.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {uni.badges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-50 border border-slate-200 text-slate-600 shadow-xs"
                          >
                            {bIdx === 0 && <Landmark className="h-3 w-3 text-slate-500" />}
                            {bIdx === 1 && <Calendar className="h-3 w-3 text-slate-500" />}
                            {bIdx === 2 && <BookOpen className="h-3 w-3 text-slate-500" />}
                            <span>{badge}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Description paragraphs */}
                  <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                    {uni.description.map((desc, dIdx) => (
                      <p key={dIdx}>{desc}</p>
                    ))}
                  </div>
                </div>

                {/* Subheading */}
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-[#0D6493]" />
                    <span>Cost to Study MBBS</span>
                  </h4>

                  {/* Grid layout for Fee table and Image */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Left Column: Fee Table (col-span-7) */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                      <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[500px] border-collapse text-left text-sm">
                            <thead>
                              <tr className="bg-[#0D6493] text-white">
                                <th className="px-4.5 py-3.5 font-bold uppercase tracking-wider text-xs">Year</th>
                                <th className="px-4.5 py-3.5 font-bold uppercase tracking-wider text-xs">Tuition Fee</th>
                                <th className="px-4.5 py-3.5 font-bold uppercase tracking-wider text-xs">Administrative Fee</th>
                                <th className="px-4.5 py-3.5 font-bold uppercase tracking-wider text-xs">Application Fee</th>
                                <th className="px-4.5 py-3.5 font-bold uppercase tracking-wider text-xs">Total</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                              {uni.fees.map((feeRow, fIdx) => (
                                <tr
                                  key={fIdx}
                                  className="hover:bg-slate-50/50 transition-colors duration-150"
                                >
                                  <td className="px-4.5 py-3.5 text-slate-900 font-bold">{feeRow.year}</td>
                                  <td className="px-4.5 py-3.5">{feeRow.tuitionFee}</td>
                                  <td className="px-4.5 py-3.5 text-slate-500 font-medium">{feeRow.administrativeFee}</td>
                                  <td className="px-4.5 py-3.5 text-slate-500 font-medium">{feeRow.applicationFee}</td>
                                  <td className="px-4.5 py-3.5 text-[#0D6493] font-bold">{feeRow.total}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Image Frame (col-span-5) */}
                    <div className="lg:col-span-5 relative min-h-[220px] rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                      {!imageErrors[uniKey] ? (
                        <Image
                          src={uni.image}
                          alt={`${uni.name || "University"} Campus`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 35vw"
                          className="object-cover transition-transform duration-500 hover:scale-[1.015]"
                          onError={() => handleImageError(uniKey)}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#0D6493]/10 to-[#E1EDF8] flex flex-col items-center justify-center p-6 gap-2">
                          <Landmark className="h-10 w-10 text-[#0D6493]/40" />
                          <span className="text-xs font-bold text-[#0D6493]/80 text-center">
                            {uni.name || "University"} Campus
                          </span>
                        </div>
                      )}
                    </div>

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
