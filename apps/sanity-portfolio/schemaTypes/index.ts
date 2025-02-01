import contactMe from './contactMe';
import copyright from './copyright';
import heroSchema from './homePage/hero';
import homePage from './homePage/homePage';
import projectShowcase from './homePage/projectShowcase';
import techStackShowcase from './homePage/techStackShowcase';
import logo from './logo';
import navigation from './navigation';
import { projectCollection } from './projectCollection';
import seoSchema from './seo';
import siteSettings from './siteSettings';
import socialLinks from './socialLinks';
import { allTags, tagCategory } from './techStacks';

export const schemaTypes = [
  projectCollection,
  navigation,
  logo,
  socialLinks,
  copyright,
  allTags,
  tagCategory,
  homePage,
  projectShowcase,
  techStackShowcase,
  contactMe,
  heroSchema,
  seoSchema,
  siteSettings,
];
