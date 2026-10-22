"use client";

import { useState } from "react";
import { categories, games } from "@/data/mock";
import { ClassmatesRow } from "./ClassmatesRow";

export function HomeFeed() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleGames =
    activeCategory === "all"
      ? games
      : games.filter((game) => game.categoryId === activeCategory);

  return (
    <div className="relative z-10 -mt-6 space-y-12 px-5 pb-20 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <ClassmatesRow />

        <section>
          <div className="mb-4">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--ink)] sm:text-2xl">
              Categories
            </h2>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              Filter by subject to find the right game.
            </p>
          </div>
          <div
            className="scrollbar-hide -mx-5 flex gap-2 overflow-x-auto px-5 sm:-mx-8 sm:px-8"
            role="tablist"
            aria-label="Game categories"
          >
            {categories.map((category) => {
              const selected = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveCategory(category.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selected
                      ? "bg-[var(--blue-600)] text-white shadow-[0_6px_16px_rgba(0,102,219,0.28)]"
                      : "bg-white text-[var(--ink-muted)] ring-1 ring-[var(--border)] hover:text-[var(--blue-700)]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--ink)] sm:text-2xl">
              Games
            </h2>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              {visibleGames.length} ready to play
              {activeCategory !== "all"
                ? ` in ${categories.find((c) => c.id === activeCategory)?.label}`
                : ""}
              .
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleGames.map((game, index) => (
              <button
                key={game.id}
                type="button"
                className="group animate-rise overflow-hidden rounded-[var(--radius-lg)] bg-white text-left shadow-[var(--shadow-tile)] ring-1 ring-[var(--border)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(10,61,134,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue-500)]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className="relative h-28 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${game.accent}, color-mix(in srgb, ${game.accent} 55%, #0c2f66))`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 30%, white 0 2px, transparent 3px), radial-gradient(circle at 70% 60%, white 0 1.5px, transparent 2.5px), radial-gradient(circle at 40% 80%, white 0 1px, transparent 2px)",
                      backgroundSize: "100% 100%",
                    }}
                  />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold text-white">
                      {categories.find((c) => c.id === game.categoryId)?.label}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--ink)]">
                      {game.title}
                    </h3>
                    <span className="shrink-0 text-xs font-medium text-[var(--ink-soft)]">
                      {game.players.toLocaleString()} playing
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {game.blurb}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-[var(--blue-600)] transition group-hover:text-[var(--blue-700)]">
                    Play →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
