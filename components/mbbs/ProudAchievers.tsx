"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Award, CheckCircle } from "lucide-react";
import { MBBSCountry } from "@/lib/data/mbbs";

interface ProudAchieversProps {
  data: MBBSCountry;
}

export default function ProudAchievers({ data }: ProudAchieversProps) {
  // Track image load errors by index
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  if (!data.achievers || data.achievers.length === 0) {
    return null;
  }

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Proud Achievers
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            Meet some of the successful students who secured their Italian medical student visas with EduWire.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.achievers.map((student, idx) => {
            const hasError = imageErrors[idx];
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between group"
              >
                {/* Image Frame */}
                <div className="relative aspect-[3/4] w-full bg-slate-100 flex items-center justify-center overflow-hidden">
                  {!hasError ? (
                    <Image
                      src={student.image}
                      alt={student.name || `EduWire Student Visa Achiever ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => handleImageError(idx)}
                      unoptimized={true} // Since the files don't have extensions, disabling Next.js Image Optimization helps prevent pipeline errors
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0D6493]/10 to-[#E1EDF8] flex flex-col items-center justify-center p-6 gap-3">
                      <div className="w-16 h-16 rounded-full bg-[#0D6493]/10 flex items-center justify-center text-[#0D6493]">
                        <User className="h-8 w-8" />
                      </div>
                      <span className="text-sm font-extrabold text-[#0D6493] text-center">
                        Visa Approved
                      </span>
                    </div>
                  )}
                  
                  {/* Floating Visa Stamp Badge */}
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    <span>Visa Stamped</span>
                  </div>
                </div>

                {/* Footer labels */}
                <div className="p-5 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0D6493]/10 flex items-center justify-center text-[#0D6493] shrink-0">
                    <Award className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-800">
                      {student.name || `EduWire Achiever #${idx + 1}`}
                    </h4>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                      {student.university || "Study MBBS in Italy"}
                    </p>
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
