# 🧠 Backend - Payload CMS

Este proyecto es el **backend oficial** del sitio de la Universidad Autónoma de Guerrero, desarrollado con **[Payload CMS](https://payloadcms.com/)** como headless CMS.

> ⚠️ Aunque el dominio incluye "strapi", este backend está 100% construido con Payload CMS. Strapi **no está siendo utilizado** en este proyecto.

---

## 🌐 Producción

- 🌐 **CMS en producción**: [https://strapi.uagro.mx](https://strapi.uagro.mx)
- 🔐 **Panel de administración**: [https://strapi.uagro.mx/admin/](https://strapi.uagro.mx/admin/)
- 🎨 **Frontend del sitio**: [https://strapi.uagro.mx/frontend/](https://strapi.uagro.mx/frontend/)

📌 El backend se encuentra en la raíz del dominio, y el frontend está alojado en `/frontend/`.

### 🔁 Excepción de rutas

El servidor está configurado para **evitar conflictos** entre las rutas del CMS y la subruta `/frontend/`, permitiendo así servir el frontend sin interferir con las APIs ni el panel de administración.

---

## ⚙️ Tecnologías

- ✅ [Payload CMS v3](https://payloadcms.com/docs/)
- ✅ Next.js 15 (con adaptador de Payload)
- ✅ MongoDB Atlas (base de datos en la nube)
- ✅ GraphQL habilitado
- ✅ Panel de administración visual y APIs REST/GraphQL
- ✅ Despliegue conjunto con frontend en el mismo entorno

---

## 📦 Instalación local

1. Clona el proyecto:

```bash
git clone https://github.com/ElianGarcia01/backend-payload.git
cd backend-payload


2.Instala dependencias:

pnpm install
# o si usas npm
npm install

3.Crea un archivo .env con lo siguiente:

PAYLOAD_SECRET=unaClaveSuperSecreta
MONGODB_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/mi-base
SERVER_URL=https://strapi.uagro.mx/frontend

4.Ejecuta en desarrollo:

pnpm dev
# o
npm run dev

Accede en local a http://localhost:3000/admin.

🛠️ Scripts disponibles

Comando	Descripción
npm dev	Inicia el servidor de desarrollo
npm build	Compila el proyecto
npm start	Inicia el servidor en modo producción
npm payload	Abre la CLI de Payload
npm lint	Linter con ESLint
npm generate:types	Genera tipos TypeScript para Payload

📁 Estructura principal

src/
├── app/                   # Carpetas del diseño del front del panel
├── collections/           # Colecciones de contenido (ej. eventos, noticias)
├── payload.config.ts      # Configuración general del CMS
├── globals/               # Configuración global del sitio
├── public/                # Archivos estáticos (imgs, uploads)
├── tsconfig.json          # Configuración TypeScript
├── .env                   # Variables de entorno
└── package.json

🔌 Consumo desde el frontend

El frontend en /frontend utiliza Axios para consumir las APIs REST o GraphQL generadas por Payload.

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getNivelesSuperiores()
        const schoolData = response.data.docs.reverse();
        setSchools(schoolData);

        // Calcular y setear las regiones únicas solo una vez
        const regions = Array.from(
          new Set(
            schoolData.map((school) => school.region?.nombre).filter(Boolean)
          )
        );
        setUniquesRegions(regions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    getData();
  }, []); // Este efecto solo se ejecuta una vez al montar el componente



🧱 Colecciones actuales

Este proyecto incluye las siguientes colecciones (ejemplo):

    Media (medios)

    NivelSuperior

    Noticia

    Product

    Servicios

    Users

Puedes agregar más en la carpeta collections y en el archivo payload.config.ts.

☁️ Despliegue

El backend se encuentra desplegado en la raíz del dominio:

    Dominio principal: https://strapi.uagro.mx

    El frontend está en /frontend/

    Configurado para servir ambos desde el mismo entorno sin conflictos

💾 Base de datos

Se utiliza MongoDB Atlas como base de datos externa, conectada a través de la URI definida en .env.

🔐 Seguridad

    Roles y autenticación manejados desde el Admin de Payload

    Acceso protegido con tokens o sesiones

    API GraphQL y REST segura

    .env no subido al repositorio


📚 Documentación útil

    Payload CMS Docs

    Next.js Routing

    GraphQL API de Payload

✍️ Autor

Desarrollado por el equipo web de la Universidad Autónoma de Guerrero.

✅ Estado del proyecto

🚧 En desarrollo / Producción estable.