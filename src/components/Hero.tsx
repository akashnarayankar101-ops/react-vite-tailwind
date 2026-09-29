import { LAB, TEST } from "../data";
import { IconCheck, IconPhone, IconWhatsApp } from "./Icons";

const quick = [
  { k: "Sample", v: "Blood (Serum)" },
  { k: "Fasting", v: "Not Required" },
  { k: "Report", v: "Same Day" },
  { k: "Method", v: "CLIA / ELISA" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-sm">
            Hepatitis A Immunity Screening
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-[3.3rem]">
            HAV IgG Ab Test in <span className="text-brand-600">Dharavi – Sion, Mumbai</span>
          </h1>

          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-slate-600">
            Book the <strong className="text-ink-900">HAV IgG Ab (Hepatitis A Virus IgG Antibody)</strong> test at{" "}
            {LAB.name} — a trusted neighbourhood blood collection centre. This test confirms whether you carry
            long-term protective antibodies against Hepatitis A from a past infection or vaccination. Walk-in or free
            home sample collection, accurate reporting, and transparent pricing.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <div className="rounded-2xl border border-brand-200 bg-white px-5 py-3 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Test Price</p>
              <p className="text-3xl font-extrabold text-brand-600">
                ₹{TEST.price}
                <span className="ml-1 text-sm font-semibold text-slate-400">/-</span>
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Open</p>
              <p className="text-base font-bold text-emerald-800">{LAB.timing}</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={LAB.mobileHref}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand-200 transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              <IconPhone className="h-5 w-5" /> Call {LAB.mobile}
            </a>
            <a
              href={LAB.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              <IconWhatsApp className="h-5 w-5" /> Book on WhatsApp
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-xl border border-ink-900/15 bg-white px-6 py-3.5 text-sm font-bold text-ink-900 transition hover:bg-slate-50"
            >
              Request Home Collection
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
            {["No Fasting Required", "Free Home Collection", "Same Day Reports", "Trained Phlebotomists"].map((i) => (
              <li key={i} className="flex items-center gap-2">
                <IconCheck className="h-4 w-4 text-brand-600" /> {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white shadow-2xl shadow-slate-300/60">
            <img
              src="https://images.pexels.com/photos/4047146/pexels-photo-4047146.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="HAV IgG Ab blood sample collection at Path Cell Lab, Dharavi Sion Mumbai"
              className="h-72 w-full object-cover sm:h-96"
              loading="eager"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {quick.map((q) => (
              <div key={q.k} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{q.k}</p>
                <p className="mt-0.5 text-sm font-bold text-ink-900">{q.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
