import { Lightbulb, Users, Cpu, Presentation } from "lucide-react";

const STEPS = [
  {
    icon: Lightbulb,
    title: "Bring a problem",
    tagline: "Startups & companies",
    desc: "A local startup, a marketing agency, a growing business — partners come to campus with a real challenge they're facing.",
    annot: "For partners",
  },
  {
    icon: Users,
    title: "Form the team",
    tagline: "Every major has a seat",
    desc: "We bring together students from business, marketing, computer science and beyond into cross-functional teams.",
    annot: "For students",
  },
  {
    icon: Cpu,
    title: "Build with AI",
    tagline: "Our tech team has your back",
    desc: "In hands-on workshops, our technical officers guide each team as they prototype solutions with modern AI tools.",
    annot: "The workshop",
  },
  {
    icon: Presentation,
    title: "Show the work",
    tagline: "Real results, real portfolio",
    desc: "Teams present what they built back to the partner, and walk away with experience they can actually talk about.",
    annot: "The outcome",
  },
];

// A box with blueprint-style corner marks
function DiagramNode({ annot, label, highlight = false }) {
  const corner = `absolute size-3 ${highlight ? "border-gold" : "border-chalk/45"}`;
  return (
    <div className={`relative flex h-full flex-col justify-center px-6 py-7 text-center ${highlight ? "bg-gold/10" : ""}`}>
      <span className={`${corner} top-0 left-0 border-t border-l`} />
      <span className={`${corner} top-0 right-0 border-t border-r`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} right-0 bottom-0 border-r border-b`} />
      <p className={`u-annot ${highlight ? "text-gold" : ""}`}>{annot}</p>
      <p className="u-display mt-2 text-[1.45rem] md:text-[1.6rem]">{label}</p>
    </div>
  );
}

// Hand-drawn arrow; vertical on mobile, horizontal from md up
function SketchArrow({ label, flip = false, down = false }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <span className="u-annot text-gold/80">{label}</span>
      <svg
        viewBox="0 0 100 30"
        fill="none"
        aria-hidden="true"
        className={`h-8 w-24 ${down ? "my-8 rotate-90" : "my-8 rotate-90 md:my-0 md:rotate-0"} ${flip ? "-scale-x-100" : ""}`}
      >
        <g stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4,17 C28,10 58,22 90,15" pathLength="1" className="u-ink" />
          <path d="M80,7 L92,15 L81,24" pathLength="1" className="u-ink" style={{ animationDelay: "0.6s" }} />
        </g>
      </svg>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden pt-24 pb-24 md:pt-36 md:pb-32">
      <div className="u-grid-field" aria-hidden="true" />

      <div className="site-container relative">
        <div className="reveal">
          <p className="u-annot mb-5">// How a workshop works</p>
          <h2 className="u-display text-[clamp(2.5rem,7vw,5rem)]">From problem to prototype.</h2>
        </div>

        {/* Flow diagram */}
        <div className="reveal mx-auto mt-16 max-w-5xl md:mt-24">
          <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-4">
            <DiagramNode annot="Input" label="Companies & startups" />
            <SketchArrow label="real problems" />
            <DiagramNode annot="Panther AI" label="The workshop" highlight />
            <SketchArrow label="every major" flip />
            <DiagramNode annot="Team" label="Students" />
          </div>
          <div className="mt-6 flex flex-col items-center gap-6 md:mt-4">
            <SketchArrow label="built with AI" down />
            <div className="w-full max-w-xs">
              <DiagramNode annot="Output" label="A real solution" highlight />
            </div>
          </div>
        </div>

        {/* Steps — thin chalk lines between cells */}
        <ol className="mt-20 grid gap-px border border-chalk/12 bg-chalk/12 md:mt-28 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="reveal group flex flex-col gap-5 bg-navy p-8 transition-colors duration-300 hover:bg-navy-lift md:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon strokeWidth={1.25} className="size-9 text-chalk/85 transition-colors duration-300 group-hover:text-gold" />
                  <span className="font-mono text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="u-display text-[1.9rem] leading-tight">{step.title}</h3>
                  <p className="mt-2 text-[1.05rem] leading-snug text-chalk/90">{step.tagline}</p>
                </div>
                <p className="u-lede text-[0.98rem] leading-relaxed">{step.desc}</p>
                <span className="u-annot mt-auto flex items-center gap-3 pt-2 transition-colors duration-300 group-hover:text-chalk">
                  <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
                  {step.annot}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
