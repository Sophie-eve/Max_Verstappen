"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface FallbackImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  placeholderType?: "hero" | "car" | "trophy" | "helmet" | "generic";
  sizes?: string;
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  placeholderType = "generic",
  sizes,
}) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`relative overflow-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#151D33] via-[#0D1322] to-[#0A0E1A] border border-white/10 ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
        role="img"
        aria-label={alt}
      >
        {/* Subtle background racing grid */}
        <div className="absolute inset-0 carbon-pattern-subtle opacity-40 pointer-events-none" />

        {/* Ambient glow */}
        <div className="absolute inset-0 bg-radial from-[#DB0A40]/10 via-transparent to-transparent pointer-events-none" />

        {/* Placeholder Graphic based on type */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-sm px-4">
          {placeholderType === "hero" && (
            <>
              {/* Silhouette Vector for Max Verstappen */}
              <svg
                className="w-32 h-32 sm:w-44 sm:h-44 text-[#FF6A13]/80 drop-shadow-[0_0_25px_rgba(255,106,19,0.4)]"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                {/* Dutch Lion / Champion Silhouette */}
                <circle cx="50" cy="35" r="16" stroke="#FFC906" strokeWidth="2" fill="#121829" />
                <path d="M38 31 C 42 22, 58 22, 62 31" stroke="#DB0A40" strokeWidth="3" />
                <path d="M26 82 C 26 56, 74 56, 74 82" stroke="#FFC906" strokeWidth="2.5" fill="#151D33" />
                <path d="M50 56 L50 82" stroke="#DB0A40" strokeWidth="2" strokeDasharray="3 3" />
                {/* #1 Number in badge */}
                <rect x="42" y="60" width="16" height="18" rx="2" fill="#DB0A40" />
                <text x="50" y="74" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                  1
                </text>
              </svg>
              <div className="mt-4 font-display text-xl sm:text-2xl uppercase tracking-widest text-[#F5F7FA]">
                MAX VERSTAPPEN <span className="text-[#FFC906]">#1</span>
              </div>
              <p className="mt-1 text-xs text-[#8F9CAE]">
                Place your photo at <code className="text-[#FFC906] font-mono">/public/images/hero-max.png</code>
              </p>
            </>
          )}

          {placeholderType === "car" && (
            <>
              {/* F1 Car Silhouette */}
              <svg
                className="w-48 h-24 sm:w-64 sm:h-32 text-[#DB0A40]"
                viewBox="0 0 200 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                {/* Aerodynamic wing & nose silhouette */}
                <path d="M10 50 L35 48 L65 42 L110 38 L140 38 L170 30 L185 24 L190 28 L175 48 L155 52 L110 52 L75 52 L40 54 L10 54 Z" fill="#151D33" stroke="#DB0A40" strokeWidth="2" />
                <path d="M165 24 L195 24 L195 44 L165 44" stroke="#FFC906" strokeWidth="2" />
                {/* Front Wheel */}
                <circle cx="45" cy="54" r="14" fill="#0A0E1A" stroke="#FF6A13" strokeWidth="3" />
                <circle cx="45" cy="54" r="6" fill="#151D33" stroke="#FFC906" strokeWidth="1" />
                {/* Rear Wheel */}
                <circle cx="155" cy="54" r="16" fill="#0A0E1A" stroke="#FF6A13" strokeWidth="3" />
                <circle cx="155" cy="54" r="7" fill="#151D33" stroke="#FFC906" strokeWidth="1" />
                {/* Halo & Cockpit */}
                <path d="M90 38 C 95 28, 115 28, 120 38" stroke="#F5F7FA" strokeWidth="2.5" />
              </svg>
              <div className="mt-3 font-display text-lg sm:text-xl uppercase tracking-widest text-[#F5F7FA]">
                ORACLE RED BULL RACING <span className="text-[#DB0A40]">RB20</span>
              </div>
              <p className="mt-1 text-xs text-[#8F9CAE]">
                Place your car image at <code className="text-[#FFC906] font-mono">/public/images/car.png</code>
              </p>
            </>
          )}

          {placeholderType === "trophy" && (
            <>
              <svg
                className="w-24 h-24 text-[#FFC906]"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M18 10 H46 V26 C46 34 40 40 32 40 C24 40 18 34 18 26 Z" fill="#151D33" stroke="#FFC906" />
                <path d="M18 16 H10 C8 16 6 18 6 22 C6 28 12 32 18 32" stroke="#FFC906" />
                <path d="M46 16 H54 C56 16 58 18 58 22 C58 28 52 32 46 32" stroke="#FFC906" />
                <path d="M32 40 V50" stroke="#FFC906" strokeWidth="3" />
                <path d="M20 54 H44" stroke="#FFC906" strokeWidth="4" />
                <circle cx="32" cy="24" r="4" fill="#DB0A40" />
              </svg>
              <div className="mt-3 font-display text-lg uppercase tracking-widest text-[#FFC906]">
                WORLD CHAMPION TROPHY
              </div>
              <p className="mt-1 text-xs text-[#8F9CAE]">
                Add file to <code className="text-[#FFC906] font-mono">/public/images/trophy.png</code>
              </p>
            </>
          )}

          {placeholderType === "helmet" && (
            <>
              <svg
                className="w-24 h-24 text-[#FF6A13]"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M14 36 C14 20 22 12 36 12 C50 12 56 22 56 36 C56 46 48 52 36 52 C24 52 14 46 14 36 Z" fill="#151D33" stroke="#DB0A40" />
                <path d="M32 26 H54 V36 H32 Z" fill="#0A0E1A" stroke="#FFC906" strokeWidth="2" />
                <circle cx="44" cy="31" r="2" fill="#FF6A13" />
              </svg>
              <div className="mt-3 font-display text-lg uppercase tracking-widest text-[#FF6A13]">
                GOLD CHAMPION HELMET
              </div>
              <p className="mt-1 text-xs text-[#8F9CAE]">
                Add file to <code className="text-[#FFC906] font-mono">/public/images/helmet.png</code>
              </p>
            </>
          )}

          {placeholderType === "generic" && (
            <>
              <div className="w-16 h-16 rounded-full bg-[#151D33] border border-white/10 flex items-center justify-center text-[#FFC906] font-display text-2xl">
                #1
              </div>
              <div className="mt-3 font-display text-base uppercase tracking-wider text-[#F5F7FA]">
                {alt}
              </div>
              <p className="mt-1 text-xs text-[#8F9CAE]">
                Place image at <code className="text-[#FFC906] font-mono">{src}</code>
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setError(true)}
    />
  );
};
