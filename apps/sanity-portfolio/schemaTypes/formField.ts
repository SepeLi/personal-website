import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'formFields',
  title: 'Form Fields',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({
          name: 'id',
          title: 'Field ID',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'type',
          title: 'Field Type',
          type: 'string',
          options: {
            list: ['text', 'email', 'textarea'],
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder',
          type: 'string',
        }),
        defineField({
          name: 'required',
          title: 'Required',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'fullWidth',
          title: 'Full Width',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'rows',
          title: 'Number of Rows',
          type: 'number',
          hidden: ({ parent }) => parent?.type !== 'textarea',
        }),
      ],
    },
  ],
});
