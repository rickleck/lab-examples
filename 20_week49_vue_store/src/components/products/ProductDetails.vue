<script setup lang="ts">
    import { pageNotFound } from '@/router/utils/PageNotFound';
    import { useShopStore } from '@/stores/ShopStore';
    import type { Product } from '@/stores/shop/Product';
    import BackButton from '@/components/common/BackButton.vue';

    const props = defineProps<{ id: string }>();
    const shop = useShopStore();
    const product = shop.inventory.productById(props.id);

    if (!product) {
        pageNotFound();
    }
</script>

<template>
    <div class="product-details container-responsive">
        <BackButton />
        <div v-if="product" class="product">
            <div class="left">
                <img :src="product.image" class="image" :alt="product.model" />
            </div>
            <div class="right">
                <div class="info">
                    <p class="brand">{{ product.brand }}</p>
                    <p class="header">{{ product.model }}</p>
                    <p class="description">{{ product.description.full }}</p>
                    <p class="id">Ref. {{ product.id }}</p>
                    <p
                        class="available"
                        :class="(product.available.status ? 'is' : 'not') + '-available'"
                    >
                        {{ product.available.msg }}
                    </p>
                    <p class="price">
                        {{ product.price.amount.toLocaleString() + ' ' + product.price.currency }}
                    </p>
                    <button
                        class="btn-outline-black btn-basket"
                        :class="{ disabled: !product.available.status }"
                        @click="shop.basket.add(product as Product)"
                    >
                        Add to basket
                    </button>
                </div>
            </div>
        </div>
        <div v-if="product" class="spec">
            <p class="header">Specification</p>

            <ul class="list">
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>
                    Dicta provident unde cumque necessitatibus laudantium at illo voluptatem,
                    cupiditate voluptatum quos, iure sunt.
                </li>
                <li>In, odit? Magni ex officiis numquam quo laboriosam!</li>
                <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</li>
                <li>
                    Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </li>
                <li>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/scss/common/color';
    .product-details {
        .header {
            font-weight: 700;
            padding-bottom: 0.2rem;
            border-bottom: 1px solid rgb(192, 192, 192);
            margin-bottom: 0.7rem;
            text-transform: uppercase;
        }
        .product {
            display: grid;
            grid: 100% / 1fr 1fr;

            .left {
                display: flex;
                justify-content: flex-end;
                .image {
                    height: 700px;
                    margin-right: 1rem;
                }
            }

            .right {
                display: flex;
                flex-direction: column;
                justify-content: center;

                .info {
                    .brand {
                        font-size: 1.5rem;
                        font-weight: 700;
                    }

                    .description {
                        white-space: pre-line;
                    }

                    .id {
                        color: grey;
                    }

                    .available {
                        font-weight: 700;
                        &.is-available {
                            color: color.$secondary;
                        }

                        &.not-available {
                            color: lightgrey;
                        }
                    }

                    .price {
                        font-size: 1.2rem;
                        font-weight: 700;
                        color: grey;
                        margin-bottom: 2rem;
                    }
                    .btn-basket {
                        align-self: flex-start;
                        margin-bottom: 4rem;
                    }
                }
            }
        }

        .spec {
            .list {
                max-width: 70%;
                margin-top: 1rem;
                li {
                    padding: 0.3rem;
                }
            }
        }
    }
</style>
