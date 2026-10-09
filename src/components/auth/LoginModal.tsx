"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/lib/auth-context";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  X,
  Mail,
  Lock,
  User,
  Flag,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";

export const LoginModal: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal, login } = useAuth();
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [callsign, setCallsign] = useState("");
  const [error, setError] = useState("");

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    login(email, fullName || "Max Army Member", callsign || "VER-01");
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.5 },
        colors: ["#DB0A40", "#FF6A13", "#FFC906"],
      });
    } catch {
      // ignore
    }
  };

  const handleQuickDemoLogin = () => {
    login("shailja@maxarmy.com", "Shailja Singh", "CHAMPION-01");
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.5 },
        colors: ["#DB0A40", "#FF6A13", "#FFC906"],
      });
    } catch {
      // ignore
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-md"
        >
          <Card
            accentBorder="racing"
            className="p-6 sm:p-8 bg-[#121829] shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLoginModal}
              className="absolute top-4 right-4 p-2 text-[#8F9CAE] hover:text-white rounded-sm hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close Login Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="relative w-14 h-14 mx-auto mb-3 rounded-sm overflow-hidden border border-white/20 bg-black shadow-[0_0_20px_rgba(219,10,64,0.4)]">
                <Image
                  src="/images/logo.png"
                  alt="Max Verstappen #1 Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#DB0A40]/20 text-[#FFC906] font-mono text-[11px] uppercase tracking-wider mb-2">
                <Flag className="w-3.5 h-3.5 text-[#DB0A40]" strokeWidth={2.2} /> MAX ARMY AUTHENTICATION
              </div>
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white">
                {isRegisterMode ? "REGISTER GRID PASS" : "FAN SIGN IN"}
              </h3>
              <p className="text-xs text-[#8F9CAE] mt-1 font-sans">
                {isRegisterMode
                  ? "Create your official credential for telemetry updates."
                  : "Sign in with your fan credentials to access VIP benefits."}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-sm bg-[#DB0A40]/15 border border-[#DB0A40]/40 text-[#F5F7FA] text-xs font-mono">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegisterMode && (
                <>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F7FA] mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#FFC906]/70">
                        <User className="w-4 h-4" strokeWidth={2.2} />
                      </div>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Max Fan"
                        className="w-full pl-9 pr-3 py-2.5 bg-[#151D33] border border-white/10 rounded-sm text-xs text-white placeholder-[#8F9CAE]/50 focus:border-[#FFC906] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F7FA] mb-1">
                      Fan Callsign (e.g. VER-33)
                    </label>
                    <input
                      type="text"
                      value={callsign}
                      onChange={(e) => setCallsign(e.target.value)}
                      placeholder="VER-33"
                      className="w-full px-3 py-2.5 bg-[#151D33] border border-white/10 rounded-sm text-xs text-white placeholder-[#8F9CAE]/50 focus:border-[#FFC906] focus:outline-none uppercase"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F7FA] mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#FFC906]/70">
                    <Mail className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="fan@maxarmy.com"
                    className="w-full pl-9 pr-3 py-2.5 bg-[#151D33] border border-white/10 rounded-sm text-xs text-white placeholder-[#8F9CAE]/50 focus:border-[#FFC906] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F7FA] mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#FFC906]/70">
                    <Lock className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 bg-[#151D33] border border-white/10 rounded-sm text-xs text-white placeholder-[#8F9CAE]/50 focus:border-[#FFC906] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={<ShieldCheck className="w-4 h-4" />}
                  iconPosition="right"
                >
                  {isRegisterMode ? "COMPLETE REGISTRATION" : "AUTHENTICATE"}
                </Button>
              </div>
            </form>

            {/* Quick 1-Click Demo Login */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleQuickDemoLogin}
                className="w-full py-2.5 px-3 bg-[#151D33] hover:bg-[#1C2744] border border-[#FFC906]/40 hover:border-[#FFC906] rounded-sm text-xs font-mono text-[#FFC906] flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Zap className="w-3.5 h-3.5 text-[#DB0A40]" />
                <span>1-Click VIP Fan Sign-In</span>
              </button>
            </div>

            {/* Toggle Switch */}
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsRegisterMode(!isRegisterMode);
                  setError("");
                }}
                className="text-xs font-mono text-[#8F9CAE] hover:text-[#FFC906] transition-colors cursor-pointer"
              >
                {isRegisterMode
                  ? "Already have credentials? Sign In"
                  : "Need a grid credential? Create Account"}
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
