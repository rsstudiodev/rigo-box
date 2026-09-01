import { useCallback, useEffect, useRef, useState } from 'react';

export default function Lightbox({ fotos }) {
  const [indice, setIndice] = useState(null);
  const cerrarRef = useRef(null);
  const abierto = indice !== null;

  const cerrar = useCallback(() => setIndice(null), []);
  const mover = useCallback(
    (paso) => setIndice((i) => (i === null ? i : (i + paso + fotos.length) % fotos.length)),
    [fotos.length],
  );

  useEffect(() => {
    if (!abierto) return;
    const onKey = (e) => {
      if (e.key === 'Escape') cerrar();
      if (e.key === 'ArrowRight') mover(1);
      if (e.key === 'ArrowLeft') mover(-1);
      if (e.key === 'Tab') {
        e.preventDefault();
        cerrarRef.current?.focus();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    cerrarRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [abierto, cerrar, mover]);

  return (
    <>
      <ul className="columns-2 gap-3 md:columns-4 md:gap-4">
        {fotos.map((foto, i) => (
          <li key={foto.url} className="mb-3 break-inside-avoid md:mb-4">
            <button type="button" onClick={() => setIndice(i)} className="group block w-full overflow-hidden">
              <img
                src={foto.url}
                alt={foto.alt}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover grayscale-[0.6] contrast-[1.05] transition-transform duration-500 group-hover:scale-[1.03] ${
                  i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              />
            </button>
          </li>
        ))}
      </ul>

      {abierto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={fotos[indice].alt}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-steel-900/96 p-4"
          onClick={cerrar}
        >
          <img
            src={fotos[indice].url}
            alt={fotos[indice].alt}
            className="max-h-[82vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-data text-xs text-bone/60">
            {indice + 1} / {fotos.length}
          </p>
          <button
            ref={cerrarRef}
            type="button"
            onClick={cerrar}
            className="absolute right-4 top-4 bg-red px-4 py-2 font-body text-sm font-bold text-steel-900"
          >
            Cerrar
          </button>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={(e) => {
              e.stopPropagation();
              mover(-1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 px-4 py-6 font-data text-2xl text-bone/70 hover:text-bone"
          >
            {'‹'}
          </button>
          <button
            type="button"
            aria-label="Foto siguiente"
            onClick={(e) => {
              e.stopPropagation();
              mover(1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-6 font-data text-2xl text-bone/70 hover:text-bone"
          >
            {'›'}
          </button>
        </div>
      )}
    </>
  );
}
