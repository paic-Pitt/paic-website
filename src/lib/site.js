// Shared club info used across pages
export const CONTACT_EMAIL = "pitt.paic@gmail.com";

// Where the Sanity Studio (content editor) is hosted; /studio redirects here.
// Update this if the Studio is ever redeployed under a different hostname.
export const STUDIO_URL = "https://paic.sanity.studio";

// Path to a file in /public. next/image doesn't add the site's base path on its own.
export const asset = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

export const PARTNER_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Workshop partnership with PAIC"
)}`;

// Discord invite, used by the "Join our Discord" section. Replace with the real invite link.
export const DISCORD_URL = "https://discord.gg/REPLACE-ME";

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/pitt.paic/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/the-panther-artificial-intelligence-club" },
];

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Community", href: "/#community" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Announcements", href: "/announcements" },
];
