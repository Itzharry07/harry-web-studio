"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const projectTypes = ["New website", "Landing page", "Redesign", "Web app / dashboard", "Not sure yet"];

const field =
  "w-full rounded-xl border border-line bg-card px-4 py-3 text-[15px] outline-none transition-[border-color,box-shadow] placeholder:text-muted/70 focus:border-ink focus:shadow-[0_0_0_4px_rgb(255_90_44/0.15)]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No Formspree ID configured yet: open the visitor's email app with the message pre-filled.
    if (!site.formspreeId) {
      const subject = `New project enquiry from ${data.get("name")}`;
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Business: ${data.get("business") || "-"}`,
        `Project type: ${data.get("type")}`,
        "",
        String(data.get("message") ?? ""),
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input
            name="email"
            type="email"
            required
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
              Send message
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </>
          )}
        </button>
        <p className="text-sm text-muted">
          {site.formspreeId ? "I usually reply by email." : "This opens your email app with the message ready."}
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
