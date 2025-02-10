import { sanityFetch } from '@personal-website/sanity-toolkit';
import { SanityDocument } from '@sanity/client';
import { defineQuery, PortableTextBlock } from 'next-sanity';

export interface AboutMe extends SanityDocument {
  title: string;
  content: PortableTextBlock[];
}

export const getAboutMePageContent = async (): Promise<AboutMe> =>
  (
    await sanityFetch({
      query: defineQuery(
        `*[!(_id in path("drafts.**")) && _id == "aboutMe"][0]{
          ...,
        }`
      ),
    })
  ).data;
