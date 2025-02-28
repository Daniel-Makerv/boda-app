<template>
    <!-- Sección de inicio -->
    <div class="relative h-screen w-full bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <!-- Título -->
            <h1 class="text-6xl sm:text-7xl font-extrabold font-cursive text-outline-plata leading-tight">
                <span class="inline-block sm:inline font-bold text-[#CFAF5A] script-font shadow-md">Michel</span>
                <span class="text-boda-dorado">&</span>
                <span class="inline-block sm:inline font-bold text-[#CFAF5A] script-font shadow-md">Daniel</span>
            </h1>
            <p class="text-3xl sm:text-4xl mt-2 text-boda-verde_pino font-lovedbytheking text-outline-plata">¡Nos
                Casamos!</p>

            <!-- Imagen Circular -->
            <div class="w-36 h-36 sm:w-48 sm:h-48 mt-6 rounded-full overflow-hidden border-4 border-[#f4e0d6]">
                <img :src="imageUrl" alt="Boda" class="w-full h-full object-cover">
            </div>

            <!-- Sección de Fecha -->
            <div class="max-w-xs w-full mt-4 bg-[#f4e0d6] py-3 px-6 rounded-lg text-center shadow-lg">
                <p class="text-sm font-semibold text-gray-700 tracking-wide">SÁBADO</p>
                <p class="text-4xl font-bold text-[#6c4f4b]">29</p>
                <p class="text-sm text-gray-700 uppercase">DICIEMBRE</p>
                <p class="text-sm text-gray-700">A LAS 10:00</p>
            </div>

            <p class="mt-6 text-lg font-semibold">Faltan</p>
            <div class="flex space-x-3 mt-4">
                <div v-for="(time, label) in countdown" :key="label"
                    class="bg-[#f4e0d6] px-4 py-2 rounded-lg text-center text-[#6c4f4b] shadow-md">
                    <p class="text-2xl font-bold">{{ time }}</p>
                    <p class="text-xs uppercase">{{ label }}</p>
                </div>
            </div>
        </div>
    </div>
    <!--  -->
    <!-- section padres  -->
    <div class="bg-[#fdf7f0] min-h-screen flex items-center justify-center px-4 relative">

        <!-- Fondo de flores -->

        <img src="https://wedding-invite-naho-alex.vercel.app/img/votes/rings-votes.png" alt="Floraes"
            class="absolute top-0 left-0 w-full opacity-90">
        <img src="/images/flowers-bottom.png" alt="Florses" class="absolute bottom-0 right-0 w-full opacity-90">

        <div class="max-w-md w-full bg-white shadow-lg rounded-lg p-6 relative border border-[#f4e0d6]">

            <!-- Imagen Circular -->
            <div class="w-full flex justify-center">
                <div class="relative w-40 h-40">
                    <img :src="imageUrl" alt="Boda"
                        class="w-40 h-40 object-cover rounded-full border-4 border-[#f4e0d6]">
                </div>
            </div>

            <!-- Texto de la Invitación -->
            <div class="text-center mt-4">
                <h2 class="text-lg text-[#9b6a6c] font-semibold italic">Nuestra Boda</h2>
                <h1 class="text-3xl font-bold text-[#6c4f4b] script-font">Alejandra y Felipe</h1>
                <p class="text-gray-600 text-sm mt-2">
                    Tenemos el gusto de invitarte en este día tan importante de nuestras vidas.
                </p>
            </div>

            <!-- Sección de Fecha -->
            <div class="mt-4 bg-[#f4e0d6] py-2 rounded-lg text-center shadow-sm">
                <p class="text-sm font-semibold text-gray-700 tracking-wide">SÁBADO</p>
                <p class="text-4xl font-bold text-[#6c4f4b]">29</p>
                <p class="text-sm text-gray-700 uppercase">DICIEMBRE</p>
                <p class="text-sm text-gray-700">A LAS 10:00</p>
            </div>

            <!-- Dirección y Contacto -->
            <div class="text-center mt-4 text-gray-700 text-sm">
                <p>Calle Cualquiera 123, Cualquier Lugar</p>
                <p>Confirmar Asistencia al: (55) 1234-5678</p>
            </div>

            <p class="text-center text-lg text-[#9b6a6c] font-semibold mt-4 italic">¡Te esperamos!</p>

        </div>
    </div>
    <!--  -->
    <!-- Versión para ESCRITORIO -->
    <div class="hidden sm:block min-h-screen flex flex-col items-center justify-center p-8 text-center 
    bg-no-repeat bg-center bg-cover"
        style="background-image: url('https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">

        <p class="sm:text-4xl text-center mb-6 max-w-5xl glow-text-outline italic">
            El amor nunca se da por vencido, jamás pierde la fe, siempre tiene esperanzas y se mantiene firme en toda
            circunstancia.
        </p>

        <p class="text-lg sm:text-2xl italic mb-8">
            1 Corintios 13:7
        </p>

        <p class="sm:text-2xl mb-6 text-boda-plata glow-text">
            Con la bendición de Dios y nuestros queridos padres
        </p>

        <div class="flex justify-center w-full max-w-4xl ">
            <div class="w-1/2 text-center">
                <p class="sm:text-3xl mt-2">M. Isabel & Jose E.</p>
            </div>
            <div class="w-1/2 text-center">
                <p class="sm:text-3xl mt-2">M. de Jesús & Hipólito</p>
            </div>
        </div>

        <p class="sm:text-2xlmt-8 mb-4">
            Y en compañía de nuestros padrinos
        </p>

        <p class="sm:text-3xl ">
            Huberto & M. del Carmen
        </p>
    </div>

    <!-- Versión para MÓVILES -->
    <div class="block sm:hidden min-h-screen flex flex-col items-center justify-center p-8 text-center mt-4 
    bg-no-repeat bg-center bg-cover"
        style="background-image: url('/images/WhatsApp Image 2025-02-04 at 23.13.38.jpeg');">

        <p class="text-2xl text-center mb-6 max-w-5xl glow-text-outline">
            El amor nunca se da por vencido.
        </p>

        <p class="text-lg italic mb-8 text-white">
            1 Corintios 13:7
        </p>

        <p class="text-xl  mb-6 text-boda-plata glow-text text-white">
            Con la bendición de Dios y nuestros queridos padres
        </p>

        <div class="flex justify-center w-full max-w-4xl text-white  mt-3">
            <div class="w-1/2 text-center ml-4">
                <p class="text-2xl mt-2">M. Isabel & Jose E.</p>
            </div>
            <div class="w-1/2 text-center text-white ml-4">
                <p class="text-2xl mt-2 ml-4">M. de Jesús & Hipólito</p>
            </div>
        </div>

        <p class="text-xl mt-8 mb-4 text-white">
            Y en compañía de nuestros padrinos
        </p>

        <p class="text-2xl  text-white">
            Huberto & M. del Carmen
        </p>
    </div>
    <!--  -->
    <!-- card fotografies -->
    <div class="grid gap-4 mx-4 bg-pink-50 mt-4">
        <div
            class="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1609151162377-794faf68b02f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-boda-champagne font-lovedbytheking">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1
                    class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-boda-terracota md:text-3xl lg:text-6xl text-outline-blue">
                    "Momentos Especiales"</h1>
                <h2
                    class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-boda-terracota md:text-3xl lg:text-6xl text-outline-blue">
                    "Cada foto, un recuerdo eterno 💍"
                </h2>
            </div>
        </div>
        <div class="pink-50 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
            <div v-for="(image, index) in images" :key="index">
                <img :src="image.src" :alt="image.alt" class="h-auto max-w-full rounded-lg">
            </div>
        </div>
    </div>
    <!-- card ubication -->

    <!--  -->
    <!-- section code vestimenta -->
    <div class="bg-white flex flex-col items-center justify-center px-4 py-10">
        <div class="max-w-4xl text-center">
            <h2 class="text-4xl font-semibold text-pink-600 mb-4 font-lovedbytheking">Código de Vestimenta</h2>
            <p class="text-lg text-gray-700 mb-8">
                La novia ha estado esperando toda su vida para usar blanco en su boda, así que por favor, elige
                cualquier otro color para nuestro día especial.
            </p>
            <h3 class="mt-2"><strong>¡Por favor evita negro y blanco!</strong></h3>
        </div>
        <h3 class="mt-4"><strong>Recomendación:</strong></h3>

        <div class="flex flex-col md:flex-row items-center justify-center gap-10 mt-4">
            <div class="text-center">
                <img src="https://invitacionesdigitales.io/storage/customers/1f61fd3d-f0bd-43ab-884c-1f85eeb3aa30/mujeres-dresscode.png"
                    alt="Mujeres" class="w-24 h-24 mx-auto" />
                <p class="text-lg text-brown-700 font-semibold mt-2">Mujeres</p>
            </div>
            <div class="text-center">
                <img src="https://invitacionesdigitales.io/storage/customers/1f61fd3d-f0bd-43ab-884c-1f85eeb3aa30/hombres-dresscode.png"
                    alt="Hombres" class="w-24 h-24 mx-auto" />
                <p class="text-lg text-brown-700 font-semibold mt-2">Hombres</p>
            </div>
        </div>
    </div>
    <!--  -->

    <!-- luegares -->
    <div class="min-h-screen bg-pink-50 p-6">
        <h2 class="text-4xl font-semibold text-center text-pink-600 mb-4 font-lovedbytheking">
            El día de la boda
        </h2>
        <div class="space-y-10">
            <!-- Ceremonia Religiosa -->
            <div class="flex flex-col md:flex-row items-center md:items-start">
                <div class="text-center md:text-left md:w-1/3">
                    <h3 class="italic text-pink-700 text-xl font-semibold">Ceremonia religiosa</h3>
                    <p class="text-gray-600">14:00 PM - 15:00 PM</p>
                    <img src="/images/calvario.png" alt="Calvario de Metepec"
                        class="w-40 h-40 rounded-full mx-auto md:mx-0 mt-4" />
                </div>
                <div class="md:w-2/3 md:pl-10">
                    <h4 class="text-lg font-semibold">Calvario de Metepec</h4>
                    <p class="text-gray-600">Manzana 011, Espiritu Santo, 52140 Metepec, Méx. </p>
                    <div class="mt-4 space-y-2">
                        <a href="https://maps.app.goo.gl/9yFxeAfr28whpTcB7" target="_blank"
                            class="w-full md:w-auto px-4 py-2 border border-gray-400 rounded-lg text-center inline-block">
                            Usar Google Maps
                        </a>
                        <a href="https://ul.waze.com/ul?place=ChIJo1Xe9buLzYUR-aX3C8RGLmc&ll=19.25023530%2C-99.60523280&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                            target="_blank"
                            class="w-full md:w-auto px-4 py-2 border border-gray-400 rounded-lg text-center inline-block">
                            Usar Waze
                        </a>
                    </div>
                </div>
            </div>

            <hr class="border-gray-300 my-4" />

            <!-- Fiesta -->
            <div class="flex flex-col md:flex-row items-center md:items-start">
                <div class="text-center md:text-left md:w-1/3">
                    <h3 class="italic text-pink-700 text-xl font-semibold">Fiesta</h3>
                    <p class="text-gray-600">16:00 PM - 05:00 AM</p>
                    <img src="/images/salon-alvarado.png" alt="Banquete"
                        class="w-40 h-40 rounded-full mx-auto md:mx-0 mt-4" />
                </div>
                <div class="md:w-2/3 md:pl-10">
                    <h4 class="text-lg font-semibold">Salón Alvarado</h4>
                    <p class="text-gray-600">Priv. Altamirano 132, 51355 San Luis Mextepec, Méx.
                    </p>
                    <div class="mt-4 space-y-2">
                        <a href="https://maps.app.goo.gl/oMhydRM8qhDbSmPY7" target="_blank"
                            class="w-full md:w-auto px-4 py-2 border border-gray-400 rounded-lg text-center inline-block">
                            Usar Google Maps
                        </a>
                        <a href="https://ul.waze.com/ul?place=ChIJV2WlYACHzYURg-VuYvD4v-o&ll=19.30076300%2C-99.72713820&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                            target="_blank"
                            class="w-full md:w-auto px-4 py-2 border border-gray-400 rounded-lg text-center inline-block">
                            Usar Waze
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--  -->


    <!-- section questions  -->
    <div class="bg-white text-dark py-10 px-6 md:px-20">
        <div class="text-center mb-8">
            <div class="flex justify-center mb-4">
                <img src="https://invitacionesdigitales.io/storage/invitation-types/demos/boda/primer-baile.svg"
                    alt="Icono" class="h-20">
            </div>
            <h2 class="text-3xl font-semibold uppercase tracking-widest font-lovedbytheking text-pink-600">Preguntas
                Comunes</h2>
        </div>
        <div class="max-w-3xl mx-auto space-y-6 ">
            <div v-for="(faq, index) in faqs" :key="index">
                <h3 class="text-lg font-semibold">{{ index + 1 }}. {{ faq.question }}</h3>
                <p v-html="faq.answer" class="text-dark"></p>
            </div>
        </div>
    </div>
    <!--  -->
