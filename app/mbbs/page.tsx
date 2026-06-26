import React from "react";
import Link from "next/link";
import { mbbsData } from "@/lib/data/mbbs";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import { ArrowRight, Globe, Clock, Wallet, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study MBBS Abroad | Edu-Wire Overseas Consultant",
  description: "Explore affordable English-medium MBBS opportunities abroad in Italy, Romania, Russia, Georgia, Poland, and other top European destinations.",
};

export default function MBBSOverviewPage() {
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Study MBBS Abroad
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Secure admission to globally recognized government medical universities with affordable fee structures and premium quality clinical training.
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex-grow">
        <SectionHeader
          title="Choose Your medical study"
          highlightedWord="Destination"
          subtitle="Explore medical education pathways globally, recognized by WHO, NMC/MCI, and European medical boards."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {mbbsData.map((country) => (
            <div
              key={country.slug}
              className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-200 transition-all duration-200"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-slate-950">{country.country}</h3>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {country.description}
                </p>

                {/* Country details badges */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 p-4 rounded-2xl text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{country.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Globe className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{country.language}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 col-span-2">
                    <Wallet className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span className="truncate">{country.feeRange}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/mbbs/${country.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark hover:gap-3 transition-all"
              >
                <span>View Details</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
