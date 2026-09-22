export interface Show {
  id: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  state: string;
  mapsUrl: string;
  isFeatured?: boolean;
  /** Flyer shown on the Next Show card. Disappears when the show goes Past. */
  image?: string;
  /** Secondary line on the Next Show card, e.g. "Unplugged set". */
  note?: string;
  /** Headline used by the announcement bar, e.g. "Exit Left Unplugged". */
  promoTitle?: string;
  /** Promote in the announcement bar without a flyer image. */
  announce?: boolean;
}

/** Shows are scheduled — and expire — in the band's local time. */
export const SHOW_TIME_ZONE = "America/Chicago";

/** Today in SHOW_TIME_ZONE as "YYYY-MM-DD", comparable to Show.date. */
export function todayInShowTimeZone(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: SHOW_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/**
 * Soonest upcoming show worth promoting in the announcement bar: one with a
 * flyer or an explicit `announce` flag. Stays through the end of show day.
 */
export function getPromoShow(today: string): Show | null {
  return (
    shows
      .filter((s) => s.date >= today && (s.image || s.announce))
      .sort((a, b) => a.date.localeCompare(b.date))[0] ?? null
  );
}

export const shows: Show[] = [
    {
    id: "show-010",
    date: "2026-10-24",
    time: "7:00 PM",
    venue: "Guitars & Growlers",
    city: "Richardson",
    state: "TX",
    mapsUrl:
      "https://maps.app.goo.gl/NYw5pqQVJ9hNL3iY7",
    isFeatured: true,
    image: "/images/shows/unplugged-oct-24.jpg",
    note: "Unplugged set with Rob and Ty",
    promoTitle: "Exit Left Unplugged",
  },
  {
    id: "show-009",
    date: "2026-07-31",
    time: "7:00 PM",
    venue: "Guitars & Growlers",
    city: "Richardson",
    state: "TX",
    mapsUrl:
      "https://maps.app.goo.gl/NYw5pqQVJ9hNL3iY7",
    isFeatured: true,
  },
  {
    id: "show-008",
    date: "2026-07-04",
    time: "7:00 PM",
    venue: "Private Event",
    city: "",
    state: "Texas",
    mapsUrl: "",
    isFeatured: true,
  },
  {
    id: "show-007",
    date: "2026-06-06",
    time: "7:00 PM",
    venue: "Oak Highlands Brewery",
    city: "Richardson",
    state: "TX",
    mapsUrl:
      "https://maps.app.goo.gl/C96QMLAn3XG198on6",
    isFeatured: true,
  },
  {
    id: "show-006",
    date: "2026-04-17",
    time: "7:00 PM",
    venue: "Guitars & Growlers",
    city: "Flower Mound",
    state: "TX",
    mapsUrl:
      "https://maps.google.com/?q=400+Flower+Mound+Rd+Suite+160+Flower+Mound+TX+75028",
    isFeatured: true,
  },
  {
    id: "show-005",
    date: "2026-02-26",
    time: "7:00 PM",
    venue: "Lakewood Brewery",
    city: "Garland",
    state: "TX",
    mapsUrl:
      "https://maps.app.goo.gl/hp7yuWh6k1y6NUuS6",
    isFeatured: true,
  },
  {
    id: "show-004",
    date: "2026-01-30",
    time: "7:00 PM",
    venue: "Guitars & Growlers",
    city: "Richardson",
    state: "TX",
    mapsUrl:
      "https://maps.app.goo.gl/NYw5pqQVJ9hNL3iY7",
    isFeatured: true,
  },
  {
    id: "show-003",
    date: "2026-01-17",
    time: "7:00 PM",
    venue: "Guitars & Growlers",
    city: "Flower Mound",
    state: "TX",
    mapsUrl:
      "https://maps.google.com/?q=400+Flower+Mound+Rd+Suite+160+Flower+Mound+TX+75028",
    isFeatured: true,
  },
  {
    id: "show-002",
    date: "2025-11-25",
    time: "7:00 PM",
    venue: "Guitars & Growlers",
    city: "Flower Mound",
    state: "TX",
    mapsUrl:
      "https://maps.google.com/?q=400+Flower+Mound+Rd+Suite+160+Flower+Mound+TX+75028",
    isFeatured: true,
  },
  {
    id: "show-001",
    date: "2025-11-11",
    time: "7:00 PM",
    venue: "Guitars & Growlers",
    city: "Richardson",
    state: "TX",
    mapsUrl:
      "https://maps.app.goo.gl/NYw5pqQVJ9hNL3iY7",
    isFeatured: true,
  },
];
