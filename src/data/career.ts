export interface TimelineEvent {
  year: string;
  season?: string;
  title: string;
  category: "Karting" | "Junior Career" | "F1 Debut" | "First Win" | "Championship" | "Dominance" | "Record";
  summary: string;
  details: string[];
  keyStat?: string;
  badgeColor?: string;
}

export const CAREER_TIMELINE: TimelineEvent[] = [
  {
    year: "2005 - 2013",
    title: "Karting Phenom & World Champion",
    category: "Karting",
    summary: "Began karting at age 4 under the rigorous mentorship of father Jos Verstappen. Dominated virtually every junior championship across Europe.",
    details: [
      "Won Belgian and Dutch mini-kart championships in succession",
      "Crowned 2013 CIK-FIA World KZ Championship (the premier manual gearbox category) at just 15 years old",
      "Scouted by Helmut Marko into the Red Bull Junior Team in August 2014"
    ],
    keyStat: "World KZ Champion at 15",
  },
  {
    year: "2014",
    title: "European Formula 3 & Instant F1 Call-up",
    category: "Junior Career",
    summary: "Jumped straight from karts into European F3 with Van Amersfoort Racing, winning 10 races including 6 consecutive victories.",
    details: [
      "Won 10 races, more than eventual champion Esteban Ocon",
      "Red Bull signed Max directly to Scuderia Toro Rosso for 2015",
      "Took part in FP1 at Suzuka 2014 three days after turning 17"
    ],
    keyStat: "10 F3 Victories",
  },
  {
    year: "2015",
    title: "Youngest Ever F1 Driver (Scuderia Toro Rosso)",
    category: "F1 Debut",
    summary: "Made his Grand Prix debut at Melbourne aged 17 years and 166 days, becoming the youngest driver to ever start a Formula One race.",
    details: [
      "Scored first championship points in Malaysia (7th place) at age 17y 180d",
      "Delivered breathtaking overtakes at Spa Blanchimont and Monaco",
      "Finished season with 49 points and three FIA awards at year-end gala"
    ],
    keyStat: "Debut at 17y 166d",
  },
  {
    year: "2016",
    title: "Promoted to Red Bull & Historic Spanish GP Win",
    category: "First Win",
    summary: "Promoted mid-season to Red Bull Racing ahead of the Spanish GP. In his debut race for the senior team, he held off Kimi Räikkönen to make history.",
    details: [
      "Youngest driver to lead a Grand Prix lap, stand on a podium, and win a race (18y 228d)",
      "Legendary wet-weather drive at Interlagos (Brazil GP), carving through from 16th to 3rd in extreme rain",
      "Cemented his status as a once-in-a-generation talent"
    ],
    keyStat: "Youngest F1 Winner (18y 228d)",
  },
  {
    year: "2017 - 2020",
    title: "The Challenger: Building the Dynasty",
    category: "Record",
    summary: "Battled through hybrid-era Mercedes dominance with aggressive racecraft, scoring stunning wins in Mexico, Austria, Germany, and Silverstone.",
    details: [
      "First Austrian GP victory on Red Bull's home turf (2018 & 2019)",
      "Took first career Pole Position at the 2019 Hungarian GP",
      "Finished 3rd in World Championship in 2019 and 2020 despite power deficits"
    ],
    keyStat: "10 Wins in Mercedes Era",
  },
  {
    year: "2021",
    title: "First World Championship: Abu Dhabi Drama",
    category: "Championship",
    summary: "Engaged in one of the most intense, legendary title fights in sporting history against Lewis Hamilton, culminating in a last-lap showdown.",
    details: [
      "Claimed 10 victories, 10 pole positions, and 18 podiums",
      "Dramatic finale at Yas Marina: final lap overtake into Turn 5 to seal maiden title",
      "Became the first Dutch Formula One World Champion"
    ],
    keyStat: "2021 World Champion (10 Wins)",
  },
  {
    year: "2022",
    title: "Title #2: Ground Effect Mastery (RB18)",
    category: "Championship",
    summary: "Mastered the new ground-effect technical regulations with the RB18, claiming 15 wins in a single season to smash the all-time record.",
    details: [
      "Won from 14th on the grid at Spa-Francorchamps in legendary style",
      "Clinched second title in torrential rain at Suzuka, Japan",
      "Broke Schumacher and Vettel's joint record for most wins in a single season (15)"
    ],
    keyStat: "15 Wins in 2022",
  },
  {
    year: "2023",
    title: "Title #3: Total Historical Dominance (RB19)",
    category: "Dominance",
    summary: "Achieved the most statistically dominant season in the 74-year history of Formula 1, rewriting the record books entirely with the RB19.",
    details: [
      "10 consecutive race victories (Miami to Monza), surpassing Vettel's record of 9",
      "19 wins out of 22 races (86.4% win rate, breaking Ascari's 1952 record)",
      "Led over 1,000 racing laps in a single calendar year (1,003 laps)",
      "Clinched 3rd Championship in Qatar sprint with 6 races to spare"
    ],
    keyStat: "19 Wins / 1,003 Laps Led",
  },
  {
    year: "2024",
    title: "Title #4: Resilience & 4-Peat Champion (RB20)",
    category: "Championship",
    summary: "Overcame fierce competition from McLaren and Ferrari to clinch his fourth consecutive Drivers' World Championship in Las Vegas.",
    details: [
      "Masterclass wet-weather win at the Brazilian GP from 17th on the grid",
      "Joined Juan Manuel Fangio, Michael Schumacher, Alain Prost, Sebastian Vettel, and Lewis Hamilton as 4+ time World Champions",
      "Clinched 4th consecutive crown under the Las Vegas neon lights"
    ],
    keyStat: "4x World Champion",
  },
  {
    year: "2025",
    title: "Championship Duel Down to Abu Dhabi Wire (RB21)",
    category: "Championship",
    summary: "Fought an epic 24-round title battle against McLaren that went down to the final lap of the season finale at Abu Dhabi, scoring 8 wins and 15 podiums.",
    details: [
      "Claimed 8 Grand Prix victories, 8 pole positions, and 421 championship points",
      "Celebrated landmark 70th career Formula One victory during the European summer leg",
      "Finished runner-up by a razor-thin 2-point margin after an intense season-long fight"
    ],
    keyStat: "8 Wins / 421 Points (P2 by 2 pts)",
  },
  {
    year: "2026",
    title: "2026 Campaign & Singapore Sprint Masterclass",
    category: "Record",
    summary: "Spearheaded Red Bull's charge into the next technical era, capturing his 72nd career GP win in Bahrain and crowning his 14th Sprint victory at Singapore on October 10, 2026.",
    details: [
      "Converted Sprint Pole into a masterclass wet victory at the Singapore GP on October 10, 2026",
      "Extended all-time Formula 1 Sprint victory record to 14 wins",
      "Secured front-row P2 start for Sunday's Grand Prix and elevated career tally to 3,640.5 points",
      "Surpassed 249 Grand Prix starts, 72 race wins, and 135 career podiums"
    ],
    keyStat: "14 Sprint Wins / 3,640.5 Career Pts",
  },
];
