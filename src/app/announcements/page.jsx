import Announcements from "@/components/Announcements";
import PageHeader from "@/components/PageHeader";
import { fetchAtBuild } from "@/sanity/lib/fetch";
import { ANNOUNCEMENTS_QUERY } from "@/sanity/lib/queries";

export const metadata = { title: "Announcements" };

export default async function AnnouncementsPage() {
  const initial = await fetchAtBuild(ANNOUNCEMENTS_QUERY, []);

  return (
    <>
      <PageHeader title="Announcements." lede="News, updates and calls for teams from PAIC." />
      <Announcements initial={initial} />
    </>
  );
}
