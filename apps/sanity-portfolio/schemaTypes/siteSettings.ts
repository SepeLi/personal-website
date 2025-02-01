import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'enableContactMe',
      title: 'Enable Contact Me',
      type: 'boolean',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Site Settings',
    }),
  },
});
