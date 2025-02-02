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
  ],
  preview: {
    prepare: () => ({
      title: 'Copyright',
    }),
  },
});
