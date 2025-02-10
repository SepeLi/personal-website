import { sanityFetch } from '@personal-website/sanity-toolkit';
import { defineQuery } from 'next-sanity';
import { Project } from './projects';

interface ProjectsPageContent {
  title: string;
  content: Project[];
}

export const getProjectsPageContent = async (): Promise<ProjectsPageContent> =>
  (
    await sanityFetch({
      query:
        defineQuery(`*[!(_id in path("drafts.**")) && _type == "projectsPage"][0] {
          title,
          content[] -> {
            ...,
            techStackTags[]->{
            label
            }
          }
      }`),
    })
  ).data;
