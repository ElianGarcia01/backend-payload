import type { CollectionConfig } from 'payload'

// Definición de la colección "News" para almacenar noticias del sitio
export const DestacadoDeportes: CollectionConfig = {
  // Identificador único para la colección en la URL y el CMS
  slug: 'DestacadoDeportes',
  access: {
    read: () => true,
  },

  // Campo que se usará como título principal en el panel de administración
  admin: {
    useAsTitle: 'title',
  },

  // Definición de los campos que contendrá cada noticia
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título de la noticia',
      required: true, // Campo obligatorio
    },
    {
      name: 'description',
      type: 'textarea', // Tipo textarea para permitir descripciones más largas
      label: 'Descripción corta',
      required: true,
    },
    {
      name: 'image',
      type: 'upload', // Este campo permite subir o seleccionar una imagen desde la colección "media"
      relationTo: 'media', // Se relaciona con la colección "media" previamente configurada
      label: 'Imagen destacada',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date', // Campo de fecha para indicar cuándo fue publicada la noticia
      label: 'Fecha de publicación',
      required: true,
    },
    {
      name: 'isFeatured',
      type: 'checkbox', // Checkbox que indica si la noticia debe aparecer en el carrusel
      label: '¿Mostrar en el carrusel?',
      defaultValue: false, // Por defecto, la noticia no será destacada
    },
  ],
}
