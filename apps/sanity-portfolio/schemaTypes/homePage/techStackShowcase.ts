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
      rows: 2,
      type: 'text',
    }),
    defineField({
      name: 'frontend',
      title: 'Frontend',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'all-tags' }],
          options: {
            filter:
              'category->id.current == "frontend" && !(_id in path("frontend[]._ref"))',
          },
        },
      ],
    }),
    defineField({
      name: 'backendAndDatabase',
      title: 'Backend & Database',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'all-tags' }],
          options: {
            filter:
              'category->id.current == "backend-and-database" && !(_id in path("backendAndDatabase[]._ref"))',
          },
        },
      ],
    }),
    defineField({
      name: 'design',
      title: 'Design',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'all-tags' }],
          options: {
            filter:
              'category->id.current == "design" && !(_id in path("design[]._ref"))',
          },
        },
      ],
    }),
    defineField({
      name: 'devTools',
      title: 'Dev Tools',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'all-tags' }],
          options: {
            filter:
              'category->id.current == "dev-tools" && !(_id in path("devTools[]._ref"))',
          },
        },
      ],
    }),
  ],
});
