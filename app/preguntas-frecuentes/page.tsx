import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes Roland Garros 2026 - Todo lo que Necesitas Saber',
  description: 'Más de 40 preguntas frecuentes sobre Roland Garros 2026: entradas, fechas, precios, cómo llegar, qué llevar, historia y todo lo que necesitas saber para tu visita al French Open.',
  keywords: [
    'preguntas frecuentes roland garros',
    'cuando es roland garros',
    'cuanto cuestan entradas roland garros',
    'donde se compran entradas roland garros',
    'como llegar roland garros',
    'que es el ground pass',
    'roland garros faq',
    'dudas roland garros',
    'información roland garros',
    'tierra batida roland garros',
    'donde juegan roland garros',
    'parking roland garros',
    'que llevar roland garros',
    'autografos roland garros',
    'nadal roland garros titulos'
  ],
  openGraph: {
    title: 'Preguntas Frecuentes Roland Garros 2026 - Todas tus Dudas Resueltas',
    description: '40+ respuestas detalladas sobre Roland Garros 2026: entradas, logística, historia y consejos prácticos',
    type: 'article',
  }
}

const faqData = [
  // GENERAL
  {
    question: '¿Qué es Roland Garros?',
    answer: 'Roland Garros es el torneo de tenis más prestigioso disputado en tierra batida y uno de los cuatro torneos de Grand Slam del circuito profesional. También conocido como el French Open o Les Internationaux de France, se celebra anualmente en París y representa el segundo Grand Slam de la temporada. El torneo es famoso por su superficie única de tierra batida roja, que hace que el juego sea más lento y los puntos más largos, requiriendo una combinación excepcional de resistencia física, habilidad técnica y fortaleza mental. El estadio principal, Philippe-Chatrier, puede albergar a más de 15,000 espectadores y cuenta con un techo retráctil inaugurado en 2020. Roland Garros es el único Grand Slam que aún no ha adoptado el tie-break en el set decisivo hasta 6-6, lo que ha dado lugar a algunos de los partidos más épicos de la historia del tenis.'
  },
  {
    question: '¿Cuándo es Roland Garros 2026?',
    answer: 'Roland Garros 2026 se celebrará desde el domingo 24 de mayo hasta el domingo 7 de junio de 2026, manteniendo su tradicional ventana de dos semanas. El torneo comienza con las rondas de clasificación del 18 al 22 de mayo, donde los jugadores compiten por las últimas plazas en el cuadro principal. La primera semana (24-30 de mayo) incluye las primeras tres rondas tanto en categoría individual como dobles, mientras que la segunda semana (31 de mayo-7 de junio) presenta los octavos de final, cuartos de final, semifinales y finales. Las finales de dobles se disputan el sábado 6 de junio, la final femenina individual el sábado también, y la final masculina individual cierra el torneo el domingo 7 de junio. Es importante planificar con anticipación ya que París suele estar muy concurrida durante este período, y tanto los hoteles como las entradas se agotan rápidamente.'
  },
  {
    question: '¿Dónde se juega Roland Garros?',
    answer: 'Roland Garros se juega en el Stade Roland-Garros, ubicado en el elegante distrito 16 de París, específicamente en el límite occidental de la ciudad cerca del Bois de Boulogne. La dirección exacta es 2 Avenue Gordon Bennett, 75016 París. El complejo ocupa aproximadamente 12 hectáreas e incluye 18 pistas de tenis, siendo las tres principales Philippe-Chatrier (15,225 asientos con techo retráctil), Suzanne-Lenglen (9,829 asientos) y Simonne-Mathieu (5,000 asientos, semi-subterránea con un diseño único integrado en los invernaderos históricos). El estadio está estratégicamente ubicado cerca del parque más grande de París y es accesible mediante transporte público, con la estación de metro Porte d\'Auteuil (línea 10) a solo 400 metros. La zona circundante es mayormente residencial y muy tranquila, lo que contrasta con la atmósfera vibrante y festiva que se crea dentro del recinto durante el torneo.'
  },
  {
    question: '¿Por qué se llama Roland Garros?',
    answer: 'El torneo lleva el nombre de Roland Garros (1888-1918), un pionero de la aviación francesa y héroe de la Primera Guerra Mundial. Aunque nunca jugó al tenis profesionalmente, Roland Garros fue un aviador legendario que realizó la primera travesía aérea del Mar Mediterráneo en 1913 y desarrolló un sistema revolucionario que permitía disparar ametralladoras a través de las hélices de los aviones. Murió en combate el 5 de octubre de 1918, apenas un mes antes del armisticio que puso fin a la guerra. En 1928, cuando Francia ganó la Copa Davis y necesitaba construir un nuevo estadio para defender el título, el Stade Français (club de tenis) decidió honrar la memoria de Roland Garros, quien había sido miembro del club, dando su nombre al nuevo estadio. Esta decisión vinculó para siempre el nombre del aviador con el tenis, creando una de las asociaciones más únicas en el deporte mundial. El estadio se inauguró en mayo de 1928 y desde entonces ha sido el hogar permanente del French Open.'
  },
  {
    question: '¿Qué hace especial a Roland Garros?',
    answer: 'Roland Garros es único entre los Grand Slams por múltiples razones. La característica más distintiva es su superficie de tierra batida roja, compuesta por ladrillo triturado, que crea un juego completamente diferente al de las superficies duras o de césped. La tierra batida ralentiza la pelota y produce un bote alto, lo que favorece a los jugadores con gran resistencia física y habilidad para construir puntos largos. Esta superficie ha dado lugar a algunas de las mayores rivalidades del tenis, especialmente entre Rafael Nadal y sus rivales, con el español ganando un récord de 14 títulos en París. El torneo también se distingue por su atmósfera única: el público parisino es conocido por ser educado pero exigente, y el complejo incluye restaurantes elegantes donde los espectadores pueden disfrutar de gastronomía francesa mientras ven tenis. Además, Roland Garros es el único Grand Slam que hasta recientemente no tenía techo retráctil en su pista principal, y aún mantiene tradiciones como no usar tie-break en el set final hasta 6-6. El color naranja-rojizo distintivo de la tierra batida, combinado con el verde intenso de la vegetación circundante y la arquitectura Art Deco del estadio, crea una estética visual inmediatamente reconocible.'
  },
  {
    question: '¿Cuál es la diferencia entre Roland Garros y el French Open?',
    answer: 'Roland Garros y French Open son dos nombres para el mismo torneo, aunque técnicamente tienen significados ligeramente diferentes. "French Open" es el nombre oficial del torneo en inglés y se refiere al campeonato en sí, mientras que "Roland Garros" es el nombre del estadio donde se juega. Sin embargo, en la práctica, ambos términos se usan indistintamente para referirse al torneo. En Francia y en países de habla hispana, es más común usar "Roland Garros", mientras que en países angloparlantes se prefiere "French Open". El nombre oficial completo del torneo es "Les Internationaux de France de Tennis" (Los Internacionales de Francia de Tenis), pero casi nadie lo llama así. Independientemente del nombre que uses, te estarás refiriendo al prestigioso Grand Slam de tierra batida que se celebra cada mayo y junio en París. Los franceses en particular tienen una fuerte preferencia por "Roland Garros" ya que honra a uno de sus héroes nacionales.'
  },

  // ENTRADAS
  {
    question: '¿Cuándo salen a la venta las entradas para Roland Garros 2026?',
    answer: 'Las entradas oficiales para Roland Garros 2026 se pondrán a la venta en marzo de 2026, siguiendo el patrón tradicional de ventas del torneo. El proceso de venta se divide en varias fases: primero, hay un período de lotería o sorteo (generalmente en febrero-marzo) para las entradas de las pistas principales en las rondas finales, que son las más demandadas. Los fans deben registrarse en la página oficial del torneo (rolandgarros.com) durante la ventana de inscripción para participar en este sorteo. Después del sorteo, las entradas restantes se ponen a la venta general, normalmente en marzo-abril. Es crucial registrarse en el sitio web oficial con anticipación y activar las notificaciones para recibir alertas sobre las fechas exactas de venta. Las entradas para la primera semana suelen estar disponibles hasta más cerca del torneo, pero las de la segunda semana (especialmente semifinales y finales) se agotan en minutos. Los ground passes, que dan acceso a todas las pistas excepto las tres principales, generalmente están disponibles hasta el día del torneo. Recomendamos planificar con al menos 3-4 meses de anticipación para asegurar las mejores opciones.'
  },
  {
    question: '¿Dónde se compran las entradas oficiales de Roland Garros?',
    answer: 'Las entradas oficiales de Roland Garros solo se venden a través del sitio web oficial del torneo en rolandgarros.com. Este es el ÚNICO canal oficial y autorizado para la venta de entradas directas. La Federación Francesa de Tenis (FFT), organizadora del torneo, es muy estricta en este aspecto y advierte repetidamente contra la compra de entradas en sitios de reventa no autorizados, ya que existe un alto riesgo de fraude y las entradas pueden ser invalidadas. Además del sitio web oficial, algunos paquetes de hospitalidad y experiencias VIP se venden a través de agencias oficialmente autorizadas, pero estas deben estar listadas en el sitio web de Roland Garros. Para comprar entradas, necesitarás crear una cuenta en el sitio oficial, proporcionar información personal (ya que las entradas son nominativas) y tener una tarjeta de crédito válida. El sitio web está disponible en varios idiomas, incluido español, lo que facilita el proceso de compra. Desconfía de cualquier otro sitio web, especialmente aquellos que ofrecen entradas a precios significativamente más altos (revendedores) o más bajos (probablemente fraude) que los oficiales.'
  },
  {
    question: '¿Cuánto cuestan las entradas de Roland Garros 2026?',
    answer: 'Los precios de las entradas para Roland Garros 2026 variarán significativamente según la fecha, el tipo de entrada y la ubicación del asiento. Basándonos en años anteriores, aquí hay una guía aproximada: El ground pass (acceso general sin asiento asignado) cuesta entre 35-50€ para la primera semana, aumentando a 60-80€ para la segunda semana. Las entradas individuales para pistas numeradas secundarias (pistas 6-14) comienzan desde aproximadamente 45€ en primera ronda y pueden llegar hasta 150€ para cuartos de final. Para la pista Simonne-Mathieu, espera pagar 60-100€ en primera semana y 120-200€ en segunda semana. La pista Suzanne-Lenglen va desde 80€ en primera ronda hasta 250€ para semifinales. La pista principal Philippe-Chatrier es la más cara: 150-200€ para primeras rondas, 300-400€ para octavos y cuartos de final, 450-600€ para semifinales, y 300-500€ para la final (dependiendo de la categoría del asiento, que puede llegar hasta más de 800€). Los niños menores de 12 años suelen recibir descuentos del 50% en la mayoría de categorías. Los paquetes y experiencias VIP pueden costar desde 500€ hasta varios miles de euros, incluyendo comida, bebidas y acceso a áreas exclusivas.'
  },
  {
    question: '¿Qué es el ground pass de Roland Garros?',
    answer: 'El ground pass (también llamado "billet terrain" en francés) es el tipo de entrada más popular y económico para Roland Garros. Este pase te da acceso general al complejo del torneo y te permite entrar a todas las pistas exteriores (pistas 6-14), donde se juegan simultáneamente decenas de partidos durante el día. Con un ground pass, puedes ver tenis de primer nivel durante todo el día, ya que incluso en las primeras rondas juegan los mejores tenistas del mundo en estas pistas. La belleza del ground pass es la libertad que ofrece: puedes moverte libremente entre pistas, crear tu propio itinerario basado en tus jugadores favoritos, y experimentar la atmósfera única de las pistas más pequeñas e íntimas donde puedes estar muy cerca de la acción. También tienes acceso a todas las áreas comerciales, restaurantes, tiendas oficiales y zonas de práctica. Lo que NO incluye es el acceso a las tres pistas principales (Philippe-Chatrier, Suzanne-Lenglen y Simonne-Mathieu), aunque puedes ver estos partidos en pantallas gigantes ubicadas por todo el complejo. Durante la primera semana, cuando hay muchos partidos simultáneos, el ground pass ofrece una relación calidad-precio excepcional y es la opción preferida por los verdaderos aficionados al tenis.'
  },
  {
    question: '¿Vale la pena comprar el ground pass?',
    answer: 'Absolutamente sí, especialmente durante la primera semana del torneo. El ground pass ofrece un valor excepcional por varias razones. Primero, puedes ver fácilmente 6-8 partidos completos en un solo día, moviéndote entre las diferentes pistas exteriores según tus preferencias. Segundo, la experiencia en las pistas pequeñas es increíblemente íntima: puedes estar a pocos metros de jugadores top-10 del mundo y realmente apreciar su habilidad y atletismo. Tercero, es mucho más económico que las entradas para pistas principales, pero la calidad del tenis es igual de alta, especialmente en primera y segunda ronda cuando todos los grandes nombres están jugando. Cuarto, tienes la flexibilidad de crear tu propia experiencia sin estar atado a un solo partido o pista. Muchos aficionados experimentados prefieren el ground pass porque les permite sumergirse completamente en el ambiente del torneo, explorando todo el complejo, probando la comida francesa, comprando merchandising, y sintiendo la energía única de Roland Garros. La única desventaja es que no puedes acceder a las tres pistas principales, pero para los fanáticos del tenis que quieren maximizar la cantidad de tenis de calidad que ven, el ground pass es imbatible. Es particularmente valioso los primeros 3-4 días del torneo cuando hay más de 100 jugadores compitiendo simultáneamente.'
  },
  {
    question: '¿Las entradas de Roland Garros son nominativas?',
    answer: 'Sí, todas las entradas de Roland Garros son estrictamente nominativas, lo que significa que están asociadas a un nombre específico y requieren identificación para el acceso. Al comprar tu entrada, deberás proporcionar el nombre completo de cada persona que asistirá, exactamente como aparece en su documento de identidad (pasaporte o DNI). En la entrada al estadio, el personal de seguridad puede solicitar ver tu documento de identidad para verificar que coincida con el nombre en la entrada. Esta política fue implementada para combatir la reventa ilegal de entradas y garantizar que las entradas lleguen a verdaderos fanáticos del tenis en lugar de revendedores especulativos. Si compras múltiples entradas (por ejemplo, para familia o amigos), deberás proporcionar los nombres completos de todas las personas en el momento de la compra. Es importante ser preciso con los nombres ya que errores tipográficos pueden causar problemas en la entrada. Si por alguna razón no puedes asistir después de comprar una entrada, existe un sistema oficial de reventa en el sitio web de Roland Garros donde puedes poner tu entrada a la venta al precio original, permitiendo que otro fan la compre legalmente. No intentes transferir o vender tu entrada fuera de este sistema oficial, ya que las entradas vendidas ilegalmente pueden ser canceladas y no permitirán el acceso.'
  },
  {
    question: '¿Se pueden revender las entradas de Roland Garros?',
    answer: 'La reventa de entradas de Roland Garros solo está permitida a través del sistema oficial de reventa en el sitio web del torneo. Cualquier otra forma de reventa es estrictamente ilegal y las entradas vendidas o compradas fuera del canal oficial pueden ser canceladas sin reembolso. El sistema de reventa oficial funciona así: si compraste una entrada pero no puedes asistir, puedes ponerla a la venta a través de tu cuenta en rolandgarros.com. La entrada se lista automáticamente al precio original que pagaste (no puedes cobrar más) y cuando se vende, recibes un reembolso del 100% del precio de la entrada. El comprador paga el precio original más una pequeña tarifa de gestión. Este sistema beneficia a todos: los vendedores recuperan su dinero, los compradores obtienen entradas legítimas a precio oficial, y el torneo evita el mercado negro. La reventa no oficial, ya sea en la calle, en sitios web de terceros como StubHub o Viagogo, o entre particulares, está prohibida por los términos y condiciones del torneo. Las entradas compradas en el mercado secundario pueden ser detectadas y canceladas en cualquier momento, incluso cuando ya estés en la entrada del estadio. La FFT utiliza tecnología avanzada para rastrear y cancelar entradas revendidas ilegalmente. Si ves entradas disponibles en sitios de reventa no oficiales, especialmente a precios inflados, evítalos completamente: el riesgo de fraude es extremadamente alto.'
  },
  {
    question: '¿Hay descuentos en las entradas para niños?',
    answer: 'Sí, Roland Garros ofrece descuentos significativos para niños menores de 12 años. Generalmente, los niños de esta edad reciben un 50% de descuento en la mayoría de categorías de entradas, incluyendo ground passes y entradas para pistas numeradas y pistas principales. Esto hace que Roland Garros sea relativamente accesible para familias que quieren introducir a sus hijos al tenis profesional. Los niños menores de 4 años normalmente entran gratis pero no tienen derecho a un asiento individual; deben sentarse en el regazo de un adulto. Para aprovechar el descuento infantil, deberás demostrar la edad del niño en la entrada, así que lleva un documento de identidad o pasaporte del niño. Es importante tener en cuenta que durante las rondas finales (semifinales y finales), puede haber restricciones o descuentos diferentes para niños, así que verifica los detalles específicos al comprar. Roland Garros también organiza actividades especialmente diseñadas para niños dentro del complejo, incluyendo áreas de juego temáticas, sesiones de fotos con las copas, y a veces clínicas de tenis gratuitas. La atmósfera familiar durante la primera semana del torneo, combinada con los precios accesibles para niños, hace que sea una excelente salida familiar.'
  },
  {
    question: '¿Qué pasa con las entradas si llueve en Roland Garros?',
    answer: 'La política de reembolso por lluvia en Roland Garros depende de cuánto tenis se juega durante el día. Desde 2020, la pista principal Philippe-Chatrier tiene un techo retráctil, lo que garantiza que los partidos programados allí se jugarán independientemente del clima. Sin embargo, las otras pistas (Suzanne-Lenglen, Simonne-Mathieu y todas las pistas exteriores) siguen expuestas a los elementos. Si posees una entrada para Philippe-Chatrier, tu partido se jugará sin importar la lluvia. Para las demás pistas, si la lluvia interrumpe el juego, los organizadores harán todo lo posible para reprogramar los partidos en el mismo día cuando mejore el clima. En cuanto a reembolsos: si no se juega ningún tenis en la pista para la cual compraste entrada (debido a lluvia intensa todo el día), generalmente tienes derecho a un reembolso parcial o completo, o a un crédito para otro día del torneo. Sin embargo, si se juega aunque sea un set, normalmente no hay reembolso. Para los ground passes, si se juega algo de tenis en cualquier pista exterior, no hay reembolso. La política exacta se detalla en los términos y condiciones al comprar tu entrada. Consejo práctico: el clima en París a finales de mayo y principios de junio puede ser variable, así que lleva siempre un impermeable o paraguas plegable, y considera comprar entradas para Philippe-Chatrier si quieres garantía absoluta de que verás tenis.'
  },
  {
    question: '¿Cuál es el mejor tipo de entrada para comprar?',
    answer: 'La "mejor" entrada depende completamente de tus prioridades, presupuesto y qué tipo de experiencia buscas. Para el mejor valor y máximo tenis, el ground pass durante la primera semana es imbatible: por 35-50€ puedes ver tenis de élite todo el día en múltiples pistas. Si quieres garantizar ver a un jugador específico o estar en el ambiente de una pista principal, entonces necesitas una entrada individual para Philippe-Chatrier, Suzanne-Lenglen o Simonne-Mathieu. Para primera experiencia o aficionados casuales, recomendamos: ground pass durante días 2-4 del torneo (martes-jueves de la primera semana) cuando hay máxima acción y precios bajos. Para verdaderos fanáticos del tenis: entrada para Suzanne-Lenglen o Simonne-Mathieu durante cuartos de final ofrece tenis increíble a precio más razonable que Philippe-Chatrier. Para una ocasión especial o experiencia única: semifinal o final en Philippe-Chatrier, aunque serán caras (300-600€+), la atmósfera es incomparable. Si tu presupuesto es limitado: ground pass siempre, proporcionan experiencia completa de Roland Garros a fracción del precio. Si quieres ver a un jugador específico: verifica el orden de juego cuando se anuncie (generalmente la noche anterior) y compra entrada para esa pista específica. Un enfoque popular es combinar: un ground pass un día y una entrada de pista principal otro día para experimentar ambos aspectos del torneo.'
  },
  {
    question: '¿Puedo comprar entradas en la puerta el día del evento?',
    answer: 'Sí, es posible comprar ground passes en la puerta el día del evento, pero solo durante la primera semana del torneo y principalmente en los primeros días (lunes a jueves). Estos se conocen como "billetes del día" y se venden en las taquillas del estadio desde temprano en la mañana, sujeto a disponibilidad. Sin embargo, hay varios factores importantes a considerar: primero, debes estar preparado para hacer cola, a veces durante varias horas, especialmente si quieres asegurar tu entrada. Las colas comienzan a formarse muy temprano (6-7 AM) en días populares. Segundo, solo se venden ground passes en la puerta, nunca entradas para las pistas principales, que deben comprarse con anticipación en línea. Tercero, la disponibilidad no está garantizada: en días con buen clima o cuando juegan estrellas importantes, los ground passes pueden agotarse. Cuarto, pagarás el precio completo sin descuentos. Para la segunda semana del torneo (octavos de final en adelante), raramente hay entradas disponibles en la puerta ya que la demanda es mucho mayor y el número de pistas en uso es menor. Mi recomendación: no arriesgues tu viaje a París esperando comprar en la puerta. Compra tus entradas en línea con anticipación para garantizar el acceso. Si estás en París y decides improvisar, intenta los primeros días de la semana durante la primera semana para mejor probabilidad de conseguir ground passes en la puerta.'
  },
  {
    question: '¿Qué son los paquetes de hospitalidad de Roland Garros?',
    answer: 'Los paquetes de hospitalidad son experiencias premium que combinan entradas de alta calidad con servicios exclusivos como comida gourmet, bebidas, acceso a lounges privados y, a veces, encuentros con leyendas del tenis. Estos paquetes son ofrecidos a través de proveedores oficialmente autorizados por Roland Garros y representan el nivel más lujoso de asistencia al torneo. Un paquete típico puede incluir: entrada en categoría premium para Philippe-Chatrier con excelentes vistas, acceso a un restaurante o suite privada con comida y bebidas ilimitadas (generalmente cocina francesa de alta calidad, champagne, vinos, etc.), servicio de conserjería, regalos de bienvenida, acceso a áreas VIP del estadio, y a veces parking reservado. Los precios varían enormemente, desde aproximadamente 500€ por persona para un paquete básico de hospitalidad hasta 5,000€+ para experiencias ultra-premium durante las finales. Algunos paquetes incluyen múltiples días, tours del estadio, sesiones de tenis con entrenadores profesionales, o incluso la oportunidad de caminar por las pistas. Estos paquetes son ideales para clientes corporativos, celebraciones especiales, o aficionados que quieren una experiencia verdaderamente memorable sin preocuparse por la logística. Si estás interesado, debes reservar con bastante anticipación (varios meses) ya que las plazas son muy limitadas. Verifica siempre que el proveedor esté oficialmente autorizado por Roland Garros para evitar fraudes.'
  },

  // ESTADIO
  {
    question: '¿Cuántas pistas de tenis tiene Roland Garros?',
    answer: 'El complejo de Roland Garros cuenta con 18 pistas de tenis en total, todas con superficie de tierra batida. Estas se dividen en tres categorías principales: las tres pistas principales con estadios permanentes (Philippe-Chatrier con 15,225 asientos, Suzanne-Lenglen con 9,829 asientos, y Simonne-Mathieu con 5,000 asientos), las pistas exteriores numeradas principales (pistas 6, 7, 8, 9, 10, 11, 12, 13 y 14) que tienen gradas temporales o permanentes con capacidades que varían desde 500 hasta 3,500 espectadores, y las pistas de entrenamiento y calentamiento utilizadas principalmente por los jugadores para practicar. Durante el torneo, las pistas exteriores numeradas son accesibles con el ground pass y son donde se juega la mayoría de los partidos de primera y segunda ronda. Estas pistas crean un ambiente increíblemente íntimo donde puedes estar muy cerca de la acción. El complejo también incluye instalaciones de entrenamiento de última generación, vestuarios, salas de prensa, y áreas comerciales. Desde la renovación importante completada entre 2018-2020, que incluyó la construcción de la nueva pista Simonne-Mathieu y la adición del techo retráctil a Philippe-Chatrier, Roland Garros se ha transformado en una de las instalaciones de tenis más modernas del mundo mientras mantiene su carácter histórico y tradición.'
  },
  {
    question: '¿Cuál es la pista principal de Roland Garros?',
    answer: 'La pista principal de Roland Garros es la Court Philippe-Chatrier, nombrada en honor al famoso tenista y administrador francés que fue tres veces campeón de Francia y capitán del equipo de Copa Davis. Esta pista icónica, inaugurada en su forma actual en 1928, ha sido testigo de algunos de los momentos más memorables en la historia del tenis. Con capacidad para 15,225 espectadores, es la pista más grande del complejo y donde se juegan todas las semifinales y finales individuales, así como los partidos más importantes de las rondas anteriores. En 2020, se completó una renovación masiva que agregó un techo retráctil, convirtiendo a Philippe-Chatrier en la última pista principal de Grand Slam en tener esta tecnología. El techo, compuesto por 11 vigas de acero que pesan 330 toneladas en total, puede cerrarse en aproximadamente 15 minutos y permite que el juego continúe independientemente del clima. La pista también cuenta con un sistema de iluminación LED de última generación instalado en 2022, permitiendo partidos nocturnos por primera vez en la historia de Roland Garros. La atmósfera en Philippe-Chatrier es eléctrica, especialmente durante partidos importantes, con el público francés famoso por su conocimiento del tenis y su apoyo apasionado. Los asientos ofrecen excelentes vistas desde prácticamente cualquier ubicación, aunque los más caros están en las tribunas centrales a la altura de la pista.'
  },
  {
    question: '¿Qué es la tierra batida y por qué es especial?',
    answer: 'La tierra batida, o "terre battue" en francés, es una superficie de tenis única compuesta por cinco capas diferentes: una base de piedra gruesa para drenaje, seguida de capas de piedra más fina, una capa de clínker (escoria), una capa de piedra caliza triturada, y finalmente la capa superior distintiva de ladrillo rojo triturado (aproximadamente 2mm de grosor) mezclado con polvo de piedra caliza blanca. Esta combinación crea una superficie que es fundamentalmente diferente a las pistas duras o de césped. Las características especiales de la tierra batida incluyen: el bote de la pelota es significativamente más lento y más alto debido a que la superficie granular absorbe parte del impacto, los puntos tienden a ser más largos ya que es más difícil ganar con golpes ganadores directos, el deslizamiento es posible y necesario (los jugadores desarrollan técnicas especiales de movimiento deslizándose hacia la pelota), el desgaste físico es mayor debido a los puntos largos y el esfuerzo constante requerido, favorece a jugadores con excelente condición física, paciencia táctica y habilidad para construir puntos. La tierra batida de Roland Garros proviene de una cantera específica en el norte de Francia y se mantiene meticulosamente durante todo el torneo con equipos de groundskeepers que barren, riegan y reparan las pistas constantemente. Las marcas de bote de la pelota quedan visiblemente impresas en la superficie, lo que a veces es útil para resolver disputas sobre si una pelota fue dentro o fuera. Esta superficie única ha creado especialistas legendarios como Rafael Nadal, Björn Borg y Chris Evert, quienes dominaron Roland Garros como ningún otro torneo.'
  },
  {
    question: '¿Qué se puede hacer en Roland Garros además de ver tenis?',
    answer: 'Roland Garros ofrece una experiencia completa que va mucho más allá de simplemente ver partidos. El complejo del torneo es como una pequeña ciudad del tenis con múltiples atracciones y actividades. Puedes visitar el Museo de Roland Garros, que exhibe la historia del torneo y del tenis francés con trofeos históricos, raquetas antiguas, videos de partidos legendarios y exposiciones interactivas (incluido con tu entrada). La Village, una zona comercial y de entretenimiento, ofrece múltiples restaurantes con cocina francesa de calidad, desde brasseries casuales hasta opciones gourmet, bares de champagne, heladerías, y vendedores de crêpes. La tienda oficial vende una amplia gama de merchandising exclusivo de Roland Garros, incluyendo toallas de tierra batida embotellada (!), ropa de marca, pelotas de tenis oficiales del torneo, y recuerdos únicos. Puedes explorar las áreas de práctica donde los jugadores entrenan (visible desde ciertas áreas), buscar autógrafos en las zonas designadas cuando los jugadores entran y salen, disfrutar de áreas con pantallas gigantes que transmiten todos los partidos en vivo, visitar zonas de patrocinadores con actividades interactivas y regalos, disfrutar de los jardines botánicos alrededor de la pista Simonne-Mathieu, hacer picnic en las áreas verdes designadas, y participar en actividades familiares si viajas con niños. La clave es llegar temprano y planear pasar el día completo para aprovechar todo lo que ofrece el complejo más allá del tenis.'
  },
  {
    question: '¿Las pistas de Roland Garros tienen techo retráctil?',
    answer: 'Actualmente, solo la pista principal Court Philippe-Chatrier tiene un techo retráctil, instalado y estrenado en 2020. Este fue un desarrollo monumental para Roland Garros, que históricamente había sido el único Grand Slam sin protección contra la lluvia en su pista principal. El techo está compuesto por 11 enormes vigas de acero que se despliegan desde los laterales del estadio y pueden cerrarse completamente en aproximadamente 15 minutos. Cuando está cerrado, crea un ambiente similar a una pista cubierta, aunque el diseño permite cierta circulación de aire para mantener las condiciones lo más cercanas posible al juego al aire libre. Las otras dos pistas principales, Suzanne-Lenglen y Simonne-Mathieu, no tienen techo retráctil y permanecen completamente al aire libre. Esto significa que los partidos en estas pistas están sujetos a retrasos o suspensiones debido a la lluvia. Todas las pistas exteriores numeradas también están completamente al aire libre. Hay planes para eventualmente instalar un techo retráctil en Court Suzanne-Lenglen, pero a partir de 2026 esto aún no se habrá completado. El techo de Philippe-Chatrier ha sido un cambio revolucionario, permitiendo que los partidos más importantes se completen sin importar el clima, algo que anteriormente causaba frecuentes interrupciones y retrasos frustrantes en el calendario del torneo.'
  },
  {
    question: '¿Cuál es la mejor pista para comprar entradas después de Philippe-Chatrier?',
    answer: 'Después de la pista principal Philippe-Chatrier, tanto Court Suzanne-Lenglen como Court Simonne-Mathieu ofrecen experiencias excelentes pero diferentes. Suzanne-Lenglen es la segunda pista más grande con casi 10,000 asientos y tradicionalmente alberga partidos de alto nivel desde la primera semana, incluyendo frecuentemente a jugadores top-10. La atmósfera aquí puede ser increíblemente eléctrica, especialmente durante partidos franceses o encuentros importantes. La vista es excelente desde prácticamente cualquier asiento y los precios son significativamente más bajos que Philippe-Chatrier para tenis de calidad similar. Court Simonne-Mathieu, la pista más nueva inaugurada en 2019, es arquitectónicamente espectacular: está semi-hundida en el suelo y rodeada por cuatro invernaderos históricos llenos de plantas, creando un ambiente único y hermoso. Con 5,000 asientos, es más íntima que las otras dos pistas principales pero aún ofrece excelentes vistas y comodidades modernas. Los partidos aquí, especialmente desde los octavos de final en adelante, son de altísimo nivel. Para el mejor valor, Suzanne-Lenglen durante cuartos de final es difícil de superar: obtienes tenis del más alto calibre a una fracción del precio de Philippe-Chatrier. Para una experiencia única y memorable, Simonne-Mathieu ofrece el ambiente más especial. Ambas pistas permiten estar más cerca de la acción que los asientos superiores de Philippe-Chatrier.'
  },
  {
    question: '¿Cómo es el ambiente en las pistas exteriores de Roland Garros?',
    answer: 'Las pistas exteriores de Roland Garros (Courts 6-14) ofrecen una experiencia de tenis completamente diferente y, según muchos aficionados, superior a las pistas principales. Con capacidades que van desde unos pocos cientos hasta 3,500 espectadores, estas pistas crean un ambiente íntimo e intenso donde realmente puedes apreciar el atletismo, la habilidad y la personalidad de los jugadores. Estás tan cerca que puedes escuchar las conversaciones entre jugadores y entrenadores, el sonido de la pelota golpeando las cuerdas, y los gruñidos de esfuerzo. La atmósfera varía enormemente: algunas pistas pueden estar prácticamente vacías para un partido de primera ronda entre jugadores fuera del top-100, mientras que otras pueden estar absolutamente repletas y ruidosas si juega un favorito local o una estrella emergente. Durante la primera semana, cuando todos los grandes nombres están jugando en diferentes pistas simultáneamente, puedes literalmente caminar de una pista donde juega un top-10 a otra pista a 50 metros de distancia donde juega otro top-10. Esta libertad de movimiento y descubrimiento es mágica. Muchos aficionados han descubierto a sus jugadores favoritos viéndolos en pistas exteriores antes de que se convirtieran en estrellas. El público en estas pistas tiende a ser más relajado, conocedor, y apasionado por el tenis puro, creando un ambiente maravillosamente auténtico que captura la esencia del deporte.'
  },

  // LOGÍSTICA
  {
    question: '¿Cómo llegar a Roland Garros en transporte público?',
    answer: 'Roland Garros es muy accesible mediante transporte público de París. La opción más directa es el metro: la estación Porte d\'Auteuil en la línea 10 (color marrón) está a solo 400 metros del estadio, aproximadamente 5 minutos a pie. Desde el centro de París (por ejemplo, Notre-Dame o Châtelet), el viaje toma unos 30-35 minutos. Alternativamente, la estación Michel-Ange Molitor en las líneas 9 y 10 está a unos 800 metros, 10 minutos caminando. Varias líneas de autobús también sirven el área: las líneas 22, 32, 52, 62, 72, 123 y PC1 tienen paradas cerca del estadio. Durante el torneo, la RATP (sistema de transporte público de París) a menudo aumenta la frecuencia de servicios en estas líneas y puede agregar servicios especiales directos desde puntos clave de la ciudad. El tranvía T10 conecta la estación Gare d\'Austerlitz con Porte d\'Auteuil, ofreciendo otra opción conveniente. Desde los aeropuertos: desde Charles de Gaulle, toma el RER B al centro de París, luego el metro línea 10 (aproximadamente 90 minutos en total). Desde Orly, toma el Orlyval hasta Antony, luego RER B y metro línea 10 (aproximadamente 75 minutos). Recomiendo comprar un pase Navigo Découverte de una semana (22.80€) o el Paris Visite pass si harás múltiples viajes, ya que son más económicos que boletos individuales. Descarga la app RATP para planificación de rutas en tiempo real.'
  },
  {
    question: '¿Hay parking disponible en Roland Garros?',
    answer: 'Sí, hay parking disponible en Roland Garros, pero con limitaciones importantes y costos significativos. El estadio tiene aparcamientos oficiales en el sitio, pero el espacio es extremadamente limitado y generalmente se reserva con mucha anticipación, especialmente para las rondas finales. El parking debe reservarse previamente a través del sitio web oficial de Roland Garros, generalmente cuando compras tus entradas, y no está garantizado incluso si tienes entrada para el torneo. El costo es de aproximadamente 30-50€ por día dependiendo de la fecha. Alternativamente, hay varios parkings públicos en los alrededores del estadio en el distrito 16 (Boulogne-Billancourt), pero estos también se llenan rápidamente durante el torneo y pueden ser caros. Honestamente, conducir a Roland Garros no es recomendable por varias razones: el tráfico en París es notoriamente complicado, el parking es caro y limitado, y podrías pasar más tiempo buscando estacionamiento que disfrutando del tenis. El transporte público es significativamente más conveniente, rápido y económico. Si absolutamente debes conducir, considera usar uno de los parkings Park & Ride en las afueras de París y luego tomar el metro hasta el estadio. Esta opción combina la conveniencia de conducir parte del camino con la facilidad del transporte público para el tramo final. Para visitantes desde fuera de París, el tren (TGV) combinado con metro es casi siempre mejor que conducir.'
  },
  {
    question: '¿Qué puedo llevar al estadio de Roland Garros?',
    answer: 'Roland Garros tiene políticas específicas sobre qué puedes y no puedes llevar al estadio. Artículos permitidos: bolsos y mochilas pequeños (máximo 40x30x20cm aproximadamente), cámaras y smartphones para fotos personales (sin flash durante el juego), botellas de agua selladas y pequeñas (hasta 75cl), snacks y comida envasada en cantidades razonables para consumo personal, gorras y sombreros para protección solar, protector solar, medicamentos personales necesarios (con receta si es posible), paraguas pequeños y plegables, y ropa de abrigo. Es importante destacar que los controles de seguridad en Roland Garros son rigurosos, similares a los de un aeropuerto, por lo que debes pasar por detectores de metal y escaneo de bolsos. Para agilizar el proceso: llega con suficiente tiempo, minimiza lo que llevas, y ten todo organizado y accesible. Durante días calurosos, una botella de agua reutilizable es esencial ya que hay fuentes por todo el complejo donde puedes rellenarla gratuitamente. Una gorra o sombrero es crucial para protegerte del sol durante las largas sesiones en pistas sin sombra. Protector solar de alta SPF es absolutamente necesario. Si prevés lluvia, un impermeable ligero plegable es mejor que un paraguas grande que puede molestar a otros espectadores. Considera llevar un cargador portátil para tu teléfono ya que lo usarás mucho para fotos, consultar órdenes de juego y mapas del complejo.'
  },
  {
    question: '¿Qué está prohibido llevar a Roland Garros?',
    answer: 'Roland Garros prohíbe estrictamente varios artículos por razones de seguridad, comodidad de otros espectadores y protección de los derechos del torneo. Artículos prohibidos incluyen: bolsos grandes, mochilas o maletas que excedan 40x30x20cm aproximadamente, equipaje de cualquier tipo, armas de cualquier clase (incluyendo navajas pequeñas), objetos peligrosos o punzantes, fuegos artificiales, bengalas o dispositivos pirotécnicos, drones o dispositivos voladores, palos de selfie y trípodes profesionales, equipos de video profesionales o cámaras con lentes desmontables (las cámaras pequeñas y smartphones están permitidos), dispositivos de grabación de audio/video profesional, botellas de vidrio, latas de aluminio, bebidas alcohólicas traídas del exterior, comida en grandes cantidades o para propósitos comerciales, banners grandes o banderas en postes, instrumentos musicales, radios portátiles, altavoces, mascotas (excepto perros de servicio debidamente certificados), bicicletas, patinetas, scooters eléctricos, sombrillas grandes de playa, sillas plegables, y cualquier objeto que los oficiales de seguridad consideren peligroso o que pueda molestar a otros espectadores. Si llegas con artículos prohibidos, deberás devolverlos a tu hotel o desecharlos; no hay servicio de guardarropas o consigna en el estadio. Los controles de seguridad son exhaustivos, así que revisa cuidadosamente lo que llevas antes de salir de tu hotel para evitar retrasos o decepciones en la entrada.'
  },
  {
    question: '¿Hay comida y bebida disponible dentro de Roland Garros?',
    answer: 'Absolutamente, Roland Garros ofrece una amplia variedad de opciones de comida y bebida, desde opciones rápidas y casuales hasta restaurantes de alta calidad. El complejo cuenta con docenas de puntos de venta que incluyen: restaurantes tradicionales franceses que sirven platos como steak-frites, ensaladas niçoise, y quiches, brasseries casuales con menús de bistro, stands de comida rápida con hamburguesas, hot dogs, y sándwiches, vendedores de crêpes dulces y saladas (una experiencia esencial), heladerías artesanales, barras de champagne y vino donde puedes disfrutar de champagne francés mientras ves tenis en pantallas, cafeterías con café de calidad y pasteles, y vendedores de snacks con frutas, yogures, y opciones saludables. Los precios varían pero generalmente son elevados (como en cualquier evento deportivo importante): espera pagar 8-12€ por un sándwich, 12-18€ por un plato principal, 5-7€ por bebidas, y 10-15€ por una copa de champagne. La calidad es generalmente buena, especialmente comparado con otros eventos deportivos, ya que Francia toma su comida en serio. Hay áreas de picnic donde puedes sentarte a comer, y muchos espectadores llevan su propia comida para ahorrar dinero. Si tienes un paquete de hospitalidad, la comida y bebida generalmente están incluidas en lounges exclusivos. Agua del grifo es gratuita en las fuentes instaladas por todo el complejo, así que lleva una botella reutilizable. Durante días calurosos, mantente hidratado constantemente.'
  },
  {
    question: '¿Se puede salir y volver a entrar a Roland Garros?',
    answer: 'Sí, puedes salir y volver a entrar a Roland Garros el mismo día usando la misma entrada, lo cual es una política muy generosa y práctica. Cuando salgas, asegúrate de que tu entrada sea sellada o marcada en la salida (el personal te pondrá un sello en la mano o muñeca), y deberás mostrar tanto tu entrada como tu identificación al volver a entrar. Esta política de reentrada es fantástica por varias razones: puedes salir a almorzar en uno de los muchos restaurantes del vecindario circundante (generalmente con mejor relación calidad-precio que dentro del estadio), explorar el área local del distrito 16 o el cercano Bois de Boulogne, volver a tu hotel para descansar o cambiarte entre la sesión de día y tarde, o simplemente tomar un descanso del ambiente a veces abrumador del estadio. Muchos espectadores expertos adoptan un enfoque de "dos sesiones": llegan temprano por la mañana para ver tenis, salen a media tarde para almorzar y relajarse, luego regresan para la sesión de tarde/noche. Esto es especialmente sensato durante días calurosos cuando permanecer bajo el sol todo el día puede ser agotador. Solo asegúrate de conservar tu entrada original y permitir tiempo suficiente para las colas de seguridad al volver a entrar, especialmente durante períodos pico como primera hora de la tarde cuando muchos espectadores llegan para la sesión vespertina.'
  },
  {
    question: '¿Hay wifi gratuito en Roland Garros?',
    answer: 'Sí, Roland Garros ofrece wifi gratuito en todo el complejo del estadio, lo cual es extremadamente útil para los espectadores. La red se llama "Roland-Garros" y puedes conectarte de forma gratuita, aunque generalmente necesitas proporcionar una dirección de email para registrarte la primera vez. La calidad y velocidad del wifi varían dependiendo de tu ubicación en el estadio y cuántas personas estén conectadas simultáneamente. Durante momentos pico con el estadio lleno, la conexión puede ser más lenta o menos confiable. El wifi es particularmente útil para: consultar el orden de juego actualizado y horarios de partidos en tiempo real a través de la app oficial de Roland Garros, ver resultados en vivo de otros partidos mientras ves uno en persona, compartir fotos y experiencias en redes sociales, comunicarte con amigos si te separas en el complejo, y usar servicios de mensajería. Recomiendo descargar la app oficial de Roland Garros antes de tu visita, ya que proporciona mapas del complejo, horarios actualizados, resultados en vivo, y otra información esencial. También considera descargar mapas offline de París en Google Maps en caso de que necesites navegar sin conexión. Si planeas usar mucho el internet durante tu visita (streaming, video calls, etc.), tu plan de datos móvil puede ser más confiable que el wifi del estadio, así que considera tener roaming activado o una tarjeta SIM europea.'
  },
  {
    question: '¿Roland Garros es accesible para personas con movilidad reducida?',
    answer: 'Sí, Roland Garros está comprometido con la accesibilidad y ha realizado mejoras significativas en los últimos años para acomodar a personas con movilidad reducida o discapacidades. El estadio ofrece: plazas de parking reservadas cerca de las entradas principales para titulares de tarjetas de discapacidad (deben reservarse con anticipación), entradas accesibles con rampas y ascensores en todas las áreas principales del complejo, asientos especialmente designados para sillas de ruedas en todas las pistas principales y muchas pistas exteriores (estos asientos están ubicados estratégicamente para proporcionar excelentes vistas), acompañantes de personas con movilidad reducida pueden entrar gratuitamente o con descuento significativo (verifica al comprar entradas), baños accesibles ubicados por todo el complejo, caminos pavimentados y nivelados entre la mayoría de las pistas principales, personal de asistencia disponible para ayudar con navegación y necesidades especiales, y préstamo gratuito de sillas de ruedas en el sitio (sujeto a disponibilidad, por orden de llegada). Al comprar entradas, hay una opción específica para solicitar asientos accesibles donde puedes indicar tus necesidades. Es altamente recomendable hacer esto con anticipación en lugar de presentarte el día del evento. Para información detallada y asistencia personalizada, puedes contactar al servicio de accesibilidad de Roland Garros directamente antes de tu visita. Si bien el complejo ha mejorado enormemente, algunas áreas más antiguas o pistas exteriores pueden tener accesibilidad limitada, así que planifica con anticipación y consulta el mapa del estadio para identificar las rutas más accesibles entre las pistas que quieres visitar.'
  },

  // EXPERIENCIA
  {
    question: '¿Cuánto tiempo debo planear pasar en Roland Garros?',
    answer: 'Para aprovechar realmente la experiencia de Roland Garros, deberías planear pasar al mínimo un día completo, idealmente de 6 a 8 horas o más. Las puertas generalmente abren a las 10:00-10:30 AM y el juego puede continuar hasta las 11:00 PM o más tarde, especialmente con la iluminación ahora disponible en Philippe-Chatrier. Un día típico podría ser: llegar a las 10:30-11:00 AM cuando abren las puertas para evitar multitudes, explorar el complejo durante 30-60 minutos (museo, tiendas, orientación general), comenzar a ver tenis en las pistas exteriores alrededor de las 11:00 AM, alternar entre 2-3 pistas diferentes durante la mañana viendo sets completos o parciales, almorzar en el sitio entre 1:00-2:00 PM, continuar viendo tenis durante la tarde, tal vez mudarse a una pista principal si tienes entrada o ver en las pantallas grandes, tomar un descanso para café/snacks a media tarde, quedarse para los partidos de tarde/noche que a menudo tienen la mejor atmósfera, salir alrededor de las 8:00-9:00 PM o más tarde si hay un partido nocturno emocionante. Si solo tienes medio día, prioriza la sesión de día (11:00 AM-5:00 PM) durante la primera semana cuando hay más partidos simultáneos, o la sesión de tarde/noche (3:00 PM-cierre) para mejor ambiente y potencialmente mejor tenis en las rondas posteriores. Muchos fanáticos dedicados pasan literalmente 10-12 horas en el complejo y ven una docena de partidos. La clave es llevar calzado cómodo, protección solar, y estar preparado para caminar mucho entre pistas.'
  },
  {
    question: '¿Puedo ver a los jugadores entrenar en Roland Garros?',
    answer: 'Sí, uno de los grandes placeres de asistir a Roland Garros es la oportunidad de ver a los mejores jugadores del mundo entrenando. Hay varias formas de hacerlo: primero, Roland Garros tiene pistas de práctica designadas que son visibles desde ciertas áreas del complejo, y los jugadores entrenan allí antes y después de sus partidos. Estas sesiones de práctica suelen ocurrir temprano en la mañana (8:00-10:00 AM) antes de que comiencen los partidos del día, o a última hora de la tarde después de completar sus partidos. Las pistas de práctica tienen gradas limitadas o áreas de pie desde donde puedes observar, y es por orden de llegada, así que llega temprano si quieres un buen lugar. Ver entrenamientos es fascinante porque puedes observar la preparación, rutinas, dinámica entre jugador y entrenador, y ver golpes a máxima velocidad sin la presión del partido. Los jugadores a menudo están más relajados y accesibles durante la práctica. Durante las rondas de clasificación (previas al torneo principal), muchos partidos de clasificación se juegan en pistas con acceso público incluido en el ground pass, lo que es otra oportunidad para ver jugadores que pronto podrían estar en el top-100. Algunos jugadores también dan clínicas o sesiones de entrenamiento abiertas como parte de eventos promocionales. Verifica el programa oficial para estas actividades especiales. Un consejo: si quieres ver entrenar a un jugador específico, sigue sus redes sociales o pregunta al personal de Roland Garros sobre los horarios de práctica, aunque estos no siempre se publican públicamente por razones de seguridad y privacidad.'
  },
  {
    question: '¿Puedo conseguir autógrafos de los jugadores en Roland Garros?',
    answer: 'Sí, es posible obtener autógrafos de los jugadores en Roland Garros, aunque requiere paciencia, timing y algo de suerte. Las mejores oportunidades son en áreas designadas llamadas "zones d\'autographes" o zonas de autógrafos, ubicadas estratégicamente cerca de las entradas/salidas de vestuarios y áreas de práctica. Después de completar sus partidos o sesiones de práctica, muchos jugadores pasan por estas zonas y firman autógrafos para los fans que esperan. Sin embargo, los jugadores no están obligados a detenerse y depende completamente de su disposición, tiempo disponible y resultado de su partido (los jugadores que acaban de perder pueden comprensiblemente no estar de humor para interactuar). Consejos para maximizar tus posibilidades: llega temprano y espera pacientemente en las zonas de autógrafos, los jugadores menos conocidos o emergentes suelen ser más accesibles y tienen más tiempo, las primeras rondas son mejores que las finales cuando los jugadores están bajo mayor presión, las sesiones de práctica matutinas son excelentes oportunidades ya que los jugadores están relajados, trae un marcador apropiado y algo para firmar (pelota de tenis oficial, programa, foto), sé respetuoso y educado, mantén solicitudes breves especialmente si hay mucha gente esperando, y considera que las estrellas más grandes (top-10) son difíciles de alcanzar y generalmente están rodeadas de seguridad. Algunos jugadores son legendariamente accesibles (Roger Federer era famoso por esto), mientras que otros raramente firman autógrafos. La experiencia puede variar enormemente, pero la posibilidad de interactuar brevemente con tus ídolos del tenis es una de las cosas mágicas de asistir en persona.'
  },
  {
    question: '¿Qué ropa debo llevar a Roland Garros?',
    answer: 'La ropa apropiada para Roland Garros depende completamente del clima, que puede variar significativamente a finales de mayo y principios de junio en París. Aquí está una guía completa: Para días soleados y calurosos (común durante el torneo): ropa ligera y transpirable, camisetas de manga corta o tirantes, pantalones cortos, faldas o vestidos ligeros, calzado cómodo para caminar (zapatillas deportivas o sandalias con soporte, evita tacones), gorra o sombrero de ala ancha para protección solar (absolutamente esencial), gafas de sol, y protector solar de alto SPF. Para días frescos o nublados: capas que puedas añadir/quitar fácilmente, una chaqueta ligera o sudadera, pantalones largos o jeans, y posiblemente un pañuelo o bufanda ligera. Para posible lluvia: impermeable ligero plegable o poncho, paraguas pequeño plegable. Consideraciones generales: lleva calzado extremadamente cómodo ya que caminarás varios kilómetros durante el día entre pistas, evita ropa demasiado formal (Roland Garros es bastante casual excepto en áreas VIP), colores claros son mejores para días calurosos, una pequeña mochila o bolso crossbody es ideal para llevar tus pertenencias, considera llevar una muda de ropa si planeas estar desde la mañana hasta la noche. No hay código de vestimenta estricto para espectadores en Roland Garros (a diferencia de Wimbledon), así que la comodidad debe ser tu prioridad. Dicho esto, los parisinos tienden a vestir con estilo incluso para eventos deportivos, así que no te sorprendas de ver gente bien vestida. Lo más importante: prepárate para el clima cambiante y prioriza la comodidad sobre el estilo.'
  },
  {
    question: '¿Necesito hablar francés para disfrutar Roland Garros?',
    answer: 'No, definitivamente no necesitas hablar francés para disfrutar plenamente de Roland Garros, aunque algunas frases básicas pueden mejorar tu experiencia. El torneo es un evento internacional masivo que atrae a fans de todo el mundo, y el personal está acostumbrado a tratar con visitantes no francófonos. Toda la señalización importante en el estadio es bilingüe (francés/inglés), la app oficial de Roland Garros está disponible en múltiples idiomas incluido español, los menús en restaurantes y puntos de venta generalmente tienen versiones en inglés o imágenes, el personal en puntos de información, taquillas y áreas de servicio al cliente generalmente habla inglés, y muchos vendedores y trabajadores del estadio tienen conocimientos básicos de inglés. Dicho esto, aprender algunas frases básicas en francés será muy apreciado y puede hacer las interacciones más agradables: "Bonjour" (hola), "Merci" (gracias), "S\'il vous plaît" (por favor), "Excusez-moi" (disculpe), "Parlez-vous anglais/espagnol?" (¿habla inglés/español?), "L\'addition, s\'il vous plaît" (la cuenta, por favor), y "Où est...?" (¿dónde está...?). Los parisinos aprecian enormemente cuando los visitantes hacen un esfuerzo, incluso mínimo, para hablar francés. Una sonrisa y educación básica van muy lejos. En general, el lenguaje no debería ser una barrera significativa para disfrutar el tenis, explorar el estadio, o satisfacer tus necesidades básicas. Si planeas explorar París más allá del torneo, considera descargar una app de traducción como Google Translate que funciona offline.'
  },
  {
    question: '¿Cuál es el mejor momento de la semana para visitar Roland Garros?',
    answer: 'El "mejor" momento depende de lo que busques en tu experiencia, ya que cada fase del torneo ofrece algo diferente. Primera semana, primeros días (lunes-miércoles): Ventajas: máximo número de partidos simultáneos (más de 100 jugadores compitiendo), precios de entradas más bajos, menos multitudes, oportunidad de descubrir nuevos jugadores, ground pass ofrece increíble valor. Desventajas: menos intensidad ya que son primeras rondas, posibles sorpresas tempranas pueden significar que estrellas sean eliminadas pronto. Primera semana, últimos días (jueves-domingo): Un equilibrio perfecto - aún muchos partidos, pero comenzando a tener más intensidad en tercera ronda, precios razonables, buen ambiente. Segunda semana, octavos y cuartos de final (lunes-miércoles): Ventajas: tenis de altísima calidad, todos los partidos son importantes, excelente atmósfera, pero precios significativamente más altos y mucho más difícil conseguir entradas. Semifinales (jueves-viernes): Tenis del máximo nivel, cuatro mejores jugadores/jugadoras restantes, ambiente eléctrico, pero entradas muy caras y difíciles de conseguir. Finales (sábado-domingo): La experiencia definitiva pero también la más cara y difícil de conseguir. Para la mejor combinación de valor, cantidad de tenis y atmósfera, recomiendo martes-jueves de la primera semana. Para la mejor calidad de tenis sin el costo extremo de las finales, cuartos de final (martes-miércoles de segunda semana) en Suzanne-Lenglen ofrece increíble valor. Si es tu primera vez, cualquier día de la primera semana te dará una experiencia auténtica de Roland Garros a precio razonable.'
  },

  // HISTORIA
  {
    question: '¿Quién ha ganado más títulos en Roland Garros?',
    answer: 'Rafael Nadal de España posee el récord absoluto de títulos individuales en Roland Garros con asombrosos 14 campeonatos (2005-2008, 2010-2014, 2017-2020, 2022), una hazaña que probablemente nunca será igualada en la historia del deporte. Su dominio en la tierra batida de París es tan completo que a menudo se le llama "El Rey de la Tierra Batida" y Roland Garros es considerado "su casa". El récord de Nadal incluye solo tres derrotas en Roland Garros en toda su carrera (más de 110 victorias), dando lugar a un porcentaje de victorias superior al 97% en el torneo. En la categoría femenina, Chris Evert de Estados Unidos tiene el récord con 7 títulos (1974-1975, 1979-1980, 1983, 1985-1986), aunque Steffi Graf de Alemania también ganó 6 títulos. Otros grandes campeones masculinos incluyen a Björn Borg de Suecia con 6 títulos consecutivos (1974-1981), un récord que parecía intocable hasta Nadal, y en la era más antigua, Max Decugis de Francia ganó 8 títulos pero en la era amateur antes de 1925. En dobles, las estadísticas son diferentes con varios jugadores teniendo múltiples títulos. El dominio de Nadal en Roland Garros es particularmente notable porque coincidió con una era dorada del tenis masculino que incluye a Federer, Djokovic y Murray, haciendo sus logros aún más impresionantes. Su habilidad para ganar en tierra batida, combinada con su intensidad competitiva y acondicionamiento físico excepcional, ha creado una dinastía sin precedentes en un solo torneo de Grand Slam.'
  },
  {
    question: '¿Cuántos títulos de Roland Garros tiene Rafael Nadal?',
    answer: 'Rafael Nadal ha ganado 14 títulos de Roland Garros (hasta 2024), estableciendo un récord que muchos consideran el logro deportivo más dominante en la historia del tenis, y posiblemente de cualquier deporte. Sus victorias llegaron en: 2005 (su primer título a los 19 años, derrotando a Mariano Puerta), 2006 (derrotando a Roger Federer), 2007 (derrotando a Federer nuevamente), 2008 (derrotando a Federer sin perder un set, uno de los desempeños más dominantes jamás vistos), 2010 (regresando después de una derrota sorpresa en 2009, derrotando a Soderling), 2011 (derrotando a Federer), 2012 (derrotando a Djokovic en una final épica), 2013 (derrotando a Ferrer), 2014 (derrotando a Djokovic), 2017 (tras dos años sin ganar, derrotando a Wawrinka), 2018 (derrotando a Thiem), 2019 (derrotando a Thiem nuevamente), 2020 (igualando el récord de Grand Slams de Federer, derrotando a Djokovic), y 2022 (a los 36 años, derrotando a Ruud, extendiendo su récord). Durante esta increíble racha, Nadal perdió solo tres partidos en Roland Garros: contra Robin Soderling en 2009 (cuarta ronda), Novak Djokovic en 2015 (cuartos de final), y Djokovic nuevamente en 2021 (semifinales). Su récord de victorias-derrotas en Roland Garros es aproximadamente 112-3, un porcentaje de victoria del 97.4%. Nadal anunció que 2024 sería probablemente su última participación en Roland Garros, marcando el fin de una era sin precedentes.'
  },
  {
    question: '¿Cuándo ganó el primer español Roland Garros?',
    answer: 'El primer español en ganar Roland Garros fue Manuel Santana, quien triunfó en 1961 derrotando al italiano Nicola Pietrangeli en la final. Santana fue un pionero del tenis español y ayudó a establecer a España como una potencia en el tenis mundial, particularmente en tierra batida. Después de su victoria en 1961, Santana ganó Roland Garros nuevamente en 1964, esta vez derrotando a Pietrangeli nuevamente en la final. Santana también fue el primer español en ganar Wimbledon (1966) y el US Open (1965), completando una carrera extraordinariamente exitosa que lo convirtió en el primer superstar del tenis español. Su estilo de juego elegante y su comportamiento caballeroso en la pista lo convirtieron en un héroe nacional en España y ayudaron a popularizar el tenis en el país. Después de Santana, España produjo una serie de campeones en Roland Garros: Andrés Gimeno (1972), Sergi Bruguera (1993, 1994), Carlos Moyá (1998), Albert Costa (2002), Juan Carlos Ferrero (2003), y por supuesto Rafael Nadal quien comenzó su dominio histórico en 2005. En el tenis femenino, Arantxa Sánchez Vicario fue la primera española en ganar Roland Garros, logrando tres títulos (1989, 1994, 1998). Más recientemente, Garbiñe Muguruza ganó en 2016. El legado de Santana estableció la tradición española en tierra batida que culminó con el dominio histórico de Nadal.'
  },
  {
    question: '¿Cuál ha sido el partido más largo de la historia de Roland Garros?',
    answer: 'El partido más largo en la historia de Roland Garros fue el épico encuentro de primera ronda en 2004 entre Fabrice Santoro de Francia y Arnaud Clément, también de Francia, que duró asombrosas 6 horas y 33 minutos. El marcador final fue 6-4, 6-3, 6-7(5), 3-6, 16-14 a favor de Santoro. Este maratón comenzó un día, fue suspendido por la oscuridad, y se completó al día siguiente. El quinto set solo duró más de 3 horas, con Santoro finalmente ganando 16-14 en una era cuando Roland Garros no usaba tie-break en el set decisivo (ahora implementan tie-break a 6-6 en el quinto set). Lo extraordinario de este partido fue que ambos jugadores eran franceses, jugaban estilos completamente diferentes (Santoro era conocido por su juego de toque y variedad, mientras que Clément era un corredor defensivo incansable), y la batalla de voluntades en el quinto set fue legendaria. Otros partidos memorablemente largos incluyen la semifinal de 2012 entre Djokovic y Nadal que duró 4 horas y 37 minutos, y varios encuentros que han excedido las 5 horas. Los partidos largos en Roland Garros son particularmente agotadores debido a la superficie de tierra batida, que hace que los puntos sean más largos y el desgaste físico sea mayor. El récord de Santoro-Clément probablemente se mantendrá indefinidamente ahora que el tie-break a 6-6 en el quinto set ha sido implementado, aunque aún es posible ver batallas épicas de 5+ horas cuando dos gladiadores se niegan a rendirse en la tierra batida de París.'
  },
  {
    question: '¿Cuándo se inauguró el estadio Roland Garros?',
    answer: 'El Stade Roland-Garros fue inaugurado oficialmente en mayo de 1928, específicamente para albergar la defensa de la Copa Davis por parte de Francia. El contexto histórico es fascinante: en 1927, el equipo francés conocido como "Los Cuatro Mosqueteros" (Jean Borotra, Jacques Brugnon, Henri Cochet y René Lacoste) ganó la Copa Davis por primera vez en la historia de Francia, derrotando a Estados Unidos. Esto significaba que Francia tendría que defender el título en casa en 1928, pero no tenían un estadio adecuado para el evento. El Stade Français, un club deportivo prominente, decidió construir un nuevo estadio y darle el nombre de Roland Garros, el aviador héroe de guerra que había sido miembro del club. El estadio se construyó en un tiempo récord de menos de un año en terrenos cerca del Bois de Boulogne en el oeste de París. El diseño original era mucho más modesto que el complejo actual, con la pista principal teniendo capacidad para aproximadamente 10,000 espectadores. Francia exitosamente defendió la Copa Davis en el nuevo estadio en 1928, y continuó haciéndolo hasta 1932, creando una edad dorada para el tenis francés. El French Open (que ya se había estado jugando desde 1891 en diferentes ubicaciones) se trasladó permanentemente a este nuevo estadio en 1928. Desde entonces, el complejo ha sido expandido y renovado numerosas veces, con las actualizaciones más recientes completadas entre 2018-2020 agregando la nueva pista Simonne-Mathieu y el techo retráctil en Philippe-Chatrier, pero el alma histórica del lugar se ha preservado.'
  }
]

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <FAQSchema faqs={faqData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Preguntas Frecuentes Roland Garros 2026
            </h1>
            <p className="text-xl text-orange-100">
              Más de 40 respuestas detalladas a todas tus dudas sobre el French Open
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Índice de Contenidos</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#general" className="text-orange-600 hover:text-orange-700 font-medium">
                → General (6 preguntas)
              </a>
              <a href="#entradas" className="text-orange-600 hover:text-orange-700 font-medium">
                → Entradas y Precios (12 preguntas)
              </a>
              <a href="#estadio" className="text-orange-600 hover:text-orange-700 font-medium">
                → Estadio y Pistas (7 preguntas)
              </a>
              <a href="#logistica" className="text-orange-600 hover:text-orange-700 font-medium">
                → Logística y Acceso (9 preguntas)
              </a>
              <a href="#experiencia" className="text-orange-600 hover:text-orange-700 font-medium">
                → Experiencia y Consejos (6 preguntas)
              </a>
              <a href="#historia" className="text-orange-600 hover:text-orange-700 font-medium">
                → Historia y Récords (5 preguntas)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* GENERAL */}
            <div id="general" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-orange-500 pb-3">
                Preguntas Generales
              </h2>
              <div className="space-y-8">
                {faqData.slice(0, 6).map((faq, index) => (
                  <div key={index} className="border-l-4 border-orange-300 pl-6 py-2">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ENTRADAS */}
            <div id="entradas" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-orange-500 pb-3">
                Entradas y Precios
              </h2>
              <div className="space-y-8">
                {faqData.slice(6, 18).map((faq, index) => (
                  <div key={index} className="border-l-4 border-orange-300 pl-6 py-2">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ESTADIO */}
            <div id="estadio" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-orange-500 pb-3">
                Estadio y Pistas
              </h2>
              <div className="space-y-8">
                {faqData.slice(18, 25).map((faq, index) => (
                  <div key={index} className="border-l-4 border-orange-300 pl-6 py-2">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* LOGÍSTICA */}
            <div id="logistica" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-orange-500 pb-3">
                Logística y Acceso
              </h2>
              <div className="space-y-8">
                {faqData.slice(25, 34).map((faq, index) => (
                  <div key={index} className="border-l-4 border-orange-300 pl-6 py-2">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPERIENCIA */}
            <div id="experiencia" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-orange-500 pb-3">
                Experiencia y Consejos
              </h2>
              <div className="space-y-8">
                {faqData.slice(34, 40).map((faq, index) => (
                  <div key={index} className="border-l-4 border-orange-300 pl-6 py-2">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* HISTORIA */}
            <div id="historia" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-orange-500 pb-3">
                Historia y Récords
              </h2>
              <div className="space-y-8">
                {faqData.slice(40).map((faq, index) => (
                  <div key={index} className="border-l-4 border-orange-300 pl-6 py-2">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para Planificar tu Visita a Roland Garros 2026?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Ahora que tienes todas las respuestas, explora nuestras guías detalladas sobre entradas, calendario y cómo llegar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/entradas-roland-garros-2026"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors inline-block"
            >
              Ver Guía de Entradas
            </a>
            <a
              href="/calendario-roland-garros-2026"
              className="bg-orange-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-800 transition-colors border-2 border-white inline-block"
            >
              Consultar Calendario 2026
            </a>
          </div>
        </div>
      </section>

      {/* Additional Info Box */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-900">¿No encuentras tu pregunta?</h3>
            <p className="text-gray-700 mb-4">
              Esta página cubre las 45 preguntas más frecuentes sobre Roland Garros 2026. Si tienes alguna duda específica que no está cubierta aquí,
              te recomendamos consultar nuestras guías detalladas sobre temas específicos como entradas, calendario, o logística.
              También puedes visitar el sitio web oficial de Roland Garros (rolandgarros.com) para información adicional y actualizaciones en tiempo real.
            </p>
            <p className="text-gray-700">
              Recuerda que la información sobre Roland Garros 2026 se actualizará a medida que se acerque el torneo,
              así que vuelve a visitar esta página regularmente para obtener la información más reciente.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