</template>




<script>
import { ref, onMounted, onUnmounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Estilos de AOS

export default {

    setup() {
        const targetDate = new Date('2025-04-26T02:00:00');
        const backgroundImage = ref('https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        const countdown = ref({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
        let interval;

        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate - now;
            if (difference > 0) {
                countdown.value = {
                    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    horas: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                    minutos: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
                    segundos: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
                };
            }
        };

        onMounted(() => {
            updateCountdown();
            interval = setInterval(updateCountdown, 1000);
        });

        onUnmounted(() => {
            clearInterval(interval);
        });

        return { countdown, backgroundImage };
    },
    data() {
        return {
            imageUrl: '/images/WhatsApp Image 2025-02-04 at 23.13.36 (1).jpeg', // Reemplaza con la URL correcta de la imagen de la pareja

            images: [
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.37.jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.33.jpeg', alt: 'Image 2', title: 'Image 2', description: 'Description for image 2' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.36 (1).jpeg', alt: 'Image 2', title: 'Image 2', description: 'Description for image 2' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.37 (5).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.35 (1).jpeg', alt: 'Image 3', title: 'Image 3', description: 'Description for image 3' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.37 (6).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.34 (3).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.38 (2).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.33 (1).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
            ],
            faqs: [
                {
                    question: "¿Cómo debo de vestirme para la ocasión?",
                    answer: "La ceremonia se celebrará en el calvario de metepec y el código de vestimenta puede ser formal, semi-formal o casual, según su preferencia."
                },
                {
                    question: "¿Existe disponibilidad de estacionamiento en el lugar del evento?",
                    answer: "Sí, contamos con estacionamiento tanto para la iglesia como para el lugar del evento."
                },
                {
                    question: "¿Es posible asistir con niños?",
                    answer: "Por supuesto! Los niños son bienvenidos a nuestra celebración."
                },
                {
                    question: "¿Cuál es el clima del evento?",
                    answer: "El clima puede ser fresco durante la noche, por lo que recomendamos llevar algo abrigador para mantenerse cómodo."
                }
            ]
        };
    },
    methods: {
        openLink(url) {
            window.open(url, "_blank");
        }
    }
};
</script>

<style scoped>
/* Fuente personalizada para los nombres */
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.script-font {
    font-family: 'Great Vibes', cursive;
}

body {
    background-color: #fbedff;
}

.font-cursive {
    font-family: 'Dancing Script', cursive;
}

.text-brown-700 {
    color: #8B4513;
}

.text-outline-blue {
    text-shadow: 1px 1px 0 #FAFAFA, -1px -1px 0 #FAFAFA, 1px -1px 0 #FAFAFA, -1px 1px 0 #FAFAFA;
}

.text-outline-plata {
    text-shadow: 1px 1px 0 #FAFAFA, -1px -1px 0 #FAFAFA, 1px -1px 0 #FAFAFA, -1px 1px 0 #FAFAFA;
}

.glow-text-outline {
    font-size: 2rem;
    color: white;
    text-shadow: 0 0 10px #E2725B, 0 0 20px #E2725B, 0 0 30px #E2725B, 0 0 40px #E2725B;
}

.glow-text {
    font-size: 2rem;
    color: white;
    text-shadow: 0 0 10px rgb(240, 240, 255), 0 0 20px rgb(213, 213, 237), 0 0 30px rgb(213, 213, 237), 0 0 40px rgb(213, 213, 237);
}
</style>