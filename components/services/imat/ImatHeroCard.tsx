"use client";

import React, { useState, useEffect } from "react";
import { Calendar, GraduationCap, TrendingUp, Clock, Shield } from "lucide-react";

interface ImatHeroCardProps {
  dates: {
    label: string;
    value: string;
    iconName: string;
  }[];
  countdownTarget: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  GraduationCap,
  TrendingUp,
  Clock,
  Shield,
};

export default function ImatHeroCard({ dates, countdownTarget }: ImatHeroCardProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date(countdownTarget).getTime();

    const tick = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [countdownTarget]);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/60">
      <h3 className="text-lg font-bold border-b border-slate-100 pb-4 mb-4 flex items-center gap-2 text-slate-900">
        <span>📋</span> IMAT 2026 Key Dates
      </h3>
      
      <div className="space-y-4 mb-6">
        {dates.map((date: { label: string; value: string; iconName: string }, idx: number) => {
          const Icon = iconMap[date.iconName] || Calendar;
          return (
            <div key={idx} className="flex items-center gap-4 py-2 border-b border-slate-50 last:border-b-0">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{date.label}</div>
                <div className="text-sm font-semibold text-slate-900 mt-0.5">{date.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Countdown timer */}
      <div className="bg-primary/8 border border-primary/20 rounded-xl p-4 text-center">
        <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
          ⏳ Days Until IMAT 2026
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="text-center min-w-[50px]">
            <span className="text-2xl md:text-3xl font-extrabold block text-slate-900 leading-none">
              {timeLeft.days}
            </span>
            <span className="text-[10px] text-slate-400 uppercase font-semibold mt-1 block">Days</span>
          </div>
          <div className="text-xl font-bold text-slate-300 mb-4">:</div>
          <div className="text-center min-w-[50px]">
            <span className="text-2xl md:text-3xl font-extrabold block text-slate-900 leading-none">
              {timeLeft.hours}
            </span>
            <span className="text-[10px] text-slate-400 uppercase font-semibold mt-1 block">Hrs</span>
          </div>
          <div className="text-xl font-bold text-slate-300 mb-4">:</div>
          <div className="text-center min-w-[50px]">
            <span className="text-2xl md:text-3xl font-extrabold block text-slate-900 leading-none">
              {timeLeft.minutes}
            </span>
            <span className="text-[10px] text-slate-400 uppercase font-semibold mt-1 block">Min</span>
          </div>
          <div className="text-xl font-bold text-slate-300 mb-4">:</div>
          <div className="text-center min-w-[50px]">
            <span className="text-2xl md:text-3xl font-extrabold block text-slate-900 leading-none">
              {timeLeft.seconds}
            </span>
            <span className="text-[10px] text-slate-400 uppercase font-semibold mt-1 block">Sec</span>
          </div>
        </div>
      </div>
    </div>
  );
}
