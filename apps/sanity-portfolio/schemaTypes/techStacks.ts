import { FaTag } from 'react-icons/fa';
import { defineType } from 'sanity';

const tagCategory = defineType({
  title: 'Tag Category',
  name: 'tag-category',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Internal ID',
      name: 'id',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, ''),
      },
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          if (typeof slug === 'undefined') return true;
          const regex = /(^[a-z0-9-]+$)/;
          if (regex.test(slug.current)) {
            return true;
          } else {
            return 'Only numbers, lowercase letters, and dashes are permitted.';
          }
        }),
    },
  ],
});

const allTags = defineType({
  title: 'All Tags',
  name: 'all-tags',
  type: 'document',
  // group: 'content',
  icon: FaTag,
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{ type: 'tag-category' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      label: 'label',
      category: 'category.title',
    },
    prepare(selection) {
      const { label, category } = selection;
      return {
        title: label,
        subtitle: `Category: ${category}`,
      };
    },
  },
});

export { allTags, tagCategory };
