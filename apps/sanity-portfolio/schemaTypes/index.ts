import contactMe from './contactMe';
import formFields from './formField';
import heroSchema from './homePage/hero';
import homePage from './homePage/homePage';
import projectShowcase from './homePage/projectShowcase';
import techStackShowcase from './homePage/techStackShowcase';
import copyright from './pageWidgets/copyright';
import navigationLinks from './pageWidgets/navigationLinks';
import siteLogo from './pageWidgets/siteLogo';
import socialLinks from './pageWidgets/socialLinks';
import { projectCollection } from './projectCollection';
import seoSchema from './seo';
import siteSettings from './siteSettings';
import { allTags, tagCategory } from './techStacks';

export const schemaTypes = [
  projectCollection,
  navigationLinks,
  siteLogo,
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
  formFields,
];
