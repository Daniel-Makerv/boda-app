<template>
    <!-- section padres  -->
    <!-- Versión para ESCRITORIO -->
    <div class="hidden sm:block min-h-screen flex flex-col items-center justify-center p-8 text-center 
    bg-no-repeat bg-center bg-cover" style="background-image: url('/images/heads-fond.png');">

        <p class="sm:text-4xl text-center mb-6 font-lovedbytheking max-w-5xl glow-text-outline">
            El amor nunca se da por vencido, jamás pierde la fe, siempre tiene esperanzas y se mantiene firme en toda
            circunstancia.
        </p>

        <p class="text-lg sm:text-2xl font-lovedbytheking italic mb-8">
            1 Corintios 13:7
        </p>

        <p class="sm:text-2xl font-lovedbytheking mb-6 text-boda-plata glow-text">
            Con la bendición de Dios y nuestros queridos padres
        </p>

        <div class="flex justify-center w-full max-w-4xl font-lovedbytheking">
            <div class="w-1/2 text-center">
                <p class="sm:text-3xl mt-2">M. Isabel & Jose E.</p>
            </div>
            <div class="w-1/2 text-center">
                <p class="sm:text-3xl mt-2">M. de Jesús & Hipólito</p>
            </div>
        </div>

        <p class="sm:text-2xl font-lovedbytheking mt-8 mb-4">
            Y en compañía de nuestros padrinos
        </p>

        <p class="sm:text-3xl font-lovedbytheking">
            Huberto & M. del Carmen
        </p>
    </div>

    <!-- Versión para MÓVILES -->
    <div class="block sm:hidden min-h-screen flex flex-col items-center justify-center p-8 text-center 
    bg-no-repeat bg-center bg-cover" style="background-image: url('/images/WhatsApp Image 2025-02-04 at 23.13.38.jpeg');">

        <p class="text-2xl text-center mb-6 font-lovedbytheking max-w-5xl glow-text-outline">
            El amor nunca se da por vencido.
        </p>

        <p class="text-lg font-lovedbytheking italic mb-8 text-white">
            1 Corintios 13:7
        </p>

        <p class="text-xl font-lovedbytheking mb-6 text-boda-plata glow-text text-white">
            Con la bendición de Dios y nuestros queridos padres
        </p>

        <div class="flex justify-center w-full max-w-4xl font-lovedbytheking text-white">
            <div class="w-1/2 text-center">
                <p class="text-2xl mt-2">M. Isabel & Jose E.</p>
            </div>
            <div class="w-1/2 text-center text-white">
                <p class="text-2xl mt-2">M. de Jesús & Hipólito</p>
            </div>
        </div>

        <p class="text-xl font-lovedbytheking mt-8 mb-4 text-white">
            Y en compañía de nuestros padrinos
        </p>

        <p class="text-2xl font-lovedbytheking text-white">
            Huberto & M. del Carmen
        </p>
    </div>


    <!--  -->
    <!-- card fotografies -->
    <div class="grid gap-4 mx-4 bg-pink-50">
        <div
            class="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1609151162377-794faf68b02f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-boda-champagne font-lovedbytheking">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1
                    class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-boda-terracota md:text-3xl lg:text-6xl text-outline-blue">
                    "Momentos Especiales"</h1>
                <h2
                    class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-boda-terracota md:text-3xl lg:text-6xl text-outline-blue">
                    Cada foto, un recuerdo eterno ✨
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
    <div class="min-h-screen bg-pink-50 p-6 mt-8">
        <h2 class="text-center text-pink-600 text-3xl font-semibold uppercase mb-6  font-lovedbytheking">El día
            de la boda
        </h2>
        <hr class="border-gray-300 my-4" />

        <div class="space-y-10">
            <!-- Ceremonia Religiosa -->
            <div class="flex flex-col md:flex-row items-center md:items-start justify-between">
                <div class="text-center md:text-left md:w-1/3 md:ml-24">
                    <h3 class="italic text-pink-700 text-3xl font-semibold font-lovedbytheking">Ceremonia religiosa</h3>
                    <p class="text-gray-600 mt-2">02:00 PM - 03:00 PM</p>
                    <img src="https://www.planamayor.com.mx/wp-content/uploads/2016/11/Megaofrenda.jpg"
                        alt="Basílica de Ocotlán" class="w-40 h-40 rounded-full mx-auto md:mx-0 mt-4" />
                </div>
                <div class="md:w-2/3 md:pl-10 mt-2 xl:ml-auto lg:ml-auto md:ml-24">
                    <h4 class="text-lg font-semibold">Iglesia del Calvario Mepetec</h4>
                    <p class="text-gray-600">Manzana 011, Espiritu Santo, 52140 Metepec, Méx.</p>
                    <div class="mt-4 space-y-2">
                        <button @click="openLink('https://maps.app.goo.gl/VkfWowarEQiL5XB19')"
                            class="w-full md:w-auto px-4 py-2 border border-gray-400 rounded-lg mr-2">
                            Usar Google Maps
                        </button>
                        <button
                            @click="openLink('https://ul.waze.com/ul?place=ChIJo1Xe9buLzYUR-aX3C8RGLmc&ll=19.25023530%2C-99.60523280&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location')"
                            class="w-full md:w-auto px-4 py-2 border border-gray-400 rounded-lg">Usar Waze</button>
                    </div>
                </div>
            </div>
            <hr class="border-gray-300 my-4" />
            <div class="flex flex-col md:flex-row items-center md:items-start justify-between">
                <div class="text-center md:text-left md:w-1/3 md:ml-24">
                    <h3 class="italic text-pink-700 text-3xl font-semibold font-lovedbytheking">Fiesta</h3>
                    <p class="text-gray-600 mt-2">00:00 PM - 00:00 PM</p>
                    <img src="https://fastly.4sqi.net/img/general/200x200/46235352_TXBhUS6Oqb5Dk-RnaxQlQbFvHmxs5009Mqi842e4Nvk.jpg"
                        alt="Basílica de Ocotlán" class="w-40 h-40 rounded-full mx-auto md:mx-0 mt-4" />
                </div>
                <div class="md:w-2/3 md:pl-10 mt-2 xl:ml-auto lg:ml-auto md:ml-24">
                    <h4 class="text-lg font-semibold">Recepción - Salón Alvarado</h4>
                    <p class="text-gray-600">Priv. Altamirano 132, 51355 San Luis Mextepec, Méx.</p>
                    <div class="mt-4 space-y-2">
                        <button @click="openLink('https://maps.app.goo.gl/LrhQr2Wpc4TqsTB98')"
                            class="w-full md:w-auto px-4 py-2 border border-gray-400 rounded-lg mr-2">
                            Usar Google Maps
                        </button>
                        <button
                            @click="openLink('https://ul.waze.com/ul?place=ChIJV2WlYACHzYURg-VuYvD4v-o&ll=19.30076300%2C-99.72713820&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location')"
                            class="w-full md:w-auto px-4 py-2 border border-gray-400 rounded-lg">Usar Waze</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--  -->
    <!-- section code vestimenta -->
    <div class="bg-white flex flex-col items-center justify-center px-4 py-10">
        <div class="max-w-4xl text-center">
            <h2 class="text-4xl font-semibold text-pink-600 mb-4 font-lovedbytheking">Código de Vestimenta</h2>
            <p class="text-lg text-gray-700 mb-8">
                La novia ha estado esperando toda su vida para usar blanco en su boda, así que por favor, elige
                cualquier otro color para nuestro día especial, así como una vestimenta formal.
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


    <!-- section questions  -->
    <div class="bg-pink-50 text-dark py-10 px-6 md:px-20">
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
import { ref } from 'vue';

