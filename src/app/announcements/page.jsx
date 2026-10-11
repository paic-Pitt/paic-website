import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Announcements" };

// interface Announcement {

// }
const announcement = [
  {
      id: 23,
      attributes: {
          title: "Hello world",
          body: "This is first announcement!"
      }
  }
]

export default function Announcements() {
  return (
    <>
      <PageHeader title="Announcements." lede="News, updates and calls for teams from PAIC." />

      <section id="announcement" className="pb-20 md:pb-28">
        <div className="site-container">
          <ul className="grid max-w-4xl gap-5">
            {announcement.map((a) => (
              <li key={a.id} className="reveal u-card bg-white p-7 md:p-9">
                <p className="u-tag bg-sky">No. {a.id}</p>
                <h2 className="u-display mt-4 text-[clamp(1.6rem,3vw,2.25rem)]">{a.attributes.title}</h2>
                <p className="u-lede mt-3 max-w-[60ch] text-ink/75">{a.attributes.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
