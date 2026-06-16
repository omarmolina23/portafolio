// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pdfWorkerSrc = path.resolve(
    __dirname,
    'node_modules/@pdfslick/core/node_modules/pdfjs-dist/build/pdf.worker.min.mjs'
);
const pdfWorkerDest = path.resolve(__dirname, 'public/pdf.worker.min.mjs');

/** Vite plugin: copies the PDF.js worker to public/ with a fixed name and patches
 *  @pdfslick/core's dynamic URL so Vercel always serves it from a known, stable path
 *  instead of a hashed /_astro/ asset (which can have MIME-type issues on some CDNs). */
function pdfWorkerPlugin() {
    return {
        name: 'pdf-worker-public',
        buildStart() {
            if (fs.existsSync(pdfWorkerSrc)) {
                fs.copyFileSync(pdfWorkerSrc, pdfWorkerDest);
            }
        },
        configureServer(server) {
            // Also copy in dev so the file is available during `astro dev`
            if (fs.existsSync(pdfWorkerSrc)) {
                fs.copyFileSync(pdfWorkerSrc, pdfWorkerDest);
            }
            return undefined;
        },
        // Replace the dynamic import.meta.url-based worker URL with the fixed public path
        transform(code, id) {
            if (id.includes('@pdfslick/core') && code.includes('GlobalWorkerOptions.workerSrc')) {
                return code.replace(
                    /GlobalWorkerOptions\.workerSrc\s*=\s*new URL\([^)]+\)\.toString\(\)/,
                    `GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs"`
                );
            }
        },
    };
}

export default defineConfig({
    vite: {
        plugins: [tailwindcss(), pdfWorkerPlugin()],
        optimizeDeps: {
            exclude: ["@pdfslick/react", "@pdfslick/core"],
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
