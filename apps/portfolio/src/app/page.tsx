import { FaEnvelope, FaFigma, FaGitAlt, FaGithub, FaLinkedin, FaNodeJs, FaReact, FaStripe } from 'react-icons/fa';
import { SiAdobeaftereffects, SiAdobepremierepro, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Fixed Social Links Widget */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:-translate-x-2 transition-all duration-300 hover:bg-white group"
          aria-label="GitHub"
        >
          <FaGithub className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:-translate-x-2 transition-all duration-300 hover:bg-white group"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
        </a>
        <a
          href="mailto:your.email@example.com"
          className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:-translate-x-2 transition-all duration-300 hover:bg-white group"
          aria-label="Email"
        >
          <FaEnvelope className="w-5 h-5 text-gray-400 group-hover:text-red-400" />
        </a>

        {/* Vertical line */}
        <div className="w-px h-16 bg-gray-200 mx-auto"></div>
      </div>

      {/* Mobile Social Links */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="flex gap-4 bg-white/80 backdrop-blur-sm rounded-full shadow-sm px-4 py-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors group"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors group"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors group"
            aria-label="Email"
          >
            <FaEnvelope className="w-4 h-4 text-gray-400 group-hover:text-red-400" />
          </a>
        </div>
      </div>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
              Multimedia Developer
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              I&apos;m a passionate Multimedia Developer specializing in creating engaging digital experiences through various media formats.
            </p>
            <p className="text-base leading-7 text-gray-600 mb-10">
              With expertise in web development, video production, animation, and interactive media, I bring creative concepts to life using cutting-edge technologies and industry best practices.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                View Portfolio
              </button>
              <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
                Contact Me <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-indigo-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Projects Timeline Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          My Journey & Projects
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

          {/* Timeline items */}
          <div className="space-y-12">
            {/* Project 1 */}
            <div className="relative flex items-center justify-between">
              <div className="flex w-5/12">
                {/* Left content */}
                <div className="pr-8 text-right">
                  <h3 className="font-semibold text-xl text-gray-900">E-Commerce Platform</h3>
                  <p className="text-gray-600 mt-2">Built a full-stack e-commerce platform using Next.js and Stripe integration</p>
                  <span className="text-blue-600 text-sm mt-2 block">2024</span>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />

              {/* Right space (for alternating pattern) */}
              <div className="w-5/12" />
            </div>

            {/* Project 2 */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12" />

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />

              {/* Right content */}
              <div className="w-5/12">
                <div className="pl-8">
                  <h3 className="font-semibold text-xl text-gray-900">Interactive Portfolio</h3>
                  <p className="text-gray-600 mt-2">Designed and developed an interactive portfolio website with 3D elements</p>
                  <span className="text-blue-600 text-sm mt-2 block">2023</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative flex items-center justify-between">
              <div className="flex w-5/12">
                <div className="pr-8 text-right">
                  <h3 className="font-semibold text-xl text-gray-900">Motion Graphics Showreel</h3>
                  <p className="text-gray-600 mt-2">Created a series of animated motion graphics for various clients</p>
                  <span className="text-blue-600 text-sm mt-2 block">2023</span>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />

              <div className="w-5/12" />
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="p-6 rounded-xl bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <SiNextdotjs className="w-12 h-12 text-gray-800" />
                <span className="mt-2 text-sm text-gray-600">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="w-12 h-12 text-blue-500" />
                <span className="mt-2 text-sm text-gray-600">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="w-12 h-12 text-cyan-500" />
                <span className="mt-2 text-sm text-gray-600">Tailwind</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="w-12 h-12 text-blue-600" />
                <span className="mt-2 text-sm text-gray-600">TypeScript</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="p-6 rounded-xl bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <FaNodeJs className="w-12 h-12 text-green-600" />
                <span className="mt-2 text-sm text-gray-600">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="w-12 h-12 text-green-500" />
                <span className="mt-2 text-sm text-gray-600">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <FaStripe className="w-12 h-12 text-purple-500" />
                <span className="mt-2 text-sm text-gray-600">Stripe</span>
              </div>
            </div>
          </div>

          {/* Design Tools */}
          <div className="p-6 rounded-xl bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Design</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <FaFigma className="w-12 h-12 text-purple-600" />
                <span className="mt-2 text-sm text-gray-600">Figma</span>
              </div>
              <div className="flex flex-col items-center">
                <SiAdobeaftereffects className="w-12 h-12 text-blue-800" />
                <span className="mt-2 text-sm text-gray-600">After Effects</span>
              </div>
              <div className="flex flex-col items-center">
                <SiAdobepremierepro className="w-12 h-12 text-purple-800" />
                <span className="mt-2 text-sm text-gray-600">Premiere Pro</span>
              </div>
            </div>
          </div>

          {/* Development Tools */}
          <div className="p-6 rounded-xl bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Dev Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <FaGitAlt className="w-12 h-12 text-orange-600" />
                <span className="mt-2 text-sm text-gray-600">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have a question or want to work together? Feel free to send me a message.
        </p>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                placeholder="Your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
