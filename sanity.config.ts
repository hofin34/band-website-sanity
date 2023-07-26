import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { SANITY_PROJECT_ID, SANITY_DATASET } from '../src/config'

export default defineConfig({
  name: 'default',
  title: 'band-website-sanity',

  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
