# Portafolio digital — Juan David Villegas Anaya

Portafolio personal de Juan David Villegas Anaya, desarrollador backend con Java y Spring Boot
y estudiante de Computer Science en la BUAP. Presenta su perfil, proyectos, habilidades,
certificaciones e información de contacto.

[Sitio web](https://axiwklk6zpoi.objectstorage.mx-queretaro-1.oci.customer-oci.com/n/axiwklk6zpoi/b/portafolio-digital/o/index.html)

## Tecnologías

- **Astro 5** para generar el sitio estático.
- **Tailwind CSS 4**, integrado mediante Vite, para los estilos.
- **TypeScript** para los datos de contenido.
- **@astrojs/sitemap** para generar el mapa del sitio.

## Desarrollo local

Con Node.js y npm instalados, desde la raíz del proyecto:

```bash
npm install
npm run dev
```

Abre la dirección que indique la terminal.

### Otros comandos

| Comando | Función |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo, igual que `npm run dev`. |
| `npm run build` | Genera la versión estática del sitio. |
| `npm run preview` | Previsualiza localmente la compilación generada. |

## Editar el contenido

- `src/data/projects.ts`: proyectos del portafolio.
- `src/data/skills.ts`: habilidades y categorías.
- `src/data/certifications.ts`: certificaciones.
- `src/components/sections/`: contenido y presentación de cada sección.
- `src/pages/index.astro`: metadatos de la página y orden de las secciones.
- `src/styles/global.css`: estilos globales.
