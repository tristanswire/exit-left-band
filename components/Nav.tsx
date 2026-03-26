"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ctaClass } from "@/components/ui/Button";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "MEDIA", href: "#listen" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-dark shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div
          className="mx-auto flex items-center justify-between px-6"
          style={{ maxWidth: 1200, height: 72 }}
        >
          {/* Logo */}
          <a href="#hero" aria-label="Exit Left Band — home">
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
                  className="font-heading text-sm uppercase tracking-widest text-white transition-colors duration-200 hover:text-brand-green"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#book"
                className={`${ctaClass} px-5 py-2 text-sm`}
              >
                BOOK EXIT LEFT
              </a>
            </li>
          </ul>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden flex items-center justify-center text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              /* X icon */
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden w-full bg-brand-dark">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={handleLinkClick}
                className="flex items-center justify-center font-heading text-sm uppercase tracking-widest text-white transition-colors duration-200 hover:text-brand-green"
                style={{ height: 56 }}
              >
                {label}
              </a>
            ))}
            <div className="flex justify-center py-4">
              <a
                href="#book"
                onClick={handleLinkClick}
                className={`${ctaClass} px-6 py-3 text-sm`}
              >
                BOOK EXIT LEFT
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
