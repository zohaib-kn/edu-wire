"use client";

import React from "react";
import { Landmark, FileText, Compass, Award } from "lucide-react";
import { MBBSCountry } from "@/lib/data/mbbs";

interface EligibilitySectionProps {
  data: MBBSCountry;
}

export default function EligibilitySection({ data }: EligibilitySectionProps) {
  // If the detailed eligibility data is not present, hide this section
  if (!data.eligibilityDetailed) {
    return null;
  }

  const { subtitle, criteria, entranceTest, documents } = data.eligibilityDetailed;

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            MBBS in <span className="text-[#0D6493]">{data.country}</span> for Indian Students
          </h2>
          {subtitle && (
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card A: Basic Eligibility */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0D6493]/10 flex items-center justify-center text-[#0D6493] shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Basic Eligibility Criteria</h3>
            </div>
            
            <ul className="space-y-4 flex-grow">
              {criteria.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f4a261] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card B: Entrance Test */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0D6493]/10 flex items-center justify-center text-[#0D6493] shrink-0">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Entrance Test</h3>
            </div>

            {entranceTest ? (
              <div className="space-y-4 flex-grow">
                <h4 className="text-base font-bold text-slate-800">{entranceTest.title}</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {entranceTest.description}
                </p>
              </div>
            ) : (
              <p className="text-slate-500 text-sm flex-grow">
                No entry test required, or admissions are direct based on academic marks.
              </p>
            )}
          </div>

          {/* Card C: Required Documents */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0D6493]/10 flex items-center justify-center text-[#0D6493] shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Required Documents</h3>
            </div>

            <ul className="space-y-3.5 flex-grow">
              {documents.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D6493] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
