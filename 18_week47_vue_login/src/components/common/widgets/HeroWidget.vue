<template>
    <section class="hero-widget body-side-padding" :style="bgImage">
        <div class="container-responsive content-wrapper">
            <div class="content">
                <h1 class="header">{{ data.header }}</h1>
                <p class="body">{{ data.body }}</p>
                <button class="btn-generic button" @click="onButtonClick">
                    {{ data.cta }}
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { computed, type CSSProperties } from 'vue';

    interface IHeroProps {
        data: {
            image: string;
            header: string;
            body: string;
            cta: string;
        };
    }

    const props = defineProps<IHeroProps>();
    const bgImage = computed<CSSProperties>(() => {
        return { backgroundImage: `url('${props.data.image}')` };
    });

    function onButtonClick(e: Event): void {
        console.log('%cClickety click!', 'color: yellow', e);
    }
</script>

<style scoped lang="scss">
    @use '@/scss/common/variables/colors';
    @use '@/scss/common/utils/breakpoints';

    .hero-widget {
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        @include breakpoints.from-md {
            min-height: 65vh;
            display: flex;
            align-items: center;
        }

        .content-wrapper {
            height: 80%;
            color: colors.$light;
            padding: 4rem 0 2.5rem 0;

            @include breakpoints.from-md {
                display: flex;
                align-items: center;
                padding: 3rem 0;
            }

            .content {
                filter: drop-shadow(5px 5px 10px rgba(black, 0.8));

                @include breakpoints.from-md {
                    margin-left: 6rem;
                }

                .header {
                    margin: 0 0 2rem 0;
                    font-size: 2rem;
                    line-height: 2rem;
                    max-width: 75%;

                    @include breakpoints.from-sm {
                        max-width: 50%;
                        font-size: 3rem;
                        line-height: 3rem;
                    }

                    @include breakpoints.from-lg {
                        font-size: 4rem;
                        line-height: 4rem;
                    }
                }

                .body {
                    margin: 0 0 2rem 0;
                    font-weight: 700;
                    max-width: 50%;

                    @include breakpoints.from-md {
                        margin: 0 0 3rem 0;
                    }
                }

                .button {
                    padding: 1rem 1.3rem;
                    font-weight: 700;
                    font-size: 1rem;
                    cursor: pointer;

                    @include breakpoints.from-md {
                        font-size: 1.3rem;
                    }
                }
            }
        }
    }
</style>
