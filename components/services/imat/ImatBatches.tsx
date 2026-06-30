"use client";

import React from "react";
import { 
  Clock, 
  Video, 
  PlayCircle, 
  FileText, 
  Globe, 
  MapPin, 
  Check 
} from "lucide-react";
import { useModal } from "@/components/context/ModalContext";
import { ImatBatch } from "@/lib/data/service-pages/types";

interface ImatBatchesProps {
  data: {
    eyebrow: string;
    heading: string;
    description: string;
    items: ImatBatch[];
  };
}

const getBatchIcon = (text: string) => {
  const t = text.toLowerCase();
  if (t.includes("centre") || t.includes("bhopal") || t.includes("complex")) return <MapPin className="h-4 w-4 shrink-0 text-[#c49a28]" />;
  if (t.includes("timing") || t.includes("timings") || t.includes("slot")) return <Clock className="h-4 w-4 shrink-0 text-[#c49a28]" />;
  if (t.includes("zoom") || t.includes("live") || t.includes("classes")) return <Video className="h-4 w-4 shrink-0 text-[#c49a28]" />;
  if (t.includes("recorded") || t.includes("sessions") || t.includes("revision")) return <PlayCircle className="h-4 w-4 shrink-0 text-[#c49a28]" />;
  if (t.includes("material") || t.includes("printed") || t.includes("mock")) return <FileText className="h-4 w-4 shrink-0 text-[#c49a28]" />;
  if (t.includes("across") || t.includes("anywhere") || t.includes("india")) return <Globe className="h-4 w-4 shrink-0 text-[#c49a28]" />;
  return <Check className="h-4 w-4 shrink-0 text-[#c49a28]" />;
};

export default function ImatBatches({ data }: ImatBatchesProps) {
  const { openModal } = useModal();

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-slate-900 select-none text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
            {data.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-tight mb-4">
            Choose Your <em className="text-[#c49a28] not-italic">Batch</em>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {data.description}
          </p>
        </div>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((batch: ImatBatch, index: number) => {
            const isRecommended = batch.badge && batch.badge.toLowerCase().includes("recommend");
            return (
              <div
                key={index}
                className={`flex flex-col h-full bg-white/5 border rounded-lg p-6 md:p-8 hover:bg-white/10 transition-all duration-300 ${
                  isRecommended ? "border-[#c49a28]/40 shadow-xl shadow-[#c49a28]/5" : "border-white/10"
                }`}
              >
                {/* Badge / Category Label */}
                <div className="mb-6">
                  <span className={`inline-block px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full border ${
                    isRecommended 
                      ? "bg-[#c49a28]/20 border-[#c49a28]/30 text-[#c49a28]" 
                      : "bg-white/5 border-white/10 text-slate-300"
                  }`}>
                    {batch.badge || batch.label}
                  </span>
                </div>

                {/* Batch Name */}
                <h3 className="text-xl font-bold text-white mb-6">
                  {batch.name}
                </h3>

                {/* Batch Details Rows */}
                <div className="space-y-4 mb-8 flex-grow">
                  {batch.rows.map((row: string, rowIdx: number) => (
                    <div key={rowIdx} className="flex items-start gap-3">
                      {getBatchIcon(row)}
                      <span 
                        className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal"
                        dangerouslySetInnerHTML={{ __html: row }}
                      />
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={openModal}
                  className={`w-full inline-flex items-center justify-center py-3.5 px-6 text-sm font-bold rounded-lg transition-all active:scale-[0.98] ${
                    isRecommended 
                      ? "bg-[#c49a28] hover:bg-[#a8831f] text-white shadow-lg shadow-[#c49a28]/10" 
                      : "bg-[#0D6493] hover:bg-[#1355c4] text-white shadow-lg"
                  }`}
                >
                  {batch.ctaText}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
