import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'seoSchema',
  title: 'SEO',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
      description: 'Description used for SEO (max 160 characters)',
      rows: 4,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image',
      description: 'Image used for SEO',
    }),
  ],
});
