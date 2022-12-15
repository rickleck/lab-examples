<script setup lang="ts">
    import { Routes } from '@/router/enum/Routes';
    import type { Brand, Product } from '@/stores/InventoryStore';
    import { useInventoryStore } from '@/stores/InventoryStore';
    import { RouterLink } from 'vue-router';
    import { useBaseURL } from '@/router/utils/BaseUrl';

    const brand: Brand = {
        id: 'rocket',
        name: 'Rocket',
    };
    const items = useInventoryStore().filterTo((product: Product) => product.brand.id === brand.id);
</script>

<template>
    <section class="grid-section view-padding-bottom">
        <div class="container-responsive">
            <p class="grid-header home-view-header">Discover {{ brand.name }}</p>
            <div class="grid">
                <RouterLink
                    v-for="product in items"
                    :key="product.id"
                    class="grid-item"
                    :to="{ name: Routes.PRODUCT_DETAILS, params: { id: product.id } }"
                >
                    <img
                        class="image"
                        :src="useBaseURL(product.image)"
                        :title="product.brand.name"
                    />
                    <p class="product-name">
                        <span class="brand">{{ product.brand.name + ' ' }}</span>
                        <span class="model">{{ product.model }}</span>
                    </p>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '@/scss/common/layout';
    @use '@/scss/common/color';
    @use '@/scss/common/breakpoints';
    .grid-section {
        position: relative;
        padding-top: 3rem;
        padding-left: layout.$spacing-default;
        padding-right: layout.$spacing-default;

        @include breakpoints.from-md() {
            padding-top: 7rem;
        }

        .grid-header {
            text-align: center;
        }
        .grid {
            display: grid;
            grid: auto / auto;
            gap: layout.$spacing-default;
            justify-content: center;

            @include breakpoints.from-md() {
                grid: auto auto / auto auto;
            }

            .grid-item {
                position: relative;
                max-width: 400px;

                @include breakpoints.from-md() {
                    max-width: none;
                }

                &:hover {
                    .product-name {
                        color: color.$secondary;
                    }
                }
                .image {
                    width: 100%;
                    aspect-ratio: 1;
                }

                .product-name {
                    transition: all 0.2s ease;
                    margin: 0;
                    text-transform: uppercase;
                    text-align: center;

                    .brand {
                        font-weight: 700;
                    }
                }
            }
        }
    }
</style>
