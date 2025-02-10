import { sanityFetch } from '@personal-website/sanity-toolkit';
import { defineQuery } from 'next-sanity';
import { ContactMe } from './homepage';

export const getContactMePageContent = async (): Promise<ContactMe> =>
  (
    await sanityFetch({
      query: defineQuery(
        `*[!(_id in path("drafts.**")) && _id == "contactMe"][0]{
          ...,
        }`
      ),
    })
  ).data;
