import React from "react";
import Link from "next/link";
import { destinationsData } from "@/lib/data/destinations";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import { ArrowRight, DollarSign, Briefcase } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Destinations Abroad | Edu-Wire Overseas Consultant",
  description: "Learn about studying abroad in UK, USA, Canada, Australia, Germany, Ireland, and other premium international education destinations.",
};

export default function DestinationsOverviewPage() {
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Study Destinations
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Explore world-class academic institutions, post-study work regulations, and admission criteria across top global countries.
          </p>
        </div>
      </section>

      {/* Destinations Grid Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex-grow">
        <SectionHeader
          title="Where Do You Want to"
          highlightedWord="Study?"
          subtitle="Click on any country to view extensive details on top universities, tuition fees, visa documents, and post-study opportunities."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {destinationsData.map((dest) => (
            <div
              key={dest.slug}
              className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-200 transition-all duration-200"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-950 mb-3">{dest.country}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {dest.description}
                </p>

                {/* Badges / Quick stats */}
                <div className="grid grid-cols-1 gap-2.5 mb-6 bg-slate-50 p-4 rounded-2xl text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <DollarSign className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span><strong>Tuition:</strong> {dest.costOfStudy}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Briefcase className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span><strong>Post-Study Work:</strong> {dest.postStudyWork}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/destinations/${dest.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark hover:gap-3 transition-all"
              >
                <span>View Country Guide</span>
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
