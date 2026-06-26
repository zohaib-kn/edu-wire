import React from "react";

interface SectionHeaderProps {
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  highlightedWord,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight leading-tight">
        {title}{" "}
        {highlightedWord && (
          <span className="relative inline-block text-primary">
            <span className="relative z-10">{highlightedWord}</span>
            <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/10 rounded-sm -z-0" />
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-500 font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
