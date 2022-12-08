<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="home-view">
        <div class="hero">
            <img
                src="https://links.imagerelay.com/cdn/2615/ql/11c33b8aea3f4b53ae544f2403afb8f6/La-Marzocco-GS3-White-Walnut-Espresso-Machine-Eureka-Atom-75-Grinder-13.jpg"
            />
            <!--img
                src="https://cdn.shopify.com/s/files/1/0247/7457/4157/files/A7R3527_1800x.jpg?v=1628101942"
                alt=""
                srcset=""
            /-->
            <div class="overlay">
                <div class="overlay-content">
                    <div class="overlay-content-text">
                        <p class="hero-header">Discover our<br />premium line</p>
                        <p class="hero-body">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa.
                        </p>
                    </div>
                    <RouterLink :to="{ name: 'products' }" class="btn-cta btn-outline">
                        learn more
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="spacing"></div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../scss/common/layout';

    .spacing {
        height: 600px;
    }
    .home-view {
        .hero {
            position: relative;
            width: 100%;
            height: calc(100vh - layout.$navigation-height);
            background-color: black;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                $mask: linear-gradient(black 60%, rgba(0, 0, 0, 0.05) 100%);
                -webkit-mask-image: $mask;
                mask-image: $mask;
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
                    display: flex;
                    align-items: flex-end;
                    width: 100%;
                    filter: drop-shadow(20px 20px 20px black);

                    .overlay-content-text {
                        max-width: 30%;
                        .hero-header {
                            font-size: 4.5rem;
                            line-height: 4.3rem;
                            margin: 0 0 2rem 0;
                        }
                    }

                    .btn-cta {
                        margin-left: auto;
                    }
                }
            }
        }
    }
</style>
