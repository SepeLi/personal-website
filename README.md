# Personal Website

A modern, AI-assisted personal portfolio website showcasing projects, skills, and cutting-edge engineering practices. This project demonstrates full-stack web development with a strong emphasis on modularity, type safety, and developer experience.

## ✨ Features

- **Nx Monorepo**: Organizes the codebase for scalability and modularity.
- **Modern Frameworks**: Built using **Next.js 15** and **React 19**.
- **tRPC Integration**: End-to-end type-safe API communication.
- **Live Content with Sanity**: Integrated with Sanity’s Live Content API for real-time updates.
- **AI-Assisted Testing & Dev**: Leveraged tools like **Cursor** to streamline development and generate meaningful tests.
- **Storybook**: Visual component explorer and documentation.
- **Testing Suite**: Includes unit tests (Vitest) and end-to-end tests (Playwright).
- **Netlify Deployment**: Easily deployed and maintained with Netlify.

## 🛠️ Development Process

1. **Monorepo Setup**: Initialized using [Nx](https://nx.dev) to structure multiple apps and libraries.
2. **Sanity Integration**: Configured a headless CMS using Sanity with live content editing.
3. **Backend Routing**: tRPC was implemented to handle API logic with full TypeScript safety.
4. **AI Tooling**: Cursor was an invaluable assistant in writing and refactoring code, especially for tests and CLI tasks.

## 📦 Tech Stack

- **Frameworks**: Next.js 15, React 19
- **Styling**: Tailwind CSS, styled-components
- **CMS**: Sanity.io
- **API**: tRPC
- **Tooling**: Nx, Vite, Storybook, Cursor, Prettier, ESLint
- **Testing**: Vitest, Playwright, Testing Library
- **Deployment**: Netlify

## 📁 Scripts

Run with `npm` or `yarn`:

| Script                    | Description                                     |
| ------------------------- | ----------------------------------------------- |
| `npm run dev`             | Start both the frontend and Sanity dev servers  |
| `npm run dev:portfolio`   | Start the portfolio frontend only               |
| `npm run dev:sanity`      | Start the Sanity Studio only                    |
| `npm run deploy:sanity`   | Deploy Sanity studio to production              |
| `npm run build:portfolio` | Build the frontend for production               |
| `npm run commit`          | Commit changes using conventional commit format |

## 🚀 Running Locally

```
# Clone the repository
git clone https://github.com/your-username/personal-website.git
cd personal-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env  # then fill in your values

# Start development servers
npm run dev
```

## 🧪 Testing

```bash
# Run unit tests
npx nx test

# Run e2e tests
npx nx e2e
```

Testing is implemented with:

- Vitest for fast unit tests
- Playwright for full end-to-end testing
- AI-generated test scaffolding with Cursor

## 📚 Storybook

Launch Storybook to explore and document components visually:

```
npx nx storybook portfolio
```

## 🚀 Deployment

The site is continuously deployed to Netlify. Pushing to main triggers an automated deployment.

## 🤖 AI in Development

Development was enhanced using Cursor, an AI-powered editor that helped with:

- Component generation
- tRPC router scaffolding
- Unit and e2e test creation
- Refactoring and debugging
