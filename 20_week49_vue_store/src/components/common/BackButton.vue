<template>
    <a @click="router.go(-1)" class="btn-back link link-black body-side-padding">
        <span class="icon">&lsaquo;</span>Back
    </a>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router';
    const router = useRouter();
</script>

<style scoped lang="scss">
    @use '@/scss/common/breakpoints';
    .btn-back {
        display: none;
        font-weight: 700;
        width: max-content;
        .icon {
            margin-right: 0.3rem;
            font-size: 1.5rem;
        }

        @include breakpoints.from-lg() {
            display: block;
        }
    }
</style>
