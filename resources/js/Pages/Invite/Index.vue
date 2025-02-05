<template>
    <div class="grid gap-4 mx-4">
        <div>
            <img class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="">
        </div>
        <div class="text-center">
            <h1>Momentos Especiales</h1>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
            <div v-for="(image, index) in images" :key="index">
                <img :src="image.src" :alt="image.alt" class="h-auto max-w-full rounded-lg">
            </div>
        </div>
    </div>
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
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.34 (1).jpeg', alt: 'Image 3', title: 'Image 3', description: 'Description for image 3' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.38 (2).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.33 (1).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.38 (3).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },

            ]
        };
    }
};
</script>

<style>
body {
    background-color: #f8f8f8;
}
</style>