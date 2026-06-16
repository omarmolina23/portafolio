# Portafolio System Soft

Portafolio académico del equipo **System Soft**, desarrollado con [Astro 5](https://astro.build) y desplegado en [Vercel](https://vercel.com). Presenta las actividades de las asignaturas **Análisis y Diseño de Sistemas** e **Ingeniería de Software** de la Universidad Francisco de Paula Santander.

## Equipo

| Nombre | Código | Rol |
|---|---|---|
| Omar Jaimes | 1152263 | Desarrollador Frontend |
| Bryan Vera | 1152277 | Desarrollador Backend |
| Saimer Saavedra | 1152280 | Diseñador UX/UI |

## Tecnologías

- **[Astro 5](https://astro.build)** — framework principal (SSR con adaptador Vercel)
- **[Tailwind CSS 4](https://tailwindcss.com)** — estilos
- **[React 18](https://react.dev)** — componentes interactivos (islas)
- **[PDFSlick](https://pdfslick.dev)** — visualizador de documentos PDF basado en PDF.js

## Estructura de rutas

```
/                                        → Inicio y presentación del equipo
/systems-analysis                        → Actividades de Análisis y Diseño de Sistemas
  /software-lifecycle-models
  /information-systems
  /software-development-trends
/software-engineering                    → Actividades de Ingeniería de Software
  /software-metrics-ne
  /software-metrics-adela
  /configuration-management-plan
  /configuration-audit-ne
  /configuration-audit-adela
```

## Inicialización

Requiere **Node.js 20+**.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev        # http://localhost:4321

# Build de producción
npm run build

# Vista previa del build
npm run preview
```
