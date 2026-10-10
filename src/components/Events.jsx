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
        title="Upcoming events."
        lede="Workshops, speaker sessions and build nights. Follow us on Instagram for the latest."
      />

      <section id="events" className="pb-20 md:pb-28">
        <div className="site-container">
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <li
                key={event.title}
                className="reveal group u-card flex flex-col overflow-hidden bg-white transition-all duration-150 hover:-translate-y-1 hover:shadow-pop"
              >
                <div className="aspect-video overflow-hidden border-b-[1.5px] border-ink">
                  <img
                    src={event.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-7">
                  <p className="u-tag self-start bg-gold">{event.date}</p>
                  <h2 className="u-display text-[1.6rem]">{event.title}</h2>
                  <p className="leading-relaxed text-ink/70">{event.description}</p>
                  <a
                    href={event.href}
                    className="mt-auto inline-flex items-center gap-1 pt-3 font-semibold text-blue underline-offset-4 hover:underline"
                  >
                    Learn more <ArrowUpRight size={16} strokeWidth={2.25} />
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
