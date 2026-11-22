"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds `is-visible` to every element with a `data-reveal` attribute the first
 * time it scrolls into view. One observer for the whole page keeps it cheap.
 *
 * It lives in the root layout, which stays mounted when you move between pages
 * without a full reload (e.g. demo → home). So it re-scans on every route change,
 * and also watches for elements added later, otherwise new sections would stay hidden.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supported = "IntersectionObserver" in window;

    const show = (el: Element) => el.classList.add("is-visible");

    const io = supported
      ? new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                show(entry.target);
                io?.unobserve(entry.target);
              }
            }
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
        )
      : null;

    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => {
        if (reduce || !io) show(el);
        else io.observe(el);
      });
    };

    scan();

    // Catch sections rendered after this effect ran (client-side navigation, streaming).
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: never leave content hidden if something above fails.
    const fallback = window.setTimeout(() => {
      document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) show(el);
      });
    }, 1500);

    return () => {
      io?.disconnect();
      mo.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
