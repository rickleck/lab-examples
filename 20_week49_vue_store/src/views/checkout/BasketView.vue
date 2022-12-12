<script setup lang="ts">
    import BackButton from '@/components/common/BackButton.vue';
    import { Routes } from '@/router/enum/Routes';
    import { useShopStore } from '@/stores/ShopStore';

    const shop = useShopStore();
</script>

<template>
    <div class="basket-view view-padding-top view-padding-bottom container-responsive">
        <BackButton />
        <h1 class="header">Your Basket</h1>

        <div v-if="shop.basket.items.length > 0" class="basket">
            <div v-for="item in shop.basket.items" :key="item.product.id" class="basket-item">
                <img :src="item.product.image" class="image" />

                <div class="properties">
                    <div class="name">
                        <p class="brand">{{ item.product.brand }}</p>
                        <p class="model">{{ item.product.model }}</p>
                    </div>

                    <div class="remove">
                        <button
                            @click="shop.basket.remove(item.product)"
                            class="btn-remove link link-black"
                            title="Remove"
                        >
                            <span class="material-icons-outlined md-36"> delete </span>
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
                ><span class="subtotal-amount">{{
                    shop.basket.subTotal.toLocaleString() + ' €'
                }}</span>
            </div>
            <div class="checkout">
                <RouterLink
                    :to="{ name: Routes.NOT_IMPLEMENTED }"
                    class="btn-primary"
                    title="Not implemented"
                    >Check out</RouterLink
                >
            </div>
        </div>
        <div v-else class="empty">Your basket is empty.</div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/scss/common/layout';
    .basket-view {
        .header {
            text-align: center;
            margin-bottom: 3rem;
        }
        .basket {
            max-width: layout.$list-max-width;
            margin-left: auto;
            margin-right: auto;
            .basket-item {
                display: flex;
                align-items: center;
                border-bottom: 1px solid lightgray;

                .image {
                    width: 200px;
                    height: 200px;
                    object-fit: cover;
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
                    margin-left: 200px;
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
