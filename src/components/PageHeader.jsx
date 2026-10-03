// Shared intro block for inner pages (Team, Events, Announcements)
export default function PageHeader({ annot, title, lede }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-20">
      <div className="u-grid-field" aria-hidden="true" />
      <div className="site-container relative">
        <p className="u-annot mb-5 animate-draw-in">{annot}</p>
        <h1 className="u-display animate-draw-in text-[clamp(2.75rem,7vw,5.5rem)] [animation-delay:80ms]">{title}</h1>
        {lede && <p className="u-lede mt-6 max-w-[52ch] animate-draw-in [animation-delay:160ms]">{lede}</p>}
      </div>
    </section>
  );
}
