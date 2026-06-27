"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data/site";
import { useModal } from "@/components/context/ModalContext";
import { Menu, X, ChevronDown, Search } from "lucide-react";

// Helper to get country flag emojis for MBBS and Destinations menus
const getCountryEmoji = (name: string): string => {
  const flags: Record<string, string> = {
    "Italy": "🇮🇹",
    "Romania": "🇷🇴",
    "Bulgaria": "🇧🇬",
    "Russia": "🇷🇺",
    "Georgia": "🇬🇪",
    "Kazakhstan": "🇰🇿",
    "Kyrgyzstan": "🇰🇬",
    "Poland": "🇵🇱",
    "Hungary": "🇭🇺",
    "Serbia": "🇷🇸",
    "UK": "🇬🇧",
    "Australia": "🇦🇺",
    "USA": "🇺🇸",
    "Canada": "🇨🇦",
    "Germany": "🇩🇪",
    "Ireland": "🇮🇪",
    "New Zealand": "🇳🇿",
    "France": "🇫🇷",
    "Spain": "🇪🇸",
  };
  return flags[name] || "";
};

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setActiveDropdown(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Lock body scroll while the mobile panel is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  const openOnHover = (name: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(name);
  };

  const closeOnHover = () => {
    closeTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_16px_rgba(0,0,0,0.07)]"
          : "bg-white"
      }`}
    >
      {/* Thin dark-blue accent line at very top */}
      <div className="h-[3px] w-full bg-[#0D6493]" />

      {/* Bottom border */}
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled ? "border-slate-200/80" : "border-slate-100"
        }`}
      >
        <div className="mx-auto max-w-[1540px] px-6 lg:px-8">

          {/* ── Desktop bar: 1280px and above ── */}
          <div className="hidden lg:flex h-[72px] items-center justify-between gap-4">

            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/images/Edu-wire-log.png"
                  alt="Edu-Wire Logo"
                  width={170}
                  height={40}
                  priority
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            {/* Desktop Nav Links — centered */}
            <nav
              className="flex items-center gap-0.5 flex-1 justify-center"
              role="navigation"
              aria-label="Main navigation"
            >
              {siteConfig.navigation.main.map((item) => {
                const isActiveParent =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                if (item.children) {
                  const isLargeDropdown = item.children.length > 5;
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => openOnHover(item.name)}
                      onMouseLeave={closeOnHover}
                    >
                      <button
                        className={`relative flex items-center gap-1 px-3 py-2 text-[15px] font-medium transition-all duration-200 outline-none select-none whitespace-nowrap ${
                          isActiveParent
                            ? "text-[#0D6493]"
                            : "text-slate-700 hover:text-[#0D6493]"
                        }`}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                      >
                        <span className="relative">
                          {item.name}
                          {isActiveParent && (
                            <span className="absolute -bottom-[3px] left-0 right-0 h-[2px] bg-[#0D6493] rounded-full" />
                          )}
                        </span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 opacity-50 transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full transition-all duration-200 pt-2 z-50 ${
                          isLargeDropdown
                            ? "left-1/2 -translate-x-1/2 w-[480px]"
                            : "left-0 w-56"
                        } ${
                          activeDropdown === item.name
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-1 pointer-events-none"
                        }`}
                        role="menu"
                      >
                        <div
                          className={`bg-white rounded-xl shadow-xl shadow-slate-900/8 border border-slate-100 p-2.5 ${
                            isLargeDropdown
                              ? "grid grid-cols-2 gap-1"
                              : "flex flex-col gap-0.5"
                          }`}
                        >
                          {item.children.map((subItem) => {
                            const isActiveChild = pathname === subItem.href;
                            const flagEmoji = getCountryEmoji(subItem.name);
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                role="menuitem"
                                className={`group flex items-center rounded-lg px-3 py-2 text-[13px] font-semibold transition-all duration-150 ${
                                  isActiveChild
                                    ? "bg-[#0D6493]/6 text-[#0D6493]"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-[#0D6493]"
                                }`}
                              >
                                {flagEmoji && (
                                  <span className="mr-2 text-sm shrink-0 select-none">
                                    {flagEmoji}
                                  </span>
                                )}
                                <span>{subItem.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 text-[15px] font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? "text-[#0D6493]"
                        : "text-slate-700 hover:text-[#0D6493]"
                    }`}
                  >
                    <span className="relative">
                      {item.name}
                      {isActive && (
                        <span className="absolute -bottom-[3px] left-0 right-0 h-[2px] bg-[#0D6493] rounded-full" />
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Search icon — far right */}
            <div className="flex-shrink-0">
              <Link
                href="/blogs"
                aria-label="Search"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:text-[#0D6493] hover:bg-slate-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6493]/50"
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* ── Mobile / Tablet bar: below lg ── */}
          <div className="flex lg:hidden h-[64px] items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <Image
                src="/images/Edu-wire-log.png"
                alt="Edu-Wire Logo"
                width={150}
                height={36}
                priority
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <div className="flex items-center gap-2">
              {/* Mobile search */}
              <Link
                href="/blogs"
                aria-label="Search"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:text-[#0D6493] hover:bg-slate-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6493]/50"
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={2} />
              </Link>

              {/* Hamburger toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 focus:outline-none"
              >
                <Menu
                  className={`absolute h-5 w-5 transition-all duration-200 ${
                    isOpen ? "opacity-0 rotate-45 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`absolute h-5 w-5 transition-all duration-200 ${
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-45 scale-75"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden overflow-hidden border-t border-slate-100 bg-white transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="space-y-1 px-4 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {siteConfig.navigation.main.map((item) => {
            if (item.children) {
              const isActiveParent =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const isLargeDropdown = item.children.length > 5;
              return (
                <div key={item.name} className="py-0.5">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-base font-bold transition-colors ${
                      isActiveParent
                        ? "text-[#0D6493] bg-[#0D6493]/5"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.name
                        ? "max-h-[460px] opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`ml-4 pl-3.5 border-l-2 border-slate-100 py-1 ${
                        isLargeDropdown
                          ? "grid grid-cols-2 gap-1.5"
                          : "flex flex-col gap-1"
                      }`}
                    >
                      {item.children.map((subItem) => {
                        const isSubActive = pathname === subItem.href;
                        const subFlag = getCountryEmoji(subItem.name);
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                              isSubActive
                                ? "text-[#0D6493] bg-[#0D6493]/5"
                                : "text-slate-600 hover:bg-slate-50 hover:text-[#0D6493]"
                            }`}
                          >
                            {subFlag && <span className="mr-2 text-base">{subFlag}</span>}
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            const isActive =
              item.href === "/" ? pathname === "/" : pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-xl px-3.5 py-3 text-base font-bold transition-colors ${
                  isActive
                    ? "text-[#0D6493] bg-[#0D6493]/5"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Mobile bottom contacts/actions */}
          <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                openModal();
              }}
              className="w-full rounded-xl bg-[#0D6493] py-3.5 text-center text-base font-bold text-white shadow-md shadow-[#0D6493]/20 hover:bg-[#0b5577] transition-all cursor-pointer"
            >
              Book Free Counselling
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}