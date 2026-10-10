import { Blocks, MessageCircleQuestion, Presentation, Users } from "lucide-react";

const STEPS = [
  {
    icon: MessageCircleQuestion,
    title: "Bring a problem",
    tagline: "Startups & companies",
    desc: "A local startup, a marketing agency, a growing business. Partners come to campus with a real challenge they're facing.",
    annot: "For partners",
    tone: "bg-white",
  },
  {
    icon: Users,
    title: "Form the team",
    tagline: "Every major has a seat",
    desc: "We put students from business, marketing, computer science and beyond on the same team, on purpose.",
    annot: "For students",
    tone: "bg-sky",
  },
  {
    icon: Blocks,
    title: "Build with AI",
    tagline: "Our tech team has your back",
    desc: "In hands-on workshops, our technical officers sit with each team and help them put a working prototype together.",
    annot: "The workshop",
    tone: "bg-blue text-paper",
  },
  {
    icon: Presentation,
    title: "Show the work",
    tagline: "Something for your resume",
    desc: "Teams present what they built back to the partner, and walk away with experience they can actually talk about.",
    annot: "The outcome",
    tone: "bg-gold",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="pb-20 md:pb-28">
      <div className="site-container">
        <div className="reveal">
          <h2 className="u-display text-[clamp(2.25rem,5.5vw,4.25rem)]">From problem to prototype.</h2>
        </div>

        <ol className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className={`reveal u-card flex flex-col gap-5 p-7 transition-all duration-150 hover:-translate-y-1 hover:shadow-pop ${step.tone}`}
              >
                <div className="flex items-start justify-between">
                  <span className="u-display text-[4rem] leading-[0.8]">{i + 1}</span>
                  <span className="grid size-12 place-items-center rounded-full border-[1.5px] border-ink bg-paper text-ink">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                </div>
                <div>
                  <h3 className="u-display text-[1.7rem]">{step.title}</h3>
                  <p className="mt-1 font-semibold opacity-75">{step.tagline}</p>
                </div>
                <p className="leading-relaxed opacity-85">{step.desc}</p>
                <span className="u-tag mt-auto self-start bg-white">{step.annot}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
