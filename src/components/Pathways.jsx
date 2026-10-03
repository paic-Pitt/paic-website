import NeuralNet from "./NeuralNet";
import CtaLink from "./CtaLink";
import { PARTNER_MAILTO } from "@/lib/site";

const goldLink = "text-gold underline decoration-gold/0 underline-offset-4 transition-colors hover:decoration-gold";

const PATHS = [
  {
    who: "I run a startup or company with a problem.",
    answer: (
      <>
        <a href={PARTNER_MAILTO} className={goldLink}>Bring it to a workshop</a>.
      </>
    ),
  },
  {
    who: "I study business, marketing, or anything else.",
    answer: (
      <>
        Join a <a href="/#join" className={goldLink}>workshop team</a> — no code required.
      </>
    ),
  },
  {
    who: "I want to learn how to build with AI.",
    answer: (
      <>
        Come to our <a href="/events" className={goldLink}>workshops</a>.
      </>
    ),
  },
  {
    who: "I want to help teams build things.",
    answer: (
      <>
        Meet the <a href="/team" className={goldLink}>tech team</a>.
      </>
    ),
  },
];

export function Pathways() {
  return (
    <section id="pathways" className="relative overflow-hidden bg-navy-deep py-24 md:py-36">
      <NeuralNet className="pointer-events-none absolute top-[8%] -right-[30%] w-[90%] opacity-20 md:-right-[10%] md:w-[50%]" />

      <div className="site-container relative">
        <div className="reveal">
          <p className="u-annot mb-5">// Find your place</p>
          <h2 className="u-display max-w-[18ch] text-[clamp(2.2rem,5.5vw,4rem)]">What can I do at Panther AI?</h2>
        </div>

        <dl className="mt-14 md:mt-20">
          {PATHS.map((path) => (
            <div
              key={path.who}
              className="reveal grid gap-2 border-t border-chalk/12 py-7 md:grid-cols-[1.1fr_1fr] md:items-baseline md:gap-10"
            >
              <dt className="u-display text-[clamp(1.35rem,2.9vw,2rem)] text-chalk/85">{path.who}</dt>
              <dd className="u-display text-[clamp(1.1rem,2.2vw,1.5rem)]">{path.answer}</dd>
            </div>
          ))}
          <div className="reveal grid gap-2 border-y border-chalk/12 py-7 md:grid-cols-[1.1fr_1fr] md:items-baseline md:gap-10">
            <dt className="u-display text-[clamp(1.35rem,2.9vw,2rem)] text-chalk/85">
              I just want to meet people curious about AI.
            </dt>
            <dd>
              <CtaLink href="/#join" className="text-[clamp(1.1rem,2.2vw,1.5rem)]">
                Join the community.
              </CtaLink>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Pathways;
