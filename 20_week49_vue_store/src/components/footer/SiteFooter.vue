<script setup lang="ts">
    import footerData from '@/assets/data/footer.json';
</script>

<template>
    <div class="bg-color-black body-side-padding">
        <footer class="footer container-responsive">
            <!-- Menu -->
            <div class="menu">
                <div
                    v-for="(item, index) in footerData.menu"
                    :key="index"
                    class="link link-white item"
                >
                    {{ item }}
                </div>
            </div>
            <div class="right-wrapper">
                <!-- Social -->
                <div class="social">
                    <i
                        v-for="(item, index) in footerData.social"
                        :key="index"
                        class="bi link link-white"
                        :class="['bi-' + item]"
                    ></i>
                </div>

                <!-- Legal -->
                <div class="legal">
                    {{ footerData.legal }}
                </div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/scss/common/color';
    @use '@/scss/common/breakpoints';

    .footer {
        display: grid;
        grid: auto / 1fr 1fr;

        @include breakpoints.from-sm() {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        background-color: black;
        color: white;
        padding: 2rem 0;

        .menu {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.3rem;
            font-size: 0.9rem;
            font-weight: 700;

            @include breakpoints.from-sm() {
                flex-direction: row;
                justify-content: center;
                gap: 1rem;
            }

            .item {
                display: block;
                white-space: nowrap;
            }
        }

        .right-wrapper {
            display: flex;
            flex-wrap: wrap;

            @include breakpoints.from-sm() {
                flex-direction: column;
                gap: 1rem;
            }

            .social {
                flex-basis: 100%;
                display: grid;
                grid: auto auto / auto auto;
                gap: 0 1.3rem;
                justify-content: end;
                font-size: 1.5rem;

                @include breakpoints.from-sm() {
                    display: flex;
                    justify-content: center;
                }
            }

            .legal {
                flex-basis: 100%;
                align-self: flex-end;
                font-size: small;
                text-align: right;

                @include breakpoints.from-sm() {
                    align-self: center;
                    text-align: center;
                }
            }
        }
    }
</style>
