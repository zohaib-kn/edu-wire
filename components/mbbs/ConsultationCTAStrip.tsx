"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";
import { ModalContext } from "@/components/context/ModalContext";

interface ConsultationCTAStripProps {
  countryName: string;
  description?: string;
}

export default function ConsultationCTAStrip({ countryName, description }: ConsultationCTAStripProps) {
  const modalContext = useContext(ModalContext);
  const openModal = modalContext?.openModal;

  const handleCounsellingClick = (e: React.MouseEvent) => {
    if (openModal) {
      e.preventDefault();
      openModal();
    }
  };

  const defaultDesc = `Get support with university selection, admission requirements, documentation, and visa preparation from our expert counsellors.`;

  return (
    <section className="py-12 bg-[#0D6493] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Content */}
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Need help with your {countryName} application?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm font-semibold max-w-2xl leading-relaxed">
              {description || defaultDesc}
            </p>
          </div>

          {/* Trigger Button */}
          <div className="shrink-0">
            {openModal ? (
              <button
                onClick={handleCounsellingClick}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-[#0D6493] shadow-md hover:bg-slate-50 hover:shadow-lg transition-all"
              >
                <span>Book Free Counselling</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-[#0D6493] shadow-md hover:bg-slate-50 hover:shadow-lg transition-all"
              >
                <span>Book Free Counselling</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
