<script setup lang="ts">
    import { defineProps } from 'vue';

    interface IHeroData {
        data: {
            image: string;
            header: string;
            body: string;
            callToAction: string;
        };
    }

    const props = defineProps<IHeroData>();
    const bgImage = {
        backgroundImage: 'url(' + props.data.image + ')',
    };

    function onButtonClick() {
        console.log('Clickety click!');
    }
</script>

<template>
    <section class="hero" :style="bgImage">
        <div class="container-responsive container-content">
            <div class="content">
                <h1>{{ data.header }}</h1>
                <p>{{ data.body }}</p>
                <button @click="onButtonClick">{{ data.callToAction }}</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use '../../scss/common/variables/colors';
    @use '../../scss/common/utils/breakpoints';

    .hero {
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        @include breakpoints.from-md {
            height: 65vh;
            display: flex;
            align-items: center;
        }

        .container-content {
            height: 80%;
            color: white;
            padding: 2.5rem 2rem;

            @include breakpoints.from-md {
                display: flex;
                align-items: center;
            }

            .content {
                filter: drop-shadow(5px 5px 10px rgba(black, 0.8));
                h1 {
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

                p {
                    margin: 0 0 2rem 0;
                    font-weight: 700;
                    max-width: 50%;

                    @include breakpoints.from-md {
                        margin: 0 0 3rem 0;
                    }

                    @include breakpoints.from-lg {
                        max-width: 100%;
                    }
                }

                button {
                    padding: 1rem 1.3rem;
                    color: colors.$light;
                    background-color: colors.$primary;
                    font-weight: 700;
                    font-size: 1rem;
                    cursor: pointer;

                    @include breakpoints.from-md {
                        font-size: 1.3rem;
                    }

                    &:hover {
                        background-color: colors.$primary-dark;
                    }
                }
            }
        }
    }
</style>
