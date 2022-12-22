<script setup lang="ts">
    import { RouterLink, useRoute } from 'vue-router';
    import { Routes } from '@/router/enum/Routes';
    import navData from '@/assets/data/navigation.json';
    import { useBasketStore } from '@/stores/BasketStore';
    import { watch, ref } from 'vue';
    import { useEventListener } from '@vueuse/core';
    import { debounce as _debounce } from 'lodash';

    const basket = useBasketStore();
    const route = useRoute();
    const showIndicator = ref<boolean>(false);
    const isNavOpen = ref<boolean>(false);
    const hideNavBar = ref<boolean>(false);
    let scrollPrev = 0;

    watch(basket, () => {
        if (route.name !== Routes.BASKET && basket.itemsTotal > 0) showIndicator.value = true;
    });

    useEventListener(window, 'resize', () => (isNavOpen.value = false));

    useEventListener(
        window,
        'scroll',
        _debounce(() => {
            hideNavBar.value = !(window.scrollY === 0 || window.scrollY < scrollPrev);
            scrollPrev = window.scrollY;
        }, 10)
    );
</script>

<template>
    <div class="navigation">
        <div class="top-wrapper">
            <RouterLink :to="{ name: Routes.HOME }">
                <img src="../../assets/graphics/logo-opt.svg" class="logo" />
            </RouterLink>
        </div>
        <div class="nav-bar-wrapper" :class="{ hide: hideNavBar }">
            <nav class="nav-bar">
                <RouterLink
                    v-for="(item, index) in navData"
                    :key="index"
                    :to="{ name: item.route || Routes.NOT_IMPLEMENTED }"
                    class="nav-bar-item"
                    :class="{ 'link-not-implemeted': !item.route }"
                    :title="item.route ? item.title : 'Not implemented'"
                >
                    {{ item.title }}
                </RouterLink>
            </nav>
        </div>
        <div class="basket">
            <Transition name="indicator" :duration="1700" @after-enter="showIndicator = false">
                <div class="indicator" v-show="showIndicator">Item added</div>
            </Transition>
            <RouterLink :to="{ name: Routes.BASKET }">
                <i class="bi bi-bag icon"></i>

                <div class="basket-items">
                    <span class="count">{{ basket.itemsTotal }}</span>
                </div>
            </RouterLink>
        </div>
        <div class="nav-list-wrapper">
            <button @click="isNavOpen = !isNavOpen" class="link link-black btn-nav-list">
                <i v-if="!isNavOpen" class="bi bi-list"></i>
                <i v-else class="bi bi-x"></i>
            </button>
            <nav class="nav-list" :class="{ 'is-open': isNavOpen }">
                <RouterLink
                    v-for="(item, index) in navData"
                    :key="index"
                    :to="{ name: item.route || Routes.NOT_IMPLEMENTED }"
                    class="nav-list-item"
                    :class="{ 'is-open': isNavOpen, 'link-not-implemeted': !item.route }"
                    :title="item.route ? item.title : 'Not implemented'"
                    @click="isNavOpen = false"
                >
                    {{ item.title }}
                </RouterLink>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/scss/common/layout';
    @use '@/scss/common/color';
    @use '@/scss/common/breakpoints';
    @use '@/scss/common/animation';
    .navigation {
        position: fixed;
        display: block;
        width: 100%;
        z-index: 50;

        .nav-list-wrapper {
            position: absolute;
            width: 100%;
            top: 0;
            z-index: 10;
            pointer-events: none;

            @include breakpoints.from-md() {
                display: none;
            }

            .btn-nav-list {
                font-size: 2.4rem;
                padding: 1rem layout.$spacing-default;
                pointer-events: all;
            }

            .nav-list {
                display: none;
                flex-direction: column;
                pointer-events: all;

                &.is-open {
                    display: flex;
                }

                .nav-list-item {
                    flex-basis: 100%;
                    background-color: white;
                    padding: 1rem layout.$spacing-default;
                    font-weight: 700;

                    &:hover {
                        background-color: color.$secondary;
                        color: white;
                    }

                    &.is-open {
                        opacity: 0;
                        transform: translateX(-500px);
                    }

                    @include animation.with-delay(4, 200, 60) using ($step, $duration, $delay) {
                        &.is-open {
                            &:nth-child(#{$step}) {
                                animation: $duration ease $delay forwards anim-item-in;
                            }
                        }
                    }

                    @keyframes anim-item-in {
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                }
            }
        }

        .top-wrapper {
            position: relative;
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 1rem 0;
            background: white;

            .logo {
                margin-top: -0.4rem;
                width: 180px;

                @include breakpoints.from-md() {
                    width: 260px;
                }
            }
        }

        .nav-bar-wrapper {
            display: none;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 0.5rem 0 1.3rem 0;
            background: white;

            @include breakpoints.from-md() {
                display: flex;

                &.hide {
                    transition: all 0.3s ease;
                    opacity: 0;
                    transform: translateY(-20px);
                }
            }

            .nav-bar {
                display: flex;
                gap: 5rem;
                font-size: 0.9rem;
                font-weight: 700;
                text-transform: uppercase;

                .nav-bar-item {
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        z-index: 1;
                        left: 0;
                        bottom: -6px;
                        width: 100%;
                        height: 4px;
                        background-color: black;
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                        pointer-events: none;
                        transition: all 0.2s ease;
                        transform-origin: center;
                        transform: scaleX(0);
                    }

                    &:hover {
                        color: color.$secondary;
                        &::after {
                            transform: scaleX(100%);
                        }
                    }

                    &.router-link-active {
                        &::after {
                            transform: scaleX(100%);
                        }
                    }
                }
            }
        }

        .basket {
            position: absolute;
            top: 1rem;
            right: layout.$spacing-default;

            @include breakpoints.from-md() {
                top: layout.$spacing-default;
                right: layout.$spacing-default;
            }

            &:hover {
                .icon {
                    color: color.$secondary;
                }
            }

            .icon {
                font-size: 40px;

                @include breakpoints.from-md() {
                    font-size: 50px;
                }
            }

            .basket-items {
                $size: 25px;
                position: absolute;
                top: 4px;
                right: -8px;
                width: $size;
                height: $size;

                clip-path: circle(calc($size / 2));
                background-color: color.$secondary;

                .count {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: $size;
                    height: $size;
                    color: white;
                    font-weight: 700;
                    text-align: center;
                    line-height: $size;
                }
            }

            .indicator {
                position: absolute;
                background-color: color.$secondary;
                clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0 100%, 0 0);
                color: white;
                font-weight: 700;
                text-transform: uppercase;
                padding: 0.6rem 1.5rem 0.6rem 1rem;

                $adjust: 300px;
                $translateY: 3px;
                $translateX: calc(-100% + $adjust);
                left: calc($adjust * -1);
                transform: translate($translateX, $translateY);

                &.indicator-enter-active {
                    animation: indicator-anim 0.25s ease 3 alternate;
                }

                &.indicator-enter-active,
                &.indicator-leave-active {
                    transition: opacity 0.2s ease;
                }

                &.indicator-enter-from,
                &.indicator-leave-to {
                    opacity: 0;
                }

                @keyframes indicator-anim {
                    from {
                        transform: translate(calc($translateX - 20px), $translateY);
                    }
                }
            }
        }
    }
</style>
