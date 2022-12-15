<script setup lang="ts">
    import BackButton from '@/components/common/BackButton.vue';
    import { Routes } from '@/router/enum/Routes';
    import { useBasketStore } from '@/stores/BasketStore';
    import { useBaseURL } from '@/router/utils/BaseUrl';

    const basket = useBasketStore();
</script>

<template>
    <div class="basket-view view-padding-top view-padding-bottom container-responsive">
        <BackButton />
        <h1 class="header">Your Basket</h1>

        <div v-if="basket.items.length > 0" class="basket">
            <div v-for="item in basket.items" :key="item.product.id" class="basket-item">
                <RouterLink :to="{ name: Routes.PRODUCT_DETAILS, params: { id: item.product.id } }">
                    <img :src="useBaseURL(item.product.image)" class="image" />
                </RouterLink>

                <div class="properties">
                    <RouterLink
                        :to="{ name: Routes.PRODUCT_DETAILS, params: { id: item.product.id } }"
                        class="name link-black"
                    >
                        <p class="brand">{{ item.product.brand.name }}</p>
                        <p class="model">{{ item.product.model }}</p>
                    </RouterLink>

                    <div class="remove">
                        <button
                            @click="basket.remove(item.product)"
                            class="btn-remove link link-black"
                            title="Remove"
                        >
                            <i class="bi bi-trash3"></i>
                        </button>
                    </div>

                    <div class="quantity">
                        <label class="label-quantity" for="quantity">Qty.</label>
                        <input
                            class="input-quantity"
                            type="number"
                            name="quantity"
                            id="quantity"
                            min="1"
                            v-model="item.quantity"
                        />
                    </div>

                    <div class="price">
                        {{
                            item.product.price.amount.toLocaleString() +
                            ' ' +
                            item.product.price.currency
                        }}
                    </div>
                </div>
            </div>
            <div class="subtotal">
                <span class="subtotal-header">Subtotal:</span
                ><span class="subtotal-amount">{{ basket.subTotal.toLocaleString() + ' €' }}</span>
            </div>
            <div class="checkout">
                <button class="btn-primary link-not-implemeted" title="Not implemented">
                    Check out
                </button>
            </div>
        </div>
        <div v-else class="empty">Your basket is empty.</div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/scss/common/layout';
    @use '@/scss/common/breakpoints';
    .basket-view {
        .header {
            text-align: center;

            @include breakpoints.from-sm() {
                margin-bottom: 3rem;
            }
        }
        .basket {
            max-width: layout.$list-max-width;
            margin-left: auto;
            margin-right: auto;
            .basket-item {
                border-bottom: 1px solid lightgray;
                padding: 1rem 0;

                @include breakpoints.from-sm() {
                    display: flex;
                    align-items: center;
                    padding: 0;
                }

                .image {
                    width: 100%;
                    max-width: 300px;
                    margin-left: auto;
                    margin-right: auto;
                    @include breakpoints.from-sm() {
                        width: 200px;
                        height: 200px;
                        object-fit: cover;
                        margin: 0;
                    }
                }
                .properties {
                    width: 100%;
                    display: grid;
                    grid: auto auto / auto auto;

                    .name {
                        .brand {
                            font-weight: 700;
                            margin-bottom: 0.3rem;
                        }
                    }

                    .remove {
                        justify-self: end;
                        font-size: 1.7rem;
                    }

                    .quantity {
                        .label-quantity {
                            margin-right: 0.5rem;
                        }
                        .input-quantity {
                            font-size: inherit;
                            padding: 0.4rem;
                            border: 1px solid black;
                            width: 50px;
                        }
                    }

                    .price {
                        justify-self: end;
                        align-self: end;
                        font-weight: 700;
                    }
                }
            }

            .subtotal {
                display: flex;
                font-size: 1.3rem;
                font-weight: 700;
                margin-top: 1rem;
                margin-bottom: 3rem;

                .subtotal-header {
                    @include breakpoints.from-sm() {
                        margin-left: 200px;
                    }
                }

                .subtotal-amount {
                    margin-left: auto;
                }
            }
        }

        .checkout {
            display: flex;
            justify-content: flex-end;
        }

        .empty {
            text-align: center;
        }
    }
</style>
