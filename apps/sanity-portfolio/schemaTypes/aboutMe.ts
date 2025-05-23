import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutMe',
  title: 'About Me',
  type: 'document',
  // __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
