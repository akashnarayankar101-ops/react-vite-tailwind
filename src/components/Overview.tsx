import { TEST } from "../data";
import { IconCheck } from "./Icons";

const results = [
  {
    label: "Reactive / Positive",
    color: "border-emerald-200 bg-emerald-50",
    dot: "bg-emerald-500",
    text: "Protective IgG antibodies detected. You have had Hepatitis A in the past or have been successfully vaccinated — you are considered immune for life.",
  },
  {
    label: "Non-Reactive / Negative",
    color: "border-amber-200 bg-amber-50",
    dot: "bg-amber-500",
    text: "No IgG antibodies detected. You have never been exposed to Hepatitis A and are not protected. Vaccination is usually recommended by your doctor.",
  },
  {
    label: "Equivocal / Borderline",
    color: "border-slate-200 bg-slate-50",
    dot: "bg-slate-400",
    text: "Antibody level sits at the cut-off. A repeat HAV IgG Ab test after 2–4 weeks, often along with HAV IgM, is advised for confirmation.",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Test Overview</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            What Is the HAV IgG Ab Test?
          </h2>

          <div className="mt-5 space-y-4 text-[16.5px] leading-relaxed text-slate-600">
            <p>
              The <strong className="text-ink-900">HAV IgG Ab test</strong> is a simple blood investigation that looks
              for <strong className="text-ink-900">Immunoglobulin G (IgG) antibodies against the Hepatitis A virus</strong>.
              Hepatitis A is a highly contagious liver infection that spreads through contaminated food, water and
              poor sanitation — a very real concern in densely populated parts of Mumbai.
            </p>
            <p>
              When your immune system encounters the Hepatitis A virus — either through natural infection or through
              the Hepatitis A vaccine — it produces IgG antibodies. Unlike IgM antibodies, which appear early and fade
              within a few months, <strong className="text-ink-900">HAV IgG antibodies remain in your bloodstream for
              life</strong>. That makes the HAV IgG Ab test the standard way to prove Hepatitis A immunity.
            </p>
            <p>
              At <strong className="text-ink-900">Path Cell Lab, Dharavi – Sion, Mumbai</strong>, the HAV IgG Ab test
              is performed on a small serum sample using advanced CLIA / ELISA technology. No fasting is needed, the
              sample takes under two minutes to collect, and your report is usually delivered the same day on WhatsApp
              or email.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Confirms past Hepatitis A infection",
              "Verifies Hepatitis A vaccine response",
              "Required for many job & visa health checks",
              "Helps decide if vaccination is needed",
              "Screens close contacts during outbreaks",
              "Advised for chronic liver disease patients",
            ].map((t) => (
              <p key={t} className="flex items-start gap-2 rounded-xl bg-brand-50/70 px-4 py-3 text-sm font-medium text-ink-700">
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /> {t}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
            <h3 className="text-lg font-extrabold text-ink-900">Understanding Your Result</h3>
            <div className="mt-4 space-y-3">
              {results.map((r) => (
                <div key={r.label} className={`rounded-2xl border p-4 ${r.color}`}>
                  <p className="flex items-center gap-2 text-sm font-extrabold text-ink-900">
                    <span className={`h-2.5 w-2.5 rounded-full ${r.dot}`} /> {r.label}
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white shadow-xl shadow-brand-200">
            <h3 className="text-lg font-extrabold">HAV IgG vs HAV IgM</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-50">
              <strong>IgM</strong> = recent / active Hepatitis A infection (appears in 2–4 weeks, disappears in 3–6
              months). <strong>IgG</strong> = past infection or vaccination, giving lifelong immunity. Doctors often
              order both together when jaundice is present.
            </p>
            <p className="mt-4 rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold">
              Method: {TEST.method}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
