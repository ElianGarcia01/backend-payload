import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    imageSizes: [
      {
        name: 'mobile',
        width: 150,
        height: 150,
        fit: 'inside',
      },
      {
        name: 'thumbnail',
        width: 320,
        height: 240,
        fit: 'inside',
      },
      {
        name: 'medium',
        width: 640,
        height: 480,
        fit: 'inside',
      },
      {
        name: 'large',
        width: 1280,
        height: 720,
        fit: 'inside',
      },
      {
        name: 'banner',
        width: 1920,
        height: 1080,
        fit: 'cover', // Forza recorte 16:9
        position: 'centre',
      },
    ],
    formatOptions: {
      format: 'webp',
      options: { quality: 80 },
    },
    // Opcional: Conserva original para compatibilidad
    disableLocalStorage: false,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
