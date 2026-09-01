import type { ModoHorario } from './types';

/**
 * Rigo Box has no class grid. It runs two modes.
 * TODO: confirm both windows with the owner. The Instagram bio only states
 * "L-V 6am-9pm" and names OpenBox without giving it its own hours.
 */
export const modos: ModoHorario[] = [
  {
    id: 'corrido',
    nombre: 'Horario corrido',
    franja: 'Lunes a viernes, 6:00 a 21:00',
    desde: 6,
    hasta: 21,
    resumen:
      'El gimnasio está abierto todo el día con coach en piso. Llegas a la hora que puedas y entrenas con guía.',
    incluye: [
      'Coach presente durante toda la jornada',
      'Técnica, manopleo y acondicionamiento',
      'Todas las edades y todos los niveles',
    ],
    destacado: true,
  },
  {
    id: 'openbox',
    nombre: 'Open Box',
    franja: 'Lunes a viernes, 13:00 a 16:00',
    desde: 13,
    hasta: 16,
    resumen:
      'Ventana de entrenamiento libre. No hay clase dirigida: llegas, golpeas costal y entrenas por tu cuenta.',
    incluye: [
      'Costales, ring y cuerdas abiertos',
      'Material de acondicionamiento disponible',
      'Sin clase dirigida ni horario fijo de entrada',
    ],
    destacado: false,
  },
];
