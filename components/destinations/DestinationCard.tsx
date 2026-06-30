"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { StudyDestination } from "@/lib/data/destinations/types";

interface DestinationCardProps {
  destination: StudyDestination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const { listing, slug } = destination;
  if (!listing) return null;

  const href = `/destinations/${slug}`;

  return (
    <Link
      href={href}
      className="group relative flex flex-col bg-white rounded-[8px] border border-blue-100 shadow-[0_1px_6px_rgba(13,100,147,0.07)] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(13,100,147,0.13)] hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6493] focus-visible:ring-offset-2"
      aria-label={`Explore ${listing.title}`}
    >
      {/* Card Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <Image
          src={listing.image}
          alt={listing.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
          unoptimized
        />
        {/* Subtle gradient overlay for bottom legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Flag badge — bottom-left of image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm">
          <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
            <Image
              src={listing.flag}
              alt={`${listing.title} flag`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <span className="text-[11px] font-semibold text-slate-700 leading-none">{listing.title}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-[17px] font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#0D6493] transition-colors duration-200">
          {listing.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3">
          {listing.description}
        </p>

        {/* Explore link */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-[#0D6493] group-hover:gap-2 transition-all duration-200 flex items-center gap-1.5">
            Explore {listing.title}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
