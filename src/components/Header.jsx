import { useEffect, useRef, useState } from 'react';
import { navegacion, whatsappUrl, ctaWhatsapp } from '../content/sitio';
import { logo } from '../content/fotos';
import WhatsappIcon from './common/WhatsappIcon.jsx';

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const [activo, setActivo] = useState('');
  const vistos = useRef({});

  // Highlight the nav item for the section the reader is in.
  useEffect(() => {
    const secciones = navegacion
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    if (!secciones.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        vistos.current = entries.reduce(
          (acc, e) => ({ ...acc, [e.target.id]: e.isIntersecting }),
          vistos.current,
        );
        // The current section is the last one that has already started.
        const activas = secciones.filter((s) => vistos.current[s.id]);
        if (activas.length) setActivo('#' + activas[activas.length - 1].id);
      },
      { rootMargin: '-68px 0px -55% 0px', threshold: 0 },
    );
    secciones.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [abierto]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setAbierto(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-[68px] border-b border-steel-700 bg-steel-900">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Rigo Box, inicio">
          <img src={logo.chico} alt="" width="200" height="200" className="logo-mark h-14 w-14" />
          <span className="display text-lg leading-[0.9] text-bone">
            Rigo
            <br />
            Box
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {navegacion.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activo === item.href ? 'true' : undefined}
              className={`relative py-2 font-body text-[13px] font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-red after:transition-[width] after:duration-300 hover:text-bone ${
                activo === item.href ? 'text-bone after:w-full' : 'text-bone/70 after:w-0'
              }`}
            >
              {item.texto}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red px-5 py-2.5 font-body text-[13px] font-bold text-steel-900 transition-transform duration-200 hover:-translate-y-px"
          >
            <WhatsappIcon className="h-[1.15em] w-[1.15em]" />
            {ctaWhatsapp}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span className="sr-only">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
          <span
            className={`block h-[2px] w-6 bg-bone transition-transform duration-200 ${abierto ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span className={`block h-[2px] w-6 bg-bone transition-opacity duration-200 ${abierto ? 'opacity-0' : ''}`} />
          <span
            className={`block h-[2px] w-6 bg-bone transition-transform duration-200 ${abierto ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {abierto && (
        <div id="menu-movil" className="fixed inset-x-0 top-[68px] bottom-0 z-40 bg-steel-900 px-5 py-8 lg:hidden">
          <nav className="flex flex-col" aria-label="Principal, móvil">
            {navegacion.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setAbierto(false)}
                aria-current={activo === item.href ? 'true' : undefined}
                className={`display border-b border-steel-700 py-5 text-4xl transition-colors hover:text-red ${
                  activo === item.href ? 'border-l-4 border-l-red pl-4 text-red' : 'text-bone'
                }`}
              >
                {item.texto}
              </a>
            ))}
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2.5 bg-red px-6 py-4 font-body text-sm font-bold text-steel-900"
          >
            <WhatsappIcon className="h-[1.15em] w-[1.15em]" />
            {ctaWhatsapp}
          </a>
        </div>
      )}
    </header>
  );
}
