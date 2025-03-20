import type { CollectionConfig } from 'payload'

export const NivelSuperior: CollectionConfig = {
  slug: 'NivelesSuperiores',
  admin: {
    useAsTitle: 'Nivel Superior',
  },
  fields: [
    {
      name: 'Nivel Superior',
      type: 'text',
      required: true,
    },
    {
      name: 'licenciaturas',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'nombre',
          type: 'text',
          required: true,
        },
        {
          name: 'descripcion',
          type: 'text',
          required: false,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Asegura que las imágenes sean gestionadas por la colección de "media"
      required: true,
    },
    {
      name: 'contacto',
      type: 'group',
      fields: [
        {
          name: 'telefono',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'text',
          required: true,
        },
        {
          name: 'direccion',
          type: 'text',
          required: true,
        },
        {
          name: 'sitio web',
          type: 'text',
          required: false,
        },
      ],
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
