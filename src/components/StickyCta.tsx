import { LAB, TEST } from "../data";
import { IconPhone, IconWhatsApp } from "./Icons";

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <div className="shrink-0">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">HAV IgG Ab</p>
          <p className="text-lg font-extrabold leading-none text-brand-600">₹{TEST.price}/-</p>
        </div>
        <a
          href={LAB.mobileHref}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-600 py-3 text-sm font-bold text-white"
        >
          <IconPhone className="h-4 w-4" /> Call
        </a>
        <a
          href={LAB.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white"
        >
          <IconWhatsApp className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
