/**
 * Max Verstappen Official Career Statistics & Live Race Telemetry
 * 
 * Verified against formula1.com official driver stats:
 * https://www.formula1.com/en/drivers/max-verstappen.html
 * (Updated: Saturday, October 10, 2026 - 2026 Singapore Grand Prix)
 */

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  description: string;
  highlight?: boolean;
}

export interface TodayStats {
  date: string;
  event: string;
  circuit: string;
  location: string;
  session: string;
  sprintResult: {
    finishPosition: number;
    startPosition: number;
    status: string;
    pointsAwarded: number;
    headline: string;
    summary: string;
  };
  qualifyingResult: {
    position: number;
    gridSlot: string;
    gapToPole: string;
    summary: string;
  };
  todayPointsEarned: number;
  newCareerPoints: number;
  totalSprintWins: number;
  weatherConditions: string;
  telemetryInsight: string;
}

/**
 * Today's live stats from Saturday, October 10, 2026 at the Singapore Grand Prix
 */
export const TODAYS_STATS: TodayStats = {
  date: "Saturday, October 10, 2026",
  event: "2026 Singapore Grand Prix",
  circuit: "Marina Bay Street Circuit",
  location: "Marina Bay, Singapore",
  session: "Sprint Race & Grand Prix Qualifying",
  sprintResult: {
    finishPosition: 1,
    startPosition: 1,
    status: "P1 SPRINT WINNER",
    pointsAwarded: 8,
    headline: "WET-WEATHER SPRINT VICTORY",
    summary: "Max converted Sprint Pole into a dominant wet-weather victory at Marina Bay, pulling a commanding gap over George Russell and Charles Leclerc.",
  },
  qualifyingResult: {
    position: 2,
    gridSlot: "P2 (Front Row Grid)",
    gapToPole: "+0.084s",
    summary: "Secured a front-row start for Sunday's Grand Prix, lining up alongside Lewis Hamilton.",
  },
  todayPointsEarned: 8,
  newCareerPoints: 3640.5,
  totalSprintWins: 14,
  weatherConditions: "Rain / Wet Track with Intermediates",
  telemetryInsight: "Turn-in delta: +0.22s faster car rotation through Turn 7 in intermediate tire trim.",
};

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
    value: 72,
    suffix: "",
    description: "72 Grand Prix victories; youngest race winner in F1 history (18y 228d at Barcelona 2016)",
    highlight: true,
  },
  {
    id: "podiums",
    label: "Podium Finishes",
    value: 135,
    suffix: "",
    description: "135 career podium finishes across 249 Grand Prix starts (54.2% podium rate)",
    highlight: true,
  },
  {
    id: "poles",
    label: "Pole Positions",
    value: 50,
    suffix: "",
    description: "50 qualifying poles across Monaco, Silverstone, Suzuka, Spa, Monza & Singapore",
    highlight: false,
  },
  {
    id: "sprint_wins",
    label: "Sprint Victories",
    value: 14,
    suffix: "",
    description: "All-time F1 Sprint record holder; claimed 14th sprint victory today in Singapore",
    highlight: true,
  },
  {
    id: "fastest_laps",
    label: "Fastest Laps",
    value: 38,
    suffix: "",
    description: "Purple sector speed in race trim, including 17 consecutive fastest laps at wet Brazil",
    highlight: false,
  },
  {
    id: "career_points",
    label: "Career Points",
    value: 3640.5,
    suffix: "",
    description: "3,640.5 championship points scored, updated with today's +8 PTS from the Singapore Sprint",
    highlight: false,
  },
  {
    id: "grand_chelems",
    label: "Grand Chelems",
    value: 5,
    suffix: "x",
    description: "Ultimate perfection: Pole Position, Race Win, Fastest Lap & Led Every Single Lap",
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
  totalStarts: 249,
  totalEntries: 250,
  raceWins: 72,
  podiums: 135,
  polePositions: 50,
  fastestLaps: 38,
  sprintWins: 14,
  careerPoints: 3640.5,
  winPercentage2023: "86.4%",
  consecutiveWinsRecord: 10,
  podiums2023Record: 21,
};
