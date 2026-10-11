import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

// How rich text written in the Studio is drawn on the site
const components = {
  block: {
    normal: ({ children }) => <p className="mt-4 first:mt-0">{children}</p>,
    h2: ({ children }) => <h2 className="u-display mt-10 text-[1.75rem] text-ink first:mt-0">{children}</h2>,
    h3: ({ children }) => <h3 className="u-display mt-8 text-[1.35rem] text-ink first:mt-0">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-gold pl-5 font-display text-[1.2em] leading-snug font-medium text-ink">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 list-disc space-y-1.5 pl-6">{children}</ul>,
    number: ({ children }) => <ol className="mt-4 list-decimal space-y-1.5 pl-6">{children}</ol>,
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue underline underline-offset-4"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <figure className="mt-8">
          <img
            src={urlFor(value).width(1200).fit("max").url()}
            alt={value.alt || ""}
            className="u-card w-full"
          />
          {value.caption && <figcaption className="mt-2 text-sm text-ink/60">{value.caption}</figcaption>}
        </figure>
      ) : null,
  },
};

export default function RichText({ value, className = "" }) {
  return (
    <div className={`text-ink/75 ${className}`}>
      <PortableText value={value} components={components} />
    </div>
  );
}
