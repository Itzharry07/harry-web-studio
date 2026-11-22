import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { demos, fundedEdge } from "@/content/content";
import { site } from "@/content/site";
import { Accent, SectionHeading, delay } from "./ui";

export function Work() {
  const { liveUrl, repoUrl } = site.fundedEdge;

  return (
    <section id="work" className="bg-night py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Work"
          title={
            <>
              Real work, <Accent>honestly</Accent> labelled.
            </>
          }
          intro="My featured project is a full SaaS product I designed and built end to end. Below it: live demo sites for fictional businesses, clearly labelled, built to show what I can make for businesses like yours."
        />

        {/* Featured case study */}
        <article
          data-reveal
          className="mt-14 grid overflow-hidden rounded-3xl border border-night-line bg-night-2 lg:grid-cols-[1fr_1.1fr]"
        >
          <div className="flex flex-col p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">Case study</span>
              <span className="rounded-full border border-night-line px-3 py-1 text-xs text-night-muted">
                {fundedEdge.kind}
              </span>
            </div>
            <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{fundedEdge.name}</h3>
            <p className="mt-2 text-lg text-night-muted">{fundedEdge.headline}</p>

            <p className="mt-6 leading-relaxed text-paper/85">
              <span className="font-semibold text-paper">The problem. </span>
              {fundedEdge.problem}
            </p>

            <p className="mt-6 font-semibold">What I built</p>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {fundedEdge.built.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm leading-snug text-paper/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>

            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tech stack">
              {fundedEdge.stack.map((t) => (
                <li key={t} className="rounded-md border border-night-line px-2.5 py-1 font-mono text-xs text-night-muted">
                  {t}
                </li>
              ))}
            </ul>

            {(liveUrl || repoUrl) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                  >
                    Visit live site
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </a>
                )}
                {repoUrl && (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-night-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-paper/40"
                  >
                    View the code
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center border-t border-night-line bg-[radial-gradient(ellipse_at_top_right,rgb(255_90_44/0.18),transparent_60%)] p-5 sm:p-8 lg:border-l lg:border-t-0">
            <BrowserFrame url="Funded Edge · landing page">
              <Image
                src="/work/funded-edge-landing.webp"
                alt="Funded Edge landing page: headline 'Pass the challenge. Keep the account.' next to an account card with an equity curve, a rule-break alert and drawdown progress bars"
                width={1600}
                height={1000}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="block h-auto w-full"
              />
            </BrowserFrame>
            <p className="mt-3 text-center font-mono text-[11px] text-night-muted">Real screenshot · open the live site above</p>
          </div>

          {/* Second screenshot: hover (or tab to it) to scroll through the features section */}
          <div className="border-t border-night-line p-5 sm:p-8 lg:col-span-2">
            <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-night-muted">Inside the landing page</p>
                <p className="mt-3 text-xl font-semibold tracking-tight">Every feature explained in one clear grid</p>
                <p className="mt-2 leading-relaxed text-night-muted">
                  The landing page walks traders through features, how it works, pricing and an FAQ, written in their
                  own language. <span className="hidden lg:inline">Hover the screenshot to scroll through it.</span>
                </p>
              </div>
              <BrowserFrame url="Funded Edge · features section">
                <div
                  tabIndex={0}
                  aria-label="Screenshot of the Funded Edge features section"
                  className="group/pan relative h-[300px] overflow-hidden outline-none sm:h-[380px]"
                >
                  <Image
                    src="/work/funded-edge-features.webp"
                    alt="Funded Edge features grid: every account in one cockpit, drawdown guardrails, a rule engine, a trading journal, CSV import, rule-break log, an Edge Score and payout goals"
                    width={1600}
                    height={1613}
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="absolute inset-x-0 top-0 h-auto w-full translate-y-0 transition-transform duration-[4000ms] ease-in-out group-hover/pan:-translate-y-[calc(100%-300px)] group-focus/pan:-translate-y-[calc(100%-300px)] sm:group-hover/pan:-translate-y-[calc(100%-380px)] sm:group-focus/pan:-translate-y-[calc(100%-380px)]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-night to-transparent transition-opacity group-hover/pan:opacity-0" />
                </div>
              </BrowserFrame>
            </div>
          </div>
        </article>

        {/* Live demos */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {demos.map((demo) => (
            <a
              key={demo.name}
              href={demo.href}
              data-reveal
              className="group overflow-hidden rounded-3xl border border-night-line bg-night-2 transition-[translate,border-color] duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <div className="aspect-[16/10] overflow-hidden bg-night">
                <Image
                  src={demo.image}
                  alt={`Screenshot of the ${demo.name.toLowerCase()} demo website`}
                  width={1200}
                  height={720}
                  sizes="(min-width: 768px) 360px, 100vw"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <span className="rounded-full border border-dashed border-night-muted/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-night-muted">
                  Live demo · fictional business
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{demo.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-night-muted">{demo.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Open the demo
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </span>
              </div>
            </a>
          ))}

          <a
            href="#contact"
            data-reveal
            style={delay(200)}
            className="group flex flex-col justify-between rounded-3xl border border-dashed border-night-line p-6 transition-colors hover:border-accent hover:bg-night-2 sm:p-8"
          >
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-night-muted">Next up</span>
            <div className="mt-16">
              <p className="text-3xl font-semibold leading-tight tracking-tight">
                Your project <Accent>could be here.</Accent>
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                Let&apos;s talk
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-night-line bg-night shadow-2xl transition-transform duration-500 hover:-translate-y-1">
      <div className="flex items-center gap-1.5 border-b border-night-line px-3.5 py-2.5" aria-hidden>
        <span className="size-2 rounded-full bg-paper/20" />
        <span className="size-2 rounded-full bg-paper/20" />
        <span className="size-2 rounded-full bg-paper/20" />
        <span className="ml-2 truncate font-mono text-[10px] text-night-muted">{url}</span>
      </div>
      {children}
    </div>
  );
}
