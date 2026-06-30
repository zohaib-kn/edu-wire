import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";
import { getServicePageBySlug } from "@/lib/data/service-pages";
import type { Metadata } from "next";

// Premium shared components
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceAbout from "@/components/services/shared/ServiceAbout";
import ServiceHighlights from "@/components/services/shared/ServiceHighlights";
import ServiceBenefits from "@/components/services/shared/ServiceBenefits";
import ServiceFAQ from "@/components/services/shared/ServiceFAQ";
import ServiceCategoryGrid from "@/components/services/shared/ServiceCategoryGrid";
import CTASection from "@/components/ui/CTASection";

// IELTS specific components
import IeltsTestDetails from "@/components/services/ielts/IeltsTestDetails";

// Admission Guidance components
import AdmissionJourney from "@/components/services/admission-guidance/AdmissionJourney";

// Financial Assistance components
import FinancialPartners from "@/components/services/financial-assistance/FinancialPartners";

// IMAT specific components
import ImatHeroCard from "@/components/services/imat/ImatHeroCard";
import ImatOverview from "@/components/services/imat/ImatOverview";
import ImatSyllabus from "@/components/services/imat/ImatSyllabus";
import ImatProgramPhases from "@/components/services/imat/ImatProgramPhases";
import ImatWhyChoose from "@/components/services/imat/ImatWhyChoose";
import ImatBatches from "@/components/services/imat/ImatBatches";
import ImatFinalCta from "@/components/services/imat/ImatFinalCta";

