import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteLogo',
  title: 'Site Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
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
      hidden: ({ parent }) => !parent?.image,
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Site Logo',
    }),
  },
});
