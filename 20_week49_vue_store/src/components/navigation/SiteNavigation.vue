<script setup lang="ts">
    import { RouterLink, useRoute } from 'vue-router';
    import { Routes } from '@/router/enum/Routes';
    import navData from '@/assets/data/navigation.json';
    import { useShopStore } from '@/stores/ShopStore';
    import { watch, ref } from 'vue';

    const shop = useShopStore();
    const route = useRoute();
    const showIndicator = ref<boolean>(false);

    watch(shop.basket, () => {
        if (route.name !== Routes.BASKET) showIndicator.value = true;
    });

    /**
     *
     */
    function onIndicatorIn() {
        showIndicator.value = false;
    }
</script>

<template>
    <div class="navigation">
        <div class="top-wrapper">
            <RouterLink :to="{ name: Routes.HOME }">
                <img src="../../assets/svg/logo.svg" height="70" />
            </RouterLink>
        </div>
        <div class="nav-wrapper">
            <nav class="nav-bar">
                <RouterLink
                    v-for="(item, index) in navData"
                    :key="index"
                    :to="{ name: item.route || Routes.NOT_IMPLEMENTED }"
                    class="nav-bar-link"
                    :title="item.route ? item.title : 'Not implemented'"
                >
                    {{ item.title }}
                </RouterLink>
            </nav>
        </div>
        <div class="basket">
            <Transition name="indicator" :duration="1700" @after-enter="onIndicatorIn">
                <div class="indicator" v-show="showIndicator">Item added</div>
            </Transition>
            <RouterLink :to="{ name: Routes.BASKET }">
                <span class="material-icons-outlined icon"> shopping_bag </span>
                <div class="basket-items">
                    <span class="count">{{ shop.basket.itemsTotal }}</span>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/scss/common/layout';
    @use '@/scss/common/color';
    .navigation {
        position: fixed;
        display: block;
        width: 100%;
        z-index: 50;
        background: white;
        .top-wrapper {
            position: relative;
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 1rem;
        }

        .nav-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 0.5rem 0 1.3rem 0;

            .nav-bar {
                display: flex;
                gap: 5rem;
                font-size: 0.9rem;
                font-weight: 700;
                text-transform: uppercase;

                .nav-bar-link {
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
            top: layout.$spacing-default;
            right: layout.$spacing-default;

            &:hover {
                .icon {
                    color: color.$secondary;
                }
            }

            .icon {
                font-size: 50px;
            }

            .basket-items {
                $size: 25px;
                position: absolute;
                top: 0;
                right: -4px;
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
