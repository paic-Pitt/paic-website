import Image from "next/image";
import { ArrowUpRight, MoveRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Team" };

const teamMembers = [
  {
    name: "Christian Jantio",
    role: "President",
    bio: "Computer Engineering + Computer Science + Quantum",
    picture: "/Christian_Jantio.png",
    linkedin: "https://www.linkedin.com/in/christian-jantio-418435341/",
    email: "",
  },
  {
    name: "Jude Howard",
    role: "Vice President",
    bio: "Mechanical Engineering",
    picture: "/Jude_Howard.png",
    linkedin: "https://www.linkedin.com/in/jude-howard-pitt/",
    email: "",
  },
  {
    name: "Natnael Tegegne",
    role: "Director of Technology",
    bio: "Computer Science + Mathematics",
    picture: "/Natnael_Tegegne.jpg",
    linkedin: "https://www.linkedin.com/in/natnael-tegegne/",
    email: "",
  },
  {
    name: "Danny Romano",
    role: "Director of Treasury",
    bio: "Honors Accounting and Business Information Systems ",
    picture: "/Danny_Romano.jpg",
    linkedin: "https://www.linkedin.com/in/danieljromano154/",
    email: "",
  },
  {
    name: "Tristan Soose",
    role: "Events Coordinator",
    bio: "Finance + Accounting + Business Analytics",
    picture: "/Tristan_Soose.png",
    linkedin: "https://www.linkedin.com/in/tristan-soose-337684329/",
    email: "",
  }
];

export default function Team() {
  return (
    <>
      <PageHeader
        annot="// The people behind Panther AI"
        title="Meet the team."
        lede="Engineering, computer science, accounting and finance — the same mix of majors we bring to every workshop."
      />

      <section className="pb-24 md:pb-36">
        <div className="site-container">
          <ul className="grid gap-px border border-chalk/12 bg-chalk/12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <li
                key={member.name}
                className="group flex animate-draw-in flex-col bg-navy transition-colors duration-300 hover:bg-navy-lift"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Photo: navy duotone that reveals full color on hover */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.picture || "/placeholder_profile_image.png"}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-navy mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-navy/80 to-transparent" />
                  <span className="absolute top-5 left-5 bg-navy/80 px-2 py-0.5 font-mono text-sm text-gold backdrop-blur-sm">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-8">
                  <p className="u-annot text-gold">{member.role}</p>
                  <h2 className="u-display text-[1.9rem] leading-tight">{member.name}</h2>
                  <p className="leading-relaxed text-chalk/65">{member.bio}</p>
                  <div className="mt-auto flex gap-6 pt-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="u-annot inline-flex items-center gap-1 transition-colors hover:text-chalk"
                    >
                      LinkedIn <ArrowUpRight size={14} className="text-gold" />
                    </a>
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="u-annot inline-flex items-center gap-1 transition-colors hover:text-chalk">
                        Email <ArrowUpRight size={14} className="text-gold" />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}

            {/* Recruiting cell fills out the grid */}
            <li className="relative flex min-h-80 flex-col justify-end overflow-hidden bg-navy-deep p-8">
              <div className="u-grid-field" aria-hidden="true" />
              <p className="u-annot relative mb-4">// Open seat</p>
              <p className="u-display relative text-[2rem] leading-tight">Want to help teams build with AI?</p>
              <a
                href="/#join"
                className="group relative mt-6 inline-flex items-center gap-3 font-display text-lg text-gold"
              >
                <MoveRight size={20} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                Join the club
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
