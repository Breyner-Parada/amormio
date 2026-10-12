// ✏️ Personaliza aquí todo el contenido de la landing.
// Para las fotos: copia tus imágenes en /public/photos y pon la ruta, ej: "/photos/1.jpg"

export const config = {
	name: 'Mi Amor Precioso 💖',
	from: 'Tu Principe Azul 💙',
	pageTitle: 'Para Ti Mi Princesa',

	// Fecha en que empezó su historia (año-mes-día)
	startDate: '2023-06-12T20:00:00',

	// Música de fondo: copia tu canción en /public/music/cancion.mp3
	// Suena al abrir el sobre. Si el archivo no existe, el botón de música no aparece.
	music: {
		src: '/music/cancion.mp3',
		volume: 0.5,
	},

	envelopeHint: 'Toca el sobre',
	letterText: 'Para Ti Mi Princesa',

	hero: {
		eyebrow: 'Hecho con todo mi corazón para',
		subtitle: 'Una pequeña historia de lo mucho que te amo.',
	},

	story: [
		{
			date: 'El comienzo',
			title: 'Un sticker que lo cambió todo',
			text: 'El 5 de noviembre de 2022 te envié un pequeño sticker por Instagram, sin saber que ese simple gesto era el primer latido de algo inmenso. Pasó el tiempo, y el 7 de abril de 2023 me armé de valor para escribirte otra vez. Ahí, entre mensajes y nervios bonitos, comenzó nuestra historia.',
		},
		{
			date: 'Nuestra primera cita',
			title: 'Nervios y sonrisas',
			text: 'Después de seguir hablando y de convencerte de que nos viéramos, me diste el visto bueno, y no te imaginas los nervios y la felicidad que sentí cuando me dijiste que sí, amor. Fue el 14 de abril de 2023 cuando por fin nos vimos por primera vez. Fuimos a comer pizza, pero antes, mientras iba a recogerte, no podía dejar de pensar en ti: en cómo me veía, en si te iba a gustar, mil pensamientos cruzaron mi mente. Y cuando llegó el momento, te vi y me perdí por completo en tu belleza.',
		},
		{
			date: 'Hoy',
			title: 'Cada día contigo',
			text: 'Así como recuerdo nuestra primera cita, recuerdo el día en que te pedí que fueras mi novia: el 12 de junio de 2023, de noche, sentados en un parque. Quizás no era el lugar más perfecto, pero a mí solo me importaba estar contigo, y me llené de valor para decirte lo que realmente sentía. Cuando escuché tu respuesta, no te imaginas la alegría inmensa que invadió mi corazón. Sabía que ese era el comienzo de una historia llena de luchas y altibajos, pero sobre todo de amor y de elegirnos mutuamente, cada día. Te amo con todas las fuerzas de mi corazón, amor.',
		},
	],

	// Si src es null se muestra un espacio con "Tu foto aquí"
	photos: [
		{ src: '/photos/primer_recuerdo.jpg' as string | null, caption: 'Nuestro primer recuerdo' },
		{ src: '/photos/dia_que_no_olvido.jpg' as string | null, caption: 'Ese día que no olvido' },
		{ src: '/photos/tu_sonrisa.jpg' as string | null, caption: 'Tu sonrisa' },
		{ src: '/photos/aventura.jpg' as string | null, caption: 'Aventuras juntos' },
		{ src: '/photos/mi_lugar_favorito.jpg' as string | null, caption: 'Mi lugar favorito eres tú' },
		{ src: '/photos/siempre_contigo.jpg' as string | null, caption: 'Siempre contigo' },
	],

	reasons: [
		'Tu sonrisa ilumina mis días más grises.',
		'Me haces querer ser mejor persona.',
		'Contigo hasta lo simple se vuelve especial.',
		'Tu risa es mi canción favorita.',
		'Eres mi paz y mi aventura al mismo tiempo.',
		'Porque eres tú, simplemente tú.',
	],

	// Carta que se "escribe sola" al llegar a ella. La firma sale de `from`.
	letter: {
		greeting: 'Mi amor precioso,',
		paragraphs: [
			'Hay cosas que no sé explicar con palabras, y una de ellas es lo que siento cuando pienso en ti. Es una calma muy bonita, como si el mundo entero bajara el volumen y solo quedara tu voz diciéndome que todo va a estar bien.',
			'Me enamoré de tu forma de reír, de la ternura con la que miras las cosas pequeñas, de lo fuerte y dulce que eres al mismo tiempo. Contigo descubrí que el amor de verdad no hace ruido: se queda, abraza y cuida.',
			'Quiero prometerte que voy a ser tu mejor compañía y tu lugar tranquilo; que voy a celebrar cada uno de tus logros como si fueran míos, y que cuando el día pese demasiado, voy a ser tu abrazo y tu hombro. Que voy a cuidar tus sueños tanto como cuido los míos.',
			'Sueño con viajes que aún no hemos hecho, con mañanas de domingo sin prisa, con risas que se nos queden para siempre en la memoria. Sueño con envejecer a tu lado y seguir sorprendiéndome de lo afortunado que soy.',
			'Princesa, si algún día dudas de lo mucho que vales, recuerda que hay alguien que da gracias al cielo por tu existencia. Eres lo más hermoso que me ha pasado, y todo lo que tengo para dar, quiero dártelo a ti.',
		],
		closing: 'Con todo mi amor, hoy y para siempre,',
	},

	final: {
		title: 'Te Amoooo ReGigante',
		message:
			'Gracias por ser mi hogar, mi lugar seguro y mi persona favorita. Que vengan mil historias más a tu lado.',
	},
};
