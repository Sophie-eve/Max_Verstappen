"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Lock,
  User,
  Flag,
  ShieldCheck,
  Zap,
  CheckCircle2,
  LogOut,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function LoginPage() {
  const router = useRouter();
  const { user, isLoggedIn, login, logout } = useAuth();
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [callsign, setCallsign] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    login(email, fullName || "Max Army Member", callsign || "VER-01");
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

  const handleQuickDemo = () => {
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
    <div className="relative pt-32 pb-24 min-h-[85vh] flex items-center justify-center px-4">
      {/* Background carbon texture */}
      <div className="absolute inset-0 carbon-pattern-subtle opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-md">
        {isLoggedIn && user ? (
          /* LOGGED IN USER PROFILE CARD */
          <Card accentBorder="racing" className="p-8 bg-[#121829] shadow-2xl text-center space-y-6">
            <div className="relative w-20 h-20 mx-auto rounded-sm overflow-hidden border-2 border-[#FFC906]/60 bg-black shadow-[0_0_25px_rgba(255,201,6,0.4)]">
              <Image
                src="/images/logo.png"
                alt="Max Verstappen #1 Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFC906] px-3 py-1 rounded bg-[#FFC906]/10 border border-[#FFC906]/30">
                {user.tier}
              </span>
              <h2 className="text-3xl font-display uppercase tracking-wide text-white mt-3">
                {user.name}
              </h2>
              <p className="text-xs font-mono text-[#8F9CAE] mt-1">{user.email}</p>
              <p className="text-xs font-mono text-[#FF6A13] mt-0.5">
                CALLSIGN: {user.callsign} • GRID BADGE ACTIVE
              </p>
            </div>

            <div className="p-4 rounded-sm bg-[#151D33] border border-white/10 text-xs font-mono text-emerald-400 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>AUTHENTICATED ON THE PIT WALL RADIO</span>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <Button href="/pit-wall" variant="primary" size="md">
                Transmit Fan Message
              </Button>
              <Button
                onClick={logout}
                variant="secondary"
                size="md"
                icon={<LogOut className="w-4 h-4" />}
                iconPosition="left"
              >
                Sign Out
              </Button>
            </div>
          </Card>
        ) : (
          /* SIGN IN / REGISTRATION CARD */
          <Card accentBorder="racing" className="p-8 bg-[#121829] shadow-2xl">
            <div className="text-center mb-6">
              <div className="relative w-16 h-16 mx-auto mb-3 rounded-sm overflow-hidden border border-white/20 bg-black shadow-[0_0_25px_rgba(219,10,64,0.4)]">
                <Image
                  src="/images/logo.png"
                  alt="Max Verstappen #1 Logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#DB0A40]/20 text-[#FFC906] font-mono text-[11px] uppercase tracking-wider mb-2">
                <Flag className="w-3.5 h-3.5 text-[#DB0A40]" /> MAX ARMY AUTHENTICATION
              </div>
              <h1 className="text-3xl sm:text-4xl font-display uppercase tracking-wide text-white">
                {isRegisterMode ? "REGISTER GRID PASS" : "FAN SIGN IN"}
              </h1>
              <p className="text-xs text-[#8F9CAE] mt-1 font-sans">
                {isRegisterMode
                  ? "Claim your official credential in the Max Army archive."
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
                        placeholder="Shailja Singh"
                        className="w-full pl-9 pr-3 py-2.5 bg-[#151D33] border border-white/10 rounded-sm text-xs text-white placeholder-[#8F9CAE]/50 focus:border-[#FFC906] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F7FA] mb-1">
                      Fan Callsign
                    </label>
                    <input
                      type="text"
                      value={callsign}
                      onChange={(e) => setCallsign(e.target.value)}
                      placeholder="VER-01"
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

            {/* Quick 1-Click VIP Demo */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleQuickDemo}
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
                  ? "Already registered? Sign In"
                  : "Need a grid credential? Create Account"}
              </button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
