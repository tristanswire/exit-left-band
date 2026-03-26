"use client";

import { useState } from "react";
import { ctaClass } from "@/components/ui/Button";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-[#1c2b22] border border-[#243320] text-white placeholder-brand-muted font-body text-base px-4 py-3 focus:outline-none focus:border-brand-green transition-colors";

const labelClass =
  "block font-heading text-sm uppercase tracking-widest text-brand-muted mb-2";

function Label({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor: string;
}) {
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}

export default function BookingForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    venueName: "",
    eventName: "",
    eventType: "",
    guests: "",
    budget: "",
    message: "",
    consent: false,
  });

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): string | null {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.eventType) return "Please select an event type.";
    if (!form.consent) return "Please agree to the privacy policy.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setErrorMessage(message);
      setStatus("error");
    }
  }

  return (
    <section id="book" className="bg-brand-card py-24">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <p className="font-heading text-sm tracking-widest uppercase text-brand-green mb-3">
            HIRE US
          </p>
          <h2 className="font-heading text-5xl uppercase text-white">
            BOOK EXIT LEFT
          </h2>
          <div className="w-[60px] h-[2px] bg-brand-green mx-auto my-8" />
        </div>

        {/* Success state */}
        {status === "success" ? (
          <div className="flex flex-col items-center text-center py-20">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a6b45"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="9,12 11,14 15,10" />
            </svg>
            <h3 className="font-heading text-3xl uppercase text-white mt-6">
              REQUEST SENT!
            </h3>
            <p className="font-body text-base text-brand-muted mt-4 max-w-md">
              Thanks for reaching out! We&apos;ll be in touch within 48 hours
              to discuss your event.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Row 1 */}
              <div>
                <Label htmlFor="name" required>Name</Label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <Label htmlFor="email" required>Email</Label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Row 2 */}
              <div>
                <Label htmlFor="phone">Phone</Label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <Label htmlFor="venueName">Venue Name</Label>
                <input
                  id="venueName"
                  type="text"
                  placeholder="Venue or location"
                  value={form.venueName}
                  onChange={(e) => set("venueName", e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Row 3 */}
              <div>
                <Label htmlFor="eventName">Event Name</Label>
                <input
                  id="eventName"
                  type="text"
                  placeholder="Name of your event"
                  value={form.eventName}
                  onChange={(e) => set("eventName", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <Label htmlFor="eventType" required>Event Type</Label>
                <select
                  id="eventType"
                  value={form.eventType}
                  onChange={(e) => set("eventType", e.target.value)}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select Event Type
                  </option>
                  <option>Private Party</option>
                  <option>Corporate Event</option>
                  <option>Wedding</option>
                  <option>Festival</option>
                  <option>Bar / Restaurant</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Row 4 */}
              <div>
                <Label htmlFor="guests">Expected Guests</Label>
                <select
                  id="guests"
                  value={form.guests}
                  onChange={(e) => set("guests", e.target.value)}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select Guest Count
                  </option>
                  <option>Under 50</option>
                  <option>50 – 100</option>
                  <option>100 – 250</option>
                  <option>250+</option>
                </select>
              </div>
              <div>
                <Label htmlFor="budget">Budget</Label>
                <input
                  id="budget"
                  type="text"
                  placeholder="Approximate budget (optional)"
                  value={form.budget}
                  onChange={(e) => set("budget", e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Row 5 — full width */}
              <div className="md:col-span-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your event (optional)"
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Row 6 — consent */}
              <div className="md:col-span-2 flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                  className="mt-0.5 accent-brand-green shrink-0"
                  required
                />
                <label
                  htmlFor="consent"
                  className="font-body text-xs text-brand-muted"
                >
                  I agree that my submitted data is being collected and stored
                  in accordance with the privacy policy.
                </label>
              </div>
            </div>

            {/* Error message */}
            {status === "error" && (
              <div
                className="mt-4 px-4 py-3 border text-base font-body"
                style={{
                  background: "rgba(220,38,38,0.1)",
                  borderColor: "rgb(220,38,38)",
                  color: "#f87171",
                }}
              >
                {errorMessage}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className={`${ctaClass} mt-8 w-full px-8 py-3 ${status === "loading" ? "pointer-events-none" : ""}`}
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 mr-2 inline"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="white"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  SENDING...
                </>
              ) : (
                "SEND BOOKING REQUEST"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
