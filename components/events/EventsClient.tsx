"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";
import CTASection from "@/components/ui/CTASection";
import { Calendar, MapPin, Video, CheckCircle2 } from "lucide-react";

export default function EventsClient() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState<string>("gallery");
  const [isSticky, setIsSticky] = useState(false);

  // Track scroll position to update active tab based on view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      
      const gallerySec = document.getElementById("gallery");
      const studentSec = document.getElementById("student");
      const webinarsSec = document.getElementById("webinars");

      if (webinarsSec && scrollPos >= webinarsSec.offsetTop) {
        setActiveTab("webinars");
      } else if (studentSec && scrollPos >= studentSec.offsetTop) {
        setActiveTab("student");
      } else if (gallerySec && scrollPos >= gallerySec.offsetTop) {
        setActiveTab("gallery");
      }

      // Check sticky sub-navigation
      const tabsGroup = document.getElementById("tabs-navigation");
      if (tabsGroup) {
        setIsSticky(window.scrollY > tabsGroup.offsetTop - 70);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // account for headers
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveTab(id);
    }
  };

  const galleryImages = [
    { src: "/images/events/gallery/events1.jpg", width: 2773, height: 4160 },
    { src: "/images/events/gallery/events-2.jpg", width: 4160, height: 2773 },
    { src: "/images/events/gallery/events3.jpg", width: 2773, height: 4160 },
    { src: "/images/events/gallery/events4.jpg", width: 4160, height: 2773 },
    { src: "/images/events/gallery/events5.jpg", width: 2773, height: 4160 },
    { src: "/images/events/gallery/events6.jpg", width: 4160, height: 2773 },
    { src: "/images/events/gallery/events7.jpg", width: 4160, height: 2773 },
    { src: "/images/events/gallery/events8.jpg", width: 2624, height: 3936 },
    { src: "/images/events/gallery/events9.jpg", width: 2773, height: 4160 },
    { src: "/images/events/gallery/events10.jpg", width: 4160, height: 2773 },
    { src: "/images/events/gallery/events11.jpg", width: 2773, height: 4160 },
    { src: "/images/events/gallery/events12.jpg", width: 4160, height: 2773 },
    { src: "/images/events/gallery/events13.jpg", width: 2773, height: 4160 }
  ];

  const studentImages = [
    "/images/events/students/visa1.jpg",
    "/images/events/students/visa2.jpg",
    "/images/events/students/visa3.jpg",
    "/images/events/students/visa4.jpg",
    "/images/events/students/visa5.jpg",
    "/images/events/students/visa6.jpg"
  ];

  const eventCards = [
    {
      title: "Seminar on Abroad Education",
      description: "An informative session on study abroad programs.",
      date: "June 15, 2025",
      type: "Seminar",
      image: "/images/events/seminars/seminar.jpg"
    },
    {
      title: "Webinar on Visa Process",
      description: "Get insights into the visa process from experts.",
      date: "June 30, 2025",
      type: "Webinar",
      image: "/images/events/seminars/webinar.jpg"
    },
    {
      title: "Seminar on Abroad Education",
      description: "An informative session on study abroad programs.",
      date: "June 15, 2025",
      type: "Seminar",
      image: "/images/events/seminars/seminar.jpg"
    },
    {
      title: "Webinar on Visa Process",
      description: "Get insights into the visa process from experts.",
      date: "June 30, 2025",
      type: "Webinar",
      image: "/images/events/seminars/webinar.jpg"
    }
  ];

  return (
    <div className="bg-slate-50 flex flex-col min-h-screen relative">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-primary/[0.02]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Featured Events
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                <span className="relative inline-block text-primary">
                  Events at
                  <span className="absolute bottom-1.5 left-0 w-full h-[4px] bg-[#F59E0B] rounded-full opacity-80" />
                </span>{" "}
                Edu-Wire
              </h1>
              
              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl font-medium">
                Discover everything about upcoming events, education fairs, and university visits hosted by Edwise. Meet with
                top university representatives directly and get all your questions about studying abroad answered in person!
              </p>
              
              <div className="pt-2 w-full sm:w-auto">
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all transform hover:scale-[1.02]"
                >
                  Book free Counselling
                </button>
              </div>
            </div>

            {/* Right Image/Collage */}
            <div className="lg:col-span-5 relative w-full flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100/50">
                <Image
                  src="/images/events/hero/hero-event.jpg"
                  alt="Event Image"
                  fill
                  sizes="(max-w-1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              
              {/* Decorative design elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/5 rounded-3xl -z-10 animate-float-1" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full -z-10 animate-float-2" />
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. Navigation Tabs (Sticky) */}
      <div 
        id="tabs-navigation" 
        className={`sticky top-[73px] z-40 w-full transition-all duration-300 ${
          isSticky 
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="inline-flex p-1.5 bg-slate-100/80 backdrop-blur-sm rounded-full border border-slate-200/50 shadow-sm max-w-full overflow-x-auto no-scrollbar">
            <button
              onClick={() => scrollToSection("gallery")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === "gallery"
                  ? "bg-primary text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Edu-Wire Gallery
            </button>
            <button
              onClick={() => scrollToSection("student")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === "student"
                  ? "bg-primary text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Students
            </button>
            <button
              onClick={() => scrollToSection("webinars")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === "webinars"
                  ? "bg-primary text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Webinars and Seminars
            </button>
          </div>
        </div>
      </div>

      {/* 3. Edu-Wire Gallery Section */}
      <section id="gallery" className="scroll-mt-32 py-16 bg-slate-50">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              Edu-Wire Gallery
            </h2>
            <div className="mt-2.5 mx-auto h-[3px] w-24 bg-primary rounded-full" />
          </div>

          {/* Premium Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 md:gap-4">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className="break-inside-avoid mb-3 md:mb-4 relative group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-200"
              >
                <Image
                  src={img.src}
                  alt={`Image ${index + 1}`}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Proud Achievers Section */}
      <section id="student" className="scroll-mt-32 py-20 bg-white border-t border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              Our <span className="text-primary relative inline-block">Proud Achievers<span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#F59E0B] rounded-full" /></span>
            </h2>
            <div className="mt-4.5 mx-auto h-[3px] w-28 bg-primary rounded-full hidden" />
          </div>

          {/* Achievers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentImages.map((src, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-3xl border border-slate-100/80 bg-slate-50/50 p-3 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
              >
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-inner bg-slate-200">
                  <Image
                    src={src}
                    alt="student visa approved"
                    fill
                    sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 350px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white rounded-full p-1.5 shadow-md flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Seminars & Webinars Section */}
      <section id="webinars" className="scroll-mt-32 py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              Seminars & Webinars
            </h2>
            <div className="mt-2.5 mx-auto h-[3px] w-24 bg-primary rounded-full" />
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {eventCards.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-slate-200 transition-all duration-300 flex flex-col group"
              >
                <div className="relative w-full aspect-video bg-slate-200 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    unoptimized
                  />
                  <span
                    className={`absolute top-4 left-4 inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm ${
                      event.type === "Seminar"
                        ? "bg-blue-600 text-white"
                        : "bg-emerald-600 text-white"
                    }`}
                  >
                    {event.type === "Seminar" ? (
                      <MapPin className="h-3 w-3" />
                    ) : (
                      <Video className="h-3 w-3" />
                    )}
                    {event.type}
                  </span>
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors duration-200">
                      {event.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="pt-5 mt-5 border-t border-slate-50 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Calendar className="h-4 w-4 text-primary shrink-0" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shared CTA Section */}
      <CTASection
        heading="Study Abroad Made Simple with EduWire!"
        description="Get expert guidance on top universities, visa, and applications — we’ll walk with you every step of the way!"
        buttonText="Book Free Counseling"
        showContactInfo={true}
        phoneNum="9300812637"
        emailText="info@edu-wire.com"
      />
    </div>
  );
}
