"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { formatDate, formatTime, useSanityQuery } from "@/lib/useSanityQuery";
import { SOCIALS } from "@/lib/site";
import { urlFor } from "@/sanity/lib/image";
import { EVENTS_QUERY } from "@/sanity/lib/queries";

// href is the event's own page; only events with a write-up have one
function EventCard({ event, href }) {
  return (
    <li className="group u-card relative flex flex-col overflow-hidden bg-white transition-all duration-150 hover:-translate-y-1 hover:shadow-pop">
      {event.image?.asset && (
        <div className="aspect-[16/10] overflow-hidden border-b-[1.5px] border-ink">
          <img
            src={urlFor(event.image).width(1000).height(625).fit("crop").url()}
            alt={event.image.alt || ""}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="u-display text-[clamp(1.6rem,2.4vw,2rem)]">
          {href ? (
            // The ::after layer stretches the link over the whole card
            <Link href={href} className="after:absolute after:inset-0">
              {event.title}
            </Link>
          ) : (
            event.title
          )}
        </h3>
        {event.location && (
          <p className="mt-2 flex items-center gap-1.5 text-ink/70">
            <MapPin aria-hidden="true" size={16} strokeWidth={2.25} className="shrink-0 text-blue" />
            {event.location}
          </p>
        )}
        {/* Three lines at most, so every card stays the same height */}
        {event.description && <p className="mt-3 line-clamp-3 leading-relaxed text-ink/70">{event.description}</p>}

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <p className="leading-tight">
            <span className="block font-semibold">{formatDate(event.startsAt)}</span>
            <span className="text-sm text-ink/60">{formatTime(event.startsAt)}</span>
          </p>
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex shrink-0 items-center gap-1 rounded-full bg-ink px-5 py-2.5 font-semibold text-paper transition-colors hover:bg-blue"
            >
              Learn more <ArrowUpRight size={16} strokeWidth={2.25} />
            </a>
          )}
          {href && !event.link && (
            <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-blue">
              Read more
              <ArrowRight size={16} strokeWidth={2.25} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

// Events come from Sanity (the "Event" type in the Studio)
// pageSlugs lists the event pages that exist in this build of the site. An event published
// since then shows up here right away, but only links to its page after the next deploy.
export default function Events({ initial, pageSlugs }) {
  const { upcoming, past } = useSanityQuery(EVENTS_QUERY, initial);
  const pageFor = (event) =>
    event.hasBody && pageSlugs.includes(event.slug) ? `/events/${event.slug}` : null;
  const instagram = SOCIALS.find((social) => social.label === "Instagram");

  return (
    <section id="events" className="pb-20 md:pb-28">
      <div className="site-container">
        {upcoming.length > 0 ? (
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-[repeat(2,minmax(0,34rem))]">
            {upcoming.map((event) => (
              <EventCard key={event._id} event={event} href={pageFor(event)} />
            ))}
          </ul>
        ) : (
          <div className="u-card max-w-2xl bg-white p-7 md:p-9">
            <h2 className="u-display text-[1.6rem]">Nothing on the calendar right now.</h2>
            <p className="mt-3 leading-relaxed text-ink/70">
              New workshops get posted here first.{" "}
              {instagram && (
                <>
                  You can also follow us on{" "}
                  <a
                    href={instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue underline-offset-4 hover:underline"
                  >
                    Instagram
                  </a>
                  .
                </>
              )}
            </p>
          </div>
        )}

        {past.length > 0 && (
          <>
            <h2 className="u-display mt-16 text-[clamp(1.75rem,3.5vw,2.5rem)] md:mt-24">Past events</h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-[repeat(2,minmax(0,34rem))]">
              {past.map((event) => (
                <EventCard key={event._id} event={event} href={pageFor(event)} />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
