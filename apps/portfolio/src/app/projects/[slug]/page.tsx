import { SanityContent, urlFor } from '@personal-website/sanity-toolkit';
import { serverClient as trpc } from '@personal-website/server';
import Image from 'next/image';
import { cache } from 'react';

const getProjectBySlug = cache(async (slug: string) => {
  const trpcCaller = await trpc();
  return trpcCaller.project.getProjectBySlug(slug);
});

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const projectData = await getProjectBySlug(slug);
  return (
    <main className="container mx-auto px-4 py-8 text-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <h1 className="text-4xl font-bold mb-4">{projectData.title}</h1>

        {/* Project Image */}
        {projectData.image && (
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={urlFor(projectData.image).url()}
              alt={projectData.title}
              priority={false}
              fill
              className="object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        )}

        {/* Project Description */}
        <p className="text-lg mb-8">{projectData.description}</p>

        {/* Technologies Used */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {projectData.techStackTags.map(({ label }, idx) => (
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
        {(projectData.liveUrl || projectData.githubUrl) && (
          <div className="flex gap-4 mb-8">
            {projectData.liveUrl && (
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                View Live
              </a>
            )}
            {projectData.githubUrl && (
              <a
                href={projectData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
              >
                View Code
              </a>
            )}
          </div>
        )}
        <SanityContent value={projectData.content} />
      </div>
    </main>
  );
}
