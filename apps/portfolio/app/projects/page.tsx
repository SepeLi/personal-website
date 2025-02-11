import { urlFor } from '@personal-website/sanity-toolkit';
import { serverClient as trpc } from '@personal-website/server';
import Image from 'next/image';
import Link from 'next/link';
import { cache } from 'react';

const getProjectsPageContent = cache(async () => {
  const trpcCaller = await trpc();
  return trpcCaller.projectsPage.getProjectsPageContent();
});

export default async function Projects() {
  const { title, content } = await getProjectsPageContent();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">{title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.map(
          ({ slug, title, image, description, techStackTags }, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex"
            >
              <Link
                href={`/projects/${slug.current}`}
                className="text-sky-500 hover:text-sky-800 font-medium flex flex-col grow"
              >
                <div className="h-48 bg-gray-100 relative">
                  {image && (
                    <Image
                      src={urlFor(image).url()}
                      alt={image.asset.urlText || title}
                      fill
                      priority={false}
                      className="object-cover rounded-lg"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-6 pb-0 grow flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-4 grow">{description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {techStackTags.map(({ label }, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-sm"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="p-6 pt-0">View Project →</span>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}
