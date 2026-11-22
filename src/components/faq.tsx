import { Plus } from "lucide-react";
import { faqs } from "@/content/content";
import { Accent, SectionHeading, delay } from "./ui";

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions, <Accent>answered.</Accent>
              </>
            }
            intro={
              <>
                Something else on your mind?{" "}
                <a href="#contact" className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4">
                  Just ask.
                </a>
              </>
            }
          />
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <details key={f.q} data-reveal style={delay(Math.min(i, 4) * 60)} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg font-medium tracking-tight transition-colors hover:text-ink/70">
                {f.q}
                <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 group-hover:border-ink/30">
                  <Plus className="size-4" aria-hidden />
                </span>
              </summary>
              <p className="pb-6 pr-12 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
