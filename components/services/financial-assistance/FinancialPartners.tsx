"use client";

import React from "react";
import Image from "next/image";
import { FinancialPartner } from "@/lib/data/service-pages/types";

interface FinancialPartnersProps {
  heading: string;
  partners: FinancialPartner[];
}

export default function FinancialPartners({
  heading,
  partners,
}: FinancialPartnersProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-100 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">
            Trusted Networks
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {heading.split(" ").slice(0, -2).join(" ")} <span className="text-primary font-extrabold relative inline-block">{heading.split(" ").slice(-2).join(" ")}<span className="absolute left-0 bottom-1 w-full h-[6px] bg-primary/10 -z-10" /></span>
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-150 p-4 flex items-center justify-center h-28 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="relative w-full h-full max-h-20 flex items-center justify-center">
                <Image
                  src={partner.imagePath}
                  alt={partner.name}
                  width={180}
                  height={64}
                  className="object-contain max-h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 140px, 180px"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
