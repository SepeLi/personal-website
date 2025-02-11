import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blockImage',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      type: 'number',
      description:
        'Please specify the image size as percentage (between 0-100)',
      name: 'size',
      title: 'Size',
      validation: (Rule) => Rule.required().min(0).max(100),
      initialValue: 100,
    }),
    defineField({
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
          { title: 'Center', value: 'center' },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'center',
    }),
    defineField({
      name: 'caption',
      type: 'string',
    }),
  ],
});
