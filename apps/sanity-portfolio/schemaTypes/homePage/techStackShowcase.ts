import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'techStackShowcase',
  title: 'Tech Stack Showcase',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'frontend',
      title: 'Frontend',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'all-tags' }] }],
    }),
    defineField({
      name: 'backend',
      title: 'Backend',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'all-tags' }] }],
    }),
    defineField({
      name: 'design',
      title: 'Design',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'all-tags' }] }],
    }),
    defineField({
      name: 'devTools',
      title: 'Dev Tools',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'all-tags' }] }],
    }),
  ],
});
