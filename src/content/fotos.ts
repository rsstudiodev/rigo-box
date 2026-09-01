import type { Foto } from './types';

/**
 * Placeholder photography, served from public/img. Credits and licenses live in
 * docs/PHOTO_CREDITS.md. Every file is replaced once Rigo Box supplies its own.
 */
const img = (archivo: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/img/${archivo}`;

/** The brand mark itself. The file ships on a near-black square, so it is composited
 * with mix-blend-mode: screen over the steel background instead of being keyed out. */
export const logo = {
  grande: img('logo-rigobox.png'),
  chico: img('logo-rigobox-sm.png'),
  alt: 'Logotipo de Rigo Box, guantes rojos colgados',
} as const;

export const fotoHero: Foto = {
  url: img('ring-3.jpg'),
  alt: 'Combate amateur sobre el ring',
};

/** The ring photo moved here when the logo took over the hero. */
export const fotoNosotros: Foto = {
  url: img('ring-3.jpg'),
  alt: 'Combate amateur sobre el ring',
};

export const galeria: Foto[] = [
  { url: img('guantes-1.jpg'), alt: 'Sesión de manopleo con el coach' },
  { url: img('costal-1.jpg'), alt: 'Golpeo con guante rojo sobre manopla' },
  { url: img('amateur-1.jpg'), alt: 'Pelea amateur, esquina azul contra esquina roja' },
  { url: img('costal-2.jpg'), alt: 'Entrenamiento en pera de velocidad' },
  { url: img('guantes-4.jpg'), alt: 'Golpe recto en el trabajo de manoplas' },
  { url: img('entreno-3.jpg'), alt: 'Corrección de técnica entre dos boxeadores' },
  { url: img('ring-2.jpg'), alt: 'Peleadores en el ring durante un combate' },
  { url: img('guantes-5.jpg'), alt: 'Detalle de guantes y manoplas en el trabajo' },
  { url: img('amateur-4.jpg'), alt: 'Combate con árbitro en el gimnasio' },
  { url: img('guantes-6.jpg'), alt: 'Manopleo visto de cerca' },
];

/** Coach portraits. */
export const fotoCoach = {
  rigo: img('entreno-2.jpg'),
  aldo: img('guantes-3.jpg'),
  angel: img('costal-5.jpg'),
  andy: img('coach-2.jpg'),
} as const;
