"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryClientProps {
  images: string[];
}

export default function GalleryClient({ images }: GalleryClientProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = useCallback(() => setSelectedIndex(null), []);

  const prev = useCallback(() => {
    setSelectedIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );
  }, [images.length]);

  const next = useCallback(() => {
    setSelectedIndex((i) =>
      i === null ? null : (i + 1) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, close, prev, next]);

  if (images.length === 0) {
    return (
      <p className="font-body text-brand-muted text-center py-20">
        Photos coming soon.
      </p>
    );
  }

  return (
    <>
      {/* Grid */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {images.map((src, i) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => setSelectedIndex(i)}
            >
              <Image
                src={src}
                alt={`Gallery photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 transition-colors duration-300 bg-transparent group-hover:bg-[rgba(26,107,69,0.3)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={close}
        >
          {/* Stop clicks on inner content from closing */}
          <div
            className="flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: "relative", width: "90vw", height: "80vh" }}>
              <Image
                src={images[selectedIndex]}
                alt={`Gallery photo ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <p className="font-body text-sm text-brand-muted text-center mt-4">
              {selectedIndex + 1} / {images.length}
            </p>
          </div>

          {/* Close button */}
          <button
            className="fixed top-4 right-4 z-50"
            onClick={close}
            aria-label="Close lightbox"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
              fill="none"
              width="32"
              height="32"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev arrow */}
          <button
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
              fill="none"
              width="40"
              height="40"
            >
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            className="fixed right-4 top-1/2 -translate-y-1/2 z-50"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
              fill="none"
              width="40"
              height="40"
            >
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
