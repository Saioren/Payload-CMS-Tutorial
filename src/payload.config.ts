import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { BlogPosts } from './collections/BlogPosts'
import { PageTemplates } from './collections/pageTemplates/PageTemplates'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Users, Pages, Media, BlogPosts, PageTemplates,],
  globals: [
    Header,
    Footer,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
