import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Edu-Wire",
  description: "Privacy policy for Edu-Wire consultancy services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm space-y-6">
        {/* Warning Review Banner */}
        <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl p-5 text-sm">
          <h3 className="font-bold text-base mb-1">Draft for Content Review</h3>
          <p className="leading-relaxed">
            IMPORTANT: The source content for this legal page could not be fully extracted from the live PHP site due to server rendering errors. This page is currently set to <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">noindex</code>. Please review and replace this placeholder draft with your final policy before production launch.
          </p>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
        
        <div className="prose prose-slate text-slate-600 space-y-4 text-sm leading-relaxed">
          <p>
            At <strong>Edu-Wire</strong>, we value the privacy of our visitors and students. This Privacy Policy documents the types of information we collect and how we utilize it.
          </p>
          
          <h3 className="text-base font-bold text-slate-800 pt-2">1. Personal Information We Collect</h3>
          <p>
            When you request consultation, apply through our forms, or contact us, we collect details such as your full name, email address, phone number, current city, highest education qualification, and preferred study destination.
          </p>
          
          <h3 className="text-base font-bold text-slate-800 pt-2">2. How We Use Your Information</h3>
          <p>
            We use your personal data to provide consulting, process university admissions, register you for our education seminars, send updates regarding courses, or coordinate with global university admissions desks on your behalf.
          </p>
          
          <h3 className="text-base font-bold text-slate-800 pt-2">3. Data Security</h3>
          <p>
            We deploy standard security layers to protect student records. We do not sell, rent, or lease our student email databases or personal data logs to third-party marketing companies.
          </p>
          
          <h3 className="text-base font-bold text-slate-800 pt-2">4. Third-Party Links</h3>
          <p>
            Our website contains links to university portals, Google maps, or third-party academic services. We are not responsible for the privacy structures or practices of third-party websites.
          </p>
        </div>
      </div>
    </div>
  );
}
