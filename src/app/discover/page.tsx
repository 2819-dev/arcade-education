import type { Metadata } from "next";
import { GameGrid } from "@/components/GameGrid";

export const metadata: Metadata = {
  title: "Discover",
};

export default function DiscoverPage() {
  return (
    <GameGrid
      title="Discover"
      subtitle="All catalog games — 2D and 3D. Filter by subject, then open a title for more information."
    />
  );
}
