import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import { CheckCircle2, Clock, DollarSign, Briefcase } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Edu-Wire Services`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailsPage({ params }: PageProps) {
  const { slug } = await params;
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
