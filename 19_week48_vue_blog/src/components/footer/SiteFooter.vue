<template>
    <div class="footer-wrapper">
        <footer class="footer container-responsive">
            <span class="legal">&copy;2022. Aqua Blog Inc.</span>
            <RouterLink to="/admin" class="admin link-light link-hover-underline"
                >Admin <i class="bi bi-person-lock"></i
            ></RouterLink>
        </footer>
    </div>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
    @use '../../scss/common/variables/layout';
    @use '../../scss/common/variables/colors';
    .footer {
        display: flex;
        align-items: center;
        padding: 1rem layout.$default-spacing;
        color: colors.$light;
        background: colors.$primary;
        .legal {
            font-size: small;
        }
        .admin {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            margin-left: auto;
            .bi {
                font-size: 1.5rem;
            }
        }
    }
</style>
