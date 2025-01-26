import Image from 'next/image';

// Mock data - replace with real data later
const projectData = {
  title: 'E-Commerce Platform',
  description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and MongoDB',
  image: '/placeholder-project.jpg',
  technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/username/project',
  details: [
    'Implemented user authentication and authorization',
    'Built responsive UI with Tailwind CSS',
    'Integrated payment processing with Stripe',
    'Developed REST API endpoints for product management',
  ],
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <h1 className="text-4xl font-bold mb-4">{projectData.title}</h1>

        {/* Project Image */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={projectData.image}
            alt={projectData.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Project Description */}
        <p className="text-lg mb-8">
          {projectData.description}
        </p>

        {/* Technologies Used */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {projectData.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {projectData.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>

        {/* Project Links */}
        <div className="flex gap-4">
          <a
            href={projectData.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Live
          </a>
          <a
            href={projectData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
          >
            View Code
          </a>
        </div>
      </div>
    </main>
  );
}
