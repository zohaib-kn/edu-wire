"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, CheckCircle } from "lucide-react";

export default function CredentialsSection() {
  const [cambridgeError, setCambridgeError] = useState(false);
  const [icefError, setIcefError] = useState(false);
  const [ieltsError, setIeltsError] = useState(false);
  const [ieltsSrc, setIeltsSrc] = useState("/images/services/ielts.png");

  const credentials = [
    {
      title: "Certification Partner",
      subtitle: "In association with Cambridge, ensuring high language & educational training standards.",
      image: "/images/certification-partners/partner2.png",
      alt: "Cambridge Logo",
      error: cambridgeError,
      onError: () => setCambridgeError(true),
      fallbackIcon: <Award className="h-10 w-10 text-[#0D6493]" />,
    },
    {
      title: "Our Accreditation",
      subtitle: "ICEF Accredited Agency Status (#6427), verifying our compliance with international standards.",
      image: "/images/certification-partners/partner1.png",
      alt: "ICEF Accredited Logo",
      error: icefError,
      onError: () => setIcefError(true),
      fallbackIcon: <CheckCircle className="h-10 w-10 text-[#0D6493]" />,
    },
    {
      title: "Referral Partners for IELTS",
      subtitle: "Trusted IELTS referral partner, assisting students in registering and prepping for language exams.",
      image: ieltsSrc,
      alt: "IELTS Logo",
      error: ieltsError,
      onError: () => {
        if (ieltsSrc === "/images/services/ielts.png") {
          // If local ielts logo fails, fallback to seeklogo remote URL
          setIeltsSrc("https://images.seeklogo.com/logo-png/32/2/ielts-logo-png_seeklogo-322547.png");
        } else {
          // If seeklogo remote URL also fails, fall back to Lucide icon card
          setIeltsError(true);
        }
      },
      fallbackIcon: <Award className="h-10 w-10 text-[#0D6493]" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 border-t border-b border-slate-100 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6493] bg-[#0D6493]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Trusted Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Recognised by leading education and language partners
          </h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            Edu-Wire works with trusted certification, accreditation, and IELTS referral partners to guide students with confidence.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl border border-slate-200 p-8 flex flex-col items-center justify-between text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[300px]"
            >
              {/* Logo Container */}
              <div className="relative w-full h-24 flex items-center justify-center bg-slate-50 rounded-2xl p-4 overflow-hidden mb-6">
                {!cred.error ? (
                  <Image
                    src={cred.image}
                    alt={cred.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                    onError={cred.onError}
                    unoptimized={true}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    {cred.fallbackIcon}
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mt-2">
                      {cred.alt}
                    </span>
                  </div>
                )}
              </div>

              {/* Description Body */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {cred.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
                    {cred.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
