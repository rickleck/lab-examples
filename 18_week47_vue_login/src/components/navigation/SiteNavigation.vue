<template>
    <nav class="navigation">
        <!-- Logo -->
        <a class="logo" :href="data.logo.url" target="_blank">
            <LogoSvg :width="75" />
            <p class="logo-text">{{ data.logo.name }}<span class="trademark">&trade;</span></p>
        </a>

        <!-- Menu list -->
        <ul ref="list" :class="{ 'is-open': displayList }" class="list">
            <li v-for="page in data.pages" class="list-item">
                <a @click="displayList = false">{{ page.title }}</a>
            </li>
        </ul>

        <!-- Desktop: Log-in button -->
        <button
            data-launches="login"
            class="btn-outline btn-log-in"
            @click="UserStore.displayLogin = !UserStore.displayLogin"
            :class="{ 'is-selected': UserStore.displayLogin }"
            v-show="!UserStore.isLoggedIn"
        >
            {{ data.user.login }}
        </button>

        <!-- Logged in user -->
        <div ref="user" class="user" v-if="UserStore.isLoggedIn">
            <div class="user-inner" :class="{ 'is-open': displayUser }">
                <a class="hover-generic--light user-name">{{ UserStore.user.name }}</a>
                <button @click="UserStore.logOut" class="btn-outline btn-log-out">
                    {{ data.user.logout }}
                </button>
            </div>
        </div>

        <div class="btns-wrapper">
            <!-- Mobile: Log-in button/status -->
            <button
                class="hover-generic--light btn-icon"
                @click="onBtnIcon"
                :class="{ 'is-selected': UserStore.displayLogin || displayUser }"
            >
                <i data-launches="login:user" class="bi" :class="loginIcon"></i>
            </button>

            <!-- Mobile: Toggle menu list button-->
            <button
                data-launches="list"
                @click="displayList = !displayList"
                :class="{ 'is-selected': displayList }"
                class="btn-toggle"
            >
                <div></div>
                <div></div>
                <div></div>
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">
    import { computed, ref, watchEffect, type Ref } from 'vue';
    import { useEventListener, onClickOutside } from '@vueuse/core';
    import { UserStore } from '@/stores/UserStore';
    import LogoSvg from '@/components/common/graphics/LogoSvg.vue';
    import data from '@/data/navigation.json';

    const list = ref<HTMLUListElement | null>(null);
    const user = ref<HTMLElement | null>(null);
    const displayList = ref<boolean>(false);
    const displayUser = ref<boolean>(false);
    const loginIcon = computed<string>(() =>
        UserStore.isLoggedIn ? 'bi-person-fill-lock' : 'bi-person-fill'
    );

    function onBtnIcon() {
        if (!UserStore.isLoggedIn) {
            UserStore.displayLogin = !UserStore.displayLogin;
        } else {
            displayUser.value = !displayUser.value;
        }
    }

    function checkClickTarget(e: PointerEvent, launcher: string, ref: Ref) {
        const target = e.target as HTMLElement;
        if (target.dataset.launches && target.dataset.launches.includes(launcher)) return;
        ref.value = false;
    }

    watchEffect(() => {
        if (!UserStore.isLoggedIn) displayUser.value = false;
        if (UserStore.displayLogin) displayList.value = false;
    });

    onClickOutside(list, (e: PointerEvent) => {
        checkClickTarget(e, 'list', displayList);
    });

    onClickOutside(user, (e: PointerEvent) => {
        checkClickTarget(e, 'user', displayUser);
    });

    useEventListener(window, 'resize', () => {
        displayList.value = false;
        displayUser.value = false;
    });
</script>

<style scoped lang="scss">
    @use '@/scss/common/variables/colors';
    @use '@/scss/common/variables/layout';
    @use '@/scss/common/utils/breakpoints';

    .navigation {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        background-color: colors.$dark;
        padding: 0 layout.$default-spacing;
        width: 100%;

        z-index: 10;
        position: fixed;

        .logo {
            //Flex in parent
            order: 1;
            flex-basis: content;

            display: flex;
            align-items: center;
            height: layout.$navigation-height;
            margin-right: layout.$default-spacing;

            .logo-text {
                display: flex;
                color: colors.$light;
                font-size: 1.5rem;
                font-weight: 700;
                margin: 0 0 0.2rem 0.3rem;

                .trademark {
                    font-size: 1.2rem;
                }
            }

            &:hover {
                .logo-text {
                    color: colors.$secondary-light;
                }

                &:deep(.logo-svg) {
                    .fill-color {
                        fill: colors.$secondary-light;
                    }

                    .stroke-color {
                        stroke: colors.$secondary-light;
                    }
                }
            }
        }

        .list {
            //Flex in parent
            order: 4;
            flex-basis: 100%;

            display: none;
            list-style: none;
            padding: 0;
            margin: 0;

            @include breakpoints.from-md {
                //Flex in parent
                order: 2;
                flex-basis: auto;

                display: flex;
                align-items: center;
            }

            .list-item {
                margin: 0 layout.$default-spacing * -1;
                color: colors.$light;
                font-weight: 700;
                white-space: nowrap;
                cursor: pointer;

                @include breakpoints.from-md {
                    margin: 0 layout.$default-spacing 0 0;
                }

                a {
                    display: block;
                    padding: 1.5rem 0 1.5rem layout.$default-spacing;

                    &:hover {
                        background: colors.$secondary-light;
                    }

                    &:active {
                        background: colors.$secondary;
                    }

                    @include breakpoints.from-md {
                        padding: 0;

                        &:hover {
                            text-decoration: underline;
                            color: colors.$secondary-light;
                            background: none;
                        }

                        &:active {
                            color: colors.$secondary;
                        }
                    }
                }
            }

            &.is-open {
                display: block;
            }
        }

        .user {
            //Flex in parent
            order: 3;
            flex-basis: 100%;

            margin-left: auto;

            @include breakpoints.from-lg {
                //Flex in parent
                flex-basis: auto;
            }

            .user-inner {
                display: none;
                align-items: center;
                justify-content: flex-end;
                height: 100%;
                padding-bottom: layout.$default-spacing;

                @include breakpoints.from-lg {
                    display: flex;
                    padding-bottom: 0;
                }

                .user-name {
                    text-decoration: underline;
                    margin-right: layout.$default-spacing;
                }

                &.is-open {
                    display: flex;
                }
            }
        }

        .btn-log-in {
            display: none;
            @include breakpoints.from-lg {
                //Flex in parent
                order: 3;

                display: block;
                margin-left: auto;
            }
        }

        .btns-wrapper {
            //Flex in parent
            order: 2;

            display: flex;
            align-items: center;
            margin-left: auto;

            @include breakpoints.from-lg {
                display: none;
            }

            .btn-icon {
                font-size: 2.2rem;
                &:disabled {
                    opacity: 1;
                }

                @include breakpoints.from-lg {
                    display: none;
                }
            }

            .btn-toggle {
                margin-left: layout.$default-spacing;
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
                    div {
                        background: colors.$secondary-light;
                    }
                }

                &:active {
                    div {
                        background: colors.$secondary;
                    }
                }

                &.is-selected {
                    div {
                        background: colors.$secondary-light;
                    }
                }

                @include breakpoints.from-md {
                    display: none;
                }
            }
        }
    }
</style>
