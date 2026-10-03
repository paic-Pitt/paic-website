import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CONTACT_EMAIL, NAV_LINKS, SOCIALS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-chalk/12 bg-navy-deep pt-20 md:pt-28">
      <div className="site-container relative grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">

        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md bg-chalk">
              <Image src="/logo-removebg.png" alt="" width={100} height={100} className="size-10" />
            </span>
            <span className="font-display text-[1.9rem] leading-none font-extrabold tracking-tight">Panther AI</span>
          </Link>
          <p className="u-lede mt-6 max-w-sm text-base">
            A student organization at the University of Pittsburgh connecting real problems with students who build.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-block font-display text-lg text-gold underline decoration-gold/0 underline-offset-4 transition-colors hover:decoration-gold"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        {/* Explore */}
        <div>
          <h2 className="u-annot mb-5">Explore</h2>
          <ul className="flex flex-col gap-3">
            {[...NAV_LINKS, { label: "Join us", href: "/#join" }].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-chalk/75 transition-colors hover:text-chalk">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h2 className="u-annot mb-5">Connect</h2>
          <ul className="flex flex-col gap-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-chalk/75 transition-colors hover:text-chalk"
                >
                  {social.label}
                  <ArrowUpRight size={16} className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-container relative mt-16 flex flex-col gap-3 border-t border-chalk/12 py-8 md:flex-row md:justify-between">
        <p className="u-annot">&copy; {new Date().getFullYear()} Panther AI Club · University of Pittsburgh</p>
        <p className="u-annot">Built by the Panther AI tech team</p>
      </div>

      {/* Giant outlined wordmark bleeding off the bottom edge */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.22em] text-center font-display text-[15vw] leading-none font-extrabold tracking-tight [word-spacing:0.2em] whitespace-nowrap text-transparent select-none [-webkit-text-stroke:1px_rgb(255_255_255/0.14)]"
      >
        PANTHER AI
      </p>
    </footer>
  );
}

export default Footer;
