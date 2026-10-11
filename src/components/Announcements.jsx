"use client";

import RichText from "./RichText";
import { formatDate, useSanityQuery } from "@/lib/useSanityQuery";
import { ANNOUNCEMENTS_QUERY } from "@/sanity/lib/queries";

// Announcements come from Sanity (the "Announcement" type in the Studio)
export default function Announcements({ initial }) {
  const announcements = useSanityQuery(ANNOUNCEMENTS_QUERY, initial);

  return (
    <section id="announcement" className="pb-20 md:pb-28">
      <div className="site-container">
        {announcements.length > 0 ? (
          <ul className="grid max-w-4xl gap-5">
            {announcements.map((a) => (
              <li key={a._id} className="u-card bg-white p-7 md:p-9">
                <p className="u-tag bg-sky">{formatDate(a.publishedAt)}</p>
                <h2 className="u-display mt-4 text-[clamp(1.6rem,3vw,2.25rem)]">{a.title}</h2>
                {a.body && <RichText value={a.body} className="u-lede mt-3 max-w-[60ch]" />}
              </li>
            ))}
          </ul>
        ) : (
          <div className="u-card max-w-2xl bg-white p-7 md:p-9">
            <h2 className="u-display text-[1.6rem]">No announcements yet.</h2>
            <p className="mt-3 leading-relaxed text-ink/70">Check back soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
