/**
 * Page copy: services, packages, process, FAQ and portfolio.
 * Edit freely. Keep it honest: no invented clients, numbers or reviews.
 */

export const services = [
  {
    icon: "store",
    title: "Business websites",
    body: "A clean, multi-page site that explains what you do, builds trust and turns visitors into calls, bookings or enquiries.",
  },
  {
    icon: "rocket",
    title: "Landing pages",
    body: "One focused page for a launch, an offer or an ad campaign, designed around a single clear call to action.",
  },
  {
    icon: "layout",
    title: "Web apps & dashboards",
    body: "Logins, dashboards, data and custom features, built on the same stack as modern SaaS products.",
  },
  {
    icon: "refresh",
    title: "Redesigns",
    body: "Already have a site that feels dated or slow? I rebuild it to look current and load fast, keeping what works.",
  },
  {
    icon: "search",
    title: "SEO & speed basics",
    body: "Page titles, descriptions, a sitemap, share previews and fast load times, set up properly from day one.",
  },
  {
    icon: "shield",
    title: "Care & updates",
    body: "Optional monthly care after launch: small edits, content updates and keeping things running smoothly.",
  },
] as const;

export const packages = [
  {
    name: "Starter",
    summary: "A single, polished page to get your business online properly.",
    bestFor: "New businesses, freelancers, personal brands",
    features: [
      "One-page website with up to ~5 sections",
      "Mobile-first, responsive design",
      "Contact form or WhatsApp / email button",
      "Basic SEO: titles, descriptions, sitemap",
      "Help connecting your domain",
    ],
    highlight: false,
  },
  {
    name: "Business",
    summary: "A complete multi-page website that does the selling for you.",
    bestFor: "Shops, clinics, restaurants, agencies, service businesses",
    features: [
      "Up to ~5 pages (Home, About, Services, Gallery, Contact…)",
      "Custom design matched to your brand",
      "Scroll animations and polished details",
      "Google Maps, social links, enquiry form",
      "SEO basics on every page",
      "A walkthrough so you know how it all works",
    ],
    highlight: true,
  },
  {
    name: "Custom",
    summary: "Web apps and bigger builds with logins, data and custom features.",
    bestFor: "Startups, SaaS ideas, internal tools, dashboards",
    features: [
      "Everything in Business",
      "User accounts and sign-in",
      "Database, dashboards and admin screens",
      "Integrations (payments, email, APIs) as needed",
      "Built in milestones you can review",
    ],
    highlight: false,
  },
] as const;

export const process = [
  {
    step: "Discovery",
    body: "A free call to understand your business, your customers and what the site needs to do. You get a clear written quote.",
  },
  {
    step: "Design",
    body: "I design the look and layout first, so you can see it and ask for changes before any building starts.",
  },
  {
    step: "Build",
    body: "I build the site with fast, modern code and share a live preview link you can open on your phone as it comes together.",
  },
  {
    step: "Launch",
    body: "Final checks on mobile and desktop, then I connect your domain and put the site live.",
  },
  {
    step: "Care plan",
    body: "Optional ongoing support: edits, updates and help whenever you need it. Quote on request.",
  },
] as const;

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "It depends on the number of pages, the features you need and whether content is ready. After a short call I send a written quote in INR, and anything extra is agreed with you before I do it.",
  },
  {
    q: "How long does it take?",
    a: "A one-page site is much quicker than a web app, and timing also depends on how quickly content like text and photos is ready. You get a timeline with your quote, before you commit to anything.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. Your domain is registered in your name and the finished code is yours.",
  },
  {
    q: "What do I need to provide?",
    a: "Your logo (if you have one), the text about your business and any photos you'd like to use. Not sure what to write? I'll help you structure it.",
  },
  {
    q: "Are there ongoing costs?",
    a: "Usually just your domain renewal each year, paid to the domain registrar. Hosting for a simple site can be free or low-cost; I'll recommend the right option for your site in the quote. The care plan is optional.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. I can rebuild it with a fresh design and faster code, and keep your domain and any content you want to carry over.",
  },
  {
    q: "Will my site work on phones and show up on Google?",
    a: "Every site is designed mobile-first and comes with SEO basics: page titles, descriptions, a sitemap and fast loading. Nobody can honestly guarantee a Google ranking, but these basics give you a solid start.",
  },
  {
    q: "Do you work with clients outside my city?",
    a: "Yes. Everything works online: calls, shared designs and live preview links you can check from anywhere.",
  },
] as const;

export const fundedEdge = {
  name: "Funded Edge",
  kind: "Own product · built end to end",
  headline: "A trading-journal SaaS for prop-firm traders",
  problem:
    "Prop-firm traders juggle several funded accounts, each with strict rules like daily loss limits and maximum drawdown. Spreadsheets make it easy to miss a rule break until it's too late.",
  built: [
    "Animated marketing landing page with an FAQ",
    "Secure sign-up and sign-in",
    "Multi-account dashboard with equity charts",
    "Trade logging plus import from platform exports",
    "Rule tracking with violation alerts",
    "Goals, payouts, journal, reviews and a performance score",
  ],
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "Clerk"],
} as const;

/** Live demo sites: real, working pages for fictional businesses. Always labelled as demos. */
export const demos = [
  {
    name: "Mobile phone shop",
    body: "A live sample site for a phone shop: popular phones, offers, repairs, WhatsApp enquiry buttons and opening hours.",
    href: "/demo/mobile-shop",
    image: "/work/mobile-shop-demo.webp",
  },
  {
    name: "Family clinic",
    body: "A live sample site for a clinic: services, doctors, OPD timings and an appointment request that arrives on WhatsApp.",
    href: "/demo/clinic",
    image: "/work/clinic-demo.webp",
  },
] as const;
