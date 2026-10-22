"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  exchangeLaunchTokenStub,
  type EntitlementState,
} from "@/lib/entitlements";
import { GUIDE_URL } from "@/lib/env";

export function LaunchClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [result, setResult] = useState<EntitlementState | null>(null);

  useEffect(() => {
    let cancelled = false;
    void exchangeLaunchTokenStub(token).then((next) => {
      if (!cancelled) setResult(next);
    });
    return () => {
      cancelled = true;
    };
  }, [token]);

  if (!result) {
    return (
      <div className="rounded-[var(--radius-md)] bg-white p-5 ring-1 ring-[var(--border)]">
        <p className="text-sm text-[var(--ink-muted)]">Checking launch token…</p>
      </div>
    );
  }

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
