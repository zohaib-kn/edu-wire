import React from "react";
import Link from "next/link";
import { servicesData } from "@/lib/data/services";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import { ArrowRight, BookOpen, GraduationCap, Coins, ShieldAlert, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Edu-Wire Overseas Consultant",
  description: "Explore our overseas education services including IELTS coaching, IMAT preparation, admission guidance, financial assistance, and scholarship guidance.",
};

const iconMap: Record<string, React.ReactNode> = {
  "ielts-training": <BookOpen className="h-8 w-8 text-primary" />,
  "imat-preparation": <Award className="h-8 w-8 text-primary" />,
  "scholarship-guidance": <GraduationCap className="h-8 w-8 text-primary" />,
  "admission-guidance": <ShieldAlert className="h-8 w-8 text-primary" />,
  "financial-assistance": <Coins className="h-8 w-8 text-primary" />,
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Comprehensive support tailored to help you secure admissions and scholarships at world-class global universities.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex-grow">
        <SectionHeader
          title="How We Support Your"
          highlightedWord="Success"
          subtitle="From language proficiency exams to post-arrival adjustments, we guide you at every stage."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-200 transition-all duration-200"
            >
              <div>
                <div className="mb-6 inline-flex items-center justify-center p-3 bg-slate-50 rounded-2xl">
                  {iconMap[service.slug] || <BookOpen className="h-8 w-8 text-primary" />}
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark hover:gap-3 transition-all"
              >
                <span>Learn More</span>
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
