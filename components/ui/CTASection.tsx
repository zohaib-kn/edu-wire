"use client";

import React from "react";
import { siteConfig } from "@/lib/data/site";
import { useModal } from "@/components/context/ModalContext";
import { Phone, Calendar } from "lucide-react";

export default function CTASection() {
  const { openModal } = useModal();
  const phone = siteConfig.contact.phones[0].replace(/\s+/g, "");

  return (
    <section className="bg-primary py-16 sm:py-20 relative overflow-hidden select-none">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight leading-tight">
          Ready to Start Your Study Abroad Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 leading-relaxed font-medium">
          Get expert end-to-end guidance from university shortlisting to visa clearance. Speak with our certified counsellors for free.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={openModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg hover:bg-slate-50 transition-all transform hover:scale-[1.02]"
          >
            <Calendar className="h-5 w-5" />
            <span>Book Free Counselling</span>
          </button>
          <a
            href={`tel:${phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-slate-800 transition-all border border-slate-800 transform hover:scale-[1.02]"
          >
            <Phone className="h-5 w-5 text-primary" />
            <span>Call {siteConfig.contact.phones[0]}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
