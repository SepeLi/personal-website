import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import structure from './deskStructure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: process.env.SANITY_STUDIO_PORTFOLIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_PORTFOLIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
