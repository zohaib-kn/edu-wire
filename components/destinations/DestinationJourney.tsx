"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { DestinationJourneyStep } from "@/lib/data/destinations/types";

interface DestinationJourneyProps {
  journey: {
    title: string;
    disclaimer: string;
    steps: DestinationJourneyStep[];
  };
  activeStep?: number;
  onStepClick?: (idx: number) => void;
}

export default function DestinationJourney({ journey, activeStep = 0, onStepClick }: DestinationJourneyProps) {
  return (
    <section className="py-12 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#0D6493]/5 text-[#0D6493] text-xs font-bold uppercase tracking-wider">
            Timeline
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            {journey.title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-xs md:text-sm italic mt-2">
            <HelpCircle className="h-4 w-4 shrink-0 text-amber-500" />
            <span>{journey.disclaimer}</span>
          </div>
        </div>

        {/* Stepper Timeline Container */}
        <div className="relative max-w-5xl mx-auto mt-12">
          {/* Desktop Timeline: Horizontal */}
          <div className="hidden md:block">
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[4px] bg-slate-100 z-0">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${(activeStep / (journey.steps.length - 1)) * 100}%` }}
              />
            </div>

            <div className="relative z-10 flex justify-between items-center w-full">
              {journey.steps.map((step, idx) => {
                const isActive = idx === activeStep;
                const isCompleted = idx < activeStep;

                return (
                  <button
                    key={idx}
                    onClick={() => onStepClick?.(idx)}
                    className="flex flex-col items-center gap-4 group cursor-pointer focus:outline-none"
                    aria-label={`Jump to Step ${idx + 1}: ${step.label}`}
                  >
                    {/* Circle Indicator */}
                    <div
                      className={`w-14 h-14 rounded-full border-4 flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                        isActive
                          ? "bg-primary border-primary text-white shadow-lg ring-4 ring-[#0D6493]/10"
                          : isCompleted
                          ? "bg-primary border-primary text-white"
                          : "bg-white border-slate-200 text-slate-400 group-hover:border-[#0D6493]/30"
                      }`}
                    >
                      {idx + 1}
                    </div>
                    {/* Step Label */}
                    <span
                      className={`text-sm font-bold tracking-wide transition-colors ${
                        isActive
                          ? "text-primary"
                          : isCompleted
                          ? "text-slate-700"
                          : "text-slate-450 group-hover:text-[#0D6493]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline: Vertical (Simple List Stepper) */}
          <div className="md:hidden space-y-4">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {journey.steps.map((step, idx) => {
                const isActive = idx === activeStep;

                return (
                  <button
                    key={idx}
                    onClick={() => onStepClick?.(idx)}
                    className={`flex flex-col items-center p-3 rounded-2xl border text-center transition-all ${
                      isActive
                        ? "bg-[#0D6493]/5 border-primary text-primary font-bold"
                        : "bg-slate-50 border-slate-100 text-slate-500"
                    }`}
                  >
                    <span className="text-xs font-semibold mb-1 opacity-70">Step {idx + 1}</span>
                    <span className="text-sm font-bold truncate w-full">{step.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
