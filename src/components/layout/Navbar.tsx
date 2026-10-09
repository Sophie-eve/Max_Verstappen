"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ChevronRight, Flag, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth-context";

interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Career", href: "/career", badge: "4x Champion" },
  { name: "Garage", href: "/garage", badge: "RB20" },
  { name: "Pit Wall", href: "/pit-wall", badge: "Fan Zone" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { user, isLoggedIn, openLoginModal } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0E1A]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.7)] py-3"
          : "bg-gradient-to-b from-[#0A0E1A]/95 via-[#0A0E1A]/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC906]"
            aria-label="Max Verstappen Home"
          >
            {/* Official Max Verstappen #1 Lion Insignia */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-sm overflow-hidden border border-white/20 bg-black group-hover:border-[#FFC906] transition-all duration-300 shadow-[0_0_15px_rgba(219,10,64,0.4)] group-hover:shadow-[0_0_20px_rgba(255,201,6,0.5)] flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Max Verstappen #1 Lion Logo"
                fill
                priority
                className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl tracking-wider uppercase text-[#F5F7FA] group-hover:text-[#FFC906] transition-colors leading-none">
                VERSTAPPEN
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#8F9CAE] group-hover:text-[#F5F7FA] transition-colors mt-0.5">
                Oracle Red Bull Racing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 font-display uppercase tracking-widest text-sm transition-all duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC906] ${
                    isActive
                      ? "text-white font-bold"
                      : "text-[#8F9CAE] hover:text-[#F5F7FA] hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {item.name}
                    {item.badge && (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#DB0A40]/30 border border-[#DB0A40]/50 text-[#FFC906] rounded-xs">
                        {item.badge}
                      </span>
                    )}
                  </span>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] racing-stripe-accent"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* User Login / Profile status */}
            {isLoggedIn && user ? (
              <Link
                href="/login"
                className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#151D33] border border-[#FFC906]/40 text-xs font-mono text-[#F5F7FA] hover:border-[#FFC906] transition-colors"
                title="View Fan Credentials"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="truncate max-w-[120px]">{user.name}</span>
                <span className="text-[10px] text-[#FFC906] bg-black/40 px-1 py-0.2 rounded">
                  {user.callsign}
                </span>
              </Link>
            ) : (
              <button
                type="button"
                onClick={openLoginModal}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#121829]/90 border border-white/15 text-xs font-mono uppercase text-[#F5F7FA] hover:text-[#FFC906] hover:border-[#FFC906]/50 transition-all cursor-pointer shadow-sm group"
              >
                <span className="p-0.5 rounded-xs bg-[#FFC906]/15 border border-[#FFC906]/30 text-[#FFC906] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UserIcon className="w-3.5 h-3.5" strokeWidth={2.2} />
                </span>
                <span>Fan Sign In</span>
              </button>
            )}

            <div className="hidden sm:block">
              <Button
                href="/pit-wall"
                variant="primary"
                size="sm"
                icon={<Flag className="w-4 h-4" />}
                iconPosition="left"
              >
                Join The Grid
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-sm text-[#F5F7FA] hover:text-[#FFC906] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC906]"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-white/10 bg-[#0A0E1A]/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-sm font-display uppercase tracking-widest text-base transition-colors ${
                      isActive
                        ? "bg-[#151D33] text-white border-l-4 border-[#DB0A40]"
                        : "text-[#8F9CAE] hover:text-white hover:bg-white/5"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="flex items-center gap-2">
                      {item.name}
                      {item.badge && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#DB0A40]/30 text-[#FFC906] rounded-xs border border-[#DB0A40]/40">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#8F9CAE]" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 space-y-3">
                {isLoggedIn && user ? (
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 rounded-sm bg-[#151D33] border border-[#FFC906]/40 text-xs font-mono text-white"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>{user.name} ({user.callsign})</span>
                    </span>
                    <span className="text-[#FFC906]">View Profile</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      openLoginModal();
                    }}
                    className="w-full py-2.5 px-4 rounded-sm bg-[#151D33] border border-white/15 text-xs font-mono uppercase text-white flex items-center justify-center gap-2"
                  >
                    <UserIcon className="w-4 h-4 text-[#FFC906]" />
                    <span>Fan Sign In / Register</span>
                  </button>
                )}

                <Button
                  href="/pit-wall"
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={<Flag className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Join The Grid
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
