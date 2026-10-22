import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { categories, getGame, games } from "@/data/games";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return games.map((game) => ({ id: game.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const game = getGame(id);
  if (!game) return { title: "Game" };
  return { title: game.title };
}

export default function GameDetailPage({ params }: Props) {
  return (
    <Suspense fallback={<DetailFallback />}>
      <GameDetail params={params} />
    </Suspense>
  );
}

function DetailFallback() {
  return (
    <div className="mx-auto max-w-4xl animate-pulse space-y-4">
      <div className="h-4 w-32 rounded bg-[var(--blue-100)]" />
      <div className="aspect-[4/3] max-w-xl rounded-[var(--radius-lg)] bg-[var(--blue-100)]" />
    </div>
  );
}

async function GameDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = getGame(id);
  if (!game) notFound();

  const category = categories.find((c) => c.id === game.categoryId);

  return (
    <article className="mx-auto max-w-4xl">
      <Link
        href="/"
        className="text-sm font-semibold text-[var(--blue-600)] hover:text-[var(--blue-700)]"
      >
        ← Back to games
      </Link>

      <div className="mt-4 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-start">
        <div className="overflow-hidden rounded-[var(--radius-lg)] bg-[var(--blue-100)] shadow-[var(--shadow-tile)] ring-1 ring-[var(--border)]">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={game.cover}
              alt={`${game.title} cover`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[var(--blue-600)] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {game.dimension}
            </span>
            {category ? (
              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[var(--ink-muted)] ring-1 ring-[var(--border)]">
                {category.label}
              </span>
            ) : null}
          </div>

          <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            {game.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[var(--ink-muted)]">
            {game.blurb}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink)]">
            {game.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {game.subjects.map((subject) => (
              <li
                key={subject}
                className="rounded-md bg-[var(--blue-50)] px-2.5 py-1 text-xs font-semibold text-[var(--blue-800)]"
              >
                {subject}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              disabled
              title="Play is stubbed until Guide launch + entitlements are wired"
              className="cursor-not-allowed rounded-full bg-[var(--blue-600)]/55 px-6 py-3 text-sm font-semibold text-white"
            >
              Play (stub)
            </button>
            <Link
              href="/discover"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--blue-700)] ring-1 ring-[var(--border)] hover:bg-[var(--blue-50)]"
            >
              More games
            </Link>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-[var(--ink-soft)]">
            Entitlement gating is stubbed. When Guide mints a launch token to{" "}
            <code className="rounded bg-[var(--blue-50)] px-1">/launch?token=…</code>
            , Arcade will exchange it before unlocking play.
          </p>
        </div>
      </div>
    </article>
  );
}
