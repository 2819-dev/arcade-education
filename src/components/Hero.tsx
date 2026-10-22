export function Hero() {
  return (
    <section
      id="home"
      className="hero-atmosphere relative min-h-[100svh] overflow-hidden text-white"
    >
      <div className="hero-pattern pointer-events-none absolute inset-0" />
      <div
        className="animate-drift pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-[#7ec2ff]/30 blur-2xl"
        aria-hidden
      />
      <div
        className="animate-drift pointer-events-none absolute -right-10 bottom-28 h-64 w-64 rounded-full bg-[#0050b0]/35 blur-3xl [animation-delay:-4s]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-24 pt-28 sm:px-8">
        <p className="animate-rise font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Arcade
        </p>
        <p className="animate-rise-delay-1 mt-2 text-lg font-medium text-white/85 sm:text-xl">
          Arcade Education
        </p>
        <h1 className="animate-rise-delay-2 mt-8 max-w-xl text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
          Learn with your class through games built for school.
        </h1>
        <p className="animate-rise-delay-3 mt-4 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
          Jump in with classmates, pick a subject, and play.
        </p>
        <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#classmates"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--blue-800)] shadow-[0_10px_28px_rgba(10,47,102,0.22)] transition hover:bg-[var(--blue-50)] active:scale-[0.98]"
          >
            Browse games
          </a>
          <a
            href="#classmates"
            className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/18 active:scale-[0.98]"
          >
            See who&apos;s online
          </a>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface)]"
        aria-hidden
      />
    </section>
  );
}
