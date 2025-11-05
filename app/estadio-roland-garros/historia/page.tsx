import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ArticleSchema } from '@/components/seo/ArticleSchema'

export const metadata: Metadata = {
  title: 'Historia de Roland Garros: Del Aviador Pionero al Estadio Legendario',
  description: 'Historia completa de Roland Garros desde 1928: quién fue Roland Garros, construcción del estadio, evolución del torneo, momentos históricos, leyendas del tenis y transformación hasta convertirse en el Grand Slam más prestigioso en tierra batida.',
  keywords: 'historia roland garros, roland garros aviador, estadio roland garros 1928, historia french open, origen roland garros, quien fue roland garros',
  openGraph: {
    title: 'Historia de Roland Garros: Del Aviador al Estadio Legendario',
    description: 'La fascinante historia de Roland Garros desde sus orígenes en 1928 hasta convertirse en el torneo de tenis más prestigioso en tierra batida.',
    url: 'https://entradasrolandgarros.com/estadio-roland-garros/historia',
    type: 'article',
  },
}

export default function HistoriaRolandGarrosPage() {
  return (
    <>
      <ArticleSchema
        headline="Historia de Roland Garros: Del Aviador Pionero al Estadio Legendario"
        description="La historia completa de Roland Garros, desde el aviador que le dio su nombre hasta el estadio y torneo que se convirtió en leyenda del tenis mundial"
        image="https://entradasrolandgarros.com/images/historia-roland-garros.jpg"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
        authorName="Equipo EntradasRolandGarros.com"
      />

      <Breadcrumbs
        items={[
          { name: 'Estadio Roland Garros', url: 'https://entradasrolandgarros.com/estadio-roland-garros' },
          { name: 'Historia', url: 'https://entradasrolandgarros.com/estadio-roland-garros/historia' }
        ]}
      />

      {/* Main Content */}
      <article className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d110c] mb-6">
              Historia de Roland Garros: 96 Años de Leyenda
            </h1>
            <p className="text-xl text-[#a15d45] leading-relaxed">
              Del aviador pionero de 1913 al estadio más icónico del tenis mundial
            </p>
          </div>

          {/* Timeline Quick View */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">1913</div>
              <div className="text-xs text-[#a15d45]">Hazaña de Roland Garros</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">1928</div>
              <div className="text-xs text-[#a15d45]">Inauguración Estadio</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">1968</div>
              <div className="text-xs text-[#a15d45]">Era Abierta</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">2000s</div>
              <div className="text-xs text-[#a15d45]">Expansión Moderna</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">2020</div>
              <div className="text-xs text-[#a15d45]">Techo Retráctil</div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-8 md:p-12 mb-8">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                La historia de <strong>Roland Garros</strong> es una narrativa épica que entrelaza aviación pionera, heroísmo militar, diplomacia deportiva internacional y la evolución del tenis profesional. Lo que comenzó como un homenaje a un piloto de guerra en 1928 se ha transformado en el estadio de tenis más prestigioso del mundo y el único Grand Slam que se juega en tierra batida.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Comprender la historia de Roland Garros es comprender no solo la evolución de un torneo deportivo, sino también un siglo de historia francesa, los cambios sociales en Europa, y cómo el tenis pasó de ser un pasatiempo aristocrático a un deporte global de masas. Esta es la historia completa.
              </p>
            </div>

            {/* Roland Garros - The Man */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Roland Garros: El Aviador Pionero</h2>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Eugène Adrien Roland Georges Garros</strong> (1888-1918) fue uno de los aviadores pioneros más celebrados de principios del siglo XX. Aunque su nombre ahora es sinónimo del torneo de tenis, su fama original provino de hazañas extraordinarias en los cielos que capturaron la imaginación del mundo.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Los Primeros Años (1888-1909)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Roland Garros nació el 6 de octubre de 1888 en Saint-Denis, Isla de Reunión (territorio francés en el Océano Índico). Hijo de un abogado, se mudó a París para estudiar y se graduó de la prestigiosa École des Hautes Études Commerciales (HEC París).
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Aunque estaba destinado a una carrera en negocios, Garros quedó fascinado por la aviación, entonces en su infancia. En 1909, a los 21 años, presenció una demostración de vuelo que cambió su vida para siempre.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Pionero de la Aviación (1910-1913)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    En 1910, Garros obtuvo su licencia de piloto (número 147 en Francia) y compró su primer avión. Rápidamente se convirtió en uno de los pilotos más talentosos de su generación, participando en carreras aéreas y estableciendo récords.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Logros notables antes de 1913:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Estableció récord de altitud de 3,910 metros en 1911</li>
                    <li>• Ganó la carrera París-Madrid en 1911</li>
                    <li>• Estableció récord de altitud de 5,610 metros en 1912</li>
                    <li>• Realizó exhibiciones de vuelo en Estados Unidos, México y América del Sur</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">La Hazaña Legendaria: Cruce del Mediterráneo (23 de septiembre de 1913)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    La hazaña que lo convertiría en héroe nacional ocurrió el 23 de septiembre de 1913, cuando Garros se convirtió en <strong>el primer piloto en cruzar el mar Mediterráneo en avión</strong>, volando desde Fréjus (Francia) hasta Bizerta (actualmente Túnez).
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Detalles del vuelo histórico:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm mb-3">
                    <li>• <strong>Distancia:</strong> 729 kilómetros sobre mar abierto</li>
                    <li>• <strong>Duración:</strong> 7 horas y 53 minutos</li>
                    <li>• <strong>Avión:</strong> Morane-Saulnier monoplano</li>
                    <li>• <strong>Altitud máxima:</strong> Aproximadamente 1,500 metros</li>
                    <li>• <strong>Combustible:</strong> Llevaba solo lo necesario para reducir peso</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Este vuelo fue extraordinariamente peligroso para la época. No había radio, paracaídas, o cualquier sistema de navegación más allá de una brújula básica. Si el motor fallaba sobre el agua, la muerte era casi segura. El éxito de Garros demostró que la aviación podía conquistar vastas distancias y abrió la era de los vuelos intercontinentales.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Primera Guerra Mundial y Héroe de Guerra (1914-1918)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Cuando estalló la Primera Guerra Mundial en 1914, Garros se unió inmediatamente a la aviación militar francesa. Se convirtió en pionero del combate aéreo, desarrollando innovaciones cruciales.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Innovación revolucionaria:</strong> Garros y el ingeniero Raymond Saulnier desarrollaron el primer sistema práctico para disparar una ametralladora a través de la hélice de un avión. Instalaron placas deflectoras de acero en las palas de la hélice para desviar las balas que impactaran las palas. Esta innovación transformó el combate aéreo.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Usando esta tecnología, Garros derribó tres aviones alemanes en abril de 1915, convirtiéndose en uno de los primeros "ases" de la aviación de combate.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Captura, Fuga y Muerte (1915-1918)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    El 18 de abril de 1915, el avión de Garros fue dañado por fuego desde tierra sobre Bélgica. Se vio obligado a aterrizar en territorio enemigo y fue capturado antes de poder destruir su avión. Los alemanes descubrieron su sistema de ametralladora, y el ingeniero holandés Anthony Fokker (trabajando para Alemania) mejoró el diseño, creando el sincronizador de hélice que dominó los cielos durante los siguientes años.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Garros pasó casi tres años como prisionero de guerra, realizando múltiples intentos de fuga. Finalmente escapó en febrero de 1918 y regresó a Francia, donde fue recibido como héroe.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    A pesar de las recomendaciones de retirarse del combate activo, Garros insistió en volver a volar. El <strong>5 de octubre de 1918</strong>, solo un día antes de cumplir 30 años y un mes antes del fin de la guerra, fue derribado sobre las Ardenas y murió en combate.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Roland Garros falleció como héroe de guerra, pionero de la aviación, y símbolo del coraje francés. Diez años después, su nombre sería inmortalizado en el estadio de tenis más prestigioso del mundo.
                  </p>
                </div>
              </div>
            </section>

            {/* Origins of the Stadium */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Los Orígenes del Estadio (1920s)</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La construcción del estadio Roland Garros no fue planificada inicialmente como sede permanente del torneo de tenis francés, sino como respuesta urgente a una necesidad diplomática y deportiva específica: defender la Copa Davis en suelo francés.
              </p>

              <div className="space-y-6">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Los Mosqueteros y la Copa Davis (1927)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    En 1927, el equipo francés de Copa Davis, conocido como "Los Cuatro Mosqueteros" (René Lacoste, Jean Borotra, Henri Cochet y Jacques Brugnon), arrebató el trofeo a Estados Unidos por primera vez en la historia francesa.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Los Mosqueteros eran superestrellas en Francia. Su victoria creó un problema: bajo las reglas de la Copa Davis, el país campeón debe defender el título en casa el año siguiente. Pero Francia no tenía un estadio lo suficientemente grande para albergar el evento.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    El estadio existente, en el <strong>Racing Club de France</strong> en el bosque de Bolonia, era demasiado pequeño para las multitudes esperadas. La Federación Francesa de Tenis necesitaba un nuevo estadio, y lo necesitaba rápidamente.
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">La Construcción Acelerada (1927-1928)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    El proyecto fue extraordinariamente ambicioso: construir un estadio de tenis de clase mundial en menos de un año. El sitio elegido fue un terreno de 3 hectáreas en el distrito 16 de París, cerca del Jardín Botánico de las Serres d'Auteuil.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Detalles de la construcción:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm mb-3">
                    <li>• <strong>Inicio de obras:</strong> Noviembre de 1927</li>
                    <li>• <strong>Finalización:</strong> Mayo de 1928 (solo 6 meses)</li>
                    <li>• <strong>Costo:</strong> Aproximadamente 15 millones de francos (una fortuna en la época)</li>
                    <li>• <strong>Pista central:</strong> 10,000 asientos inicialmente</li>
                    <li>• <strong>Pistas adicionales:</strong> 12 pistas secundarias</li>
                    <li>• <strong>Arquitectos:</strong> Louis Faure-Dujarric</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    La velocidad de construcción fue asombrosa para la época, requiriendo trabajar día y noche para cumplir con la fecha límite.
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">¿Por Qué "Roland Garros"?</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    La decisión de nombrar el estadio en honor a Roland Garros fue propuesta por Émile Lesieur, entonces presidente del Stade Français, y aprobada por la Federación Francesa de Tenis.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Las razones eran múltiples:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm mb-3">
                    <li>• Garros había sido miembro del Stade Français, el club deportivo que donó el terreno</li>
                    <li>• Era un héroe de guerra reciente (había fallecido solo 10 años antes)</li>
                    <li>• Simbolizaba el coraje, la innovación y el espíritu francés</li>
                    <li>• Su fama internacional ayudaría a promocionar el nuevo estadio</li>
                    <li>• Honrar a un aviador conectaba el tenis con el progreso tecnológico francés</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Curiosamente, Roland Garros nunca jugó tenis competitivamente a nivel serio. La conexión entre el aviador y el deporte fue puramente honorífica, un homenaje a un héroe nacional que transcendió su campo original.
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Inauguración: 18 de Mayo de 1928</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    El estadio se inauguró oficialmente el 18 de mayo de 1928 con el partido de Copa Davis entre Francia y Estados Unidos. Fue un evento de importancia nacional, con miles de espectadores llenando el nuevo estadio.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Resultado histórico:</strong> Francia venció a Estados Unidos 4-1, defendiendo exitosamente la Copa Davis en su nuevo hogar. Los Mosqueteros cumplieron su promesa, y el Stade Roland Garros se convirtió instantáneamente en un símbolo del tenis francés.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    El torneo de tenis de Francia (Championships de France) se trasladó al nuevo estadio ese mismo año, comenzando una tradición que continúa casi un siglo después.
                  </p>
                </div>
              </div>
            </section>

            {/* Evolution of the Tournament */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Evolución del Torneo (1928-1968)</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Durante sus primeras cuatro décadas, el torneo de Roland Garros pasó de ser un evento principalmente europeo a establecerse como uno de los campeonatos más prestigiosos del mundo.
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">La Era Amateur (1928-1967)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Hasta 1968, Roland Garros fue exclusivamente un torneo amateur. Los jugadores no podían recibir premios en efectivo, solo trofeos y prestigio. Esto limitó la participación de muchos de los mejores jugadores, que se volvieron profesionales para poder ganarse la vida.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    A pesar de esta limitación, el torneo atrajo a las estrellas más grandes del tenis amateur:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Henri Cochet (Francia):</strong> 4 títulos (1926, 1928, 1930, 1932)</li>
                    <li>• <strong>Björn Borg (Suecia):</strong> Aunque su era dorada vino después, comenzó su dominio en 1974</li>
                    <li>• <strong>Suzanne Lenglen (Francia):</strong> 6 títulos femeninos (1920-1926)</li>
                    <li>• <strong>Margaret Court (Australia):</strong> 5 títulos (1962, 1964, 1969, 1970, 1973)</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Interrupciones por la Guerra (1940-1945)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    La Segunda Guerra Mundial suspendió el torneo de 1940 a 1945. Durante la ocupación alemana de París, el estadio Roland Garros fue utilizado ocasionalmente para eventos deportivos menores, pero el torneo internacional no se celebró.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    El torneo se reanudó en 1946 con gran entusiasmo, simbolizando el regreso de Francia a la normalidad después de años de guerra. Marcel Bernard ganó el título masculino en ese torneo de renacimiento.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Crecimiento de Posguerra (1946-1967)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Las décadas posteriores a la guerra vieron un crecimiento constante en la importancia del torneo:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm mb-3">
                    <li>• Aumento de participación internacional</li>
                    <li>• Cobertura de televisión incipiente en los años 50</li>
                    <li>• Mejoras en las instalaciones del estadio</li>
                    <li>• Mayor asistencia de público cada año</li>
                    <li>• Establecimiento como el campeonato en tierra batida más prestigioso</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Figuras legendarias como Jaroslav Drobný, Tony Trabert, Nicola Pietrangeli y Roy Emerson dominaron esta era, consolidando la reputación del torneo.
                  </p>
                </div>
              </div>
            </section>

            {/* The Open Era */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">La Era Abierta: Transformación Total (1968-Presente)</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El año 1968 marcó el cambio más significativo en la historia del tenis y de Roland Garros: el inicio de la <strong>Era Abierta</strong>, cuando profesionales y amateurs pudieron competir juntos por primera vez.
              </p>

              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">1968: El Primer Torneo Abierto</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Roland Garros fue el primer Grand Slam en adoptar el formato abierto en 1968. Esta decisión revolucionaria permitió que los mejores jugadores del mundo, sin importar su estatus profesional o amateur, compitieran por el título.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Campeones del primer torneo abierto:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Masculino:</strong> Ken Rosewall (Australia) - un profesional que finalmente pudo competir en Grand Slams</li>
                    <li>• <strong>Femenino:</strong> Nancy Richey (Estados Unidos)</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    El torneo de 1968 fue histórico no solo por ser abierto, sino porque demostró que el formato profesional podría elevar significativamente el nivel y el atractivo del tenis.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">La Era de Björn Borg (1974-1981)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Ningún jugador ha definido Roland Garros como Björn Borg. El sueco ganó <strong>6 títulos consecutivos</strong> de 1974 a 1981 (con un paréntesis en 1976 cuando perdió), un récord que se mantuvo hasta la llegada de Rafael Nadal.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Borg transformó el juego en tierra batida con su estilo único:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm mb-3">
                    <li>• Topspin pesado desde el fondo de la pista</li>
                    <li>• Resistencia física excepcional</li>
                    <li>• Mentalidad de hielo bajo presión</li>
                    <li>• Dominación casi completa en tierra batida</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Su rivalidad con John McEnroe, aunque más famosa en Wimbledon, también produjo momentos memorables en París. Borg se retiró prematuramente a los 26 años, dejando a muchos preguntándose cuántos títulos más podría haber ganado.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Reinas de la Tierra Batida Femenina</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    El tenis femenino en Roland Garros ha producido algunas de las jugadoras más dominantes de la historia:
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Chris Evert (7 títulos: 1974, 1975, 1979, 1980, 1983, 1985, 1986)</h4>
                      <p className="text-gray-700 text-sm">
                        Dominó la tierra batida durante más de una década con su juego de fondo de pista implacable. Su récord de 72 victorias consecutivas en tierra batida puede nunca ser superado.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Steffi Graf (6 títulos: 1987, 1988, 1993, 1995, 1996, 1999)</h4>
                      <p className="text-gray-700 text-sm">
                        Revolucionó el tenis femenino con su derecha devastadora y atletismo superior. En 1988, completó el Golden Slam (todos los Grand Slams + oro olímpico en un año).
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Justine Henin (4 títulos: 2003, 2005, 2006, 2007)</h4>
                      <p className="text-gray-700 text-sm">
                        A pesar de su estatura relativamente pequeña (1.67m), dominó con el revés a una mano más hermoso del tenis moderno y mentalidad competitiva feroz.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">La Era de Rafael Nadal (2005-2024)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Si Borg definió Roland Garros en los 70, <strong>Rafael Nadal</strong> ha redefinido completamente lo que es posible en tierra batida. Con <strong>14 títulos</strong> de Roland Garros (2005-2008, 2010-2014, 2017-2020, 2022), Nadal ha establecido un récord que probablemente nunca será igualado.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Estadísticas asombrosas de Nadal en Roland Garros:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm mb-3">
                    <li>• Récord: 112 victorias, solo 3 derrotas (hasta 2024)</li>
                    <li>• 97.4% de efectividad - el mejor récord de cualquier jugador en un solo torneo de Grand Slam</li>
                    <li>• Ganó 5 títulos consecutivos en dos ocasiones (2005-08, 2010-14)</li>
                    <li>• Nunca perdió una final de Roland Garros (14-0)</li>
                    <li>• Solo perdió 3 partidos: contra Söderling (2009), Djokovic (2015, 2021)</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Nadal ha convertido Roland Garros en su dominio personal. Su combinación de topspin devastador, resistencia sobrehumana, y mentalidad competitiva inquebrantable en tierra batida lo ha hecho prácticamente invencible en París. Los franceses lo han adoptado como uno de los suyos, gritando "Rafa! Rafa!" en cada partido.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">La Era de las Tres Grandes (2000s-2020s)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Roger Federer, Rafael Nadal y Novak Djokovic han dominado Roland Garros en el siglo XXI:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm mb-3">
                    <li>• <strong>Rafael Nadal:</strong> 14 títulos (el más grande especialista en tierra batida de la historia)</li>
                    <li>• <strong>Novak Djokovic:</strong> 3 títulos (2016, 2021, 2023) - completó el Career Grand Slam en 2016</li>
                    <li>• <strong>Roger Federer:</strong> 1 título (2009) - su único Roland Garros, completando su Career Grand Slam</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Entre los tres, han ganado todos los títulos de Roland Garros desde 2005 hasta 2024, excepto uno (Stan Wawrinka en 2015). Esta dominación es sin precedentes en la historia del tenis.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Nueva Era Femenina: Iga Świątek</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Iga Świątek</strong> (Polonia) ha emergido como la jugadora dominante de su generación en tierra batida:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm mb-3">
                    <li>• <strong>4 títulos:</strong> 2020, 2022, 2023, 2024</li>
                    <li>• Ganó su primer título a los 19 años sin perder un set</li>
                    <li>• Dominio abrumador con juego agresivo moderno</li>
                    <li>• Considerada la heredera de la tradición de dominación femenina en tierra batida</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    A los 23 años, Świątek ya ha establecido un dominio que recuerda a Graf y Evert en sus mejores momentos. Su combinación de potencia, movimiento y mentalidad competitiva sugiere que podría ser la jugadora definitoria de la próxima década en París.
                  </p>
                </div>
              </div>
            </section>

            {/* Stadium Evolution */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Evolución Física del Estadio</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El complejo de Roland Garros ha experimentado transformaciones continuas para mantenerse como instalación deportiva de clase mundial.
              </p>

              <div className="space-y-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Expansiones Mayores</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">1980: Construcción de Court 1 (Ahora Suzanne-Lenglen)</h4>
                      <p className="text-gray-700 text-sm">
                        Añadió capacidad significativa y permitió más partidos simultáneos de alto nivel.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">1994: Nueva Pista Suzanne-Lenglen</h4>
                      <p className="text-gray-700 text-sm">
                        Reemplazó la pista anterior con un diseño moderno de 10,000+ asientos. Arquitectura revolucionaria para la época con gradas empinadas y visibilidad excepcional.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">2001: Renovación de Philippe-Chatrier</h4>
                      <p className="text-gray-700 text-sm">
                        Modernización completa de la pista central, aumentando capacidad a 15,000+ espectadores.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">2019: Inauguración Simonne-Mathieu</h4>
                      <p className="text-gray-700 text-sm">
                        La adición más espectacular: pista de 5,000 asientos integrada con invernaderos históricos del siglo XIX. Ganó múltiples premios de arquitectura internacional.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">2020: Techo Retráctil Philippe-Chatrier</h4>
                      <p className="text-gray-700 text-sm">
                        Inversión de 50+ millones de euros en techo retráctil de última generación. Transformó Roland Garros, garantizando juego continuo sin importar el clima. El techo puede cerrarse en 15 minutos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Modernización de Instalaciones</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Sistema de iluminación LED de última generación en todas las pistas principales</li>
                    <li>• Hawk-Eye y revisión electrónica de línea implementado en 2007</li>
                    <li>• Mejoras continuas en instalaciones para jugadores (gimnasios, fisioterapia, áreas de descanso)</li>
                    <li>• Expansión de zonas de prensa y medios para cobertura global</li>
                    <li>• Instalaciones VIP y palcos de lujo mejorados regularmente</li>
                    <li>• WiFi de alta velocidad en todo el complejo</li>
                    <li>• Sistemas de recolección de agua de lluvia y sostenibilidad ambiental</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cultural Impact */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Impacto Cultural y Social</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Roland Garros ha trascendido el tenis para convertirse en un fenómeno cultural francés y un evento social de importancia internacional.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Moda y Estilo</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Roland Garros es tanto un desfile de moda como un torneo de tenis. Las tribunas están llenas de celebrities, y lo que visten los jugadores y espectadores es tan comentado como los partidos.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Diseñadores como Ralph Lauren, Lacoste (fundada por René Lacoste, uno de los Mosqueteros), y Nike han hecho de Roland Garros una pasarela para colecciones exclusivas de tenis.
                  </p>
                </div>

                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Gastronomía</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Roland Garros eleva la experiencia culinaria en eventos deportivos. El complejo cuenta con:
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Restaurantes de chefs con estrella Michelin</li>
                    <li>• Champán y vino francés de alta gama</li>
                    <li>• Macarons exclusivos de Roland Garros</li>
                    <li>• Más de 40 puntos de comida y bebida</li>
                  </ul>
                </div>

                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Arte y Cultura</h3>
                  <p className="text-gray-700 text-sm">
                    El torneo incorpora arte y exposiciones. El Tenniseum (museo del tenis) es uno de los museos deportivos más completos del mundo. Exposiciones temporales de arte contemporáneo y fotografía se exhiben durante el torneo.
                  </p>
                </div>

                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Impacto Económico</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Roland Garros genera cientos de millones de euros para la economía parisina:
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Más de 500,000 espectadores durante 2 semanas</li>
                    <li>• Llena hoteles en París y alrededores</li>
                    <li>• Emplea miles de personas temporales</li>
                    <li>• Promoción global de París como destino turístico</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Future */}
            <section className="mb-12 bg-white rounded-xl shadow-sm border border-[#ead5cd] p-8">
              <h2 className="text-3xl font-bold text-[#1d110c] mb-6">El Futuro de Roland Garros</h2>

              <p className="text-lg mb-6 text-[#a15d45]">
                El estadio y torneo continúan evolucionando. Los planes futuros incluyen:
              </p>

              <ul className="space-y-3 text-[#1d110c] mb-6">
                <li>• Posible techo retráctil para la pista Suzanne-Lenglen</li>
                <li>• Mejoras continuas en sostenibilidad ambiental</li>
                <li>• Expansión de instalaciones para espectadores</li>
                <li>• Integración de realidad aumentada y tecnologías interactivas</li>
                <li>• Mayor accesibilidad y comodidad para todos los visitantes</li>
                <li>• Preservación del equilibrio entre modernidad y tradición</li>
              </ul>

              <p className="text-[#1d110c]">
                A medida que Roland Garros se acerca a su centenario en 2028, el desafío es mantener su carácter único mientras se moderniza para las demandas del siglo XXI. La historia sugiere que Roland Garros continuará adaptándose sin perder su alma.
              </p>
            </section>

            {/* Related Links */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Descubre Más sobre Roland Garros</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/estadio-roland-garros/pista-philippe-chatrier"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Pista Philippe-Chatrier</h3>
                  <p className="text-gray-600 text-sm">La pista central donde se escribe la historia moderna</p>
                </Link>

                <Link
                  href="/estadio-roland-garros/mapa-instalaciones"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Instalaciones Actuales</h3>
                  <p className="text-gray-600 text-sm">Guía completa del complejo moderno de Roland Garros</p>
                </Link>

                <Link
                  href="/estadio-roland-garros"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all md:col-span-2"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Volver al Estadio Roland Garros</h3>
                  <p className="text-gray-600 text-sm">Visión general de todas las pistas e instalaciones</p>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>
    </>
  )
}
