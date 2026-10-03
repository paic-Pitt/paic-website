import { ArrowUpRight } from "lucide-react";
import PageHeader from "./PageHeader";

const events = [
  {
    title: "Event Title",
    date: "Date",
    description: "Description",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19cd1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    href: "#",
  },
];

export default function Events() {
  return (
    <>
      <PageHeader
        annot="// Calendar"
        title="Upcoming events."
        lede="Workshops, speaker sessions and build nights. Follow us on Instagram for the latest."
      />

      <section id="events" className="pb-24 md:pb-36">
        <div className="site-container">
          <ul className="grid gap-px border border-chalk/12 bg-chalk/12 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <li key={event.title} className="reveal group flex flex-col bg-navy transition-colors duration-300 hover:bg-navy-lift">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt=""
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-navy mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-8">
                  <p className="u-annot text-gold">{event.date}</p>
                  <h2 className="u-display text-[1.75rem] leading-tight">{event.title}</h2>
                  <p className="leading-relaxed text-chalk/65">{event.description}</p>
                  <a href={event.href} className="u-annot mt-auto inline-flex items-center gap-1 pt-4 transition-colors hover:text-chalk">
                    Learn more <ArrowUpRight size={14} className="text-gold" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
