import { defineQuery } from 'next-sanity'

// hasBody decides whether an event gets its own page at /events/<slug>
const eventFields = /* groq */ `
  _id, title, startsAt, endsAt, location, description, link, image,
  "slug": slug.current,
  "hasBody": count(body) > 0
`

// Upcoming events soonest first, plus the six most recent past ones
export const EVENTS_QUERY = defineQuery(/* groq */ `{
  "upcoming": *[_type == "event" && dateTime(coalesce(endsAt, startsAt)) >= dateTime(now())]
    | order(startsAt asc) { ${eventFields} },
  "past": *[_type == "event" && dateTime(coalesce(endsAt, startsAt)) < dateTime(now())]
    | order(startsAt desc)[0...6] { ${eventFields} }
}`)

// Every event that has a write-up, i.e. every event page to build
export const EVENT_SLUGS_QUERY = defineQuery(/* groq */ `
  *[_type == "event" && defined(slug.current) && count(body) > 0].slug.current
`)

export const EVENT_QUERY = defineQuery(/* groq */ `
  *[_type == "event" && slug.current == $slug && count(body) > 0][0] { ${eventFields}, body }
`)

export const ANNOUNCEMENTS_QUERY = defineQuery(/* groq */ `
  *[_type == "announcement"] | order(publishedAt desc) { _id, title, publishedAt, body }
`)
