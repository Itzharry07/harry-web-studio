"use client";

import { useState, type FormEvent } from "react";
import { CalendarCheck, MessageCircle } from "lucide-react";

/**
 * Demo appointment request: opens WhatsApp with the details filled in.
 * On a real clinic site, `whatsapp` is the clinic's own number.
 */
export function AppointmentForm({ whatsapp, clinic }: { whatsapp: string; clinic: string }) {
  const [waUrl, setWaUrl] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = [
      `[Clinic demo] Appointment request for ${clinic}`,
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Department: ${d.get("dept")}`,
      `Preferred day: ${d.get("day")} (${d.get("slot")})`,
      d.get("note") ? `Note: ${d.get("note")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;
    setWaUrl(url);
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url;
  }

  const field =
    "w-full rounded-xl border border-[#0f3d3a]/15 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#2f9e8f] focus:ring-4 focus:ring-[#2f9e8f]/15";

  if (waUrl) {
    return (
      <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#0f3d3a]/10" role="status">
        <CalendarCheck className="size-10 text-[#2f9e8f]" aria-hidden />
        <h3 className="mt-4 text-2xl font-bold">Almost done: tap Send in WhatsApp</h3>
        <p className="mt-2 leading-relaxed text-[#0f3d3a]/70">
          Your request is ready in WhatsApp. Press Send and the clinic confirms your slot.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 font-semibold text-[#062b16]"
          >
            <MessageCircle className="size-4" aria-hidden /> Open WhatsApp again
          </a>
          <button
            type="button"
            onClick={() => setWaUrl(null)}
            className="rounded-full border border-[#0f3d3a]/20 px-5 py-3 font-semibold"
          >
            Edit request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#0f3d3a]/10 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">Patient name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Full name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">Phone</span>
          <input name="phone" required type="tel" autoComplete="tel" className={field} placeholder="10-digit mobile number" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">Department</span>
          <select name="dept" className={field} defaultValue="General consultation">
            <option>General consultation</option>
            <option>Child health</option>
            <option>Women&apos;s health</option>
            <option>Diabetes &amp; BP check-up</option>
            <option>Lab tests</option>
            <option>Vaccination</option>
          </select>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">Day</span>
            <select name="day" className={field} defaultValue="Today">
              <option>Today</option>
              <option>Tomorrow</option>
              <option>This week</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">Time</span>
            <select name="slot" className={field} defaultValue="Morning">
              <option>Morning</option>
              <option>Evening</option>
            </select>
          </label>
        </div>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold">
            Note <span className="font-normal text-[#0f3d3a]/55">(optional)</span>
          </span>
          <input name="note" className={field} placeholder="e.g. follow-up visit, first visit" />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f3d3a] px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        <CalendarCheck className="size-5" aria-hidden /> Request appointment on WhatsApp
      </button>
      <p className="mt-3 text-xs text-[#0f3d3a]/55">
        Requests are confirmed by the clinic. For emergencies, call 112.
      </p>
    </form>
  );
}
