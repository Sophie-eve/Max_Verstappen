/**
 * Max Verstappen Official Career Statistics
 * 
 * IMPORTANT: Verify against formula1.com official driver stats:
 * https://www.formula1.com/en/drivers/max-verstappen.html
 * (Updated through the 2024 FIA Formula One World Championship)
 */

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  description: string;
  highlight?: boolean;
}

export const DRIVER_STATS: StatItem[] = [
  {
    id: "championships",
    label: "World Championships",
    value: 4,
    suffix: "x",
    description: "2021, 2022, 2023, 2024 Drivers' World Champion (Oracle Red Bull Racing)",
    highlight: true,
  },
  {
    id: "wins",
    label: "Race Victories",
    value: 63,
    suffix: "",
    description: "Youngest race winner in Formula 1 history (18y 228d at Barcelona 2016)",
    highlight: true,
  },
  {
    id: "poles",
    label: "Pole Positions",
    value: 40,
    suffix: "",
    description: "P1 qualifying starts across Monaco, Silverstone, Suzuka, Spa & Monza",
    highlight: false,
  },
  {
    id: "podiums",
    label: "Podium Finishes",
    value: 111,
    suffix: "",
    description: "Astonishing 53.6% career podium strike rate across 207 Grand Prix starts",
    highlight: false,
  },
  {
    id: "fastest_laps",
    label: "Fastest Laps",
    value: 34,
    suffix: "",
    description: "Purple sector speed in race trim, including 17 consecutive fastest laps at wet Brazil",
    highlight: false,
  },
  {
    id: "laps_led",
    label: "Laps Led in 2023",
    value: 1003,
    suffix: "",
    description: "The only driver in F1's 74-year history to lead over 1,000 racing laps in a single year",
    highlight: true,
  },
  {
    id: "grand_chelems",
    label: "Grand Chelems",
    value: 5,
    suffix: "x",
    description: "Ultimate perfection: Pole Position, Race Win, Fastest Lap & Led Every Single Lap",
    highlight: false,
  },
  {
    id: "career_points",
    label: "Career Points",
    value: 3014,
    suffix: "+",
    description: "Surpassed 3,000 championship points threshold at the 2024 Las Vegas Grand Prix",
    highlight: false,
  },
];

export const HERO_HIGHLIGHTS = {
  driverNumber: "1",
  racingNumber: "33",
  nationality: "Dutch",
  birthDate: "September 30, 1997",
  birthPlace: "Hasselt, Belgium",
  team: "Oracle Red Bull Racing",
  carNumber: "1",
  f1Debut: "2015 Australian GP (Scuderia Toro Rosso)",
  firstWin: "2016 Spanish GP (Red Bull Racing)",
  totalStarts: 207,
  winPercentage2023: "86.4%",
  consecutiveWinsRecord: 10,
  podiums2023Record: 21,
};
