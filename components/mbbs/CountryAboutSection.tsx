"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { MBBSCountry } from "@/lib/data/mbbs";

interface CountryAboutSectionProps {
  data: MBBSCountry;
}

export default function CountryAboutSection({ data }: CountryAboutSectionProps) {
  const [imageError, setImageError] = useState(false);

  // Hide the section completely if there is no country about metadata
  if (!data.aboutParagraphs || data.aboutParagraphs.length === 0) {
    return null;
  }

  const aboutTitle = data.aboutTitle || `About ${data.country}`;
  const aboutImage = data.aboutImage || "/images/Italy-cities.webp";

  return (
    <section className="relative py-20 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[380px] md:h-[420px] rounded-3xl overflow-hidden shadow-md border border-slate-100">
            {!imageError ? (
              <Image
                src={aboutImage}
                alt={`Landscape of ${data.country}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#0D6493]/10 to-[#E1EDF8] flex items-center justify-center">
                <span className="text-[#0D6493] font-bold text-sm">Image Unavailable</span>
              </div>
            )}
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Heading */}
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {aboutTitle}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {data.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Highlights Chips */}
            {data.aboutHighlights && data.aboutHighlights.length > 0 && (
              <div className="pt-4 flex flex-wrap gap-3">
                {data.aboutHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 bg-[#0D6493]/5 border border-[#0D6493]/10 rounded-full px-4.5 py-2 text-xs font-bold text-[#0D6493]"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-[#0D6493]/70 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
