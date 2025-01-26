// import { SanityLive } from '@personal-website/sanity-toolkit';
// import { serverClient as trpc } from '@personal-website/server';
// import { cache } from 'react';
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import './global.css';

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
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative py-2 px-3 transition-all duration-300 rounded-md group ${
        isActive
          ? 'text-sky-600'
          : 'text-gray-600 dark:text-gray-300'
      }`}
    >
      {/* Text */}
      <span className="relative">{children}</span>

      {/* Active indicator */}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-500 transform scale-x-100 transition-transform duration-300 rounded-full" />
      )}

      {/* Hover indicator */}
      {!isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
      )}
    </Link>
  );
}

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/posts', label: 'Posts' },  // Updated from 'blog' to 'posts'
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900">
        <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
          <nav className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Your Name</h1>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {item.label}
                  </NavLink>
                ))}
              </div>

              {/* Hamburger Button */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative flex items-center justify-center">
                  <span
                    className={`absolute w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'rotate-45' : '-translate-y-2'
                    }`}
                  />
                  <span
                    className={`absolute w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? '-rotate-45' : 'translate-y-2'
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden absolute left-0 right-0 top-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4 pointer-events-none'
              }`}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <main className="pt-20">
          {children}
        </main>

        <footer className="bg-white dark:bg-gray-800 py-6 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
