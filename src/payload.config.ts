import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Product'
import { Noticias } from './collections/Noticia'
import { NivelSuperior } from './collections/NivelSuperior'
import { Servicios } from './collections/Servicios'
import { DestacadoDeportes } from './collections/DestacadoDeportes'
import { Paginas } from './collections/Paginas'
import { Talentos } from './collections/Talentos'
import { oferta } from './collections/Oferta'
import { Bachilleratos } from './collections/Bachilleratos'
import { Cultura } from './collections/Cultura'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.SERVER_URL || 'http://localhost:3000', // Variable url
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Products,
    Noticias,
    NivelSuperior,
    Servicios,
    DestacadoDeportes,
    Paginas,
    Talentos,
    oferta,
    Bachilleratos,
    Cultura,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
})
