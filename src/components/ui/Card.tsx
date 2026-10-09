"use client";

import React from "react";
import { motion } from "framer-motion";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
  carbonTexture?: boolean;
  accentBorder?: "none" | "red" | "orange" | "yellow" | "racing";
  onClick?: () => void;
  as?: React.ElementType;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverLift = true,
  carbonTexture = true,
  accentBorder = "none",
  onClick,
}) => {
  const borderStyles = {
    none: "border-white/10 hover:border-white/20",
    red: "border-[#DB0A40]/40 hover:border-[#DB0A40]",
    orange: "border-[#FF6A13]/40 hover:border-[#FF6A13]",
    yellow: "border-[#FFC906]/40 hover:border-[#FFC906]",
    racing: "border-[#DB0A40]/50 hover:border-[#FFC906]",
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={
        hoverLift
          ? {
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" },
            }
          : undefined
      }
      className={`
        relative overflow-hidden rounded-sm border bg-[#121829] shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-colors duration-200
        ${carbonTexture ? "carbon-pattern-subtle" : ""}
        ${borderStyles[accentBorder]}
        ${className}
      `.trim()}
    >
      {/* Top racing accent stripe when specified */}
      {accentBorder === "racing" && (
        <div className="absolute top-0 left-0 right-0 h-[3px] racing-stripe-accent z-10" />
      )}
      {accentBorder === "red" && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#DB0A40] z-10" />
      )}
      {accentBorder === "orange" && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FF6A13] z-10" />
      )}
      {accentBorder === "yellow" && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FFC906] z-10" />
      )}

      {children}
    </motion.div>
  );
};
