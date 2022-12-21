<template>
    <div class="navigation-wrapper">
        <nav class="navigation container-responsive">
            <RouterLink :to="{ name: Routes.INDEX }" class="logo link-light">
                <LogoSvg :height="40" class="logo-svg" />
                <span class="text"><span>Aqua</span><span>Blog</span></span>
            </RouterLink>
            <EntrySearch />
        </nav>
    </div>
</template>

<script setup lang="ts">
    import { Routes } from '../../router/Router';
    import { RouterLink } from 'vue-router';
    import LogoSvg from '../common/LogoSvg.vue';
    import EntrySearch from '../entry/EntrySearch.vue';
</script>

<style scoped lang="scss">
    @use '../../scss/common/variables/layout';
    @use '../../scss/common/variables/colors';

    .navigation-wrapper {
        position: fixed;
        width: 100%;
        overflow-y: visible;
        z-index: 100;
    }

    .navigation {
        position: relative;
        display: flex;
        width: 100%;
        padding: 1rem layout.$default-spacing;
        color: colors.$light;
        background: colors.$primary;

        .logo {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            .text {
                display: flex;
                flex-direction: column;
                font-weight: 700;
                line-height: 1;
                transform: translateY(-0.2rem);
            }

            &:deep(.logo-svg) {
                .fill-color {
                    fill: colors.$light;
                }
            }

            &:hover {
                &:deep(.logo-svg) {
                    .fill-color {
                        fill: colors.$secondary-light;
                    }
                }
            }

            &:active {
                &:deep(.logo-svg) {
                    .fill-color {
                        fill: colors.$secondary;
                    }
                }
            }
        }
    }
</style>
