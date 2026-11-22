// End-to-end click-through test for the Harry Web Studio site.
// Usage: node site-test.mjs <baseUrl>
import { chromium } from "playwright-core";

const BASE = (process.argv[2] || "http://localhost:3100").replace(/\/$/, "");
const WA = "https://wa.me/918105272320";
const results = [];
const pass = (name, detail = "") => results.push(["PASS", name, detail]);
const fail = (name, detail = "") => results.push(["FAIL", name, detail]);
const check = (cond, name, detail = "") => (cond ? pass(name, detail) : fail(name, detail));

const browser = await chromium.launch({ channel: "msedge", headless: true });

async function newPage(viewport) {
  const ctx = await browser.newContext({ viewport, hasTouch: viewport.width < 768, isMobile: viewport.width < 768 });
  // Never actually leave for WhatsApp / mail: record where we'd go instead.
  await ctx.route(/wa\.me|api\.whatsapp\.com|formspree\.io/, (r) => r.fulfill({ status: 200, body: "stub" }));
  const page = await ctx.newPage();
  page.errors = [];
  page.on("pageerror", (e) => page.errors.push(String(e)));
  page.on("console", (m) => m.type() === "error" && !/status of 404/.test(m.text()) && page.errors.push(m.text()));
  page.on("response", (r) => r.status() >= 400 && !r.url().includes("this-page-does-not-exist") && page.errors.push(`HTTP ${r.status()} ${r.url()}`));
  await page.addInitScript(() => {
    window.__opened = [];
    window.open = (u) => {
      window.__opened.push(String(u));
      return { opener: null };
    };
  });
  return page;
}

// Scroll the whole page slowly so every scroll-reveal section can trigger.
async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = Math.max(200, Math.floor(innerHeight * 0.6));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 150));
    }
    scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" });
    await new Promise((r) => setTimeout(r, 900));
  });
}

const settle = (page) =>
  page.evaluate(async () => {
    let last = -1, same = 0;
    for (let i = 0; i < 60 && same < 4; i++) {
      await new Promise((r) => setTimeout(r, 100));
      if (Math.abs(scrollY - last) < 1) same++; else same = 0;
      last = scrollY;
    }
  });

const hiddenReveals = (page) =>
  page.evaluate(() => [...document.querySelectorAll("[data-reveal]")].filter((e) => !e.classList.contains("is-visible")).length);

const overflow = (page) =>
  page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

const brokenImages = (page) =>
  page.evaluate(() => [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src));

