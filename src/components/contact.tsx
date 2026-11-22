import { Mail, MapPin, MessageSquareText } from "lucide-react";
import { site } from "@/content/site";
import { ContactForm } from "./contact-form";
import { Accent, Eyebrow, delay } from "./ui";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <div data-reveal>
            <Eyebrow>Contact</Eyebrow>
          </div>
          <h2
            data-reveal
            style={delay(80)}
            className="mt-4 text-[clamp(2.2rem,6vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-balance"
          >
            Let&apos;s build something <Accent>you&apos;re proud of.</Accent>
          </h2>
          <p data-reveal style={delay(160)} className="mt-5 text-lg leading-relaxed text-muted text-pretty">
            Tell me a little about your business and what you need. I&apos;ll get back to you to set up a free call,
            then send a clear written quote.
          </p>

          <ul data-reveal style={delay(240)} className="mt-10 space-y-5">
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-xl bg-card">
                <Mail className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm text-muted">Prefer email?</p>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Website enquiry")}`}
                  className="inline-block py-1.5 font-medium underline decoration-accent decoration-2 underline-offset-4"
                >
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-xl bg-card">
                <MessageSquareText className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm text-muted">WhatsApp or call</p>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Harry, I'd like to know more about a website.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1.5 font-medium underline decoration-accent decoration-2 underline-offset-4"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-xl bg-card">
                <MapPin className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm text-muted">Based in</p>
                <p className="font-medium">{site.location} · working with clients anywhere</p>
              </div>
            </li>
          </ul>
        </div>

        <div data-reveal style={delay(120)}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
