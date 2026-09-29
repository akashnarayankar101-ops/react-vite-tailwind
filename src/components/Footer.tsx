import { LAB } from "../data";
import { IconDrop, IconPhone, IconPin, IconClock } from "./Icons";

const related = [
  "HAV IgM Ab Test",
  "Liver Function Test (LFT)",
  "HBsAg Test",
  "Anti HCV Test",
  "Bilirubin Total & Direct",
  "SGPT / SGOT",
  "Hepatitis Profile",
  "Complete Blood Count (CBC)",
];

const areas = [
  "Dharavi", "Sion", "Matunga", "Mahim", "Wadala", "Kurla", "Bandra East", "Antop Hill", "Chunabhatti", "Dadar",
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                <IconDrop className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-lg font-extrabold text-white">{LAB.name}</span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                  {LAB.tagline}
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              A trusted blood collection centre in Dharavi – Sion, Mumbai offering accurate pathology testing,
              affordable pricing and free home sample collection, every day of the week.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <IconPin className="h-5 w-5 shrink-0 text-brand-400" /> {LAB.address}
              </li>
              <li className="flex gap-3">
                <IconClock className="h-5 w-5 shrink-0 text-brand-400" /> {LAB.timing}
              </li>
              <li className="flex gap-3">
                <IconPhone className="h-5 w-5 shrink-0 text-brand-400" />
                <a href={LAB.mobileHref} className="font-bold text-white hover:text-brand-300">
                  {LAB.mobile}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Related Tests</h4>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
              {related.map((r) => (
                <li key={r} className="transition hover:text-brand-300">{r}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Areas We Serve</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span key={a} className="rounded-full bg-white/10 px-3 py-1 text-xs">{a}</span>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-slate-400">
              Disclaimer: Test information on this page is for general awareness only and is not a substitute for
              professional medical advice. Always consult a qualified doctor to interpret your HAV IgG Ab report.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {LAB.name}, {LAB.address}. All rights reserved.</p>
          <p>HAV IgG Ab Test · Hepatitis A IgG Antibody · Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
