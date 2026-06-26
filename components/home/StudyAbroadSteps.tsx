"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useModal } from "@/components/context/ModalContext";

interface Step {
  number: string;
  title: string;
  desc: string;
  ctaText: string;
}

export default function StudyAbroadSteps() {
  const { openModal } = useModal();

  const steps: Step[] = [
    {
      number: "1",
      title: "Free Expert Consultation",
      desc: "Kickstart your study abroad dream with a one-on-one consultation — absolutely free!",
      ctaText: "Schedule Your Free Call",
    },
    {
      number: "2",
      title: "Find Your Perfect University",
      desc: "Get personalized recommendations for universities and programs tailored to your goals.",
      ctaText: "Get University Options",
    },
    {
      number: "3",
      title: "Complete Your Application",
      desc: "Our experts will guide you through applications, document prep, and submission — hassle-free.",
      ctaText: "Start Application Process",
    },
    {
      number: "4",
      title: "Visa & Travel Support",
      desc: "Get expert visa guidance, interview tips, and pre-departure support to land smoothly.",
      ctaText: "Get Visa Assistance",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50/50 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary/70">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Steps to Study Abroad with{" "}
            <span className="relative inline-block px-1">
              Edu-Wire
              <svg className="absolute w-full h-2.5 -bottom-2 left-0 text-[#f4a261]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="mt-5 text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            From your first counselling call to visa and travel support, our team guides every step with clarity.
          </p>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: 4-Step Vertical Timeline */}
          <motion.div 
            className="lg:col-span-7 relative pl-2 md:pl-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline Connector Line */}
            <div className="absolute left-[26px] md:left-[42px] top-6 bottom-6 w-0.5 bg-slate-200 -z-10 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="flex gap-4 md:gap-6 items-start"
                >
                  {/* Number Circle */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm md:text-base shrink-0 shadow-md border-4 border-white">
                    {step.number}
                  </div>

                  {/* Card Block */}
                  <div className="flex-grow bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-sm hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    
                    {/* Link CTA */}
                    <button
                      onClick={openModal}
                      className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-primary hover:text-primary-dark group transition-colors"
                    >
                      <span>{step.ctaText}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Sticky Video Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-lg">
              {/* Aspect Ratio 16/9 Iframe wrapper */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md bg-slate-900">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/cWHcNNwQcxg" 
                  title="Edu-wire Overseas Education Consultants | About Us | IELTS Training | Top QS Ranked Universities" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
              
              {/* Small trust badge / Caption */}
              <div className="mt-4 px-2 text-center lg:text-left">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Watch how Edu-Wire helps students choose the right country, university, and application path.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
