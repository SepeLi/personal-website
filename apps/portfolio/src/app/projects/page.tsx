import { serverClient as trpc } from '@personal-website/server';
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
        {content.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
          >
            <div className="h-48 bg-gray-100">
              {/* Add project image here */}
            </div>
            <div className="p-6 grow flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStackTags.map(({ label }, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <a
                href={`/projects/${project.slug.current}`}
                className="text-sky-600 hover:text-sky-700 font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
