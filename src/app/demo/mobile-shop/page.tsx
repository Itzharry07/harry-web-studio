import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  BatteryCharging,
  Cable,
  Clock,
  Droplets,
  Headphones,
  MapPin,
  MessageCircle,
  Phone,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { site } from "@/content/site";

/**
 * DEMO SITE: a fictional mobile shop, built to show local shop owners what their
 * website could look like. The shop, address, phone number and prices are made up
 * and the page says so in a banner at the top. Do not present this as a client project.
 */

const shop = {
  name: "NovaCell Mobiles",
  city: "Your City",
  address: "Shop 12, Main Road, Your City",
  // The shop is fictional, so WhatsApp buttons message Harry Web Studio, tagged as coming from the demo.
  // On a real client site this is the shop's own WhatsApp number.
  whatsapp: (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`[Mobile shop demo] ${text}`)}`,
};

export const metadata: Metadata = {
  title: "Demo: Mobile shop website",
  description: `A demo website for a mobile phone shop, designed and built by ${site.name}. Fictional shop, sample prices.`,
  alternates: { canonical: "/demo/mobile-shop" },
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const brands = ["Apple", "Samsung", "OnePlus", "Xiaomi", "vivo", "OPPO", "realme", "Motorola", "Nothing", "Google Pixel"];

const phones = [
  { tag: "Best value", name: "Budget 5G pick", spec: "6 GB · 128 GB · 5000 mAh", price: "₹11,999", hue: "#2f6bff" },
  { tag: "Camera", name: "Camera flagship", spec: "12 GB · 256 GB · 50 MP", price: "₹54,999", hue: "#ff7a1a" },
  { tag: "Gaming", name: "Performance phone", spec: "12 GB · 256 GB · 120 Hz", price: "₹32,999", hue: "#12b886" },
  { tag: "Compact", name: "Everyday all-rounder", spec: "8 GB · 128 GB · AMOLED", price: "₹18,499", hue: "#b14cff" },
];

const offers = [
  { icon: RefreshCcw, title: "Exchange your old phone", body: "Bring your old phone and get its value off your new one, checked in front of you." },
  { icon: Sparkles, title: "Free screen guard", body: "Tempered glass fitted free with every new smartphone." },
  { icon: Zap, title: "Easy EMI options", body: "Ask about EMI on cards and finance partners at the counter." },
];

const repairs = [
  { icon: Smartphone, name: "Screen replacement" },
  { icon: BatteryCharging, name: "Battery replacement" },
  { icon: Cable, name: "Charging port" },
  { icon: Droplets, name: "Water damage" },
  { icon: Headphones, name: "Speaker & mic" },
  { icon: Wrench, name: "Software & data" },
];

const accessories = ["Chargers & cables", "Earbuds", "Back covers", "Power banks", "Smartwatches", "Memory cards"];

const hours = [
  ["Monday – Saturday", "10:00 am – 9:30 pm"],
  ["Sunday", "11:00 am – 8:00 pm"],
];

function WhatsAppButton({ text, children, className = "" }: { text: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={shop.whatsapp(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3 font-semibold text-[#062b16] transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <MessageCircle className="size-5" aria-hidden />
      {children}
    </a>
  );
}

function PhoneArt({ hue, className = "" }: { hue: string; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/18] rounded-[1.6rem] border-[5px] border-[#0b1530] bg-[#0b1530] shadow-xl ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-[1.25rem]"
        style={{ background: `linear-gradient(160deg, ${hue} 0%, #0b1530 85%)` }}
      >
        <div className="absolute left-1/2 top-2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/60" />
        <div className="absolute -right-6 top-10 size-24 rounded-full bg-white/20 blur-xl" />
        <div className="absolute inset-x-3 bottom-4 space-y-1.5">
          <div className="h-1.5 w-2/3 rounded-full bg-white/70" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}

