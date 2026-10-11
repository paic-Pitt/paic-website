"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, asset } from "@/lib/site";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  const solid = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`sticky top-0 z-50 border-b-[1.5px] transition-colors duration-300 ${
        solid ? "border-ink bg-paper/92 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="site-container flex items-center justify-between py-3.5 md:py-4">
        {/* Logo + wordmark */}
        <Link href="/" className="group flex items-center gap-3" aria-label="Panther AI Club home">
          <span className="grid size-11 place-items-center rounded-xl border-[1.5px] border-ink bg-white transition-transform duration-300 group-hover:-rotate-6">
            <Image src={asset("/logo-removebg.png")} alt="" width={100} height={100} className="size-9" />
          </span>
          <span className="font-display text-[1.35rem] leading-none font-extrabold tracking-tight md:text-[1.5rem]">
            Panther AI
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative font-medium transition-colors duration-200 ${
                  active ? "text-ink" : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[3px] rounded-full bg-gold transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/#join"
            className="rounded-full border-[1.5px] border-ink bg-gold px-5 py-2 font-display font-semibold shadow-pop-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            Join us
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="-mr-2 flex size-11 cursor-pointer flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
          <span className={`block h-0.5 w-6 rounded-full bg-ink transition-all duration-300 ${isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 rounded-full bg-ink transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-6"}`} />
          <span className={`block h-0.5 w-6 rounded-full bg-ink transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <nav id="mobile-nav" aria-label="Main, mobile" className="site-container flex flex-col pt-2 pb-10 lg:hidden">
          {[...NAV_LINKS, { label: "Join us", href: "/#join" }].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="u-display animate-draw-in border-b border-ink/15 py-4 text-[1.9rem]"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navigation;
