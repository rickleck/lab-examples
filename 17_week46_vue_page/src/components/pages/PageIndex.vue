<script setup lang="ts">
    import pageData from '../../assets/data/page-index.json';
    import ElementHero from '../common/ElementHero.vue';
</script>
;

<template>
    <ElementHero :data="pageData.hero" />
</template>

<style scoped lang="scss"></style>
