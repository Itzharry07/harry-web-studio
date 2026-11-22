import { ArrowRight, Check, LifeBuoy } from "lucide-react";
import { packages } from "@/content/content";
import { Accent, SectionHeading, delay } from "./ui";

export function Packages() {
  return (
    <section id="packages" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Packages"
          title={
            <>
              Pick a starting point. <Accent>Get a clear quote.</Accent>
            </>
          }
          intro="Every business is different, so every project is quoted individually. Choose the package closest to what you need, and after a short call you'll get a written quote in INR before any work starts."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {packages.map((p, i) => (
            <article
              key={p.name}
              data-reveal
              style={delay(i * 100)}
              className={`relative flex flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${
                p.highlight
                  ? "bg-ink text-paper shadow-[0_30px_60px_-30px_rgb(21_20_15/0.6)]"
                  : "border border-line bg-card"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">
                  Good fit for most businesses
                </span>
              )}
              <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
              <p className={`mt-2 leading-relaxed ${p.highlight ? "text-night-muted" : "text-muted"}`}>
                {p.summary}
              </p>

              <div className={`mt-6 border-y py-5 ${p.highlight ? "border-night-line" : "border-line"}`}>
                <p className="text-3xl font-semibold tracking-tight">Custom quote</p>
                <p className={`mt-1 text-sm ${p.highlight ? "text-night-muted" : "text-muted"}`}>
                  Priced in INR after a free call
                </p>
              </div>

              <p className={`mt-6 text-sm ${p.highlight ? "text-night-muted" : "text-muted"}`}>
                <span className={`font-medium ${p.highlight ? "text-paper" : "text-ink"}`}>Best for: </span>
                {p.bestFor}
              </p>

              <ul className="mt-5 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] leading-snug">
                    <Check
                      className={`mt-0.5 size-4 shrink-0 ${p.highlight ? "text-accent" : "text-ink"}`}
                      aria-hidden
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-medium transition-colors ${
                  p.highlight ? "bg-accent text-ink hover:bg-paper" : "bg-ink text-paper hover:bg-ink/85"
                }`}
              >
                Get a quote for {p.name}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-5 flex flex-col gap-4 rounded-3xl border border-line bg-paper-2 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex gap-4">
            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-card">
              <LifeBuoy className="size-5" aria-hidden />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">Care plan (optional)</h3>
              <p className="mt-1 text-muted">
                Monthly help after launch: small edits, content updates and keeping your site running smoothly.
              </p>
            </div>
          </div>
          <p className="shrink-0 font-medium sm:text-right">Quote on request</p>
        </div>
      </div>
    </section>
  );
}
