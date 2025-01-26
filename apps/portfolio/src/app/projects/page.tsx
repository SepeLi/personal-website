export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring Stripe integration, user authentication, and a responsive design.",
      tech: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      image: "/project1.jpg",
      link: "https://github.com/yourusername/project1"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS, featuring dark mode and responsive design.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/project2.jpg",
      link: "https://github.com/yourusername/project2"
    },
    // Add more projects as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-48 bg-gray-100">
              {/* Add project image here */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
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