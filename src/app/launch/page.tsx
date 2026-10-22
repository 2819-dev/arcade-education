import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { exchangeLaunchTokenStub } from "@/lib/entitlements";
import { GUIDE_URL } from "@/lib/env";

export const metadata: Metadata = {
  title: "Launch",
};

type Props = {
  searchParams: Promise<{ token?: string }>;
};

/**
 * Guide → Arcade launch bridge entry.
 * Expected: https://arcade-edu.guidelearning.org/launch?token=…
 * Exchange API (Guide POST /api/apps/launch/exchange) is TO BUILD — stubbed here.
 */
export default function LaunchPage({ searchParams }: Props) {
  return (
    <div className="mx-auto max-w-lg space-y-5">
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--ink)]">
        Launch
      </h1>
      <Suspense fallback={<LaunchFallback />}>
        <LaunchResult searchParams={searchParams} />
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

async function LaunchResult({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  const result = await exchangeLaunchTokenStub(token ?? "");
  const ok = result.status === "entitled";

  if (ok) {
    return (
      <div className="rounded-[var(--radius-md)] bg-white p-5 ring-1 ring-[var(--border)]">
        <p className="text-sm font-semibold text-[var(--blue-700)]">
          Token accepted (stub)
        </p>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">
          Profile <code>{result.claims.profileId}</code>. Real exchange will call{" "}
          <code className="break-all">
            POST {GUIDE_URL}/api/apps/launch/exchange
          </code>
          .
        </p>
        <Link
          href="/"
          className="mt-5 inline-flex rounded-full bg-[var(--blue-600)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--blue-700)]"
        >
          Continue to Arcade
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-md)] bg-white p-5 ring-1 ring-[var(--border)]">
      <p className="text-sm font-semibold text-[var(--ink)]">Launch incomplete</p>
      <p className="mt-2 text-sm text-[var(--ink-muted)]">
        {result.status === "denied" ? result.reason : "No entitlement yet."} Open
        Arcade from Guide My apps once the launch bridge is wired, or pass{" "}
        <code>?token=…</code> to this route for local testing.
      </p>
      <Link
        href="/"
        className="mt-5 inline-flex text-sm font-semibold text-[var(--blue-600)]"
      >
        Browse without entitlement (dev)
      </Link>
    </div>
  );
}
