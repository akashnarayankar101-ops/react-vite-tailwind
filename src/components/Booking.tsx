import { useState } from "react";
import { LAB, TEST } from "../data";
import { IconCheck, IconPhone, IconPin, IconClock, IconWhatsApp } from "./Icons";

export default function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", area: "", mode: "Home Collection", note: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const msg = `HAV IgG Ab Test Booking%0A---------------------%0AName: ${form.name}%0AMobile: ${form.phone}%0AArea: ${form.area}%0APreference: ${form.mode}%0ANote: ${form.note}`;
    window.open(`https://wa.me/91${LAB.mobile}?text=${msg}`, "_blank");
  };

  const input =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100";

  return (
    <section id="book" className="bg-gradient-to-br from-brand-50 via-white to-slate-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Book Your Test</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Get Your HAV IgG Ab Test Done at {LAB.name}
          </h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-slate-600">
            Walk into our collection centre at {LAB.address}, or request a free home visit. Our phlebotomists serve
            Dharavi, Sion, Matunga, Mahim, Wadala, Kurla and surrounding areas — every day from 8 AM to 11 PM.
          </p>

          <div className="mt-7 space-y-4">
            {[
              { icon: <IconPin className="h-5 w-5" />, k: "Address", v: LAB.address },
              { icon: <IconClock className="h-5 w-5" />, k: "Timing", v: LAB.timing },
              { icon: <IconPhone className="h-5 w-5" />, k: "Mobile", v: LAB.mobile },
            ].map((c) => (
              <div key={c.k} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  {c.icon}
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{c.k}</p>
                  <p className="text-base font-bold text-ink-900">{c.v}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-ink-900 p-6 text-white">
            <p className="text-sm text-slate-300">HAV IgG Ab Test at</p>
            <p className="text-3xl font-extrabold text-brand-300">₹{TEST.price}/-</p>
            <p className="mt-2 text-sm text-slate-300">
              Reports same day · No fasting · Free home collection · Digital + printed report
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70">
          <h3 className="text-xl font-extrabold text-ink-900">Request a Callback / Home Collection</h3>
          <p className="mt-1 text-sm text-slate-500">
            Fill the form and we will confirm your HAV IgG Ab appointment on WhatsApp.
          </p>

          {sent && (
            <p className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
              <IconCheck className="h-4 w-4" /> Request ready! Continue in WhatsApp to confirm your booking.
            </p>
          )}

          <form onSubmit={submit} className="mt-5 space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
              <input
                required
                className={input}
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">Mobile</label>
                <input
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                  className={input}
                  placeholder="10-digit mobile"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">Area</label>
                <input
                  className={input}
                  placeholder="e.g. Dharavi, Sion"
                  value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
                Preference
              </label>
              <select
                className={input}
                value={form.mode}
                onChange={(e) => setForm({ ...form, mode: e.target.value })}
              >
                <option>Home Collection</option>
                <option>Visit the Centre</option>
                <option>Need a Callback First</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
                Message (optional)
              </label>
              <textarea
                rows={3}
                className={input}
                placeholder="Preferred time, doctor's advice, other tests needed…"
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-200 transition hover:bg-brand-700"
            >
              <IconWhatsApp className="h-5 w-5" /> Book HAV IgG Ab Test — ₹{TEST.price}
            </button>
            <p className="text-center text-xs text-slate-400">
              Or call us directly at{" "}
              <a href={LAB.mobileHref} className="font-bold text-brand-600">
                {LAB.mobile}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
