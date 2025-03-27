import type { CollectionConfig } from 'payload'

export const NivelSuperior: CollectionConfig = {
  slug: 'niveles-superiores',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'nivelSuperior',
  },
  fields: [
    {
      name: 'nivelSuperior',
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
      name: 'imagen',
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
    // Campo para Google Maps
    {
      name: 'ubicacion',
      type: 'text',
      required: true,
    },
  ],
}
