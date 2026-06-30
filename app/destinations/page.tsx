import React from "react";
import type { Metadata } from "next";
import { destinationData } from "@/lib/data/destinations";
import DestinationCard from "@/components/destinations/DestinationCard";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Study Destinations Abroad | Edu-Wire Overseas Consultant",
  description:
    "Explore world-class study destinations including the UK, USA, Canada, Australia, Germany, and Ireland. Get expert guidance on universities, visas, and admissions.",
};

export default function DestinationsListingPage() {
  const published = destinationData.filter((d) => d.listing?.published === true);

  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* ── Intro Section ── */}
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 py-14 text-center">
          {/* Eyebrow */}
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D6493] mb-3 select-none">
            Study Destinations
          </p>
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Explore Your Study&nbsp;Destination
          </h1>
          {/* Supporting paragraph */}
          <p className="mt-4 text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            Edu-Wire helps Indian students navigate top universities, visa requirements, and admission processes across the world&apos;s most sought-after study destinations.
          </p>
        </div>
      </section>

      {/* ── Card Grid ── */}
      <section className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Study destination cards"
        >
          {published.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <FinalCTA />
    </div>
  );
}
