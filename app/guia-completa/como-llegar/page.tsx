import Link from 'next/link'
import { Metadata } from 'next'
import { HowToSchema } from '@/components/seo/HowToSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Cómo Llegar a Roland Garros 2026 | Metro, Autobús, Aeropuertos y Parking',
  description: 'Guía completa de transporte a Roland Garros: Metro Línea 10 (Porte d\'Auteuil), autobuses, cómo llegar desde Charles de Gaulle y Orly, parking y mejores rutas.',
  keywords: 'como llegar roland garros, metro roland garros, porte auteuil, transporte roland garros, charles de gaulle roland garros, orly roland garros',
  openGraph: {
    title: 'Cómo Llegar a Roland Garros 2026 - Guía Completa de Transporte',
    description: 'Todas las opciones de transporte para llegar a Roland Garros: metro, autobús, desde aeropuertos y parking',
    type: 'article',
  }
}

export default function ComoLlegarPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: '/' },
    { name: 'Guía Completa', url: '/guia-completa' },
    { name: 'Cómo Llegar', url: '/guia-completa/como-llegar' }
  ]

  const howToSteps = [
    {
      name: 'Identifica tu punto de partida',
      text: 'Determina desde dónde viajarás: hotel en París, aeropuerto Charles de Gaulle, aeropuerto de Orly, o estación de tren.'
    },
    {
      name: 'Elige tu medio de transporte',
      text: 'Selecciona entre metro (opción más recomendada), autobús, taxi o coche según tu ubicación y preferencias.'
    },
    {
      name: 'Planifica tu ruta en metro',
      text: 'Si usas el metro, localiza la estación más cercana a tu punto de partida y planifica el trayecto hasta Porte d\'Auteuil en la Línea 10.'
    },
    {
      name: 'Calcula el tiempo de viaje',
      text: 'Añade tiempo extra para traslados, posibles retrasos y las colas de seguridad en Roland Garros (mínimo 60-90 minutos antes del inicio).'
    },
    {
      name: 'Llega al estadio',
      text: 'Sigue las señalizaciones desde la estación Porte d\'Auteuil o las paradas de autobús. El acceso al estadio está a 5-10 minutos a pie.'
    }
  ]

  return (
    <>
      <HowToSchema
        name="Cómo Llegar a Roland Garros"
        description="Guía paso a paso para llegar al Stade Roland Garros usando diferentes medios de transporte"
        steps={howToSteps}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cómo Llegar a Roland Garros 2026
            </h1>
            <p className="text-xl text-blue-100">
              Guía completa de transporte: Metro, autobús, desde los aeropuertos y opciones de parking
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-8 bg-blue-50 border-b-2 border-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Resumen Rápido</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-blue-600 mb-2">Opción Recomendada:</p>
                  <p className="text-gray-700">Metro Línea 10 → Estación Porte d'Auteuil</p>
                </div>
                <div>
                  <p className="font-bold text-blue-600 mb-2">Tiempo desde el Centro:</p>
                  <p className="text-gray-700">30-45 minutos en transporte público</p>
                </div>
                <div>
                  <p className="font-bold text-blue-600 mb-2">Dirección:</p>
                  <p className="text-gray-700">2 Avenue Gordon Bennett, 75016 París</p>
                </div>
                <div>
                  <p className="font-bold text-blue-600 mb-2">Estaciones Cercanas:</p>
                  <p className="text-gray-700">Porte d'Auteuil, Michel-Ange Molitor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto prose prose-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              El Stade Roland Garros está ubicado en el distrito XVI de París, específicamente en el barrio de Auteuil, en el suroeste de la ciudad. Aunque no está en el centro turístico de París, es muy accesible gracias a la excelente red de transporte público de la capital francesa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La ubicación del estadio en una zona residencial elegante significa que es tranquila y segura, pero también implica que debes planificar bien tu ruta. Durante Roland Garros, decenas de miles de espectadores se dirigen al estadio cada día, por lo que la organización refuerza el transporte público con servicios adicionales y personal para guiar a los visitantes.
            </p>
          </div>
        </div>
      </section>

      {/* Metro - Opción Principal */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Metro: La Mejor Opción (Recomendado)
            </h2>

            <div className="bg-blue-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4">Línea 10 - Estación Porte d'Auteuil</h3>
              <p className="text-blue-100 mb-4">
                Esta es LA opción por excelencia para llegar a Roland Garros. La estación Porte d'Auteuil de la Línea 10 (color marrón/beige en el mapa) es la parada oficial del torneo.
              </p>
              <div className="bg-blue-700 rounded p-4">
                <p className="font-bold mb-2">Distancia al estadio: 5-10 minutos a pie</p>
                <p className="text-sm text-blue-100">Señalización clara durante el torneo</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Desde las Principales Zonas Turísticas</h3>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold mb-2">Desde los Campos Elíseos / Arc de Triomphe</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Ruta:</strong> Línea 1 (dirección La Défense) → Estación Boulogne / Pont de Saint-Cloud, cambio a Línea 10 (dirección Gare d'Austerlitz) → Porte d'Auteuil
                    </p>
                    <p className="text-sm text-gray-600"><strong>Duración:</strong> 25-30 minutos</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold mb-2">Desde la Torre Eiffel / Trocadéro</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Ruta:</strong> Línea 9 (dirección Pont de Sèvres) → Estación Michel-Ange Molitor, cambio a Línea 10 (dirección Boulogne) → Porte d'Auteuil
                    </p>
                    <p className="text-sm text-gray-600"><strong>Duración:</strong> 20-25 minutos</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold mb-2">Desde Gare du Nord / Gare de l'Est</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Ruta:</strong> Línea 4 (dirección Mairie de Montrouge) → Estación Odéon, cambio a Línea 10 (dirección Boulogne) → Porte d'Auteuil
                    </p>
                    <p className="text-sm text-gray-600"><strong>Duración:</strong> 40-45 minutos</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold mb-2">Desde Montmartre / Pigalle</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Ruta:</strong> Línea 12 (dirección Mairie d'Issy) → Estación Pasteur, cambio a Línea 6 (dirección Nation) → La Motte-Picquet Grenelle, cambio a Línea 10 (dirección Boulogne) → Porte d'Auteuil
                    </p>
                    <p className="text-sm text-gray-600"><strong>Duración:</strong> 45-50 minutos</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold mb-2">Desde Le Marais / Bastilla</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Ruta:</strong> Línea 1 (dirección La Défense) → Estación Boulogne / Pont de Saint-Cloud, cambio a Línea 10 (dirección Gare d'Austerlitz) → Porte d'Auteuil
                    </p>
                    <p className="text-sm text-gray-600"><strong>Duración:</strong> 45-50 minutos</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Estación Alternativa: Michel-Ange Molitor</h3>
                <p className="text-gray-700 mb-4">
                  También en la Línea 10, esta estación está a unos 10-12 minutos a pie de Roland Garros. Puede ser útil si Porte d'Auteuil está muy concurrida.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Consejo:</strong> Durante las horas pico del torneo (especialmente antes de las sesiones de tarde), Porte d'Auteuil puede estar muy llena. Michel-Ange Molitor suele tener menos gente.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Información Práctica del Metro</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Frecuencia:</strong> Durante Roland Garros, los metros en la Línea 10 circulan cada 2-5 minutos en horas pico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Horario:</strong> El metro de París funciona de 5:30 AM a 1:15 AM (2:15 AM los viernes y sábados)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Tickets:</strong> Billete sencillo (€2.10), carnet de 10 (€16.90), o pase Navigo día (€8.45 zonas 1-2)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Accesibilidad:</strong> Porte d'Auteuil NO tiene ascensor. Si necesitas acceso sin escaleras, consulta alternativas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Tiempo de llegada:</strong> Planifica llegar 60-90 minutos antes del inicio de la sesión</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autobuses */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Autobuses Públicos
            </h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-6">
                Varias líneas de autobús llegan cerca de Roland Garros. Son una buena alternativa si prefieres viajar en superficie y disfrutar de las vistas de París, aunque suelen ser más lentos que el metro debido al tráfico.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-bold text-lg mb-2">Línea 22</h3>
                  <p className="text-gray-700 mb-1">
                    <strong>Parada:</strong> Stade Roland Garros (parada directa)
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Recorrido:</strong> Conecta Gare Saint-Lazare con el estadio, pasando por la Torre Eiffel
                  </p>
                  <p className="text-sm text-gray-600">Esta es la línea más conveniente en autobús</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-bold text-lg mb-2">Línea 32</h3>
                  <p className="text-gray-700 mb-1">
                    <strong>Parada:</strong> Porte d'Auteuil
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Recorrido:</strong> Desde Gare de l'Est hacia el oeste de París
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-bold text-lg mb-2">Línea 52</h3>
                  <p className="text-gray-700 mb-1">
                    <strong>Parada:</strong> Porte d'Auteuil
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Recorrido:</strong> Desde Opéra hacia el sur-oeste
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-bold text-lg mb-2">Línea PC1</h3>
                  <p className="text-gray-700 mb-1">
                    <strong>Parada:</strong> Porte d'Auteuil
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Recorrido:</strong> Circular que rodea París (Petite Ceinture)
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm font-bold mb-2">Consejo sobre Autobuses</p>
                <p className="text-sm text-gray-700">
                  Durante el torneo, el tráfico aumenta significativamente alrededor del estadio. Los autobuses pueden sufrir retrasos de 15-30 minutos en horas pico. El metro es generalmente más confiable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desde Aeropuertos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Desde los Aeropuertos
            </h2>

            {/* Charles de Gaulle */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">✈️</span>
                <h3 className="text-2xl font-bold text-gray-900">Aeropuerto Charles de Gaulle (CDG)</h3>
              </div>

              <p className="text-gray-700 mb-6">
                El aeropuerto principal de París está a unos 35-40 km al noreste de Roland Garros. Tienes varias opciones para llegar:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-lg mb-3">Opción 1: RER B + Metro (Más Económica)</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-3">
                    <li>Toma el RER B desde CDG hacia París (dirección Robinson o Saint-Rémy-lès-Chevreuse)</li>
                    <li>Baja en Gare du Nord o Châtelet-Les Halles</li>
                    <li>Transborda a la Línea 4 del metro (dirección Mairie de Montrouge)</li>
                    <li>Baja en Odéon y cambia a Línea 10 (dirección Boulogne)</li>
                    <li>Baja en Porte d'Auteuil</li>
                  </ol>
                  <p className="text-sm text-gray-600 mb-1"><strong>Duración:</strong> 90-120 minutos</p>
                  <p className="text-sm text-gray-600"><strong>Coste:</strong> €11.45 (RER B + metro)</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-lg mb-3">Opción 2: RoissyBus + Metro</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-3">
                    <li>Toma el RoissyBus desde CDG a Opéra (sale cada 15-20 minutos)</li>
                    <li>Desde Opéra, toma el metro Línea 8 hacia Balard</li>
                    <li>Baja en La Motte-Picquet Grenelle</li>
                    <li>Cambia a Línea 10 (dirección Boulogne)</li>
                    <li>Baja en Porte d'Auteuil</li>
                  </ol>
                  <p className="text-sm text-gray-600 mb-1"><strong>Duración:</strong> 90-110 minutos</p>
                  <p className="text-sm text-gray-600"><strong>Coste:</strong> €16.60 (RoissyBus) + €2.10 (metro)</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-lg mb-3">Opción 3: Taxi o Uber (Más Cómoda)</h4>
                  <p className="text-gray-700 mb-3">
                    Taxi directo desde CDG a Roland Garros. Tarifa fija disponible hasta el centro de París, luego se suma el trayecto adicional.
                  </p>
                  <p className="text-sm text-gray-600 mb-1"><strong>Duración:</strong> 45-75 minutos (según tráfico)</p>
                  <p className="text-sm text-gray-600"><strong>Coste:</strong> €70-90</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-lg mb-3">Opción 4: Traslado Privado</h4>
                  <p className="text-gray-700 mb-3">
                    Reserva anticipada de coche privado con conductor. Más caro pero sin preocupaciones.
                  </p>
                  <p className="text-sm text-gray-600 mb-1"><strong>Duración:</strong> 45-75 minutos</p>
                  <p className="text-sm text-gray-600"><strong>Coste:</strong> €90-130 (según servicio)</p>
                </div>
              </div>
            </div>

            {/* Orly */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">✈️</span>
                <h3 className="text-2xl font-bold text-gray-900">Aeropuerto de Orly (ORY)</h3>
              </div>

              <p className="text-gray-700 mb-6">
                Orly está más cerca de Roland Garros (18-20 km al sur), lo que hace el trayecto más corto y económico.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-lg mb-3">Opción 1: OrlyBus + Metro (Recomendada)</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-3">
                    <li>Toma el OrlyBus desde Orly a Denfert-Rochereau (cada 10-15 minutos)</li>
                    <li>En Denfert-Rochereau, toma metro Línea 4 (dirección Porte de Clignancourt)</li>
                    <li>Baja en Odéon y cambia a Línea 10 (dirección Boulogne)</li>
                    <li>Baja en Porte d'Auteuil</li>
                  </ol>
                  <p className="text-sm text-gray-600 mb-1"><strong>Duración:</strong> 60-75 minutos</p>
                  <p className="text-sm text-gray-600"><strong>Coste:</strong> €11.50 (OrlyBus) + €2.10 (metro)</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-lg mb-3">Opción 2: Tranvía T7 + Metro</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-3">
                    <li>Toma el tranvía T7 desde Orly a Villejuif-Louis Aragon</li>
                    <li>Cambia a metro Línea 7 (dirección La Courneuve)</li>
                    <li>Baja en Opéra y toma Línea 8 (dirección Balard)</li>
                    <li>En La Motte-Picquet Grenelle, cambia a Línea 10</li>
                    <li>Baja en Porte d'Auteuil</li>
                  </ol>
                  <p className="text-sm text-gray-600 mb-1"><strong>Duración:</strong> 70-90 minutos</p>
                  <p className="text-sm text-gray-600"><strong>Coste:</strong> €2.10 (tranvía + metro todo incluido)</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-lg mb-3">Opción 3: Taxi o Uber</h4>
                  <p className="text-gray-700 mb-3">
                    Por la menor distancia, es más asequible que desde CDG.
                  </p>
                  <p className="text-sm text-gray-600 mb-1"><strong>Duración:</strong> 30-50 minutos (según tráfico)</p>
                  <p className="text-sm text-gray-600"><strong>Coste:</strong> €40-60</p>
                </div>
              </div>

              <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4">
                <p className="text-sm font-bold mb-2">Recomendación para Aeropuertos</p>
                <p className="text-sm text-gray-700">
                  Si tienes equipaje pesado o viajas en grupo (3-4 personas), el taxi/Uber puede ser más conveniente y no mucho más caro. Para viajeros solos o en pareja, el transporte público es eficiente y mucho más económico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* En Coche */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              En Coche y Parking
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="font-bold text-lg mb-3 text-red-900">No Recomendado</h3>
              <p className="text-gray-700">
                <strong>Importante:</strong> NO se recomienda llegar en coche a Roland Garros. El tráfico en París es denso, el área alrededor del estadio se congestiona durante el torneo, y el parking es extremadamente limitado y caro.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Si Debes Venir en Coche</h3>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700">
                  <strong>Dirección GPS:</strong> 2 Avenue Gordon Bennett, 75016 Paris
                </p>
                <p className="text-gray-700">
                  <strong>Autopistas de acceso:</strong> A13 (desde el oeste), Périphérique (salida Porte d'Auteuil o Porte de Saint-Cloud)
                </p>
              </div>

              <h4 className="font-bold text-lg mb-3">Opciones de Parking:</h4>

              <div className="space-y-4">
                <div className="border-l-4 border-gray-400 pl-4">
                  <h5 className="font-bold mb-2">Parking del Estadio</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Capacidad muy limitada (solo para VIP y accesos especiales)</li>
                    <li>• Reserva anticipada obligatoria</li>
                    <li>• Coste: €40-60 por día</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-4">
                  <h5 className="font-bold mb-2">Parkings Públicos Cercanos</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Parking Porte d'Auteuil (municipal): €3-4/hora, máx €25/día</li>
                    <li>• Parking Exelmans: A 15 min a pie, €2.50/hora</li>
                    <li>• Parking Michel-Ange: A 12 min a pie, €3/hora</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-2">
                    Todos estos parkings se llenan rápidamente durante el torneo. Llegar antes de las 9:00 AM es esencial.
                  </p>
                </div>

                <div className="border-l-4 border-gray-400 pl-4">
                  <h5 className="font-bold mb-2">Parking en Estaciones de Metro</h5>
                  <p className="text-sm text-gray-700 mb-2">
                    Una alternativa inteligente es aparcar en una estación de metro alejada del centro y completar el trayecto en metro (Park & Ride).
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Parking Pont de Sèvres (Línea 9): €5.90/día</li>
                    <li>• Parking Mairie d'Issy (Línea 12): €6/día</li>
                    <li>• Luego toma el metro hasta Porte d'Auteuil</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm font-bold mb-2">Consejo Importante</p>
                <p className="text-sm text-gray-700">
                  El sistema Park & Ride es tu mejor opción si debes usar coche. Evita el estrés del tráfico parisino y del parking cerca del estadio, además de ser mucho más económico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Taxi y VTC */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Taxi, Uber y VTC (Vehículos de Transporte con Conductor)
            </h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-6">
                Los taxis y servicios VTC como Uber son convenientes pero relativamente caros para uso diario. Son ideales para grupos, si tienes equipaje, o para el último día cuando regresas directo al aeropuerto.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3">Tarifas Aproximadas desde:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between"><span>Centro de París (Louvre)</span><span className="font-bold">€15-25</span></li>
                    <li className="flex justify-between"><span>Torre Eiffel</span><span className="font-bold">€12-18</span></li>
                    <li className="flex justify-between"><span>Montmartre</span><span className="font-bold">€25-35</span></li>
                    <li className="flex justify-between"><span>Gare du Nord</span><span className="font-bold">€30-40</span></li>
                    <li className="flex justify-between"><span>Aeropuerto CDG</span><span className="font-bold">€70-90</span></li>
                    <li className="flex justify-between"><span>Aeropuerto Orly</span><span className="font-bold">€40-60</span></li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3">Servicios Disponibles:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Taxis oficiales:</strong> Luz verde en el techo, tarifas reguladas</li>
                    <li>• <strong>Uber:</strong> UberX, Comfort, Green (eléctricos)</li>
                    <li>• <strong>Bolt:</strong> Similar a Uber, a veces más económico</li>
                    <li>• <strong>G7:</strong> Compañía francesa de taxis, app disponible</li>
                    <li>• <strong>Free Now:</strong> App de taxis y VTC</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm font-bold mb-2">Punto de Bajada y Recogida</p>
                  <p className="text-sm text-gray-700">
                    Hay una zona específica para taxis/VTC cerca de la entrada principal de Roland Garros. Los conductores la conocen bien. Para la recogida después del torneo, es mejor alejarse un poco del estadio para evitar el congestionamiento (10-15 minutos a pie hacia Porte d'Auteuil).
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-sm font-bold mb-2">Precios Variables</p>
                  <p className="text-sm text-gray-700">
                    Durante Roland Garros y en horas pico, los precios de Uber/Bolt pueden aumentar significativamente (2-3x) debido a la alta demanda. Los taxis oficiales mantienen tarifas reguladas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consejos Finales */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Consejos Finales para tu Traslado
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-blue-900">Compra tu Pase de Transporte</h3>
                <p className="text-gray-700 mb-3">
                  Si vas a usar mucho el transporte público, considera:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Navigo Easy: Tarjeta recargable reutilizable</li>
                  <li>• Paris Visite: 1-5 días ilimitados (€13.55-29.40)</li>
                  <li>• Navigo Semaine: Pase semanal (€30.75 zonas 1-5)</li>
                  <li>• Billetes sencillos: Solo si haces pocos viajes</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-green-900">Descarga Apps Útiles</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Citymapper:</strong> Mejor app para rutas en París</li>
                  <li>• <strong>RATP:</strong> App oficial del transporte público</li>
                  <li>• <strong>Google Maps:</strong> Excelente para planificar rutas</li>
                  <li>• <strong>Uber/Bolt:</strong> Para VTC cuando lo necesites</li>
                  <li>• <strong>G7:</strong> Para taxis oficiales</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-orange-900">Planifica tu Salida</h3>
                <p className="text-gray-700 text-sm">
                  Después de partidos importantes (especialmente finales), decenas de miles de personas salen simultáneamente. El metro Porte d'Auteuil puede tener colas de 30-45 minutos. Alternativas:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• Espera 30-45 minutos en el área de Roland Garros</li>
                  <li>• Camina a Michel-Ange Molitor (menos gente)</li>
                  <li>• Toma un autobús (línea 22)</li>
                  <li>• Camina a una zona más alejada para pedir taxi/Uber</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-purple-900">Tiempo de Llegada Recomendado</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Sesión de mañana (11:00):</strong> Llegar a las 9:30-10:00</li>
                  <li>• <strong>Sesión de tarde (14:00-15:00):</strong> Llegar a las 12:30-13:00</li>
                  <li>• <strong>Partidos de noche:</strong> Llegar al menos 90 min antes</li>
                  <li>• <strong>Finales:</strong> Llegar 2-3 horas antes por seguridad extra</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de Referencia */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Información de Ubicación
              </h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Dirección completa:</strong> Stade Roland Garros, 2 Avenue Gordon Bennett, 75016 Paris, Francia</p>
                <p><strong>Distrito:</strong> 16º arrondissement (Auteuil)</p>
                <p><strong>Coordenadas GPS:</strong> 48.8464° N, 2.2514° E</p>
                <p><strong>Estación de metro más cercana:</strong> Porte d'Auteuil (Línea 10) - 5 min a pie</p>
                <p><strong>Segunda opción metro:</strong> Michel-Ange Molitor (Línea 10/9) - 12 min a pie</p>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm font-bold mb-2">Consejo de Navegación</p>
                <p className="text-sm text-gray-700">
                  Durante Roland Garros, verás señalización especial del torneo desde las estaciones de metro. Simplemente sigue las flechas y los logos de Roland Garros, o sigue a la multitud de personas con raquetas, viseras y camisetas de tenis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Continúa Planificando tu Visita
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/guia-completa" className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div className="text-2xl mb-2">📋</div>
                <h3 className="font-bold mb-1">Guía Completa</h3>
                <p className="text-sm text-gray-600">Volver al índice principal</p>
              </Link>
              <Link href="/guia-completa/que-llevar" className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div className="text-2xl mb-2">🎒</div>
                <h3 className="font-bold mb-1">Qué Llevar</h3>
                <p className="text-sm text-gray-600">Lista completa de esenciales</p>
              </Link>
              <Link href="/guia-completa/primera-vez" className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div className="text-2xl mb-2">⭐</div>
                <h3 className="font-bold mb-1">Guía Primerizos</h3>
                <p className="text-sm text-gray-600">Consejos para tu primera visita</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
