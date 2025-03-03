<template>
    <div class="h-screen flex justify-center items-center bg-cover bg-center relative overflow-hidden"
        style="background-image: url('https://img.freepik.com/vector-gratis/tema-san-valentin-corazones-cielo-rosa_1308-38030.jpg?t=st=1731717320~exp=1731720920~hmac=4642ed233281a4f8a6b2494d2933d447c4454be386a77fe35f6f8cca2ea62df6&w=1060');">
        <div class="absolute inset-0 flex justify-center items-center">
            <div class="relative animate-float">
                <div class="absolute left-0 right-0 top-0 flex justify-center animate-float-slow">
                    <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                        <font-awesome-icon icon="heart" class="text-white text-3xl" />
                    </div>
                </div>
                <img src="/images/image_carta.png" alt="Carta con corazón" class="w-96 animate-float" />
            </div>
        </div>
        <p class="absolute bottom-20 text-red-700 text-lg font-semibold animate-fade-in">
            Nueva carta en: {{ countdown }}
        </p>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHeart);
const audio = ref(null);

export default {
    components: {
        FontAwesomeIcon,
    },
    setup() {
        const countdown = ref("1d 23h 47m 50s");

        onMounted(() => {
            let seconds = 172670; // 1 día, 23 horas, 47 minutos y 50 segundos
            setInterval(() => {
                seconds--;
                const days = Math.floor(seconds / 86400);
                const hours = Math.floor((seconds % 86400) / 3600);
                const minutes = Math.floor((seconds % 3600) / 60);
                const secs = seconds % 60;
                countdown.value = `${days}d ${hours}h ${minutes}m ${secs}s`;
            }, 1000);


            audio.value = new Audio('/music/trimmed_audio.mp3');
            audio.value.loop = true; // Configurar para que se repita
            audio.value.play().catch(error => {
                console.error('La reproducción automática fue bloqueada por el navegador:', error);
            });
        });

        return {
            countdown,
        };
    },
};
</script>

<style>
@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

@keyframes float-slow {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.animate-float-slow {
    animation: float-slow 4s ease-in-out infinite;
}

.animate-fade-in {
    animation: fade-in 2s ease-in-out;
}
</style>