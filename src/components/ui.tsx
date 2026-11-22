import type { CSSProperties, ReactNode } from "react";

/** Delay helper for staggered reveals: style={delay(120)} */
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] ${
        dark ? "text-night-muted" : "text-muted"
      }`}
    >
      <span className="size-1.5 rounded-full bg-accent" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <div data-reveal>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </div>
      <h2
        data-reveal
        style={delay(80)}
        className="mt-4 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
      >
        {title}
      </h2>
      {intro && (
        <p
          data-reveal
          style={delay(160)}
          className={`mt-5 text-lg leading-relaxed text-pretty ${dark ? "text-night-muted" : "text-muted"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/** Serif italic accent for a word or two inside a heading. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal italic tracking-normal">{children}</em>;
}
