import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8p7mbnpl',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'aldowalia',
  },
  deployment: {
    appId: 'o682j75usuxscgea3klm8wt4', // from your deploy success message
  },
})
