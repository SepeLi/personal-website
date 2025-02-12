import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projectShowcase',
  title: 'Project Showcase',
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
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
          options: {
            // This works before but not now
            // filter: '!(_id in path("projects[]._ref"))',
            filter:
              '!(_id in *[(_id in path("drafts.**")) && _type == "homePage"].projectShowcase.projects[]._ref)',
          },
        },
      ],
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    }),
  ],
});
