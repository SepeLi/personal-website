import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  // __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'heroSchema',
    }),
    defineField({
      name: 'projectShowcase',
      title: 'Project Showcase',
      type: 'projectShowcase',
    }),
    defineField({
      name: 'techStackShowcase',
      title: 'Tech Stack Showcase',
      type: 'techStackShowcase',
    }),
    defineField({
      name: 'contactMe',
      title: 'Contact Me',
      type: 'contactMe',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Home Page',
    }),
  },
});
