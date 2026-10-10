import { PARTNER_MAILTO } from "@/lib/site";

const goldLink = "text-gold underline decoration-gold/40 decoration-2 underline-offset-4 transition-colors hover:decoration-gold";

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
        Join a <a href="/#join" className={goldLink}>workshop team</a>. No code required.
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
  {
    who: "I just want to meet people curious about AI.",
    answer: (
      <>
        <a href="/#join" className={goldLink}>Join the community</a>.
      </>
    ),
  },
];

export function Pathways() {
  return (
    <section id="pathways" className="pb-20 md:pb-28">
      <div className="site-container">
        <div className="u-card bg-blue px-7 py-12 text-paper md:px-14 md:py-16">
          <div className="reveal">
            <h2 className="u-display max-w-[18ch] text-[clamp(2.1rem,5vw,3.75rem)]">What can I do at Panther AI?</h2>
          </div>

          <dl className="mt-10 border-b border-paper/25 md:mt-14">
            {PATHS.map((path) => (
              <div
                key={path.who}
                className="reveal grid gap-2 border-t border-paper/25 py-6 md:grid-cols-[1.15fr_1fr] md:items-baseline md:gap-10"
              >
                <dt className="font-display text-[clamp(1.2rem,2.3vw,1.6rem)] leading-snug font-medium text-paper/85">
                  &ldquo;{path.who}&rdquo;
                </dt>
                <dd className="font-display text-[clamp(1.15rem,2.1vw,1.5rem)] font-semibold">{path.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Pathways;
