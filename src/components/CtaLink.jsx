import Link from "next/link";
import { ArrowRight } from "lucide-react";

const VARIANTS = {
  primary: "bg-gold text-ink",
  dark: "bg-ink text-paper",
  outline: "bg-white text-ink",
};

// Pill button link with a hard shadow that presses down on hover
export default function CtaLink({ href, children, className = "", variant = "primary" }) {
  // Pages on this site go through next/link; mailto: and outside links stay plain anchors
  const Tag = href.startsWith("/") ? Link : "a";
  return (
    <Tag
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-6 py-3 font-display text-[1.05rem] font-semibold shadow-pop transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-pop-sm active:translate-x-1 active:translate-y-1 active:shadow-none ${VARIANTS[variant]} ${className}`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} strokeWidth={2.25} className="transition-transform duration-200 group-hover:translate-x-0.5" />
    </Tag>
  );
}
