/** "H" mark for Harry Web Studio. Also used in src/app/icon.svg and the share image (src/app/og.png/route.tsx). */
export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill="var(--ink)" />
      <rect x="9" y="8" width="4" height="16" rx="1.2" fill="var(--paper)" />
      <rect x="19" y="8" width="4" height="16" rx="1.2" fill="var(--paper)" />
      <rect x="13" y="14" width="6" height="4" fill="var(--accent)" />
    </svg>
  );
}
