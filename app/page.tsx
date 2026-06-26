"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";
import StudyAbroadSteps from "@/components/home/StudyAbroadSteps";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrendingCourses from "@/components/home/TrendingCourses";
import CredentialsSection from "@/components/home/CredentialsSection";
import FinalCTA from "@/components/home/FinalCTA";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Globe,
  Award,
  Users,
  Compass,
  ArrowRight,
  BookOpen,
  CheckCircle,
  FileText,
  Star,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Building2,
  Clock,
} from "lucide-react";

// ─── CountUp ────────────────────────────────────────────────
const CountUp = ({
  end,
  duration = 2000,
}: {
  end: string;
  duration?: number;
}) => {
  const [count, setCount] = useState<number | string>(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const endValue = parseInt(end.replace(/\D/g, ""));
    const isK = end.includes("K");
    const isPlus = end.includes("+");
    const isYears = end.includes("Years");
    const actualEnd = isK ? endValue * 1000 : endValue;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const cur = Math.floor(eased * actualEnd);

      if (isK) setCount((cur / 1000).toFixed(1) + "K" + (isPlus ? "+" : ""));
      else if (isYears) setCount(cur + "+ Years");
      else setCount(cur + (isPlus ? "+" : ""));

      if (progress < 1) requestAnimationFrame(animateCount);
    };
    requestAnimationFrame(animateCount);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{isVisible ? count : "0"}</span>;
};

