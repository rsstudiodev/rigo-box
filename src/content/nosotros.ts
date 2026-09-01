import type { Cifra } from './types';

export const nosotros = {
  titulo: 'Aquí se hacen peleadores<br>y también se hace condición',
  parrafos: [
    'Rigo Box es un gimnasio de barrio en Zapopan. Recreativo, amateur y profesional en la misma nave, con el mismo coach en piso.',
    'Entra el niño de seis años, entra quien viene a bajar de peso después del trabajo, y entra el que se está preparando para subir al ring. Nadie estorba a nadie.',
  ],
  cifras: [
    { valor: '6-21', etiqueta: 'Horas abiertas al día' },
    { valor: '6+', etiqueta: 'Edad mínima para entrar' },
    { valor: '3', etiqueta: 'Niveles en la misma nave' },
  ] satisfies Cifra[],
};
