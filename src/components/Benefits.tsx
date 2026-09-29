import { BENEFITS } from "../data";
import { iconMap } from "./Icons";

export default function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Why It Matters</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          5 Key Benefits of the HAV IgG Ab Test
        </h2>
        <p className="mt-4 text-[16.5px] leading-relaxed text-slate-600">
          One small blood sample delivers clear answers about your Hepatitis A protection — here is what the HAV IgG
          Ab test does for you.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b, i) => {
          const Icon = iconMap[b.icon];
          return (
            <article
              key={b.title}
              className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100 ${
                i === 4 ? "lg:col-span-1 md:col-span-2 lg:col-start-2" : ""
              }`}
            >
              <span className="absolute -right-4 -top-5 text-7xl font-black text-brand-50">{i + 1}</span>
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-200">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 text-lg font-extrabold text-ink-900">{b.title}</h3>
              <p className="relative mt-2 text-[15px] leading-relaxed text-slate-600">{b.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
