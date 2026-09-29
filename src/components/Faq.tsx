import { useState } from "react";
import { FAQS } from "../data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-16">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Your Questions</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          HAV IgG Ab Test — Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-10 space-y-3">
        {FAQS.map((f, i) => (
          <div
            key={f.q}
            className={`overflow-hidden rounded-2xl border transition ${
              open === i ? "border-brand-300 bg-brand-50/50 shadow-md" : "border-slate-200 bg-white"
            }`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-[15px] font-bold text-ink-900">{f.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white transition ${
                  open === i ? "rotate-45 bg-brand-600" : "bg-slate-300"
                }`}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            {open === i && (
              <p className="px-5 pb-5 text-[15px] leading-relaxed text-slate-600">{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
