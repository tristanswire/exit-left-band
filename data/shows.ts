export interface Show {
  id: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  state: string;
  mapsUrl: string;
  isFeatured?: boolean;
}

export const shows: Show[] = [
  {
    id: "show-008",
    date: "2026-07-24",
    time: "7:00 PM",
    venue: "Guitars & Growlers",
    city: "Richardson",
    state: "TX",
    mapsUrl:
      "https://maps.app.goo.gl/NYw5pqQVJ9hNL3iY7",
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
