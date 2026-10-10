import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaLink from "@/components/CtaLink";
import { teamMembers } from "@/lib/team";

export const metadata = { title: "Team" };

const linkClass = "inline-flex items-center gap-1 font-semibold text-blue underline-offset-4 hover:underline";

export default function Team() {
  return (
    <>
      <PageHeader
        title="Meet the team."
        lede="Engineering, computer science, accounting and finance. The same mix of majors we bring to every workshop."
      />

      <section className="pb-20 md:pb-28">
        <div className="site-container">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <li
                key={member.name}
                className="group u-card flex animate-draw-in flex-col overflow-hidden bg-white transition-all duration-150 hover:-translate-y-1 hover:shadow-pop"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-square overflow-hidden border-b-[1.5px] border-ink bg-sky">
                  <Image
                    src={member.picture || "/placeholder_profile_image.png"}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2 p-6">
                  <p className="u-tag self-start bg-gold">{member.role}</p>
                  <h2 className="u-display text-[1.75rem]">{member.name}</h2>
                  <p className="leading-relaxed text-ink/70">{member.bio}</p>
                  <div className="mt-auto flex gap-6 pt-2">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      LinkedIn <ArrowUpRight size={16} strokeWidth={2.25} />
                    </a>
                    {member.email && (
                      <a href={`mailto:${member.email}`} className={linkClass}>
                        Email <ArrowUpRight size={16} strokeWidth={2.25} />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}

            {/* Recruiting cell fills out the grid */}
            <li className="u-card flex min-h-80 flex-col items-start justify-end gap-6 bg-blue p-7 text-paper">
              <p className="u-display text-[2rem]">Want to help teams build with AI?</p>
              <CtaLink href="/#join">Join the club</CtaLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
