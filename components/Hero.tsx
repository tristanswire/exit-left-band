"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.78vh",
            objectFit: "cover",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <source src="/videos/exit-left.mp4" type="video/mp4" />
        </video>
      )}

      {/* Mobile fallback: static image */}
      {!showVideo && (
        <Image
          src="/images/gallery/photo-8.jpg"
          alt="Exit Left Band"
          fill
          priority
          className="object-cover object-center z-0"
        />
      )}

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: showVideo
            ? "linear-gradient(to bottom, rgba(8,20,12,0.75) 0%, rgba(8,20,12,0.55) 50%, rgba(8,20,12,0.80) 100%)"
            : "linear-gradient(to bottom, rgba(8,20,12,0.70) 0%, rgba(8,20,12,0.50) 50%, rgba(8,20,12,0.75) 100%)",
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
          DFW ROCK COVER BAND
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
