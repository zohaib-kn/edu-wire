import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Edu-Wire",
  description: "Terms and conditions for using Edu-Wire consultancy services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm space-y-6">
        {/* Warning Review Banner */}
        <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl p-5 text-sm">
          <h3 className="font-bold text-base mb-1">Draft for Content Review</h3>
          <p className="leading-relaxed">
            IMPORTANT: The source content for this legal page could not be fully extracted from the live PHP site due to server rendering errors. This page is currently set to <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">noindex</code>. Please review and replace this placeholder draft with your final terms before production launch.
          </p>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Terms and Conditions</h1>
        
        <div className="prose prose-slate text-slate-600 space-y-4 text-sm leading-relaxed">
          <p>
            Welcome to <strong>Edu-Wire Overseas Consultant Pvt Ltd</strong>. By accessing our services, websites, or consultancies, you agree to comply with and be bound by the following terms and conditions.
          </p>
          
          <h3 className="text-base font-bold text-slate-800 pt-2">1. Use of Services</h3>
          <p>
            Edu-Wire provides information, counseling, university selection, admission coordination, and visa processing support for international studies. All advice provided is based on current guidelines from relevant immigration authorities and universities.
          </p>
          
          <h3 className="text-base font-bold text-slate-800 pt-2">2. Accuracy of Information</h3>
          <p>
            While we strive to keep all course structures, tuition fees, and visa guidelines accurate, universities and immigration policies change frequently. Edu-Wire does not guarantee the permanent accuracy of fee schedules or intake timelines.
          </p>
          
          <h3 className="text-base font-bold text-slate-800 pt-2">3. User Responsibility</h3>
          <p>
            Students are responsible for submitting authentic, legal, and true documents. Any visa rejection or admission cancellation arising from fraudulent or incorrect document submission is the sole liability of the applicant.
          </p>
          
          <h3 className="text-base font-bold text-slate-800 pt-2">4. Limitation of Liability</h3>
          <p>
            Final decision-making regarding student visa issuance lies solely with the respective country&apos;s embassy or consulate. Final admission decision lies with the university. Edu-Wire is not liable for visa rejections or admission denials.
          </p>
        </div>
      </div>
    </div>
  );
}
