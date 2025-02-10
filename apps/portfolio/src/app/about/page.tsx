import { serverClient as trpc } from '@personal-website/server';
import { AboutMe } from '@personal-website/ui';
import '@personal-website/ui/global.css';
import { cache } from 'react';

const getAboutMePageContent = cache(async () => {
  const trpcCaller = await trpc();
  return trpcCaller.aboutMe.getAboutMePageContent();
});

export default async function About() {
  const aboutMePageContent = await getAboutMePageContent();
  return <AboutMe {...aboutMePageContent} />;
}
