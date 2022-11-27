<template>
    <div class="user-login">
        <div ref="inner" class="container-inner">
            <header class="header">
                <h2 class="header-text">{{ data.login }}</h2>
                <button
                    class="btn-close hover-generic--light"
                    @click="UserStore.displayLogin = false"
                >
                    <i class="bi bi-x-circle"></i>
                </button>
            </header>
            <form class="form" v-on:submit.prevent="UserStore.logIn(username, password)">
                <label class="input-label" for="username">{{ data.username }}</label>
                <input
                    ref="input"
                    class="input-text"
                    type="text"
                    name="username"
                    id="username"
                    v-model="username"
                    required
                />
                <label class="input-label" for="password">{{ data.password }}</label>
                <input
                    class="input-text"
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                    required
                />
                <input class="btn-generic input-submit" type="submit" :value="data.submit" />
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { UserStore } from '@/stores/UserStore';
    import { onClickOutsideLauncher } from '@/composables/onClickOutsideLauncher';
    import data from '@/data/login.json';

    const username = ref<string>('');
    const password = ref<string>('');
    const input = ref<HTMLInputElement | null>(null);
    const inner = ref<HTMLElement | null>(null);

    onClickOutsideLauncher(inner, 'login', () => (UserStore.displayLogin = false));

    onMounted(() => {
        input.value?.focus();
    });
</script>

<style scoped lang="scss">
    @use '@/scss/common/variables/colors';
    @use '@/scss/common/variables/layout';
    @use '@/scss/common/utils/breakpoints';

    .user-login {
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(colors.$dark, 0.5);
        padding: 0 layout.$default-spacing;

        display: flex;
        justify-content: center;
        align-items: center;

        .container-inner {
            background-color: colors.$light;
            width: 500px;

            .header {
                display: flex;
                width: 100%;
                background-color: colors.$primary;
                color: colors.$light;
                padding: 1rem layout.$default-spacing;
                .header-text {
                    margin: 0;
                }
                .btn-close {
                    font-size: 1.7rem;
                    margin-left: auto;
                }
            }

            .form {
                display: flex;
                flex-direction: column;
                font-size: inherit;
                color: colors.$dark;
                padding: layout.$default-spacing;

                .input-label {
                    display: block;
                    flex-basis: 100%;
                    font-weight: 700;
                    margin-bottom: 0.3rem;
                    color: colors.$primary-dark;
                }

                .input-text {
                    flex-basis: 100%;
                    outline: 1px solid colors.$primary-dark;
                    padding: 0.5rem;
                    margin-bottom: 1rem;

                    &:focus {
                        outline-color: colors.$secondary-light;
                    }
                }

                .input-submit {
                    align-self: flex-end;
                    &:focus {
                        background-color: colors.$primary-dark;
                    }
                }
            }
        }
    }
</style>
