import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Edu-Wire",
  description: "Refund policy for Edu-Wire consultancy services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function RefundPolicyPage() {
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

        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Refund Policy</h1>
        
        <div className="prose prose-slate text-slate-600 space-y-4 text-sm leading-relaxed">
          <p>
            Please read the following guidelines regarding refunds and processing cancellations at <strong>Edu-Wire</strong>.
          </p>
          
          <h3 className="text-base font-bold text-slate-800 pt-2">1. Consultation Fees</h3>
          <p>
            Our initial counseling, profile assessment, and general consultation sessions are completely free of charge.
          </p>
          
          <h3 className="text-base font-bold text-slate-800 pt-2">2. University Application Fees</h3>
          <p>
            Any application fees paid directly to the university portals are governed solely by that specific institution&apos;s refund policies. Edu-Wire does not handle, control, or refund university application payments.
          </p>
          
          <h3 className="text-base font-bold text-slate-800 pt-2">3. Service &amp; Coordination Retainers</h3>
          <p>
            In cases where students enroll in specialized programs (such as premium test prep or specific documentation packages), any processing or coaching fees are non-refundable once coaching materials have been delivered or documents have been officially submitted to translations/legalization boards.
          </p>
          
          <h3 className="text-base font-bold text-slate-800 pt-2">4. Visa Failures</h3>
          <p>
            Edu-Wire provides documentation screening and interview preparation support to maximize visa approval odds. However, visa decisions remain the exclusive authority of embassies. No refunds are provided on counseling or processing charges in case of a student visa rejection by the consulate.
          </p>
        </div>
      </div>
    </div>
  );
}
