"use client";

import { useEffect, useState } from "react";
import { LinkButton } from "@/components/ui/Button";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setShowVideo(true);
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background video (desktop/tablet only) */}
      {showVideo && (
        <iframe
          src="https://www.youtube-nocookie.com/embed/rthJrZFSos4?autoplay=1&mute=1&loop=1&playlist=rthJrZFSos4&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          aria-hidden="true"
          className="z-0"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.78vh",
            pointerEvents: "none",
            border: "none",
          }}
        />
      )}

      {/* Mobile fallback background */}
      {!showVideo && <div className="absolute inset-0 z-0 bg-brand-dark" />}

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,20,12,0.75) 0%, rgba(8,20,12,0.55) 50%, rgba(8,20,12,0.80) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4 text-center">
        {/* Tagline */}
        <p
          className="font-heading text-xs md:text-sm uppercase tracking-widest text-brand-muted"
          style={{
            animation: "fadeUp 0.6s ease forwards",
            animationDelay: "0.2s",
            opacity: 0,
          }}
        >
          DFW · DOE ROCK COVER BAND
        </p>

        {/* Band name */}
        <h1
          className="font-heading text-6xl md:text-8xl lg:text-9xl uppercase tracking-wide text-white"
          style={{
            animation: "fadeUp 0.6s ease forwards",
            animationDelay: "0.4s",
            opacity: 0,
          }}
        >
          EXIT LEFT
        </h1>

        {/* CTA button */}
        <LinkButton
          href="#book"
          className="px-10 py-4"
          style={{
            animation: "fadeUp 0.6s ease forwards",
            animationDelay: "0.6s",
            opacity: 0,
            boxShadow: "0 4px 24px rgba(26, 107, 69, 0.4)",
          }}
        >
          BOOK EXIT LEFT
        </LinkButton>
      </div>
    </section>
  );
}
