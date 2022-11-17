<script setup lang="ts">
import { ref } from 'vue'

const isListOpen = ref<boolean>(false);

//TODO: close list on resize (with VueUse?)

function toggleList() {
    isListOpen.value = !isListOpen.value;
}

</script>;

<template>
    <div class="navigation">
        <nav>
            <div class="buttons">
                <a class="btn-logo" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 749.29767 392.09967">
                        <g fill-rule="evenodd">
                            <circle transform="matrix(.965569 0 0 .965569 -144.456294 -172.2663)" cx="456.58896"
                                cy="381.44971" r="203.04066" fill="#fff" />
                            <circle transform="matrix(.927673 0 0 .927673 -124.813901 -158.33237)" cx="453.5585"
                                cy="381.44971" r="193.9493" />
                        </g>
                        <g stroke="#fff">
                            <path
                                d="M107.128581 216.19879c-32.22576 16.51186-125.92025 62.2808-94.87242 124.10983s281.60591-62.91511 339.37565-89.65915l240.94097-111.85864c24.50043-9.07257 70.13659 31.09554 90.21748 16.38953s3.94102-39.10038 16.11041-57.28146 56.53757-54.23545 41.17105-75.7786-53.35544 7.29352-76.97196 8.35355-46.10704-23.52127-65.03833-13.72369-11.31831 67.69007-35.80091 81.74543-167.32272 89.2768-223.15902 112.17619-278.74055 124.36582-287.004 105.61269 43.60083-49.01044 64.64987-58.67277c-7.46927-26.62631-6.27635-29.14482-9.61879-41.41291z"
                                stroke-width="12.2" stroke-linejoin="round" />
                            <path
                                d="M57.092141 317.63003s-34.91407-1.44086-49.14909-11.48915m507.6083-131.13214s-15.14478-27.32921-20.90725-35.96541m56.68025 13.37194s-15.14478-27.32921-20.90725-35.96541m59.50443 21.84449s-17.96896-31.56549-23.73143-40.20169"
                                fill="none" stroke-width="13.9" />
                        </g>
                        <path
                            d="M107.282231 208.27486c-2.22707-.17708-4.39576.36567-6.46875 1.03125 1.53087 22.9125 7.01659 44.75695 15.75 64.84375 10.08211-4.82455 11.53192-5.82841 5.94429-19.31343-3.58009-8.64009-7.72127-45.96489-15.22554-46.56157z"
                            fill="#fff" fill-rule="evenodd" />
                    </svg>
                </a>
                <button @click="toggleList" class="btn-toggle">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <ul :class="{ 'is-open': isListOpen }" class="list">
                <li class="list-item"><a>Journeys</a></li>
                <li class="list-item"><a>Pricing</a></li>
                <li class="list-item"><a>About Us</a></li>
                <li class="list-item"><a>Press</a></li>
                <li class="list-item"><a>Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss">
@use '../../scss/common/variables/colors';
@use '../../scss/common/utils/breakpoints';

$logo-scaling: 1.3;
$logo-width: calc(75px * 1.3);
$logo-height: calc(39px * 1.3);

.navigation {
    display: block;
    padding: 1.5rem;
    background-color: colors.$dark;
    width: 100vw;
    //z-index: 1;
    //position: fixed;

    nav {
        @include breakpoints.from-md {
            display: flex;
            flex-direction: row;
        }
    }
}

.buttons {
    display: flex;
    justify-content: space-between;

    .btn-logo {
        width: $logo-width;
        height: $logo-height;
    }

    .btn-toggle {
        padding: 12px;
        outline: 2px solid colors.$light;
        cursor: pointer;

        div {
            width: 35px;
            height: 5px;
            background: colors.$light;
            pointer-events: none;

            &:nth-child(2) {
                margin: 6px 0;
            }
        }

        &:hover {
            background: rgba(colors.$light, 0.3);
        }

        @include breakpoints.from-md {
            display: none;
        }
    }
}

.list {
    display: none;
    list-style: none;
    padding: 0.5rem 0 0 0;

    @include breakpoints.from-md {
        height: $logo-height;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .list-item {
        margin-top: 0.6rem;
        color: colors.$light;
        font-weight: 700;
        cursor: pointer;

        @include breakpoints.from-md {
            margin-top: 0;
            margin-left: 2rem;
        }

        a {
            display: block;
            padding: 1rem;

            &:hover {
                background: rgba(colors.$light, 0.3);
            }

            @include breakpoints.from-md {
                padding: 0;
                background: none;

                &:hover {
                    text-decoration: underline;
                    color: colors.$secondary-light;
                    background: none;
                }
            }
        }
    }

    &.is-open {
        display: block;
    }
}
</style>
