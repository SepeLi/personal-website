import { sanityFetch } from '@personal-website/sanity-toolkit';
import { SanityDocument } from '@sanity/client';
import { defineQuery } from "next-sanity";

interface Project extends SanityDocument {
  title: string;
}

export const getAllProjects = async (): Promise<Project[]> =>
  (await sanityFetch(
    {query: defineQuery(`*[_type == "project"] {
      ...,
    }`)}
  )).data;
