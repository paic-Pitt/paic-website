import NeuralNet from "./NeuralNet";
import CtaLink from "./CtaLink";
import { PARTNER_MAILTO } from "@/lib/site";

const FACTS = [
  { value: "Every", label: "major welcome" },
  { value: "Real", label: "company problems" },
  { value: "Hands-on", label: "AI workshops" },
];

// A word with a hand-drawn gold circle around it
function Circled({ children }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        viewBox="0 0 200 64"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-[9%] -inset-y-[18%] h-[136%] w-[118%] overflow-visible"
      >
        <path
          d="M14,40 C4,24 40,8 96,6 C150,4 196,14 194,32 C192,50 146,60 96,58 C48,56 8,48 10,30 C12,18 36,10 66,8"
          pathLength="1"
          stroke="var(--color-gold)"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="u-ink"
          style={{ animationDelay: "0.9s", animationDuration: "1.1s" }}
        />
      </svg>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="u-grid-field" aria-hidden="true" />
      <NeuralNet className="pointer-events-none absolute top-[14%] -right-[38%] w-[120%] opacity-35 md:top-[8%] md:right-[1%] md:w-[52%] md:opacity-100 lg:w-[46%]" />

      <div className="site-container relative flex min-h-[78vh] flex-col justify-center pt-10 pb-20 md:min-h-[86vh]">
        {/* <p className="u-annot mb-7 flex animate-draw-in items-center gap-3">
          <span className="size-1.5 animate-node-pulse rounded-full bg-gold" />
          Panther AI Club · University of Pittsburgh
        </p> */}

        <h1 className="u-display max-w-[13ch] animate-draw-in text-[clamp(2.75rem,6.6vw,6.25rem)]">
          We believe <Circled>anyone</Circled> can build with AI.
        </h1>

        <p className="u-lede mt-8 max-w-[46ch] animate-draw-in [animation-delay:120ms]">
          We bring startups and companies to Pitt with real problems, then team them up with students from every
          major to solve them — hands-on, with AI.
        </p>

        <div className="mt-10 flex animate-draw-in flex-wrap items-baseline gap-x-10 gap-y-4 [animation-delay:240ms]">
          <CtaLink href="/#join" className="text-[clamp(1.5rem,3vw,2.25rem)]">
            Get involved
          </CtaLink>
          <CtaLink href={PARTNER_MAILTO} muted className="text-[clamp(1.05rem,1.6vw,1.3rem)]">
            Bring us a problem
          </CtaLink>
        </div>

        <dl className="mt-16 flex animate-fade-in flex-wrap items-baseline gap-x-3 gap-y-3 [animation-delay:500ms] md:mt-24">
          {FACTS.map((fact, i) => (
            <div key={fact.label} className="flex items-baseline gap-2">
              <dt className="u-display text-[1.5rem] md:text-[1.9rem]">{fact.value}</dt>
              <dd className="u-annot">{fact.label}</dd>
              {i < FACTS.length - 1 && <span className="mx-3 hidden h-4 w-px self-center bg-chalk/25 sm:block" aria-hidden="true" />}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;
