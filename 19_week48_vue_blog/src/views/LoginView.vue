<script setup lang="ts">
    import type { UserCredential } from '@firebase/auth';
    import { useUserStore } from '../stores/UserStore';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const user = useUserStore();
    const email = ref<string>('');
    const password = ref<string>('');

    function login() {
        user.login(email.value, password.value).then((res: UserCredential | void) => {
            if (res) router.push({ name: 'Admin' });
        });
    }
</script>

<template>
    <div class="login-view page-grid view-padding">
        <aside class="aside"></aside>
        <div class="login-form">
            <h1 class="header">Log In</h1>
            <form class="form" @submit.prevent="login">
                <div class="form-control">
                    <label class="label" for="email">Email</label>
                    <input
                        v-model="email"
                        class="input-text"
                        type="email"
                        name="email"
                        id="email"
                        required
                    />
                </div>
                <div class="form-control">
                    <label class="label" for="password">Password</label>
                    <input
                        v-model="password"
                        class="input-text"
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                </div>
                <div class="submit">
                    <p class="error-msg" v-if="user.errorMsg">{{ user.errorMsg }}</p>
                    <input type="submit" class="btn-primary btn-submit" value="Submit" />
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../scss/common/variables/colors';
    @use '../scss/common/utils/breakpoints';
    .login-view {
        .header {
            color: colors.$primary;
        }
        .login-form {
            max-width: 500px;

            .submit {
                display: flex;
                justify-content: center;

                .error-msg {
                    padding-right: 1rem;
                }
                .btn-submit {
                    margin-left: auto;
                    align-self: flex-start;
                }
            }
        }
    }
</style>
