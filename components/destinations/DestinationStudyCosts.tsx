"use client";

import React from "react";
import { Landmark, Wallet } from "lucide-react";
import { DestinationStudyCostsSection } from "@/lib/data/destinations/types";

interface DestinationStudyCostsProps {
  data?: DestinationStudyCostsSection;
}

export default function DestinationStudyCosts({
  data,
}: DestinationStudyCostsProps) {
  if (!data) return null;

  return (
    <section className="py-16 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Title and Description */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0D6493]/5 text-[#0D6493] text-xs font-bold uppercase tracking-wider">
              Finances
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              {data.title.includes("Cost Of Studying") ? (
                <>
                  Cost of Studying <span className="text-[#0D6493]">in Spain</span>
                </>
              ) : (
                data.title
              )}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Right Column: Comparison Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {data.groups.map((group, gIdx) => {
              const isTuition = group.title.toLowerCase().includes("tuition");

              return (
                <div
                  key={gIdx}
                  className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden shadow-sm flex flex-col h-full"
                >
                  {/* Header Banner */}
                  <div className="bg-[#0D6493] text-white p-5 flex items-center gap-3 shrink-0">
                    {isTuition ? (
                      <Landmark className="h-5 w-5 text-[#e8a87c]" />
                    ) : (
                      <Wallet className="h-5 w-5 text-[#e8a87c]" />
                    )}
                    <h3 className="font-bold text-sm tracking-wide uppercase">
                      {group.title}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-center space-y-4">
                    {group.costs && group.costs.length > 0 ? (
                      <div className="space-y-3.5">
                        {group.costs.map((cost, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex justify-between items-center border-b border-slate-100 pb-2.5 last:border-0 last:pb-0"
                          >
                            <span className="text-sm font-semibold text-slate-500">
                              {cost.label}
                            </span>
                            <span className="text-base font-bold text-slate-900">
                              {cost.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Large single card style for Living Expenses
                      <div className="text-center py-4">
                        <div className="text-3xl font-extrabold text-slate-900">
                          {group.valueLarge}
                        </div>
                        <p className="text-xs font-semibold text-slate-400 mt-2 uppercase tracking-wider">
                          Estimated Monthly Cost
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
