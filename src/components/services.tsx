import { Store, Rocket, LayoutDashboard, RefreshCw, Search, ShieldCheck } from "lucide-react";
import { services } from "@/content/content";
import { Accent, SectionHeading, delay } from "./ui";

const icons = {
  store: Store,
  rocket: Rocket,
  layout: LayoutDashboard,
  refresh: RefreshCw,
  search: Search,
  shield: ShieldCheck,
} as const;

const marqueeWords = [
  "Restaurants",
  "Clinics",
  "Gyms",
  "Salons",
  "Coaches",
  "Startups",
  "Shops",
  "Consultants",
  "Creators",
  "Agencies",
  "Trades",
  "SaaS",
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything you need to look great <Accent>online.</Accent>
            </>
          }
          intro="Whether you need your first website or a custom web app, you get the same care: thoughtful design, clean code and a site that's easy to grow."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <article
                key={s.title}
                data-reveal
                style={delay((i % 3) * 90)}
                className="group relative overflow-hidden rounded-2xl border border-line bg-card p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_24px_48px_-24px_rgb(21_20_15/0.25)] sm:p-7"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-paper-2 transition-colors duration-300 group-hover:bg-accent">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-line py-5" data-reveal>
        <p className="sr-only">Websites for every kind of business, for example: {marqueeWords.join(", ")}.</p>
        <div className="marquee flex w-max gap-10 whitespace-nowrap" aria-hidden>
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-10 text-2xl font-medium tracking-tight text-ink/70 sm:text-3xl">
              <span className={i % 2 ? "font-serif italic" : ""}>{w}</span>
              <span className="size-2 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
