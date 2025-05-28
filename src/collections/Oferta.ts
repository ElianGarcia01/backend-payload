import type { CollectionConfig } from 'payload'

export const oferta: CollectionConfig = {
  slug: 'oferta',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'titulo',
  },
  fields: [
    // Título del grupo
    {
      name: 'titulo',
      type: 'text',
      label: 'Título',
      required: true,
    },
    // Imagen de reverso
    {
      name: 'imagenReverso',
      type: 'upload',
      label: 'Imagen de Fondo',
      relationTo: 'media',
      required: true,
    },
    // url
    {
      name: 'url',
      type: 'text',
      label: 'URL',
      required: true,
      admin: {
        placeholder: 'https://ejemplo.com',
      },
    },
    // color
    {
      name: 'color',
      type: 'text',
      label: 'Color',
      required: true,
      admin: {
        placeholder: '#ffffff',
      },
    },
  ],
}
