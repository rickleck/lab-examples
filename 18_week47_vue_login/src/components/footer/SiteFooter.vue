<template>
    <div class="body-side-padding">
        <footer class="container-responsive">
            <!-- Logo -->
            <div class="logo">
                <a :href="navData.logo.url" target="_blank">
                    <div class="logo-grpx">
                        <LogoSvg :width="50" />
                    </div>
                    <p class="logo-text">{{ navData.logo.name }}&trade;</p>
                </a>
            </div>

            <!-- Menu -->
            <ul class="menu">
                <li
                    v-for="(item, index) in footerData.menu"
                    :key="index"
                    class="hover-generic--light item"
                >
                    {{ item }}
                </li>
            </ul>

            <!-- Social -->
            <div class="social">
                <i
                    v-for="(item, index) in footerData.social"
                    :key="index"
                    class="bi hover-generic--light"
                    :class="['bi-' + item]"
                ></i>
            </div>

            <!-- Legal -->
            <div class="legal">
                <p>{{ footerData.legal }}</p>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
    import LogoSvg from '@/components/common/graphics/LogoSvg.vue';
    import footerData from '@/data/footer.json';
    import navData from '@/data/navigation.json';
</script>

<style scoped lang="scss">
    @use '@/scss/common/variables/colors';
    @use '@/scss/common/utils/breakpoints';

    footer {
        display: grid;
        grid: auto / 1fr 1fr;
        grid-template-areas:
            'logo social'
            'menu social'
            'legal legal';
        color: colors.$light;
        padding: 2rem 0;

        @include breakpoints.from-md {
            grid: auto / 1fr 1fr;
            grid-template-areas:
                'logo menu'
                'social legal';
        }

        .logo {
            grid-area: logo;
            display: flex;
            flex-basis: content;
            a {
                display: flex;
                &:hover {
                    color: colors.$secondary-light;
                    &:deep(.logo-svg) {
                        .fill-color {
                            fill: colors.$secondary-light;
                        }

                        .stroke-color {
                            stroke: colors.$secondary-light;
                        }
                    }
                }

                .logo-grpx {
                    margin-right: 0.5rem;
                }

                .logo-text {
                    margin-right: 0.5rem;
                    font-size: 18px;
                    font-weight: 700;
                    pointer-events: none;
                    user-select: none;
                }
            }
        }

        .menu {
            grid-area: menu;
            font-size: 0.9rem;
            font-weight: 700;
            list-style: none;
            padding: 0.3rem 0 0 0;

            @include breakpoints.from-md {
                display: flex;
                justify-content: flex-end;
            }

            .item {
                margin-bottom: 0.6rem;
                white-space: nowrap;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
                &:last-child {
                    margin-bottom: 0;
                }

                @include breakpoints.from-md {
                    margin-bottom: 0;
                    margin-right: 1.5rem;
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }

        .social {
            grid-area: social;
            display: grid;
            grid: min-content / repeat(2, min-content);
            column-gap: 2rem;
            row-gap: 0.5rem;
            justify-content: end;
            font-size: 2.7rem;

            @include breakpoints.from-md {
                display: block;
                font-size: 1.5rem;
                margin-bottom: 0.4rem;
            }

            .bi {
                @include breakpoints.from-md {
                    margin-right: 1.3rem;
                }
            }
        }

        .legal {
            grid-area: legal;
            font-size: small;
            padding-top: 0.4rem;

            @include breakpoints.from-md {
                text-align: right;
            }
        }
    }
</style>
