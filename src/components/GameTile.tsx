import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/data/games";

export function GameTile({ game, index = 0 }: { game: Game; index?: number }) {
  return (
    <Link
      href={`/games/${game.id}`}
      className="group animate-rise block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue-500)]"
      style={{ animationDelay: `${Math.min(index, 12) * 0.04}s` }}
    >
      <div className="overflow-hidden rounded-[var(--radius-md)] bg-[var(--blue-100)] shadow-[var(--shadow-tile)] ring-1 ring-[var(--border)] transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_28px_rgba(10,61,134,0.14)]">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={game.cover}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover"
            priority={index < 4}
          />
          <span className="absolute left-2 top-2 rounded-md bg-[var(--ink)]/70 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            {game.dimension}
          </span>
        </div>
      </div>
      <p className="mt-2 truncate px-0.5 text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--blue-700)]">
        {game.title}
      </p>
    </Link>
  );
}
