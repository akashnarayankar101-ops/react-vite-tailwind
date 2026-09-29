import { LAB, TEST } from "../data";
import { IconCheck, IconPhone, IconWhatsApp } from "./Icons";

const rows: [string, string][] = [
  ["Test Name", "HAV IgG Ab (Hepatitis A Virus IgG Antibody)"],
  ["Also Known As", "Anti-HAV IgG, Hepatitis A Antibody IgG, HAV Immunity Test"],
  ["Test Price", `₹${TEST.price}/- (all inclusive)`],
  ["Sample Required", TEST.sample],
  ["Preparation / Fasting", TEST.fasting],
  ["Method", TEST.method],
  ["Report Delivery", TEST.reporting],
  ["Recommended For", TEST.age],
  ["Home Collection", "Available across Dharavi, Sion, Matunga, Mahim, Kurla & nearby areas"],
  ["Centre Timing", LAB.timing],
];

const steps = [
  { t: "Book Your Slot", d: "Call or WhatsApp 9892223371 and choose a walk-in time or a free home visit." },
  { t: "Sample Collection", d: "A trained phlebotomist draws 3 ml blood using a fresh, sterile, single-use needle." },
  { t: "Lab Processing", d: "Your serum is analysed on automated CLIA / ELISA platforms with strict quality control." },
  { t: "Report & Guidance", d: "Same-day report on WhatsApp / email, with a free explanation of what your result means." },
];

export default function Details() {
  return (
    <section id="details" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">At a Glance</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              HAV IgG Ab Test Details & Cost in Mumbai
            </h2>
            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <tbody>
                  {rows.map(([k, v], i) => (
                    <tr key={k} className={i % 2 ? "bg-slate-50/70" : "bg-white"}>
                      <th className="w-2/5 border-b border-slate-100 px-5 py-3.5 align-top font-bold text-ink-900">
                        {k}
                      </th>
                      <td className="border-b border-slate-100 px-5 py-3.5 align-top text-slate-600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Simple Process</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              How to Book in 4 Easy Steps
            </h2>

            <ol className="mt-6 space-y-4">
              {steps.map((s, i) => (
                <li key={s.t} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink-900">{s.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-3xl border border-brand-200 bg-white p-6 shadow-lg shadow-brand-100">
              <p className="text-sm font-semibold text-slate-500">HAV IgG Ab Test Price</p>
              <p className="mt-1 text-4xl font-extrabold text-brand-600">₹{TEST.price}/-</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {["No hidden or extra charges", "Free home sample collection", "Free report consultation"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <IconCheck className="h-4 w-4 text-emerald-600" /> {x}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={LAB.mobileHref}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
                >
                  <IconPhone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={LAB.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  <IconWhatsApp className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
