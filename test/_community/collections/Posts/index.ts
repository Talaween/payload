import type { CollectionConfig } from 'payload'

import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: 'favedBy',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      admin: {
        description: 'Users who have favorited this tool',
      },
      hooks: {
        afterRead: [
          ({ value, req }) => {
            console.log('user:', req.user) //always print 'null' even when user is logged in

            return value?.filter((id: string) => id === req.user?.id) //this logic will not work as user is always null
          },
        ],
      },
    },
  ],
}
