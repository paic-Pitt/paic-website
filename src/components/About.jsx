export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy-deep py-24 md:py-36">
      <div className="site-container grid gap-10 md:grid-cols-[minmax(12rem,auto)_1fr] md:gap-20">
        <p className="u-annot reveal">// What is Panther AI?</p>
        <div className="reveal">
          <p className="u-display max-w-[22ch] text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.12]">
            A workshop club where <span className="text-gold">real problems</span> meet students who build.
          </p>
          <p className="u-lede mt-8 max-w-[58ch]">
            We invite startups and companies to campus to share a challenge they&apos;re facing. Then we bring
            together students from business, marketing, computer science and beyond — and our tech team helps them
            build real solutions with AI.
          </p>
          <p className="u-lede mt-5 max-w-[58ch]">
            No AI experience required. If you&apos;re curious, you belong here.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
