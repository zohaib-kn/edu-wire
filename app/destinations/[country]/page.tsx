import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDestinationBySlug, destinationsData } from "@/lib/data/destinations";
import DestinationHero from "@/components/destinations/DestinationHero";
import DestinationAbout from "@/components/destinations/DestinationAbout";
import WhyStudySection from "@/components/destinations/WhyStudySection";
import DestinationUniversities from "@/components/destinations/DestinationUniversities";
import DestinationProcessWrapper from "@/components/destinations/DestinationProcessWrapper";
import DestinationFAQSection from "@/components/destinations/DestinationFAQSection";
import CTASection from "@/components/ui/CTASection";
import FinalCTA from "@/components/home/FinalCTA";
import { CheckCircle2, Wallet, Calendar, Briefcase, GraduationCap, Check } from "lucide-react";

interface PageProps {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  const legacySlugs = destinationsData.map((d) => ({ country: d.slug }));
  const premiumSlugs = ["uk", "australia", "usa", "canada"].map((slug) => ({ country: slug }));
  
  // Combine unique slugs
  const allSlugs = [...premiumSlugs];
  legacySlugs.forEach((item) => {
    if (!allSlugs.some((s) => s.country === item.country)) {
      allSlugs.push(item);
    }
  });
  return allSlugs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params;
  const decodedCountry = decodeURIComponent(country);
  
  // Check premium data first
  const premiumData = getDestinationBySlug(decodedCountry);
  if (premiumData) {
    return {
      title: premiumData.metadata.title,
      description: premiumData.metadata.description,
    };
  }

  // Fallback to legacy data
  const legacyData = destinationsData.find((d) => d.slug === decodedCountry);
  if (legacyData) {
    return {
      title: `Study in ${legacyData.country} | Edu-Wire Destinations`,
      description: legacyData.description,
    };
  }

  return {};
}

export default async function DestinationDetailsPage({ params }: PageProps) {
  const { country } = await params;
  const decodedCountry = decodeURIComponent(country);

  // 1. Check if we have modular premium data for this slug
  const premiumData = getDestinationBySlug(decodedCountry);

  const containerClass = "bg-slate-50 flex flex-col min-h-screen";

  if (premiumData) {
    return (
      <main className={containerClass}>
        <DestinationHero key={premiumData.slug} data={premiumData.hero} />
        <DestinationAbout data={premiumData.about} />
        <WhyStudySection benefits={premiumData.benefits} countryName={premiumData.countryName} />
        <DestinationUniversities
          universities={premiumData.universities}
          note={premiumData.universityNote}
          countryName={premiumData.countryName}
        />
        <DestinationProcessWrapper
          journey={premiumData.journey}
          applicationProcess={premiumData.applicationProcess}
        />
        <DestinationFAQSection faqs={premiumData.faqs} />
        <FinalCTA />
      </main>
    );
  }

  // 2. Otherwise, check legacy data to prevent 404
  const legacyData = destinationsData.find((d) => d.slug === decodedCountry);

  if (legacyData) {
    return (
      <main className={containerClass}>
        {/* Header Banner */}
        <section className="bg-slate-900 text-white py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
              Study in {legacyData.country}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              A comprehensive guide to course programs, post-study work visa rights, and admission steps.
            </p>
          </div>
        </section>

        {/* Content Layout */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-slate-950 mb-4">Why Study in {legacyData.country}?</h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  {legacyData.description}
                </p>
              </div>

              {/* Key benefits */}
              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-4">Key Benefits &amp; Highlights</h3>
                <ul className="grid grid-cols-1 gap-3.5">
                  {legacyData.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eligibility */}
              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-4">Admission Eligibility Criteria</h3>
                <ul className="grid grid-cols-1 gap-2.5 bg-slate-50 p-6 rounded-2xl">
                  {legacyData.eligibility.map((req, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-sm text-slate-700 font-medium">
                      <Check className="h-4.5 w-4.5 text-amber-500 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Universities */}
              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-4">Popular Universities &amp; Colleges</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {legacyData.universities.map((uni, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-white">
                      <GraduationCap className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm font-semibold text-slate-800 leading-tight">{uni}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick info Sidebar */}
            <div className="space-y-6">
              <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-sm border border-slate-800">
                <h3 className="text-lg font-bold border-b border-slate-800 pb-3 mb-4">Country Factsheet</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Wallet className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Tuition Fees Guidance</div>
                      <div className="text-sm font-medium mt-0.5 leading-snug">{legacyData.costOfStudy}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Post-Study Work Visa</div>
                      <div className="text-sm font-medium mt-0.5 leading-snug">{legacyData.postStudyWork}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Intakes</div>
                      <div className="text-sm font-medium mt-0.5 leading-snug">{legacyData.intake}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    );
  }

  // 3. Fallback to 404
  notFound();
}
