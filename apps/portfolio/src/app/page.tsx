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
  const data = await getHomePageContent();
  console.warn(data);
  return (
    <>
      <Hero {...data.hero} />
      <ProjectShowcase {...data.projectShowcase} />
      <TechStackShowcase />
      <ContactMe />
    </>
  );
}
