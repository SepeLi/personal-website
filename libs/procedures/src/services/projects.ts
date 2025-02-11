import { sanityFetch } from '@personal-website/sanity-toolkit';
import { SanityDocument } from '@sanity/client';
import { SanityAsset } from '@sanity/image-url/lib/types/types';
import { defineQuery, PortableTextBlock } from 'next-sanity';

interface ImageAsset extends SanityAsset {
  urlText: string;
}
export interface Project extends SanityDocument {
  title: string;
  description: string;
  slug: {
    current: string;
  };
  techStackTags: {
    label: string;
  }[];
  image: {
    asset: ImageAsset;
    caption: string;
  };
  liveUrl: string;
  githubUrl: string;
  content: PortableTextBlock[];
}

export const getAllProjects = async (): Promise<Project[]> =>
  (
    await sanityFetch({
      query: defineQuery(`*[!(_id in path("drafts.**")) && _type == "project"] {
      ...,
      image {
        ...,
        asset->,
      }
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
      },
      image {
        ...,
        asset->,
      },
      content[] {
       ...,
       _type == "image" => {
          ...,
          asset->,
        }
      }
    }`),
      params: { slug },
    })
  ).data[0];
