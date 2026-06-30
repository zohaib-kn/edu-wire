"use client";

import React from "react";
import { Check } from "lucide-react";

interface ImatOverviewProps {
  data: {
    eyebrow: string;
    heading: string;
    description: string;
    points: string[];
    facts: { value: string; label: string }[];
  };
}

export default function ImatOverview({ data }: ImatOverviewProps) {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white select-none text-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Description & Bullet Points */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493]/70 mb-2 block">
              {data.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-tight mb-6">
              What Is <em className="text-[#0D6493] not-italic font-extrabold">IMAT</em>?
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed font-normal">
              {data.description}
            </p>
            <ul className="space-y-4">
              {data.points.map((point: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base text-slate-700 font-normal leading-relaxed">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-[#0D6493]/10 flex items-center justify-center text-[#0D6493] mt-1">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Fact Grid */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-slate-950 text-white rounded-lg p-6 md:p-8 relative overflow-hidden shadow-xl">
              {/* Radial background decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(10,61,143,0.4),transparent_60%)] pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.facts.map((fact: { value: string; label: string }, index: number) => {
                  const isFullWidth = index === data.facts.length - 1;
                  return (
                    <div
                      key={index}
                      className={`p-5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200 ${
                        isFullWidth ? "col-span-1 sm:col-span-2 border-[#c49a28]/35" : ""
                      }`}
                    >
                      <div className={`font-extrabold text-white leading-none mb-2 ${
                        isFullWidth ? "text-lg md:text-xl text-[#c49a28]" : "text-2xl md:text-3xl text-[#c49a28]"
                      }`}>
                        {fact.value}
                      </div>
                      <div className="text-xs text-slate-400 font-semibold leading-relaxed uppercase tracking-wider">
                        {fact.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
