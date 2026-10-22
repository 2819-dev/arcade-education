"use client";

import { useState } from "react";

export function SiteHeader() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#home"
          className="font-[family-name:var(--font-display)] text-[1.15rem] font-semibold tracking-tight text-white"
        >
          Arcade
        </a>
        <button
          type="button"
          onClick={() => setSignedIn((value) => !value)}
          className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[var(--blue-800)] shadow-[0_6px_18px_rgba(10,47,102,0.18)] transition hover:bg-white active:scale-[0.98]"
        >
          {signedIn ? "Signed in (stub)" : "Continue with Guide"}
        </button>
      </div>
    </header>
  );
}
