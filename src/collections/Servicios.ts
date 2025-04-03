import type { CollectionConfig } from 'payload'

export const Servicios: CollectionConfig = {
  slug: 'servicios-imagenes',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'servicios',
    // defaultColumns: ['titulo', 'grupos'],
  },
  fields: [
    // Título principal del conjunto de grupos
    {
      name: 'servicios',
      type: 'text',
      required: true,
    },
    // Array de grupos de imágenes
    {
      name: 'grupos',
      type: 'array',
      label: 'Grupos de Imágenes',
      minRows: 1,
      fields: [
        {
          name: 'tituloGrupo',
          type: 'text',
          label: 'Título del Grupo',
          required: true,
        },
        {
          name: 'imagenFondo',
          type: 'upload',
          label: 'Imagen de Fondo',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'imagenFrontal',
          type: 'upload',
          label: 'Imagen Frontal',
          relationTo: 'media',
          required: true,
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
