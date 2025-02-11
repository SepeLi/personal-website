import aboutMe from './aboutMe';
import blockImage from './blockImage';
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
import project from './project';
import projectsPage from './projectsPage';
import seoSchema from './seo';
import siteSettings from './siteSettings';
import { allTags, tagCategory } from './techStacks';

export const schemaTypes = [
  project,
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
  aboutMe,
  heroSchema,
  seoSchema,
  siteSettings,
  formFields,
  projectsPage,
  blockImage,
];
