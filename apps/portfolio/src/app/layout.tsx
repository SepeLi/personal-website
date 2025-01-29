// import { SanityLive } from '@personal-website/sanity-toolkit';
// import { serverClient as trpc } from '@personal-website/server';
// import { cache } from 'react';
import { Copyright, NavBar, SocialLinks } from '@personal-website/ui';
import '@personal-website/ui/global.css';
// const getAllProjects = cache(async () => {
//   const trpcCaller = await trpc();
//   return trpcCaller.project.getAllProjects();
// });

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
//   }) {
//   const data = await getAllProjects();
//   return (
//     <html lang="en">
//       <body>
//         {children}
//         <div>
//           {data[0].title}
//         </div>
//         <SanityLive />
//       </body>
//     </html>
//   );
// }

// NavLink Component
const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Posts' },
  { href: '/contact', label: 'Contact' },
];

// Root Layout
export const metadata = {
  title: 'Your Portfolio',
  description: 'Your portfolio website built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 h-12 md:h-20 flex items-center">
          <NavBar navItems={NAV_ITEMS} />
        </header>
        <main className="pt-12 md:pt-20 flex-grow ">{children}</main>
        <SocialLinks />
        <footer className="bg-white py-6">
          <Copyright />
        </footer>
      </body>
    </html>
  );
}
