import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import AboutHero from "@/components/about/AboutHero";
import TeamSection from "@/components/about/TeamSection";

export const metadata: Metadata = {
  title: "About Us | Edu-Wire Overseas Consultant",
  description: "Learn more about Edu-Wire's mission, our team of expert advisors, and our core values guiding students to top international universities.",
  openGraph: {
    title: "About Us | Edu-Wire Overseas Consultant",
    description: "Learn more about Edu-Wire's mission, our team of expert advisors, and our core values guiding students to top international universities.",
    images: [
      {
        url: "https://edu-wire.com/assets/images/Edu-wire-log.png",
        width: 1200,
        height: 630,
        alt: "Edu-Wire Logo",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. Hero Section */}
      <AboutHero />

      {/* 2. Who We Are Section */}
      <section className="py-24 bg-white border-t border-slate-100 select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[1.618] lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-200">
              <Image
                src="/images/about-us-image.jpeg"
                alt="Edu-Wire team guidance"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                unoptimized={true}
              />
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493] bg-[#0D6493]/10 px-4 py-1.5 rounded-full inline-block">
                Our Identity
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Who We Are
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                At Edu-Wire Overseas Consultant Pvt Ltd, we redefine the path to global education by offering unparalleled expertise and end-to-end guidance for students aspiring to study abroad. With a strong international presence in Dubai (U.A.E), India, and Canada, we proudly represent over 1,000 prestigious universities and colleges worldwide, helping students secure admissions in top-tier institutions across Canada, the USA, the UK, Italy, Australia, Germany, New Zealand, France, Finland, Sweden, Russia, Georgia, Hungary, Poland, and beyond.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Our commitment extends far beyond applications—we provide strategic career counseling, course and university selection, SOP and LOR assistance, financial aid guidance, visa processing, and comprehensive post-arrival support, ensuring a seamless transition into international academic life. Backed by over 12 years of industry experience, our founder and director, Athar Khan, has cultivated a team of seasoned education consultants dedicated to delivering transparent, personalized, and results-driven solutions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Leadership Team Section */}
      <TeamSection />

      {/* 4. Core Values Section */}
      <section className="py-24 bg-white border-t border-slate-100 select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493] bg-[#0D6493]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Our Core <span className="relative inline-block px-1">
                Values
                <svg className="absolute w-full h-2.5 -bottom-2 left-0 text-[#f4a261]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed font-medium">
              We hold ourselves to the highest standards of integrity, service quality, and student success.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Value 1: Integrity */}
            <div className="bg-slate-50/50 rounded-3xl border border-slate-150 p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 relative bg-[#0D6493]/10 rounded-2xl flex items-center justify-center p-3 mb-6">
                <Image
                  src="/images/Integrity.png"
                  alt="Integrity icon"
                  fill
                  className="object-contain p-2.5"
                  unoptimized={true}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Integrity</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                  We uphold honesty, transparency, and fairness in every interaction. Our recommendations are always in the genuine interest of our students and their futures.
                </p>
              </div>
            </div>

            {/* Value 2: Student-Centric */}
            <div className="bg-slate-50/50 rounded-3xl border border-slate-150 p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 relative bg-[#0D6493]/10 rounded-2xl flex items-center justify-center p-3 mb-6">
                <Image
                  src="/images/services/counseling.png"
                  alt="Student-centric icon"
                  fill
                  className="object-contain p-2.5"
                  unoptimized={true}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Student-Centric</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                  Every student&apos;s dream is unique — and so is our guidance. We offer personalized, one-on-one counseling tailored to academic profiles, career goals, and personal aspirations.
                </p>
              </div>
            </div>

            {/* Value 3: Excellence */}
            <div className="bg-slate-50/50 rounded-3xl border border-slate-150 p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 relative bg-[#0D6493]/10 rounded-2xl flex items-center justify-center p-3 mb-6">
                <Image
                  src="/images/responsible.png"
                  alt="Excellence icon"
                  fill
                  className="object-contain p-2.5"
                  unoptimized={true}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Excellence in Service</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                  We are committed to providing accurate, reliable, and timely support throughout the entire overseas education process — from applications to visa assistance and beyond.
                </p>
              </div>
            </div>

            {/* Value 4: End-to-End */}
            <div className="bg-slate-50/50 rounded-3xl border border-slate-150 p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 relative bg-[#0D6493]/10 rounded-2xl flex items-center justify-center p-3 mb-6">
                <Image
                  src="/images/management.png"
                  alt="End-to-End support icon"
                  fill
                  className="object-contain p-2.5"
                  unoptimized={true}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">End-to-End Support</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                  From university selection and admissions to visa processing, accommodation advice, and pre-departure briefings — we stay with our students at every stage.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
