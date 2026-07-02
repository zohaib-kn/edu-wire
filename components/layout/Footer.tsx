"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data/site";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  MessageCircle,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

const socialLinks = [
  {
    href: siteConfig.socials.linkedin,
    label: "LinkedIn",
    hoverClass: "hover:bg-[#0A66C2]",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: siteConfig.socials.instagram,
    label: "Instagram",
    hoverClass: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: siteConfig.socials.facebook,
    label: "Facebook",
    hoverClass: "hover:bg-[#1877F2]",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: siteConfig.socials.youtube,
    label: "YouTube",
    hoverClass: "hover:bg-[#FF0000]",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const mbbsLinks = [
  { label: "MBBS in Italy", href: "/mbbs/italy" },
  { label: "MBBS in Romania", href: "/mbbs/romania" },
  { label: "MBBS in Russia", href: "/mbbs/russia" },
  { label: "MBBS in Georgia", href: "/mbbs/georgia" },
  { label: "MBBS in Poland", href: "/mbbs/poland" },
];

const studyDestinations = [
  { label: "Study in UK", href: "/destinations/uk" },
  { label: "Study in Australia", href: "/destinations/australia" },
  { label: "Study in USA", href: "/destinations/usa" },
  { label: "Study in Canada", href: "/destinations/canada" },
];

const offices = [
  {
    city: "Bhopal",
    tag: "Head Office",
    address: siteConfig.contact.addressBhopal,
    mapsUrl: siteConfig.contact.mapsBhopal,
  },
  {
    city: "Indore",
    tag: "Branch Office",
    address: siteConfig.contact.addressIndore,
    mapsUrl: siteConfig.contact.mapsIndore,
  },
  {
    city: "Dubai",
    tag: "International",
    address: siteConfig.contact.addressDubai,
    mapsUrl: siteConfig.contact.mapsDubai,
  },
];

// Small helper so every footer column heading lines up identically.
function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6 pb-2.5 border-b border-slate-800/80 relative">
      {children}
      <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#0D6493]" />
    </h3>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-slate-400 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1 group font-medium"
      >
        <ChevronRight className="h-3 w-3 text-[#0D6493] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
        <span>{label}</span>
      </Link>
    </li>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 text-slate-400 border-t border-slate-800/50 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0D6493]/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── CTA Banner ── */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/90 via-primary to-primary/80 py-6 shadow-xl shadow-primary/20">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            color: "#ffffff",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-white font-semibold text-lg sm:text-xl tracking-tight">
              Ready to study abroad? 🌍
            </p>
            <p className="text-white/80 text-sm mt-0.5">
              Free counselling · No hidden fees · Trusted by 2000+ students
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <a
              href={`https://wa.me/${siteConfig.contact.phones[0].replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0D6493] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-black/20"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 border-2 border-white/30 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-200"
            >
              Book a Call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* 5 balanced groups on desktop: Brand(4) + 4 link columns(2 each) = 12 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12">

          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-4">
            <Link href="/" className="inline-block mb-5 group">
              <Image
                src="/images/Edu-wire-log.png"
                alt="Edu-Wire Logo"
                width={160}
                height={38}
                className="h-9 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
                priority
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              {siteConfig.description}
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-7">
              <a
                href={`tel:${siteConfig.contact.phones[0]}`}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-800/80 group-hover:bg-[#0D6493]/20 transition-colors border border-slate-700/50 group-hover:border-[#0D6493]/30">
                  <Phone className="h-4 w-4 text-[#0D6493]" />
                </span>
                <span>{siteConfig.contact.phones.join("  ·  ")}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.emails[0]}`}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-800/80 group-hover:bg-[#0D6493]/20 transition-colors border border-slate-700/50 group-hover:border-[#0D6493]/30">
                  <Mail className="h-4 w-4 text-[#0D6493]" />
                </span>
                <span>{siteConfig.contact.emails[0]}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/80 text-slate-400 hover:text-white transition-all duration-200 border border-slate-700/50 hover:border-transparent ${s.hoverClass}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <FooterLink key={l.href} href={l.href} label={l.label} />
              ))}
            </ul>
          </div>

          {/* MBBS Abroad */}
          <div className="md:col-span-2">
            <ColumnHeading>MBBS Abroad</ColumnHeading>
            <ul className="space-y-2.5">
              {mbbsLinks.map((l) => (
                <FooterLink key={l.href} href={l.href} label={l.label} />
              ))}
            </ul>
            <Link
              href="/mbbs"
              className="mt-4 pt-3 border-t border-slate-800/60 inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-semibold transition-colors group"
            >
              View all destinations
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Study Destinations */}
          <div className="md:col-span-2">
            <ColumnHeading>Study Destinations</ColumnHeading>
            <ul className="space-y-2.5">
              {studyDestinations.map((l) => (
                <FooterLink key={l.href} href={l.href} label={l.label} />
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <ColumnHeading>Legal</ColumnHeading>
            <ul className="space-y-2.5">
              {siteConfig.navigation.legal.map((item) => (
                <FooterLink key={item.name} href={item.href} label={item.name} />
              ))}
            </ul>
          </div>
        </div>

        {/* ── Office Locations ── */}
        <div className="mt-14 pt-12 border-t border-slate-800/60">
          <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6 pb-2.5 border-b border-slate-800/60 relative">
            Our Offices
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#0D6493]" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offices.map((office) => (
              <div
                key={office.city}
                className="group relative flex h-full flex-col rounded-2xl border border-slate-800/60 bg-slate-900/30 p-6 hover:border-[#0D6493]/40 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#0D6493]/5"
              >
                {/* Tag */}
                <span className="absolute top-4 right-4 text-[10px] font-semibold text-[#0D6493]/90 bg-[#0D6493]/10 px-2.5 py-0.5 rounded-full border border-[#0D6493]/20">
                  {office.tag}
                </span>

                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0D6493]/10 border border-[#0D6493]/20 group-hover:bg-[#0D6493]/20 transition-colors">
                    <MapPin className="h-4 w-4 text-[#0D6493]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-base mb-1">{office.city}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{office.address}</p>
                  </div>
                </div>

                <a
                  href={office.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#0D6493] transition-colors group-hover:text-slate-300"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  View on Google Maps
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {currentYear}{" "}
            <span className="text-slate-400 font-medium">{siteConfig.name} Consultancy.</span>{" "}
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll-to-top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-110 hover:bg-primary/90 ${
          showTopBtn ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}