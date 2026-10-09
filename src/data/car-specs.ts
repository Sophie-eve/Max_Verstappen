export interface CarSpec {
  id: string;
  name: string;
  category: "power" | "speed" | "aero" | "tyres" | "chassis" | "transmission";
  value: string;
  subvalue?: string;
  badge: string;
  description: string;
  technicalDetails: {
    label: string;
    value: string;
  }[];
}

export const CAR_SPECS: CarSpec[] = [
  {
    id: "power-unit",
    name: "Honda RBPTH002 Power Unit",
    category: "power",
    value: "1,000+ BHP",
    subvalue: "1.6L V6 Turbo Hybrid @ 15,000 RPM",
    badge: "Hybrid V6",
    description: "State-of-the-art hybrid propulsion combining an internal combustion engine with MGU-K (kinetic) and MGU-H (heat) energy recovery systems delivering 160+ electric bhp on instant deployment.",
    technicalDetails: [
      { label: "Displacement", value: "1,600 cc" },
      { label: "Configuration", value: "90° V6 turbocharged" },
      { label: "Max RPM", value: "15,000 RPM" },
      { label: "MGU-K Output", value: "120 kW (161 hp)" },
      { label: "Fuel Flow Limit", value: "100 kg/hr max" },
    ],
  },
  {
    id: "top-speed",
    name: "Terminal Velocity & Acceleration",
    category: "speed",
    value: "352+ KM/H",
    subvalue: "0-100 km/h in 2.1s | 0-200 km/h in 4.3s",
    badge: "Speed & G-Force",
    description: "Explosive straight-line velocity paired with aggressive lateral cornering ability reaching up to 5.5 lateral G-force through high-speed turns like Copse and Pouhon.",
    technicalDetails: [
      { label: "0-100 km/h", value: "2.1 seconds" },
      { label: "0-200 km/h", value: "4.3 seconds" },
      { label: "Top Speed (DRS)", value: "352 km/h (218 mph)" },
      { label: "Max Braking Force", value: "Up to 6.0 G" },
      { label: "100-0 km/h Braking", value: "15 meters" },
    ],
  },
  {
    id: "downforce",
    name: "Ground Effect & Aero Architecture",
    category: "aero",
    value: "2,500+ KG",
    subvalue: "Aerodynamic Load at 250 km/h",
    badge: "Ground Effect",
    description: "Twin 3D Venturi floor tunnels suck the chassis directly to the asphalt using the Bernoulli effect, preserving stability in high-speed sweeps while minimizing dirty wake turbulence.",
    technicalDetails: [
      { label: "Floor Concept", value: "Twin Underfloor Venturi Tunnels" },
      { label: "DRS Opening", value: "85 mm rear flap slot" },
      { label: "Front Wing", value: "4-element active carbon assembly" },
      { label: "Sidepod Concept", value: "Aggressive overbite undercut" },
      { label: "Diffuser Exit", value: "Carbon venturi expansion" },
    ],
  },
  {
    id: "tyres",
    name: "Pirelli 18-Inch Low Profile Compounds",
    category: "tyres",
    value: "100°C - 110°C",
    subvalue: "Optimum Thermal Window",
    badge: "Pirelli P-Zero",
    description: "Spec 18-inch low-profile rims equipped with magnesium forged BBS wheels, engineered for minimal sidewall deflection and precise front-axle bite preferred by Max.",
    technicalDetails: [
      { label: "Rim Diameter", value: "18 inches BBS forged magnesium" },
      { label: "Front Width", value: "305 mm" },
      { label: "Rear Width", value: "405 mm" },
      { label: "Compounds", value: "C1 (Hard) to C5 (Soft)" },
      { label: "Wet Compounds", value: "Intermediate & Full Wet" },
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  callsign?: string;
  quote: string;
  bio: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Gianpiero Lambiase",
    role: "Head of Race Engineering / Max's Race Engineer",
    callsign: "\"GP\"",
    quote: "\"Max, please use your head a bit more... Simply lovely, mate.\"",
    bio: "The calm, authoritative voice in Max's radio earpiece since 2016. Their honest, brotherly banter and mutual tactical trust have formed the bedrock of 60+ Grand Prix victories.",
  },
  {
    name: "Christian Horner CBE",
    role: "Team Principal & CEO",
    callsign: "\"The Boss\"",
    quote: "\"Max is the most naturally gifted driver I have ever had the privilege to work with.\"",
    bio: "Leading Red Bull Racing since its debut in 2005. Guided the Milton Keynes squad through consecutive championship eras with uncompromising championship ambition.",
  },
  {
    name: "Adrian Newey OBE",
    role: "Chief Technical Officer (Design Legend)",
    callsign: "\"The Aero Wizard\"",
    quote: "\"Max has this rare ability to drive right on the absolute adhesion limit of the front tyre.\"",
    bio: "The most successful designer in Formula 1 history with over 200 GP wins. The architect behind the aerodynamic masterpieces of the RB16B, RB18, RB19, and RB20.",
  },
  {
    name: "The Oracle Red Bull Pit Crew",
    role: "World Record Pit Stop Champions",
    callsign: "\"1.82s Record\"",
    quote: "\"Sub-two-second precision under maximum championship pressure.\"",
    bio: "The benchmark pit stop crew in global motorsport, consistently winning the DHL Fastest Pit Stop Award and clocking stationary times routinely below 2.0 seconds.",
  },
];
