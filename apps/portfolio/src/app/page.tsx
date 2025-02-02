import { serverClient as trpc } from '@personal-website/server';
import {
  ContactMe,
  Hero,
  ProjectShowcase,
  TechStackShowcase,
} from '@personal-website/ui';
import '@personal-website/ui/global.css';
import { cache } from 'react';
const getHomePageContent = cache(async () => {
  const trpcCaller = await trpc();
  return trpcCaller.homepage.getHomePageContent();
});

export default async function Index() {
  const { hero, projectShowcase, techStackShowcase, contactMe } =
    await getHomePageContent();
  return (
    <>
      <Hero {...hero} />
      <ProjectShowcase {...projectShowcase} />
      {/* TechStackShowcase is currently hardcoded because
      there's something wrong with sanity-plugin-icon-picker.
      https://github.com/christopherafbjur/sanity-plugin-icon-picker/issues/73 */}
      <TechStackShowcase />
      <ContactMe {...contactMe} />
    </>
  );
}
