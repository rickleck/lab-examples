<script setup lang="ts">
    import HeroWidget from '../common/widgets/HeroWidget.vue';
    import ImageWidget from '../common/widgets/ImageWidget.vue';
    import data from '../../data/page-index.json';
</script>

<template>
    <HeroWidget :data="data.hero" />
    <section class="section body-side-padding">
        <div class="container-responsive image-grid">
            <ImageWidget v-for="(item, index) in data.gallery" :key="index" :url="item" />
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use '../../scss/common/variables/colors';
    @use '../../scss/common/variables/layout';
    @use '../../scss/common/utils/breakpoints';

    .section {
        background: colors.$light;
    }

    .image-grid {
        display: grid;
        grid: auto / 1fr;
        gap: layout.$body-side-padding;
        padding: layout.$body-side-padding 0;

        @include breakpoints.from-md {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            padding: 3rem 0;
        }

        @include breakpoints.from-lg {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
