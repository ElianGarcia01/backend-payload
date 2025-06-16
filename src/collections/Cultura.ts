import type { CollectionConfig } from 'payload'

export const Cultura: CollectionConfig = {
  slug: 'cultura',
  admin: {
    useAsTitle: 'titulo',
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      required: true,
    },
    {
        name: 'descripcion',
        type: 'text',
        required: true,
    },
    {name: 'imagen',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}