"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ctaClass } from "@/components/ui/Button";

const navLinks = [
  { label: "SHOWS", href: "#shows" },
  { label: "ABOUT", href: "#about" },
  { label: "MEDIA", href: "#listen" },
  { label: "PHOTOS", href: "#gallery" },
];

const staggerDelays = ["50ms", "100ms", "150ms", "200ms"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <>
      {/* Full screen mobile overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
        style={{
          background: "#080f0b",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
          visibility: menuOpen ? "visible" : "hidden",
          transition: "opacity 300ms ease, transform 300ms ease, visibility 300ms ease",
          pointerEvents: menuOpen ? "all" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={handleLinkClick}
              className="font-heading text-4xl uppercase tracking-wide text-white transition-colors duration-200 hover:text-brand-green"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 300ms ease ${staggerDelays[i]}, transform 300ms ease ${staggerDelays[i]}`,
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#book"
            onClick={handleLinkClick}
            className={`${ctaClass} px-8 py-3 mt-6`}
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 300ms ease 250ms, transform 300ms ease 250ms",
            }}
          >
            BOOK EXIT LEFT
          </a>
        </div>
      </div>

      {/* Nav bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-brand-dark shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div
          className="mx-auto flex items-center justify-between px-6"
          style={{ maxWidth: 1200, height: 72 }}
        >
          {/* Logo */}
          <a href="#hero" aria-label="Exit Left Band — home" onClick={handleLinkClick}>
            <Image
              src="/images/logo.png"
              alt="Exit Left Band Logo"
              width={48}
              height={48}
              priority
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-heading text-base uppercase tracking-widest text-white transition-colors duration-200 hover:text-brand-green"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#book" className={`${ctaClass} px-5 py-2 text-sm`}>
                BOOK EXIT LEFT
              </a>
            </li>
          </ul>

          {/* Hamburger / X (mobile) */}
          <button
            className="md:hidden flex items-center justify-center text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
