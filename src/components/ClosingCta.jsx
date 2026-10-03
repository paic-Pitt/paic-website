import CtaLink from "./CtaLink";
import { PARTNER_MAILTO } from "@/lib/site";

export function ClosingCta() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-navy-deep py-28 md:py-40">
      <div className="u-grid-field" aria-hidden="true" />

      <div className="site-container reveal relative">
        <p className="u-annot mb-6">// Your move</p>
        <h2 className="u-display text-[clamp(2.5rem,7vw,5.5rem)]">
          Let&apos;s build something{" "}
          <span className="relative inline-block text-gold">
            real
            <svg
              viewBox="0 0 120 16"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
              className="absolute -bottom-[0.12em] left-0 h-[0.22em] w-full overflow-visible"
            >
              <path
                d="M2,10 C30,4 70,14 118,6"
                pathLength="1"
                stroke="var(--color-gold)"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="u-ink"
                style={{ animationDelay: "0.4s" }}
              />
            </svg>
          </span>
          .
        </h2>
        <div className="mt-10 flex flex-wrap items-baseline gap-x-12 gap-y-4">
          <CtaLink href="/#join" className="text-[clamp(1.25rem,2.4vw,1.75rem)]">Join the club</CtaLink>
          <CtaLink href={PARTNER_MAILTO} muted className="text-[clamp(1.25rem,2.4vw,1.75rem)]">Partner with us</CtaLink>
        </div>
      </div>
    </section>
  );
}

export default ClosingCta;
