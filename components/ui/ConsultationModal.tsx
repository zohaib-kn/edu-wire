"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useModal } from "@/components/context/ModalContext";
import { submitConsultationForm, FormResponse } from "@/app/actions/form";
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Flag,
  Loader2,
  Sparkles,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function ConsultationModal() {
  const { isModalOpen, closeModal } = useModal();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<FormResponse | null>(null);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    education: "",
    country: "",
  });

  if (!isModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    const result = await submitConsultationForm(formData);
    setResponse(result);
    setLoading(false);

    if (result.success) {
      // Clear form on success
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        city: "",
        education: "",
        country: "",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      {/* Backdrop click close */}
      <div className="absolute inset-0" onClick={closeModal} />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg md:max-w-[960px] bg-white rounded-[28px] md:rounded-[32px] shadow-2xl overflow-hidden border border-slate-100/50 max-h-[90vh] z-10 flex flex-col md:flex-row items-stretch animate-slide-up">
        
        {/* Close Button */}
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 text-slate-400 hover:text-slate-700 bg-slate-100/40 hover:bg-slate-100 rounded-full transition-all duration-200 z-30 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left Side: Form Panel */}
        <div className="w-full md:w-[52%] p-6 sm:p-8 md:p-10 overflow-y-auto max-h-[85vh] md:max-h-[90vh] scrollbar-thin">
          <div className="mb-6">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-[11px] font-semibold text-primary mb-2">
              <Sparkles className="h-3 w-3" /> Free Counselling
            </span>
            <h2 className="text-2xl font-bold text-slate-900 leading-tight">
              Apply for a <span className="text-primary bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">Free Consultation</span>
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Get expert guidance on universities, courses, scholarship opportunities, and visas.
            </p>
          </div>

          {response && (
            <div
              className={`p-4 rounded-xl text-sm mb-5 border flex gap-3 items-start animate-fade-in ${
                response.success
                  ? response.isDevMock
                    ? "bg-amber-50 text-amber-800 border-amber-200"
                    : "bg-green-50/60 text-green-800 border-green-200"
                  : "bg-red-50 text-red-800 border-red-200"
              }`}
            >
              {response.success ? (
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              )}
              <div>
                <div className="font-semibold mb-0.5">
                  {response.success ? "Success!" : "Submission Failed"}
                </div>
                <div>{response.message}</div>
                {response.isDevMock && (
                  <div className="mt-1.5 text-xs text-amber-600 font-medium">
                    * Running in development mode. The data was not forwarded to the live email.
                  </div>
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div className="relative md:col-span-2">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  className="w-full h-14 pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all"
                />
              </div>

              {/* Email Address */}
              <div className="relative md:col-span-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-14 pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all"
                />
              </div>

              {/* Phone Number */}
              <div className="relative md:col-span-1">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full h-14 pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all"
                />
              </div>

              {/* City */}
              <div className="relative md:col-span-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full h-14 pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all"
                />
              </div>

              {/* Highest Education */}
              <div className="relative md:col-span-1">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  name="education"
                  placeholder="Highest Education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full h-14 pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all"
                />
              </div>

              {/* Interested Country */}
              <div className="relative md:col-span-2">
                <Flag className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  name="country"
                  placeholder="Interested Country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full h-14 pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all"
                />
              </div>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 mt-2 flex items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-primary-dark/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Request</span>
              )}
            </button>
          </form>
        </div>

        {/* Right Side: Visual Panel (Hidden on mobile) */}
        <div className="hidden md:flex md:w-[48%] bg-gradient-to-br from-blue-50/90 via-sky-50/30 to-blue-50/50 border-l border-slate-100/50 relative overflow-hidden select-none flex-col justify-between py-6 lg:py-8 px-0">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          
          {/* Top text block */}
          <div className="relative z-10 px-6 lg:px-8">
            <span className="text-[10px] font-bold text-primary tracking-wider uppercase bg-blue-50/80 px-2.5 py-1 rounded-full">1-on-1 Session</span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-2.5 leading-tight">Expert Counseling</h3>
            <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
              Connect with top-rated advisors to find the perfect university matching your profile.
            </p>
          </div>

          {/* Image container in middle (no horizontal padding, full width) */}
          <div className="relative z-10 w-full flex-1 flex items-center justify-center py-4">
            <Image
              src="/images/consultation/consultation-modal-visual.jpg"
              alt="Expert counseling consultation"
              width={720}
              height={480}
              className="h-auto w-full max-w-full max-h-[380px] object-contain mix-blend-multiply"
              priority
            />
          </div>

          {/* Bottom trust indicators */}
          <div className="relative z-10 pt-4 border-t border-slate-200/60 text-[11px] text-slate-500 flex items-center justify-between font-medium mx-6 lg:mx-8">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              100% Free Consultation
            </span>
            <span className="text-slate-400">Certified Experts Only</span>
          </div>
        </div>

      </div>
    </div>
  );
}
