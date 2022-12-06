<template>
    <div class="app-inner">
        <header>
            <SiteNavigation />
        </header>
        <main class="view container-responsive">
            <RouterView v-slot="{ Component, route }">
                <Transition name="fade" mode="out-in">
                    <component :is="Component" :key="route.path" />
                </Transition>
            </RouterView>
        </main>
        <SiteFooter />
    </div>
</template>

<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import SiteFooter from './components/footer/SiteFooter.vue';
    import SiteNavigation from './components/navigation/SiteNavigation.vue';
</script>

<style scoped lang="scss">
    @use './scss/common/variables/layout';
    @use './scss/common/variables/colors';
    @use './scss/common//utils/breakpoints';
    .app-inner {
        min-height: 100vh;
        display: flex;
        flex-direction: column;

        @include breakpoints.from-md() {
            padding-bottom: layout.$default-spacing;
        }

        .view {
            flex: 1;
            padding: layout.$navigation-height layout.$default-spacing 0 layout.$default-spacing;
            background-color: colors.$white;

            @include breakpoints.from-md() {
                padding-bottom: layout.$default-spacing;
            }
        }
    }
</style>
