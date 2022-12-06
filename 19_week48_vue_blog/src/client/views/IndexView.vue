<template>
    <div class="index-view view-padding">
        <HeroSection />
        <section class="page-grid">
            <div class="spacing"></div>
            <EntryList />
        </section>
    </div>
</template>

<script setup lang="ts">
    import HeroSection from '../components/common/HeroSection.vue';
    import EntryList from '../components/entry/EntryList.vue';
</script>
