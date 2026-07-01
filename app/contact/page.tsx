import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/data/site";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Edu-Wire | Study Abroad Counselling",
  description: "Contact Edu-Wire for study abroad counselling, university applications, visa guidance and overseas education support in Bhopal, Indore and Dubai.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-slate-50/50 to-white py-12 sm:py-16 border-b border-slate-100">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0d649305_1px,transparent_1px),linear-gradient(to_bottom,#0d649305_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
            Contact Us
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Contact <span className="text-primary">Edu-wire</span> For Abroad Studies
          </h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="mx-auto max-w-7xl w-full px-4 py-12 sm:px-6 lg:px-8 flex-grow space-y-16">
        
        {/* Contact Form and Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Premium Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right: Contact Information Cards / Quick Contact Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between">
            {/* Introductory Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex-grow flex flex-col justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Connect Instantly</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Have questions about courses, university applications, or visas? Reach out to our counsellors directly via phone or email for immediate assistance.
                </p>
              </div>
              <div className="relative w-full aspect-[1.5] rounded-2xl overflow-hidden border border-slate-100/80 bg-slate-50">
                <Image
                  src="/images/contact-instantly.jpg"
                  alt="Connect Instantly"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm tracking-wide uppercase">Phone</h3>
                <div className="text-slate-600 text-[15px] font-medium leading-relaxed">
                  <a href={`tel:${siteConfig.contact.phones[0].replace(/\s+/g, "")}`} className="hover:text-primary transition-colors">
                    {siteConfig.contact.phones[0]}
                  </a>
                  <span className="text-slate-400">, </span>
                  <a href={`tel:${siteConfig.contact.phones[1].replace(/\s+/g, "")}`} className="hover:text-primary transition-colors">
                    {siteConfig.contact.phones[1]}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm tracking-wide uppercase">Email</h3>
                <div className="text-slate-600 text-[15px] font-medium leading-relaxed">
                  <a href={`mailto:${siteConfig.contact.emails[0]}`} className="hover:text-primary transition-colors">
                    {siteConfig.contact.emails[0]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations Section */}
        <div className="space-y-8 pt-4">
          <div className="text-center sm:text-left">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">Our Presence</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Our Office Locations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Bhopal Office */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Bhopal</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  <a
                    href={siteConfig.contact.mapsBhopal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline transition-colors"
                  >
                    {siteConfig.contact.addressBhopal}
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.contact.mapsBhopal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  View on Google Maps &rarr;
                </a>
              </div>
            </div>

            {/* Dubai Office */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Dubai</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  <a
                    href={siteConfig.contact.mapsDubai}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline transition-colors"
                  >
                    {siteConfig.contact.addressDubai}
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.contact.mapsDubai}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  View on Google Maps &rarr;
                </a>
              </div>
            </div>

            {/* Indore Office */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Indore</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  <a
                    href={siteConfig.contact.mapsIndore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline transition-colors"
                  >
                    {siteConfig.contact.addressIndore}
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.contact.mapsIndore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  View on Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="space-y-4 pt-4">
          <div className="text-center sm:text-left">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">Find Us</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Locate Our Head Office</h2>
          </div>
          <div className="w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.1591938845477!2d77.39478669678957!3d23.237293400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a1e3639987%3A0x28e36da38d86089c!2z8J2XmPCdl7HwnZiCIPCdl6rwnZe28J2Xv_Cdl7Ig8J2XovCdmIPwnZey8J2Xv_CdmIDwnZey8J2XrvCdmIAg8J2XlvCdl7zwnZe78J2YgPCdmILwnZe58J2YgfCdl67wnZe78J2YgSDwnZej8J2Yg_CdmIEuIPCdl5_wnZiB8J2XsS4gLSBTdHVkeSBBYnJvYWQvT3ZlcnNlYXMgRWR1Y2F0aW9uL0lFTFRTIENlbnRyZS9TdHVkeSBBYnJvYWQgU2Nob2xhcnNoaXAgaW4gQmhvcGFs!5e0!3m2!1sen!2sin!4v1747819965267!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, objectFit: "cover" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map showing Bhopal Head Office location"
            />
          </div>
        </div>

      </section>
    </div>
  );
}
