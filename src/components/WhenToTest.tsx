import { WHEN_TO_TEST, LAB } from "../data";

export default function WhenToTest() {
  return (
    <section id="when" className="bg-ink-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">Doctor Recommended</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            When Should You Get a HAV IgG Ab Test?
          </h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-slate-300">
            A HAV IgG Ab test is advised whenever you or your doctor need to know your Hepatitis A immunity status.
            Here are the most common situations in which this test is recommended at {LAB.name}, {LAB.address}.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHEN_TO_TEST.map((w, i) => (
            <article
              key={w.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-brand-400/50 hover:bg-white/10"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-sm font-extrabold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-bold leading-snug text-white">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{w.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-brand-400/30 bg-brand-600/15 p-6">
          <h3 className="text-lg font-bold text-white">Symptoms that should prompt Hepatitis A testing</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Yellowing of eyes or skin",
              "Dark yellow urine",
              "Persistent nausea & vomiting",
              "Loss of appetite",
              "Pain below right ribs",
              "Unexplained fatigue",
              "Low-grade fever",
              "Pale / clay-coloured stool",
            ].map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[13px] font-medium text-slate-100"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
