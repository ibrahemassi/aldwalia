import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemaTypes'  // 👈 correct path
import { structure } from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Aldowalia Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8p7mbnpl',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'aldowalia',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-09-26',

  plugins: [deskTool({ structure })],

  schema: {
    types: schemaTypes,
  },
})
