"use client";

import { useState } from "react";
import { shows, Show } from "@/data/shows";

type Tab = "upcoming" | "past";

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function FeaturedCard({ show }: { show: Show }) {
  return (
    <div className="bg-white border-l-4 border-brand-green p-6 shadow-md mb-4">
      <span className="inline-block bg-brand-green text-white font-heading text-xs tracking-widest uppercase px-3 py-1 mb-3">
        NEXT SHOW
      </span>
      <div className="flex flex-col gap-1">
        <p className="font-heading text-xl text-brand-dark">
          {formatDate(show.date)} · {show.time}
        </p>
        <p className="font-heading text-2xl text-brand-dark uppercase">
          {show.venue}
        </p>
        <p className="font-body text-sm text-brand-muted">
          {show.city}, {show.state}
        </p>
        <a
          href={show.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading text-base tracking-wide text-brand-green mt-2 hover:underline"
        >
          MAP IT →
        </a>
      </div>
    </div>
  );
}

function ShowRow({ show, isLast }: { show: Show; isLast: boolean }) {
  return (
    <div
      className={`bg-white py-4 px-6 hover:bg-[#fafafa] transition-colors flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 ${
        !isLast ? "border-b border-[#e5e5e5]" : ""
      }`}
    >
      {/* Date / time */}
      <div className="sm:w-36 shrink-0">
        <p className="font-heading text-base uppercase text-brand-dark">
          {formatDate(show.date)}
        </p>
        <p className="font-body text-sm text-brand-muted">{show.time}</p>
      </div>

      {/* Venue / location */}
      <div className="flex-1 sm:px-4">
        <p className="font-heading text-lg uppercase text-brand-dark">
          {show.venue}
        </p>
        <p className="font-body text-sm text-brand-muted">
          {show.city}, {show.state}
        </p>
      </div>

      {/* Map link */}
      <a
        href={show.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-heading text-sm tracking-widest text-brand-green hover:underline self-start sm:self-center"
      >
        MAP IT →
      </a>
    </div>
  );
}

export default function Shows() {
  const [activeTab, setActiveTab] = useState<Tab>("upcoming");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = shows
    .filter((s) => new Date(s.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  const past = shows
    .filter((s) => new Date(s.date) < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  const featured = upcoming.find((s) => s.isFeatured);
  const regularUpcoming = upcoming.filter((s) => !s.isFeatured);

  const tabs: { key: Tab; label: string }[] = [
    { key: "upcoming", label: "UPCOMING" },
    { key: "past", label: "PAST" },
  ];

  return (
    <section id="shows" className="bg-brand-light py-20">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-10 text-center">
          <span className="font-heading text-sm tracking-widest uppercase text-brand-green">
            LIVE
          </span>
          <h2 className="font-heading text-5xl uppercase text-brand-dark">
            SHOWS
          </h2>
          <p className="font-body text-base text-brand-muted tracking-wider">
            CATCH US LIVE AT A VENUE NEAR YOU
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex justify-center gap-3 mb-8">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`font-heading text-base tracking-wide uppercase px-6 py-2 transition-colors duration-200 ${
                activeTab === key
                  ? "bg-brand-green text-white border border-brand-green"
                  : "bg-transparent text-brand-muted border border-brand-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Upcoming tab */}
        {activeTab === "upcoming" && (
          <>
            {upcoming.length === 0 ? (
              <p className="font-body text-sm text-brand-muted text-center py-12">
                No upcoming shows scheduled. Check back soon!
              </p>
            ) : (
              <>
                {featured && <FeaturedCard show={featured} />}
                {regularUpcoming.length > 0 && (
                  <div>
                    {regularUpcoming.map((show, i) => (
                      <ShowRow
                        key={show.id}
                        show={show}
                        isLast={i === regularUpcoming.length - 1}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* Past tab */}
        {activeTab === "past" && (
          <>
            {past.length === 0 ? (
              <p className="font-body text-sm text-brand-muted text-center py-12">
                No past shows yet.
              </p>
            ) : (
              <div>
                {past.map((show, i) => (
                  <ShowRow
                    key={show.id}
                    show={show}
                    isLast={i === past.length - 1}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
