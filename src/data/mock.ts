export type Classmate = {
  id: string;
  name: string;
  initials: string;
  status: "playing" | "online" | "away";
  playing?: string;
  hue: number;
};

export type Category = {
  id: string;
  label: string;
};

export type Game = {
  id: string;
  title: string;
  categoryId: string;
  players: number;
  blurb: string;
  accent: string;
};

export const classmates: Classmate[] = [
  {
    id: "1",
    name: "Maya Chen",
    initials: "MC",
    status: "playing",
    playing: "Fraction Frenzy",
    hue: 205,
  },
  {
    id: "2",
    name: "Jordan Lee",
    initials: "JL",
    status: "online",
    hue: 198,
  },
  {
    id: "3",
    name: "Sam Okonkwo",
    initials: "SO",
    status: "playing",
    playing: "Map Quest",
    hue: 220,
  },
  {
    id: "4",
    name: "Ava Rivera",
    initials: "AR",
    status: "online",
    hue: 190,
  },
  {
    id: "5",
    name: "Noah Patel",
    initials: "NP",
    status: "away",
    hue: 212,
  },
  {
    id: "6",
    name: "Ellie Brooks",
    initials: "EB",
    status: "playing",
    playing: "Word Orbit",
    hue: 230,
  },
  {
    id: "7",
    name: "Kai Nguyen",
    initials: "KN",
    status: "online",
    hue: 185,
  },
  {
    id: "8",
    name: "Priya Shah",
    initials: "PS",
    status: "playing",
    playing: "Code Blocks",
    hue: 215,
  },
];

export const categories: Category[] = [
  { id: "all", label: "All" },
  { id: "math", label: "Math" },
  { id: "science", label: "Science" },
  { id: "reading", label: "Reading" },
  { id: "history", label: "History" },
  { id: "coding", label: "Coding" },
];

export const games: Game[] = [
  {
    id: "g1",
    title: "Fraction Frenzy",
    categoryId: "math",
    players: 1240,
    blurb: "Race to simplify fractions before the clock runs out.",
    accent: "#0A84FF",
  },
  {
    id: "g2",
    title: "Number Nest",
    categoryId: "math",
    players: 890,
    blurb: "Build place-value towers with your class.",
    accent: "#1B6EF3",
  },
  {
    id: "g3",
    title: "Lab Spark",
    categoryId: "science",
    players: 2104,
    blurb: "Mix safe virtual reactions and log your discoveries.",
    accent: "#0071E3",
  },
  {
    id: "g4",
    title: "Orbit Trail",
    categoryId: "science",
    players: 1560,
    blurb: "Chart planets and seasons on a shared sky map.",
    accent: "#2F80ED",
  },
  {
    id: "g5",
    title: "Word Orbit",
    categoryId: "reading",
    players: 980,
    blurb: "Catch vocabulary stars and write short missions.",
    accent: "#0B69D4",
  },
  {
    id: "g6",
    title: "Story Studio",
    categoryId: "reading",
    players: 742,
    blurb: "Co-write chapter quests with classmates.",
    accent: "#1565C0",
  },
  {
    id: "g7",
    title: "Map Quest",
    categoryId: "history",
    players: 1322,
    blurb: "Explore timelines through interactive journeys.",
    accent: "#1E88E5",
  },
  {
    id: "g8",
    title: "Civic Builder",
    categoryId: "history",
    players: 611,
    blurb: "Design a town and debate how it grows.",
    accent: "#1976D2",
  },
  {
    id: "g9",
    title: "Code Blocks",
    categoryId: "coding",
    players: 1875,
    blurb: "Snap logic bricks to power classroom robots.",
    accent: "#0288D1",
  },
  {
    id: "g10",
    title: "Pixel Paths",
    categoryId: "coding",
    players: 1099,
    blurb: "Debug maze bots with loops and conditions.",
    accent: "#039BE5",
  },
];
