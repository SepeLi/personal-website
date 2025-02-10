import { sanityFetch } from '@personal-website/sanity-toolkit';
import { SanityDocument } from '@sanity/client';
import { defineQuery } from 'next-sanity';

export interface Project extends SanityDocument {
  title: string;
  description: string;
  slug: {
    current: string;
  };
  techStackTags: {
    label: string;
  }[];
}

export const getAllProjects = async (): Promise<Project[]> =>
  (
    await sanityFetch({
      query: defineQuery(`*[!(_id in path("drafts.**")) && _type == "project"] {
      ...,
    }`),
    })
  ).data;
