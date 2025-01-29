import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});
