import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin",
};

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
          Admin
        </h1>
        <p className="mt-2 text-sm text-[var(--ink-muted)] sm:text-base">
          Teacher view and block-access controls will live with the{" "}
          <strong className="font-semibold text-[var(--ink)]">
            Guide teacher portal
          </strong>
          — not a separate Arcade admin product.
        </p>
      </div>

      <section className="rounded-[var(--radius-md)] bg-white p-5 ring-1 ring-[var(--border)]">
        <h2 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--ink)]">
          Coming from Guide
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--ink-muted)]">
          <li>Teacher visibility into class Arcade activity</li>
          <li>Block access to Arcade / games / students (per Guide MD)</li>
          <li>Classroom install of catalog slug <code>arcade-education</code></li>
        </ul>
        <p className="mt-4 text-sm text-[var(--ink-soft)]">
          Full rules arrive when the user-supplied admin MD is provided. This
          route is a light stub so the shell already has an Admin destination.
        </p>
      </section>

      <Link
        href="/"
        className="inline-flex text-sm font-semibold text-[var(--blue-600)] hover:text-[var(--blue-700)]"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
