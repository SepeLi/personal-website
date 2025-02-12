import { SanityLive } from '@personal-website/sanity-toolkit';
import { serverClient as trpc } from '@personal-website/server';
import { Copyright, NavBar, SocialLinks } from '@personal-website/ui';
import '@personal-website/ui/global.css';
import Head from 'next/head';

import { cache } from 'react';
const getPageWidgets = cache(async () => {
  const trpcCaller = await trpc();
  return trpcCaller.homepage.getPageWidgets();
});

// Root Layout
export const metadata = {
  title: "Sean's Portfolio",
  description: 'This website showcases my projects and skills.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { siteLogo, navigationLinks, copyright } = await getPageWidgets();
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 h-12 md:h-20 flex items-center">
          <NavBar {...navigationLinks} {...siteLogo} />
        </header>
        <main className="pt-12 md:pt-20 flex-grow ">{children}</main>
        {/* SocialLinks is currently hardcoded because
        there's something wrong with sanity-plugin-icon-picker.
        https://github.com/christopherafbjur/sanity-plugin-icon-picker/issues/73 */}
        <SocialLinks />
        <footer className="bg-white py-6">
          <Copyright {...copyright} />
        </footer>
        <SanityLive />
      </body>
    </html>
  );
}
