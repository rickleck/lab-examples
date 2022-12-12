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
                    <p class="hero-header">New from<br />La Marzocco</p>
                    <p class="hero-body">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                        ligula eget dolor. Aenean massa.
                    </p>
                </div>
                <RouterLink :to="{ name: Routes.PRODUCT_LIST }" class="btn-cta btn-outline-white">
                    learn more
                </RouterLink>
            </div>
            <div class="arrow material-icons-outlined">expand_more</div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '@/scss/common/layout';
    .hero-section {
        position: relative;
        width: 100%;
        height: calc(100vh - layout.$navigation-height);
        background: url('https://links.imagerelay.com/cdn/2615/ql/11c33b8aea3f4b53ae544f2403afb8f6/La-Marzocco-GS3-White-Walnut-Espresso-Machine-Eureka-Atom-75-Grinder-13.jpg');
        background-size: cover;

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
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: white;
            padding: 4rem;

            display: flex;
            align-items: flex-end;

            .overlay-content {
                position: relative;
                display: flex;
                align-items: flex-end;
                width: 100%;

                .overlay-content-text {
                    max-width: 30%;
                    .hero-header {
                        font-size: 4.5rem;
                        line-height: 4.3rem;
                        margin: 0 0 2rem 0;
                        font-weight: 700;
                    }

                    .hero-body {
                        margin: 0;
                    }
                }

                .btn-cta {
                    margin-left: auto;
                }
            }

            .arrow {
                position: absolute;
                left: 50%;
                bottom: 20px;
                transform: translateX(-50%);
                font-size: 4rem;
                pointer-events: none;
            }
        }
    }
</style>
