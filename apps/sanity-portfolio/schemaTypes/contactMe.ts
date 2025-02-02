import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactMe',
  title: 'Contact Me',
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
      name: 'formFields',
      title: 'Form Fields',
      type: 'formFields',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
  ],
});
