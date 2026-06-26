import React from "react";
import { notFound } from "next/navigation";
import { mbbsData } from "@/lib/data/mbbs";
import CTASection from "@/components/ui/CTASection";
import MbbsHero from "@/components/mbbs/MbbsHero";
import CountryAboutSection from "@/components/mbbs/CountryAboutSection";
import WhyChooseMbbs from "@/components/mbbs/WhyChooseMbbs";
import TopUniversitiesSection from "@/components/mbbs/TopUniversitiesSection";
import EligibilitySection from "@/components/mbbs/EligibilitySection";
import StudyJourney from "@/components/mbbs/StudyJourney";
import ApplicationProcess from "@/components/mbbs/ApplicationProcess";
import ProudAchievers from "@/components/mbbs/ProudAchievers";
import MbbsFaqSection from "@/components/mbbs/MbbsFaqSection";
import ConsultationCTAStrip from "@/components/mbbs/ConsultationCTAStrip";
import FinalCTA from "@/components/home/FinalCTA";
import { CheckCircle2, Clock, Wallet, Calendar, Globe, GraduationCap, Check } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return mbbsData.map((item) => ({
    country: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params;
  const data = mbbsData.find((c) => c.slug === country);
  if (!data) return {};

  return {
    title: data.seoTitle || `Study MBBS in ${data.country} | Edu-Wire`,
    description: data.seoDescription || data.description,
  };
}

export default async function MBBSDetailsPage({ params }: PageProps) {
  const { country } = await params;
  const data = mbbsData.find((c) => c.slug === country);

  if (!data) {
    notFound();
  }

  // Check if this country has the new detailed data for the premium page flow
  const isPremiumCountry = !!(data.eligibilityDetailed && data.applicationProcess);

  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* Premium Hero Section */}
      <MbbsHero key={data.slug} data={data} />

      {/* About Country Section */}
      <CountryAboutSection key={data.slug} data={data} />

      {/* Why Choose MBBS Section */}
      <WhyChooseMbbs key={data.slug} data={data} />

      {/* Top Universities Section */}
      <TopUniversitiesSection key={data.slug} data={data} />

      {isPremiumCountry ? (
        <>
          {/* Redesigned layout sections */}
          <EligibilitySection key={data.slug} data={data} />
          <StudyJourney key={data.slug} data={data} />
          <ApplicationProcess key={data.slug} data={data} />
          <ProudAchievers key={data.slug} data={data} />
          <MbbsFaqSection key={data.slug} data={data} />
          <ConsultationCTAStrip
            countryName={data.country}
            description={
              data.slug === "italy"
                ? "Get support with university selection, IMAT, scholarships, pre-enrolment, and visa preparation from our expert counsellors."
                : undefined
            }
          />
          <FinalCTA />
        </>
      ) : (
        <>
          {/* Fallback Legacy Content Layout */}
          <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 flex-grow">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Info */}
              <div className="lg:col-span-2 space-y-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-950 mb-4">Course Description</h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {data.description}
                  </p>
                </div>

                {/* Why study there */}
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-4">Why Choose {data.country}?</h3>
                  <ul className="grid grid-cols-1 gap-3.5">
                    {data.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-sm text-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility */}
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-4">Eligibility Requirements</h3>
                  <ul className="grid grid-cols-1 gap-2.5 bg-slate-50 p-6 rounded-2xl">
                    {data.eligibility.map((req, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-sm text-slate-700 font-medium">
                        <Check className="h-4.5 w-4.5 text-amber-500 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Universities */}
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-4">Top Medical Universities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {data.universities.map((uni, idx) => (
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
                  <h3 className="text-lg font-bold border-b border-slate-800 pb-3 mb-4">Quick Factsheet</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Duration</div>
                        <div className="text-sm font-medium mt-0.5">{data.duration}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Language of Instruction</div>
                        <div className="text-sm font-medium mt-0.5">{data.language}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Wallet className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Tuition Fee range</div>
                        <div className="text-sm font-medium mt-0.5 leading-snug">{data.feeRange}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Intakes</div>
                        <div className="text-sm font-medium mt-0.5">{data.intake}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CTASection />
        </>
      )}
    </div>
  );
}
