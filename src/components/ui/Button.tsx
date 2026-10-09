"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  icon,
  iconPosition = "right",
  ariaLabel,
}) => {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wider",
    md: "px-6 py-3 text-sm tracking-widest",
    lg: "px-8 py-4 text-base tracking-widest",
  };

  const variantStyles = {
    primary:
      "bg-[#DB0A40] text-white hover:bg-[#B00732] active:bg-[#8F0527] shadow-[0_4px_20px_rgba(219,10,64,0.35)] hover:shadow-[0_6px_25px_rgba(219,10,64,0.55)] border border-[#FF3366]/30",
    secondary:
      "bg-[#151D33] text-[#F5F7FA] hover:bg-[#1C2744] active:bg-[#121829] border border-white/10 hover:border-[#FFC906]/60 shadow-[0_4px_15px_rgba(0,0,0,0.4)]",
    accent:
      "bg-[#FFC906] text-[#0A0E1A] font-bold hover:bg-[#E5B500] active:bg-[#CC9F00] shadow-[0_4px_20px_rgba(255,201,6,0.35)]",
    ghost:
      "bg-transparent text-[#F5F7FA] hover:bg-white/5 active:bg-white/10 border border-transparent",
    outline:
      "bg-transparent text-[#F5F7FA] border border-[#DB0A40] hover:bg-[#DB0A40]/10 active:bg-[#DB0A40]/20",
  };

  const baseClasses = `
    inline-flex items-center justify-center font-display uppercase tracking-widest transition-all duration-200 select-none
    clip-beveled-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC906] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="mr-2 inline-flex items-center">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="ml-2 inline-flex items-center">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <motion.span
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center"
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={baseClasses}
      aria-label={ariaLabel}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};
