import { ArrowRight, MousePointer2, Smartphone, Gauge, Search } from "lucide-react";
import { site } from "@/content/site";
import { Accent, delay } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative isolate pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Decorative background, clipped so it never widens the page on phones */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -top-40 right-[-10%] size-[520px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <p
            className="build inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-muted"
            style={delay(0)}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Taking on new projects · Based in {site.location}
          </p>

          <h1
            className="build mt-6 text-[clamp(2.6rem,7vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-balance"
            style={delay(80)}
          >
            Websites that make your business look <Accent>as good as it is.</Accent>
          </h1>

          <p className="build mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty" style={delay(160)}>
            I design and build fast, mobile-first websites, from a one-page site for a local shop to a
            full web app. You work directly with the person building it, get a clear written quote,
            and have support after launch.
          </p>

          <div className="build mt-9 flex flex-col gap-3 sm:flex-row" style={delay(240)}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-paper shadow-[0_8px_24px_-8px_rgb(21_20_15/0.5)] transition-transform hover:-translate-y-0.5"
            >
              Get a free quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-card px-6 py-3.5 font-medium transition-colors hover:border-ink/40"
            >
              See my work
            </a>
          </div>

          <ul className="build mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted" style={delay(320)}>
            <li className="flex items-center gap-2">
              <Smartphone className="size-4 text-ink" aria-hidden /> Mobile-first
            </li>
            <li className="flex items-center gap-2">
              <Gauge className="size-4 text-ink" aria-hidden /> Built to load fast
            </li>
            <li className="flex items-center gap-2">
              <Search className="size-4 text-ink" aria-hidden /> SEO basics included
            </li>
          </ul>
        </div>

        <BrowserMock />
      </div>
    </section>
  );
}

/** Illustration: a website "building itself" in a browser window. */
function BrowserMock() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]" aria-hidden>
      <div
        className="build overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-[0_40px_80px_-30px_rgb(21_20_15/0.35)]"
        style={delay(200)}
      >
        <div className="flex items-center gap-2 border-b border-line bg-paper-2 px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff6159]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex-1 truncate rounded-md bg-card px-3 py-1 font-mono text-[11px] text-muted">
            yourbusiness.in
          </div>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <div className="build flex items-center justify-between" style={delay(450)}>
            <div className="h-3 w-20 rounded-full bg-ink" />
            <div className="flex gap-2">
              <div className="h-2 w-8 rounded-full bg-line" />
              <div className="h-2 w-8 rounded-full bg-line" />
              <div className="h-5 w-14 rounded-full bg-accent" />
            </div>
          </div>

          <div className="grid grid-cols-[1.2fr_1fr] gap-4">
            <div className="build space-y-2.5 pt-2" style={delay(600)}>
              <div className="h-4 w-full rounded-md bg-ink" />
              <div className="h-4 w-4/5 rounded-md bg-ink" />
              <div className="h-2 w-full rounded-full bg-line" />
              <div className="h-2 w-11/12 rounded-full bg-line" />
              <div className="h-2 w-2/3 rounded-full bg-line" />
              <div className="flex gap-2 pt-2">
                <div className="h-7 w-20 rounded-full bg-ink" />
                <div className="h-7 w-16 rounded-full border border-line" />
              </div>
            </div>
            <div
              className="build aspect-[4/5] rounded-xl bg-[linear-gradient(135deg,var(--accent)_0%,#ffb088_55%,var(--paper-2)_100%)]"
              style={delay(750)}
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[900, 1000, 1100].map((d) => (
              <div key={d} className="build space-y-2 rounded-xl border border-line p-3" style={delay(d)}>
                <div className="size-5 rounded-md bg-accent-soft" />
                <div className="h-2 w-3/4 rounded-full bg-ink/80" />
                <div className="h-1.5 w-full rounded-full bg-line" />
                <div className="h-1.5 w-2/3 rounded-full bg-line" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cursor absolute right-10 top-28 hidden sm:block">
        <MousePointer2 className="size-6 fill-ink text-paper drop-shadow" />
      </div>

      <div
        className="float absolute -left-3 bottom-10 hidden rounded-xl border border-line bg-card px-3.5 py-2.5 shadow-lg sm:block"
        style={delay(0)}
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Mobile</p>
        <p className="text-sm font-semibold">Looks right on every screen</p>
      </div>
      <div
        className="float absolute -right-3 -top-4 hidden rounded-xl bg-ink px-3.5 py-2.5 text-paper shadow-lg sm:block"
        style={delay(1500)}
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-night-muted">Live preview</p>
        <p className="text-sm font-semibold">Watch it come together</p>
      </div>
    </div>
  );
}
