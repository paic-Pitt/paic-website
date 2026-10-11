import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { asset } from "@/lib/site";
import { teamMembers } from "@/lib/team";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="site-container grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <div className="reveal u-card bg-white p-8 md:p-12">
          <p className="u-tag bg-sky">What is PAIC?</p>
          <h2 className="u-display mt-6 max-w-[20ch] text-[clamp(1.9rem,3.8vw,3.25rem)]">
            A workshop club where real problems meet students who want to build.
          </h2>
          <p className="u-lede mt-6 max-w-[58ch] text-ink/75">
            We invite startups and companies to campus to share a challenge they&apos;re facing. Then we bring
            together students from business, marketing, computer science and beyond, and our tech team helps them
            build a working solution with AI.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="reveal u-card flex flex-col justify-center bg-blue p-8 text-paper">
            <p className="u-display text-[clamp(1.5rem,2.4vw,1.9rem)] leading-[1.15]">
              No AI experience required. If you&apos;re curious, you belong here.
            </p>
          </div>

          <Link
            href="/team"
            className="reveal group u-card flex flex-col justify-between gap-6 bg-gold p-8 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-pop"
          >
            <div className="flex">
              {teamMembers.map((member) => (
                <Image
                  key={member.name}
                  src={asset(member.picture)}
                  alt=""
                  width={96}
                  height={96}
                  className="-ml-3 size-12 rounded-full border-[1.5px] border-ink bg-white object-cover object-top first:ml-0"
                />
              ))}
            </div>
            <p className="u-display flex items-end justify-between gap-4 text-[1.5rem] leading-tight">
              Run by Pitt students. Meet the team.
              <ArrowUpRight
                aria-hidden="true"
                size={28}
                strokeWidth={2.25}
                className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
