import { sanityFetch } from '@personal-website/sanity-toolkit';
import { SanityDocument } from '@sanity/client';
import { defineQuery } from 'next-sanity';

export interface Hero {
  title: string;
  description: string;
  subDescription: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

interface Project {
  title: string;
  description: string;
  timeStarted: string;
  slug: {
    current: string;
  };
}

export interface ProjectShowcase {
  title: string;
  projects: Project[];
  buttonText: string;
  buttonLink: string;
}

interface TechStack {
  label: string;
}

export interface TechStackShowcase {
  title: string;
  frontend: TechStack[];
  backendAndDatabase: TechStack[];
  design: TechStack[];
  devTools: TechStack[];
}

type FormType = 'text' | 'email' | 'textarea';

interface FormField {
  id: string;
  label: string;
  type: FormType;
  placeholder: string;
  required: boolean;
  fullWidth: boolean;
  rows: number;
}

export interface ContactMe {
  title: string;
  description?: string;
  formFields: FormField[];
  buttonText: string;
}

interface HomePage extends SanityDocument {
  hero: Hero;
  projectShowcase: ProjectShowcase;
  techStackShowcase: TechStackShowcase;
  contactMe: ContactMe;
}

export const getHomePageContent = async (): Promise<HomePage> =>
  (
    await sanityFetch({
      query: defineQuery(
        `*[!(_id in path("drafts.**")) && _id == "homePage"][0]{
          ...,
          projectShowcase {
            ...,
            projects[] -> {
              title,
              description,
              timeStarted,
              slug,
            },
            buttonText,
            buttonLink,
          },
          techStackShowcase {
            ...,
            frontend[] -> {
              label,
            },
            backendAndDatabase[] -> {
              label,
            },
            design[] -> {
              label,
            },
            devTools[] -> {
              label,
            },
          },
        }`
      ),
    })
  ).data;

interface SiteLogo {
  siteName: string;
}

export interface NavigationLink {
  label: string;
  link: string;
}

export interface Copyright {
  text: string;
}

export interface SiteWidgets {
  siteLogo: SiteLogo;
  navigationLinks: {
    items: NavigationLink[];
  };
  copyright: Copyright;
}

export const getPageWidgets = async (): Promise<SiteWidgets> =>
  (
    await sanityFetch({
      query: defineQuery(
        `{'siteLogo': *[!(_id in path("drafts.**")) && _id == "siteLogo"][0],
          'navigationLinks': *[!(_id in path("drafts.**")) && _id == "navigationLinks"][0]{
            ...
          },
          'copyright': *[!(_id in path("drafts.**")) && _id == "copyright"][0]}`
      ),
    })
  ).data;
