<script setup lang="ts">
    import LogoSvg from '../common/LogoSvg.vue';
</script>

<template>
    <footer class="container-responsive">
        <div class="logo">
            <LogoSvg :width="50" />
        </div>
    </footer>
</template>

<style scoped lang="scss">
    @use '../../scss/common/variables/colors';

    footer {
        color: colors.$light;
        padding: 2rem;
    }
</style>
