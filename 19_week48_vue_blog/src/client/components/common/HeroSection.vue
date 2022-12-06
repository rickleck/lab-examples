<template>
    <section class="hero">
        <img src="../../assets/images/hero.jpg" />
        <div class="overlay">
            <div class="page-grid">
                <div class="spacing"></div>
                <div class="overlay-content">
                    <h1 class="header">Welcome to<br />our new blog.</h1>
                    <router-link v-if="link !== ''" :to="link"
                        ><button class="btn-primary btn-cta">Read more</button></router-link
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { apiStore } from '../../stores/ApiStore';

    const link = computed<string>(() =>
        apiStore.items.length > 0 ? '/entry/' + apiStore.items[apiStore.items.length - 1]._id : ''
    );
</script>

<style scoped lang="scss">
    @use '../../scss/common/variables/layout';
    @use '../../scss/common/utils/breakpoints';
    @use '../../scss/common/variables/colors';

    .hero {
        position: relative;
        display: block;
        margin-left: layout.$default-spacing * -1;
        margin-right: layout.$default-spacing * -1;
        margin-top: layout.$default-spacing * -1;
        margin-bottom: layout.$default-spacing * 2;
        img {
            display: block;
            width: 100%;
            object-fit: cover;
            aspect-ratio: 4 / 3;

            @include breakpoints.from-lg() {
                object-fit: auto;
                aspect-ratio: 23 / 9;
            }
        }

        .overlay {
            display: block;
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            .page-grid {
                height: 100%;
            }

            .overlay-content {
                display: flex;
                flex-direction: column;
                height: 100%;
                padding-left: layout.$default-spacing;
                padding-bottom: 3rem;
                filter: drop-shadow(10px 50px 50px white);

                .header {
                    margin-top: layout.$default-spacing;
                    margin-bottom: 1rem;
                    line-height: 1.5rem;
                    @include breakpoints.from-sm() {
                        margin-top: 5rem;
                        margin-bottom: layout.$default-spacing;
                        font-size: 2.5rem;
                        line-height: 2.3rem;
                    }

                    @include breakpoints.from-md() {
                        font-size: 3rem;
                        line-height: 2.7rem;
                    }

                    filter: drop-shadow(5px 0px 5px white);
                }

                .btn-cta {
                    align-self: flex-start;
                }
            }
        }
    }
</style>
