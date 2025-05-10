import type { CollectionConfig } from 'payload'

export const Paginas: CollectionConfig = {
  slug: 'Paginas',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'Pagina',
  },
  fields: [
    // Nombre de la pagina
    {
      name: 'Pagina',
      type: 'text',
      required: true,
    },
    // Campo para subir descripcion de la pagina (opcional)

    {
      name: 'descripcion',
      type: 'text',
      required: false,
    },
    // Campo para subir banner de la pagina (opcional)
    {
      name: 'imagen',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    // Campo de secciones - arreglo de objetos
    {
      name: 'Seccion',
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
        {
          name: 'imagen',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
}
