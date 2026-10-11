import { Calculator, CodeXml, MapPin, Megaphone, Palette, Plus, Stethoscope, Store } from "lucide-react";
import CtaLink from "./CtaLink";
import { PARTNER_MAILTO } from "@/lib/site";

const FACTS = [
  { value: "0", label: "coding experience needed", tone: "bg-white" },
  { value: "Every", label: "major welcome", tone: "bg-sky" },
  { value: "Hands-on", label: "experience through workshops", tone: "bg-gold" },
];

// Who's sitting around the table, clockwise from the top
const SEATS = [
  { label: "Marketing", icon: Megaphone, tone: "bg-white" },
  { label: "Finance", icon: Calculator, tone: "bg-sky" },
  { label: "You?", icon: Plus, tone: "border-dashed bg-paper" },
  { label: "Comp Sci", icon: CodeXml, tone: "bg-blue text-paper" },
  { label: "Nursing", icon: Stethoscope, tone: "bg-coral" },
  { label: "Design", icon: Palette, tone: "bg-white" },
];

// A workshop seen from above: one company problem on the table, a different major in every seat.
// Sizes are in cqw so the whole drawing scales with its container.
function WorkshopTable() {
  return (
    <figure className="mx-auto w-full max-w-[32rem] animate-fade-in [animation-delay:200ms]">
      <div className="@container relative aspect-square">
        <div className="absolute top-1/2 left-1/2 grid size-[46%] -translate-1/2 place-items-center rounded-full border-[1.5px] border-ink bg-gold shadow-pop">
          <div className="flex flex-col items-center gap-[2.2cqw] px-[4cqw] text-center">
            <span className="grid size-[9cqw] place-items-center rounded-full border-[1.5px] border-ink bg-white">
              <Store className="size-[4.6cqw]" strokeWidth={2} />
            </span>
            <p className="u-display text-[4.4cqw] leading-[1.1]">Different majors.
A shared curiosity about AI.</p>
          </div>
        </div>

        {SEATS.map((seat, i) => {
          const Icon = seat.icon;
          const angle = (i / SEATS.length) * 2 * Math.PI - Math.PI / 2;
          return (
            <div
              key={seat.label}
              className="absolute size-[23%] -translate-1/2"
              style={{ left: `${50 + 38.5 * Math.cos(angle)}%`, top: `${50 + 38.5 * Math.sin(angle)}%` }}
            >
              <div
                className={`flex size-full animate-draw-in flex-col items-center justify-center gap-[1cqw] rounded-full border-[1.5px] border-ink shadow-pop-sm ${seat.tone}`}
                style={{ animationDelay: `${300 + i * 90}ms` }}
              >
                <Icon className="size-[5.4cqw]" strokeWidth={2} />
                <span className="text-[3cqw] leading-none font-semibold">{seat.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      <figcaption className="mt-6 text-center font-medium text-ink/70">
        Learn from people working in the field—and from students who see things differently.
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="site-container relative grid items-center gap-14 pt-10 pb-20 md:pt-14 md:pb-28 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
        <div>
          <h1 className="u-display max-w-[22ch] animate-draw-in text-[clamp(2.4rem,4.3vw,3.9rem)]">
            Explore how AI is applied across disciplines, with industry and <span className="u-mark">hands-on experience</span>.
          </h1>

          <p className="u-lede mt-7 max-w-[48ch] animate-draw-in text-ink/75 [animation-delay:80ms]">
           AI is changing how people work. What does that look like in the field you’re studying? At PAIC, 
            students from every major connect with industry professionals, explore that question, and gain 
            experience through hands-on workshops. Bring your perspective. No coding experience needed.
          </p>

          <p className="mt-5 flex animate-draw-in items-center gap-2 font-semibold [animation-delay:140ms]">
            <MapPin aria-hidden="true" size={18} strokeWidth={2.25} className="shrink-0 text-blue" />
            A student club at the University of Pittsburgh
          </p>

          <div className="mt-8 flex animate-draw-in flex-wrap items-center gap-4 [animation-delay:200ms]">
            <CtaLink href="/#join">Get involved</CtaLink>
            <CtaLink href={PARTNER_MAILTO} variant="outline">
              Bring us a problem
            </CtaLink>
          </div>

          <dl className="mt-12 grid max-w-xl animate-fade-in gap-3 [animation-delay:400ms] sm:grid-cols-3">
            {FACTS.map((fact) => (
              <div key={fact.label} className={`u-card flex items-baseline gap-3 px-5 py-4 sm:block ${fact.tone}`}>
                <dt className="u-display text-[1.9rem]">{fact.value}</dt>
                <dd className="text-sm leading-snug font-medium sm:mt-1">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <WorkshopTable />
      </div>
    </section>
  );
}

export default Hero;