export default function MobileShopDemo() {
  return (
    <div className="bg-[#f4f6fb] text-[#0b1530]">
      {/* Honest demo banner */}
      <div className="sticky top-0 z-50 bg-[#0b1530] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-xs sm:text-sm">
          <p>
            <span className="mr-2 rounded bg-[#ffd23f] px-1.5 py-0.5 font-bold text-[#0b1530]">DEMO</span>
            Sample website by {site.name}. Fictional shop, sample prices. WhatsApp buttons message {site.name}.
          </p>
          <Link href="/#work" className="inline-flex items-center gap-1 font-medium text-[#ffd23f] hover:underline">
            <ArrowLeft className="size-3.5" aria-hidden /> Back to {site.name}
          </Link>
        </div>
      </div>

      {/* Shop header */}
      <header className="border-b border-[#0b1530]/10 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-[#2f6bff] text-white">
              <Smartphone className="size-5" aria-hidden />
            </span>
            <span className="text-lg font-extrabold tracking-tight">{shop.name}</span>
          </div>
          <nav aria-label="Shop" className="hidden gap-6 text-sm font-medium text-[#0b1530]/70 md:flex">
            <a href="#phones" className="hover:text-[#2f6bff]">Phones</a>
            <a href="#offers" className="hover:text-[#2f6bff]">Offers</a>
            <a href="#repairs" className="hover:text-[#2f6bff]">Repairs</a>
            <a href="#visit" className="hover:text-[#2f6bff]">Visit us</a>
          </nav>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 rounded-full border border-[#0b1530]/15 px-4 py-2 text-sm font-semibold hover:border-[#2f6bff] hover:text-[#2f6bff]"
          >
            <Phone className="size-4" aria-hidden /> <span className="hidden sm:inline">Call the shop</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,#dbe6ff,transparent_60%)]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="build inline-flex items-center gap-2 rounded-full bg-[#ffd23f] px-3 py-1 text-xs font-bold uppercase tracking-wide" style={d(0)}>
                <BadgeCheck className="size-4" aria-hidden /> Genuine phones · Bill & warranty
              </p>
              <h1 className="build mt-5 text-[clamp(2.4rem,7vw,4.2rem)] font-extrabold leading-[1.02] tracking-[-0.035em]" style={d(80)}>
                New phones, genuine accessories, <span className="text-[#2f6bff]">repairs while you wait.</span>
              </h1>
              <p className="build mt-5 max-w-lg text-lg leading-relaxed text-[#0b1530]/70" style={d(160)}>
                All the top brands under one roof in {shop.city}. Check the latest prices on WhatsApp before you
                visit, or drop in for a quick repair.
              </p>
              <div className="build mt-8 flex flex-col gap-3 sm:flex-row" style={d(240)}>
                <WhatsAppButton text={`Hi ${shop.name}, I'd like to know the latest phone prices.`}>
                  Check prices on WhatsApp
                </WhatsAppButton>
                <a
                  href="#repairs"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0b1530] px-5 py-3 font-semibold transition-colors hover:bg-[#0b1530] hover:text-white"
                >
                  <Wrench className="size-5" aria-hidden /> Book a repair
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-md items-end justify-center gap-4 py-4" aria-hidden>
              <PhoneArt hue="#ff7a1a" className="build float w-[30%] -rotate-6" />
              <PhoneArt hue="#2f6bff" className="build float w-[38%]" />
              <PhoneArt hue="#12b886" className="build float w-[30%] rotate-6" />
              <div className="build absolute -bottom-2 left-2 rounded-2xl bg-white px-4 py-3 shadow-lg" style={d(600)}>
                <p className="text-xs font-semibold text-[#0b1530]/60">Today&apos;s offer</p>
                <p className="font-extrabold">Free screen guard</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section aria-label="Brands we sell" className="border-y border-[#0b1530]/10 bg-white py-5">
          <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-3 px-4 text-lg font-bold text-[#0b1530]/45">
            {brands.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        {/* Phones */}
        <section id="phones" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-reveal>Popular this week</h2>
              <p className="mt-2 text-[#0b1530]/65" data-reveal style={d(80)}>
                Sample prices. Ask on WhatsApp for today&apos;s price and stock.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {phones.map((p, i) => (
              <article
                key={p.name}
                data-reveal
                style={d(i * 90)}
                className="group flex flex-col rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#0b1530]/5 transition-shadow hover:shadow-xl"
              >
                <div className="relative flex justify-center rounded-2xl bg-[#f4f6fb] py-6">
                  <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-bold" style={{ color: p.hue }}>
                    {p.tag}
                  </span>
                  <PhoneArt hue={p.hue} className="w-[38%] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-2" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-[#0b1530]/60">{p.spec}</p>
                <p className="mt-4 text-2xl font-extrabold">
                  {p.price} <span className="align-middle text-xs font-medium text-[#0b1530]/50">sample</span>
                </p>
                <WhatsAppButton text={`Hi, is the ${p.name} (${p.spec}) available today?`} className="mt-4 w-full text-sm">
                  Ask on WhatsApp
                </WhatsAppButton>
              </article>
            ))}
          </div>
        </section>

        {/* Offers */}
        <section id="offers" className="scroll-mt-24 bg-[#2f6bff] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-reveal>Offers in store</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {offers.map((o, i) => (
                <div key={o.title} data-reveal style={d(i * 90)} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 transition-colors hover:bg-white/15">
                  <o.icon className="size-8 text-[#ffd23f]" aria-hidden />
                  <h3 className="mt-4 text-xl font-bold">{o.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/80">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Repairs */}
        <section id="repairs" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-reveal>Repairs, done right here</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#0b1530]/65" data-reveal style={d(80)}>
                Many common repairs are done the same day. Send a photo of the problem on WhatsApp and get a quote
                before you come in.
              </p>
              <div data-reveal style={d(160)}>
                <WhatsAppButton text="Hi, I need a repair quote. My phone model is: " className="mt-7">
                  Get a repair quote
                </WhatsAppButton>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {repairs.map((r, i) => (
                <li
                  key={r.name}
                  data-reveal
                  style={d(i * 60)}
                  className="flex flex-col items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-[#0b1530]/5 transition-transform hover:-translate-y-1"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-[#ffd23f]">
                    <r.icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-semibold leading-tight">{r.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Accessories + trust */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
            <div data-reveal>
              <h2 className="text-3xl font-extrabold tracking-tight">Accessories</h2>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {accessories.map((a) => (
                  <li key={a} className="rounded-full bg-[#f4f6fb] px-4 py-2 font-medium">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal style={d(100)} className="rounded-3xl bg-[#0b1530] p-7 text-white">
              <h2 className="text-2xl font-extrabold tracking-tight">Why buy here</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Genuine products with a proper bill",
                  "Help with warranty claims",
                  "Data transfer to your new phone",
                  "A local shop you can always come back to",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <ShieldCheck className="size-5 shrink-0 text-[#ffd23f]" aria-hidden /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <div data-reveal className="rounded-3xl bg-white p-7 ring-1 ring-[#0b1530]/5">
              <h2 className="text-3xl font-extrabold tracking-tight">Visit the shop</h2>
              <p className="mt-4 flex gap-3 text-lg">
                <MapPin className="mt-1 size-5 shrink-0 text-[#2f6bff]" aria-hidden /> {shop.address}
              </p>
              <div className="mt-6">
                <p className="flex items-center gap-2 font-bold">
                  <Clock className="size-5 text-[#2f6bff]" aria-hidden /> Opening hours
                </p>
                <dl className="mt-3 divide-y divide-[#0b1530]/10">
                  {hours.map(([day, time]) => (
                    <div key={day} className="flex justify-between py-2.5">
                      <dt className="text-[#0b1530]/65">{day}</dt>
                      <dd className="font-semibold">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton text={`Hi ${shop.name}, are you open now?`}>Message us</WhatsAppButton>
                <span className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0b1530] px-5 py-3 font-semibold">
                  <Phone className="size-5" aria-hidden /> Shop number here
                </span>
              </div>
            </div>
            <div
              data-reveal
              style={d(100)}
              className="relative min-h-[280px] overflow-hidden rounded-3xl bg-[#dfe7f5]"
              aria-label="Map placeholder"
            >
              {/* Stylised map: a real site embeds the shop's Google Maps location here */}
              <svg viewBox="0 0 400 300" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
                <path d="M0 120 H400 M0 210 H400 M120 0 V300 M270 0 V300" stroke="#fff" strokeWidth="14" />
                <path d="M0 40 L400 260" stroke="#fff" strokeWidth="8" />
                <rect x="140" y="140" width="110" height="55" rx="8" fill="#c9d6ee" />
                <rect x="20" y="20" width="80" height="80" rx="8" fill="#c7e8d3" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                <div className="float flex flex-col items-center">
                  <span className="rounded-full bg-[#0b1530] px-3 py-1 text-xs font-bold text-white shadow">{shop.name}</span>
                  <MapPin className="size-10 fill-[#2f6bff] text-white" aria-hidden />
                </div>
              </div>
              <p className="absolute inset-x-0 bottom-0 bg-white/80 px-4 py-2 text-center text-xs font-medium text-[#0b1530]/70">
                The real site shows your Google Maps location with one-tap directions
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1530] py-10 text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-bold text-white">{shop.name}</span> is a fictional shop used for this demo.
          </p>
          <Link href="/" className="font-semibold text-[#ffd23f] hover:underline">
            Want a site like this? {site.name} →
          </Link>
        </div>
      </footer>

      {/* Floating WhatsApp button (mobile) */}
      <a
        href={shop.whatsapp(`Hi ${shop.name}, I have a question.`)}
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
