"use client";

import React from "react";
import { Clock, Info } from "lucide-react";
import { ServicePage } from "@/lib/data/service-pages/types";

interface IeltsTestDetailsProps {
  data: ServicePage["testDetails"];
}

export default function IeltsTestDetails({ data }: IeltsTestDetailsProps) {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-slate-50/60 select-none border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Main Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493]/70 mb-2 block">
            Test Details & Structure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            {data.heading}
          </h2>
        </div>

        {/* Details Stack */}
        <div className="space-y-16">
          
          {/* 1. Types of IELTS Tests */}
          <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-100 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              {data.types.heading}
            </h3>
            <p className="text-slate-600 text-sm md:text-base mb-6 font-normal">
              {data.types.description}
            </p>
            
            {/* Semantic Table with wrapper for horizontal scroll */}
            <div className="overflow-x-auto w-full border border-slate-200/80 rounded-lg">
              <table className="min-w-full divide-y divide-slate-200">
                <caption className="sr-only">{data.types.heading} details and purposes</caption>
                <thead className="bg-[#0D6493]/5">
                  <tr>
                    {data.types.table.headers.map((header: string, idx: number) => (
                      <th
                        key={idx}
                        scope="col"
                        className="px-6 py-4 text-left text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100">
                  {data.types.table.rows.map((row: string[], rowIdx: number) => (
                    <tr key={rowIdx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">
                        {row[0]}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 font-normal leading-relaxed">
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. IELTS Test Format */}
          <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-100 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              {data.format.heading}
            </h3>
            <p className="text-slate-600 text-sm md:text-base mb-6 font-normal">
              {data.format.description}
            </p>
            
            {/* Format Table */}
            <div className="overflow-x-auto w-full border border-slate-200/80 rounded-lg mb-6">
              <table className="min-w-full divide-y divide-slate-200">
                <caption className="sr-only">{data.format.heading} modules, duration, and details</caption>
                <thead className="bg-[#0D6493]/5">
                  <tr>
                    {data.format.table.headers.map((header: string, idx: number) => (
                      <th
                        key={idx}
                        scope="col"
                        className="px-6 py-4 text-left text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100">
                  {data.format.table.rows.map((row: string[], rowIdx: number) => (
                    <tr key={rowIdx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">
                        {row[0]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#0D6493]">
                        {row[1]}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 font-normal leading-relaxed">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total Time Callout */}
            <div className="inline-flex items-center gap-3 p-4 bg-[#0D6493]/5 border-l-4 border-[#0D6493] rounded-[4px] text-[#0D6493] w-full">
              <Clock className="h-5 w-5 shrink-0" />
              <span className="text-sm font-bold">{data.format.totalTime}</span>
            </div>
          </div>

          {/* 3. IELTS Scoring */}
          <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-100 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              {data.scoring.heading}
            </h3>
            <p className="text-slate-600 text-sm md:text-base mb-6 font-normal">
              {data.scoring.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Scoring Table - Left Side */}
              <div className="lg:col-span-7 overflow-x-auto w-full border border-slate-200/80 rounded-lg">
                <table className="min-w-full divide-y divide-slate-200">
                  <caption className="sr-only">{data.scoring.heading} band scale and skill level criteria</caption>
                  <thead className="bg-[#0D6493]/5">
                    <tr>
                      {data.scoring.table.headers.map((header: string, idx: number) => (
                        <th
                          key={idx}
                          scope="col"
                          className="px-6 py-4 text-left text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    {data.scoring.table.rows.map((row: string[], rowIdx: number) => (
                      <tr key={rowIdx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#0D6493]">
                          Band {row[0]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-700">
                          {row[1]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Example Callout - Right Side */}
              <div className="lg:col-span-5 bg-amber-50/50 border border-[#F89E37]/20 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-[#F89E37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                      Scoring Example
                    </h4>
                    <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line font-medium bg-white border border-slate-100 p-4 rounded-[6px] shadow-sm">
                      {data.scoring.example}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
