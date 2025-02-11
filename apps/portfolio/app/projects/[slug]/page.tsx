import { SanityContent, urlFor } from '@personal-website/sanity-toolkit';
import { serverClient as trpc } from '@personal-website/server';
import Image from 'next/image';
import Link from 'next/link';
import { cache } from 'react';

const getProjectBySlug = cache(async (slug: string) => {
  const trpcCaller = await trpc();
  return trpcCaller.project.getProjectBySlug(slug);
});

export default async function ProjectPage({
  params,
}: {
}) {
  const { slug } = await params;
  const {
    title,
    image,
    description,
    techStackTags,
    liveUrl,
    githubUrl,
    content,
  } = await getProjectBySlug(slug);
  return (
    <main className="container mx-auto px-4 py-16 text-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <h1 className="text-4xl font-bold mb-12">{title}</h1>

        {/* Project Image */}
        {image && (
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={urlFor(image).url()}
              alt={image.asset?.altText || image.caption}
              priority={false}
              fill
              className="object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        )}

        {/* Project Description */}
        <p className="text-lg mb-8">{description}</p>

        {/* Technologies Used */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {techStackTags.map(({ label }, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        {(liveUrl || githubUrl) && (
          <div className="flex gap-4 mb-8">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                View Live
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
              >
                View Code
              </Link>
            )}
          </div>
        )}
        <SanityContent value={content} />
      </div>
    </main>
  );
}
