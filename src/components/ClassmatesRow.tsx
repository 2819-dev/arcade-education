import { classmates, type Classmate } from "@/data/mock";

function statusLabel(classmate: Classmate) {
  if (classmate.status === "playing" && classmate.playing) {
    return classmate.playing;
  }
  if (classmate.status === "online") return "Online";
  return "Away";
}

export function ClassmatesRow() {
  return (
    <section id="classmates" className="scroll-mt-8">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--ink)] sm:text-2xl">
            Classmates
          </h2>
          <p className="mt-1 text-sm text-[var(--ink-muted)]">
            See who&apos;s around and what they&apos;re playing.
          </p>
        </div>
      </div>

      <div className="scrollbar-hide -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8">
        {classmates.map((classmate, index) => (
          <article
            key={classmate.id}
            className="animate-rise flex w-[104px] shrink-0 flex-col items-center text-center"
            style={{ animationDelay: `${index * 0.04}s` }}
          >
            <div className="relative">
              <div
                className="flex h-[72px] w-[72px] items-center justify-center rounded-full text-lg font-semibold text-white shadow-[0_8px_20px_rgba(10,61,134,0.18)] ring-4 ring-white"
                style={{
                  background: `linear-gradient(145deg, hsl(${classmate.hue} 78% 58%), hsl(${classmate.hue} 70% 42%))`,
                }}
              >
                {classmate.initials}
              </div>
              <span
                className={`absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-white ${
                  classmate.status === "playing"
                    ? "animate-pulse-dot bg-[var(--success)]"
                    : classmate.status === "online"
                      ? "bg-[var(--blue-500)]"
                      : "bg-[var(--away)]"
                }`}
                aria-hidden
              />
            </div>
            <p className="mt-2 w-full truncate text-sm font-semibold text-[var(--ink)]">
              {classmate.name.split(" ")[0]}
            </p>
            <p className="mt-0.5 w-full truncate text-xs text-[var(--ink-soft)]">
              {statusLabel(classmate)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
