import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ArticleSchema } from '@/components/seo/ArticleSchema'

export const metadata: Metadata = {
  title: 'Mapa e Instalaciones de Roland Garros: Guía Completa del Recinto 2026',
  description: 'Guía completa de instalaciones en Roland Garros: mapa del estadio, restaurantes, tiendas oficiales, museo Tenniseum, baños, zonas de entretenimiento, accesibilidad y consejos para navegar el complejo.',
  keywords: 'mapa roland garros, instalaciones roland garros, tiendas roland garros, restaurantes roland garros, tenniseum, como moverse roland garros',
  openGraph: {
    title: 'Mapa e Instalaciones de Roland Garros: Guía Completa 2026',
    description: 'Todo lo que necesitas saber sobre las instalaciones, tiendas, restaurantes y servicios en el complejo de Roland Garros.',
    url: 'https://entradasrolandgarros.com/estadio-roland-garros/mapa-instalaciones',
    type: 'article',
  },
}

export default function MapaInstalacionesPage() {
  return (
    <>
      <ArticleSchema
        headline="Mapa e Instalaciones de Roland Garros: Guía Completa del Recinto"
        description="Guía detallada de todas las instalaciones, servicios, tiendas y restaurantes en el complejo de Roland Garros"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
        authorName="Equipo EntradasRolandGarros.com"
      />

      <Breadcrumbs
        items={[
          { name: 'Estadio Roland Garros', url: 'https://entradasrolandgarros.com/estadio-roland-garros' },
          { name: 'Mapa e Instalaciones', url: 'https://entradasrolandgarros.com/estadio-roland-garros/mapa-instalaciones' }
        ]}
      />

      {/* Main Content */}
      <article className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d110c] mb-6">
              Mapa e Instalaciones de Roland Garros
            </h1>
            <p className="text-xl text-[#a15d45] leading-relaxed">
              Tu guía completa para navegar el complejo y aprovechar todas las instalaciones
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">40+</div>
              <div className="text-sm text-[#a15d45]">Puntos de Comida</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">5</div>
              <div className="text-sm text-[#a15d45]">Tiendas Oficiales</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">21</div>
              <div className="text-sm text-[#a15d45]">Acres de Terreno</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">6</div>
              <div className="text-sm text-[#a15d45]">Entradas Principales</div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-8 md:p-12 mb-8">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                El complejo de <strong>Roland Garros</strong> se extiende a lo largo de 21 acres en el distrito 16 de París, creando una pequeña ciudad del tenis durante las dos semanas del torneo. Con 18 pistas, más de 40 puntos de comida y bebida, múltiples tiendas, un museo, y zonas de entretenimiento, navegar Roland Garros puede parecer abrumador al principio.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Esta guía te ayudará a orientarte en el complejo, encontrar las mejores instalaciones, y maximizar tu experiencia. Ya sea que busques el mejor croissant, quieras comprar merchandising oficial, o simplemente necesites encontrar los baños más cercanos, aquí encontrarás toda la información práctica.
              </p>
            </div>

            {/* Stadium Map Image */}
            <div className="mb-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Mapa Completo de Roland Garros</h2>
              <div className="relative w-full bg-white rounded-lg shadow-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/images/guides/mapa de roland garros.png"
                  alt="Mapa completo de las instalaciones de Roland Garros con todas las pistas, entradas y servicios"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <p className="text-center text-sm text-gray-600 mt-4 italic">
                Mapa oficial del complejo de Roland Garros mostrando todas las pistas, entradas, servicios y zonas de entretenimiento
              </p>
            </div>

            {/* Layout Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Distribución General del Complejo</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El complejo de Roland Garros está organizado de manera relativamente intuitiva una vez que comprendes la disposición básica. Las tres pistas principales forman el núcleo del recinto, con las pistas secundarias y servicios distribuidos alrededor.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Zonas Principales del Recinto</h3>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Zona Central - Pistas Principales</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Ubicación:</strong> Centro del complejo
                    </p>
                    <p className="text-gray-700 text-sm">
                      Aquí se encuentran la pista Philippe-Chatrier (central) y la Suzanne-Lenglen. Esta es la zona más concurrida, especialmente durante partidos importantes. Los pasillos principales entre estas pistas albergan muchos servicios esenciales.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Zona Jardín - Pista Simonne-Mathieu</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Ubicación:</strong> Lado oeste, integrado con el Jardín de las Serres d'Auteuil
                    </p>
                    <p className="text-gray-700 text-sm">
                      La zona más verde y tranquila del complejo. Perfecta para paseos entre partidos. Los senderos a través de los jardines históricos ofrecen un respiro de las multitudes. Los invernaderos son espectaculares y merecen una visita.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Zona de Pistas Secundarias</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Ubicación:</strong> Distribuidas por todo el complejo
                    </p>
                    <p className="text-gray-700 text-sm">
                      Las pistas numeradas (2-14) están dispersas pero bien señalizadas. Durante la primera semana, aquí es donde verás el mayor volumen de tenis. Las gradas son más pequeñas pero ofrecen proximidad increíble a los jugadores.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">The Village - Zona de Entretenimiento</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Ubicación:</strong> Lado este del complejo
                    </p>
                    <p className="text-gray-700 text-sm">
                      Centro de actividades interactivas, tiendas principales, y zonas de relajación. Ideal para familias y para tomar descansos entre partidos. Incluye simuladores de tenis, zonas de juegos para niños, y exhibiciones interactivas.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Entrances */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Entradas y Accesos</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Roland Garros tiene múltiples entradas dependiendo de tu tipo de entrada y ubicación de llegada. Comprender cuál usar puede ahorrarte tiempo considerable.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-indigo-500">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Puerta Sur (Porte d'Auteuil)</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Metro:</strong> Línea 10 (Boulogne - Pont de Saint-Cloud) o Línea 9 (Porte d'Auteuil)
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Mejor para:</strong> Ground pass y entradas generales
                  </p>
                  <p className="text-gray-700 text-sm">
                    La entrada principal más utilizada. Desde aquí tienes acceso directo a la mayoría de las pistas secundarias y estás a corta distancia de las pistas principales. Muy concurrida durante horarios pico.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-indigo-500">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Puerta Mousquetaires</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Ubicación:</strong> Lado oeste
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Mejor para:</strong> Acceso a pista Simonne-Mathieu y jardines
                  </p>
                  <p className="text-gray-700 text-sm">
                    Menos concurrida que la Puerta Sur. Excelente si tu destino principal es la Simonne-Mathieu o quieres explorar los jardines botánicos primero.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-indigo-500">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Puerta Este (Porte de la Muette)</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Mejor para:</strong> Entradas VIP y palcos
                  </p>
                  <p className="text-gray-700 text-sm">
                    Acceso premium con menos multitudes. Te coloca cerca de The Village y las zonas de hospitalidad. Si tienes entradas premium, esta es tu mejor opción.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-indigo-500">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Otras Entradas</h3>
                  <p className="text-gray-700 text-sm">
                    Hay entradas adicionales para jugadores, prensa, y servicios. Estas no son accesibles al público general, pero estarás bien señalizado si accidentalmente te acercas a una.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Control de Seguridad</h3>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Todas las entradas tienen control de seguridad similar a aeropuertos.</strong> Espera pasar por:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Escáneres de rayos X para bolsas</li>
                  <li>• Detectores de metales o escáneres corporales</li>
                  <li>• Verificación de entrada (puede incluir verificación de ID)</li>
                  <li>• Tiempo estimado: 5-20 minutos dependiendo de la hora</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3 font-semibold">
                  Consejo: Llega al menos 30-45 minutos antes del primer partido que quieras ver para tener margen suficiente.
                </p>
              </div>
            </section>

            {/* Food and Drink */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Comida y Bebida</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Roland Garros ofrece una experiencia gastronómica superior a la mayoría de eventos deportivos, con más de 40 puntos de comida que van desde snacks rápidos hasta restaurantes gourmet con chefs con estrellas Michelin.
              </p>

              <div className="space-y-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Restaurantes y Opciones Premium</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Les Jardins de Roland Garros</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Ubicación:</strong> Cerca de la pista Philippe-Chatrier
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Tipo:</strong> Restaurante gourmet con chef
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Rango de precio:</strong> 40-80€ por persona
                      </p>
                      <p className="text-gray-700 text-sm">
                        Cocina francesa de alta gama con ingredientes de temporada. Requiere reserva previa. Excelente para una comida especial durante tu visita.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Brasserie des Mousquetaires</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Ubicación:</strong> Zona central
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Tipo:</strong> Brasserie tradicional francesa
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Rango de precio:</strong> 25-45€ por persona
                      </p>
                      <p className="text-gray-700 text-sm">
                        Platos clásicos franceses en ambiente relajado. No requiere reserva pero puede haber espera en horas pico. Excelente steak-frites y ensaladas.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Le Café des Jardiniers</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Ubicación:</strong> Cerca de la Simonne-Mathieu, en los jardines
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Tipo:</strong> Café bistró
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Rango de precio:</strong> 15-30€ por persona
                      </p>
                      <p className="text-gray-700 text-sm">
                        Ambiente encantador en los jardines históricos. Perfecto para un almuerzo ligero o merienda. Especialidades en quiches, ensaladas y sandwiches gourmet.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Opciones Rápidas y Económicas</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Kioscos de Comida Rápida</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Precio:</strong> 8-15€
                      </p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Sandwiches y bocadillos</li>
                        <li>• Crepes dulces y saladas</li>
                        <li>• Hot dogs gourmet</li>
                        <li>• Ensaladas preparadas</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Pastelerías y Dulces</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Precio:</strong> 3-8€
                      </p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Croissants y pain au chocolat</li>
                        <li>• Macarons de Roland Garros (edición especial)</li>
                        <li>• Tartas y pasteles franceses</li>
                        <li>• Helados artesanales</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Opciones Internacionales</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Precio:</strong> 10-18€
                      </p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Sushi y comida asiática</li>
                        <li>• Pizza al horno de leña</li>
                        <li>• Hamburguesas gourmet</li>
                        <li>• Comida mediterránea</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Opciones Vegetarianas/Veganas</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        Disponibles en la mayoría de puntos
                      </p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Ensaladas variadas</li>
                        <li>• Bowls vegetarianos</li>
                        <li>• Opciones veganas claramente marcadas</li>
                        <li>• Alternativas sin gluten disponibles</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Bebidas</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Alcohólicas</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>Champán:</strong> 12-25€ por copa / 60-150€ botella</li>
                        <li>• <strong>Vino:</strong> 8-15€ por copa / 30-80€ botella</li>
                        <li>• <strong>Cerveza:</strong> 7-10€ (presión o botella)</li>
                        <li>• <strong>Cócteles:</strong> 12-18€</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">No Alcohólicas</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>Agua:</strong> 3-4€ (500ml)</li>
                        <li>• <strong>Refrescos:</strong> 4-5€</li>
                        <li>• <strong>Café:</strong> 3-5€</li>
                        <li>• <strong>Zumos frescos:</strong> 5-7€</li>
                        <li>• <strong>Batidos:</strong> 6-9€</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mt-4 italic">
                    Nota: Los precios son aproximados y pueden variar. Hay fuentes de agua potable gratuitas por todo el recinto donde puedes rellenar tu botella.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Consejos de Comida</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Horario de comida:</strong> Evita 12:00-14:00 cuando las colas son más largas. Come antes (11:00-11:30) o después (14:30+)</li>
                    <li>• <strong>Reservas:</strong> Si quieres cenar en un restaurante con asientos, llama o reserva online con anticipación</li>
                    <li>• <strong>Picnic:</strong> Aunque no puedes traer comida del exterior, hay zonas de césped donde puedes comprar comida para llevar y disfrutarla al aire libre</li>
                    <li>• <strong>Especialidades:</strong> Prueba los macarons de Roland Garros - son edición limitada y un recuerdo comestible perfecto</li>
                    <li>• <strong>Pago:</strong> Tarjetas de crédito ampliamente aceptadas, pero ten algo de efectivo por si acaso</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Shopping */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Tiendas y Merchandising</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Las tiendas oficiales de Roland Garros ofrecen merchandising exclusivo del torneo que no está disponible en ningún otro lugar del mundo. Desde toallas y camisetas hasta artículos de colección de lujo, hay algo para todos los presupuestos.
              </p>

              <div className="space-y-6">
                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Tienda Principal del Torneo</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Ubicación:</strong> Cerca de la entrada principal Porte d'Auteuil
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    La tienda más grande del complejo con la selección más completa de productos oficiales:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ropa y Accesorios</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Camisetas oficiales: 30-50€</li>
                        <li>• Polos: 60-90€</li>
                        <li>• Gorras y sombreros: 25-40€</li>
                        <li>• Sudaderas: 70-110€</li>
                        <li>• Chaquetas: 100-200€</li>
                        <li>• Toallas: 20-45€</li>
                        <li>• Bolsas y mochilas: 30-80€</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Artículos Coleccionables</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Pelotas oficiales del torneo: 6-12€</li>
                        <li>• Pelotas firmadas (réplicas): 25-40€</li>
                        <li>• Posters y prints: 15-50€</li>
                        <li>• Libros y guías: 20-60€</li>
                        <li>• Tazas y vasos: 12-25€</li>
                        <li>• Llaveros y pins: 8-15€</li>
                        <li>• Ediciones limitadas: 100-500€+</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm italic">
                    Consejo: Las colas son más cortas temprano en la mañana o al final del día. Los artículos más populares pueden agotarse hacia el final del torneo.
                  </p>
                </div>

                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Boutiques de Marcas</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Varias marcas de tenis tienen tiendas temporales en el recinto:
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tienda Nike</h4>
                      <p className="text-gray-700 text-sm">
                        Colección especial de Roland Garros de Nike, incluyendo las prendas que usan los jugadores patrocinados por Nike durante el torneo. Equipamiento de tenis de alta gama.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Boutique Lacoste</h4>
                      <p className="text-gray-700 text-sm">
                        La marca fundada por René Lacoste (uno de los Mosqueteros originales) tiene presencia especial. Polos clásicos y colecciones de edición limitada de Roland Garros.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Otras Marcas</h4>
                      <p className="text-gray-700 text-sm">
                        Adidas, Wilson, Babolat y otras marcas principales tienen presencia con colecciones especiales y equipamiento profesional.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Tienda del Museo (Tenniseum)</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Ubicación:</strong> Dentro del museo del tenis
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    Enfocada en artículos históricos y educativos:
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Libros especializados sobre historia del tenis</li>
                    <li>• Reproducciones de equipamiento vintage</li>
                    <li>• Fotografías históricas enmarcadas</li>
                    <li>• Artículos de colección raros</li>
                    <li>• Regalos educativos para niños</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Consejos de Compra</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Artículos más populares:</strong> Camisetas oficiales, gorras, y toallas se venden rápidamente en tallas/colores populares</li>
                    <li>• <strong>Mejor momento:</strong> Compra al principio del torneo para mejor selección, o al final para posibles descuentos</li>
                    <li>• <strong>Ediciones especiales:</strong> Artículos conmemorativos se lanzan durante el torneo - pregunta en la tienda por nuevos lanzamientos</li>
                    <li>• <strong>Impuestos:</strong> Si no eres residente de la UE, puedes solicitar devolución de IVA (Tax Free) en compras superiores a 175€</li>
                    <li>• <strong>Envíos:</strong> La tienda principal puede enviar compras grandes a tu hotel o país de origen</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Museum */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Tenniseum - Museo del Tenis</h2>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  El <strong>Tenniseum</strong> es uno de los museos de tenis más completos del mundo, ubicado dentro del complejo de Roland Garros. Ofrece una fascinante inmersión en la historia del tenis desde sus orígenes hasta la actualidad.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Información Práctica</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li><strong>Ubicación:</strong> Lado sur del complejo</li>
                      <li><strong>Acceso:</strong> Incluido con entrada al torneo</li>
                      <li><strong>Horario:</strong> 10:00-18:00 diariamente durante el torneo</li>
                      <li><strong>Duración visita:</strong> 45-90 minutos</li>
                      <li><strong>Idiomas:</strong> Francés, inglés, español disponibles</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">¿Qué Ver?</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Trofeos históricos incluyendo copas Davis</li>
                      <li>• Raquetas y equipamiento desde el siglo XIX</li>
                      <li>• Vestimenta de leyendas del tenis</li>
                      <li>• Exhibiciones interactivas multimedia</li>
                      <li>• Historia de Roland Garros y los Mosqueteros</li>
                      <li>• Evolución de la tecnología del tenis</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Destacados Especiales</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Sala de los Campeones:</strong> Exhibición de todos los ganadores de Roland Garros con estadísticas y memorabilia</li>
                    <li>• <strong>Evolución de la Pelota:</strong> Fascinante recorrido por cómo ha cambiado la pelota de tenis a lo largo de 150 años</li>
                    <li>• <strong>Experiencias Interactivas:</strong> Simuladores donde puedes "jugar" contra leyendas del pasado</li>
                    <li>• <strong>Exposiciones Temporales:</strong> Cada año hay exhibiciones especiales sobre temas específicos o jugadores</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Vale la Pena Visitarlo?</h3>
                <p className="text-gray-700 text-sm">
                  Absolutamente, especialmente si eres fanático del tenis o de la historia deportiva. El museo ofrece un excelente respiro de las multitudes, está climatizado, y proporciona contexto histórico que enriquece tu experiencia del torneo. Ideal para visitar durante las horas más calurosas del día o si necesitas un descanso de estar de pie en las tribunas.
                </p>
              </div>
            </section>

            {/* Amenities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Servicios e Instalaciones</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Baños</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Instalaciones sanitarias modernas distribuidas por todo el complejo:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Múltiples bloques de baños en cada zona principal</li>
                    <li>• Baños adaptados para personas con movilidad reducida</li>
                    <li>• Cambiadores para bebés disponibles</li>
                    <li>• Generalmente limpios y bien mantenidos</li>
                    <li>• Las colas son más cortas fuera de los descansos de partido</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Cajeros Automáticos</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Disponibles en varias ubicaciones:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Cerca de las entradas principales</li>
                    <li>• En The Village</li>
                    <li>• Cerca de las tiendas principales</li>
                    <li>• Nota: Pueden tener comisiones elevadas</li>
                    <li>• Recomendación: Trae suficiente efectivo de antemano</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">WiFi y Conectividad</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Conectividad disponible en todo el recinto:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• WiFi gratuito en todo el complejo</li>
                    <li>• Red: "Roland Garros WiFi"</li>
                    <li>• Registro simple requerido</li>
                    <li>• Velocidad decente para redes sociales y mensajería</li>
                    <li>• Puede saturarse durante partidos importantes</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Estaciones de Carga</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Para mantener tus dispositivos cargados:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Estaciones de carga gratuitas en The Village</li>
                    <li>• Algunos restaurantes tienen enchufes disponibles</li>
                    <li>• Recomendación: Trae batería portátil</li>
                    <li>• Las estaciones pueden estar ocupadas en horas pico</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Consigna de Equipaje</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Servicio de almacenamiento temporal:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Disponible cerca de las entradas principales</li>
                    <li>• Costo: Aproximadamente 5-8€ por artículo</li>
                    <li>• Horario: Desde apertura hasta cierre del recinto</li>
                    <li>• No se permiten artículos de gran tamaño</li>
                    <li>• Útil si vienes directamente desde hotel o estación</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Primeros Auxilios</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Servicios médicos disponibles:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Puestos de primeros auxilios en todo el complejo</li>
                    <li>• Personal médico capacitado</li>
                    <li>• Tratamiento básico gratuito</li>
                    <li>• Ambulancia disponible para emergencias</li>
                    <li>• Identificado con cruz roja en señalización</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Accessibility */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Accesibilidad e Inclusión</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Roland Garros está comprometido con proporcionar acceso completo a todos los visitantes, independientemente de sus necesidades de movilidad o accesibilidad.
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Para Personas con Movilidad Reducida</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Acceso y Navegación</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Entradas accesibles en todas las puertas</li>
                        <li>• Caminos pavimentados y suaves por todo el complejo</li>
                        <li>• Ascensores en todas las pistas principales</li>
                        <li>• Rampas donde sea necesario</li>
                        <li>• Señalización clara de rutas accesibles</li>
                        <li>• Personal capacitado para asistencia</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Asientos y Visualización</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Espacios designados para sillas de ruedas en todas las pistas</li>
                        <li>• Ubicaciones con excelente visibilidad</li>
                        <li>• Asientos para acompañantes junto a espacios adaptados</li>
                        <li>• Fácil acceso desde pasillos</li>
                        <li>• Reserva anticipada recomendada</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instalaciones</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Baños adaptados en cada zona</li>
                        <li>• Restaurantes y tiendas accesibles</li>
                        <li>• Estacionamiento reservado disponible</li>
                        <li>• Servicio de préstamo de sillas de ruedas</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Información de Contacto</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        Para necesidades especiales de accesibilidad, contacta con anticipación:
                      </p>
                      <p className="text-gray-700 text-sm">
                        Email: accessibility@rolandgarros.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Para Personas con Discapacidad Visual</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Audio descripción disponible en partidos importantes</li>
                    <li>• Perros guía permitidos</li>
                    <li>• Personal capacitado para asistencia</li>
                    <li>• Señalización táctil en áreas clave</li>
                    <li>• Acompañantes pueden recibir entrada gratuita o con descuento</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Para Personas con Discapacidad Auditiva</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Sistemas de amplificación disponibles</li>
                    <li>• Subtítulos en pantallas de video</li>
                    <li>• Personal capacitado en lenguaje de señas en puntos de información</li>
                    <li>• Información visual clara sobre orden de juego y resultados</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Village */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">The Village - Zona de Entretenimiento</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Village es la zona de entretenimiento interactiva de Roland Garros, perfecta para familias, niños, y cualquiera que quiera tomar un descanso del tenis competitivo.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Actividades Interactivas</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Simuladores de tenis:</strong> Juega contra recreaciones digitales de profesionales</li>
                    <li>• <strong>Medidor de velocidad de saque:</strong> Descubre qué tan rápido es tu servicio</li>
                    <li>• <strong>Mini pistas:</strong> Pistas pequeñas donde puedes jugar partidos casuales</li>
                    <li>• <strong>Zona de selfies:</strong> Fondos de Roland Garros para fotos memorables</li>
                    <li>• <strong>Exhibiciones de tecnología:</strong> Hawk-Eye y otras tecnologías del tenis explicadas</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Para Familias y Niños</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Área de juegos para niños pequeños</li>
                    <li>• Clínicas de tenis gratuitas para niños</li>
                    <li>• Zona de pintura de caras</li>
                    <li>• Juegos y competiciones con premios</li>
                    <li>• Área de descanso familiar</li>
                    <li>• Cambiadores y zona de lactancia</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Pantallas y Transmisiones</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Grandes pantallas transmiten partidos en vivo desde todas las pistas principales:
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Ambiente tipo "fan zone" durante partidos importantes</li>
                    <li>• Asientos tipo grada disponibles</li>
                    <li>• Bares y comida nearby</li>
                    <li>• Perfecto si no tienes entrada para pistas específicas</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Eventos Especiales</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    The Village alberga eventos especiales durante el torneo:
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Sesiones de autógrafos de leyendas del tenis</li>
                    <li>• Conferencias y charlas</li>
                    <li>• Exhibiciones de tenis de leyendas</li>
                    <li>• Conciertos y música en vivo</li>
                    <li>• Consulta el programa diario para horarios</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Navigation Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Consejos para Navegar el Complejo</h2>

              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="font-bold mb-2 text-gray-900">Obtén un Mapa</h3>
                  <p className="text-gray-700 text-sm">
                    Mapas físicos gratuitos están disponibles en todas las entradas y puntos de información. También puedes descargar el mapa digital en la app oficial de Roland Garros antes de tu visita. El mapa muestra todas las pistas, servicios, y puntos de interés.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="font-bold mb-2 text-gray-900">Usa la App Oficial</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    La aplicación oficial "Roland Garros" (iOS/Android) es indispensable:
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Mapa interactivo con GPS</li>
                    <li>• Orden de juego en tiempo real</li>
                    <li>• Resultados y estadísticas en vivo</li>
                    <li>• Notificaciones de partidos que te interesan</li>
                    <li>• Información sobre servicios y eventos especiales</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="font-bold mb-2 text-gray-900">Planifica tu Día</h3>
                  <p className="text-gray-700 text-sm">
                    Roland Garros es grande - caminarás varios kilómetros en un día típico. Planifica qué partidos quieres ver, dónde comerás, y cuándo visitarás tiendas o museo. Esto te ayudará a moverte eficientemente y aprovechar mejor tu tiempo.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="font-bold mb-2 text-gray-900">Identifica Puntos de Referencia</h3>
                  <p className="text-gray-700 text-sm">
                    Las tres pistas principales (Philippe-Chatrier, Suzanne-Lenglen, Simonne-Mathieu) son excelentes puntos de referencia. Si te pierdes, dirígete a una de ellas y reoriéntate desde allí.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="font-bold mb-2 text-gray-900">Tiempo de Desplazamiento</h3>
                  <p className="text-gray-700 text-sm">
                    Calcula al menos 10-15 minutos para moverte entre pistas principales, especialmente durante partidos cuando los pasillos están llenos. Si quieres ver el final de un partido en una pista y el inicio en otra, sal con al menos 20 minutos de margen.
                  </p>
                </div>
              </div>
            </section>

            {/* Practical Tips */}
            <section className="mb-12 bg-white rounded-xl shadow-sm border border-[#ead5cd] p-8">
              <h2 className="text-3xl font-bold text-[#1d110c] mb-6">Consejos Prácticos Finales</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-[#1d110c]">Qué Llevar</h3>
                  <ul className="space-y-1 text-sm text-[#1d110c]">
                    <li>• Protección solar (gorra, gafas, crema)</li>
                    <li>• Botella de agua reutilizable</li>
                    <li>• Calzado muy cómodo para caminar</li>
                    <li>• Batería portátil para móvil</li>
                    <li>• Chubasquero o paraguas pequeño</li>
                    <li>• Dinero en efectivo (algo, no todo)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 text-[#1d110c]">Qué NO Llevar</h3>
                  <ul className="space-y-1 text-sm text-[#1d110c]">
                    <li>• Mochilas grandes (máx 40x30x15cm)</li>
                    <li>• Comida o bebida del exterior (excepto agua)</li>
                    <li>• Palos de selfie o trípodes</li>
                    <li>• Instrumentos musicales</li>
                    <li>• Objetos de vidrio</li>
                    <li>• Drones o dispositivos voladores</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#fef7f4] border-l-4 border-[#c1483a] rounded p-6">
                <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Consejo de Oro</h3>
                <p className="text-[#1d110c] text-sm">
                  Llega temprano (al menos 1 hora antes de tu primer partido objetivo), familiarízate con el layout, encuentra los baños y puntos de comida cerca de tus pistas objetivo, y luego relájate y disfruta. Roland Garros es un maratón, no un sprint - ritmo es clave para disfrutar todo el día.
                </p>
              </div>
            </section>

            {/* Related Links */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Más sobre Roland Garros</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/estadio-roland-garros/pista-philippe-chatrier"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Pista Philippe-Chatrier</h3>
                  <p className="text-gray-600 text-sm">La pista central con techo retráctil</p>
                </Link>

                <Link
                  href="/estadio-roland-garros/historia"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Historia de Roland Garros</h3>
                  <p className="text-gray-600 text-sm">Del aviador al estadio legendario</p>
                </Link>

                <Link
                  href="/estadio-roland-garros"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all md:col-span-2"
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
