"use client";

import { useEffect, useRef, useState } from "react";
import { Show, getPromoShow, todayInShowTimeZone } from "@/data/shows";

function formatShortDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function AnnouncementBar() {
  const [show, setShow] = useState<Show | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  // The page is statically rendered, so a server-side date check would freeze
  // at build time. Resolving the promo on the client keeps the bar honest —
  // it disappears on its own the day after the show, in America/Chicago.
  useEffect(() => {
    setShow(getPromoShow(todayInShowTimeZone()));
  }, []);

  // Publish the bar's height so the fixed nav sits below it and anchor links
  // land in the right place. Observed, because the text wraps on narrow screens.
  useEffect(() => {
    const root = document.documentElement;
    const el = barRef.current;
    if (!el) {
      root.style.removeProperty("--announcement-h");
      return;
    }
    const sync = () =>
      root.style.setProperty("--announcement-h", `${el.offsetHeight}px`);
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--announcement-h");
    };
  }, [show]);

  if (!show) return null;

  const where = [show.venue, show.city].filter((part) => part?.trim()).join(", ");
  const headline = show.promoTitle ? `${show.promoTitle} at ${where}` : where;

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 w-full z-[60] bg-brand-green"
    >
      <div
        className="mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 py-2 text-center"
        style={{ maxWidth: 1200 }}
      >
        <p className="min-w-0 font-heading text-sm uppercase tracking-wider sm:tracking-widest text-white">
          {formatShortDate(show.date)} · {headline}
        </p>
        <a
          href="#shows"
          className="shrink-0 font-heading text-sm uppercase tracking-wider sm:tracking-widest text-white underline underline-offset-4 transition-opacity duration-200 hover:opacity-75"
        >
          Details →
        </a>
      </div>
    </div>
  );
}
