"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";
import { AdmissionStep } from "@/lib/data/service-pages/types";

const getChipsForAdmissionStep = (step: string): string[] => {
  const s = step.toLowerCase();
  if (s.includes("1")) return ["Profile Review", "Guidance"];
  if (s.includes("2")) return ["Shortlisting", "Course Select"];
  if (s.includes("3")) return ["SOP Writing", "LOM Review"];
  if (s.includes("4")) return ["Uni Apply", "Form Fill"];
  if (s.includes("5")) return ["Visa Apply", "Mock Interview"];
  if (s.includes("6")) return ["Pre-Departure", "Travel Info"];
  if (s.includes("7")) return ["Post-Arrival", "Settle Down"];
  return ["EduWire Assistance", "Success"];
};

interface AdmissionJourneyProps {
  steps: AdmissionStep[];
}

export default function AdmissionJourney({ steps }: AdmissionJourneyProps) {
  const { openModal } = useModal();

  return (
    <section className="py-16 md:py-24 bg-slate-50/65 select-none relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Your <span className="text-primary font-extrabold relative inline-block">Admission Journey<span className="absolute left-0 bottom-1 w-full h-[6px] bg-primary/10 -z-10" /></span> with EduWire
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Step-by-step guidance for a successful study abroad experience
          </p>
        </div>

        {/* Steps Stack */}
        <div className="relative space-y-16 md:space-y-28">
          {/* Vertical timeline line on desktop */}
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-200/80 -translate-x-1/2 hidden lg:block" />

          {steps.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative group"
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-slate-50 bg-primary text-white font-extrabold text-sm flex items-center justify-center shadow-md shadow-primary/20 z-10 transition-transform duration-300 group-hover:scale-110 hidden lg:flex">
                  {index + 1}
                </div>

                {/* Content Block */}
                <div
                  className={`flex flex-col justify-center ${
                    isEven ? "lg:order-1 lg:text-right lg:items-end" : "lg:order-2 lg:text-left lg:items-start"
                  }`}
                >
                  <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-6 max-w-xl">
                    {item.description}
                  </p>
                  
                  <button
                    onClick={openModal}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold bg-white text-slate-800 border border-slate-200 rounded-xl transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary active:scale-[0.98] shadow-sm hover:shadow-md hover:shadow-primary/10"
                  >
                    {item.buttonText}
                  </button>
                </div>

                {/* Image Block */}
                <div
                  className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 shadow-lg bg-slate-50 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle inner vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />

                  {/* Decorative rotating dotted ring overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-white/20 animate-[spin_100s_linear_infinite] pointer-events-none z-10" />

                  {/* Floating chips (short and decorative) */}
                  {getChipsForAdmissionStep(item.step).map((chip, idx) => (
                    <div
                      key={idx}
                      className={`absolute ${idx === 0 ? "top-4 right-4 animate-float-1" : "bottom-4 left-4 animate-float-2"} flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md border border-emerald-100 text-[10px] font-bold text-emerald-800 z-10 pointer-events-none`}
                    >
                      {chip}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
