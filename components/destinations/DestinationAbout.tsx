"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface DestinationAboutProps {
  data: {
    title: string;
    image: string;
    imageAlt: string;
    points: string[];
  };
}

export default function DestinationAbout({ data }: DestinationAboutProps) {
  return (
    <section className="py-16 bg-slate-50 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative w-full h-[280px] md:h-[360px] rounded-xl overflow-hidden shadow-md border border-slate-100">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
              unoptimized={true}
            />
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0D6493]/5 text-[#0D6493] text-xs font-bold uppercase tracking-wider">
              Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              {(() => {
                if (data.title.startsWith("About ")) {
                  const country = data.title.substring(6);
                  return (
                    <>
                      About <span className="text-[#0D6493]">{country}</span>
                    </>
                  );
                }
                return data.title;
              })()}
            </h2>
            
            <ul className="space-y-3 md:space-y-4">
              {data.points.map((point, index) => (
                <li key={index} className="flex items-start gap-4 text-slate-750">
                  <div className="w-6 h-6 rounded-full bg-[#0D6493]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0D6493]" />
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
