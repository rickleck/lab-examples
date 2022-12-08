<script setup lang="ts">
    import { useShop } from '@/stores/Shop';

    const shop = useShop();
</script>

<template>
    <div class="product-list">
        <RouterLink
            v-for="product in shop.products"
            :key="product.id"
            :to="{ name: 'product', params: { id: product.id } }"
            class="product-list-item link-black"
        >
            <div class="image">
                <img :src="product.image" alt="" />
            </div>
            <div class="texts">
                <p class="name">{{ product.name }}</p>
                <p class="description">{{ product.description.short }}</p>
            </div>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
    .product-list {
        max-width: 850px;
        margin-left: auto;
        margin-right: auto;
        .product-list-item {
            display: flex;
            margin-bottom: 1rem;

            &:hover {
                .texts {
                    transform: translateX(10px);
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

            .texts {
                padding: 3rem 0 0 0;
                flex: 1;
                transition: all 0.2s ease;
                .name {
                    font-weight: 700;
                    padding-bottom: 0.4rem;
                    margin-bottom: 0.5rem;
                    border-bottom: 1px dotted black;
                }
            }
        }
    }
</style>
