// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        // PDFSlick usa `new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url)`
        // para cargar el worker de PDF.js. Si Vite lo pre-empaqueta con esbuild ese
        // patrón se rompe y el worker no arranca (el PDF no renderiza). Excluyéndolo
        // del pre-bundle, Vite procesa el módulo y resuelve el worker correctamente.
        optimizeDeps: {
            exclude: ["@pdfslick/react", "@pdfslick/core"],
            // Al excluir PDFSlick, su dependencia CommonJS `use-sync-external-store`
            // (usada por zustand) deja de tener interop ESM. La forzamos a pre-bundle
            // para que exponga el export `default` y la isla React pueda hidratar.
            include: [
                "use-sync-external-store/shim/with-selector",
                "use-sync-external-store/shim/with-selector.js"
            ]
        },
        worker: {
            format: "es"
        }
    },
    integrations: [react()],
    output: "server",
    adapter: vercel()
});
