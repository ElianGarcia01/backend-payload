import type { CollectionConfig } from 'payload'

export const Noticias: CollectionConfig = {
  slug: 'noticias',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Asegura que las imágenes sean gestionadas por la colección de "media"
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true, // Asegura que cada slug sea único
      required: true,
      admin: {
        position: 'sidebar', // Hace que el campo sea visible en la barra lateral
      },
    },
  ],
}
