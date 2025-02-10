import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      rows: 2,
      type: 'text',
    }),
    defineField({
      name: 'timeStarted',
      type: 'date',
      validation: (rule) => rule.required(),
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
