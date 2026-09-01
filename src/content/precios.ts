import type { Precio } from './types';

/**
 * Rigo Box runs two plans only, no per-class rate.
 * TODO: confirm what the enrolment fee and the equipment policy are.
 */
export const precios: Precio[] = [
  {
    nombre: 'Mensualidad',
    monto: '750',
    unidad: 'al mes',
    resumen: 'Acceso completo al horario corrido y al Open Box, sin límite de días.',
    incluye: ['Horario corrido con coach', 'Open Box', 'Todas las edades'],
    destacado: false,
  },
  {
    nombre: 'Trimestre',
    monto: '1,900',
    unidad: 'tres meses',
    resumen: 'El mismo acceso pagando por adelantado. Sale en 633 pesos al mes.',
    incluye: ['Todo lo de la mensualidad', 'Ahorras 350 pesos', 'Un solo pago'],
    destacado: true,
  },
];
