# Portafolio digital — Juan David Villegas Anaya

Portafolio personal de Juan David Villegas Anaya, desarrollador backend con Java y Spring Boot
y estudiante de Computer Science en la BUAP. Presenta su perfil, proyectos, habilidades,
certificaciones e información de contacto.

## Tecnologías

- **Astro 7** para generar el sitio estático.
- **Tailwind CSS 4**, integrado mediante Vite, para los estilos.
- **TypeScript** para los datos de contenido.
- **@astrojs/sitemap** para generar el mapa del sitio.

## Desarrollo local

Con Node.js **22.23.4 o superior** y npm **9.6.5 o superior** instalados, desde la raíz del proyecto:

```bash
npm ci
npm run dev
```

Abre la dirección que indique la terminal.

### Otros comandos

| Comando | Función |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo, igual que `npm run dev`. |
| `npm run build` | Genera la versión estática del sitio. |
| `npm run preview` | Previsualiza localmente la compilación generada. |
| `node --test scripts/deployment-config.test.mjs` | Verificar la configuración del deployment |
| `npm run build && node --test scripts/analytics.test.mjs` | Verificar la integración de Analytics en el sitio generado. |

## Integración continua

El workflow [CI](.github/workflows/ci.yml) se ejecuta en los pull requests dirigidos
a `main` y en los pushes a esa rama. El job `Validate` usa Node.js **22.23.4**, instala
las dependencias con `npm ci` y caché de npm, verifica la configuración de despliegue,
compila el sitio y comprueba Analytics en los archivos generados, en ese orden.
No necesita secretos ni permisos de escritura y no publica el sitio.

Para ejecutar las mismas validaciones localmente:

```bash
npm ci
node --test scripts/deployment-config.test.mjs
npm run build
node --test scripts/analytics.test.mjs
```

La prueba de Analytics necesita el resultado de la compilación anterior.

## Despliegue

El portafolio se aloja como sitio estático en **Vercel**, con el repositorio de
GitHub conectado. Los cambios publicados en la rama de producción `main` generan
un nuevo despliegue automáticamente.

| Configuración | Valor |
| --- | --- |
| Application Preset | Astro |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm ci` |

Durante la compilación, la configuración obtiene el dominio de producción de
`VERCEL_PROJECT_PRODUCTION_URL`, proporcionado por Vercel. No es necesario escribir
la URL manualmente en `site`; los recursos se sirven desde `/`.

## Editar el contenido

- `src/data/projects.ts`: proyectos del portafolio.
- `src/data/skills.ts`: habilidades y categorías.
- `src/data/certifications.ts`: certificaciones.
- `src/components/sections/`: contenido y presentación de cada sección.
- `src/pages/index.astro`: metadatos de la página y orden de las secciones.
- `src/styles/global.css`: estilos globales.
