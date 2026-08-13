import {FolderIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  icon: FolderIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'reference',
      to: {type: 'service'},
      description: 'The service this project belongs to',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'projectDate',
      title: 'Project Date',
      type: 'date',
    }),
    defineField({
      name: 'designer',
      title: 'Designer',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'description2',
      title: 'Description (second paragraph)',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'process',
      title: 'Project Process/Steps',
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
      title: 'Project Stats/Results',
      type: 'object',
      fields: [
        defineField({ name: 'label1', title: 'Label 1', type: 'string', initialValue: 'Satisfaction' }),
        defineField({ name: 'value1', title: 'Value 1', type: 'string', initialValue: '100%' }),
        defineField({ name: 'label2', title: 'Label 2', type: 'string', initialValue: 'Timeline' }),
        defineField({ name: 'value2', title: 'Value 2', type: 'string', initialValue: '3 Months' }),
        defineField({ name: 'label3', title: 'Label 3', type: 'string', initialValue: 'Impact' }),
        defineField({ name: 'value3', title: 'Value 3', type: 'string', initialValue: '2x Growth' }),
      ],
    }),
    defineField({
      name: 'images',
      title: 'Project Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            })
          ]
        })
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'url',
      title: 'Project URL',
      type: 'url',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
