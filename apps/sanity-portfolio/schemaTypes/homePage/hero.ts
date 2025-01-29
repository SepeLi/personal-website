import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'heroSchema',
  title: 'Hero',
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
      name: 'subDescription',
      title: 'Sub Description',
      type: 'text',
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button Text',
      type: 'string',
    }),
  ],
});
