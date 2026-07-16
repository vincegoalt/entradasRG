// Sesiones oficiales de Roland Garros 2027 (23 mayo – 6 junio)
// Enlaces de compra en GoalTickets con locale español (/es/).
// Sesiones diurnas y nocturnas en la Pista Philippe-Chatrier + Ground Pass diario.

const GT = 'https://goaltickets.com/es/products/'

/** URL de la sesión diurna de apertura — usada por los CTA genéricos "Comprar Entradas". */
export const OPENING_DAY_URL = GT + 'chatrier-french-open-tickets-2027-may-23-sunday-day-session'

export interface Session {
  /** Fecha ISO, p.ej. '2027-05-23' */
  date: string
  /** Día de la semana en español */
  weekday: string
  /** Etiqueta legible del día, p.ej. '23 de mayo' */
  dateLabel: string
  /** Ronda o hito destacado (cuartos, semifinales, finales…) */
  note?: string
  /** Sesión diurna en Philippe-Chatrier */
  day?: string
  /** Sesión nocturna en Philippe-Chatrier */
  night?: string
  /** Ground Pass (pase de jardines) del día */
  grounds?: string
}

export const sessions: Session[] = [
  {
    date: '2027-05-23', weekday: 'Domingo', dateLabel: '23 de mayo',
    day: GT + 'chatrier-french-open-tickets-2027-may-23-sunday-day-session',
    night: GT + 'chatrier-french-open-tickets-2027-may-23-sunday-night-session',
    grounds: GT + 'french-open-tickets-2027-may-23-sunday-day-session-grounds-pass',
  },
  {
    date: '2027-05-24', weekday: 'Lunes', dateLabel: '24 de mayo',
    day: GT + 'chatrier-french-open-tickets-2027-may-24-monday-day-session',
    night: GT + 'chatrier-french-open-tickets-2027-may-24-monday-night-session',
    grounds: GT + 'french-open-tickets-2027-may-24-monday-day-session-grounds-pass',
  },
  {
    date: '2027-05-25', weekday: 'Martes', dateLabel: '25 de mayo',
    day: GT + 'chatrier-french-open-tickets-2027-may-25-tuesday-day-session',
    night: GT + 'chatrier-french-open-tickets-2027-may-25-tuesday-night-session',
    grounds: GT + 'french-open-tickets-2027-may-25-tuesday-day-session-grounds-pass',
  },
  {
    date: '2027-05-26', weekday: 'Miércoles', dateLabel: '26 de mayo',
    day: GT + 'chatrier-french-open-tickets-2027-may-26-wednesday-day-session',
    night: GT + 'chatrier-french-open-tickets-2027-may-26-wednesday-night-session',
    grounds: GT + 'french-open-tickets-2027-may-26-wednesday-day-session-grounds-pass',
  },
  {
    date: '2027-05-27', weekday: 'Jueves', dateLabel: '27 de mayo',
    day: GT + 'chatrier-french-open-tickets-2027-may-27-thursday-day-session',
    night: GT + 'chatrier-french-open-tickets-2027-may-27-thursday-night-session',
    grounds: GT + 'french-open-tickets-2027-may-27-thursday-day-session-grounds-pass',
  },
  {
    date: '2027-05-28', weekday: 'Viernes', dateLabel: '28 de mayo',
    day: GT + 'chatrier-french-open-tickets-2027-may-28-friday-day-session',
    night: GT + 'chatrier-french-open-tickets-2027-may-28-friday-night-session',
    grounds: GT + 'french-open-tickets-2027-may-28-friday-day-session-grounds-pass',
  },
  {
    date: '2027-05-29', weekday: 'Sábado', dateLabel: '29 de mayo',
    day: GT + 'chatrier-french-open-tickets-2027-may-29-saturday-day-session',
    night: GT + 'chatrier-french-open-tickets-2027-may-29-saturday-night-session',
    grounds: GT + 'french-open-tickets-2027-may-29-saturday-day-session-grounds-pass',
  },
  {
    date: '2027-05-30', weekday: 'Domingo', dateLabel: '30 de mayo',
    day: GT + 'chatrier-french-open-tickets-2027-may-30-sunday-day-session',
    night: GT + 'chatrier-french-open-tickets-2027-may-30-sunday-night-session',
    grounds: GT + 'french-open-tickets-2027-may-30-sunday-day-session-grounds-pass',
  },
  {
    date: '2027-05-31', weekday: 'Lunes', dateLabel: '31 de mayo',
    day: GT + 'chatrier-french-open-tickets-2027-may-31-monday-day-session',
    night: GT + 'chatrier-french-open-tickets-2027-may-31-monday-night-session',
  },
  {
    date: '2027-06-01', weekday: 'Martes', dateLabel: '1 de junio', note: 'Cuartos de final',
    day: GT + 'chatrier-french-open-tickets-2027-june-1-tuesday-day-session-quarter-final',
    night: GT + 'chatrier-french-open-tickets-2027-june-1-tuesday-night-session-quarter-final',
  },
  {
    date: '2027-06-02', weekday: 'Miércoles', dateLabel: '2 de junio', note: 'Cuartos de final',
    day: GT + 'chatrier-french-open-tickets-2027-june-2-wednesday-day-session-quarter-final',
    night: GT + 'chatrier-french-open-tickets-2027-june-2-wednesday-night-session-quarter-final',
  },
  {
    date: '2027-06-03', weekday: 'Jueves', dateLabel: '3 de junio', note: 'Semifinales femeninas',
    day: GT + 'chatrier-french-open-tickets-2027-june-3-thursday-day-session-womens-semi-finals',
  },
  {
    date: '2027-06-04', weekday: 'Viernes', dateLabel: '4 de junio', note: 'Semifinales masculinas',
    day: GT + 'chatrier-french-open-tickets-2027-june-4-friday-day-session-mens-semi-final',
    night: GT + 'french-open-tickets-6-4-2027-mens-semi-final-2-friday-evening-session-philippe-chatrier',
  },
  {
    date: '2027-06-05', weekday: 'Sábado', dateLabel: '5 de junio', note: 'Final femenina',
    day: GT + 'chatrier-french-open-tickets-2027-june-5-saturday-day-session-womens-final',
  },
  {
    date: '2027-06-06', weekday: 'Domingo', dateLabel: '6 de junio', note: 'Final masculina',
    day: GT + 'chatrier-french-open-tickets-2027-june-6-sunday-day-session-mens-final',
  },
]
