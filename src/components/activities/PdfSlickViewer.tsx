import { usePDFSlick } from "@pdfslick/react";
import "@pdfslick/react/dist/pdf_viewer.css";

type PdfSlickViewerProps = {
  src: string;
};

export default function PdfSlickViewer({ src }: PdfSlickViewerProps) {
  const { viewerRef, usePDFSlickStore, PDFSlickViewer, error } = usePDFSlick(
    src,
    {
      scaleValue: "page-width",
    }
  );

  const pdfSlick = usePDFSlickStore((s) => s.pdfSlick);
  const pageNumber = usePDFSlickStore((s) => s.pageNumber);
  const numPages = usePDFSlickStore((s) => s.numPages);
  const scale = usePDFSlickStore((s) => s.scale);

  const btn =
    "inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-200 transition hover:bg-white/10 disabled:opacity-40 disabled:hover:bg-transparent";

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
      {/* Barra de herramientas */}
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-slate-950/60 px-3 py-2">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className={btn}
            aria-label="Página anterior"
            disabled={!pdfSlick || pageNumber <= 1}
            onClick={() => pdfSlick?.gotoPage(Math.max(1, pageNumber - 1))}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <span
            className="text-center text-sm font-medium text-slate-300"
            style={{ minWidth: "5.5rem" }}
          >
            {numPages ? `${pageNumber} / ${numPages}` : "—"}
          </span>
          <button
            type="button"
            className={btn}
            aria-label="Página siguiente"
            disabled={!pdfSlick || pageNumber >= numPages}
            onClick={() => pdfSlick?.gotoPage(Math.min(numPages, pageNumber + 1))}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className={btn}
            aria-label="Reducir zoom"
            disabled={!pdfSlick}
            onClick={() => pdfSlick?.decreaseScale()}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <span
            className="text-center text-sm font-medium text-slate-300"
            style={{ minWidth: "3.5rem" }}
          >
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            className={btn}
            aria-label="Aumentar zoom"
            disabled={!pdfSlick}
            onClick={() => pdfSlick?.increaseScale()}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <button
            type="button"
            className={btn}
            aria-label="Descargar PDF"
            disabled={!pdfSlick}
            onClick={() => pdfSlick?.downloadOrSave()}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Visor */}
      <div className="relative w-full bg-slate-200" style={{ height: "600px" }}>
        {error ? (
          <div className="absolute inset-0 grid place-items-center px-6 text-center text-sm text-slate-600">
            No se pudo cargar el documento PDF.
          </div>
        ) : (
          <PDFSlickViewer {...{ viewerRef, usePDFSlickStore }} />
        )}
      </div>
    </div>
  );
}
