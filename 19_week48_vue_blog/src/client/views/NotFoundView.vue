<template>
    <div class="page-grid not-found-view">
        <aside>
            <HomeButton />
        </aside>
        <section class="message">
            <h1 class="header">404</h1>
            <p>Page not found</p>
        </section>
    </div>
</template>

<script setup lang="ts">
    import HomeButton from '../components/common/HomeButton.vue';
</script>

<style scoped lang="scss">
    @use '../scss/common/variables/layout';
    .not-found-view {
        padding-top: layout.$default-spacing;
        .message {
            padding-top: 4rem;

            .header {
                font-size: 3rem;
                margin-bottom: 0.5rem;
            }
        }
    }
</style>
