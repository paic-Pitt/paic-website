"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/site";

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
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-chalk/10 bg-navy-deep/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="site-container flex items-center justify-between py-4 md:py-5">
        {/* Logo + wordmark */}
        <Link href="/" className="group flex items-center gap-3" aria-label="Panther AI Club home">
          <span className="grid size-10 place-items-center rounded-md bg-chalk transition-transform duration-300 group-hover:-rotate-3">
            <Image src="/logo-removebg.png" alt="" width={100} height={100} className="size-9" />
          </span>
          <span className="font-display text-[1.35rem] leading-none font-extrabold tracking-tight md:text-[1.6rem]">
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
                className={`group relative text-[0.95rem] tracking-wide transition-colors duration-200 ${
                  active ? "text-chalk" : "text-chalk/70 hover:text-chalk"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/#join"
            className="rounded-full border border-gold px-5 py-2 text-sm font-medium text-gold transition-colors duration-200 hover:bg-gold hover:text-navy"
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
          <span className={`block h-px w-6 bg-chalk transition-all duration-300 ${isMobileMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-px bg-chalk transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-4"}`} />
          <span className={`block h-px w-6 bg-chalk transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
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
              className="u-display flex animate-draw-in items-baseline gap-4 border-b border-chalk/10 py-4 text-[2rem]"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="u-annot text-gold">{String(i + 1).padStart(2, "0")}</span>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navigation;
