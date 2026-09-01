import type { Coach } from './types';
import { fotoCoach } from './fotos';

/**
 * Names come from the Instagram story highlights. Every figure below is a
 * placeholder. TODO: confirm records, roles and history with the gym.
 */
export const coaches: Coach[] = [
  {
    nombre: 'Rigo',
    rol: 'Head coach y fundador',
    historial: [
      'Fundador de Rigo Box, Zapopan',
      'Formación de peleadores amateur y profesionales',
      'Programa infantil desde los 6 años',
    ],
    foto: { url: fotoCoach.rigo, alt: 'Rigo, head coach de Rigo Box, trabajando manoplas' },
  },
  {
    nombre: 'Aldo Leonel',
    rol: 'Profesional',
    marca: { ganadas: 14, perdidas: 2, empates: 1, nocauts: 9 },
    historial: [
      'Campeón estatal amateur',
      'Debut profesional en Guadalajara',
      'Selección de Jalisco, categoría welter',
    ],
    foto: { url: fotoCoach.aldo, alt: 'Aldo Leonel, peleador profesional' },
  },
  {
    nombre: 'Angel H. García',
    rol: 'Amateur y manopleo',
    marca: { ganadas: 21, perdidas: 4, empates: 0, nocauts: 6 },
    historial: [
      'Medalla en Juegos Nacionales CONADE',
      'Más de veinte peleas amateur',
      'Formado en Rigo Box',
    ],
    foto: { url: fotoCoach.angel, alt: 'Angel H. García en el ring' },
  },
  {
    nombre: 'Andy Daniel García',
    rol: 'Infantil',
    historial: [
      'Responsable del programa infantil',
      'Grupos de 6 a 9 y de 10 a 14 años',
      'Formado en Rigo Box',
    ],
    foto: { url: fotoCoach.andy, alt: 'Andy Daniel García, entrenador infantil' },
  },
];
