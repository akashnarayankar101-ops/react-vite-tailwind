import { useState } from "react";
import { LAB } from "../data";
import { IconDrop, IconPhone } from "./Icons";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#when", label: "When To Test" },
  { href: "#benefits", label: "Benefits" },
  { href: "#details", label: "Test Details" },
  { href: "#faq", label: "FAQs" },
  { href: "#book", label: "Book Now" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="bg-ink-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-[13px]">
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open Today · {LAB.timing}
          </p>
          <p className="opacity-90">{LAB.address}</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-200">
            <IconDrop className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-ink-900">{LAB.name}</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">
              {LAB.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-brand-50 hover:text-brand-700"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LAB.mobileHref}
            className="hidden items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-200 transition hover:bg-brand-700 sm:inline-flex"
          >
            <IconPhone className="h-4 w-4" /> {LAB.mobile}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-lg border border-brand-200 p-2 text-ink-900 lg:hidden"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-brand-100 bg-white px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 py-3 text-sm font-medium text-ink-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href={LAB.mobileHref}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white"
          >
            <IconPhone className="h-4 w-4" /> Call {LAB.mobile}
          </a>
        </nav>
      )}
    </header>
  );
}
