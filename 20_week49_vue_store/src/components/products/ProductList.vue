<script setup lang="ts">
    import { Routes } from '@/router/enum/Routes';
    import { useShopStore } from '@/stores/ShopStore';
    import BackButton from '@/components/common/BackButton.vue';

    const shop = useShopStore();
    const products = shop.inventory.sortedBy(['brand', 'model']);
</script>
<template>
    <div class="product-list container-responsive">
        <BackButton />
        <div class="list">
            <RouterLink
                v-for="product in products"
                :key="product.id"
                :to="{ name: Routes.PRODUCT_DETAILS, params: { id: product.id } }"
                class="product-list-item"
            >
                <div class="image">
                    <img :src="product.image" alt="" />
                </div>
                <div class="texts">
                    <p class="brand">{{ product.brand }}</p>
                    <p class="model">{{ product.model }}</p>
                    <div class="divider"></div>
                    <p class="description">{{ product.description.short }}</p>
                    <p class="price">
                        {{ product.price.amount.toLocaleString() + ' ' + product.price.currency }}
                    </p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/scss/common/color';
    @use '@/scss/common/layout';
    .product-list {
        .list {
            max-width: layout.$list-max-width;
            margin: 3rem auto 0 auto;
            .product-list-item {
                display: flex;
                margin-bottom: 1rem;

                &:hover {
                    .brand,
                    .model,
                    .description,
                    .price {
                        transform: translateX(10px);
                        color: color.$secondary !important;
                    }
                }

                .image {
                    margin-right: 1rem;

                    img {
                        width: 200px;
                        height: 200px;
                        object-fit: cover;
                    }
                }

                $transition: all 0.2s ease;

                .texts {
                    padding: 3rem 0 0 0;
                    flex: 1;

                    .brand {
                        font-weight: 700;
                        font-size: 1.2rem;
                        text-transform: uppercase;
                        margin-bottom: 0.5rem;
                        transition: $transition;
                    }

                    .model {
                        text-transform: uppercase;
                        margin-bottom: 0.1rem;
                        transition: $transition;
                    }

                    .divider {
                        border-top: 1px solid rgb(192, 192, 192);
                        margin-bottom: 0.5rem;
                    }

                    .description {
                        margin-bottom: 0.7rem;
                        transition: $transition;
                    }

                    .price {
                        font-weight: 700;
                        color: grey;
                        transition: $transition;
                    }
                }
            }
        }
    }
</style>
