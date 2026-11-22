import { process } from "@/content/content";
import { Accent, SectionHeading, delay } from "./ui";

export function Process() {
  return (
    <section id="process" className="border-t border-line bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              Five simple steps, <Accent>no surprises.</Accent>
            </>
          }
          intro="You always know what's happening next, and you see the design before anything gets built."
        />

        <ol className="relative mt-14 grid gap-4 md:grid-cols-5 md:gap-3">
          {/* Connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-accent via-ink/20 to-ink/10 md:block"
            aria-hidden
          />
          {process.map((p, i) => (
            <li
              key={p.step}
              data-reveal
              style={delay(i * 110)}
              className="group relative flex gap-5 md:flex-col md:gap-0"
            >
              {/* Vertical line (mobile) */}
              {i < process.length - 1 && (
                <div className="absolute bottom-[-16px] left-[27px] top-14 w-px bg-ink/15 md:hidden" aria-hidden />
              )}
              <div
                className={`relative z-10 grid size-14 shrink-0 place-items-center rounded-full border font-mono text-sm font-semibold transition-colors duration-300 ${
                  i === process.length - 1
                    ? "border-dashed border-ink/40 bg-paper-2"
                    : "border-ink bg-ink text-paper group-hover:bg-accent group-hover:text-ink"
                }`}
              >
                0{i + 1}
              </div>
              <div className="pb-2 md:mt-6 md:pr-3">
                <h3 className="text-lg font-semibold tracking-tight">{p.step}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
