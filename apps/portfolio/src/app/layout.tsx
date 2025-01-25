import { SanityLive } from '@personal-website/sanity-toolkit';
import { serverClient as trpc } from '@personal-website/server';
import { cache } from 'react';
import './global.css';

const getAllProjects = cache(async () => {
  const trpcCaller = await trpc();
  return trpcCaller.project.getAllProjects();
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const data = await getAllProjects();
  return (
    <html lang="en">
      <body>
        {children}
        <div>
          {data[0].title}
        </div>
        <SanityLive />
      </body>
    </html>
  );
}
