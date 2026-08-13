import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Exact value for the card icon. Use one of: Web, Smartphone, Receipt, Cloud, SmartToy, Search, Campaign, AccountTree, DesignServices. Aliases: Mobile/Phone → Smartphone, POS → Receipt, SEO → Search.',
    }),
    defineField({
      name: 'desc',
      title: 'Short Description',
      type: 'string',
      description: 'One-line tagline for cards and headers',
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'description1',
      title: 'Description (first paragraph)',
      type: 'text',
    }),
    defineField({
      name: 'description2',
      title: 'Description (second paragraph)',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'process',
      title: 'Process Steps',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'processStep',
          fields: [
            defineField({ name: 'step', title: 'Step Number', type: 'string', description: 'e.g. 01, 02' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
          ],
          preview: {
            select: { title: 'title', step: 'step' },
            prepare: ({ title, step }) => ({ title: `${step || ''} ${title || 'Step'}`.trim() }),
          },
        }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'object',
      fields: [
        defineField({ name: 'satisfaction', title: 'Satisfaction', type: 'string', description: 'e.g. 100%' }),
        defineField({ name: 'projects', title: 'Projects', type: 'string', description: 'e.g. 150+' }),
        defineField({ name: 'clients', title: 'Clients', type: 'string', description: 'e.g. 80+' }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'name', media: 'mainImage' },
  },
  orderings: [
    { title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Name A–Z', name: 'nameAsc', by: [{ field: 'name', direction: 'asc' }] },
  ],
})
