import { notFound } from "next/navigation";
import EventDetail from "@/components/EventDetail";
import { fetchAtBuild } from "@/sanity/lib/fetch";
import { EVENT_QUERY, EVENT_SLUGS_QUERY } from "@/sanity/lib/queries";

// The site is a static export, so only the pages listed here exist
export const dynamicParams = false;

// A static export refuses to build a dynamic route with no pages at all, so when no event
// has a write-up yet we build this one placeholder, which just shows "not found".
const PLACEHOLDER = "_";

// One page per event that has a write-up in the Studio
export async function generateStaticParams() {
  const slugs = await fetchAtBuild(EVENT_SLUGS_QUERY, []);
  return slugs.length > 0 ? slugs.map((slug) => ({ slug })) : [{ slug: PLACEHOLDER }];
}

const getEvent = (slug) => (slug === PLACEHOLDER ? null : fetchAtBuild(EVENT_QUERY, null, { slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = await getEvent(slug);
  return event ? { title: event.title, description: event.description } : { title: "Event" };
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) notFound();

  return <EventDetail initial={event} slug={slug} />;
}
