import { CalendarDays } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

const hasBody = (body: unknown) => Array.isArray(body) && body.length > 0

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarDays,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'startsAt',
      title: 'Starts',
      type: 'datetime',
      description: 'The event moves to "Past events" on the site once it is over.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endsAt',
      title: 'Ends',
      type: 'datetime',
      description: 'Optional. Leave empty if there is no set end time.',
      validation: (rule) => rule.min(rule.valueOfField('startsAt')).error('The end has to be after the start.'),
    }),
    defineField({
      name: 'location',
      type: 'string',
      description: 'Building and room, or "Online".',
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 4,
      description: 'A sentence or two shown on the event card.',
      validation: (rule) => rule.max(400),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Describe the picture for people using screen readers.',
        }),
      ],
    }),
    defineField({
      name: 'link',
      title: 'Sign-up or details link',
      type: 'url',
      description: 'Optional. Shown as "Learn more" on the event card.',
      validation: (rule) => rule.uri({ scheme: ['http', 'https', 'mailto'] }),
    }),
    defineField({
      name: 'body',
      title: 'Full write-up',
      type: 'array',
      description:
        'Optional. If you write something here, the event gets its own page and the card links to it. Leave empty for a card only.',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading', value: 'h2' },
            { title: 'Subheading', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              defineArrayMember({
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (rule) => rule.required().uri({ scheme: ['http', 'https', 'mailto'] }),
                  }),
                ],
              }),
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alternative text', type: 'string' }),
            defineField({ name: 'caption', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Page address',
      type: 'slug',
      description: 'The end of the event page\'s web address, e.g. /events/ai-in-industry-pnc. Click "Generate".',
      options: { source: 'title', maxLength: 80 },
      hidden: ({ document }) => !hasBody(document?.body),
      validation: (rule) =>
        rule.custom((slug, context) =>
          hasBody(context.document?.body) && !slug?.current
            ? 'Needed for the event page. Click "Generate".'
            : true
        ),
    }),
  ],
  orderings: [
    { title: 'Date, newest first', name: 'startsAtDesc', by: [{ field: 'startsAt', direction: 'desc' }] },
    { title: 'Date, oldest first', name: 'startsAtAsc', by: [{ field: 'startsAt', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', startsAt: 'startsAt', location: 'location', media: 'image' },
    prepare({ title, startsAt, location, media }) {
      const date = startsAt ? new Date(startsAt).toLocaleDateString('en-US', { dateStyle: 'medium' }) : 'No date'
      return { title, subtitle: [date, location].filter(Boolean).join(' · '), media }
    },
  },
})
