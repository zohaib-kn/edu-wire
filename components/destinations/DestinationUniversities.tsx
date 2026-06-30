"use client";

import React from "react";
import Image from "next/image";
import { Check, Award, GraduationCap, Briefcase, Calendar } from "lucide-react";
import { DestinationUniversity } from "@/lib/data/destinations/types";

interface DestinationUniversitiesProps {
  universities: DestinationUniversity[];
  note?: string;
  countryName?: string;
}

export default function DestinationUniversities({ universities, note, countryName }: DestinationUniversitiesProps) {
  // Helper to get university initials for the fallback card
  const getInitials = (name: string) => {
    return name
      .replace(/\(.*?\)/g, "")
      .replace(/University of /i, "")
      .replace(/The /i, "")
      .trim()
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="py-16 bg-slate-50 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#0D6493]/5 text-[#0D6493] text-xs font-bold uppercase tracking-wider">
            Institutions
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Top Leading <span className="text-[#0D6493]">Universities in {countryName || "UK"}</span>
          </h2>
        </div>

        {/* Universities List */}
        <div className="space-y-14">
          {universities.map((uni, idx) => {
            const isEven = idx % 2 === 0;
            const initials = getInitials(uni.name);

            return (
              <div
                key={uni.name}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Media Column (Alternates side on desktop) */}
                <div
                  className={`lg:col-span-5 w-full ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {uni.logo ? (
                    <div className="relative w-full h-[200px] sm:h-[280px] rounded-xl overflow-hidden shadow-sm border border-[#0D6493]/15 bg-white p-10 flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={uni.logo}
                          alt={uni.logoAlt || `${uni.name} logo`}
                          width={320}
                          height={160}
                          unoptimized={true}
                          className="max-h-40 w-auto max-w-full object-contain"
                        />
                      </div>
                    </div>
                  ) : uni.image ? (
                    <div className="relative w-full h-[200px] sm:h-[280px] rounded-xl overflow-hidden shadow-sm border border-slate-200/50 bg-white p-5 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={uni.image}
                          alt={uni.imageAlt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          unoptimized={true}
                        />
                      </div>
                    </div>
                  ) : (
                    /* Premium initials-based fallback card */
                    <div className="w-full h-[200px] sm:h-[280px] bg-gradient-to-br from-[#0D6493]/5 to-[#0D6493]/15 flex flex-col items-center justify-center rounded-xl border border-[#0D6493]/15 relative p-5 text-center shadow-inner">
                      <div className="w-20 h-20 rounded-full bg-[#0D6493]/10 flex items-center justify-center mb-4">
                        <span className="text-[#0D6493] font-bold text-2xl tracking-wider">
                          {initials}
                        </span>
                      </div>
                      <span className="text-slate-800 font-bold text-lg leading-snug">
                        {uni.name}
                      </span>
                      <span className="text-slate-500 text-xs mt-2 uppercase tracking-wider font-semibold">
                        Image Unavailable
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Name and Ranking */}
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                      {uni.name}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-600 text-xs font-bold border border-amber-500/20">
                      <Award className="h-4.5 w-4.5" />
                      <span>{uni.ranking}</span>
                    </div>
                  </div>

                  {/* Course Table */}
                  <div className="space-y-3.5">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider">
                      <GraduationCap className="h-4.5 w-4.5 text-[#0D6493]" />
                      <span>Course Fee Structure</span>
                    </h4>
                    {/* Table wrapper for contained horizontal scrolling */}
                    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                      <table className="w-full text-left border-collapse min-w-[450px]">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-4.5 py-3.5 text-xs font-bold text-slate-700 uppercase tracking-wider">Course</th>
                            <th className="px-4.5 py-3.5 text-xs font-bold text-slate-700 uppercase tracking-wider">Duration</th>
                            <th className="px-4.5 py-3.5 text-xs font-bold text-slate-700 uppercase tracking-wider">Annual Tuition Fee</th>
                          </tr>
                        </thead>
                        <tbody>
                          {uni.courses.map((course, cIdx) => (
                            <tr
                              key={cIdx}
                              className="border-b last:border-0 border-slate-100 hover:bg-slate-50/50 transition-colors"
                            >
                              <td className="px-4.5 py-3.5 text-sm font-semibold text-slate-800">{course.name}</td>
                              <td className="px-4.5 py-3.5 text-sm text-slate-600 font-medium">{course.duration}</td>
                              <td className="px-4.5 py-3.5 text-sm font-semibold text-[#0D6493]">{course.annualTuitionFee}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Eligibility and Careers Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Eligibility */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                        Eligibility Criteria:
                      </h4>
                      <ul className="space-y-2">
                        {uni.eligibility.map((el, elIdx) => (
                          <li key={elIdx} className="flex items-start gap-2.5 text-xs text-slate-650 font-medium">
                            <Check className="h-4 w-4 text-[#0D6493] shrink-0 mt-0.5" />
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Careers */}
                    <div className="space-y-3">
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider">
                        <Briefcase className="h-4 w-4 text-[#0D6493]" />
                        <span>Career Opportunities:</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {uni.careers.map((career, carIdx) => (
                          <span
                            key={carIdx}
                            className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* University Note */}
        {note && (
          <div className="mt-10 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 flex items-start gap-3 max-w-4xl mx-auto">
            <Calendar className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm font-semibold text-slate-700 leading-relaxed italic">
              {note}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
