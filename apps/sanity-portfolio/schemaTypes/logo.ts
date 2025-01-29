import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
