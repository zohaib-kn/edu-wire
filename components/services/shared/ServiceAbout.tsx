"use client";

import React from "react";
import Image from "next/image";

interface ServiceAboutProps {
  heading: string;
  paragraphs: string[];
  imagePath: string;
}

export default function ServiceAbout({
  heading,
  paragraphs,
  imagePath,
}: ServiceAboutProps) {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Image */}
          <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-slate-100 shadow-sm">
            <Image
              src={imagePath}
              alt="About IELTS Coaching Program"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493]/70 mb-2">
              Introduction
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {heading}
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
