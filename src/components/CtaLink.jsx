import { MoveRight } from "lucide-react";

// Large text link with a gold arrow that nudges forward on hover
export default function CtaLink({ href, children, className = "", muted = false }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-baseline gap-[0.6em] font-display font-medium transition-colors ${
        muted ? "text-chalk/70 hover:text-chalk" : "text-chalk"
      } ${className}`}
    >
      <MoveRight
        aria-hidden="true"
        strokeWidth={1.5}
        className="size-[0.9em] shrink-0 translate-y-[0.12em] text-gold transition-transform duration-300 group-hover:translate-x-1.5"
      />
      <span className="underline decoration-transparent decoration-1 underline-offset-[0.25em] transition-colors duration-300 group-hover:decoration-gold">
        {children}
      </span>
    </a>
  );
}
