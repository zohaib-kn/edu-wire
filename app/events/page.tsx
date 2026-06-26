import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import { Calendar, Clock, MapPin, Video, Award, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Education Fairs | Edu-Wire Overseas Consultant",
  description: "Join our upcoming seminars and webinars on study abroad programs, university visits, scholarship guidelines, and student visa processes.",
};

interface Event {
  title: string;
  description: string;
  type: "Seminar" | "Webinar";
  date: string;
  time: string;
  location: string;
}

const eventsList: Event[] = [
  {
    title: "Seminar on Abroad Education",
    description: "An informative session covering study abroad options, university applications, scholarship processes, and profiles valuation. Meet top consultants directly.",
    type: "Seminar",
    date: "Upcoming (Contact for Dates)",
    time: "11:00 AM - 01:00 PM",
    location: "Edu-Wire Bhopal & Indore Offices",
  },
  {
    title: "Webinar on Visa Process",
    description: "Get comprehensive, step-by-step insights into filing a successful student visa. Understand blocked account requirements, source of funds, and visa interview preparation.",
    type: "Webinar",
    date: "Upcoming (Weekly Session)",
    time: "04:00 PM - 05:30 PM",
    location: "Online via Zoom / Live Stream",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4 inline-block">
            Edu-Wire Events
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Upcoming Seminars &amp; Webinars
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Meet university representatives, get visa counseling, and attend expert-led study abroad webinars.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 flex-grow">
        <SectionHeader
          title="Fairs &amp; Interactive"
          highlightedWord="Sessions"
          subtitle="Discover everything about upcoming events and education fairs hosted by Edu-Wire."
        />

        <div className="space-y-8 mt-12">
          {eventsList.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-start md:items-center hover:shadow-md hover:border-slate-200 transition-all duration-200"
            >
              <div className="space-y-3 max-w-2xl">
                <span
                  className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    event.type === "Seminar"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {event.type}
                </span>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{event.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{event.description}</p>
                
                {/* Event meta tags */}
                <div className="flex flex-wrap gap-x-6 gap-y-2.5 pt-2 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-primary shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {event.type === "Webinar" ? (
                      <Video className="h-4 w-4 text-primary shrink-0" />
                    ) : (
                      <MapPin className="h-4 w-4 text-primary shrink-0" />
                    )}
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition-all text-center"
              >
                Register for Event
              </a>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
