import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SportsEventSchema } from '@/components/seo/SportsEventSchema'

export const metadata: Metadata = {
  title: 'Pista Simonne-Mathieu: La Joya Arquitectónica de Roland Garros',
  description: 'Descubre la pista Simonne-Mathieu: diseño único rodeado de invernaderos históricos del siglo XIX, capacidad de 5,000 espectadores, arquitectura premiada e integración con el Jardín Botánico de Auteuil.',
  keywords: 'simonne mathieu, pista simonne mathieu, invernaderos roland garros, court 3 roland garros, arquitectura roland garros',
  openGraph: {
    title: 'Pista Simonne-Mathieu: La Joya Arquitectónica de Roland Garros',
    description: 'La pista más innovadora de Roland Garros con su diseño único integrado en invernaderos históricos.',
    url: 'https://entradasrolandgarros.com/estadio-roland-garros/pista-simonne-mathieu',
    type: 'article',
  },
}

export default function SimonneMathieuPage() {
  return (
    <>
      <SportsEventSchema
        name="Pista Simonne-Mathieu - Roland Garros 2026"
        startDate="2026-05-24"
        endDate="2026-06-07"
        description="La tercera pista principal de Roland Garros con diseño arquitectónico único rodeada de invernaderos históricos, capacidad para 5,000 espectadores"
      />

      <Breadcrumbs
        items={[
          { name: 'Estadio Roland Garros', url: 'https://entradasrolandgarros.com/estadio-roland-garros' },
          { name: 'Pista Simonne-Mathieu', url: 'https://entradasrolandgarros.com/estadio-roland-garros/pista-simonne-mathieu' }
        ]}
      />

      {/* Main Content */}
      <article className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d110c] mb-6">
              Court Simonne-Mathieu: Donde la Naturaleza Encuentra el Deporte
            </h1>
            <p className="text-xl text-[#a15d45] leading-relaxed">
              La pista más innovadora de Roland Garros rodeada de invernaderos históricos del siglo XIX
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">5,000</div>
              <div className="text-sm text-[#a15d45]">Espectadores</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">2019</div>
              <div className="text-sm text-[#a15d45]">Inauguración</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">4</div>
              <div className="text-sm text-[#a15d45]">Invernaderos</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">1,000+</div>
              <div className="text-sm text-[#a15d45]">Especies Plantas</div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-8 md:p-12 mb-8">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                La <strong>pista Simonne-Mathieu</strong> es la joya arquitectónica más reciente de Roland Garros y quizás la pista de tenis más única del mundo. Inaugurada en 2019, esta instalación con capacidad para <strong>5,000 espectadores</strong> representa la perfecta fusión entre innovación deportiva y respeto al patrimonio histórico, integrándose armoniosamente con los invernaderos del siglo XIX del Jardín de las Serres d'Auteuil.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Diseñada por el arquitecto francés Marc Mimram, la pista está parcialmente hundida en el terreno y rodeada por cuatro magníficos invernaderos de vidrio que albergan más de 1,000 especies de plantas tropicales y subtropicales. Este diseño innovador ganó numerosos premios de arquitectura y se convirtió instantáneamente en uno de los escenarios más fotografiados del circuito de tenis profesional.
              </p>
            </div>

            {/* Simonne Mathieu - The Person */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Simonne Mathieu: Pionera y Heroína</h2>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Simonne Mathieu (1908-1980) fue mucho más que una destacada tenista francesa. Fue una pionera del tenis femenino y una heroína de la Resistencia francesa durante la Segunda Guerra Mundial, combinando excelencia deportiva con valor personal extraordinario.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-900">Carrera Tenística</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>2 títulos de Roland Garros</strong> en individuales (1938, 1939)</li>
                      <li>• <strong>13 títulos de Grand Slam</strong> en total (individuales, dobles y mixtos)</li>
                      <li>• 6 títulos de dobles femeninos en Roland Garros</li>
                      <li>• 4 títulos de dobles mixtos en Roland Garros</li>
                      <li>• Jugó en el equipo francés de Copa Federación</li>
                      <li>• Conocida por su juego agresivo y técnicamente sólido</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-900">Heroísmo en la Guerra</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Se unió a las <strong>Fuerzas Francesas Libres</strong> en 1940</li>
                      <li>• Sirvió como comandante en el Cuerpo de Mujeres Voluntarias</li>
                      <li>• Condecorada con la Legión de Honor</li>
                      <li>• Recibió la Croix de Guerre por su valentía</li>
                      <li>• Trabajó en inteligencia militar durante la guerra</li>
                      <li>• Una de las pocas deportistas en servir activamente en WWII</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Un Honor Merecido</h3>
                <p className="text-gray-700 text-sm">
                  La decisión de nombrar esta pista en honor a Simonne Mathieu fue particularmente apropiada. No solo fue una gran tenista, sino también una mujer de extraordinario valor y patriotismo. La pista, con su fusión de naturaleza e innovación, refleja su personalidad multifacética: atleta de élite, soldado valiente, y mujer adelantada a su tiempo. Fue incluida en el Salón Internacional de la Fama del Tenis en 2006.
                </p>
              </div>
            </section>

            {/* Architectural Marvel */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Una Maravilla Arquitectónica</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El diseño de la pista Simonne-Mathieu es único en el mundo del tenis. El arquitecto Marc Mimram enfrentó el desafío de crear una pista moderna en un espacio protegido históricamente, y su solución fue brillante: integrar en lugar de reemplazar.
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">El Concepto: Pista Semienterrada</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    La pista está construida 6 metros por debajo del nivel del suelo circundante, una decisión que cumplió múltiples propósitos:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Minimizar el impacto visual:</strong> La estructura no domina el paisaje histórico del jardín</li>
                    <li>• <strong>Integración natural:</strong> Los invernaderos centenarios rodean la pista al nivel de los ojos desde el interior</li>
                    <li>• <strong>Protección del viento:</strong> La posición hundida reduce significativamente el efecto del viento en el juego</li>
                    <li>• <strong>Acústica mejorada:</strong> Las paredes naturales del terreno ayudan a contener y amplificar el sonido</li>
                    <li>• <strong>Temperatura más estable:</strong> La tierra circundante actúa como aislante térmico natural</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Los Cuatro Invernaderos Históricos</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Los cuatro invernaderos de vidrio y hierro forjado datan del siglo XIX y son estructuras protegidas como monumentos históricos. El proyecto de la pista incluyó su restauración completa:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Estructura original preservada:</strong> Hierro forjado del siglo XIX restaurado meticulosamente</li>
                    <li>• <strong>Vidrio histórico reemplazado:</strong> Paneles modernos que replican el aspecto original pero con mejor aislamiento</li>
                    <li>• <strong>Jardines tropicales:</strong> Más de 1,000 especies de plantas raras y exóticas</li>
                    <li>• <strong>Visitas públicas:</strong> Los invernaderos están abiertos al público durante el año</li>
                    <li>• <strong>Función dual:</strong> Sirven como jardín botánico y como marco arquitectónico de la pista</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Diseño de las Gradas</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Las gradas están construidas con una estética minimalista que no compite visualmente con los invernaderos:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Material:</strong> Hormigón pigmentado en tonos tierra que se mimetiza con el entorno</li>
                    <li>• <strong>Disposición:</strong> Tres lados de la pista con el cuarto lado abierto al jardín</li>
                    <li>• <strong>Capacidad:</strong> 5,000 asientos distribuidos en gradas empinadas</li>
                    <li>• <strong>Visibilidad:</strong> Todos los asientos tienen vista directa tanto de la pista como de los invernaderos</li>
                    <li>• <strong>Accesibilidad:</strong> Múltiples niveles de acceso integrados en el terreno natural</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Sostenibilidad y Ecología</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    El proyecto ganó premios no solo por su belleza, sino también por su enfoque ecológico:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Iluminación LED:</strong> 100% iluminación de bajo consumo</li>
                    <li>• <strong>Recolección de agua de lluvia:</strong> Sistema para riego de la pista y los jardines</li>
                    <li>• <strong>Materiales sostenibles:</strong> Hormigón con bajo contenido de carbono</li>
                    <li>• <strong>Biodiversidad:</strong> Los jardines atraen polinizadores y aves locales</li>
                    <li>• <strong>Integración paisajística:</strong> Mínima perturbación del ecosistema existente</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Awards and Recognition */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Premios y Reconocimientos</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El diseño innovador de la pista Simonne-Mathieu ha sido ampliamente reconocido por la comunidad arquitectónica internacional y del deporte.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Premios de Arquitectura</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Prix de l'Équerre d'Argent 2020</strong> - El premio de arquitectura más prestigioso de Francia</li>
                    <li>• <strong>International Architecture Award 2020</strong></li>
                    <li>• <strong>World Architecture News Awards 2020</strong> - Mejor proyecto deportivo</li>
                    <li>• <strong>Archdaily Building of the Year 2020</strong> - Categoría deportiva</li>
                    <li>• Múltiples menciones en publicaciones arquitectónicas internacionales</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Reconocimiento del Deporte</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Destacada por la ATP y WTA como "instalación más innovadora"</li>
                    <li>• Elegida entre las pistas más bellas del mundo por Tennis Magazine</li>
                    <li>• Reconocida por la ITF (Federación Internacional de Tenis)</li>
                    <li>• Modelo para futuras instalaciones deportivas sostenibles</li>
                    <li>• Estudio de caso en programas de arquitectura deportiva</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Impacto en la Arquitectura Deportiva</h3>
                <p className="text-gray-700 text-sm">
                  La pista Simonne-Mathieu ha establecido un nuevo estándar para la integración de instalaciones deportivas modernas en contextos históricos y naturales. El proyecto demuestra que es posible construir infraestructura deportiva de clase mundial sin comprometer el patrimonio cultural o el medio ambiente. Arquitectos y planificadores urbanos de todo el mundo estudian este proyecto como ejemplo de diseño sensible y sostenible.
                </p>
              </div>
            </section>

            {/* The Experience */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">La Experiencia Única del Espectador</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ver un partido en la Simonne-Mathieu es una experiencia radicalmente diferente a cualquier otra pista en Roland Garros o en el circuito mundial. La combinación de tenis de élite con el entorno botánico único crea una atmósfera inolvidable.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Atmósfera Visual</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Desde cualquier asiento, tu campo visual incluye no solo la pista de tenis sino también los magníficos invernaderos victorianos llenos de vegetación exuberante. La experiencia es casi surrealista: tenis profesional de élite en un jardín botánico del siglo XIX.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Durante los descansos, puedes observar las plantas tropicales a través del vidrio de los invernaderos. En días soleados, el juego de luz a través del vidrio y las hojas crea efectos visuales espectaculares.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Condiciones de Juego</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    La posición hundida de la pista crea condiciones de juego únicas. El viento es significativamente menor que en las pistas elevadas, lo que permite un tenis más puro y predecible.
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    Los jugadores a menudo comentan sobre la atmósfera especial y la temperatura ligeramente más fresca debido a la sombra parcial de los invernaderos y árboles circundantes.
                  </p>
                  <p className="text-gray-700 text-sm">
                    La acústica es excepcional - el sonido de la pelota golpeando la arcilla se amplifica naturalmente, creando una conexión más visceral con el juego.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Ambiente y Público</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Con solo 5,000 asientos, la Simonne-Mathieu ofrece una experiencia más íntima que las pistas más grandes. El público tiende a ser particularmente conocedor y apreciativo tanto del tenis como de la arquitectura.
                  </p>
                  <p className="text-gray-700 text-sm">
                    La pista atrae a fotógrafos y entusiastas del diseño tanto como a fanáticos del tenis. No es raro ver a espectadores fotografiando los invernaderos tanto como el juego en sí.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Programación Típica</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Durante la primera semana, la pista alberga partidos de primeras y segundas rondas, frecuentemente con jugadores sembrados. Es común ver encuentros competitivos y de alta calidad.
                  </p>
                  <p className="text-gray-700 text-sm">
                    En la segunda semana, se utiliza principalmente para partidos de dobles en rondas avanzadas y ocasionalmente para partidos de cuartos de final de individuales, especialmente cuando la programación en las pistas más grandes está saturada.
                  </p>
                </div>
              </div>
            </section>

            {/* Seating Guide */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Guía de Asientos</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Con 5,000 asientos, la Simonne-Mathieu es más pequeña que las dos pistas principales, pero cada ubicación ofrece una perspectiva única de este espacio extraordinario.
              </p>

              <div className="space-y-6">
                <div className="bg-white border-2 border-green-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Mejores Ubicaciones</h3>

                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Lado de los Invernaderos (Recomendado)</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Características:</strong> Vista directa de los invernaderos históricos detrás de la línea de fondo, mejor para fotografía, experiencia visual más completa.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Mejor momento:</strong> Sesiones de tarde cuando el sol ilumina los invernaderos desde atrás, creando un efecto de contraluz espectacular.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Precio:</strong> Generalmente igual que otras secciones, pero se agotan más rápido debido a la demanda de fotógrafos y entusiastas de la arquitectura.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Asientos Centrales Laterales</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Características:</strong> Perspectiva equilibrada del juego, vista de los invernaderos en ambos extremos de la pista, menos afectados por el sol.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Ventajas:</strong> Excelente para seguir el juego de lado a lado, buena para apreciar ángulos y tácticas.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Filas recomendadas:</strong> 10-20 para el balance perfecto entre cercanía y perspectiva panorámica.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Asientos Elevados</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Características:</strong> Vista tipo "halcón" de toda la pista y los jardines circundantes, perspectiva única del diseño arquitectónico.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Ventajas:</strong> Puedes apreciar completamente cómo la pista se integra en el jardín, bueno para entender patrones de juego.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Precio:</strong> Más económicos, excelente relación calidad-precio para esta pista única.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Consejo de Fotografía</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Si tu objetivo principal es fotografiar esta pista icónica, los mejores asientos son en las secciones medias del lado que mira hacia los invernaderos principales. La "hora dorada" (1-2 horas antes del atardecer) produce las fotografías más espectaculares cuando el sol ilumina los invernaderos de vidrio.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Trae un lente zoom (70-200mm es ideal) para capturar tanto detalles de la acción como tomas panorámicas del entorno. Las cámaras sin flash están permitidas durante todo el partido.
                  </p>
                </div>
              </div>
            </section>

            {/* The Greenhouse Gardens */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Los Jardines de los Invernaderos</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Los cuatro invernaderos no son solo decorativos - son jardines botánicos funcionales que albergan colecciones importantes de plantas raras y tropicales.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Flora y Colecciones</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Más de 1,000 especies de plantas tropicales y subtropicales</li>
                    <li>• Colección de orquídeas raras</li>
                    <li>• Plantas carnívoras exóticas</li>
                    <li>• Helechos prehistóricos</li>
                    <li>• Palmeras y plantas de climas cálidos</li>
                    <li>• Colección de cactus y suculentas</li>
                    <li>• Plantas aromáticas y medicinales</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Visitas a los Invernaderos</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Los invernaderos son parte del Jardín de las Serres d'Auteuil y están abiertos al público:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Durante Roland Garros:</strong> Acceso limitado con entrada al torneo</li>
                    <li>• <strong>Resto del año:</strong> Abierto al público gratuitamente</li>
                    <li>• <strong>Horarios:</strong> Generalmente 9:00-17:00 en temporada</li>
                    <li>• <strong>Visitas guiadas:</strong> Disponibles previa reserva</li>
                    <li>• <strong>Eventos especiales:</strong> Exposiciones temporales de flores</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">El Jardín de las Serres d'Auteuil</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Los invernaderos forman parte de un complejo de jardines botánicos más amplio que data de 1761. El jardín fue rediseñado por Jean-Camille Formigé a finales del siglo XIX en estilo Art Nouveau. Los invernaderos actuales fueron construidos entre 1895 y 1898.
                </p>
                <p className="text-gray-700 text-sm">
                  La integración de la pista de tenis en 2019 fue controversial inicialmente, pero el diseño respetuoso de Mimram terminó revitalizando el interés en estos jardines históricos, trayendo nuevos visitantes a un tesoro parisino que muchos desconocían.
                </p>
              </div>
            </section>

            {/* Memorable Matches */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Momentos Memorables</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aunque es la pista más nueva, la Simonne-Mathieu ya ha sido escenario de tenis emocionante y momentos especiales.
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Inauguración Oficial - Mayo 2019</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Primer partido:</strong> Dobles femenino - Barty/Dellacqua vs. Hsieh/Strycova
                  </p>
                  <p className="text-gray-700 text-sm">
                    La inauguración de la pista fue un evento mediático importante, con cobertura internacional centrada tanto en la arquitectura como en el tenis. La ceremonia incluyó representantes de la familia Mathieu y autoridades francesas destacando la importancia histórica de la pista.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Nadal vs. Federer - Semifinales 2019</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Nota:</strong> Aunque este partido se jugó en Philippe-Chatrier, ambos jugadores entrenaron en la Simonne-Mathieu
                  </p>
                  <p className="text-gray-700 text-sm">
                    Muchas estrellas del circuito han elogiado públicamente las instalaciones de entrenamiento asociadas con la pista y el ambiente tranquilo que los jardines proporcionan para la preparación mental.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Impacto en Jugadores Jóvenes</h3>
                  <p className="text-gray-700 text-sm">
                    Varios jugadores jóvenes han comentado que jugar en la Simonne-Mathieu fue un punto de inflexión en sus carreras. La pista ofrece un equilibrio único: suficientemente prestigiosa para sentirse como "Grand Slam real" pero sin la presión abrumadora de las pistas más grandes. Algunos consideran que es el lugar perfecto para hacer la transición de partidos en pistas secundarias a las pistas principales.
                  </p>
                </div>
              </div>
            </section>

            {/* Accessibility and Facilities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Instalaciones y Accesibilidad</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Servicios para Espectadores</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Puntos de comida y bebida en múltiples niveles</li>
                    <li>• Baños modernos y limpios en cada nivel</li>
                    <li>• Zonas de descanso con sombra</li>
                    <li>• Pantallas secundarias para ver otros partidos</li>
                    <li>• Áreas de picnic en los jardines circundantes</li>
                    <li>• WiFi gratuito en el área</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Accesibilidad Universal</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Completamente accesible para sillas de ruedas</li>
                    <li>• Ascensores a todos los niveles</li>
                    <li>• Asientos designados para movilidad reducida</li>
                    <li>• Rampas con pendiente adecuada</li>
                    <li>• Baños adaptados en cada nivel</li>
                    <li>• Personal de asistencia capacitado</li>
                    <li>• Señalización clara y accesible</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Diseño Universal</h3>
                <p className="text-gray-700 text-sm">
                  La pista fue diseñada desde el principio con accesibilidad universal en mente. A diferencia de pistas más antiguas que requirieron adaptaciones posteriores, la Simonne-Mathieu incorpora la accesibilidad en su diseño fundamental. Los caminos desde las entradas principales hasta la pista son suaves y bien señalizados, y no hay escalones inesperados o barreras arquitectónicas.
                </p>
              </div>
            </section>

            {/* Tips for Visitors */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Consejos para Aprovechar al Máximo tu Visita</h2>

              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="font-bold mb-2 text-gray-900">Llega Temprano</h3>
                  <p className="text-gray-700 text-sm">
                    Dedica tiempo antes del partido para pasear por los jardines circundantes. Los invernaderos son espectaculares, y hay senderos hermosos que muchos visitantes se pierden por ir directo a sus asientos. El área es perfecta para fotografías pre-partido.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="font-bold mb-2 text-gray-900">Mejor Época del Día</h3>
                  <p className="text-gray-700 text-sm">
                    Las sesiones de tarde (después de las 15:00) ofrecen la mejor iluminación para apreciar los invernaderos. La luz de la tarde crea efectos hermosos en el vidrio y las plantas. Las mañanas son más frescas y menos concurridas si prefieres evitar multitudes.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="font-bold mb-2 text-gray-900">Qué Traer</h3>
                  <ul className="text-gray-700 text-sm space-y-1 mt-2">
                    <li>• Cámara con buen zoom para capturar tanto el tenis como la arquitectura</li>
                    <li>• Gafas de sol - aunque hay sombra parcial, el reflejo del vidrio puede ser intenso</li>
                    <li>• Botella de agua reutilizable - hay fuentes de agua cerca</li>
                    <li>• Capa ligera - la temperatura puede ser más fresca que en pistas expuestas</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="font-bold mb-2 text-gray-900">Combina Tenis y Cultura</h3>
                  <p className="text-gray-700 text-sm">
                    Si tienes un ground pass, considera dividir tu día entre varios eventos. Ver un partido en la Simonne-Mathieu, luego explorar los jardines, y después ir a otra pista crea una experiencia más variada y menos agotadora que estar sentado todo el día en un solo lugar.
                  </p>
                </div>
              </div>
            </section>

            {/* Getting Tickets */}
            <section className="mb-12 bg-white rounded-xl shadow-sm border border-[#ead5cd] p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1d110c] mb-4">
                Cómo Conseguir Entradas para la Simonne-Mathieu
              </h2>
              <p className="text-lg mb-6 text-[#a15d45]">
                Las entradas para esta pista única son muy solicitadas, especialmente entre entusiastas de la arquitectura y fotografía.
              </p>
              <div className="space-y-3 mb-6 text-[#1d110c] text-sm">
                <p>• Incluida en el ground pass durante la primera semana del torneo</p>
                <p>• Entradas individuales disponibles para partidos específicos de segunda semana</p>
                <p>• Generalmente más accesibles que Philippe-Chatrier o Suzanne-Lenglen</p>
                <p>• Los asientos con vista a los invernaderos se agotan rápidamente</p>
                <p>• Considera comprar para sesiones de tarde cuando la iluminación es óptima</p>
              </div>
              <Link
                href="/entradas-roland-garros-2026"
                className="inline-block bg-[#c1483a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a13a2e] transition-colors"
              >
                Guía Completa de Entradas 2026
              </Link>
            </section>

            {/* Related Pages */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Explora Otras Pistas de Roland Garros</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/estadio-roland-garros/pista-philippe-chatrier"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Pista Philippe-Chatrier</h3>
                  <p className="text-gray-600 text-sm">La pista central con techo retráctil y 15,225 asientos</p>
                </Link>

                <Link
                  href="/estadio-roland-garros/pista-suzanne-lenglen"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Pista Suzanne-Lenglen</h3>
                  <p className="text-gray-600 text-sm">La segunda pista más grande con 10,068 espectadores</p>
                </Link>

                <Link
                  href="/estadio-roland-garros"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all md:col-span-2"
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
