"use client";

import React, { useState } from "react";
import { submitContactForm, FormResponse } from "@/app/actions/form";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<FormResponse | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    course: "",
    studyPlan: "",
    preferredYear: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("You must consent to the privacy policy & terms before submitting.");
      return;
    }

    setLoading(true);
    setResponse(null);

    const result = await submitContactForm(formData);
    setResponse(result);
    setLoading(false);

    if (result.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        destination: "",
        course: "",
        studyPlan: "",
        preferredYear: "",
        consent: false,
      });
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-md shadow-slate-100/40 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
          Send an Enquiry
        </h2>
        <p className="text-slate-500 text-sm mt-1.5">
          Fill out the form below to receive a call back from our certified counselors.
        </p>
      </div>

      {response && (
        <div
          className={`p-4 rounded-xl text-sm border flex gap-3 items-start ${
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

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* First Name */}
          <div className="space-y-1.5">
            <label htmlFor="firstName" className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-1.5">
            <label htmlFor="lastName" className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Destination Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="destination" className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Destination <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all appearance-none"
              >
                <option value="">Select Destination</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Course */}
          <div className="space-y-1.5">
            <label htmlFor="course" className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Course
            </label>
            <input
              type="text"
              id="course"
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Study Plan Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="studyPlan" className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Study Plan <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="studyPlan"
                name="studyPlan"
                value={formData.studyPlan}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all appearance-none"
              >
                <option value="">Please Select</option>
                <option value="2025">Next Year</option>
                <option value="2026">In 2 Years</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Preferred Intake Year Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="preferredYear" className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Intake Year <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="preferredYear"
                name="preferredYear"
                value={formData.preferredYear}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/30 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all appearance-none"
              >
                <option value="">Select Year</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-1 h-4.5 w-4.5 rounded-md border-slate-300 text-primary focus:ring-primary cursor-pointer shrink-0 transition-colors"
          />
          <label htmlFor="consent" className="text-xs sm:text-[13px] text-slate-500 leading-relaxed cursor-pointer select-none">
            By clicking <strong className="text-slate-800 font-semibold">Submit</strong>, I agree to the{" "}
            <a
              href="/terms-and-conditions"
              target="_blank"
              className="font-medium text-primary hover:text-primary-dark hover:underline transition-colors"
            >
              terms & conditions
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy"
              target="_blank"
              className="font-medium text-primary hover:text-primary-dark hover:underline transition-colors"
            >
              privacy policy
            </a>{" "}
            and give my consent to receive updates through SMS/Email.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-primary-dark/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </form>
    </div>
  );
}
