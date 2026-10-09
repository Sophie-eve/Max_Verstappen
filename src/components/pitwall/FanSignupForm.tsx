"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { COUNTRIES } from "@/data/countries";
import { MAX_MOMENTS } from "@/data/moments";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  User,
  Mail,
  Globe,
  Trophy,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Flag,
  Sparkles,
  RotateCcw,
} from "lucide-react";

interface FormErrors {
  fullName?: string;
  email?: string;
  country?: string;
  favouriteMoment?: string;
  message?: string;
  consent?: string;
}

export const FanSignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    favouriteMoment: "",
    message: "",
    consent: false,
    hp_website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [submittedName, setSubmittedName] = useState<string>("");

  const triggerCelebration = () => {
    // Fire motorsport celebratory confetti (Dutch Orange, Red Bull Red, Gold)
    const colors = ["#FF6A13", "#DB0A40", "#FFC906", "#FFFFFF"];

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors,
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
        });
      }, 250);
    } catch {
      // safe fallback if confetti is unavailable
    }
  };

  const validateClient = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Full name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.country) {
      errs.country = "Please select your country.";
    }

    if (!formData.favouriteMoment) {
      errs.favouriteMoment = "Please choose your favourite Max moment.";
    }

    if (!formData.consent) {
      errs.consent = "You must agree to join the fan grid updates.";
    }

    if (formData.message && formData.message.length > 600) {
      errs.message = "Message cannot exceed 600 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateClient()) {
      setStatus("error");
      setStatusMessage("Please resolve the highlighted telemetry errors.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setSubmittedName(formData.fullName || "Fan");
        setStatusMessage(data.message || `Welcome to the grid, ${formData.fullName}!`);
        triggerCelebration();
      } else {
        setStatus("error");
        setStatusMessage(
          data.error ||
            (data.details && data.details.join(", ")) ||
            "Failed to submit telemetry. Please verify your data."
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network transmission error. Please check your connection.");
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      country: "",
      favouriteMoment: "",
      message: "",
      consent: false,
      hp_website: "",
    });
    setErrors({});
    setStatus("idle");
    setStatusMessage("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card
        accentBorder="racing"
        className="p-6 sm:p-10 bg-[#121829] shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        <AnimatePresence mode="wait">
          {status === "success" ? (
            /* CELEBRATORY SUCCESS STATE */
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="py-8 text-center space-y-6"
            >
              {/* Champion Badge */}
              <div className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-tr from-[#DB0A40] via-[#FF6A13] to-[#FFC906] p-1 flex items-center justify-center shadow-[0_0_40px_rgba(255,106,19,0.5)]">
                <div className="w-full h-full rounded-full bg-[#0A0E1A] flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-[#FFC906] animate-pulse" />
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FFC906] px-3 py-1 rounded bg-[#FFC906]/10 border border-[#FFC906]/30">
                  GRID POSITION CONFIRMED // #1
                </span>
                <h3 className="text-3xl sm:text-5xl font-display uppercase tracking-tight text-white">
                  WELCOME TO THE GRID,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0A40] via-[#FF6A13] to-[#FFC906]">
                    {submittedName}!
                  </span>
                </h3>
                <p className="text-base text-[#8F9CAE] max-w-lg mx-auto font-sans leading-relaxed">
                  Your fan credentials have been logged in the official telemetry database. You are now officially cleared on the pit wall radio for championship updates!
                </p>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-sm bg-[#151D33] border border-white/10 max-w-md mx-auto text-xs font-mono text-emerald-400 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{statusMessage}</span>
              </div>

              {/* Action: Register another fan */}
              <div className="pt-4 flex justify-center">
                <Button
                  onClick={handleReset}
                  variant="secondary"
                  size="md"
                  icon={<RotateCcw className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Register Another Fan
                </Button>
              </div>
            </motion.div>
          ) : (
            /* ACTIVE FORM STATE */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Form Title & Telemetry Header */}
              <div className="border-b border-white/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFC906] mb-1">
                    <Flag className="w-3.5 h-3.5 text-[#DB0A40]" />
                    <span>PIT WALL TELEMETRY // FAN ZONE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white">
                    JOIN THE MAX ARMY
                  </h3>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-xs font-mono text-[#8F9CAE]">STATUS: READY</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 inline-block ml-2 animate-pulse" />
                </div>
              </div>

              {/* Top Alert for General Errors */}
              <div aria-live="polite">
                {status === "error" && statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-sm bg-[#DB0A40]/15 border border-[#DB0A40]/40 text-[#F5F7FA] text-xs font-mono flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-[#DB0A40] shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}
              </div>

              {/* Honeypot field (hidden from view and screen readers) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_website">Website</label>
                <input
                  id="hp_website"
                  type="text"
                  name="hp_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.hp_website}
                  onChange={(e) =>
                    setFormData({ ...formData, hp_website: e.target.value })
                  }
                />
              </div>

              {/* Two Column Grid for Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1. Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-mono uppercase tracking-wider text-[#F5F7FA]"
                  >
                    Full Name <span className="text-[#DB0A40]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FFC906]/70">
                      <User className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="Max Verstappen"
                      className={`w-full pl-10 pr-4 py-3 bg-[#151D33] border rounded-sm text-sm text-white placeholder-[#8F9CAE]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC906] ${
                        errors.fullName ? "border-[#DB0A40]" : "border-white/10 hover:border-white/20"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p id="fullName-error" className="text-xs font-mono text-[#DB0A40] mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* 2. Email Address */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-[#F5F7FA]"
                  >
                    Email Address <span className="text-[#DB0A40]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FFC906]/70">
                      <Mail className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="driver1@redbullracing.com"
                      className={`w-full pl-10 pr-4 py-3 bg-[#151D33] border rounded-sm text-sm text-white placeholder-[#8F9CAE]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC906] ${
                        errors.email ? "border-[#DB0A40]" : "border-white/10 hover:border-white/20"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="text-xs font-mono text-[#DB0A40] mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Two Column Grid for Country and Favourite Moment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 3. Country Dropdown */}
                <div className="space-y-2">
                  <label
                    htmlFor="country"
                    className="block text-xs font-mono uppercase tracking-wider text-[#F5F7FA]"
                  >
                    Country / Region <span className="text-[#DB0A40]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FFC906]/70">
                      <Globe className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                    <select
                      id="country"
                      name="country"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.country}
                      aria-describedby={errors.country ? "country-error" : undefined}
                      value={formData.country}
                      onChange={(e) => {
                        setFormData({ ...formData, country: e.target.value });
                        if (errors.country) setErrors({ ...errors, country: undefined });
                      }}
                      className={`w-full pl-10 pr-4 py-3 bg-[#151D33] border rounded-sm text-sm text-white appearance-none cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC906] ${
                        errors.country ? "border-[#DB0A40]" : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <option value="" disabled className="bg-[#121829] text-[#8F9CAE]">
                        Select your home country
                      </option>
                      {COUNTRIES.map((c) => (
                        <option key={c.code} value={c.name} className="bg-[#121829] text-white">
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.country && (
                    <p id="country-error" className="text-xs font-mono text-[#DB0A40] mt-1">
                      {errors.country}
                    </p>
                  )}
                </div>

                {/* 4. Favourite Max Moment */}
                <div className="space-y-2">
                  <label
                    htmlFor="favouriteMoment"
                    className="block text-xs font-mono uppercase tracking-wider text-[#F5F7FA]"
                  >
                    Favourite Max Moment <span className="text-[#DB0A40]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FFC906]/70">
                      <Trophy className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                    <select
                      id="favouriteMoment"
                      name="favouriteMoment"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.favouriteMoment}
                      aria-describedby={errors.favouriteMoment ? "favouriteMoment-error" : undefined}
                      value={formData.favouriteMoment}
                      onChange={(e) => {
                        setFormData({ ...formData, favouriteMoment: e.target.value });
                        if (errors.favouriteMoment)
                          setErrors({ ...errors, favouriteMoment: undefined });
                      }}
                      className={`w-full pl-10 pr-4 py-3 bg-[#151D33] border rounded-sm text-sm text-white appearance-none cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC906] ${
                        errors.favouriteMoment
                          ? "border-[#DB0A40]"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <option value="" disabled className="bg-[#121829] text-[#8F9CAE]">
                        Choose your defining moment
                      </option>
                      {MAX_MOMENTS.map((m) => (
                        <option key={m.id} value={m.title} className="bg-[#121829] text-white">
                          {m.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.favouriteMoment && (
                    <p id="favouriteMoment-error" className="text-xs font-mono text-[#DB0A40] mt-1">
                      {errors.favouriteMoment}
                    </p>
                  )}
                </div>
              </div>

              {/* 5. Optional Message to Max */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#F5F7FA]"
                  >
                    Message to Max <span className="text-[#8F9CAE]">(Optional)</span>
                  </label>
                  <span className="text-[11px] font-mono text-[#8F9CAE]">
                    {formData.message.length} / 600
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#8F9CAE]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={600}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Share your encouragement, favourite radio quote, or message for the 4-time champion..."
                    className="w-full pl-10 pr-4 py-3 bg-[#151D33] border border-white/10 rounded-sm text-sm text-white placeholder-[#8F9CAE]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC906] resize-none"
                  />
                </div>
              </div>

              {/* 6. Consent Checkbox */}
              <div className="space-y-2 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    aria-required="true"
                    checked={formData.consent}
                    onChange={(e) => {
                      setFormData({ ...formData, consent: e.target.checked });
                      if (errors.consent) setErrors({ ...errors, consent: undefined });
                    }}
                    className="mt-1 h-4 w-4 rounded-xs border-white/20 bg-[#151D33] text-[#DB0A40] focus:ring-[#FFC906] accent-[#DB0A40] cursor-pointer"
                  />
                  <span className="text-xs text-[#8F9CAE] font-sans group-hover:text-[#F5F7FA] transition-colors leading-relaxed">
                    I agree to receive fan club bulletins, race debriefs, and understand my email will be securely stored in accordance with the fan privacy policy.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs font-mono text-[#DB0A40] pl-7">
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full"
                  icon={
                    status === "loading" ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Flag className="w-5 h-5" />
                    )
                  }
                  iconPosition="left"
                >
                  {status === "loading"
                    ? "LOCKING IN TELEMETRY..."
                    : "SUBMIT FAN TELEMETRY // JOIN GRID"}
                </Button>
              </div>
            </form>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
};
