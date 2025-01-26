export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Hi there! I'm a passionate full-stack developer with a keen interest in building modern web applications.
            With several years of experience in web development, I specialize in React, Next.js, and Node.js.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Experience</h2>
          <ul className="space-y-4 text-gray-600">
            <li>
              <strong>Senior Developer</strong> - Tech Company (2022-Present)
              <p>Leading development of enterprise web applications</p>
            </li>
            <li>
              <strong>Full Stack Developer</strong> - Startup (2020-2022)
              <p>Built and maintained multiple client projects</p>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Education</h2>
          <ul className="space-y-4 text-gray-600">
            <li>
              <strong>Master's in Computer Science</strong>
              <p>University Name, 2020</p>
            </li>
            <li>
              <strong>Bachelor's in Software Engineering</strong>
              <p>University Name, 2018</p>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
            <div>
              <strong>Frontend</strong>
              <ul className="mt-2">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <strong>Backend</strong>
              <ul className="mt-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div>
              <strong>Tools</strong>
              <ul className="mt-2">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}