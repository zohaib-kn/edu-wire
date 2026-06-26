"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/data/site";
import { HelpCircle, Phone, Mail, MessageCircle, X } from "lucide-react";

export default function FloatingHelpdesk() {
  const [isOpen, setIsOpen] = useState(false);

  const phone = siteConfig.contact.phones[0].replace(/\s+/g, "");
  const email = siteConfig.contact.emails[0];
  const whatsappNumber = siteConfig.contact.whatsapp;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Floating Icons list (revealed when isOpen is true) */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 transform ${
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        }`}
      >
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 transition-all transform hover:scale-110"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>

        {/* Email Button */}
        <a
          href={`mailto:${email}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg hover:bg-amber-600 transition-all transform hover:scale-110"
          title="Send an Email"
        >
          <Mail className="h-5 w-5" />
        </a>

        {/* Phone Button */}
        <a
          href={`tel:${phone}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all transform hover:scale-110"
          title="Call Us"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="Toggle Helpdesk"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
        ) : (
          <HelpCircle className="h-6 w-6 animate-pulse" />
        )}
      </button>
    </div>
  );
}
