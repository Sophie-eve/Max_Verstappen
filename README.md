# 🏎️ Max Verstappen #1 — The Official Fan Grid

<div align="center">

![Max Verstappen #1 Logo](public/images/logo.png)

### **"Born to Race. Built to Win."**
An award-winning, production-ready tribute and digital headquarters dedicated to 4-time FIA Formula One World Champion **Max Verstappen** and the engineering dominance of **Oracle Red Bull Racing**.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[**Live Demo**](https://verstappen-fan.vercel.app) • [**Explore Features**](#-key-features) • [**Tech Stack**](#-tech-stack) • [**Getting Started**](#-getting-started) • [**Database Setup**](#-database-architecture-supabase)

---

</div>

## 📖 Introduction

**Max Verstappen #1 — The Fan Grid** is a high-performance web experience designed for motorsport enthusiasts, racing purists, and the global Max Army. Combining bleeding-edge WebGL graphics, tactile micro-interactions, live telemetry indicators, and authentic Formula 1 aesthetics, the application delivers a cinematic immersion into the career of the most dominant driver of modern Grand Prix racing.

Every pixel is precision-crafted around Oracle Red Bull Racing's livery: deep obsidian foundations (`#0A0E1A`), high-contrast carbon fibre surfaces (`#121829`), iconic Red Bull crimson (`#DB0A40`), Dutch national orange (`#FF6A13`), and championship gold (`#FFC906`).

---

## ⚡ Key Features

### 🌟 1. Full-Viewport Parallax Hero
- **Cinematic Visuals**: High-resolution podium portrait paired with Max's signature #1 car and chamfered motorsport badges.
- **Dynamic Parallax**: Layered depth scrolling with huge outlined `"VERSTAPPEN"` typography and glowing `#1` watermark.
- **F1 Shift Sequence**: Authentic starting-grid lights-out intro sequence with session memory and keyboard skip controls (`Esc`).

### 🌊 2. Global WebGL Fluid Grid (`MicroSlats`)
- **Living 3D Atmosphere**: Global WebGL canvas powered by `ogl` that reacts in real-time to mouse and pointer drag across the entire viewport.
- **Atmospheric Glows**: Volumetric radial lighting in Red Bull Racing crimson and championship yellow spanning across all pages.
- **Zero-Lag Performance**: SSR-safe dynamic rendering calibrated to run at 60 FPS while preserving full mobile responsiveness.

### 🏆 3. 4x World Championships Deep Dive
- Detailed season-by-season architectural analysis of the **2021, 2022, 2023, and 2024** FIA World Drivers' Championships.
- Race breakdown tabs covering defining moments (Abu Dhabi final lap, Spa wet masterclass, Brazil rain drive from P17), key telemetry records, and points dominance.

### 🎯 4. Racing Skills & Apex Telemetry
- Interactive telemetry pillars dissecting Max's superhuman car control:
  - **Knife-Edge Front-End Bite & Rotation**: Oversteer sensitivity with sub-140ms reaction times.
  - **Surgical Trail-Braking**: V-shaped racing lines and premature throttle application.
  - **Wet-Weather Cartography**: Inverse-camber line selection in torrential rainfall.
  - **Mental Bandwidth CPU**: Real-time pit window calculations and strategy dialogue with race engineer Gianpiero Lambiase ("GP").

### 🏁 5. 2026 Drivers' Championship Standings
- Real-time standings board featuring **26 Formula 1 drivers** with Max in P1 Championship Leader spotlight.
- Real-time fuzzy search by driver name, 3-letter timing code, country, and constructor filter.

### 📅 6. Interactive Career Timeline & Historic Records
- Chronological timeline tracking Max from Genk junior karting dominance to his Toro Rosso debut at 17 and four consecutive world titles.
- Category filters (`Karting`, `F1 Debut`, `First Win`, `Championship`, `Dominance`).
- Dedicated FIA records grid documenting the greatest single-season achievements in Formula 1 history.

### 🔧 7. The Garage & RB20 Machinery Spec
- Precision breakdown of the championship-winning **Oracle Red Bull Racing RB20**.
- Interactive hotspot inspection over the car covering the 1,000+ BHP Honda Hybrid V6 power unit, Venturi tunnel ground effect floor, drag reduction systems, and 18-inch Pirelli rubber.
- Spotlight on the masterminds behind the pit wall (Christian Horner, Adrian Newey, Gianpiero Lambiase, and Hannah Schmitz).

### 📝 8. The Pit Wall / Fan Zone (Working Supabase Backend)
- **Interactive Transmission Form**: Fan registration with driver moment voting and personal messages to Max.
- **Enterprise Validation**: Client-side feedback and server-side Zod validation with honeypot bot mitigation.
- **Confetti Celebration**: Celebratory motorsport confetti explosion on confirmed transmission.
- **Postgres Database**: Insert-only Row Level Security (RLS) policies protecting fan privacy.

### 🔐 9. Fan Grid Authentication & Callsigns
- Modal and dedicated page authentication.
- **1-Click VIP Demo Pass**: Instant access with customized fan callsign (`CHAMPION-01`) and tier badging.

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) | Server-side rendering, partial prefetching, optimized bundling |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type safety and predictable architecture |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Motorsport design tokens, custom chamfered angles, 8px grid |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | Parallax scrolling, layout transitions, number counters |
| **3D / WebGL** | [OGL](https://github.com/oframe/ogl) | High-performance interactive fluid simulation (`MicroSlats`) |
| **Backend / DB** | [Supabase](https://supabase.com/) (PostgreSQL) | Secure fan submission storage with Row Level Security |
| **Validation** | [Zod](https://zod.dev/) | End-to-end schema validation |
| **Icons** | [Lucide React](https://lucide.dev/) | Sharp, elevated motorsport icons with custom glow accents |
| **Confetti** | [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) | Race-win celebration particle burst |

---

## 📁 Project Architecture

```
ospc-web/
├── public/
│   └── images/               # Official assets (car, hero portrait, trophy, #1 lion logo)
├── src/
│   ├── app/
│   │   ├── api/subscribe/    # Serverless endpoint for fan submissions
│   │   ├── career/           # Career timeline, records & 2026 standings
│   │   ├── garage/           # RB20 specifications & factory team
│   │   ├── login/            # Dedicated fan grid authentication page
│   │   ├── pit-wall/         # Interactive fan zone registration form
│   │   ├── globals.css       # Tailwind theme, carbon fiber weave textures
│   │   ├── layout.tsx        # Root layout, fonts, global background & SEO
│   │   ├── page.tsx          # Homepage layout
│   │   ├── icon.png          # Max Verstappen #1 browser favicon
│   │   ├── robots.ts         # Automated search engine robots directives
│   │   └── sitemap.ts        # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── auth/             # LoginModal and VIP authentication dialog
│   │   ├── career/           # CareerCoverHero, CareerTimeline, MilestonesGrid
│   │   ├── garage/           # CarShowcase hotspots, TeamSection
│   │   ├── home/             # Hero, BioSection, ChampionshipShowcase, RacingSkills, Stats
│   │   ├── layout/           # Navbar, Footer, GlobalMotorsportBackground, LightsOutLoader
│   │   ├── pitwall/          # FanSignupForm with validation
│   │   ├── standings/        # DriversStandings with live filter
│   │   └── ui/               # Button, Card, SectionHeading, MicroSlats WebGL, StatCounter
│   ├── data/                 # Stats, career events, moments, car specs, 2026 standings
│   └── lib/                  # AuthContext, Supabase client, Zod schemas
└── supabase/
    └── schema.sql            # PostgreSQL table schema & RLS policies
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.17` or higher)
- [npm](https://www.npmjs.com/), `pnpm`, or `yarn`
- A free [Supabase](https://supabase.com/) account (optional, form works gracefully in mock mode if unconfigured)

### 1. Clone the Repository
```bash
git clone https://github.com/Sophie-eve/Max_Verstappen.git
cd Max_Verstappen
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy the example environment template:
```bash
cp .env.example .env.local
```

Fill in your Supabase credentials in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to experience the website.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 🗄️ Database Architecture (Supabase)

To enable persistent community sign-ups, run the following SQL script inside your [Supabase SQL Editor](https://app.supabase.com/):

```sql
-- Create the fan_signups table
CREATE TABLE IF NOT EXISTS fan_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  country TEXT NOT NULL,
  favourite_moment TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE fan_signups ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous inserts
CREATE POLICY "Public users can insert fan signups"
  ON fan_signups
  FOR INSERT
  WITH CHECK (true);

-- Restrict public read access (Admin dashboard only)
CREATE POLICY "Admins only read access"
  ON fan_signups
  FOR SELECT
  USING (auth.role() = 'service_role');
```

---

## 🚢 Deployment to Vercel

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Select your repository `Max_Verstappen`.
4. In the **Environment Variables** panel, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Click **Deploy**. Vercel will automatically build and distribute the app across global edge networks.

---

## ⚠️ Disclaimer

*This website is an unofficial fan tribute project created for educational and design showcase purposes. It is not affiliated with, sponsored by, or endorsed by Max Verstappen, Oracle Red Bull Racing, Honda Racing Corporation, or Formula One Licensing B.V. All trademarks, logos, and team names belong to their respective owners.*

---

<div align="center">

### 🏆 Created by **Shailja Singh**

*Crafted with precision, passion, and speed for the global Max Army.*

[![GitHub](https://img.shields.io/badge/GitHub-Sophie--eve-181717?style=flat-square&logo=github)](https://github.com/Sophie-eve)

</div>
