"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  rating: number;
}

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials: Testimonial[] = [
    {
      text: "“I had an excellent experience with Edu Wire Counsellors and team, who provided exceptional guidance in selecting the right country and university for my studies. Their support extended to IELTS preparation, where they helped me enhance my skills effectively. Overall, they are the best consultants I have encountered so far.”",
      name: "Kratika Rawat",
      role: "MBBS Student – Russia",
      rating: 5,
    },
    {
      text: "“Edu-wire Overseas Consultant aided me in getting admission into the UK university at which I had always dreamt of studying, and which was within my reach as well. The whole process was pretty smooth, and the quality of service provided was phenomenal. Thank you very much for all your help!”",
      name: "Satyam Patidar",
      role: "Study in UK Student",
      rating: 4,
    },
    {
      text: "“If you're dreaming of studying abroad, Edu Wire is the most trusted consultant! They offer excellent guidance, a wide range of options, and make the entire process smooth and easy. Their team is professional, helpful, and always ready to support. Highly recommend Edu Wire for your study abroad journey!”",
      name: "Rishabh Mukati",
      role: "Study Abroad Aspirant",
      rating: 5,
    },
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const current = testimonials[activeIdx];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50/50 to-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Global Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 inline-block relative">
            <span className="relative inline-block px-1">
              Testimonials
              <svg className="absolute w-full h-2.5 -bottom-2 left-0 text-[#f4a261]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Navigation */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary/70 block mb-2">
                Student Stories
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-950 leading-tight">
                From our <span className="text-primary">community.</span>
              </h3>
              <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed max-w-sm">
                Here&apos;s what our students have to say about EduWire&apos;s consultancy services.
              </p>
            </div>

            {/* Navigation Buttons (Only if multiple testimonials exist) */}
            {testimonials.length > 1 && (
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-primary/20 bg-white hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all shadow-sm hover:shadow-md"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-primary/20 bg-white hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all shadow-sm hover:shadow-md"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Active Testimonial Card */}
          <div className="lg:col-span-7">
            <div className="relative min-h-[340px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full bg-[#E1EDF8]/30 rounded-[2rem] p-8 md:p-10 border border-[#0D6493]/10 shadow-lg relative"
                >
                  {/* Decorative Quote Icon */}
                  <div className="absolute top-6 right-8 text-[#0D6493]/10">
                    <Quote className="h-16 w-16 fill-current" />
                  </div>

                  <div className="relative z-10 space-y-6">
                    {/* Stars Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4.5 w-4.5 ${
                            i < current.rating
                              ? "text-amber-500 fill-amber-500"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-slate-700 text-sm md:text-base italic leading-relaxed font-medium">
                      {current.text}
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[#0D6493]/10">
                      {/* Avatar Placeholder */}
                      <div className="w-12 h-12 rounded-full bg-[#0D6493] text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0">
                        {current.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      <div>
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base">
                          {current.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold mt-0.5">
                          {current.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
