export interface RecordMilestone {
  title: string;
  metric: string;
  previousRecord: string;
  year: string;
  description: string;
  category: "All-Time Historic" | "Season Record" | "Youth Record" | "Racecraft";
}

export const RECORDS_AND_MILESTONES: RecordMilestone[] = [
  {
    title: "Most Consecutive Wins",
    metric: "10 Races",
    previousRecord: "9 (Sebastian Vettel, 2013)",
    year: "2023",
    description: "From Miami GP to Monza GP, Max scored 10 consecutive Grand Prix victories without defeat.",
    category: "All-Time Historic",
  },
  {
    title: "Highest Season Win Rate",
    metric: "86.4%",
    previousRecord: "75.0% (Alberto Ascari, 1952)",
    year: "2023",
    description: "19 Grand Prix victories out of 22 rounds in a single championship season.",
    category: "All-Time Historic",
  },
  {
    title: "Most Wins in a Single Season",
    metric: "19 Wins",
    previousRecord: "13 (Schumacher 2004, Vettel 2013)",
    year: "2023",
    description: "Utterly dismantled the previous record of 13 victories, raising the ceiling to 19 in 2023.",
    category: "Season Record",
  },
  {
    title: "Most Laps Led in a Season",
    metric: "1,003 Laps",
    previousRecord: "739 (Sebastian Vettel, 2011)",
    year: "2023",
    description: "The only driver in F1 history to ever lead more than 1,000 racing laps in a single year.",
    category: "Season Record",
  },
  {
    title: "Biggest Championship Winning Margin",
    metric: "290 Points",
    previousRecord: "155 (Sebastian Vettel, 2013)",
    year: "2023",
    description: "Max scored 575 points in 2023; Sergio Pérez in P2 scored 285 points. Max doubled second place single-handedly.",
    category: "All-Time Historic",
  },
  {
    title: "Youngest Race Winner",
    metric: "18y 228d",
    previousRecord: "21y 73d (Sebastian Vettel, 2008)",
    year: "2016",
    description: "Won on debut for Red Bull Racing at the 2016 Spanish Grand Prix after promotion from Toro Rosso.",
    category: "Youth Record",
  },
  {
    title: "Youngest Grand Prix Starter",
    metric: "17y 166d",
    previousRecord: "19y 125d (Jaime Alguersuari)",
    year: "2015",
    description: "Made F1 debut for Scuderia Toro Rosso at the 2015 Australian GP before holding a street driver's license.",
    category: "Youth Record",
  },
  {
    title: "Most Points in a Season",
    metric: "575 Pts",
    previousRecord: "454 (Max Verstappen, 2022)",
    year: "2023",
    description: "Outscored the entire second-placed constructors' team (Mercedes 409 pts) on his own.",
    category: "Season Record",
  },
  {
    title: "Masterclass Wet Win from P17",
    metric: "P17 to P1",
    previousRecord: "Historic wet drives (Senna '93)",
    year: "2024",
    description: "Carved from 17th on the grid through biblical rain at Interlagos, setting 17 consecutive fastest laps.",
    category: "Racecraft",
  },
  {
    title: "Wins from 10 Different Grid Slots",
    metric: "10 Grid Slots",
    previousRecord: "9 (Fernando Alonso)",
    year: "2016 - 2026",
    description: "Won Grands Prix starting from P1, P2, P3, P4, P6, P7, P9, P10, P14 (Spa '22), and P17 (Brazil '24).",
    category: "Racecraft",
  },
  {
    title: "Most Formula 1 Sprint Victories",
    metric: "14 Sprint Wins",
    previousRecord: "Inaugural Record Holder",
    year: "2021 - 2026",
    description: "Undisputed king of the Sprint format with 14 victories, extending his all-time record with a wet-weather win at the Singapore GP on October 10, 2026.",
    category: "All-Time Historic",
  },
  {
    title: "Most Podiums in a Season",
    metric: "21 Podiums",
    previousRecord: "18 (Verstappen 2021, Hamilton 2015)",
    year: "2023",
    description: "Stepped onto the podium in 21 out of 22 Grands Prix in the 2023 calendar.",
    category: "Season Record",
  },
  {
    title: "Consecutive Races Leading Drivers' Championship",
    metric: "60+ Races",
    previousRecord: "37 (Michael Schumacher, 2000-2002)",
    year: "2022 - 2024",
    description: "Held the outright lead of the Drivers' World Championship continuously from Spanish GP 2022 through to 2024 title victory.",
    category: "All-Time Historic",
  },
];
