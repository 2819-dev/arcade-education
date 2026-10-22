"use client";

import { useState } from "react";
import { categories, gamesByCategory } from "@/data/games";
import { GameTile } from "./GameTile";

export function GameGrid({
  title = "Games",
  subtitle = "Cover art with the title underneath — open a game for details.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const [active, setActive] = useState("all");
  const visible = gamesByCategory(active);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
          {title}
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-[var(--ink-muted)] sm:text-base">
          {subtitle}
        </p>
      </div>

      <div
        className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0"
        role="tablist"
        aria-label="Categories"
      >
        {categories.map((category) => {
          const selected = category.id === active;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(category.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                selected
                  ? "bg-[var(--blue-600)] text-white"
                  : "bg-white text-[var(--ink-muted)] ring-1 ring-[var(--border)] hover:text-[var(--blue-700)]"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {visible.map((game, index) => (
          <GameTile key={game.id} game={game} index={index} />
        ))}
      </div>

      {/* Presence only when real data exists */}
      <section className="rounded-[var(--radius-md)] bg-white px-4 py-5 ring-1 ring-[var(--border)]">
        <h2 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--ink)]">
          Playing now
        </h2>
        <p className="mt-1 text-sm text-[var(--ink-muted)]">
          No live presence yet. Classmates and player counts will appear here
          when Guide entitlements and realtime data are connected.
        </p>
      </section>
    </div>
  );
}
