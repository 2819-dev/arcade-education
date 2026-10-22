"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useState, type ReactNode } from "react";

const nav = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/discover", label: "Discover", icon: DiscoverIcon },
  { href: "/admin", label: "Admin", icon: AdminIcon },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<ShellFallback>{children}</ShellFallback>}>
      <ShellInner>{children}</ShellInner>
    </Suspense>
  );
}

function ShellFallback({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full bg-[var(--surface)] text-[var(--ink)]">
      <div className="hidden w-[220px] shrink-0 border-r border-[var(--border)] bg-white md:block" />
      <div className="flex min-h-full w-full flex-1 flex-col md:pl-0">
        <main className="flex-1 px-4 pb-24 pt-5 sm:px-6 md:px-8 md:pb-10 md:pt-7">
          {children}
        </main>
      </div>
    </div>
  );
}

function ShellInner({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [signedIn, setSignedIn] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <div className="flex min-h-full bg-[var(--surface)] text-[var(--ink)]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[220px] flex-col border-r border-[var(--border)] bg-white md:flex">
        <div className="px-5 pb-4 pt-6">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--blue-700)]"
          >
            Arcade
          </Link>
          <p className="mt-0.5 text-xs font-medium text-[var(--ink-soft)]">
            Education
          </p>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-[var(--blue-50)] text-[var(--blue-700)]"
                    : "text-[var(--ink-muted)] hover:bg-[var(--blue-50)]/70 hover:text-[var(--blue-700)]"
                }`}
              >
                <Icon active={active} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[var(--border)] p-4">
          <button
            type="button"
            onClick={() => setSignedIn((v) => !v)}
            className="w-full rounded-full bg-[var(--blue-600)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--blue-700)] active:scale-[0.98]"
          >
            {signedIn ? "Signed in (stub)" : "Continue with Guide"}
          </button>
          <p className="mt-2 text-[11px] leading-snug text-[var(--ink-soft)]">
            Launch bridge + entitlements TO BUILD
          </p>
        </div>
      </aside>

      <div className="flex min-h-full w-full flex-1 flex-col md:pl-[220px]">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border)] bg-white px-4 py-3 md:hidden">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--blue-700)]"
          >
            Arcade
          </Link>
          <button
            type="button"
            onClick={() => setSignedIn((v) => !v)}
            className="rounded-full bg-[var(--blue-600)] px-3 py-1.5 text-xs font-semibold text-white"
          >
            {signedIn ? "Signed in" : "Guide"}
          </button>
        </header>

        <main className="flex-1 px-4 pb-24 pt-5 sm:px-6 md:px-8 md:pb-10 md:pt-7">
          {children}
        </main>

        <nav
          className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--border)] bg-white md:hidden"
          aria-label="Mobile"
        >
          <ul className="grid grid-cols-3">
            {nav.map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold ${
                      active
                        ? "text-[var(--blue-600)]"
                        : "text-[var(--ink-soft)]"
                    }`}
                  >
                    <Icon active={active} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
        stroke={active ? "var(--blue-600)" : "currentColor"}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DiscoverIcon({ active }: { active: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke={active ? "var(--blue-600)" : "currentColor"}
        strokeWidth="1.8"
      />
      <path
        d="m10.2 13.8 1.1-3.5 3.5-1.1-1.1 3.5-3.5 1.1Z"
        fill={active ? "var(--blue-600)" : "currentColor"}
      />
    </svg>
  );
}

function AdminIcon({ active }: { active: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3 4.5 6.5v5.2c0 4.4 3.1 7.9 7.5 9.3 4.4-1.4 7.5-4.9 7.5-9.3V6.5L12 3Z"
        stroke={active ? "var(--blue-600)" : "currentColor"}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
