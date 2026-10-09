"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const NewsletterStrip: React.FC = () => {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          hp_website: honeypot,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(
          data.message || "Welcome to the grid! You're tuned in to the pit wall radio."
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(
          data.error ||
            (data.details && data.details[0]) ||
            "Unable to subscribe. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setMessage("Pit wall telemetry error. Please verify your connection.");
    }
  };

  return (
    <section
      id="newsletter-strip"
      className="relative py-16 bg-[#0E1424]/80 backdrop-blur-[2px] border-y border-white/10 overflow-hidden"
      aria-label="Fan Newsletter Subscription"
    >
      {/* Background carbon styling */}
      <div className="absolute inset-0 carbon-pattern-subtle opacity-40 pointer-events-none" />

      {/* Decorative top racing line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] racing-stripe-accent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Headline & description */}
          <div className="lg:col-span-6 space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FFC906]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DB0A40]" />
              <span>PIT WALL DIRECT COMM // NEWSLETTER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-white">
              STAY ON THE FRONT ROW
            </h2>
            <p className="text-sm sm:text-base text-[#8F9CAE] font-sans">
              Receive race weekend debriefs, exclusive championship wallpaper drops, and pit wall updates directly to your inbox.
            </p>
          </div>

          {/* Form input and submission */}
          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
              {/* Honeypot field - visually hidden */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="hp_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FFC906]/70">
                    <Mail className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status !== "idle") setStatus("idle");
                    }}
                    placeholder="Enter your email (e.g. max@grid.com)"
                    className="w-full pl-11 pr-4 py-3 bg-[#151D33] border border-white/15 rounded-sm text-sm text-white placeholder-[#8F9CAE]/60 focus-visible:outline-none focus-visible:border-[#FFC906] focus-visible:ring-1 focus-visible:ring-[#FFC906] transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto shrink-0"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Transmitting...
                    </span>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </Button>
              </div>

              {/* Status Announcements with aria-live */}
              <div aria-live="polite" className="min-h-[1.5rem]">
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>{message}</span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-xs font-mono text-[#DB0A40] bg-[#DB0A40]/10 border border-[#DB0A40]/30 px-3 py-1.5 rounded-sm"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-[#DB0A40]" />
                      <span>{message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between text-xs text-[#8F9CAE]">
                <span>No spam. One-click unsubscribe anytime.</span>
                <Link
                  href="/pit-wall"
                  className="text-[#FFC906] hover:underline inline-flex items-center gap-1 font-mono"
                >
                  Full Fan Registration <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
