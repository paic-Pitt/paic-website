import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CONTACT_EMAIL, NAV_LINKS, SOCIALS } from "@/lib/site";

const headingClass = "mb-5 text-sm font-semibold tracking-wider text-paper/55 uppercase";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-16 text-paper md:pt-24">
      <div className="site-container relative grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">

        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-white">
              <Image src="/logo-removebg.png" alt="" width={100} height={100} className="size-9" />
            </span>
            <span className="font-display text-[1.75rem] leading-none font-extrabold tracking-tight">Panther AI</span>
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed text-paper/75">
            A student organization at the University of Pittsburgh connecting real problems with students who build.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-block font-display text-lg font-semibold text-gold underline decoration-gold/40 decoration-2 underline-offset-4 transition-colors hover:decoration-gold"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        {/* Explore */}
        <div>
          <h2 className={headingClass}>Explore</h2>
          <ul className="flex flex-col gap-3">
            {[...NAV_LINKS, { label: "Join us", href: "/#join" }].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-paper/80 transition-colors hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h2 className={headingClass}>Connect</h2>
          <ul className="flex flex-col gap-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-paper/80 transition-colors hover:text-paper"
                >
                  {social.label}
                  <ArrowUpRight size={16} className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-container relative mt-14 flex flex-col gap-2 border-t border-paper/15 py-7 text-sm text-paper/55 md:flex-row md:justify-between">
        <p>&copy; {new Date().getFullYear()} Panther AI Club · University of Pittsburgh</p>
        <p>Built by the Panther AI tech team</p>
      </div>

      {/* Giant wordmark bleeding off the bottom edge */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.2em] text-center font-display text-[14.5vw] leading-none font-extrabold tracking-tight whitespace-nowrap text-gold select-none"
      >
        PANTHER AI
      </p>
    </footer>
  );
}

export default Footer;
