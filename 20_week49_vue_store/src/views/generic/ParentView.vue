<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import BackButton from '@/components/common/BackButton.vue';
</script>

<template>
    <div class="parent-view container-responsive view-padding-top view-padding-bottom">
        <BackButton />
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
    .parent-view {
        position: relative;
        .btn-back {
            position: absolute;
        }
    }
</style>
