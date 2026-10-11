import PageHeader from "@/components/PageHeader";
import { STUDIO_URL } from "@/lib/site";

export const metadata = { title: "Studio", robots: { index: false } };

// The Studio is hosted by Sanity, not on this site, so /studio just forwards there
const isPlaceholder = STUDIO_URL.includes("REPLACE-ME");

export default function Studio() {
  if (isPlaceholder) {
    return (
      <PageHeader
        title="Studio isn't set up yet."
        lede="Deploy the Sanity Studio, then set STUDIO_URL in src/lib/site.js to its address."
      />
    );
  }

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${STUDIO_URL}`} />
      <PageHeader title="Opening the studio." lede="Taking you to the content editor." />
      <div className="site-container pb-20 md:pb-28">
        <a href={STUDIO_URL} className="font-semibold text-blue underline underline-offset-4">
          Not redirected? Open the studio.
        </a>
      </div>
    </>
  );
}
