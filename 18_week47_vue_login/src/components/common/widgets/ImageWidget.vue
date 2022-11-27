<template>
    <div class="image-widget">
        <img :src="url" />
    </div>
</template>

<script setup lang="ts">
    interface IImageProps {
        url: string;
    }
    defineProps<IImageProps>();
</script>

<style lang="scss">
    @use '@/scss/common/variables/colors';

    .image-widget {
        background: colors.$primary-light;
        aspect-ratio: 1;
        img {
            width: 100%;
            object-fit: cover;
            display: block;
            aspect-ratio: 1;
        }
    }
</style>
