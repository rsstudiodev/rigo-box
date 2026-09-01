import type { Sitio } from './types';

export const sitio: Sitio = {
  nombre: 'Rigo Box',
  nombreCorto: 'Rigo Box',
  eslogan: 'Gimnasio de boxeo recreativo, amateur y profesional',
  ciudad: 'Zapopan, Jalisco',
  direccion: 'Volcán Popocatépetl 5115, Zapopan 45070',
  // TODO: confirm with the owner. Placeholder number until then.
  telefonoWhatsapp: '523300000000',
  mensajeWhatsapp: 'Hola, vi su página y quiero información para entrenar en Rigo Box.',
  horarioAtencion: 'Lunes a viernes, 6:00 a 21:00',
  instagram: 'https://www.instagram.com/rigo_box/',
  mapaEmbed:
    'https://www.openstreetmap.org/export/embed.html?bbox=-103.4131%2C20.6810%2C-103.4011%2C20.6890&layer=mapnik&marker=20.6850%2C-103.4071',
  mapaComoLlegar:
    'https://www.google.com/maps/search/?api=1&query=Volc%C3%A1n%20Popocat%C3%A9petl%205115%2C%20Zapopan%2045070',
};

/** One WhatsApp link, one intent label, reused by every call to action. */
export const whatsappUrl = `https://wa.me/${sitio.telefonoWhatsapp}?text=${encodeURIComponent(sitio.mensajeWhatsapp)}`;

export const ctaWhatsapp = 'Escríbenos por WhatsApp';

export const navegacion = [
  { href: '#nosotros', texto: 'El gimnasio' },
  { href: '#horarios', texto: 'Horarios' },
  { href: '#coaches', texto: 'Coaches' },
  { href: '#precios', texto: 'Precios' },
  { href: '#galeria', texto: 'Galería' },
  { href: '#ubicacion', texto: 'Ubicación' },
];
