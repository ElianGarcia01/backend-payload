import type { CollectionConfig } from 'payload'

export const Talentos: CollectionConfig = {
  // Identificador único para la colección en la URL y el CMS
  slug: 'Talentos',
  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título de la noticia',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Se relaciona con la colección "media"
      label: 'Imagen destacada',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date', // Campo de fecha para indicar cuándo fue publicado
      label: 'Fecha de publicación',
      required: true,
    },
    {
      name: 'isFeatured',
      type: 'checkbox', // Checkbox que indica si la noticia debe aparecer en el carrusel
      label: '¿Mostrar en la pagina?',
      defaultValue: false, // Por defecto, la noticia no será destacada
    },
  ],
}
