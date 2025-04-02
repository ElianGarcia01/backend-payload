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
      relationTo: 'media',
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
    // Campo para el link e imagen del cartel
    {
      name: 'cartel',
      type: 'text',
      required: false,
    },
    {
      name: 'imagenCartel',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    // Sección de región con video promocional incluido
    {
      name: 'region',
      type: 'group',
      fields: [
        {
          name: 'nombre',
          type: 'select',
          required: true,
          options: [
            { label: 'Centro', value: 'Centro' },
            { label: 'Norte', value: 'Norte' },
            { label: 'Montaña', value: 'Montaña' },
            { label: 'Acapulco', value: 'Acapulco' },
            { label: 'Tierra Caliente', value: 'Tierra Caliente' },
            { label: 'Costa Chica', value: 'Costa Chica' },
            { label: 'Costa Grande', value: 'Costa Grande' },
          ],
        },
        {
          name: 'videoPromocional',
          type: 'text',
          required: false,
        },
      ],
    },
  ],
}
