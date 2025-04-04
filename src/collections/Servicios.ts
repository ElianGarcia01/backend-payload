import type { CollectionConfig } from 'payload'

export const Servicios: CollectionConfig = {
  slug: 'servicios-imagenes',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'titulo',
  },
  fields: [
    // Título del grupo (antes estaba dentro del array)
    {
      name: 'titulo',
      type: 'text',
      label: 'Título',
      required: true,
    },
    // Imagen de fondo
    {
      name: 'imagenFondo',
      type: 'upload',
      label: 'Imagen de Fondo',
      relationTo: 'media',
      required: true,
    },
    // Imagen frontal
    {
      name: 'imagenFrontal',
      type: 'upload',
      label: 'Imagen Frontal',
      relationTo: 'media',
      required: true,
    },
  ],
}