export default {
    data() {
        return {
            images: [
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.37.jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.33.jpeg', alt: 'Image 2', title: 'Image 2', description: 'Description for image 2' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.37 (5).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.35 (1).jpeg', alt: 'Image 3', title: 'Image 3', description: 'Description for image 3' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.37 (6).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.34 (3).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.36 (1).jpeg', alt: 'Image 2', title: 'Image 2', description: 'Description for image 2' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.38 (2).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.33 (1).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
            ],
            faqs: [
                {
                    question: "¿Cómo debo de vestirme para la ocasión?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, rerum! Repudiandae tenetur rerum cumque dolor labore repellat"
                },
                {
                    question: "¿Existe disponibilidad de estacionamiento en el lugar del evento?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, rerum! Repudiandae tenetur rerum cumque dolor labore repellat"
                },
                {
                    question: "¿Es posible asistir con niños?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, rerum! Repudiandae tenetur rerum cumque dolor labore repellat"
                },
                {
                    question: "¿Cómo será la asignación de asientos durante el evento?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, rerum! Repudiandae tenetur rerum cumque dolor labore repellat"
                },
                {
                    question: "¿Cuál es el clima del evento?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, rerum! Repudiandae tenetur rerum cumque dolor labore repellat"
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

<style>
body {
    background-color: #fbedff;
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