import { sessions } from '@/data/sessions'

type Col = 'day' | 'night' | 'grounds'

interface SessionsTableProps {
  /** Columnas de sesión a mostrar (por defecto todas) */
  columns?: Col[]
  title?: string
  subtitle?: string
  /** Mostrar solo los días que tienen alguna de las columnas seleccionadas */
  onlyWithColumns?: boolean
}

const COL_LABELS: Record<Col, string> = {
  day: 'Sesión diurna',
  night: 'Sesión nocturna',
  grounds: 'Ground Pass',
}

export function SessionsTable({
  columns = ['day', 'night', 'grounds'],
  title = 'Entradas por sesión — Roland Garros 2027',
  subtitle = 'Enlaces oficiales a cada sesión en GoalTickets. Entradas verificadas con transferencia por app.',
  onlyWithColumns = false,
}: SessionsTableProps) {
  const rows = onlyWithColumns
    ? sessions.filter((s) => columns.some((c) => s[c]))
    : sessions

  return (
    <div>
      {title && <h2 className="text-3xl font-bold mb-2 text-gray-900">{title}</h2>}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left border-collapse min-w-[520px]">
          <thead>
            <tr className="bg-gray-50 text-gray-700 text-sm">
              <th className="px-4 py-3 font-semibold">Fecha</th>
              {columns.map((c) => (
                <th key={c} className="px-4 py-3 font-semibold text-center whitespace-nowrap">
                  {COL_LABELS[c]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.date} className="border-t border-gray-100 hover:bg-gray-50/60">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="font-semibold text-gray-900">
                    {s.weekday} {s.dateLabel}
                  </div>
                  {s.note && <div className="text-xs text-primary font-medium">{s.note}</div>}
                </td>
                {columns.map((c) => {
                  const url = s[c]
                  return (
                    <td key={c} className="px-4 py-3 text-center">
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-1 bg-primary/10 text-primary hover:bg-primary hover:text-white font-semibold text-sm px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                            confirmation_number
                          </span>
                          Ver
                        </a>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        Precios y disponibilidad sujetos a cambios. Enlaces de afiliado a GoalTickets.
      </p>
    </div>
  )
}
