import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PORTFOLIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_PORTFOLIO_DATASET || 'production',
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
