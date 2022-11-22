<script setup lang="ts">
    import { ref } from 'vue';
    import { useEventListener } from '@vueuse/core';
    import LogoSvg from '../common/graphics/LogoSvg.vue';
    import data from '../../data/navigation.json';

    const isListOpen = ref<boolean>(false);

    function toggleList(forceClose: boolean = false): void {
        forceClose ? (isListOpen.value = false) : (isListOpen.value = !isListOpen.value);
    }

    function onBtnToggle(): void {
        toggleList();
    }

    useEventListener(window, 'resize', () => {
        toggleList(true);
    });
</script>

<template>
    <div class="navigation">
        <nav>
            <div class="bar">
                <a class="btn-logo" :href="data.logo.url" target="_blank">
                    <LogoSvg :width="90" />
                    <p class="logo-text">Shuttle<span class="trademark">&trade;</span></p>
                </a>
                <button @click="onBtnToggle" :class="{ 'is-open': isListOpen }" class="btn-toggle">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <ul :class="{ 'is-open': isListOpen }" class="list">
                <li v-for="page in data.pages" class="list-item">
                    <a>{{ page.title }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss">
    @use '../../scss/common/variables/colors';
    @use '../../scss/common/variables/layout';
    @use '../../scss/common/utils/breakpoints';

    .navigation {
        display: block;
        background-color: colors.$dark;
        width: 100%;
        z-index: 1;
        //position: fixed;

        nav {
            @include breakpoints.from-md {
                display: flex;
                flex-direction: row;
            }
        }
    }

    .bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: layout.$navigation-height;
        padding: 0 layout.$body-side-padding 0 2rem;

        .btn-logo {
            display: flex;
            align-items: center;
            margin-right: 0.5rem;

            .logo-text {
                display: flex;
                align-items: flex-start;
                color: colors.$light;
                font-size: 1.8rem;
                font-weight: 700;
                margin: 0 0 0.5rem 0.5rem;

                .trademark {
                    font-size: 1.4rem;
                }
            }

            &:hover {
                .logo-text {
                    color: colors.$secondary;
                }

                &:deep(.logo-svg) {
                    .fill-color {
                        fill: colors.$secondary;
                    }

                    .stroke-color {
                        stroke: colors.$secondary;
                    }
                }
            }
        }

        .btn-toggle {
            cursor: pointer;

            div {
                width: 35px;
                height: 5px;
                background: colors.$light;
                pointer-events: none;

                &:nth-child(2) {
                    margin: 6px 0;
                }
            }

            &:hover {
                div {
                    background: colors.$secondary;
                }
            }

            &.is-open {
                div {
                    background: colors.$secondary;
                }
            }

            @include breakpoints.from-md {
                display: none;
            }
        }
    }

    .list {
        display: none;
        list-style: none;
        padding: 0;
        margin: 0;

        @include breakpoints.from-md {
            display: flex;
            align-items: center;
            //margin-left: auto;
            margin-right: 3rem;
        }

        .list-item {
            color: colors.$light;
            font-weight: 700;
            cursor: pointer;
            white-space: nowrap;

            @include breakpoints.from-md {
                margin-right: 2rem;
                padding: 0;
            }

            a {
                display: block;
                padding: 1.5rem 0 1.5rem 2rem;

                &:hover {
                    background: colors.$secondary;
                }

                @include breakpoints.from-md {
                    padding: 0;
                    &:hover {
                        text-decoration: underline;
                        color: colors.$secondary;
                        background: none;
                    }
                }
            }
        }

        &.is-open {
            display: block;
        }
    }
</style>
