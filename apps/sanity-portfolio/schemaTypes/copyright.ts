import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'copyright',
  title: 'Copyright',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Copyright Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
