import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { LightsOutLoader } from "@/components/layout/LightsOutLoader";
import { AuthProvider } from "@/lib/auth-context";
import { LoginModal } from "@/components/auth/LoginModal";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0E1A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Max Verstappen #1 | 4x FIA Formula One World Champion",
  description:
    "Official tribute and fan headquarters for 4-time FIA Formula One World Champion Max Verstappen. Career timeline, Oracle Red Bull Racing RB20 garage telemetry, race records, and fan grid registration.",
  keywords: [
    "Max Verstappen",
    "Formula 1",
    "Red Bull Racing",
    "RB20",
    "World Champion",
    "F1 Driver",
    "Max Army",
    "Motorsport",
  ],
  authors: [{ name: "Verstappen Fan Collective" }],
  openGraph: {
    title: "Max Verstappen #1 | 4x Formula One World Champion",
    description:
      "Born to Race. Built to Win. Explore Max Verstappen's championship trajectory, RB20 machine specs, and join the global fan grid.",
    url: "https://verstappen-fan.vercel.app",
    siteName: "Max Verstappen Fan Grid",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Verstappen #1 | Formula One World Champion",
    description:
      "Born to Race. Built to Win. Dedicated tribute to 4-time World Champion Max Verstappen.",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { GlobalMotorsportBackground } from "@/components/layout/GlobalMotorsportBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-[#0A0E1A] text-[#F5F7FA] font-sans antialiased min-h-screen flex flex-col selection:bg-[#DB0A40] selection:text-white relative">
        <AuthProvider>
          {/* Accessible skip link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#FFC906] text-[#0A0E1A] font-bold font-sans rounded shadow-lg"
          >
            Skip to main content
          </a>

          {/* Global Living Motorsport Ambient Background (MicroSlats WebGL, Glows & Carbon Texture) */}
          <GlobalMotorsportBackground />

          {/* F1 Lights Out intro loader (session-based) */}
          <LightsOutLoader />

          {/* Global Fan Login Modal */}
          <LoginModal />

          {/* Top Scroll Indicator */}
          <ScrollProgress />

          {/* Sticky Glass Navbar */}
          <Navbar />

          {/* Main Content landmark */}
          <main id="main-content" className="flex-1 focus:outline-none relative">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
