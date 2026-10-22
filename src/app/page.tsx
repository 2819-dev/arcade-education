import { Hero } from "@/components/Hero";
import { HomeFeed } from "@/components/HomeFeed";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HomeFeed />
      </main>
      <footer className="border-t border-[var(--border)] bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--blue-800)]">
            Arcade Education
          </p>
          <p className="text-sm text-[var(--ink-soft)]">
            Sign-in via Guide SSO coming soon — Continue with Guide is stubbed
            for now.
          </p>
        </div>
      </footer>
    </div>
  );
}
