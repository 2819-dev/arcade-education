import type { Metadata } from "next";
import { Suspense } from "react";
import { LaunchClient } from "./LaunchClient";

export const metadata: Metadata = {
  title: "Launch",
};

/**
 * Guide → Arcade launch bridge entry.
 * Expected: https://arcade-edu.guidelearning.org/launch?token=…
 * Exchange API (Guide POST /api/apps/launch/exchange) is TO BUILD — stubbed client-side
 * so this route stays statically exportable for Cloudflare Pages.
 */
export default function LaunchPage() {
  return (
    <div className="mx-auto max-w-lg space-y-5">
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--ink)]">
        Launch
      </h1>
      <Suspense fallback={<LaunchFallback />}>
        <LaunchClient />
      </Suspense>
    </div>
  );
}

function LaunchFallback() {
  return (
    <div className="rounded-[var(--radius-md)] bg-white p-5 ring-1 ring-[var(--border)]">
      <p className="text-sm text-[var(--ink-muted)]">Checking launch token…</p>
    </div>
  );
}
