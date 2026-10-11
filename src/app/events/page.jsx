import Events from "@/components/Events";
import PageHeader from "@/components/PageHeader";
import { fetchAtBuild } from "@/sanity/lib/fetch";
import { EVENTS_QUERY, EVENT_SLUGS_QUERY } from "@/sanity/lib/queries";

export const metadata = { title: "Events" };

export default async function EventsPage() {
  const [initial, pageSlugs] = await Promise.all([
    fetchAtBuild(EVENTS_QUERY, { upcoming: [], past: [] }),
    fetchAtBuild(EVENT_SLUGS_QUERY, []),
  ]);

  return (
    <>
      <PageHeader
        title="Upcoming events."
        lede="Workshops, speaker sessions and build nights. Follow us on Instagram for the latest."
      />
      <Events initial={initial} pageSlugs={pageSlugs} />
    </>
  );
}
