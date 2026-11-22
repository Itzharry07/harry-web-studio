/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST.
 *  Everything business-specific lives here: name, email, form ID,
 *  domain and links. Change a value, save, and the whole site updates.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  /** Your business name, shown in the header, footer, titles and share image. */
  name: "Studio Name",

  /** One line under the name in search results and link previews. */
  tagline: "Fast, modern websites for businesses of every size",

  /** Longer description used for Google and social link previews. */
  description:
    "A one-person web studio in India. I design and build fast, mobile-first websites, landing pages and web apps, with a clear written quote and support after launch.",

  /**
   * Your live domain, without a trailing slash. Used for the sitemap, canonical
   * links and share images. Set NEXT_PUBLIC_SITE_URL in Vercel, or edit the fallback.
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://studio-site.vercel.app").replace(/\/$/, ""),

  /** Public contact email. Shown on the site and used by the email link. */
  email: "hello@example.com",

  /**
   * Formspree form ID (the part after /f/ in your Formspree endpoint, e.g. "xyzabcd").
   * Leave empty and the contact form opens the visitor's email app instead.
   */
  formspreeId: "",

  /** Where you're based. */
  location: "India",

  /** Links for the Funded Edge case study. Leave empty to hide a button. */
  fundedEdge: {
    liveUrl: "",
    repoUrl: "",
  },
} as const;

export type Site = typeof site;
