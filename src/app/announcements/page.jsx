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
      <PageHeader annot="// Club log" title="Announcements." lede="News, updates and calls for teams from Panther AI." />

      <section id="announcement" className="pb-24 md:pb-36">
        <div className="site-container">
          <ul className="border-b border-chalk/12">
            {announcement.map((a) => (
              <li
                key={a.id}
                className="reveal grid gap-3 border-t border-chalk/12 py-10 md:grid-cols-[10rem_1fr] md:gap-10"
              >
                <p className="u-annot text-gold">No. {String(a.id).padStart(3, "0")}</p>
                <div>
                  <h2 className="u-display text-[clamp(1.6rem,3vw,2.4rem)]">{a.attributes.title}</h2>
                  <p className="u-lede mt-3 max-w-[60ch]">{a.attributes.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
