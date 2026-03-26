import React from "react";

// Shared CTA button styles — used across Hero, About, Gallery, Nav, BookingForm
export const ctaClass =
  "inline-block font-heading text-base uppercase tracking-widest " +
  "text-white bg-brand-green border-2 border-brand-green px-8 py-3 cursor-pointer " +
  "transition-all duration-150 ease-out " +
  "hover:bg-[#145235] hover:text-white " +
  "active:scale-[0.97] " +
  "focus:outline-none focus:outline-brand-green focus:outline-offset-[3px] " +
  "disabled:opacity-60 disabled:cursor-not-allowed";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`${ctaClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function LinkButton({ children, className = "", ...props }: LinkButtonProps) {
  return (
    <a className={`${ctaClass} ${className}`} {...props}>
      {children}
    </a>
  );
}
