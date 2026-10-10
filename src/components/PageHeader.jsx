// Shared intro block for inner pages (Team, Events, Announcements)
export default function PageHeader({ title, lede }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-12 md:pt-20 md:pb-16">
      {/* Loose shapes in the corner */}
      <div aria-hidden="true" className="pointer-events-none absolute top-10 right-[6%] hidden md:block">
        <span className="block size-28 rounded-full border-[1.5px] border-ink bg-gold" />
        <span className="-mt-10 -ml-14 block size-20 rotate-12 rounded-3xl border-[1.5px] border-ink bg-sky" />
      </div>

      <div className="site-container relative">
        <h1 className="u-display animate-draw-in text-[clamp(2.6rem,6.5vw,5rem)]">{title}</h1>
        {lede && <p className="u-lede mt-5 max-w-[52ch] animate-draw-in text-ink/75 [animation-delay:160ms]">{lede}</p>}
      </div>
    </section>
  );
}
