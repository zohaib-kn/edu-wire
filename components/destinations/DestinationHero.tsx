"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";
import { DestinationHeroData } from "@/lib/data/destinations/types";

interface DestinationHeroProps {
  data: DestinationHeroData;
}

export default function DestinationHero({ data }: DestinationHeroProps) {
  const { openModal } = useModal();
  const [imageError, setImageError] = useState(false);

  const highlightWords = ["the USA", "USA", "Australia", "the UK", "UK", "Austria"];

  function renderTitle(title: string) {
    for (const word of highlightWords) {
      if (title.includes(word)) {
        const parts = title.split(word);
        return (
          <>
            {parts[0]}
            <span className="text-amber-500">{word}</span>
            {parts[1]}
          </>
        );
      }
    }
    return title;
  }

  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-start overflow-hidden bg-slate-950 select-none">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {!imageError && data.image ? (
          <Image
            key={data.image}
            src={data.image}
            alt={data.imageAlt}
            fill
            priority
            className="object-cover object-center transform scale-100 transition-transform duration-700"
            unoptimized={true}
            onError={() => setImageError(true)}
          />
        ) : null}
        {/* Controlled Blue Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent md:from-slate-950/85 md:via-slate-950/60 md:to-slate-900/10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 w-full flex flex-col justify-center items-start text-white">
        <div className="max-w-2xl animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight md:leading-none">
            {renderTitle(data.title)}
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed font-medium">
            {data.description}
          </p>
          <div className="mt-8">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-full bg-[#0D6493] px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-[#074567] transition-all transform hover:scale-[1.02] active:scale-[0.98] outline-none"
            >
              {data.primaryCTA}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
