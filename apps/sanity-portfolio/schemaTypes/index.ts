import contactMe from './contactMe';
import copyright from './copyright';
import heroSchema from './homePage/hero';
import homePage from './homePage/homePage';
import projectsShowcase from './homePage/projectsShowcase';
import techStackShowcase from './homePage/techStackShowcase';
import logo from './logo';
import navigation from './navigation';
import { projectCollection } from './projectCollection';
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
  projectsShowcase,
  techStackShowcase,
  contactMe,
  heroSchema,
];
