import { ArrowUpRight, Check } from "lucide-react";
import { concepts, fundedEdge } from "@/content/content";
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
          intro="My featured project is a full SaaS product I designed and built end to end. The smaller pieces below are concepts that show the range of styles I can design."
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

          <div className="relative min-h-[320px] border-t border-night-line bg-[radial-gradient(ellipse_at_top_right,rgb(255_90_44/0.18),transparent_60%)] p-5 sm:p-8 lg:border-l lg:border-t-0">
            <DashboardIllustration />
            <p className="mt-3 text-center font-mono text-[11px] text-night-muted">
              Illustration of the Funded Edge dashboard layout
            </p>
          </div>
        </article>

        {/* Concepts */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {concepts.map((c, i) => (
            <article
              key={c.name}
              data-reveal
              style={delay(i * 100)}
              className="group overflow-hidden rounded-3xl border border-night-line bg-night-2 transition-transform duration-300 hover:-translate-y-1"
            >
              <ConceptThumb palette={c.palette} kind={c.kind} />
              <div className="p-6">
                <span className="rounded-full border border-dashed border-night-muted/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-night-muted">
                  Concept · not a client project
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-night-muted">{c.body}</p>
              </div>
            </article>
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

function DashboardIllustration() {
  return (
    <div className="overflow-hidden rounded-2xl border border-night-line bg-night shadow-2xl" aria-hidden>
      <div className="flex">
        <div className="hidden w-14 shrink-0 flex-col items-center gap-3 border-r border-night-line py-4 sm:flex">
          <div className="size-7 rounded-lg bg-accent" />
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`size-6 rounded-md ${i === 0 ? "bg-paper/20" : "bg-paper/8"}`} />
          ))}
        </div>
        <div className="flex-1 space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-24 rounded-full bg-paper/70" />
            <div className="h-5 w-20 rounded-full bg-paper/10" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["bg-paper/60", "bg-accent", "bg-[#4ade80]"].map((c, i) => (
              <div key={i} className="space-y-2 rounded-lg border border-night-line p-2.5">
                <div className="h-1.5 w-2/3 rounded-full bg-paper/20" />
                <div className={`h-3 w-1/2 rounded ${c}`} />
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-night-line p-3">
            <div className="mb-2 h-1.5 w-20 rounded-full bg-paper/20" />
            <svg viewBox="0 0 300 110" className="h-auto w-full">
              <defs>
                <linearGradient id="eq-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff5a2c" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ff5a2c" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[25, 55, 85].map((y) => (
                <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgb(246 244 239 / 0.07)" />
              ))}
              <line x1="0" x2="300" y1="96" y2="96" stroke="#ff5a2c" strokeOpacity="0.5" strokeDasharray="4 4" />
              <path
                d="M0 80 L25 74 L50 78 L75 62 L100 66 L125 52 L150 56 L175 40 L200 46 L225 32 L250 36 L275 22 L300 18 L300 110 L0 110 Z"
                fill="url(#eq-fill)"
              />
              <path
                className="draw-line"
                pathLength={1}
                d="M0 80 L25 74 L50 78 L75 62 L100 66 L125 52 L150 56 L175 40 L200 46 L225 32 L250 36 L275 22 L300 18"
                fill="none"
                stroke="#ff5a2c"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2 rounded-md bg-paper/[0.04] px-2.5 py-2">
                <div className={`size-2 rounded-full ${i === 1 ? "bg-accent" : "bg-[#4ade80]"}`} />
                <div className="h-1.5 flex-1 rounded-full bg-paper/15" />
                <div className="h-1.5 w-10 rounded-full bg-paper/25" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptThumb({ palette, kind }: { palette: readonly string[]; kind: string }) {
  const [bg, mid, dark] = palette;
  return (
    <div className="relative aspect-[16/10] overflow-hidden p-5" style={{ background: bg }} aria-hidden>
      <div className="h-full rounded-xl bg-white/70 p-4 shadow-sm transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-14 rounded-full" style={{ background: dark }} />
          <div className="h-4 w-12 rounded-full" style={{ background: mid }} />
        </div>
        {kind === "cafe" ? (
          <div className="mt-4 grid grid-cols-[1fr_0.8fr] gap-3">
            <div className="space-y-2">
              <div className="h-3 w-full rounded" style={{ background: dark }} />
              <div className="h-3 w-3/4 rounded" style={{ background: dark }} />
              <div className="mt-3 space-y-1.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-1.5 w-2/3 rounded-full" style={{ background: mid, opacity: 0.5 }} />
                    <div className="h-1.5 w-4 rounded-full" style={{ background: mid }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square rounded-full" style={{ background: mid, opacity: 0.85 }} />
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            <div className="h-3 w-2/3 rounded" style={{ background: dark }} />
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="space-y-1.5 rounded-lg p-2" style={{ background: bg }}>
                  <div className="size-4 rounded-full" style={{ background: mid }} />
                  <div className="h-1.5 w-full rounded-full" style={{ background: dark, opacity: 0.4 }} />
                </div>
              ))}
            </div>
            <div className="h-5 w-24 rounded-full" style={{ background: dark }} />
          </div>
        )}
      </div>
    </div>
  );
}
