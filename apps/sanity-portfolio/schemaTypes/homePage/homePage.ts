import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'heroSchema',
    }),
    defineField({
      name: 'projects',
      title: 'Projects Showcase',
      type: 'projectsShowcase',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack Showcase',
      type: 'techStackShowcase',
    }),
    defineField({
      name: 'contact',
      title: 'Contact Me',
      type: 'contactMe',
    }),
  ],
});
