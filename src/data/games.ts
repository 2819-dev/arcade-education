export type GameDimension = "2d" | "3d";

export type Category = {
  id: string;
  label: string;
};

export type Game = {
  id: string;
  title: string;
  categoryId: string;
  dimension: GameDimension;
  cover: string;
  blurb: string;
  description: string;
  subjects: string[];
};

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
    id: "fraction-frenzy",
    title: "Fraction Frenzy",
    categoryId: "math",
    dimension: "2d",
    cover: "/covers/fraction-frenzy.jpg",
    blurb: "Race to simplify fractions before the clock runs out.",
    description:
      "Compete in short classroom rounds where every correct simplify unlocks the next lane. Teachers can set difficulty bands so the same lobby works for mixed grade levels.",
    subjects: ["Fractions", "Number sense"],
  },
  {
    id: "number-nest",
    title: "Number Nest",
    categoryId: "math",
    dimension: "3d",
    cover: "/covers/number-nest.jpg",
    blurb: "Build place-value towers in a shared 3D classroom world.",
    description:
      "Drop place-value blocks into a collaborative nest. Students walk the space together, compare builds, and explain why a tower equals a target number.",
    subjects: ["Place value", "Base ten"],
  },
  {
    id: "lab-spark",
    title: "Lab Spark",
    categoryId: "science",
    dimension: "3d",
    cover: "/covers/lab-spark.jpg",
    blurb: "Run safe virtual reactions and log discoveries.",
    description:
      "Step into a 3D lab bench, mix allowed reagents, and record outcomes in a simple lab notebook. Designed for guided inquiry, not open-ended chemistry hazards.",
    subjects: ["Scientific method", "Matter"],
  },
  {
    id: "orbit-trail",
    title: "Orbit Trail",
    categoryId: "science",
    dimension: "3d",
    cover: "/covers/orbit-trail.jpg",
    blurb: "Chart planets and seasons on a shared sky map.",
    description:
      "Trace orbital paths, flip seasonal views, and compare day lengths. Built for whole-class projection or small-group stations.",
    subjects: ["Astronomy", "Earth systems"],
  },
  {
    id: "word-orbit",
    title: "Word Orbit",
    categoryId: "reading",
    dimension: "2d",
    cover: "/covers/word-orbit.jpg",
    blurb: "Catch vocabulary stars and write short missions.",
    description:
      "Orbit through word banks tied to classroom units. Students collect definitions, then complete a short writing prompt before the round ends.",
    subjects: ["Vocabulary", "Writing"],
  },
  {
    id: "story-studio",
    title: "Story Studio",
    categoryId: "reading",
    dimension: "2d",
    cover: "/covers/story-studio.jpg",
    blurb: "Co-write chapter quests with your class.",
    description:
      "Pick a story spine, assign roles, and publish a class chapter. Teachers can lock prompts so every group stays on the same learning goal.",
    subjects: ["Narrative", "Collaboration"],
  },
  {
    id: "map-quest",
    title: "Map Quest",
    categoryId: "history",
    dimension: "3d",
    cover: "/covers/map-quest.jpg",
    blurb: "Explore timelines through interactive journeys.",
    description:
      "Walk a 3D timeline corridor, open evidence chests, and place events in order. Supports primary-source snippets teachers attach per unit.",
    subjects: ["Timeline", "Geography"],
  },
  {
    id: "civic-builder",
    title: "Civic Builder",
    categoryId: "history",
    dimension: "3d",
    cover: "/covers/civic-builder.jpg",
    blurb: "Design a town and debate how it grows.",
    description:
      "Place civic buildings, set simple rules, and discuss trade-offs as the town expands. Focused on deliberation, not competitive city-sim scoring.",
    subjects: ["Civics", "Decision making"],
  },
  {
    id: "code-blocks",
    title: "Code Blocks",
    categoryId: "coding",
    dimension: "2d",
    cover: "/covers/code-blocks.jpg",
    blurb: "Snap logic bricks to power classroom robots.",
    description:
      "Drag block-based instructions to complete classroom challenges. Challenges scale from sequencing to loops without requiring typed syntax.",
    subjects: ["Sequencing", "Loops"],
  },
  {
    id: "pixel-paths",
    title: "Pixel Paths",
    categoryId: "coding",
    dimension: "2d",
    cover: "/covers/pixel-paths.jpg",
    blurb: "Debug maze bots with loops and conditions.",
    description:
      "Guide a bot through pixel mazes by fixing broken paths. Great for warm-ups before typed coding units.",
    subjects: ["Debugging", "Conditionals"],
  },
];

export function getGame(id: string): Game | undefined {
  return games.find((game) => game.id === id);
}

export function gamesByCategory(categoryId: string): Game[] {
  if (categoryId === "all") return games;
  return games.filter((game) => game.categoryId === categoryId);
}
