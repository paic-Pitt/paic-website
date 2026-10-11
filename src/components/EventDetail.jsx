"use client";

import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import CtaLink from "./CtaLink";
import RichText from "./RichText";
import { formatDate, formatTime, useSanityQuery } from "@/lib/useSanityQuery";
import { urlFor } from "@/sanity/lib/image";
import { EVENT_QUERY } from "@/sanity/lib/queries";

// An event's own page. Only events with a write-up in the Studio get one.
export default function EventDetail({ initial, slug }) {
  const event = useSanityQuery(EVENT_QUERY, initial, { slug });

  return (
    <article className="pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="site-container">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/events"
            className="group inline-flex items-center gap-1.5 font-semibold text-blue underline-offset-4 hover:underline"
          >
            <ArrowLeft size={16} strokeWidth={2.25} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            All events
          </Link>

          <h1 className="u-display mt-6 animate-draw-in text-[clamp(2.2rem,5vw,3.75rem)]">{event.title}</h1>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
            <li className="flex items-center gap-1.5">
              <CalendarDays aria-hidden="true" size={18} strokeWidth={2.25} className="shrink-0 text-blue" />
              {formatDate(event.startsAt)} · {formatTime(event.startsAt)}
              {event.endsAt && ` – ${formatTime(event.endsAt)}`}
            </li>
            {event.location && (
              <li className="flex items-center gap-1.5">
                <MapPin aria-hidden="true" size={18} strokeWidth={2.25} className="shrink-0 text-blue" />
                {event.location}
              </li>
            )}
          </ul>

          {event.image?.asset && (
            <img
              src={urlFor(event.image).width(1536).height(864).fit("crop").url()}
              alt={event.image.alt || ""}
              className="u-card mt-8 aspect-video w-full object-cover"
            />
          )}

          {event.description && <p className="u-lede mt-8 whitespace-pre-line text-ink">{event.description}</p>}

          <RichText value={event.body} className="mt-6 text-[1.0625rem] leading-relaxed" />

          {event.link && (
            <div className="mt-10">
              <CtaLink href={event.link}>Learn more</CtaLink>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
