"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";
import { DestinationHeroData } from "@/lib/data/destinations/types";

interface DestinationHeroProps {
  data: DestinationHeroData;
}

const HIGHLIGHT_WORDS = [
  "the USA",
  "USA",
  "Australia",
  "the UK",
  "UK",
  "Canada",
  "Germany",
  "Ireland",
  "Italy",
  "Austria",
  "Spain",
  "Romania",
];

function renderTitle(title: string) {
  for (const word of HIGHLIGHT_WORDS) {
    if (title.includes(word)) {
      const parts = title.split(word);
      return (
        <>
          {parts[0]}
          <span
            className="font-bold underline"
            style={{
              textDecorationColor: "#e8a87c",
              textUnderlineOffset: "5px",
              textDecorationThickness: "3px",
            }}
          >
            {word}
          </span>
          {parts[1]}
        </>
      );
    }
  }
  return title;
}

/**
 * Render description with optional inline bold via **text** markers.
 */
function renderDescription(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function DestinationHero({ data }: DestinationHeroProps) {
  const { openModal } = useModal();

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Container: 46/54 split, max 1440px, 48–64px padding */}
      <div className="mx-auto grid min-h-[540px] max-w-[1440px] grid-cols-1 items-center gap-10 px-8 py-10 lg:grid-cols-[46fr_54fr] lg:gap-12 lg:px-12 lg:py-12 xl:px-16">

        {/* ── Left column: heading / description / CTA ── */}
        <div className="min-w-0 max-w-[650px]">
          {/* Heading: weight 500, tight line-height ~1.08 */}
          <h1
            className="text-4xl font-medium tracking-tight text-slate-900 md:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]"
            style={{ lineHeight: 1.08 }}
          >
            {renderTitle(data.title)}
          </h1>

          {/* Body paragraphs: 17–18px, line-height 1.7 */}
          {data.description.split("\n\n").map((para, pIdx) => (
            <p
              key={pIdx}
              className={`text-[1.0625rem] leading-[1.7] text-slate-600 ${pIdx === 0 ? "mt-5" : "mt-3"}`}
            >
              {renderDescription(para)}
            </p>
          ))}

          {/* Optional bullet conditions */}
          {data.heroBullets && data.heroBullets.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {data.heroBullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[1.0625rem] leading-[1.7] text-slate-600"
                >
                  <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D6493]" />
                  <span>{renderDescription(bullet)}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6">
            <button
              onClick={openModal}
              type="button"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-[#0D6493] bg-transparent px-6 py-2.5 text-[0.9375rem] font-semibold text-[#0D6493] transition-all duration-200 hover:bg-[#0D6493] hover:text-white active:scale-[0.98]"
            >
              {data.primaryCTA}
            </button>
          </div>
        </div>

        {/* ── Right column: hero graphic ── */}
        <div className="flex min-w-0 items-center justify-center">
          <Image
            key={data.image}
            src={data.image}
            alt={data.imageAlt}
            width={900}
            height={680}
            priority
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="block h-auto max-h-[540px] w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}
