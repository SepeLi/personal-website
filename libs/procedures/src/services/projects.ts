import { sanityFetch } from '@personal-website/sanity-toolkit';
import { SanityDocument } from '@sanity/client';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
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
  image: SanityImageObject;
}

export const getAllProjects = async (): Promise<Project[]> =>
  (
    await sanityFetch({
      query: defineQuery(`*[!(_id in path("drafts.**")) && _type == "project"] {
      ...,
    }`),
    })
  ).data;

export const getProjectBySlug = async (slug: string): Promise<Project> =>
  (
    await sanityFetch({
      query:
        defineQuery(`*[!(_id in path("drafts.**")) && _type == "project" && slug.current == $slug] {
      ...,
      techStackTags[]-> {
        label
      }
    }`),
      params: { slug },
    })
  ).data[0];
