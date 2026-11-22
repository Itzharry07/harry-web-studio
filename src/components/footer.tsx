import { site } from "@/content/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-night text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo />
            <span className="font-semibold tracking-tight">{site.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-night-muted">{site.tagline}.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-night-muted md:items-end">
          <a href={`mailto:${site.email}`} className="text-paper transition-colors hover:text-accent">
            {site.email}
          </a>
          <p>
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
          <p>Designed and built in-house with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
