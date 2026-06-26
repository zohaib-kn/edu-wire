"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { ModalContext } from "@/components/context/ModalContext";

export default function FinalCTA() {
  const modalContext = useContext(ModalContext);
  const openModal = modalContext?.openModal;

  const handleConsultationClick = (e: React.MouseEvent) => {
    if (openModal) {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <section className="py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Banner Card Container */}
        <div className="bg-[#0D6493] rounded-[32px] md:rounded-[40px] shadow-xl overflow-hidden relative min-h-[400px] flex flex-col md:flex-row justify-between items-stretch">
          
          {/* Subtle Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none" />
          
          {/* Left Column: text content, links, button */}
          <div className="flex-1 p-8 md:p-14 lg:p-16 z-10 flex flex-col justify-between space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Study Abroad Made Simple <br />
                With{" "}
                <span className="relative inline-block px-1">
                  EduWire!
                  <svg className="absolute w-full h-2.5 -bottom-1.5 left-0 text-[#f4a261]" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h2>
              <p className="mt-6 text-white/90 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                Get expert guidance on top universities, visa, and applications — we’ll walk with you every step of the way!
              </p>
            </div>

            {/* Link Rows */}
            <div className="space-y-3.5">
              <a
                href="tel:+919300812637"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-sm font-semibold w-max"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <span>Call: +91 93008 12637</span>
              </a>

              <a
                href="https://wa.me/919300812637"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-sm font-semibold w-max"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-4.5 w-4.5" />
                </div>
                <span>WhatsApp: +91 93008 12637</span>
              </a>

              <a
                href="mailto:info@edu-wire.com"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-sm font-semibold w-max"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <span>Email: info@edu-wire.com</span>
              </a>
            </div>

            {/* CTA Trigger Link/Button */}
            <div>
              {openModal ? (
                <button
                  onClick={handleConsultationClick}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0D6493] shadow-md hover:bg-slate-50 hover:shadow-lg transition-all transform hover:scale-[1.01]"
                >
                  <span>Book Free Counseling</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0D6493] shadow-md hover:bg-slate-50 hover:shadow-lg transition-all"
                >
                  <span>Book Free Counseling</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>

          </div>

          {/* Right Column: Original Visual Student cutout */}
          <div className="relative flex-1 min-h-[300px] md:min-h-full md:w-[400px] select-none flex items-end justify-center md:justify-end overflow-hidden md:overflow-visible">
            <div className="relative w-full h-[350px] md:h-[110%] md:absolute md:bottom-0 md:right-4 max-w-[360px] md:max-w-none">
              <Image
                src="/images/medium-shot-happy-woman.png"
                alt="Edu-Wire Graduate Success"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-bottom md:object-right-bottom scale-100 md:scale-105 origin-bottom"
                priority={true}
                unoptimized={true}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
