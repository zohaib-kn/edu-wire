"use client";

import React, { useState } from "react";
import { useModal } from "@/components/context/ModalContext";
import { submitConsultationForm, FormResponse } from "@/app/actions/form";
import { X, User, Mail, Phone, MapPin, GraduationCap, Flag, Loader2 } from "lucide-react";

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

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] overflow-y-auto z-10 animate-slide-up">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-all"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 leading-tight">
              Apply for a <span className="text-primary border-b-2 border-primary/25">Free Consultation</span>
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Get expert guidance on universities, courses, scholarship opportunities, and visas.
            </p>
          </div>

          {response && (
            <div
              className={`p-4 rounded-xl text-sm mb-6 ${
                response.success
                  ? response.isDevMock
                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                    : "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              <div className="font-semibold mb-1">
                {response.success ? "Success!" : "Submission Failed"}
              </div>
              <div>{response.message}</div>
              {response.isDevMock && (
                <div className="mt-2 text-xs text-amber-600 font-medium">
                  * Currently running in development mode. The data was not forwarded to the live email.
                </div>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="relative">
              <User className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>

            {/* Email Address */}
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>

            {/* Phone Number */}
            <div className="relative">
              <Phone className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>

            {/* City */}
            <div className="relative">
              <MapPin className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>

            {/* Highest Education */}
            <div className="relative">
              <GraduationCap className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                name="education"
                placeholder="Highest Education"
                value={formData.education}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>

            {/* Interested Country */}
            <div className="relative">
              <Flag className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                name="country"
                placeholder="Interested Country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-all duration-200 disabled:opacity-50"
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
      </div>
    </div>
  );
}
