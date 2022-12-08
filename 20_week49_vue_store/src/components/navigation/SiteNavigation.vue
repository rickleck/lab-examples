<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="navigation">
        <div class="top-wrapper">
            <RouterLink :to="{ name: 'home' }">
                <img src="../../assets/svg/logo.svg" height="70" />
            </RouterLink>
        </div>
        <div class="nav-wrapper">
            <nav class="nav-bar">
                <span>Products</span><span>Our History </span><span>Stores </span
                ><span>Customer Service</span>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .navigation {
        position: fixed;
        display: block;
        width: 100%;
        z-index: 50;
        background: white;
        .top-wrapper {
            position: relative;
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 1rem;
        }

        .nav-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 0.5rem 0 1rem 0;

            .nav-bar {
                display: flex;
                gap: 5rem;
                font-size: 0.9rem;
                font-weight: 700;
                text-transform: uppercase;
            }
        }
    }
</style>
