import CtaLink from "./CtaLink";
import { PARTNER_MAILTO } from "@/lib/site";

export function ClosingCta() {
  return (
    <section id="get-started" className="pb-20 md:pb-28">
      <div className="site-container">
        <div className="reveal u-card bg-gold px-7 py-14 md:px-14 md:py-20">
          <h2 className="u-display text-[clamp(2.4rem,6.5vw,5rem)]">
            Let&apos;s build something{" "}
            <span className="relative inline-block">
              real
              <svg
                viewBox="0 0 120 16"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
                className="absolute -bottom-[0.1em] left-0 h-[0.2em] w-full overflow-visible"
              >
                <path
                  d="M2,10 C30,4 70,14 118,6"
                  pathLength="1"
                  stroke="var(--color-blue)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="u-ink"
                  style={{ animationDelay: "0.4s" }}
                />
              </svg>
            </span>
            .
          </h2>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CtaLink href="/#join" variant="dark">Join the club</CtaLink>
            <CtaLink href={PARTNER_MAILTO} variant="outline">Partner with us</CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClosingCta;
