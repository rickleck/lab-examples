<script setup lang="ts">
    import { Routes } from '@/router/enum/Routes';
    import { useShopStore } from '@/stores/ShopStore';
    import { RouterLink } from 'vue-router';

    const shop = useShopStore();
    const brand = 'ROCKET';
    const collection = shop.inventory.filterBy('brand', brand);
</script>

<template>
    <section class="grid-section view-padding-bottom">
        <div class="container-responsive">
            <p class="grid-header">Discover {{ brand.toLowerCase() }}</p>
            <div class="grid">
                <RouterLink
                    v-for="product in collection"
                    :key="product.id"
                    class="grid-item"
                    :to="{ name: Routes.PRODUCT_DETAILS, params: { id: product.id } }"
                >
                    <img class="image" :src="product.image" :title="product.brand" />
                    <p class="product-name">
                        <span class="brand">{{ product.brand + ' ' }}</span>
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
    .grid-section {
        padding-top: 7rem;
        position: relative;

        .grid-header {
            font-size: 4.5rem;
            line-height: 4.3rem;
            font-weight: 700;
            margin: 0;
            text-align: center;
            text-transform: capitalize;
        }
        .grid {
            display: grid;
            grid: auto auto / auto auto;
            gap: layout.$spacing-default;

            .grid-item {
                position: relative;

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
                    position: absolute;
                    bottom: layout.$spacing-default;
                    right: layout.$spacing-default;
                    transition: all 0.2s ease;
                    margin: 0;

                    .brand {
                        font-weight: 700;
                    }
                }
            }
        }
    }
</style>
