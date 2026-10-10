const MAJORS = [
  "Marketing",
  "Finance",
  "Computer Science",
  "Nursing",
  "Accounting",
  "Psychology",
  "Engineering",
  "Economics",
  "Biology",
  "Communication",
  "Information Science",
  "Undecided",
];

// Scrolling strip of majors. The list is rendered twice so the loop is seamless.
export default function MajorsMarquee() {
  return (
    <div className="overflow-hidden border-y-[1.5px] border-ink bg-ink py-4 text-paper">
      <p className="sr-only">Students from every major are welcome.</p>
      <div aria-hidden="true" className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {MAJORS.map((major) => (
              <li key={major} className="u-display flex items-center gap-7 pr-7 text-[1.35rem] uppercase md:text-[1.6rem]">
                {major}
                <span className="size-2.5 rounded-full bg-gold" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
