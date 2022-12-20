<script setup lang="ts">
    import { Routes } from '@/router/enum/Routes';
    import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="hero-section">
        <div class="fade"></div>
        <div class="overlay">
            <div class="overlay-content">
                <div class="overlay-content-text">
                    <p class="hero-header home-view-header">New from<br />La Marzocco</p>
                    <p class="hero-body">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                        ligula eget dolor. Aenean massa.
                    </p>
                </div>
                <RouterLink
                    :to="{ name: Routes.PRODUCT_LIST, query: { brand: 'lamarzocco' } }"
                    class="btn-cta"
                >
                    <div class="btn-outline-white">LEARN MORE</div>
                    <i class="bi bi-arrow-right-circle-fill link-hover-to-secondary"></i>
                </RouterLink>
            </div>
            <i class="bi bi-chevron-compact-down arrow"></i>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '@/scss/common/layout';
    @use '@/scss/common/breakpoints';
    .hero-section {
        position: relative;
        display: block;
        background: url('@/assets/images/hero.jpg');
        background-size: cover;
        background-position: 50% 25%;
        margin: 0 calc(layout.$spacing-default * -1);
        aspect-ratio: 1;

        @include breakpoints.from-sm() {
            aspect-ratio: 4 / 3;
        }

        @include breakpoints.from-md() {
            height: calc(100vh - layout.$navigation-height-from-md);
            aspect-ratio: unset;
        }

        .fade {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.7) 100%);
        }

        .overlay {
            position: absolute;
            display: flex;
            align-items: flex-end;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: white;
            padding: layout.$spacing-default;

            @include breakpoints.from-md() {
                padding: 4rem;
            }

            .overlay-content {
                position: relative;
                display: flex;
                align-items: flex-end;
                width: 100%;

                .overlay-content-text {
                    .hero-header {
                        @include breakpoints.from-md() {
                            margin-bottom: 2rem;
                        }
                    }

                    .hero-body {
                        display: none;
                        margin: 0;

                        @include breakpoints.from-md() {
                            display: block;
                            max-width: 70%;
                        }
                    }
                }

                .btn-cta {
                    margin-left: auto;

                    .bi {
                        font-size: 2.5rem;
                        @include breakpoints.from-sm() {
                            font-size: 3rem;
                        }
                    }

                    .btn-outline-white {
                        display: none;
                    }

                    @include breakpoints.from-md() {
                        .bi {
                            display: none;
                        }

                        .btn-outline-white {
                            display: block;
                        }
                    }
                }
            }

            .arrow {
                display: none;
                position: absolute;

                @include breakpoints.from-md() {
                    display: block;
                    left: 50%;
                    bottom: 0;
                    transform: translateX(-50%);
                    font-size: 4rem;
                    pointer-events: none;
                }
            }
        }
    }
</style>