for (const [label, viewport] of [
  ["desktop", { width: 1280, height: 800 }],
  ["mobile", { width: 390, height: 844 }],
]) {
  const page = await newPage(viewport);
  const T = (n) => `[${label}] ${n}`;

  // 1. Home loads
  const res = await page.goto(BASE + "/", { waitUntil: "networkidle" });
  check(res.status() === 200, T("home loads"), `HTTP ${res.status()}`);
  check((await page.title()).includes("Harry Web Studio"), T("page title"), await page.title());
  check(await page.getByRole("heading", { level: 1 }).isVisible(), T("hero headline visible"));
  check((await overflow(page)) <= 0, T("no sideways scrolling on home"), `extra ${await overflow(page)}px`);

  // 2. Every section reveals while scrolling, images load
  await scrollThrough(page);
  check((await hiddenReveals(page)) === 0, T("all sections appear when scrolled"), `${await hiddenReveals(page)} still hidden`);
  const broken = await brokenImages(page);
  check(broken.length === 0, T("all images load"), broken.join(", "));

  // 3. Navigation links scroll to their sections
  const sections = ["services", "work", "packages", "process", "faq"];
  if (label === "mobile") {
    await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
    const menuBtn = page.getByRole("button", { name: "Open menu" });
    await menuBtn.click();
    check(await page.locator("#mobile-nav").isVisible(), T("mobile menu opens"));
    await page.locator("#mobile-nav").getByRole("link", { name: "Packages" }).click();
    await settle(page);
    check(!(await page.locator("#mobile-nav").isVisible()), T("mobile menu closes after tapping a link"));
    const top = await page.evaluate(() => document.getElementById("packages").getBoundingClientRect().top);
    check(Math.abs(top) < 120, T("menu link scrolls to Packages"), `section top at ${Math.round(top)}px`);
  } else {
    for (const id of sections) {
      await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
      await page.locator(`header nav[aria-label="Main"] a[href="#${id}"]`).click();
      await settle(page);
      const top = await page.evaluate((i) => document.getElementById(i).getBoundingClientRect().top, id);
      check(Math.abs(top) < 120, T(`nav "${id}" scrolls to section`), `top at ${Math.round(top)}px`);
    }
  }

  // 4. Hero buttons
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await page.getByRole("link", { name: "Get a free quote" }).click();
  await settle(page);
  const ctop = await page.evaluate(() => document.getElementById("contact").getBoundingClientRect().top);
  check(Math.abs(ctop) < 120, T('"Get a free quote" goes to contact'), `top ${Math.round(ctop)}px`);

  // 5. FAQ opens and closes
  const firstFaq = page.locator("#faq details").first();
  await firstFaq.locator("summary").click();
  check(await firstFaq.evaluate((d) => d.open), T("FAQ answer opens"));
  await firstFaq.locator("summary").click();
  check(!(await firstFaq.evaluate((d) => d.open)), T("FAQ answer closes"));

  // 6. Contact form: validation, then WhatsApp hand-off
  const form = page.locator("#contact form");
  await form.scrollIntoViewIfNeeded();
  await form.getByRole("button", { name: /Send on WhatsApp|Send message/ }).click();
  let opened = await page.evaluate(() => window.__opened.length);
  check(opened === 0, T("empty form is blocked (required fields)"));
  await form.locator('input[name="name"]').fill("Test Owner");
  await form.locator('input[name="business"]').fill("Test Mobiles");
  await form.locator('textarea[name="message"]').fill("I need a website for my shop.");
  await form.getByRole("button", { name: /Send on WhatsApp|Send message/ }).click();
  await page.waitForTimeout(500);
  const urls = await page.evaluate(() => window.__opened);
  const waUrl = urls[0] ? decodeURIComponent(urls[0]) : "";
  check(waUrl.startsWith(WA) && waUrl.includes("Test Owner") && waUrl.includes("I need a website"), T("form opens WhatsApp to Harry with the message"), waUrl.slice(0, 90));
  check(await page.getByText("Almost done: tap Send in WhatsApp").isVisible(), T("form shows the 'tap Send' screen"));
  check(await page.getByRole("link", { name: "Send by email instead" }).isVisible(), T("email fallback offered"));
  const fe = await page.locator('#work a[href="https://funded-edge-coral.vercel.app"]').count();
  check(fe === 1, T("Funded Edge 'Visit live site' link present"));
  const directWa = await page.locator('#contact a[href^="https://wa.me/918105272320"]').count();
  check(directWa >= 1, T("WhatsApp contact link present"));

  // 7. Demo → back to home (the reported bug), via the in-page link
  for (const demo of ["mobile-shop", "clinic"]) {
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.locator(`#work a[href="/demo/${demo}"]`).scrollIntoViewIfNeeded();
    await page.locator(`#work a[href="/demo/${demo}"]`).click();
    await page.waitForURL(`**/demo/${demo}`);
    await page.waitForLoadState("networkidle");
    check(await page.getByText("DEMO", { exact: true }).isVisible(), T(`${demo} demo opens with DEMO banner`));
    check((await overflow(page)) <= 0, T(`${demo}: no sideways scrolling`), `extra ${await overflow(page)}px`);
    await scrollThrough(page);
    check((await hiddenReveals(page)) === 0, T(`${demo}: all sections appear`), `${await hiddenReveals(page)} hidden`);
    const waLinks = await page.locator('a[href*="wa.me"]').evaluateAll((as) => as.map((a) => a.href));
    check(waLinks.length > 0 && waLinks.every((h) => h.startsWith(WA)), T(`${demo}: all WhatsApp buttons go to Harry`), `${waLinks.length} links`);

    // back via the banner link
    await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
    await page.getByRole("link", { name: /Back to Harry Web Studio/ }).click();
    await page.waitForURL("**/");
    await page.waitForTimeout(1500);
    const wtop = await page.evaluate(() => document.getElementById("work").getBoundingClientRect().top);
    check(Math.abs(wtop) < 200, T(`${demo}: "Back" lands on the Work section`), `work top ${Math.round(wtop)}px`);
    await scrollThrough(page);
    check((await hiddenReveals(page)) === 0, T(`${demo}: home fully visible after "Back" (no reload)`), `${await hiddenReveals(page)} hidden`);

    // and via the browser back button
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.locator(`#work a[href="/demo/${demo}"]`).click();
    await page.waitForURL(`**/demo/${demo}`);
    await page.goBack();
    await page.waitForTimeout(1500);
    await scrollThrough(page);
    check((await hiddenReveals(page)) === 0, T(`${demo}: home fully visible after browser Back`), `${await hiddenReveals(page)} hidden`);
  }

  // 8. Clinic appointment form
  await page.goto(BASE + "/demo/clinic", { waitUntil: "networkidle" });
  const cf = page.locator("#book form");
  await cf.scrollIntoViewIfNeeded();
  await cf.locator('input[name="name"]').fill("Test Patient");
  await cf.locator('input[name="phone"]').fill("9000000000");
  await cf.getByRole("button", { name: /Request appointment/ }).click();
  await page.waitForTimeout(500);
  const curl = decodeURIComponent((await page.evaluate(() => window.__opened))[0] || "");
  check(curl.startsWith(WA) && curl.includes("[Clinic demo]") && curl.includes("Test Patient"), T("clinic form opens WhatsApp request"), curl.slice(0, 80));

  // 9. Unknown page shows a 404
  const r404 = await page.goto(BASE + "/this-page-does-not-exist", { waitUntil: "load" });
  check(r404.status() === 404, T("unknown URL returns 404"), `HTTP ${r404.status()}`);

  const errs = page.errors.filter((e) => !/favicon|wa\.me|stub/i.test(e));
  check(errs.length === 0, T("no JavaScript errors"), errs.slice(0, 3).join(" | "));
  await page.context().close();
}

await browser.close();
for (const [s, n, d] of results) console.log(`${s === "PASS" ? "✅" : "❌"} ${n}${d && s === "FAIL" ? "  →  " + d : ""}`);
const failed = results.filter((r) => r[0] === "FAIL").length;
console.log(`\n${results.length - failed}/${results.length} checks passed`);
process.exit(failed ? 1 : 0);
