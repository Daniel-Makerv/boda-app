<template>
    <div class="grid gap-4 mx-4 bg-boda-marfil">
        <div
            class="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1609151162377-794faf68b02f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-boda-champagne bg-blend-multiply font-lovedbytheking">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-boda-terracota md:text-3xl lg:text-6xl text-outline-blue">
                    "Momentos Especiales"</h1>
                    <h2 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-boda-terracota md:text-3xl lg:text-6xl text-outline-blue">
                        Cada foto, un recuerdo eterno ✨
                    </h2>
            </div>
        </div>
        <div class="bg-boda-marfil grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
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
    background-color: #F8F4E3;
}
.text-outline-blue {
  text-shadow: 1px 1px 0 #FAFAFA, -1px -1px 0 #FAFAFA, 1px -1px 0 #FAFAFA, -1px 1px 0 #FAFAFA;
}

</style>