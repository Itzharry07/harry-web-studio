/** Simple geometric mark. Swap for your real logo once you have one. */
export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill="var(--ink)" />
      <rect x="8" y="8" width="9" height="9" rx="2.5" fill="var(--accent)" />
      <rect x="15" y="15" width="9" height="9" rx="2.5" fill="var(--paper)" />
    </svg>
  );
}
