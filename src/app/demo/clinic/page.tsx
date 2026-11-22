import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowLeft,
  Baby,
  CalendarCheck,
  Clock,
  FlaskConical,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  ShieldCheck,
  Stethoscope,
  Syringe,
  UserRound,
} from "lucide-react";
import { site } from "@/content/site";
import { AppointmentForm } from "./appointment-form";

/**
 * DEMO SITE: a fictional family clinic, built to show clinics what their website could look like.
 * The clinic, doctors, address and timings are made up, and a banner at the top says so.
 * Do not present this as a client project.
 */

const clinic = {
  name: "CareWell Family Clinic",
  address: "1st Floor, Lakeview Complex, Main Road, Your City",
  wa: (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`[Clinic demo] ${text}`)}`,
};

export const metadata: Metadata = {
  title: "Demo: Clinic website",
  description: `A demo website for a family clinic, designed and built by ${site.name}. Fictional clinic and doctors.`,
  alternates: { canonical: "/demo/clinic" },
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const services = [
  { icon: Stethoscope, name: "General consultation", body: "Fever, infections, aches and everyday health concerns for all ages." },
  { icon: Baby, name: "Child health", body: "Check-ups, growth monitoring and advice for babies and children." },
  { icon: HeartPulse, name: "Diabetes & BP clinic", body: "Regular check-ups and follow-ups to keep sugar and BP on track." },
  { icon: UserRound, name: "Women's health", body: "Consultations in a private, comfortable setting." },
  { icon: FlaskConical, name: "Lab tests & ECG", body: "Common blood tests and ECG at the clinic; reports shared on WhatsApp." },
  { icon: Syringe, name: "Vaccinations", body: "Child and adult vaccinations as per schedule." },
];

const doctors = [
  { initials: "AR", name: "Dr. A. Rao", role: "General Physician", note: "Morning OPD" },
  { initials: "SM", name: "Dr. S. Mehta", role: "Paediatrician", note: "Evening OPD" },
];

const timings = [
  ["Morning OPD", "9:00 am – 1:00 pm", "Mon – Sat"],
  ["Evening OPD", "5:00 pm – 9:00 pm", "Mon – Sat"],
  ["Sunday", "10:00 am – 1:00 pm", "Morning only"],
];

const faqs = [
  { q: "Do I need an appointment?", a: "Walk-ins are welcome, but booking on WhatsApp helps you skip the wait." },
  { q: "Can I get my lab reports on WhatsApp?", a: "Yes. Reports are shared on your registered WhatsApp number once ready." },
  { q: "Is there parking?", a: "Two-wheeler parking is available in front of the complex." },
  { q: "What should I bring for my first visit?", a: "Any previous prescriptions, reports and a list of medicines you take." },
];

export default function ClinicDemo() {
  return (
    <div className="bg-[#f5faf9] text-[#0f3d3a]">
      {/* Honest demo banner */}
      <div className="sticky top-0 z-50 bg-[#0f3d3a] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-xs sm:text-sm">
          <p>
            <span className="mr-2 rounded bg-[#ffcf70] px-1.5 py-0.5 font-bold text-[#0f3d3a]">DEMO</span>
            Sample website by {site.name}. Fictional clinic and doctors. WhatsApp buttons message {site.name}.
          </p>
          <Link href="/#work" className="inline-flex items-center gap-1 font-medium text-[#ffcf70] hover:underline">
            <ArrowLeft className="size-3.5" aria-hidden /> Back to {site.name}
          </Link>
        </div>
      </div>

      {/* Clinic header */}
      <header className="border-b border-[#0f3d3a]/10 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full bg-[#2f9e8f] text-white">
              <Plus className="size-5" strokeWidth={3} aria-hidden />
            </span>
            <span className="text-lg font-bold tracking-tight">{clinic.name}</span>
          </div>
          <nav aria-label="Clinic" className="hidden gap-6 text-sm font-medium text-[#0f3d3a]/70 md:flex">
            <a href="#services" className="hover:text-[#2f9e8f]">Services</a>
            <a href="#doctors" className="hover:text-[#2f9e8f]">Doctors</a>
            <a href="#timings" className="hover:text-[#2f9e8f]">Timings</a>
            <a href="#book" className="hover:text-[#2f9e8f]">Book</a>
          </nav>
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-[#2f9e8f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#268577]"
          >
            <CalendarCheck className="size-4" aria-hidden /> Book
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="absolute -right-40 -top-40 size-[620px] rounded-full bg-[radial-gradient(circle,rgb(47_158_143/0.18),transparent_65%)]" />
          </div>
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="build inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#1d7468] ring-1 ring-[#2f9e8f]/25" style={d(0)}>
                <ShieldCheck className="size-4" aria-hidden /> Family doctors · Lab tests · Vaccinations
              </p>
              <h1 className="build mt-5 text-[clamp(2.3rem,6.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]" style={d(80)}>
                Caring for your whole family, <span className="text-[#1d7468]">close to home.</span>
              </h1>
              <p className="build mt-5 max-w-lg text-lg leading-relaxed text-[#0f3d3a]/70" style={d(160)}>
                Book an appointment on WhatsApp in under a minute, check today&apos;s timings and get your lab reports on
                your phone.
              </p>
              <div className="build mt-8 flex flex-col gap-3 sm:flex-row" style={d(240)}>
                <a
                  href="#book"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f3d3a] px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <CalendarCheck className="size-5" aria-hidden /> Book an appointment
                </a>
                <a
                  href={clinic.wa("Hi, I have a question about the clinic timings.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-3.5 font-semibold text-[#062b16] transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="size-5" aria-hidden /> Ask on WhatsApp
                </a>
              </div>
            </div>

            {/* Illustration: appointment card */}
            <div className="build relative mx-auto w-full max-w-sm" style={d(200)} aria-hidden>
              <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_60px_-30px_rgb(15_61_58/0.45)] ring-1 ring-[#0f3d3a]/5">
                <div className="flex items-center gap-3">
                  <div className="grid size-12 place-items-center rounded-full bg-[#e3f3f0] font-bold text-[#1d7468]">AR</div>
                  <div>
                    <p className="font-bold">Dr. A. Rao</p>
                    <p className="text-sm text-[#0f3d3a]/75">General Physician</p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-sm">
                  {["9:30", "10:00", "10:30", "11:00", "11:30", "12:00"].map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-xl py-2 font-semibold ${i === 2 ? "bg-[#1d7468] text-white" : "bg-[#f5faf9] text-[#0f3d3a]/70"}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#0f3d3a] px-4 py-3 text-white">
                  <span className="text-sm">Today · 10:30 am</span>
                  <span className="text-sm font-semibold text-[#ffcf70]">Requested ✓</span>
                </div>
              </div>
              <div className="float absolute -bottom-16 left-4 rounded-2xl bg-white px-4 py-2.5 shadow-lg ring-1 ring-[#0f3d3a]/5">
                <p className="text-xs text-[#0f3d3a]/75">Reports</p>
                <p className="text-sm font-bold">Sent on WhatsApp</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick info strip */}
        <section aria-label="Quick information" className="border-y border-[#0f3d3a]/10 bg-white">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-5 sm:grid-cols-3">
            <p className="flex items-center gap-3"><Clock className="size-5 text-[#2f9e8f]" aria-hidden /> Open today: 9 am – 1 pm, 5 – 9 pm</p>
            <p className="flex items-center gap-3"><MapPin className="size-5 text-[#2f9e8f]" aria-hidden /> Main Road, Your City</p>
            <p className="flex items-center gap-3"><Phone className="size-5 text-[#2f9e8f]" aria-hidden /> Emergency? Call 112</p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-reveal>How we can help</h2>
          <p className="mt-2 max-w-xl text-[#0f3d3a]/65" data-reveal style={d(80)}>
            Everyday care for every age, under one roof.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.name}
                data-reveal
                style={d((i % 3) * 80)}
                className="group rounded-3xl bg-white p-6 ring-1 ring-[#0f3d3a]/5 transition-shadow hover:shadow-[0_20px_40px_-24px_rgb(15_61_58/0.4)]"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-[#e3f3f0] text-[#2f9e8f] transition-colors group-hover:bg-[#2f9e8f] group-hover:text-white">
                  <s.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.name}</h3>
                <p className="mt-2 leading-relaxed text-[#0f3d3a]/65">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Doctors + timings */}
        <section className="bg-[#0f3d3a] py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
            <div id="doctors" className="scroll-mt-24">
              <h2 className="text-3xl font-bold tracking-tight" data-reveal>Our doctors</h2>
              <p className="mt-2 text-sm text-white/60" data-reveal>Sample profiles. A real site shows your doctors&apos; photos and qualifications.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {doctors.map((doc, i) => (
                  <div key={doc.name} data-reveal style={d(i * 100)} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                    <div className="grid size-16 place-items-center rounded-full bg-[#2f9e8f] text-xl font-bold">{doc.initials}</div>
                    <h3 className="mt-4 text-lg font-bold">{doc.name}</h3>
                    <p className="text-white/70">{doc.role}</p>
                    <p className="mt-3 inline-block rounded-full bg-[#ffcf70] px-3 py-1 text-xs font-bold text-[#0f3d3a]">{doc.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div id="timings" className="scroll-mt-24" data-reveal style={d(100)}>
              <h2 className="text-3xl font-bold tracking-tight">Clinic timings</h2>
              <dl className="mt-8 divide-y divide-white/10 rounded-3xl bg-white/5 px-6 ring-1 ring-white/10">
                {timings.map(([label, time, days]) => (
                  <div key={label} className="flex items-center justify-between gap-4 py-5">
                    <dt>
                      <p className="font-bold">{label}</p>
                      <p className="text-sm text-white/60">{days}</p>
                    </dt>
                    <dd className="text-right font-semibold text-[#ffcf70]">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="book" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-reveal>Book an appointment</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#0f3d3a]/65" data-reveal style={d(80)}>
                Fill in a few details and send the request on WhatsApp. The clinic replies to confirm your time.
              </p>
              <ul className="mt-6 space-y-3" data-reveal style={d(160)}>
                {["No app or login needed", "Choose morning or evening", "Get reminders on WhatsApp"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <ShieldCheck className="size-5 text-[#2f9e8f]" aria-hidden /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal style={d(120)}>
              <AppointmentForm whatsapp={site.whatsapp} clinic={clinic.name} />
            </div>
          </div>
        </section>

        {/* FAQ + location */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight" data-reveal>Common questions</h2>
              <div className="mt-6 divide-y divide-[#0f3d3a]/10 border-y border-[#0f3d3a]/10">
                {faqs.map((f) => (
                  <details key={f.q} className="group" data-reveal>
                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 font-semibold">
                      {f.q}
                      <Plus className="faq-icon size-5 shrink-0 text-[#2f9e8f] transition-transform" aria-hidden />
                    </summary>
                    <p className="pb-4 leading-relaxed text-[#0f3d3a]/70">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <div data-reveal style={d(100)}>
              <h2 className="text-3xl font-bold tracking-tight">Find us</h2>
              <p className="mt-4 flex gap-3 text-lg">
                <MapPin className="mt-1 size-5 shrink-0 text-[#2f9e8f]" aria-hidden /> {clinic.address}
              </p>
              <div className="relative mt-6 h-64 overflow-hidden rounded-3xl bg-[#dcebe8]" aria-hidden>
                <svg viewBox="0 0 400 260" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
                  <path d="M0 90 H400 M0 190 H400 M140 0 V260 M300 0 V260" stroke="#fff" strokeWidth="14" />
                  <path d="M0 250 L400 20" stroke="#fff" strokeWidth="8" />
                  <rect x="160" y="110" width="120" height="60" rx="10" fill="#c3e0da" />
                  <circle cx="60" cy="40" r="30" fill="#cfe9d6" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                  <div className="float flex flex-col items-center">
                    <span className="rounded-full bg-[#0f3d3a] px-3 py-1 text-xs font-bold text-white shadow">{clinic.name}</span>
                    <MapPin className="size-10 fill-[#2f9e8f] text-white" />
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-[#0f3d3a]/55">A real site shows your Google Maps location with one-tap directions.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0f3d3a] py-10 text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-bold text-white">{clinic.name}</span> is a fictional clinic used for this demo.
          </p>
          <Link href="/" className="font-semibold text-[#ffcf70] hover:underline">
            Want a site like this? {site.name} →
          </Link>
        </div>
      </footer>

      <a
        href={clinic.wa("Hi, I'd like to book an appointment.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-[#062b16] shadow-lg transition-transform hover:scale-105 md:hidden"
      >
        <MessageCircle className="size-7" aria-hidden />
      </a>
    </div>
  );
}
