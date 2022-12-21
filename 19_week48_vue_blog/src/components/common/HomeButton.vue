<template>
    <RouterLink :to="{ name: Routes.INDEX }" class="btn-home link-primary"
        ><i class="bi bi-caret-left-fill"></i>Home</RouterLink
    >
</template>

<script setup lang="ts">
    import { Routes } from '../../router/Router';
    import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
    .btn-home {
        display: block;
        font-weight: 700;
        width: max-content;
    }
</style>
