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

export interface ContactMe {
  title: string;
  description: string;
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
