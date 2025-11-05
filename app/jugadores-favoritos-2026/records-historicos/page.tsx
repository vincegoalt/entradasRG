import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Records Históricos Roland Garros: El Dominio de Nadal y Más | Guía 2026',
  description: 'Descubre los records históricos de Roland Garros, el dominio legendario de Rafael Nadal con 14 títulos, y las mayores hazañas en la tierra batida parisina.',
  keywords: 'records roland garros, nadal roland garros, historia roland garros, nadal 14 titulos, records tierra batida, estadisticas roland garros',
  openGraph: {
    title: 'Records Históricos Roland Garros: El Dominio de Nadal',
    description: 'Los números y hazañas que definen la historia de Roland Garros, incluyendo los 14 títulos de Nadal',
    type: 'article',
  },
}

export default function RecordsHistoricosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link href="/jugadores-favoritos-2026" className="text-orange-200 hover:text-white">
                ← Volver a Jugadores Favoritos
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Records Históricos de Roland Garros
            </h1>
            <p className="text-xl text-orange-100">
              El dominio de Rafael Nadal, victorias legendarias y los números que definen el Grand Slam más especial
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Roland Garros ha sido testigo de algunas de las hazañas más extraordinarias en la historia del tenis.
              Desde el dominio absoluto de Rafael Nadal hasta las victorias épicas que han definido carreras, el
              Grand Slam parisino ocupa un lugar único en el deporte mundial.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Los records establecidos en la tierra batida de París trascienden las meras estadísticas. Representan
              años de dedicación, sacrificio y excelencia deportiva en la superficie más exigente del tenis. Esta
              página explora las marcas más impresionantes y significativas en la historia del torneo.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              El Rey de la Arcilla: Rafael Nadal
            </h2>

            {/* Nadal's Dominance */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-600 rounded-lg p-8 mb-8">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-orange-600 mb-2">14</div>
                <div className="text-2xl text-gray-800 font-semibold">Títulos de Roland Garros</div>
                <div className="text-gray-600 mt-2">Rafael Nadal (2005-2022)</div>
              </div>

              <p className="text-lg text-gray-700 mb-4">
                El dominio de Rafael Nadal en Roland Garros representa posiblemente el logro más extraordinario
                en la historia del deporte individual. Ganar 14 títulos en un solo Grand Slam no tiene precedentes
                y probablemente nunca será igualado.
              </p>

              <p className="text-lg text-gray-700">
                Su record de 112 victorias y solo 3 derrotas en Roland Garros (un increíble 97.4% de efectividad)
                establece un estándar de excelencia que trasciende el tenis. Nadal no solo ganó el torneo repetidamente,
                sino que lo dominó de una manera que redefinió lo que era posible en una sola superficie.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Los Títulos de Nadal en Roland Garros
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-orange-700">Primera Era (2005-2008)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2005:</span>
                      <span>Su primer título a los 19 años, derrotando a Federer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2006:</span>
                      <span>Segundo título consecutivo, dominando a Federer nuevamente</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2007:</span>
                      <span>Tercer título sin perder un set en todo el torneo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2008:</span>
                      <span>Cuarto título, estableciendo su dominio absoluto</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 text-orange-700">Era Dorada (2010-2014)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2010:</span>
                      <span>Regreso triunfal después de la derrota de 2009</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2011:</span>
                      <span>Sexto título, igualando a Björn Borg</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2012:</span>
                      <span>Séptimo título, superando el record de Borg</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2013:</span>
                      <span>Octavo título, "La Octava" histórica</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2014:</span>
                      <span>Noveno título, "La Novena" imparable</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 text-orange-700">Era Madura (2017-2020)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2017:</span>
                      <span>La Décima, celebración histórica sin perder un set</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2018:</span>
                      <span>Undécimo título, dominancia continua</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2019:</span>
                      <span>Duodécimo título contra Thiem</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2020:</span>
                      <span>Decimotercero en condiciones extraordinarias de octubre</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 text-orange-700">El Decimocuarto (2022)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">2022:</span>
                      <span>Su título más emotivo, superando lesiones y dudas a los 36 años</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Estadísticas Asombrosas de Nadal en Roland Garros
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">112-3</div>
                  <div className="text-gray-700">Record de victorias-derrotas en Roland Garros</div>
                  <div className="text-sm text-gray-600 mt-2">97.4% de efectividad</div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">39</div>
                  <div className="text-gray-700">Sets consecutivos ganados (2017-2018)</div>
                  <div className="text-sm text-gray-600 mt-2">Record absoluto del torneo</div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                  <div className="text-gray-700">Títulos sin perder un solo set</div>
                  <div className="text-sm text-gray-600 mt-2">2008, 2010, 2017, 2020</div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
                  <div className="text-gray-700">Participaciones consecutivas</div>
                  <div className="text-sm text-gray-600 mt-2">Alcanzando al menos cuartos de final</div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-bold text-lg mb-3 text-gray-900">Las Tres Derrotas de Nadal</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">2009:</span>
                    <span>Robin Söderling en 4 sets (4ª ronda). Único jugador que lo eliminó antes de semifinales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">2015:</span>
                    <span>Novak Djokovic en cuartos de final, un Djokovic en estado de gracia absoluto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">2021:</span>
                    <span>Novak Djokovic en semifinales, en un partido épico de más de 4 horas</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 mt-12 text-gray-900">
              Records Históricos del Cuadro Masculino
            </h2>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Múltiples Campeones</h3>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <div className="font-bold text-lg text-gray-900">Rafael Nadal (España) - 14 títulos</div>
                  <p className="text-gray-600">2005, 2006, 2007, 2008, 2010, 2011, 2012, 2013, 2014, 2017, 2018, 2019, 2020, 2022</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-bold text-lg text-gray-900">Björn Borg (Suecia) - 6 títulos</div>
                  <p className="text-gray-600">1974, 1975, 1978, 1979, 1980, 1981 - Incluyendo 4 consecutivos</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <div className="font-bold text-lg text-gray-900">Novak Djokovic (Serbia) - 3 títulos</div>
                  <p className="text-gray-600">2016, 2021, 2023 - Completó el Career Grand Slam</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="font-bold text-lg text-gray-900">Roger Federer (Suiza) - 1 título</div>
                  <p className="text-gray-600">2009 - Completó su Career Grand Slam</p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <div className="font-bold text-lg text-gray-900">Ivan Lendl (Checoslovaquia) - 3 títulos</div>
                  <p className="text-gray-600">1984, 1986, 1987 - Dominó en los años 80</p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <div className="font-bold text-lg text-gray-900">Mats Wilander (Suecia) - 3 títulos</div>
                  <p className="text-gray-600">1982, 1985, 1988 - Ganó su primer título a los 17 años</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Records Notables Masculinos</h3>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">Partido Más Largo</h4>
                  <p className="text-gray-700">
                    Novak Djokovic vs. Rafael Nadal (Semifinal 2013): 4 horas y 37 minutos.
                    Considerado uno de los mejores partidos de la historia del tenis.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">Campeón Más Joven</h4>
                  <p className="text-gray-700">
                    Michael Chang (Estados Unidos) en 1989 a los 17 años y 3 meses. Récord que aún permanece.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">Campeón de Mayor Edad</h4>
                  <p className="text-gray-700">
                    Rafael Nadal en 2022 a los 36 años y 2 días, superando su propio récord anterior.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">Racha de Sets Consecutivos</h4>
                  <p className="text-gray-700">
                    Rafael Nadal: 39 sets consecutivos ganados entre 2017 y 2018. Récord absoluto del torneo.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">Títulos Consecutivos</h4>
                  <p className="text-gray-700">
                    Rafael Nadal: 5 títulos consecutivos (2010-2014). También ganó 4 consecutivos (2005-2008).
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 mt-12 text-gray-900">
              Records Históricos del Cuadro Femenino
            </h2>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Múltiples Campeonas</h3>

              <div className="space-y-4">
                <div className="border-l-4 border-pink-500 pl-4">
                  <div className="font-bold text-lg text-gray-900">Chris Evert (Estados Unidos) - 7 títulos</div>
                  <p className="text-gray-600">1974, 1975, 1979, 1980, 1983, 1985, 1986 - La reina de arcilla de su era</p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <div className="font-bold text-lg text-gray-900">Steffi Graf (Alemania) - 6 títulos</div>
                  <p className="text-gray-600">1987, 1988, 1993, 1995, 1996, 1999 - Incluyendo el Golden Slam en 1988</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="font-bold text-lg text-gray-900">Iga Swiatek (Polonia) - 4+ títulos</div>
                  <p className="text-gray-600">2020, 2022, 2023, 2024 - La nueva dominadora de la arcilla</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <div className="font-bold text-lg text-gray-900">Justine Henin (Bélgica) - 4 títulos</div>
                  <p className="text-gray-600">2003, 2005, 2006, 2007 - Dominó con su revés a una mano</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-bold text-lg text-gray-900">Monica Seles (Yugoslavia/USA) - 3 títulos</div>
                  <p className="text-gray-600">1990, 1991, 1992 - Tres consecutivos siendo adolescente</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Records Notables Femeninos</h3>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">Mayor Racha de Victorias</h4>
                  <p className="text-gray-700">
                    Chris Evert: 29 partidos consecutivos ganados en Roland Garros (1973-1981). Un récord
                    extraordinario que duró décadas hasta la era de Swiatek.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">Campeona Más Joven</h4>
                  <p className="text-gray-700">
                    Monica Seles en 1990 a los 16 años y 6 meses. Uno de los records más impresionantes del tenis
                    femenino.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">Campeona de Mayor Edad</h4>
                  <p className="text-gray-700">
                    Serena Williams en 2015 a los 33 años, demostrando su longevidad excepcional en el circuito.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">Dominio de Iga Swiatek</h4>
                  <p className="text-gray-700">
                    Swiatek ha ganado múltiples títulos sin perder un set en todo el torneo, recordando el dominio
                    de Nadal. Su efectividad en tierra batida la coloca como una de las mejores de todos los tiempos.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">Finales Legendarias</h4>
                  <p className="text-gray-700">
                    La final de 1999 entre Steffi Graf y Martina Hingis es recordada como una de las mejores de
                    la historia. Graf ganó su último Grand Slam en un partido épico.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 mt-12 text-gray-900">
              Records por País y Curiosidades
            </h2>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Dominio por Países</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-orange-700">Cuadro Masculino</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span className="font-semibold">España:</span>
                      <span>19 títulos (principalmente Nadal)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Francia:</span>
                      <span>7 títulos (varios campeones)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Suecia:</span>
                      <span>9 títulos (Borg, Wilander)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Serbia:</span>
                      <span>3 títulos (Djokovic)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Australia:</span>
                      <span>6 títulos (varios campeones)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 text-pink-700">Cuadro Femenino</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span className="font-semibold">Estados Unidos:</span>
                      <span>11 títulos (Evert, Williams, etc.)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Alemania:</span>
                      <span>9 títulos (Graf, Seles como alemana)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Polonia:</span>
                      <span>4+ títulos (Swiatek)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Francia:</span>
                      <span>5 títulos (varios campeonas)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold">Bélgica:</span>
                      <span>5 títulos (Henin, Clijsters)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Curiosidades y Datos Interesantes</h3>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">La Rivalidad Nadal-Djokovic</h4>
                  <p className="text-gray-700">
                    Se enfrentaron 10 veces en Roland Garros, más que cualquier otra rivalidad en un solo Grand Slam.
                    Nadal ganó 8 de estos encuentros, produciendo algunos de los mejores partidos de la historia.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">El "Mosquetero Ausente"</h4>
                  <p className="text-gray-700">
                    El torneo se llama Roland Garros en honor a un aviador francés de la Primera Guerra Mundial,
                    no a un tenista. El complejo se construyó específicamente para la Copa Davis de 1928.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">La Estatua de Nadal</h4>
                  <p className="text-gray-700">
                    En 2021 se inauguró una estatua de Rafael Nadal en Roland Garros, un honor sin precedentes para
                    un jugador aún activo, reconociendo su dominio incomparable en el torneo.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900">Los "Tres Mosqueteros"</h4>
                  <p className="text-gray-700">
                    En los años 20 y 30, Francia dominó el tenis mundial gracias a Jean Borotra, Jacques Brugnon,
                    Henri Cochet y René Lacoste, conocidos como "Los Cuatro Mosqueteros". Roland Garros se
                    construyó para su época dorada.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              El Legado de Roland Garros
            </h2>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-600 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-4">
                Los records de Roland Garros representan más que simples números. Son testimonios de dedicación,
                sacrificio y excelencia deportiva en la superficie más exigente del tenis. Cada estadística cuenta
                una historia de triunfo sobre la adversidad, de persistencia frente a la derrota y de grandeza
                deportiva alcanzada a través de años de esfuerzo incansable.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                El dominio de Rafael Nadal en particular ha redefinido lo que es posible en el deporte individual.
                Sus 14 títulos en un solo Grand Slam representan un nivel de maestría en una superficie que
                probablemente nunca será igualado. Pero más allá de los números, Nadal ha inspirado a generaciones
                de jugadores con su intensidad, humildad y amor por la competición.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                Los records femeninos muestran una evolución fascinante del juego. Desde el dominio de Chris Evert
                en los años 70 y 80, pasando por la era de Steffi Graf y las ganadoras de los años 90 y 2000,
                hasta el surgimiento de Iga Swiatek como la nueva dominadora, cada era ha producido campeonas
                excepcionales que han dejado su marca en la tierra batida parisina.
              </p>

              <p className="text-lg text-gray-700">
                Mirando hacia Roland Garros 2026 y más allá, estos records históricos proporcionan el contexto
                necesario para apreciar las hazañas de los competidores actuales y futuros. Cada partido jugado
                en la Philippe-Chatrier es medido contra el estándar establecido por las leyendas del pasado,
                y cada victoria contribuye a la rica historia de este torneo extraordinario.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Explora Más Sobre Roland Garros 2026</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/jugadores-favoritos-2026/favoritos-masculinos"
                className="block p-4 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors"
              >
                <h3 className="font-bold mb-2 text-gray-900">Favoritos Masculinos</h3>
                <p className="text-sm text-gray-600">Candidatos al título 2026</p>
              </Link>
              <Link
                href="/jugadores-favoritos-2026/favoritas-femeninas"
                className="block p-4 bg-pink-50 rounded-lg border-2 border-pink-200 hover:border-pink-400 transition-colors"
              >
                <h3 className="font-bold mb-2 text-gray-900">Favoritas Femeninas</h3>
                <p className="text-sm text-gray-600">Candidatas al título 2026</p>
              </Link>
              <Link
                href="/calendario-roland-garros-2026"
                className="block p-4 bg-green-50 rounded-lg border-2 border-green-200 hover:border-green-400 transition-colors"
              >
                <h3 className="font-bold mb-2 text-gray-900">Calendario 2026</h3>
                <p className="text-sm text-gray-600">Fechas y orden de juego</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Preparado para Vivir la Historia en 2026?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Planifica tu visita a Roland Garros y sé testigo de los próximos capítulos en la historia del torneo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/entradas-roland-garros-2026"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors"
            >
              Ver Información de Entradas
            </Link>
            <Link
              href="/jugadores-favoritos-2026"
              className="bg-orange-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-800 transition-colors border-2 border-white"
            >
              Volver a Jugadores Favoritos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