// ─── SVG Underline ─────────────────────────────────────────
const Underline = ({ color = "#f4a261" }: { color?: string }) => (
  <svg
    className="absolute w-full h-[10px] -bottom-2 left-0 pointer-events-none"
    viewBox="0 0 100 12"
    preserveAspectRatio="none"
  >
    <path
      d="M2,8 Q30,2 50,7 Q70,12 98,6"
      stroke={color}
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// ─── Main Component ─────────────────────────────────────────
export default function HomePage() {
  const { openModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [activeDestination, setActiveDestination] = useState<string | null>(null);
  const [maxIndex, setMaxIndex] = useState(1);

  const slides = [
    {
      badge: "Trusted by 2,000+ students",
      eyebrow: "Your Global Education Partner",
      heading: ["Study at the World's", "Leading Universities"],
      highlight: 1,
      description:
        "Connect with prestigious institutions across Europe, Asia, and beyond — expertly guided from application to arrival.",
      cta: "Browse Universities",
      link: "/destinations",
      useModal: false,
      image: "/images/hero-images/slide-first.webp",
    },
    {
      badge: "Expert counsellors. Zero cost.",
      eyebrow: "Personalized Guidance",
      heading: ["Your Journey,", "Guided Every Step"],
      highlight: 0,
      description:
        "From choosing the right course to visa approval, our mentors walk with you through every milestone of your study abroad journey.",
      cta: "Book a Free Session",
      useModal: true,
      image: "/images/hero-images/slide-third.webp",
    },
    {
      badge: "50+ countries. 1000+ universities.",
      eyebrow: "Global Opportunities",
      heading: ["Unlock Your Future,", "Start Here Today"],
      highlight: 0,
      description:
        "Discover world-class universities and take the first confident step toward an international career.",
      cta: "Get Started",
      useModal: true,
      image: "/images/hero-images/slide-second.webp",
    },
  ];

  const destinations = [
    {
      slug: "uk",
      name: "United Kingdom",
      image: "/images/UK-Cities.jpg",
      tag: "2-yr Graduate Route",
      desc: "Top-ranked universities, globally recognised degrees, and a 2-year post-study work visa make the UK a premier destination.",
    },
    {
      slug: "russia",
      name: "Russia",
      image: "/images/universities/russia-universty-image.jpg",
      tag: "Affordable Excellence",
      desc: "High-quality MBBS and engineering programmes at a fraction of Western tuition costs, with English-taught options.",
    },
    {
      slug: "canada",
      name: "Canada",
      image: "/images/Canada-Cities.jpg",
      tag: "Post-Study PGWP",
      desc: "World-class campuses, bilingual culture, and a clear pathway to permanent residency via post-graduation work permits.",
    },
    {
      slug: "italy",
      name: "Italy",
      image: "/images/Italy-cities.webp",
      tag: "Art & Architecture Hub",
      desc: "Historic universities steeped in Renaissance tradition, with surprisingly affordable tuition for international students.",
    },
    {
      slug: "romania",
      name: "Romania",
      image: "/images/universities/romania-universty-image.jpg",
      tag: "EU Recognised Degrees",
      desc: "EU-recognised medical and engineering degrees at some of Europe's most budget-friendly fees.",
    },
    {
      slug: "france",
      name: "France",
      image: "/images/France-Cities.webp",
      tag: "Grandes Écoles",
      desc: "From the Sorbonne to HEC Paris — world-class education in the heart of Europe, with low public university fees.",
    },
  ];

  const stats = [
    { value: "1000+", label: "University Partners", icon: <Building2 className="h-5 w-5" /> },
    { value: "100K+", label: "Academic Programmes", icon: <BookOpen className="h-5 w-5" /> },
    { value: "2000+", label: "Visa Approvals", icon: <CheckCircle className="h-5 w-5" /> },
    { value: "12 Years", label: "Consulting Experience", icon: <Clock className="h-5 w-5" /> },
  ];

  const services = [
    {
      title: "Career Counselling",
      desc: "One-on-one guidance to map the right course, country, and career pathway that fits your unique profile and aspirations.",
      icon: <Users className="h-7 w-7 text-[#0D6493]" />,
    },
    {
      title: "University Selection",
      desc: "Data-driven shortlisting of universities that match your academics, budget, and long-term goals — no guesswork.",
      icon: <GraduationCap className="h-7 w-7 text-[#0D6493]" />,
    },
    {
      title: "Application & Documentation",
      desc: "End-to-end support compiling and reviewing every document so your application stands out from the first read.",
      icon: <FileText className="h-7 w-7 text-[#0D6493]" />,
    },
    {
      title: "IELTS Preparation",
      desc: "Structured training, practice tests, and expert tips for all four IELTS sections — targeting your best possible band score.",
      icon: <Globe className="h-7 w-7 text-[#0D6493]" />,
    },
  ];

  const universityLogos = [
    { src: "/images/top-university-logos/top-university-first.png", alt: "HEC Paris" },
    { src: "/images/top-university-logos/top-university-second.png", alt: "ESSEC Business School" },
    { src: "/images/top-university-logos/top-university-third.png", alt: "Université Paris-Saclay" },
    { src: "/images/top-university-logos/top-university-fourth.jpg", alt: "Skema Business School" },
  ];

  // Slide auto-advance
  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  // Responsive service slider
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) setMaxIndex(3);
      else if (window.innerWidth < 1024) setMaxIndex(2);
      else setMaxIndex(1);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const nextService = () => setServiceIndex((p) => (p < maxIndex ? p + 1 : 0));
  const prevService = () => setServiceIndex((p) => (p > 0 ? p - 1 : maxIndex));

  return (
    <div className="bg-slate-50 flex flex-col min-h-screen overflow-x-hidden">

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden py-20 lg:py-28">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#0D6493 1px, transparent 1px), linear-gradient(90deg, #0D6493 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Colour wash — top-right */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0D6493]/6 blur-3xl pointer-events-none" />
        {/* Colour wash — bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-[340px] h-[340px] rounded-full bg-amber-400/8 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[560px]">

            {/* LEFT: Text */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="space-y-6 text-center lg:text-left"
                >
                  {/* Badge */}
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0D6493]/8 text-[#0D6493] border border-[#0D6493]/15 select-none">
                    <Sparkles className="h-3 w-3" />
                    {slides[currentSlide].badge}
                  </span>

                  {/* Eyebrow */}
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 select-none">
                    {slides[currentSlide].eyebrow}
                  </p>

                  {/* Heading */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-slate-900">
                    {slides[currentSlide].heading.map((line, i) => (
                      <span key={i} className="block">
                        {i === slides[currentSlide].highlight ? (
                          <span className="relative inline-block text-[#0D6493]">
                            {line}
                            <Underline />
                          </span>
                        ) : (
                          line
                        )}
                      </span>
                    ))}
                  </h1>

                  {/* Description */}
                  <p className="max-w-xl mx-auto lg:mx-0 text-base lg:text-lg text-slate-500 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                    {slides[currentSlide].useModal ? (
                      <button
                        onClick={openModal}
                        className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D6493] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#0D6493]/25 hover:bg-[#0b5577] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      >
                        {slides[currentSlide].cta}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ) : (
                      <Link
                        href={slides[currentSlide].link || "/"}
                        className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D6493] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#0D6493]/25 hover:bg-[#0b5577] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                      >
                        {slides[currentSlide].cta}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                    <button
                      onClick={openModal}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 px-8 py-4 text-sm font-semibold text-slate-700 hover:border-[#0D6493] hover:text-[#0D6493] transition-all duration-200 cursor-pointer"
                    >
                      Free Consultation
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide dots */}
              <div className="flex gap-2 mt-10 justify-center lg:justify-start">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? "w-8 bg-[#0D6493]"
                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT: Image with floating cards */}
            <div className="order-1 lg:order-2 relative flex justify-center items-center">
              {/* Decorative ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-dashed border-[#0D6493]/10 animate-[spin_120s_linear_infinite]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="relative w-[340px] h-[400px] sm:w-[420px] sm:h-[480px]">
                    {/* Image blob */}
                    <div className="absolute inset-0 rounded-[40px] overflow-hidden bg-slate-100">
                      <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].eyebrow}
                        fill
                        priority
                        className="object-cover object-center"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                    </div>

                    {/* Floating pill — top left */}
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="absolute -left-6 top-10 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-slate-200/80 flex items-center gap-3 min-w-[160px]"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#0D6493]/10 flex items-center justify-center shrink-0">
                        <Award className="h-4.5 w-4.5 text-[#0D6493]" />
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-medium leading-none mb-0.5">Success Rate</p>
                        <p className="text-sm font-extrabold text-slate-900">98% Visas</p>
                      </div>
                    </motion.div>

                    {/* Floating pill — bottom right */}
                    <motion.div
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45, duration: 0.4 }}
                      className="absolute -right-6 bottom-14 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-slate-200/80 flex items-center gap-3 min-w-[160px]"
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                        <Star className="h-4.5 w-4.5 text-amber-500 fill-amber-500" />
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-medium leading-none mb-0.5">50+ Countries</p>
                        <p className="text-sm font-extrabold text-slate-900">1000+ Univ.</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. STATS STRIP
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-[#0D6493] rounded-3xl px-8 py-7 shadow-2xl shadow-[#0D6493]/30">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <div className="flex items-center gap-2 mb-1.5 text-white/60">
                  {s.icon}
                  <span className="text-xs font-semibold uppercase tracking-widest">{s.label}</span>
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-white leading-none">
                  <CountUp end={s.value} duration={2200} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          3. SERVICES
      ══════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D6493] mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Everything you need{" "}
              <span className="relative inline-block">
                to study abroad
                <Underline />
              </span>
            </h2>
          </div>
          {/* Nav arrows */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={prevService}
              className="w-11 h-11 rounded-xl border-2 border-slate-200 hover:border-[#0D6493] text-slate-500 hover:text-[#0D6493] flex items-center justify-center transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextService}
              className="w-11 h-11 rounded-xl bg-[#0D6493] text-white flex items-center justify-center hover:bg-[#0b5577] transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-5"
            style={{
              width: `${services.length * 100}%`,
              transform: `translateX(-${(serviceIndex * 100) / services.length}%)`,
            }}
          >
            {services.map((svc, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: `${100 / services.length}%` }}
              >
                <div className="group bg-white border border-slate-100 rounded-3xl p-8 hover:border-[#0D6493]/20 hover:shadow-xl hover:shadow-[#0D6493]/8 transition-all duration-300 h-full flex flex-col gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#E1EDF8] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {svc.icon}
                  </div>
                  {/* Number */}
                  <span className="text-xs font-bold text-slate-300 tracking-widest">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{svc.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{svc.desc}</p>
                  </div>
                  <button
                    onClick={openModal}
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#0D6493] hover:gap-3 transition-all cursor-pointer"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. DESTINATIONS
      ══════════════════════════════════════ */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f4a261] mb-3">
              Where Will You Study?
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Top Study Abroad{" "}
              <span className="relative inline-block">
                Destinations
                <Underline color="#f4a261" />
              </span>
            </h2>
          </div>

          {/* Expanding card row */}
          <div className="flex flex-col md:flex-row gap-3 h-auto md:h-[440px]">
            {destinations.map((dest) => {
              const isActive = activeDestination === dest.slug;
              return (
                <div
                  key={dest.slug}
                  onMouseEnter={() => setActiveDestination(dest.slug)}
                  onMouseLeave={() => setActiveDestination(null)}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out
                    ${isActive ? "flex-[3.5]" : "flex-[0.8]"}
                    h-[240px] md:h-full`}
                >
                  {/* Background image always present */}
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 scale-100 hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-t from-[#0D6493]/95 via-[#0D6493]/60 to-[#0D6493]/20"
                        : "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    }`}
                  />

                  {/* Collapsed: just name at bottom */}
                  <AnimatePresence mode="wait">
                    {!isActive ? (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 p-5"
                      >
                        <p
                          className="text-white font-bold text-base md:text-sm lg:text-base leading-tight"
                          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                        >
                          {/* On mobile, horizontal; on md+, vertical */}
                        </p>
                        <span className="text-white font-bold tracking-wide text-sm md:hidden">
                          {dest.name}
                        </span>
                        {/* Vertical text on desktop */}
                        <div className="hidden md:flex flex-col items-center w-full">
                          <span
                            className="text-white font-bold text-xs tracking-widest uppercase"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.12em" }}
                          >
                            {dest.name}
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 flex flex-col justify-end p-8"
                      >
                        <span className="inline-block px-2.5 py-1 bg-[#f4a261] text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full mb-3 w-fit">
                          {dest.tag}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                          Study in {dest.name}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed max-w-sm mb-6">
                          {dest.desc}
                        </p>
                        <Link
                          href={`/destinations/${dest.slug}`}
                          className="inline-flex items-center gap-2 text-white font-bold text-sm hover:gap-3 transition-all"
                        >
                          Explore {dest.name} <ArrowRight className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all"
            >
              View all countries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. UNIVERSITY LOGOS
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-10">
            Trusted University Partners
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center">
            {/* Image logos */}
            {universityLogos.map((logo, i) => (
              <div
                key={i}
                className="h-16 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center px-4 hover:border-slate-200 hover:shadow-sm transition-all"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="max-h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
            {/* CSS logo: Grenoble */}
            <div className="h-16 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center px-4 hover:border-slate-200 hover:shadow-sm transition-all">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-slate-900 leading-none">G</span>
                <span className="text-[6px] font-bold uppercase text-center text-slate-600 leading-tight mt-0.5">
                  Grenoble<br />École de<br />Management
                </span>
              </div>
            </div>
            {/* CSS logo: C3S */}
            <div className="h-16 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center px-4 hover:border-slate-200 hover:shadow-sm transition-all">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-[#0D6493]">C3S</span>
                <div className="flex flex-col border-l border-slate-300 pl-1.5">
                  <span className="text-[7px] font-bold text-slate-800 uppercase">Business</span>
                  <span className="text-[7px] text-slate-400">School</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. CONTACT FORM
      ══════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D6493] mb-4">Let&apos;s Talk</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Start your journey{" "}
              <span className="relative inline-block">
                with us today
                <Underline />
              </span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-10 max-w-md">
              Fill in your details and one of our expert counsellors will reach out within 24 hours — at no cost to you.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: <Phone className="h-4 w-4" />, label: "Call us", value: "+91 98765 43210" },
                { icon: <Mail className="h-4 w-4" />, label: "Email us", value: "info@digiwire.com" },
                { icon: <MapPin className="h-4 w-4" />, label: "Visit us", value: "Indore, Madhya Pradesh" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E1EDF8] flex items-center justify-center text-[#0D6493] shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{c.label}</p>
                    <p className="text-sm font-bold text-slate-800">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100 p-8 md:p-10">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Get a Free Consultation</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0D6493] focus:ring-2 focus:ring-[#0D6493]/10 transition-all bg-slate-50"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0D6493] focus:ring-2 focus:ring-[#0D6493]/10 transition-all bg-slate-50"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0D6493] focus:ring-2 focus:ring-[#0D6493]/10 transition-all bg-slate-50"
              />
              <select className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-600 focus:outline-none focus:border-[#0D6493] focus:ring-2 focus:ring-[#0D6493]/10 transition-all bg-slate-50 appearance-none">
                <option value="">Select a course</option>
                <option value="mbbs">MBBS</option>
                <option value="engineering">Engineering</option>
                <option value="business">Business Management</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Tell us about your plans..."
                rows={4}
                className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0D6493] focus:ring-2 focus:ring-[#0D6493]/10 transition-all bg-slate-50 resize-none"
              />
              <button
                type="button"
                className="w-full rounded-2xl bg-[#0D6493] px-6 py-4 text-sm font-bold text-white hover:bg-[#0b5577] transition-colors shadow-lg shadow-[#0D6493]/20"
              >
                Send Message →
              </button>
              <p className="text-center text-xs text-slate-400 mt-2">
                We typically reply within 24 hours. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7–11. REMAINING SECTIONS (unchanged)
      ══════════════════════════════════════ */}
      <StudyAbroadSteps />
      <TestimonialsSection />
      <TrendingCourses />
      <CredentialsSection />
      <FinalCTA />
    </div>
  );
}