// Existing Components for fallback services
import { CheckCircle2, Clock, DollarSign, Briefcase } from "lucide-react";

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  const premiumSlugs = ["ielts", "imat-preparation", "scholarship-guidance", "admission-guidance", "financial-assistance"];
  const fallbackSlugs = servicesData
    .map((s) => s.slug)
    .filter((slug) => slug !== "ielts" && slug !== "imat-preparation" && slug !== "scholarship-guidance" && slug !== "admission-guidance" && slug !== "financial-assistance" && slug !== "ielts-training");

  return [...premiumSlugs, ...fallbackSlugs].map((service) => ({
    service,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: slug } = await params;

  // 1. Check premium pages
  const premiumPage = getServicePageBySlug(slug);
  if (premiumPage) {
    return {
      title: premiumPage.metaTitle,
      description: premiumPage.metaDescription,
    };
  }

  // 2. Check fallback pages
  const fallbackService = servicesData.find((s) => s.slug === slug);
  if (fallbackService) {
    return {
      title: `${fallbackService.title} | Edu-Wire Services`,
      description: fallbackService.shortDesc,
    };
  }

  return {};
}

export default async function ServiceDetailsPage({ params }: PageProps) {
  const { service: slug } = await params;

  // 1. Check if premium page exists
  const premiumPage = getServicePageBySlug(slug);
  if (premiumPage) {
    if (slug === "ielts") {
      return (
        <div className="flex flex-col min-h-screen bg-white">
          <ServiceHero
            heading={premiumPage.hero.heading}
            description={premiumPage.hero.description}
            ctaText={premiumPage.hero.ctaText}
            imagePath={premiumPage.hero.imagePath}
            floatingCards={premiumPage.hero.floatingCards}
          />
          <ServiceAbout
            heading={premiumPage.about.heading}
            paragraphs={premiumPage.about.paragraphs}
            imagePath={premiumPage.about.imagePath}
          />
          <ServiceHighlights
            heading={premiumPage.highlights.heading}
            items={premiumPage.highlights.items}
          />
          <ServiceBenefits
            heading={premiumPage.benefits.heading}
            items={premiumPage.benefits.items}
          />
          <IeltsTestDetails data={premiumPage.testDetails} />
          <ServiceFAQ
            heading={premiumPage.faqs.heading}
            items={premiumPage.faqs.items}
          />
          <CTASection />
        </div>
      );
    }

    if (slug === "imat-preparation" && premiumPage.imatData) {
      const imat = premiumPage.imatData;
      return (
        <div className="flex flex-col min-h-screen bg-white">
          <ServiceHero
            heading={premiumPage.hero.heading}
            description={premiumPage.hero.description}
            ctaText={premiumPage.hero.ctaText}
            imagePath={premiumPage.hero.imagePath}
            badge={imat.heroBadge}
            stats={imat.heroStats}
            sideContent={
              <ImatHeroCard
                dates={imat.keyDates}
                countdownTarget={imat.countdownTarget}
              />
            }
            floatingCards={premiumPage.hero.floatingCards}
          />
          <ImatOverview data={imat.whatIsImat} />
          <ImatSyllabus data={imat.syllabus} />
          <ImatProgramPhases data={imat.program} />
          <ImatWhyChoose data={imat.whyChoose} />
          <ImatBatches data={imat.batches} />
          <ServiceFAQ
            heading={premiumPage.faqs.heading}
            items={premiumPage.faqs.items}
          />
          <ImatFinalCta data={imat.finalCta} />
        </div>
      );
    }

    if (slug === "scholarship-guidance") {
      return (
        <div className="flex flex-col min-h-screen bg-white">
          <ServiceHero
            heading={premiumPage.hero.heading}
            description={premiumPage.hero.description}
            ctaText={premiumPage.hero.ctaText}
            imagePath={premiumPage.hero.imagePath}
            floatingCards={premiumPage.hero.floatingCards}
          />
          <ServiceAbout
            heading={premiumPage.about.heading}
            paragraphs={premiumPage.about.paragraphs}
            imagePath={premiumPage.about.imagePath}
          />
          <ServiceCategoryGrid
            eyebrow="Major Study Abroad Scholarships"
            heading={premiumPage.highlights.heading}
            description="Mentioned below are the major study abroad scholarships that students can receive:"
            items={premiumPage.highlights.items}
          />
          <ServiceFAQ
            heading={premiumPage.faqs.heading}
            items={premiumPage.faqs.items}
          />
          <CTASection
            heading="Study Abroad Made Simple with EduWire!"
            description="Get expert guidance on top universities, visa, and applications — we’ll walk with you every step of the way!"
            buttonText="Book Free Counseling"
            showContactInfo={true}
            phoneNum="9300812637"
            emailText="info@edu-wire.com"
          />
        </div>
      );
    }

    if (slug === "admission-guidance" && premiumPage.admissionSteps) {
      return (
        <div className="flex flex-col min-h-screen bg-white">
          <ServiceHero
            heading={premiumPage.hero.heading}
            description={premiumPage.hero.description}
            ctaText={premiumPage.hero.ctaText}
            imagePath={premiumPage.hero.imagePath}
            floatingCards={premiumPage.hero.floatingCards}
          />
          <AdmissionJourney steps={premiumPage.admissionSteps} />
          <ServiceFAQ
            heading={premiumPage.faqs.heading}
            items={premiumPage.faqs.items}
          />
          <CTASection
            heading="Study Abroad Made Simple with EduWire!"
            description="Get expert guidance on top universities, visa, and applications — we’ll walk with you every step of the way!"
            buttonText="Book Free Counseling"
            showContactInfo={true}
            phoneNum="9300812637"
            emailText="info@edu-wire.com"
          />
        </div>
      );
    }

    if (slug === "financial-assistance" && premiumPage.financialPartners) {
      return (
        <div className="flex flex-col min-h-screen bg-white">
          <ServiceHero
            heading={premiumPage.hero.heading}
            description={premiumPage.hero.description}
            ctaText={premiumPage.hero.ctaText}
            imagePath={premiumPage.hero.imagePath}
            floatingCards={premiumPage.hero.floatingCards}
          />
          <ServiceAbout
            heading={premiumPage.about.heading}
            paragraphs={premiumPage.about.paragraphs}
            imagePath={premiumPage.about.imagePath}
          />
          <ServiceHighlights
            heading={premiumPage.highlights.heading}
            items={premiumPage.highlights.items}
          />
          <FinancialPartners
            heading="Our Financial Partners"
            partners={premiumPage.financialPartners}
          />
          <ServiceFAQ
            heading={premiumPage.faqs.heading}
            items={premiumPage.faqs.items}
          />
          <CTASection
            heading="Study Abroad Made Simple with EduWire!"
            description="Get expert guidance on top universities, visa, and applications — we’ll walk with you every step of the way!"
            buttonText="Book Free Counseling"
            showContactInfo={true}
            phoneNum="9300812637"
            emailText="info@edu-wire.com"
          />
        </div>
      );
    }
  }

  // 2. Fallback to standard layout for other services not yet migrated to premium layout
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
            {service.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Details Column */}
          <div className="lg:col-span-2 space-y-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">About the Service</h2>
              <p className="text-slate-600 text-base leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-950 mb-4">Key Program Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-sm text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick info Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-sm border border-slate-800">
              <h3 className="text-lg font-bold border-b border-slate-800 pb-3 mb-4">Service Quick Facts</h3>
              <div className="space-y-5">
                {service.duration && (
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Duration</div>
                      <div className="text-sm font-medium mt-0.5">{service.duration}</div>
                    </div>
                  </div>
                )}
                {service.fees && (
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Tuition Fees Guidance</div>
                      <div className="text-sm font-medium mt-0.5">{service.fees}</div>
                    </div>
                  </div>
                )}
                {service.careerPaths && (
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Core Outcomes</div>
                      <ul className="text-sm font-medium mt-1 list-disc pl-4 space-y-1">
                        {service.careerPaths.map((path, idx) => (
                          <li key={idx}>{path}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
