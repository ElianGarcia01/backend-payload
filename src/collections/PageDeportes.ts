import type { CollectionConfig } from 'payload'

export const Sections: CollectionConfig = {
  slug: 'sections',
  admin: {
    useAsTitle: 'sectionTitle',
  },
  fields: [
    {
      name: 'key',
      type: 'text',
      required: true,
      unique: true,
      label: 'Sección Clave',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Título Principal',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Contenido',
      required: true,
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo (opcional)',
    },
  ],
}
