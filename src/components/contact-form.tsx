"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, MessageCircle } from "lucide-react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error" | "handoff";

const projectTypes = ["New website", "Landing page", "Redesign", "Web app / dashboard", "Not sure yet"];

const field =
  "w-full rounded-xl border border-line bg-card px-4 py-3 text-[15px] outline-none transition-[border-color,box-shadow] placeholder:text-muted/70 focus:border-ink focus:shadow-[0_0_0_4px_rgb(255_90_44/0.15)]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [handoff, setHandoff] = useState<{ waUrl: string; mailUrl: string } | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const details = [
      `Hi Harry, I'd like a website.`,
      `Name: ${data.get("name")}`,
      data.get("email") ? `Email: ${data.get("email")}` : null,
      data.get("business") ? `Business: ${data.get("business")}` : null,
      `Need: ${data.get("type")}`,
    ].filter(Boolean);
    const text = `${details.join("\n")}\n\n${String(data.get("message") ?? "")}`;

    // No Formspree ID configured: send the message through WhatsApp (works on nearly every phone),
    // with email as a fallback on the next screen.
    if (!site.formspreeId) {
      const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
      const mailUrl = `mailto:${site.email}?subject=${encodeURIComponent(`Website enquiry from ${data.get("name")}`)}&body=${encodeURIComponent(text)}`;
      setHandoff({ waUrl, mailUrl });
      // Note: passing "noopener" would make window.open return null, so clear opener manually.
      const win = window.open(waUrl, "_blank");
      if (win) win.opener = null;
      else window.location.href = waUrl;
      setStatus("handoff");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "handoff" && handoff) {
    return (
      <div className="flex flex-col items-start rounded-3xl border border-line bg-card p-8" role="status">
        <MessageCircle className="size-10 text-[#25d366]" aria-hidden />
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">Almost done: tap Send in WhatsApp</h3>
        <p className="mt-2 leading-relaxed text-muted">
          Your message is ready in WhatsApp. Just press <strong className="text-ink">Send</strong> there and I&apos;ll
          reply soon. WhatsApp didn&apos;t open?
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={handoff.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3 font-medium text-[#062b16]"
          >
            <MessageCircle className="size-4" aria-hidden /> Open WhatsApp again
          </a>
          <a
            href={handoff.mailUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-medium"
          >
            <Mail className="size-4" aria-hidden /> Send by email instead
          </a>
        </div>
        <p className="mt-4 text-sm text-muted">
          Or email me directly: <a href={`mailto:${site.email}`} className="font-medium text-ink underline">{site.email}</a>
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium underline decoration-accent decoration-2 underline-offset-4"
        >
          Edit my message
        </button>
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start rounded-3xl border border-line bg-card p-8" role="status">
        <CheckCircle2 className="size-10 text-accent" aria-hidden />
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">Thanks, message sent!</h3>
        <p className="mt-2 text-muted">I&apos;ll reply to your email soon.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium underline decoration-accent decoration-2 underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-paper p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Your name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Your full name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">
            Email{!site.formspreeId && <span className="font-normal text-muted"> (optional)</span>}
          </span>
          <input
            name="email"
            type="email"
            required={Boolean(site.formspreeId)}
            autoComplete="email"
            className={field}
            placeholder="you@business.com"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">
            Business name <span className="font-normal text-muted">(optional)</span>
          </span>
          <input name="business" autoComplete="organization" className={field} placeholder="Your business" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">What do you need?</span>
          <select name="type" className={field} defaultValue={projectTypes[0]}>
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium">Tell me about your project</span>
          <textarea
            name="message"
            required
            rows={5}
            className={`${field} resize-y`}
            placeholder="What does your business do, and what should the website help with?"
          />
        </label>
        {/* Spam trap for bots: hidden from people, ignored by Formspree when empty. */}
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
            </>
          ) : (
            <>
              {site.formspreeId ? "Send message" : "Send on WhatsApp"}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </>
          )}
        </button>
        <p className="text-sm text-muted">
          {site.formspreeId ? "I usually reply by email." : "Opens WhatsApp with your message ready to send."}
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl bg-accent-soft px-4 py-3 text-sm">
          Sorry, that didn&apos;t send. Please email me directly at{" "}
          <a href={`mailto:${site.email}`} className="font-medium underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
