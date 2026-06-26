"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/data/site";
import { submitContactForm, FormResponse } from "@/app/actions/form";
import { Phone, Mail, MapPin, Loader2, CheckCircle, ExternalLink } from "lucide-react";

export default function ContactPage() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact Edu-Wire
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Reach out to our offices in Bhopal, Indore, and Dubai or submit your queries online.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 leading-tight">Send an Enquiry</h2>
              <p className="text-slate-500 text-sm mt-1">Fill out the form below to receive a call back from our certified counselors.</p>
            </div>

            {response && (
              <div
                className={`p-4 rounded-xl text-sm ${
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>
                
                {/* Last Name */}
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Destination Dropdown */}
              <div>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                >
                  <option value="">Select Destination</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="italy">Italy</option>
                  <option value="romania">Romania</option>
                  <option value="germany">Germany</option>
                  <option value="other">Other Country</option>
                </select>
              </div>

              {/* Course (Optional) */}
              <div>
                <input
                  type="text"
                  name="course"
                  placeholder="Intended Course (e.g. MBBS, MBA, MS)"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Study Plan Timeline */}
                <div>
                  <select
                    name="studyPlan"
                    value={formData.studyPlan}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                  >
                    <option value="">When are you planning?</option>
                    <option value="2025">Next Year</option>
                    <option value="2026">In 2 Years</option>
                  </select>
                </div>

                {/* Preferred Intake Year */}
                <div>
                  <select
                    name="preferredYear"
                    value={formData.preferredYear}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                  >
                    <option value="">Preferred Intake Year</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
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
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary shrink-0"
                />
                <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                  By checking this box, I agree to the{" "}
                  <a href="/terms-and-conditions" target="_blank" className="font-semibold text-primary hover:underline">
                    Terms &amp; Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy" target="_blank" className="font-semibold text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and authorize Edu-Wire to call, SMS, or Email me updates.
                </label>
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
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <span>Submit Enquiry</span>
                )}
              </button>
            </form>
          </div>

          {/* Quick Info & Offices Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-bold border-b border-slate-800 pb-3">Get in Touch</h2>
              
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Call Counselor</div>
                    <div className="mt-1 text-slate-400">
                      {siteConfig.contact.phones.map((phone, idx) => (
                        <a key={idx} href={`tel:${phone.replace(/\s+/g, "")}`} className="block hover:text-white transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Email Address</div>
                    <a href={`mailto:${siteConfig.contact.emails[0]}`} className="block mt-1 text-slate-400 hover:text-white transition-colors">
                      {siteConfig.contact.emails[0]}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices details */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-3">Our Offices</h2>
              
              <div className="space-y-5 text-sm">
                <div>
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <MapPin className="h-4.5 w-4.5 text-primary" />
                    <span>Bhopal (Head Office)</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                    {siteConfig.contact.addressBhopal}
                  </p>
                </div>

                <div>
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <MapPin className="h-4.5 w-4.5 text-primary" />
                    <span>Indore</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                    {siteConfig.contact.addressIndore}
                  </p>
                </div>

                <div>
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <MapPin className="h-4.5 w-4.5 text-primary" />
                    <span>Dubai</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                    {siteConfig.contact.addressDubai}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 w-full h-[400px] rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.1591938845477!2d77.39478669678957!3d23.237293400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a1e3639987%3A0x28e36da38d86089c!2z8J2XmPCdl7HwnZiCIPCdl6rwnZe28J2Xv_Cdl7Ig8J2XovCdmIPwnZey8J2Xv_CdmIDwnZey8J2XvCdmIAg8J2XlvCdl7zwnZe78J2YgPCdmILwnZe58J2YgfCdl67wnZe78J2YgSDwnZej8J2Yg_CdmIEuIPCdl5_wnZiB8J2XsS4gLSBTdHVkeSBBYnJvYWQvT3ZlcnNlYXMgRWR1Y2F0aW9uL0lFTFRTIENlbnRyZS9TdHVkeSBBYnJvYWQgU2Nob2xhcnNoaXAgaW4gQmhvcGFs!5e0!3m2!1sen!2sin!4v1747819965267!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, objectFit: "cover" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
