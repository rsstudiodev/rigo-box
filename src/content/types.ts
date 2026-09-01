export type Foto = { url: string; alt: string };

/** One of the two ways the gym operates. Rigo Box runs no class grid. */
export type ModoHorario = {
  id: 'corrido' | 'openbox';
  nombre: string;
  franja: string;
  /** Hours on a 24h clock. They draw the arc on the dial. */
  desde: number;
  hasta: number;
  resumen: string;
  incluye: string[];
  /** Exactly one mode is the filled dial. */
  destacado: boolean;
};

export type Marca = {
  ganadas: number;
  perdidas: number;
  empates: number;
  nocauts: number;
};

export type Coach = {
  nombre: string;
  rol: string;
  /** Absent for a coach who never competed. The card must not break. */
  marca?: Marca;
  /** Most recent first. */
  historial: string[];
  foto: Foto;
};

export type Cifra = { valor: string; etiqueta: string };

export type Sitio = {
  nombre: string;
  nombreCorto: string;
  eslogan: string;
  ciudad: string;
  direccion: string;
  telefonoWhatsapp: string;
  mensajeWhatsapp: string;
  horarioAtencion: string;
  instagram: string;
  mapaEmbed: string;
  mapaComoLlegar: string;
};

export type Precio = {
  nombre: string;
  /** Amount in Mexican pesos, without the currency sign. */
  monto: string;
  unidad: string;
  resumen: string;
  incluye: string[];
  /** Exactly one plan is the filled card. */
  destacado: boolean;
};
