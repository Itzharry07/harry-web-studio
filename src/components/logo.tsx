/** Kite mark for Kitepost Studio. Also used in src/app/icon.svg and the share image (src/app/og.png/route.tsx). */
export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill="var(--ink)" />
      <path d="M16 5 L8 13.5 L16 26 Z" fill="var(--accent)" />
      <path d="M16 5 L24 13.5 L16 26 Z" fill="var(--paper)" />
      <path d="M8 13.5 H24" stroke="var(--ink)" strokeWidth="1.2" />
    </svg>
  );
}
