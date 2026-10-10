"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Flag, Trophy, Shield, ExternalLink, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#070A12]/90 backdrop-blur-md border-t border-white/10 overflow-hidden">
      {/* Top angled racing stripe accent */}
      <div className="h-[3px] w-full racing-stripe-accent" />

      {/* Subtle carbon texture background */}
      <div className="absolute inset-0 carbon-pattern-subtle opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-sm overflow-hidden border border-white/20 bg-black shadow-[0_0_12px_rgba(219,10,64,0.35)] flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Max Verstappen #1 Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-display text-2xl uppercase tracking-wider text-white">
                VERSTAPPEN <span className="text-[#FFC906]">#1</span>
              </span>
            </div>

            <p className="text-sm text-[#8F9CAE] max-w-md font-sans leading-relaxed">
              Born to Race. Built to Win. Dedicated tribute to 4-time FIA Formula One World Champion Max Verstappen and the relentless engineering excellence of Oracle Red Bull Racing.
            </p>

            {/* Quick stats mini-bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-[#8F9CAE]">
              <span className="flex items-center gap-1.5 px-2 py-1 bg-[#121829] rounded-sm border border-white/5">
                <Trophy className="w-3.5 h-3.5 text-[#FFC906]" strokeWidth={2.2} />
                <span className="text-white font-medium">4x World Champion</span>
              </span>
              <span className="flex items-center gap-1.5 px-2 py-1 bg-[#121829] rounded-sm border border-white/5">
                <Flag className="w-3.5 h-3.5 text-[#DB0A40]" strokeWidth={2.2} />
                <span className="text-white font-medium">72 GP Wins</span>
              </span>
              <span className="flex items-center gap-1.5 px-2 py-1 bg-[#121829] rounded-sm border border-white/5">
                <span className="text-[#FF6A13] font-bold">135 Podiums</span>
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-[#F5F7FA] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#DB0A40]" /> Navigation
            </h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link
                  href="/"
                  className="text-[#8F9CAE] hover:text-[#FFC906] transition-colors inline-block py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFC906]"
                >
                  Home / Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-[#8F9CAE] hover:text-[#FFC906] transition-colors inline-block py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFC906]"
                >
                  Career Timeline & Records
                </Link>
              </li>
              <li>
                <Link
                  href="/garage"
                  className="text-[#8F9CAE] hover:text-[#FFC906] transition-colors inline-block py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFC906]"
                >
                  The Garage & RB20 Specs
                </Link>
              </li>
              <li>
                <Link
                  href="/pit-wall"
                  className="text-[#8F9CAE] hover:text-[#FFC906] transition-colors inline-block py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFC906]"
                >
                  Pit Wall / Fan Signups
                </Link>
              </li>
            </ul>
          </div>

          {/* Motorsport Connect & Channels */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-[#F5F7FA] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF6A13]" /> Official Channels
            </h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <a
                  href="https://www.verstappen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8F9CAE] hover:text-[#F5F7FA] transition-colors inline-flex items-center gap-1.5 py-1"
                >
                  Verstappen.com <ExternalLink className="w-3 h-3 text-[#FFC906]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.redbullracing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8F9CAE] hover:text-[#F5F7FA] transition-colors inline-flex items-center gap-1.5 py-1"
                >
                  Red Bull Racing <ExternalLink className="w-3 h-3 text-[#DB0A40]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.formula1.com/en/drivers/max-verstappen.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8F9CAE] hover:text-[#F5F7FA] transition-colors inline-flex items-center gap-1.5 py-1"
                >
                  F1 Official Profile <ExternalLink className="w-3 h-3 text-[#FF6A13]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#8F9CAE]">
          <div className="flex items-center gap-2.5">
            <span className="p-1 rounded-xs bg-[#FFC906]/15 border border-[#FFC906]/30 text-[#FFC906] flex items-center justify-center">
              <Shield className="w-3.5 h-3.5" strokeWidth={2.2} />
            </span>
            <p>
              Unofficial fan project. Not affiliated with Max Verstappen or Red Bull Racing.
            </p>
          </div>

          <div className="flex items-center gap-1 text-[#8F9CAE]">
            <span>Created by</span>
            <span className="text-[#FFC906] font-semibold">Shailja Singh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
