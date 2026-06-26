"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site";
import { Phone, Mail, MapPin, ExternalLink, ArrowUpRight, MessageCircle, ChevronRight } from "lucide-react";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 text-slate-400 border-t border-slate-800/50 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── CTA Banner ── */}
      <div className="relative bg-gradient-to-r from-primary/90 via-primary to-primary/80 py-6 shadow-xl shadow-primary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
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
              className="inline-flex items-center gap-2 bg-white text-primary text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-black/20"
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">

          {/* Brand Column — spans 4 cols */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block text-3xl font-bold text-white tracking-tight mb-4 hover:text-primary transition-colors">
              {siteConfig.name}
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
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/80 group-hover:bg-primary/20 transition-colors border border-slate-700/50 group-hover:border-primary/30">
                  <Phone className="h-4 w-4 text-primary" />
                </span>
                <span>{siteConfig.contact.phones.join("  ·  ")}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.emails[0]}`}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/80 group-hover:bg-primary/20 transition-colors border border-slate-700/50 group-hover:border-primary/30">
                  <Mail className="h-4 w-4 text-primary" />
                </span>
                <span>{siteConfig.contact.emails[0]}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
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

          {/* Quick Links — spans 2 cols */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5 pb-2 border-b border-slate-800/60">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MBBS Abroad — spans 3 cols */}
          <div className="md:col-span-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5 pb-2 border-b border-slate-800/60">
              MBBS Abroad
            </h3>
            <ul className="space-y-2.5">
              {mbbsLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/mbbs"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-semibold transition-colors group"
                >
                  View all destinations
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Study Destinations + Legal — spans 3 cols */}
          <div className="md:col-span-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5 pb-2 border-b border-slate-800/60">
              Study Destinations
            </h3>
            <ul className="space-y-2.5 mb-8">
              {studyDestinations.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5 pb-2 border-b border-slate-800/60">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Office Locations ── */}
        <div className="mt-14 pt-12 border-t border-slate-800/60">
          <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6 pb-2 border-b border-slate-800/60">
            Our Offices
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {offices.map((office) => (
              <div
                key={office.city}
                className="group relative rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 hover:border-slate-700 hover:bg-slate-800/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Tag */}
                <span className="absolute top-4 right-4 text-[10px] font-semibold text-primary/90 bg-primary/15 px-2.5 py-0.5 rounded-full border border-primary/20">
                  {office.tag}
                </span>

                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-4.5 w-4.5 text-primary" />
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
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary transition-colors group-hover:text-slate-300"
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
          <p className="flex items-center gap-2">
            <span>Built with</span>
            <span className="text-slate-300 font-medium">Next.js</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300 font-medium">Tailwind CSS</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">Made with care in India 🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}