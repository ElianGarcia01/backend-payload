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
    // Nombre de la escuela
    {
      name: 'nivelSuperior',
      type: 'text',
      required: true,
    },
    // Campo de licenciaturas - arreglo de objetos
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
    // Campo para subir el logo
    {
      name: 'imagen',
      type: 'upload',
      relationTo: 'media', // Asegura que las imágenes sean gestionadas por la colección de "media"
      required: true,
    },
    // Campo de contacto - arreglo de objetos
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
          name: 'sitioWeb',
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
    // Campo para el link del cartel
    {
      name: 'url_cartel',
      type: 'text',
      required: false,
    },
    // Campo de region
    {
      name: 'region',
      type: 'text',
      required: true,
    },
    // Campo para subir imagen del cartel
    {
      name: 'imagen_cartel',
      type: 'upload',
      relationTo: 'media', // Asegura que las imágenes sean gestionadas por la colección de "media"
      required: true,
    },
  ],
}
